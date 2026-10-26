import { command } from "./ha";

export type Account = {
  id: string;
  owner_id: string;
  name: string;
  is_free: boolean;
  amount_cents: number;
  currency: string;
  billing_day: number;
  next_due_date: string | null;
  last_paid_at: string | null;
};

export type AccountPayment = {
  id: string;
  account_id: string;
  amount_cents: number;
  currency: string;
  paid_at: string;
  period_start: string | null;
  period_end: string | null;
  note: string | null;
};

export type BillingStatus = "free" | "none" | "paid" | "due_soon" | "overdue";

function clampDay(year: number, monthIdx: number, day: number) {
  const last = new Date(year, monthIdx + 1, 0).getDate();
  return Math.min(day, last);
}

function isoDate(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function computeNextDue(billingDay: number, after: Date = new Date()): string {
  const candidate = new Date(
    after.getFullYear(),
    after.getMonth(),
    clampDay(after.getFullYear(), after.getMonth(), billingDay),
  );
  if (candidate <= after) {
    const ny = after.getMonth() === 11 ? after.getFullYear() + 1 : after.getFullYear();
    const nm = (after.getMonth() + 1) % 12;
    return isoDate(new Date(ny, nm, clampDay(ny, nm, billingDay)));
  }
  return isoDate(candidate);
}

export function statusFor(a: Account | null | undefined): { status: BillingStatus; daysDiff: number } {
  if (!a) return { status: "none", daysDiff: 0 };
  if (a.is_free) return { status: "free", daysDiff: 0 };
  if (!a.next_due_date) return { status: "none", daysDiff: 0 };
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(a.next_due_date + "T00:00:00");
  const ms = due.getTime() - today.getTime();
  const days = Math.round(ms / 86400000);
  if (days < 0) return { status: "overdue", daysDiff: -days };
  if (days <= 5) return { status: "due_soon", daysDiff: days };
  return { status: "paid", daysDiff: days };
}

export function formatMoney(cents: number, currency = "USD") {
  try {
    return new Intl.NumberFormat(undefined, { style: "currency", currency }).format(cents / 100);
  } catch {
    return `${(cents / 100).toFixed(2)} ${currency}`;
  }
}

export const listAccounts = (): Promise<Account[]> => command("list", {table: "plex_billing_accounts"});
export const createAccount = (args: {name:string;isFree:boolean;amountCents:number;currency:string;billingDay:number;memberIds?:string[];nextDueDate?:string}): Promise<Account> => command("create_account",args);
export const updateAccount = (args: {id:string;name:string;isFree:boolean;amountCents:number;currency:string;billingDay:number;nextDueDate?:string}):Promise<void> => command("update_account",args);
export const deleteAccount = (id:string):Promise<void> => command("delete_account",{id});
export const setMemberAccount = (memberId:string,accountId:string|null):Promise<void> => command("update_member",{id:memberId,values:{account_id:accountId}});
export const setAccountMembers = (accountId:string,memberIds:string[]):Promise<void> => command("assign_members",{accountId,memberIds});
export async function recordAccountPayment(args:{accountId:string;expectedDue:string|null;amountCents?:number;paidAt?:string;note?:string}):Promise<void> {
  const account = (await listAccounts()).find(a=>a.id===args.accountId);
  if (!account) throw new Error("Account not found");
  await command("record_payment",{...args,requestId:crypto.randomUUID()});
}
export async function listAccountPayments(accountId:string):Promise<AccountPayment[]> {
  return (await command<AccountPayment[]>("list",{table:"plex_account_payments"})).filter(p=>p.account_id===accountId).reverse();
}
export const deleteAccountPayment = (id:string):Promise<void> => command("delete_payment",{id});

export function overdueMonths(account: Account, today = new Date()): number {
  if (account.is_free || !account.next_due_date) return 0;
  let due = new Date(account.next_due_date+"T00:00:00");
  const end = new Date(today.getFullYear(),today.getMonth(),today.getDate());
  let months = 0;
  while (due < end && months < 12000) {
    months++;
    const y = due.getFullYear() + (due.getMonth()===11 ? 1:0);
    const m = (due.getMonth()+1)%12;
    due = new Date(y,m,clampDay(y,m,account.billing_day));
  }
  return months;
}

