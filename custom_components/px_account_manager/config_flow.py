"""Configure the local panel and optional Plex connection."""
import probatio as vol
from homeassistant import config_entries
from homeassistant.helpers import selector
from .const import DOMAIN


def schema(default=""):
    return vol.Schema({vol.Optional("plex_token", default=default): selector.TextSelector(selector.TextSelectorConfig(type=selector.TextSelectorType.PASSWORD))})


class ConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    VERSION = 1

    async def async_step_user(self, user_input=None):
        if self._async_current_entries():
            return self.async_abort(reason="single_instance_allowed")
        if user_input is not None:
            return self.async_create_entry(title="PX Account Manager", data={}, options={"plex_token": user_input.get("plex_token", "").strip()})
        return self.async_show_form(step_id="user", data_schema=schema())

    @staticmethod
    def async_get_options_flow(config_entry):
        return OptionsFlow()


class OptionsFlow(config_entries.OptionsFlow):
    async def async_step_init(self, user_input=None):
        if user_input is not None:
            token = user_input.get("plex_token")
            # An empty password retains the existing token; explicit checkbox clears it.
            value = "" if user_input.get("clear_token") else token or self.config_entry.options.get("plex_token", "")
            return self.async_create_entry(title="", data={"plex_token": value.strip()})
        return self.async_show_form(step_id="init", data_schema=vol.Schema({vol.Optional("plex_token"): selector.TextSelector(selector.TextSelectorConfig(type=selector.TextSelectorType.PASSWORD)), vol.Optional("clear_token", default=False): bool}))
