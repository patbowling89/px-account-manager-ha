"""Billing regression tests, independent of a running Home Assistant."""
import importlib.util
from pathlib import Path
import unittest
from datetime import date

PATH = Path(__file__).resolve().parents[1] / "custom_components/px_account_manager/model.py"
spec = importlib.util.spec_from_file_location("px_model", PATH)
model = importlib.util.module_from_spec(spec)
spec.loader.exec_module(model)


class BillingTests(unittest.TestCase):
    def setUp(self):
        self.ledger = model.Ledger(today=date(2026, 10, 26))
        self.account = self.ledger.mutate("create_account", dict(name="Test household", isFree=False, amountCents=1000, currency="GTQ", billingDay=31, nextDueDate="2026-01-31"))

    def pay(self, request_id="test-payment", **extra):
        return self.ledger.mutate("record_payment", dict(accountId=self.account["id"], requestId=request_id, expectedDue=self.account["next_due_date"], **extra))

    def test_month_end_does_not_drift(self):
        dates = ["2026-02-28", "2026-03-31", "2026-04-30", "2026-05-31"]
        for i, expected in enumerate(dates):
            self.pay(str(i))
            self.assertEqual(self.account["next_due_date"], expected)

    def test_leap_year_and_year_rollover(self):
        self.assertEqual(model.following_month("2028-01-31", 31), "2028-02-29")
        self.assertEqual(model.following_month("2028-12-31", 31), "2029-01-31")

    def test_due_today_is_not_silently_skipped(self):
        self.assertEqual(model.initial_due(26, date(2026, 10, 26)), "2026-10-26")

    def test_undo_restores_due_and_last_paid(self):
        first = self.pay("first")
        second = self.pay("second")
        self.ledger.mutate("delete_payment", {"id": second["id"]})
        self.assertEqual(self.account["next_due_date"], first["period_end"])
        self.assertEqual(self.account["last_paid_at"], first["paid_at"])
        self.ledger.mutate("delete_payment", {"id": first["id"]})
        self.assertEqual(self.account["next_due_date"], "2026-01-31")
        self.assertIsNone(self.account["last_paid_at"])

    def test_older_payment_cannot_corrupt_later_periods(self):
        self.pay("first")
        self.pay("second")
        with self.assertRaisesRegex(ValueError, "most recently"):
            self.ledger.mutate("delete_payment", {"id": "first"})
        self.assertEqual(len(self.ledger.data["plex_account_payments"]), 2)

    def test_retry_is_idempotent(self):
        request = dict(accountId=self.account["id"], requestId="same-request", expectedDue="2026-01-31")
        one = self.ledger.mutate("record_payment", request)
        two = self.ledger.mutate("record_payment", request)
        self.assertEqual(one, two)
        self.assertEqual(len(self.ledger.data["plex_account_payments"]), 1)

    def test_two_stale_tabs_cannot_pay_same_period(self):
        self.pay("first")
        with self.assertRaisesRegex(ValueError, "Due date changed"):
            self.ledger.mutate("record_payment", dict(accountId=self.account["id"], requestId="second", expectedDue="2026-01-31"))

    def test_partial_payment_does_not_claim_month_paid(self):
        with self.assertRaisesRegex(ValueError, "one full month"):
            self.pay(amountCents=500)
        self.assertEqual(self.account["next_due_date"], "2026-01-31")

    def test_day_change_keeps_arrears(self):
        self.ledger.mutate("update_account", dict(id=self.account["id"], name="Updated", isFree=False, amountCents=1200, currency="GTQ", billingDay=15))
        self.assertEqual(self.account["next_due_date"], "2026-01-31")
        self.pay()
        self.assertEqual(self.account["next_due_date"], "2026-02-15")

    def test_free_accounts_cannot_be_paid(self):
        self.account["is_free"] = True
        with self.assertRaises(ValueError):
            self.pay()

    def test_account_delete_unassigns_members_and_removes_payments(self):
        member = self.ledger.mutate("create_member", {"display_name": "Demo", "email": "demo@example.com", "account_id": self.account["id"]})
        self.pay()
        self.ledger.mutate("delete_account", {"id": self.account["id"]})
        self.assertIsNone(member["account_id"])
        self.assertEqual(self.ledger.data["plex_account_payments"], [])

    def test_duplicate_email_and_invalid_amount_rejected(self):
        self.ledger.mutate("create_member", {"display_name": "Demo", "email": "Demo@example.com"})
        with self.assertRaisesRegex(ValueError, "already exists"):
            self.ledger.mutate("create_member", {"display_name": "Another", "email": "demo@example.com"})
        for amount in [-1, True, 1.5, "100"]:
            with self.assertRaises(ValueError):
                self.ledger.mutate("create_account", dict(name="Bad", isFree=False, amountCents=amount, currency="USD", billingDay=1))

    def test_transaction_copy_cannot_change_live_data(self):
        draft = model.Ledger(self.ledger.data)
        draft.mutate("delete_account", {"id": self.account["id"]})
        self.assertEqual(len(self.ledger.data["plex_billing_accounts"]), 1)


if __name__ == "__main__":
    unittest.main()
