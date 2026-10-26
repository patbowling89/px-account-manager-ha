import { useQuery } from "@tanstack/react-query";
import { localDb } from "@/lib/ha";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatMoney, statusFor, overdueMonths, type Account } from "@/lib/billing";
import { CircleDollarSign, Users, CalendarClock, AlertTriangle, Activity } from "lucide-react";

type MemberLite = {
  id: string;
  display_name: string;
  email: string;
  status: "not_invited" | "invited" | "accepted" | "failed" | "removed";
  account_id: string | null;
  created_at: string;
};

export function DashboardSection({
  members,
  accounts,
}: {
  members: MemberLite[];
  accounts: Account[];
}) {
  const paymentsQuery = useQuery({
    queryKey: ["dashboard-recent-payments"],
    queryFn: async () => {
      const { data, error } = await localDb
        .from("plex_account_payments")
        .select("id, account_id, amount_cents, currency, paid_at")
        .order("paid_at", { ascending: false })
        .limit(5);
      if (error) throw error;
      return data ?? [];
    },
  });

  const active = members.filter((m) => m.status !== "removed");
  const inactive = members.filter((m) => m.status === "removed");
  const paying = accounts.filter((a) => !a.is_free);
  const free = accounts.filter((a) => a.is_free);
  const totals = (items: {amount_cents:number;currency:string}[]) => {
    const grouped:Record<string,number>={};
    for (const item of items) grouped[item.currency]=(grouped[item.currency]??0)+item.amount_cents;
    return Object.entries(grouped).map(([currency,amount])=>formatMoney(amount,currency)).join(" · ") || "—";
  };

  const withStatus = accounts.map((a) => ({ a, ...statusFor(a) }));
  const overdue = withStatus.filter((x) => x.status === "overdue");
  const overdueTotal = totals(overdue.map(x=>({...x.a,amount_cents:x.a.amount_cents*overdueMonths(x.a)})));
  const dueSoon = withStatus
    .filter((x) => x.status === "due_soon" || (x.status === "paid" && x.daysDiff <= 7))
    .sort((a, b) => a.daysDiff - b.daysDiff)
    .slice(0, 5);

  const accountsById = new Map(accounts.map((a) => [a.id, a]));
  const recentMembers = [...members]
    .sort((a, b) => (a.created_at < b.created_at ? 1 : -1))
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={<Users className="h-4 w-4" />}
          label="Members"
          value={`${active.length} active`}
          hint={`${inactive.length} inactive · ${members.length} total`}
        />
        <StatCard
          icon={<CircleDollarSign className="h-4 w-4" />}
          label="Monthly billing"
          value={totals(paying)}
          hint={`${paying.length} paying · ${free.length} free`}
        />
        <StatCard
          icon={<AlertTriangle className="h-4 w-4" />}
          label="Overdue"
          value={String(overdue.length)}
          hint={overdue.length ? `${overdueTotal} overdue` : "All caught up"}
          tone={overdue.length ? "danger" : "ok"}
        />
        <StatCard
          icon={<CalendarClock className="h-4 w-4" />}
          label="Accounts"
          value={String(accounts.length)}
          hint={`${dueSoon.length} due within 7 days`}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <CalendarClock className="h-4 w-4" /> Coming up
            </CardTitle>
            <CardDescription>Accounts due in the next 7 days.</CardDescription>
          </CardHeader>
          <CardContent>
            {dueSoon.length === 0 ? (
              <p className="text-sm text-muted-foreground">Nothing due soon.</p>
            ) : (
              <ul className="space-y-2">
                {dueSoon.map(({ a, daysDiff, status }) => (
                  <li key={a.id} className="flex items-center justify-between rounded-md border border-border px-3 py-2">
                    <div>
                      <p className="text-sm font-medium">{a.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {a.next_due_date} · {formatMoney(a.amount_cents, a.currency)}
                      </p>
                    </div>
                    <Badge variant={status === "due_soon" ? "secondary" : "outline"}>
                      {daysDiff === 0 ? "Today" : `${daysDiff}d`}
                    </Badge>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Activity className="h-4 w-4" /> Recent payments
            </CardTitle>
            <CardDescription>Last 5 recorded payments.</CardDescription>
          </CardHeader>
          <CardContent>
            {paymentsQuery.isLoading ? (
              <p className="text-sm text-muted-foreground">Loading…</p>
            ) : paymentsQuery.error ? (
              <p role="alert" className="text-sm text-destructive">{paymentsQuery.error.message}</p>
            ) : (paymentsQuery.data ?? []).length === 0 ? (
              <p className="text-sm text-muted-foreground">No payments yet.</p>
            ) : (
              <ul className="space-y-2">
                {(paymentsQuery.data ?? []).map((p: {id:string;account_id:string;paid_at:string;amount_cents:number;currency:string}) => {
                  const acc = accountsById.get(p.account_id);
                  return (
                    <li key={p.id} className="flex items-center justify-between rounded-md border border-border px-3 py-2">
                      <div>
                        <p className="text-sm font-medium">{acc?.name ?? "Unknown account"}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(p.paid_at).toLocaleDateString()}
                        </p>
                      </div>
                      <span className="text-sm font-mono">{formatMoney(p.amount_cents, p.currency)}</span>
                    </li>
                  );
                })}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Recently added members</CardTitle>
        </CardHeader>
        <CardContent>
          {recentMembers.length === 0 ? (
            <p className="text-sm text-muted-foreground">No members yet.</p>
          ) : (
            <ul className="space-y-2">
              {recentMembers.map((m) => (
                <li key={m.id} className="flex items-center justify-between rounded-md border border-border px-3 py-2">
                  <div>
                    <p className="text-sm font-medium">{m.display_name}</p>
                    <p className="text-xs font-mono text-muted-foreground">{m.email}</p>
                  </div>
                  <Badge variant="outline">{m.status.replace("_", " ")}</Badge>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  hint,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  hint?: string;
  tone?: "ok" | "danger";
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">{label}</span>
          <span className={tone === "danger" ? "text-destructive" : "text-muted-foreground"}>{icon}</span>
        </div>
        <p className="mt-2 text-2xl font-semibold tracking-tight">{value}</p>
        {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
      </CardContent>
    </Card>
  );
}
