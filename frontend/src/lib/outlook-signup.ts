// Build a prefilled Outlook signup URL. Microsoft does not allow programmatic
// mailbox creation, so the panel just opens the official signup flow in a new
// tab and the admin completes the CAPTCHA + verification manually.

export function buildOutlookSignupUrl(handle: string): string {
  const cleaned = handle.trim().toLowerCase().replace(/[^a-z0-9._-]/g, "");
  const params = new URLSearchParams({
    lic: "1",
    // Microsoft reads `username` and `wreply` on the consumer signup flow.
    username: cleaned,
  });
  return `https://signup.live.com/signup?${params.toString()}`;
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
