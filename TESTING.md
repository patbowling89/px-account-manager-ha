# Verification status

Version 0.1.2 addresses long-member-list scrolling and release tracking. The user confirmed that panel loading, Plex authentication and member sync work after 0.1.1. Other real Plex account operations still need testing.

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

## Version 0.1.2 dialog checks

An isolated local preview was started with 60 fictional members using `python3 tests/browser_server.py --member-count 60 --port 8779`. Native wheel actions scrolled the outer new-account dialog and the nested member list to its end. The last member was checked and the household saved with exactly one assigned member. The same flow was inspected in a 390×760 iframe viewport; the last remaining member could be selected and Save/Cancel stayed visible. These were desktop-browser small-screen checks, not a physical phone touch test.

The modal scroll-lock overlay now contains the dialog content, allowing events from its shadow DOM to reach the lock's scroll handlers. `data-slot=dialog-content` activates the viewport height limit; the footer sticks inside the scroll area.

For release tracking, 0.1.2 must be a normal GitHub release (not marked pre-release), with `hide_default_branch: true` in hacs.json. Verify the published release flag and matching version metadata before offering it in HACS.

## Version 0.1.3 form and theme checks

In the isolated preview, a household was saved with name Previous demo household, amount 125, GTQ, billing day 15 and due date 2026-10-15. Reopening New account showed a blank name, amount 0, USD, the current calendar day, Free off, no due date and no selected members. A canceled draft with Free on was discarded on the next opening. Editing the saved account retained its original values.

Dark was selected and persisted after reload. Its computed background was black with white foreground and neutral gray cards. Light was selected, persisted after reload and remained light when the simulated HA theme was dark. Follow Home Assistant then followed the simulated dark HA theme. These are local browser checks; no real customer records were changed.
