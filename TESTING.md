# Verification status

Version 0.1.1 addresses the HTTP 410 reported during initial live Home Assistant testing. The panel loads in HA; live Plex compatibility is not yet confirmed.

Completed locally:

- TypeScript checks and Vite production compilation.
- 32 Python regression tests for the ledger and mocked Plex actions.
- Dependency audit after excluding unused cloud-era packages: no reported vulnerabilities at build time.
- In-app browser: compiled panel loads; account creation/editing; currency and billing day; past due date; nine overdue months; one-month payment reduces it to eight; history records Jan 31–Feb 28; undo restores Jan 31 and nine overdue months.
- In-app browser: member creation without a Plex connection and assignment to a local billing account; overview shows nine periods at GTQ 75 as GTQ 675 overdue.

The attempted automated Playwright browser process was blocked by the desktop environment before it launched. It did not complete; the interactive checks above used the isolated demo instead.

The 0.1.1 tests additionally cover direct account-token validation without returning account secrets, XML child records and string booleans, email enrichment by Plex ID, pending-invite cancellation, incomplete-sync failure, endpoint-specific error messages, and XML entity rejection.

Pending before considering production-ready:

- Verify the published repository and version tag in HACS.
- Install on a test/backup Home Assistant instance, add/configure/reload/remove integration.
- Verify non-admin denial through HA's actual WebSocket connection, not just the frontend.
- Verify record persistence through an HA restart and restore from an HA backup.
- Test the real Plex token, member sync, invitation/revocation/conversion/removal with a designated test member.
- Verify phone layout, dark mode and keyboard focus within HA's panel container.
- Import existing billing records only from a deliberate customer-data export.
