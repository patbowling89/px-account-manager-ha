"""Plex behavior tests with fake responses; never call a real Plex account."""
import importlib.util
from pathlib import Path
import sys
import types
import unittest
from datetime import date
from xml.etree import ElementTree as ET
import json

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
        self.responses = {("GET", path): ET.fromstring("<MediaContainer/>") for path in ("/api/home/users", "/api/users/", "/api/invites/requested")}
        self.responses.update(responses)
        self.calls = []

    async def request(self, path, method="GET", **kwargs):
        self.calls.append((method, path, kwargs))
        if (method, path) not in self.responses:
            raise AssertionError(f"Unexpected Plex operation: {method} {path}")
        result = self.responses[(method, path)]
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
        client = FakePlex({("GET", "/api/home/users"): ET.fromstring('<MediaContainer><User id="42" email="demo@example.com" pending="0"/></MediaContainer>'), ("GET", "/api/users/"): ET.fromstring('<MediaContainer><User id="42" email="demo@example.com"/></MediaContainer>')})
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
        client = FakePlex({("GET", "/api/home/users"): ET.fromstring('<MediaContainer><User id="42" email="demo@example.com" pending="0"/></MediaContainer>')})
        result = await client.run(self.ledger, {"operation": "revoke", "memberId": self.member["id"]})
        self.assertFalse(result["ok"])
        self.assertFalse(any(method == "DELETE" for method, _, _ in client.calls))

    async def test_token_check_uses_account_endpoint_and_returns_no_account_secrets(self):
        client = FakePlex({("GET", "/api/v2/user"): {"id": 123, "email": "owner@example.com", "authToken": "do-not-return", "homeSize": 2}})
        result = await client.run(self.ledger, {"operation": "test"})
        self.assertEqual(result, {"ok": True, "authenticated": True})
        self.assertEqual([call[:2] for call in client.calls], [("GET", "/api/v2/user")])

    async def test_token_check_rejects_empty_account_response(self):
        client = FakePlex({("GET", "/api/v2/user"): {}})
        with self.assertRaisesRegex(plex.PlexError, "authenticated account"):
            await client.run(self.ledger, {"operation": "test"})

    async def test_home_without_email_is_enriched_by_id(self):
        client = FakePlex({("GET", "/api/home/users"): ET.fromstring('<MediaContainer><User id="42" title="Demo"/></MediaContainer>'), ("GET", "/api/users/"): ET.fromstring('<MediaContainer><User id="42" email="demo@example.com"/></MediaContainer>')})
        await client.run(self.ledger, {"operation": "sync"})
        self.assertEqual(len(self.ledger.data["plex_home_members"]), 1)
        self.assertEqual(self.member["invite_type"], "home")

    async def test_sent_invites_import_as_pending_and_zero_home_flag_is_friend(self):
        client = FakePlex({("GET", "/api/invites/requested"): ET.fromstring('<MediaContainer><Invite id="42" email="new@example.com" home="0" friend="0" server="1"/></MediaContainer>')})
        result = await client.run(self.ledger, {"operation": "sync"})
        self.assertEqual(result["imported"], 1)
        imported = next(m for m in self.ledger.data["plex_home_members"] if m["email"] == "new@example.com")
        self.assertEqual(imported["status"], "invited")
        self.assertEqual(imported["invite_type"], "friend")
        self.assertEqual(imported["plex_invite_id"], "42")

    async def test_pending_list_failure_does_not_apply_partial_sync(self):
        client = FakePlex({("GET", "/api/home/users"): ET.fromstring('<MediaContainer><User id="42" email="new@example.com"/></MediaContainer>'), ("GET", "/api/invites/requested"): plex.PlexError("HTTP 410")})
        before = json.dumps(self.ledger.data, sort_keys=True)
        with self.assertRaises(plex.PlexError):
            await client.run(self.ledger, {"operation": "sync"})
        self.assertEqual(json.dumps(self.ledger.data, sort_keys=True), before)

    async def test_revoke_cancels_pending_invite_without_deleting_active_membership(self):
        self.member.update(status="invited", invite_type="friend")
        path = "/api/invites/requested/42?friend=0&home=0&server=1"
        client = FakePlex({("GET", "/api/invites/requested"): ET.fromstring('<MediaContainer><Invite id="42" email="demo@example.com" home="0" friend="0" server="1"/></MediaContainer>'), ("DELETE", path): {}})
        result = await client.run(self.ledger, {"operation": "revoke", "memberId": self.member["id"]})
        self.assertTrue(result["ok"])
        self.assertEqual([(method, url) for method, url, _ in client.calls if method == "DELETE"], [("DELETE", path)])

    async def test_accepted_record_wins_over_duplicate_pending_record(self):
        client = FakePlex({("GET", "/api/users/"): ET.fromstring('<MediaContainer><User id="42" email="demo@example.com"/></MediaContainer>'), ("GET", "/api/invites/requested"): ET.fromstring('<MediaContainer><Invite id="42" email="demo@example.com" home="0" server="1"/></MediaContainer>')})
        await client.run(self.ledger, {"operation": "sync"})
        self.assertEqual(self.member["status"], "accepted")

    async def test_sync_never_converts_an_iptv_contact_into_a_plex_member(self):
        iptv = self.ledger.mutate("create_member", {"display_name": "Local IPTV", "service_type": "iptv", "email": "iptv@example.com"})
        client = FakePlex({("GET", "/api/users/"): ET.fromstring('<MediaContainer><User id="42" email="iptv@example.com"/></MediaContainer>')})
        result = await client.run(self.ledger, {"operation": "sync"})
        self.assertEqual(result["imported"], 1)
        self.assertEqual(iptv["service_type"], "iptv")
        self.assertIsNone(iptv["plex_user_id"])
        self.assertEqual(len([m for m in self.ledger.data["plex_home_members"] if m["email"] == "iptv@example.com"]), 2)

    async def test_all_member_plex_actions_reject_iptv_without_network_requests(self):
        iptv = self.ledger.mutate("create_member", {"display_name": "Local IPTV", "service_type": "iptv"})
        client = FakePlex({})
        for operation in ("invite", "remove", "convert", "revoke"):
            with self.assertRaisesRegex(plex.PlexError, "IPTV-only"):
                await client.run(self.ledger, {"operation": operation, "memberId": iptv["id"], "toType": "friend"})
        self.assertEqual(client.calls, [])


class FakeContent:
    def __init__(self, body):
        self.body = body

    async def iter_chunked(self, _size):
        for start in range(0, len(self.body), 13):
            yield self.body[start:start + 13]


class FakeResponse:
    def __init__(self, status, body):
        self.status, self.content = status, FakeContent(body)

    async def __aenter__(self):
        return self

    async def __aexit__(self, *_args):
        return False


class FakeSession:
    def __init__(self, status, body):
        self.status, self.body, self.calls = status, body, []

    def request(self, method, url, **kwargs):
        self.calls.append((method, url, kwargs))
        return FakeResponse(self.status, self.body)


class TransportTests(unittest.IsolatedAsyncioTestCase):
    async def test_xml_children_survive_transport_and_token_is_header_only(self):
        session = FakeSession(200, b'<MediaContainer><User id="42" email="demo@example.com" pending="0"/></MediaContainer>')
        client = plex.PlexClient(session, "secret-test-only")
        result = await client.request("/api/home/users", xml=True)
        self.assertEqual(plex.xml_records(result, "User")[0]["id"], "42")
        method, url, kwargs = session.calls[0]
        self.assertNotIn("secret-test-only", url)
        self.assertEqual(kwargs["headers"]["X-Plex-Token"], "secret-test-only")
        self.assertFalse(kwargs["allow_redirects"])

    async def test_gone_endpoint_is_not_reported_as_bad_token_and_body_is_not_leaked(self):
        session = FakeSession(410, b'private response do-not-expose-token')
        with self.assertRaises(plex.PlexError) as caught:
            await plex.PlexClient(session, "secret-test-only").request("/api/v2/home/users")
        message = str(caught.exception)
        self.assertIn("endpoint is unavailable", message)
        self.assertNotIn("do-not-expose-token", message)
        self.assertNotIn("secret-test-only", message)
        self.assertEqual(len(session.calls), 1)

    async def test_unauthorized_token_has_distinct_message(self):
        with self.assertRaisesRegex(plex.PlexError, "rejected the token"):
            await plex.PlexClient(FakeSession(401, b''), "test-only").request("/api/v2/user")

    async def test_xml_entities_are_rejected(self):
        body = b'<!DOCTYPE root [<!ENTITY x "unsafe">]><MediaContainer>&x;</MediaContainer>'
        with self.assertRaisesRegex(plex.PlexError, "Unsupported Plex XML"):
            await plex.PlexClient(FakeSession(200, body), "test-only").request("/api/home/users", xml=True)

    async def test_legacy_home_invitation_xml_keeps_id(self):
        client = plex.PlexClient(FakeSession(200, b'<User id="123"/>'), "test-only")
        result = await client.request("/api/home/users?invitedEmail=demo%40example.com", "POST")
        self.assertEqual(result, {"id": "123"})

    def test_xml_boolean_values(self):
        for value in ("0", "false", False, None, 0, ""):
            self.assertFalse(plex.plex_bool(value))
        for value in ("1", "true", True, 1):
            self.assertTrue(plex.plex_bool(value))


if __name__ == "__main__":
    unittest.main()
