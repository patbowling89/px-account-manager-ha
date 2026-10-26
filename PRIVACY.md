# Public code, private installations

This repository distributes application code. It is not a hosted customer-management service and does not contain a shared customer database or a shared Plex account.

Each installation starts with an empty ledger. The installer configures their own Plex token inside their own Home Assistant, and adds their own customers or explicitly imports their own Plex members with Sync. Installing this integration does not connect an installer to the developer's Home Assistant or Plex server.

## Where data lives

| Information | Location | Sent to GitHub? |
| --- | --- | --- |
| Customer names, emails and billing assignments | That installation's HA `.storage/px_account_manager` | No |
| Payment history and unpaid due dates | That installation's HA storage | No |
| Optional member usernames, passwords and PIN notes | That installation's HA storage | No |
| Plex API token | That installation's HA config entry options | No |
| App source, built frontend and fictional test records | This repository | Yes |

Plex actions send the configured token to Plex and, for library discovery, the owned Plex server's authenticated HTTPS connection. Invitations send the chosen member's name/email to Plex. These requests run only when an administrator chooses a Plex action. Local billing records and optional stored member passwords/PINs are not sent to Plex by this integration.

## Access within an installation

The sidebar panel is restricted to Home Assistant administrators. The backend also checks administrator access for every WebSocket command, including reads, exports and Plex operations. Hiding the sidebar alone is not used as an access control.

**All administrators of the same HA instance can access its ledger.** This is not a separate customer login system or a per-administrator private vault. Other people installing the public code on their own HA instance get their own separate records and do not gain access to this installation.

Private local storage is not a claim of encryption at rest. Anyone with sufficient access to the HA host, its config files, or its backups may be able to read stored records and credentials. Protect HA access and backups. A downloaded JSON export includes customer records and optional saved member credentials; keep it outside the repository.

## Publication boundaries

Never commit a Home Assistant configuration directory, `.storage`, `secrets.yaml`, database, customer/payment export, local backup, `.env`, actual Plex token or actual member credentials. The repository's ignore rules cover common examples. Ignore rules do not remove files already committed to Git history; release checks must inspect tracked files as well.

There is no Supabase connection, shared service URL, telemetry endpoint, or developer Plex token in the adapted runtime. Tests use fictional records and mock Plex responses. The original project's source archive is not published with this repository.

The current version still needs a real Home Assistant installation test to verify configuration, permission checks, persistence and Plex behavior in the target environment. Public source availability does not replace security testing or normal Home Assistant updates.

## HACS and private repositories

[HACS requires a public GitHub repository](https://www.hacs.xyz/docs/faq/private_repositories/). A private copy can be stored in GitHub, but installation and updates would need to be handled manually. A public code-only repository is the intended HACS distribution model; personal configuration remains in each HA instance.
