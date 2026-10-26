"""PX Account Manager: an admin-only local panel with optional Plex actions."""
from __future__ import annotations

import asyncio
from copy import deepcopy
from pathlib import Path

import probatio as vol
from homeassistant.components import frontend, panel_custom, websocket_api
from homeassistant.components.http import StaticPathConfig
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from homeassistant.helpers.storage import Store
from homeassistant.util import dt as dt_util

from .const import DOMAIN, PANEL_PATH, VERSION
from .model import Ledger, TABLES
from .plex import PlexClient, PlexError


async def async_setup(hass, config):
    websocket_api.async_register_command(hass, handle_command)
    return True


async def async_setup_entry(hass, entry):
    store = Store(hass, 1, DOMAIN)
    saved = await store.async_load()
    ledger = Ledger(saved)
    runtime = {"store": store, "ledger": ledger, "lock": asyncio.Lock(), "entry": entry}
    hass.data[DOMAIN] = runtime
    if not hass.data.get(f"{DOMAIN}_static"):
        await hass.http.async_register_static_paths([StaticPathConfig("/px_account_manager_static", str(Path(__file__).parent / "www"), True)])
        hass.data[f"{DOMAIN}_static"] = True
    await panel_custom.async_register_panel(hass, frontend_url_path=PANEL_PATH, webcomponent_name="px-account-manager", sidebar_title="Customers", sidebar_icon="mdi:account-cash", module_url=f"/px_account_manager_static/panel.js?v={VERSION}", require_admin=True)
    entry.async_on_unload(entry.add_update_listener(reload_entry))
    return True


async def reload_entry(hass, entry):
    await hass.config_entries.async_reload(entry.entry_id)


async def async_unload_entry(hass, entry):
    runtime = hass.data.get(DOMAIN)
    if runtime:
        async with runtime["lock"]:
            frontend.async_remove_panel(hass, PANEL_PATH)
            hass.data.pop(DOMAIN, None)
    return True


@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/command", vol.Required("action"): str, vol.Optional("args", default={}): dict})
@websocket_api.require_admin
@websocket_api.async_response
async def handle_command(hass, connection, msg):
    runtime = hass.data.get(DOMAIN)
    if runtime is None:
        connection.send_error(msg["id"], "not_loaded", "PX Account Manager is not loaded")
        return
    action, args = msg["action"], msg["args"]
    try:
        async with runtime["lock"]:
            if hass.data.get(DOMAIN) is not runtime:
                raise ValueError("Integration reloaded; refresh the page")
            current = runtime["ledger"]
            if action == "list":
                if args.get("table") not in TABLES:
                    raise ValueError("Unknown table")
                result = deepcopy(current.data[args["table"]])
            elif action == "export":
                result = {"format": DOMAIN, "version": 1, "data": deepcopy(current.data)}
            else:
                draft = Ledger(current.data, dt_util.now().date())
                if action == "plex":
                    client = PlexClient(async_get_clientsession(hass), runtime["entry"].options.get("plex_token", ""))
                    result = await client.run(draft, args)
                else:
                    result = draft.mutate(action, args)
                draft.data["revision"] += 1
                try:
                    await runtime["store"].async_save(draft.data)
                except Exception:
                    connection.send_error(msg["id"], "save_failed", "Local save failed. Do not repeat a Plex action until you check its status with Sync.")
                    return
                runtime["ledger"] = draft
            connection.send_result(msg["id"], result)
    except (ValueError, KeyError, TypeError, OverflowError) as error:
        message = str(error) if isinstance(error, ValueError) else "Invalid or incomplete request"
        connection.send_error(msg["id"], "invalid_request", message)
