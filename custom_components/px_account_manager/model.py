"""Local billing model. No Home Assistant or network dependencies."""
from __future__ import annotations

from calendar import monthrange
from copy import deepcopy
from datetime import date, datetime, timezone
from uuid import uuid4
import re

TABLES = ("plex_home_members", "plex_billing_accounts", "plex_account_payments")


def now():
    return datetime.now(timezone.utc).isoformat()


def month_date(year, month, day):
    return date(year, month, min(day, monthrange(year, month)[1]))


def following_month(value, day):
    value = date.fromisoformat(value) if isinstance(value, str) else value
    month = value.month % 12 + 1
    return month_date(value.year + (value.month == 12), month, day).isoformat()


def initial_due(day, today):
    candidate = month_date(today.year, today.month, day)
    return candidate.isoformat() if candidate >= today else following_month(candidate, day)


def text(value, field, maximum=4000, nullable=False):
    if value is None and nullable:
        return None
    if not isinstance(value, str) or len(value) > maximum:
        raise ValueError(f"Invalid {field}")
    return value


def integer(value, field, minimum=0, maximum=100000000):
    if type(value) is not int or not minimum <= value <= maximum:
        raise ValueError(f"Invalid {field}")
    return value


class Ledger:
    def __init__(self, data=None, today=None):
        self.data = deepcopy(data) if data else {key: [] for key in TABLES}
        self.data.setdefault("revision", 0)
        self.today = today or date.today()

    def get(self, table, row_id):
        for row in self.data[table]:
            if row["id"] == row_id:
                return row
        raise ValueError("Record no longer exists; refresh the page")

    def account_values(self, args):
        name = text(args.get("name"), "name", 200).strip()
        if not name:
            raise ValueError("Account name is required")
        free = args.get("isFree", False)
        if type(free) is not bool:
            raise ValueError("Invalid free status")
        currency = text(args.get("currency", "USD"), "currency", 3).upper()
        if not re.fullmatch(r"[A-Z]{3}", currency):
            raise ValueError("Currency must be a three-letter code")
        return dict(name=name, is_free=free, amount_cents=0 if free else integer(args.get("amountCents"), "amount"), currency=currency, billing_day=integer(args.get("billingDay"), "billing day", 1, 31))

    def assign(self, account_id, member_ids):
        self.get("plex_billing_accounts", account_id)
        if not isinstance(member_ids, list) or len(member_ids) > 10000:
            raise ValueError("Invalid members")
        for item in member_ids:
            member = self.get("plex_home_members", item)
            if member["status"] == "removed" and member.get("account_id") != account_id:
                raise ValueError("Inactive members cannot be added to a billing account")
        for member in self.data["plex_home_members"]:
            if member["id"] in member_ids:
                member["account_id"] = account_id
            elif member.get("account_id") == account_id and member["status"] != "removed":
                member["account_id"] = None

    def mutate(self, action, args):
        """Mutate a transaction copy. Caller persists before exposing changes."""
        if action == "create_account":
            values = self.account_values(args)
            row = dict(id=str(uuid4()), owner_id="home_assistant", created_at=now(), last_paid_at=None, **values)
            row["next_due_date"] = None if row["is_free"] else initial_due(row["billing_day"], self.today)
            if args.get("nextDueDate") and not row["is_free"]:
                row["next_due_date"] = date.fromisoformat(args["nextDueDate"]).isoformat()
            self.data["plex_billing_accounts"].append(row)
            self.assign(row["id"], args.get("memberIds", []))
            return row
        if action == "update_account":
            row = self.get("plex_billing_accounts", args["id"])
            values = self.account_values(args)
            # Changing day/price must never silently erase arrears.
            if values["is_free"]:
                values["next_due_date"] = None
            elif row["is_free"] or not row["next_due_date"]:
                values["next_due_date"] = initial_due(values["billing_day"], self.today)
            if args.get("nextDueDate") and not values["is_free"]:
                values["next_due_date"] = date.fromisoformat(args["nextDueDate"]).isoformat()
            row.update(values)
            return row
        if action == "delete_account":
            row = self.get("plex_billing_accounts", args["id"])
            self.data["plex_billing_accounts"].remove(row)
            self.data["plex_account_payments"] = [p for p in self.data["plex_account_payments"] if p["account_id"] != row["id"]]
            for member in self.data["plex_home_members"]:
                if member.get("account_id") == row["id"]:
                    member["account_id"] = None
            return None
        if action == "assign_members":
            self.assign(args["accountId"], args["memberIds"])
            return None
        if action == "record_payment":
            row = self.get("plex_billing_accounts", args["accountId"])
            if row["is_free"] or row["amount_cents"] <= 0:
                raise ValueError("Set a positive monthly price before recording payment")
            request_id = text(args.get("requestId"), "payment request ID", 100)
            old = next((p for p in self.data["plex_account_payments"] if p["id"] == request_id), None)
            if old:
                if old["account_id"] != row["id"]:
                    raise ValueError("Payment request was already used")
                return old
            if args.get("expectedDue") != row["next_due_date"]:
                raise ValueError("Due date changed. Refresh before recording another month.")
            amount = integer(args.get("amountCents", row["amount_cents"]), "amount", 1)
            if amount != row["amount_cents"]:
                raise ValueError("Mark paid records one full month at the current account price")
            paid = args.get("paidAt") or now()
            parsed = datetime.fromisoformat(paid.replace("Z", "+00:00"))
            if parsed.tzinfo is None:
                raise ValueError("Payment time must include a time zone")
            start = row["next_due_date"] or self.today.isoformat()
            end = following_month(start, row["billing_day"])
            payment = dict(id=request_id, account_id=row["id"], owner_id="home_assistant", amount_cents=amount, currency=row["currency"], paid_at=paid, period_start=start, period_end=end, previous_last_paid_at=row["last_paid_at"], note=text(args.get("note"), "note", nullable=True), created_at=now())
            self.data["plex_account_payments"].append(payment)
            row.update(next_due_date=end, last_paid_at=paid)
            return payment
        if action == "delete_payment":
            payment = self.get("plex_account_payments", args["id"])
            account = self.get("plex_billing_accounts", payment["account_id"])
            payments = [p for p in self.data["plex_account_payments"] if p["account_id"] == account["id"]]
            if payments[-1]["id"] != payment["id"] or account["next_due_date"] != payment["period_end"]:
                raise ValueError("Undo the most recently recorded payment first. The due date must still match that payment.")
            account.update(next_due_date=payment["period_start"], last_paid_at=payment["previous_last_paid_at"])
            self.data["plex_account_payments"].remove(payment)
            return None
        if action == "create_member":
            row = dict(id=str(uuid4()), owner_id="home_assistant", service_type="plex", status="not_invited", invite_type="home", plex_user_id=None, plex_invite_id=None, account_id=None, plex_username=None, plex_password=None, plex_pin=None, credentials_note=None, notes=None, last_error=None, created_at=now(), updated_at=now(), email="")
            self.validate_member(row, args, creating=True)
            if row["service_type"] == "iptv":
                row["status"] = "accepted"
            self.data["plex_home_members"].append(row)
            return row
        if action == "update_member":
            row = self.get("plex_home_members", args["id"])
            self.validate_member(row, args["values"])
            return row
        if action == "delete_member":
            self.data["plex_home_members"].remove(self.get("plex_home_members", args["id"]))
            return None
        if action == "set_member_active":
            row = self.get("plex_home_members", args["id"])
            if row.get("service_type", "plex") != "iptv" or type(args.get("active")) is not bool:
                raise ValueError("This local status action is for IPTV members only")
            row.update(status="accepted" if args["active"] else "removed", updated_at=now())
            return row
        raise ValueError("Unknown action")

    def validate_member(self, row, values, creating=False):
        allowed = {"display_name", "email", "service_type", "invite_type", "notes", "account_id", "plex_username", "plex_password", "plex_pin", "credentials_note"}
        for key, value in values.items():
            if key in {"owner_id", "id"}:
                continue
            if key not in allowed:
                raise ValueError(f"Field cannot be changed: {key}")
            if key == "account_id":
                if value is not None:
                    self.get("plex_billing_accounts", value)
                    if row["status"] == "removed" and value != row.get("account_id"):
                        raise ValueError("Inactive members cannot be added to a billing account")
            else:
                text(value, key, nullable=key not in {"display_name", "email", "invite_type", "service_type"})
            if key == "service_type" and not creating and value != row.get("service_type", "plex"):
                raise ValueError("Create a separate member for a different service")
            row[key] = value
        if row.get("service_type", "plex") not in {"plex", "iptv"}:
            raise ValueError("Invalid member service")
        if not row.get("display_name", "").strip():
            raise ValueError("Member name is required")
        row["email"] = row["email"].strip().lower()
        if (row["email"] or row.get("service_type", "plex") == "plex") and not re.fullmatch(r"[^\s@]+@[^\s@]+\.[^\s@]+", row["email"]):
            raise ValueError("A valid email address is required for Plex members; IPTV email is optional")
        if row["invite_type"] not in {"home", "friend"}:
            raise ValueError("Invalid invite type")
        if row["email"] and any(m["id"] != row["id"] and m["email"].lower() == row["email"] and m.get("service_type", "plex") == row.get("service_type", "plex") for m in self.data["plex_home_members"]):
            raise ValueError("A member with that email already exists")
        row["updated_at"] = now()
