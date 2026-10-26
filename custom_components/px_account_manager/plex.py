"""Plex operations. Credentials never go to the browser or logs."""
from __future__ import annotations

import asyncio
import json
from urllib.parse import quote, urlencode, urlsplit
from xml.etree import ElementTree as ET

from .model import now


class PlexError(ValueError):
    """A safe message that never includes a token or response body."""


def identifier(value):
    return quote(str(value), safe="")


class PlexClient:
    def __init__(self, session, token):
        self.session = session
        self.token = token

    async def request(self, path, method="GET", *, body=None, xml=False, server=None):
        if not self.token:
            raise PlexError("Add your Plex token in Settings → Devices & services → PX Account Manager → Configure")
        base = "https://plex.tv"
        if server:
            url = urlsplit(server)
            # Only a connection returned by authenticated plex.tv resource discovery is used.
            # Require TLS so the account token cannot travel in clear text.
            if url.scheme != "https" or not url.hostname or url.username or url.password or url.query or url.fragment or url.path not in {"", "/"}:
                raise PlexError("Plex server needs a valid HTTPS connection for library access")
            base = server.rstrip("/")
        if not path.startswith("/") or path.startswith("//"):
            raise PlexError("Invalid Plex API path")
        headers = {"X-Plex-Token": self.token, "X-Plex-Client-Identifier": "px-account-manager-ha", "X-Plex-Product": "PX Account Manager", "X-Plex-Version": "0.1.0", "Accept": "application/xml" if xml else "application/json"}
        if body is not None:
            headers["Content-Type"] = "application/xml"
        try:
            async with asyncio.timeout(25):
                async with self.session.request(method, base + path, headers=headers, data=body, allow_redirects=False) as response:
                    if method == "DELETE" and response.status == 404:
                        return {}
                    if response.status >= 300:
                        raise PlexError(f"Plex returned HTTP {response.status}. Check your token and Plex permissions.")
                    chunks = []
                    size = 0
                    async for chunk in response.content.iter_chunked(65536):
                        size += len(chunk)
                        if size > 2_000_000:
                            raise PlexError("Plex response was too large")
                        chunks.append(chunk)
                    raw = b"".join(chunks)
                    if not raw:
                        return {}
                    if xml:
                        if b"<!DOCTYPE" in raw.upper() or b"<!ENTITY" in raw.upper():
                            raise PlexError("Unsupported Plex XML response")
                        return ET.fromstring(raw)
                    try:
                        return json.loads(raw)
                    except json.JSONDecodeError:
                        # Some legacy Home endpoints return XML despite Accept: JSON.
                        if b"<!DOCTYPE" in raw.upper() or b"<!ENTITY" in raw.upper():
                            raise PlexError("Unsupported Plex XML response")
                        return dict(ET.fromstring(raw).attrib)
        except PlexError:
            raise
        except Exception:
            raise PlexError("Could not contact Plex or read its response. Check the connection and try Sync before repeating a change.") from None

    async def users(self):
        home = await self.request("/api/v2/home/users")
        friends = await self.request("/api/v2/friends?includeSharedServers=1")
        home = home if isinstance(home, list) else home.get("users", [])
        friends = friends if isinstance(friends, list) else friends.get("friends", [])
        result = []
        for kind, entries in (("home", home), ("friend", friends)):
            for item in entries:
                user = item.get("user") or item
                result.append(dict(id=str(user.get("id") or item.get("id") or ""), email=str(user.get("email") or "").lower(), name=user.get("friendlyName") or user.get("username"), kind=kind, pending=bool(item.get("pending") or item.get("status") == "pending")))
        return result

    async def owned(self, require_connection=True):
        resources = await self.request("/api/v2/resources?includeHttps=1&includeRelay=1")
        server = next((s for s in resources if s.get("owned") is True and "server" in s.get("provides", "").split(",") and s.get("clientIdentifier")), None)
        if not server:
            raise PlexError("No owned Plex server found for this token")
        connections = [c for c in server.get("connections", []) if c.get("protocol") == "https" and c.get("uri", "").startswith("https://")]
        connections.sort(key=lambda c: (bool(c.get("relay")), bool(c.get("local"))))
        if not connections and require_connection:
            raise PlexError("No HTTPS Plex server connection is available")
        return str(server["clientIdentifier"]), connections[0]["uri"] if connections else None

    async def invite(self, member, kind):
        if kind == "home":
            result = await self.request("/api/home/users?" + urlencode({"invitedEmail": member["email"], "friendlyName": member["display_name"]}), "POST")
            return str(result["id"]) if result.get("id") else None
        machine, uri = await self.owned()
        sections = await self.request("/library/sections", server=uri)
        keys = [str(d["key"]) for d in sections.get("MediaContainer", {}).get("Directory", []) if str(d.get("key", "")).isdigit()]
        if not keys:
            raise PlexError("No Plex libraries found to share")
        payload = ET.tostring(ET.Element("shared_server", {"library_section_ids": ",".join(keys), "invited_email": member["email"]}), encoding="utf-8", xml_declaration=True)
        result = await self.request(f"/api/servers/{identifier(machine)}/shared_servers", "POST", body=payload, xml=True)
        node = result if result.tag.lower() == "sharedserver" else result.find(".//SharedServer")
        return node.get("id") if node is not None else None

    async def remove_side(self, member, kind, users):
        hits = [u for u in users if u["kind"] == kind and (u["email"] == member["email"].lower() or u["id"] == member.get("plex_user_id"))]
        if kind == "friend":
            machine, _ = await self.owned(require_connection=False)
            path = f"/api/servers/{identifier(machine)}/shared_servers"
            shares = await self.request(path, xml=True)
            for shared in shares.iter("SharedServer"):
                emails = [shared.get(k, "").lower() for k in ("invitedEmail", "email", "username")]
                if member["email"].lower() in emails and shared.get("id"):
                    await self.request(path + "/" + identifier(shared.get("id")), "DELETE")
        for hit in hits:
            if hit["id"]:
                path = "/api/home/users/" if kind == "home" else "/api/v2/friends/"
                await self.request(path + identifier(hit["id"]), "DELETE")
        return bool(hits)

    async def run(self, ledger, args):
        operation = args.get("operation")
        if operation == "test":
            result = await self.request("/api/v2/home/users")
            users = result if isinstance(result, list) else result.get("users", [])
            return {"ok": True, "userCount": len(users)}
        if operation == "sync":
            entries = await self.users()  # Fail atomically if either list cannot be read.
            dedup = {}
            for entry in entries:
                key = entry["email"] or entry["id"]
                if key and (key not in dedup or entry["kind"] == "home"):
                    dedup[key] = entry
            updated = imported = 0
            for entry in dedup.values():
                member = next((m for m in ledger.data["plex_home_members"] if (entry["id"] and m.get("plex_user_id") == entry["id"]) or (entry["email"] and m["email"] == entry["email"])), None)
                if not member and entry["email"]:
                    member = ledger.mutate("create_member", {"display_name": entry["name"] or entry["email"], "email": entry["email"], "invite_type": entry["kind"]})
                    imported += 1
                elif member:
                    updated += 1
                if member:
                    member.update(plex_user_id=entry["id"] or None, invite_type=entry["kind"], status="invited" if entry["pending"] else "accepted", updated_at=now(), last_error=None)
            return {"ok": True, "updated": updated, "imported": imported}
        if operation not in {"invite", "remove", "convert", "revoke"}:
            raise PlexError("Unknown Plex action")
        member = ledger.get("plex_home_members", args.get("memberId"))
        if operation == "remove" and args.get("scope") == "panel_only":
            ledger.mutate("delete_member", {"id": member["id"]})
            return {"ok": True}
        try:
            if operation == "invite":
                if member["status"] in {"accepted", "invited"}:
                    raise PlexError("Member is already active or invited. Sync first.")
                invite_id = await self.invite(member, member["invite_type"])
                member.update(status="invited", plex_invite_id=invite_id, last_error=None)
            elif operation == "revoke":
                if member["status"] != "invited":
                    raise PlexError("No pending invite to revoke")
                users = await self.users()
                matches = [u for u in users if u["email"] == member["email"] and u["kind"] == member["invite_type"]]
                if any(not u["pending"] for u in matches):
                    raise PlexError("Invitation has been accepted. Sync before removing a member.")
                removed = await self.remove_side(member, member["invite_type"], users)
                if not removed and member.get("plex_invite_id"):
                    path = "/api/home/users/" if member["invite_type"] == "home" else "/api/v2/shared_servers/"
                    await self.request(path + identifier(member["plex_invite_id"]), "DELETE")
                member.update(status="not_invited", plex_invite_id=None, plex_user_id=None, last_error=None)
            elif operation == "convert":
                kind = args.get("toType")
                if kind not in {"home", "friend"} or kind == member["invite_type"]:
                    raise PlexError("Choose the other Plex membership type")
                users = await self.users()
                await self.remove_side(member, member["invite_type"], users)
                # Persist a truthful local state if the following invitation fails.
                member.update(status="removed", plex_user_id=None, plex_invite_id=None)
                invite_id = await self.invite(member, kind)
                member.update(invite_type=kind, status="invited", plex_invite_id=invite_id, last_error=None)
            else:
                scope = args.get("scope", "plex")
                if scope not in {"plex", "home_only", "friend_only"}:
                    raise PlexError("Invalid removal scope")
                users = await self.users()
                kinds = {"home", "friend"} if scope == "plex" else {scope.removesuffix("_only")}
                for kind in ("home", "friend"):
                    if kind in kinds:
                        await self.remove_side(member, kind, users)
                remaining = next((u for u in users if u["email"] == member["email"] and u["kind"] not in kinds), None)
                if remaining:
                    member.update(invite_type=remaining["kind"], status="invited" if remaining["pending"] else "accepted", plex_user_id=remaining["id"], last_error=None)
                else:
                    member.update(status="removed", plex_user_id=None, plex_invite_id=None, last_error=None)
            member["updated_at"] = now()
            return {"ok": True}
        except PlexError as error:
            member["last_error"] = str(error)
            return {"ok": False, "error": str(error) + " Sync before retrying; a Plex change may already have completed."}
