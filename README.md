# PX Account Manager for Home Assistant

A local Home Assistant adaptation of the supplied PX Account Manager Lovable project. Reuses the original React interface for Plex members, household billing accounts, payment history, and optional member credentials. Customer records are stored by Home Assistant, with no Supabase account or separate app login.

**Public code does not share personal data.** Each installation starts empty and uses its own HA storage, HA administrator login and optional Plex token. See [Privacy and installation isolation](PRIVACY.md). All administrators on the same HA instance can access that instance's records.

**Status: initial test release, version 0.1.0.** The package builds and its billing/Plex behavior is tested with fictional data. It has not been installed in a live Home Assistant instance or tested against a real Plex account.

## Features

- Administrator-only Customers sidebar panel, using the current Home Assistant login.
- Members grouped into monthly billing accounts, with free accounts supported.
- Monthly amount and currency, billing day, and oldest unpaid due date.
- Overdue months and days, upcoming renewals, and totals grouped by currency.
- Record a full month of payment, review its period, and undo the latest payment with the due date restored.
- Plex token test, manual member sync/import, Home or Friend invitations, invitation revocation, conversion, scoped removal, and panel-only removal.
- Optional Plex username/password/PIN notes retained from the original project.
- Light/dark theme and a self-contained frontend bundle served from HA.
- Download a local JSON backup. Normal HA backups also include the integration's storage.

## Install locally for testing

Requires Home Assistant **2026.10 or later**. This version targets the 2026.10 custom panel and WebSocket APIs. Use a backup or test instance for the first installation.

1. Copy `custom_components/px_account_manager` into HA's `/config/custom_components/` folder.
2. Restart Home Assistant to discover the integration.
3. Open **Settings → Devices & services → Add integration → PX Account Manager**.
4. Leave the Plex token blank to start with billing only, or enter the token directly into HA. Do not paste it into chat or commit it to GitHub.
5. Open **Customers** in the sidebar as an administrator.
6. To add/change/remove the Plex token later, open the integration's **Configure** dialog. Leaving a replacement token blank retains the current one; the remove checkbox explicitly clears it.

No YAML, Lovelace resource registration, Node runtime, Supabase service, Mosquitto changes, or MQTT changes are needed. Existing dashboards and integrations are untouched.

## HACS publication

All runtime files, including the compiled panel, are inside the integration directory as required by [HACS integration packaging](https://www.hacs.xyz/docs/publish/integration/).

Before publishing, replace the repository metadata using your real GitHub owner/repository:

```sh
python3 scripts/prepare_release.py --repository YOUR_USER/px-account-manager-ha
python3 scripts/check_publication.py
```

This project's repository is **https://github.com/patbowling89/px-account-manager-ha**. Add that URL under **HACS → Custom repositories**, category **Integration**, download, restart, and add the integration. The project is not submitted to HACS's default catalog. Keep the built `www/panel.js` in source control and tag releases with the version from `manifest.json`.

The metadata script lets forks set their own repository details. It refuses to release an archive with example owner names.

## Billing rules

- The next due date is the **oldest unpaid period start**, not the date you received the latest payment. Enter a past date when adding existing arrears.
- A due date equal to today is due today. A period becomes overdue the following day. The overdue-month count includes every unpaid monthly due date before today.
- “Mark paid” records **one full month at the current monthly price**. Click again for another month after the display refreshes. Partial payments, proration, automatic bank collection, taxes, invoices, and exchange-rate conversion are not implemented.
- Billing days 29–31 clamp to the month's last day and return to the chosen billing day in the following month.
- Changing the price or billing day preserves existing arrears. Explicitly changing the oldest unpaid date adjusts the balance; do this only when correcting your records. Old amounts are not retroactively recomputed.
- Only the latest payment can be undone, and only while its period still matches the account's due date. Undo newer payments first. An explicit due-date adjustment can prevent an old payment from being undone.
- Deleting a billing account also deletes its payment history and unassigns members, after confirmation. Removing a member from the panel does not delete its billing account.
- All administrators share the same local ledger; ordinary HA users cannot access these records. This differs from the original per-Supabase-user ownership model.

## Plex behavior

Opening the panel does not automatically call Plex. Use **Test token**, **Sync**, or the explicit member action buttons. Billing works without Plex.

Sync imports Home members and Friends with email addresses, deduplicating a person who appears in both lists. Home takes priority. Existing local billing assignments and credentials are preserved. Accounts absent from a sync are not automatically deleted. Managed users without email are not automatically imported as customers.

Friend invitations share **all libraries on the first owned Plex server**, matching the supplied project's behavior. Library discovery requires a reachable HTTPS Plex connection with a valid certificate. No TLS verification is disabled. Server/library selection is not included in this initial version.

Plex changes cannot be rolled back as a local database transaction. If a network or save error occurs after an external action, **check Sync and Plex before retrying**. Failed actions report that a remote change may already have completed. No automatic request retries send duplicate invitations.

The Plex token is kept in the HA config entry and is never returned to the panel. Member credentials are optional local records visible to all HA administrators; they and the token can be present in HA backups. Protect backups accordingly. The downloaded JSON backup includes member credentials, but not the Plex token. It is an export for safekeeping; this initial version has no JSON-import UI. Restore the normal HA backup to restore the installation and local storage together.

## Existing Lovable data

The supplied ZIP contains application source and database migrations, not a customer database export. No real customer records were imported and no original Supabase data was changed. Existing customer/payment migration can be added from an explicit export once the source data format is available. **Sync** imports current Plex members, not historical bills or payments.

## Development and verification

```sh
cd frontend
npm ci --ignore-scripts
npm run build
cd ..
python3 -m unittest discover -s tests -v
```

Build tooling is needed only on a development computer. End users install the prebuilt integration.

`tests/browser_server.py` serves an isolated test panel at `http://127.0.0.1:8778` with an in-memory ledger and fictional records. It has no Home Assistant connection or Plex token. `frontend/test-browser.mjs` is an optional Playwright smoke test; set `CHROME_PATH` if your Chrome executable is elsewhere. The current desktop environment blocked launching a separate headless Chrome, so the compiled panel was additionally checked through the in-app browser.

Local verification covers month ends, leap years, payment undo, duplicate retries, stale-client payment protection, free accounts, deletion relationships, input validation, Plex sync preservation and safe connection failures. Real HA configuration, permissions, reloads, backups and Plex account operations still require a live installation test.

## Source and attribution

The frontend is adapted from the user's `px-account-manager-main.zip`. The original archive is unchanged. Cloud login, cloud database access, SSR hosting and Lovable runtime/telemetry are excluded. The app is available under the MIT license. Third-party packages retain their respective licenses; see the bundled notices.
