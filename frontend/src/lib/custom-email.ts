// Addresses on the administrator's own domain. With a catch-all forwarding
// rule (for example Cloudflare Email Routing), any handle@domain already
// receives mail, so the panel only needs to build and record the address.

const DOMAIN_STORAGE_KEY = "px-account-manager.email-domain";

export function cleanHandle(handle: string): string {
  return handle.trim().toLowerCase().replace(/[^a-z0-9._-]/g, "");
}

export function cleanDomain(domain: string): string {
  return domain.trim().toLowerCase().replace(/^@+/, "").replace(/[^a-z0-9.-]/g, "");
}

export function buildCustomEmail(handle: string, domain: string): string {
  const h = cleanHandle(handle);
  const d = cleanDomain(domain);
  return h && d ? `${h}@${d}` : "";
}

// The domain is an admin setting, not customer data; it is kept in this browser only.
export function loadEmailDomain(): string {
  try {
    return localStorage.getItem(DOMAIN_STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

export function saveEmailDomain(domain: string): void {
  try {
    localStorage.setItem(DOMAIN_STORAGE_KEY, cleanDomain(domain));
  } catch {
    /* Keep the in-memory value. */
  }
}

export function suggestHandles(displayName: string): string[] {
  const base = displayName
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s.-]/g, "")
    .replace(/\s+/g, ".");
  if (!base) return [];
  const year = new Date().getFullYear().toString().slice(-2);
  return [base, `${base}${Math.floor(10 + Math.random() * 89)}`, `${base}.${year}`];
}
