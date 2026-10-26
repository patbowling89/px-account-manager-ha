"""Plex behavior tests with fake responses; never call a real Plex account."""
import importlib.util
from pathlib import Path
import sys
import types
import unittest
from datetime import date

BASE = Path(__file__).resolve().parents[1] / "custom_components/px_account_manager"
pkg = types.ModuleType("px_test")
pkg.__path__ = [str(BASE)]
sys.modules["px_test"] = pkg
for name in ("model", "plex"):
    spec = importlib.util.spec_from_file_location(f"px_test.{name}", BASE / f"{name}.py")
    module = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = module
    spec.loader.exec_module(module)
model, plex = sys.modules["px_test.model"], sys.modules["px_test.plex"]


class FakePlex(plex.PlexClient):
    def __init__(self, responses):
        super().__init__(None, "secret-test-token")
        self.responses = responses
        self.calls = []

    async def request(self, path, method="GET", **kwargs):
        self.calls.append((method, path, kwargs))
        result = self.responses.get((method, path), {})
        if isinstance(result, Exception):
            raise result
        return result


class PlexTests(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        self.ledger = model.Ledger(today=date(2026, 10, 26))
        self.member = self.ledger.mutate("create_member", {"display_name": "Demo", "email": "demo@example.com", "invite_type": "home"})

    async def test_sync_dedupes_and_preserves_billing_and_credentials(self):
        account = self.ledger.mutate("create_account", dict(name="Demo", amountCents=500, currency="GTQ", billingDay=1, memberIds=[self.member["id"]]))
        self.member["plex_password"] = "test-only-password"
        client = FakePlex({("GET", "/api/v2/home/users"): {"users": [{"id": 42, "email": "demo@example.com"}]}, ("GET", "/api/v2/friends?includeSharedServers=1"): [{"user": {"id": 42, "email": "demo@example.com"}}]})
        result = await client.run(self.ledger, {"operation": "sync"})
        self.assertTrue(result["ok"])
        self.assertEqual(len(self.ledger.data["plex_home_members"]), 1)
        self.assertEqual(self.member["invite_type"], "home")
        self.assertEqual(self.member["account_id"], account["id"])
        self.assertEqual(self.member["plex_password"], "test-only-password")

    async def test_local_remove_does_not_call_plex(self):
        client = FakePlex({})
        await client.run(self.ledger, {"operation": "remove", "memberId": self.member["id"], "scope": "panel_only"})
        self.assertEqual(client.calls, [])

    async def test_invite_failure_is_visible(self):
        path = "/api/home/users?invitedEmail=demo%40example.com&friendlyName=Demo"
        client = FakePlex({("POST", path): plex.PlexError("Plex returned HTTP 401")})
        result = await client.run(self.ledger, {"operation": "invite", "memberId": self.member["id"]})
        self.assertFalse(result["ok"])
        self.assertEqual(self.member["status"], "not_invited")
        self.assertIn("401", self.member["last_error"])

    async def test_missing_token_is_safe(self):
        client = plex.PlexClient(None, "")
        with self.assertRaisesRegex(plex.PlexError, "Add your Plex token"):
            await client.request("/api/v2/home/users")

    async def test_token_cannot_be_sent_to_plain_http_server(self):
        client = plex.PlexClient(None, "test-secret")
        for uri in ["http://192.168.1.2:32400", "https://name:password@host", "https://host/?token=x"]:
            with self.assertRaisesRegex(plex.PlexError, "HTTPS"):
                await client.request("/library/sections", server=uri)

    async def test_revoke_refuses_already_accepted_user(self):
        self.member["status"] = "invited"
        client = FakePlex({("GET", "/api/v2/home/users"): [{"id": 42, "email": "demo@example.com", "pending": False}]})
        result = await client.run(self.ledger, {"operation": "revoke", "memberId": self.member["id"]})
        self.assertFalse(result["ok"])
        self.assertFalse(any(method == "DELETE" for method, _, _ in client.calls))


if __name__ == "__main__":
    unittest.main()
