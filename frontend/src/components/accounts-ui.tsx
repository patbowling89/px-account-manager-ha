import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { AlertCircle, CheckCircle2, History, Pencil, Plus, Trash2, Users } from "lucide-react";
import { localDb } from "@/lib/ha";
import {
  type Account,
  type BillingStatus,
  createAccount,
  deleteAccount,
  deleteAccountPayment,
  formatMoney,
  listAccountPayments,
  recordAccountPayment,
  setAccountMembers,
  statusFor,
  overdueMonths,
  updateAccount,
} from "@/lib/billing";

type MemberLite = {
  id: string;
  display_name: string;
  email: string;
  account_id: string | null;
};

export function StatusBadge({ status, days }: { status: BillingStatus; days: number }) {
  if (status === "free") return <Badge variant="outline">Free</Badge>;
  if (status === "none") return <Badge variant="outline">No date</Badge>;
  if (status === "overdue") return <Badge variant="destructive">Overdue {days}d</Badge>;
  if (status === "due_soon")
    return <Badge className="bg-amber-500 hover:bg-amber-500/90 text-white">Due in {days}d</Badge>;
  return <Badge variant="secondary">Up to date</Badge>;
}

export function AccountsSection({ members }: { members: MemberLite[] }) {
  const qc = useQueryClient();
  const accountsQuery = useQuery({ queryKey: ["accounts"], queryFn: () => import("@/lib/billing").then((m) => m.listAccounts()) });

  const [createOpen, setCreateOpen] = useState(false);
  const [editing, setEditing] = useState<Account | null>(null);
  const [manageMembers, setManageMembers] = useState<Account | null>(null);
  const [historyFor, setHistoryFor] = useState<Account | null>(null);

  const markPaid = useMutation({
    mutationFn: (accountId: string) => recordAccountPayment({ accountId, expectedDue:accountsQuery.data?.find(a=>a.id===accountId)?.next_due_date ?? null }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["accounts"] });
      qc.invalidateQueries({ queryKey: ["account-payments"] });
      qc.invalidateQueries({ queryKey: ["dashboard-recent-payments"] });
      toast.success("One month paid");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const del = useMutation({
    mutationFn: (id: string) => deleteAccount(id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["accounts"] });
      qc.invalidateQueries({ queryKey: ["members"] });
      toast.success("Account deleted");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const accounts = accountsQuery.data ?? [];
  const memberCountByAccount = useMemo(() => {
    const map = new Map<string, number>();
    for (const m of members) {
      if (m.account_id) map.set(m.account_id, (map.get(m.account_id) ?? 0) + 1);
    }
    return map;
  }, [members]);

  const overdue = accounts
    .map((a) => ({ a, s: statusFor(a) }))
    .filter((x) => x.s.status === "overdue");

  return (
    <>
      {overdue.length > 0 && (
        <Card className="border-destructive/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertCircle className="h-4 w-4" /> Overdue accounts ({overdue.length})
            </CardTitle>
            <CardDescription>Billing accounts past their renewal date.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Account</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Due</TableHead>
                  <TableHead>Late</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {overdue.map(({ a, s }) => (
                  <TableRow key={a.id}>
                    <TableCell className="font-medium">
                      {a.name}
                      <div className="text-xs text-muted-foreground">
                        {memberCountByAccount.get(a.id) ?? 0} member(s)
                      </div>
                    </TableCell>
                    <TableCell>{formatMoney(a.amount_cents, a.currency)}</TableCell>
                    <TableCell className="font-mono text-xs">{a.next_due_date ?? "—"}</TableCell>
                    <TableCell>
                      <Badge variant="destructive">{overdueMonths(a)} month(s) · {s.daysDiff}d</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => markPaid.mutate(a.id)}
                        disabled={markPaid.isPending}
                      >
                        <CheckCircle2 className="mr-1 h-3 w-3" /> Mark paid
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle>Billing accounts</CardTitle>
            <CardDescription>
              Group members into one bill. Each member belongs to a single account.
            </CardDescription>
          </div>
          <Button size="sm" onClick={() => setCreateOpen(true)}>
            <Plus className="mr-1 h-3.5 w-3.5" /> New account
          </Button>
        </CardHeader>
        <CardContent>
          {accountsQuery.isLoading ? (
            <p className="text-sm text-muted-foreground">Loading…</p>
          ) : accountsQuery.error ? (
            <p role="alert" className="text-sm text-destructive">{accountsQuery.error.message}</p>
          ) : accounts.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No accounts yet. Create one to group members under a single monthly bill.
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Members</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Billing day</TableHead>
                  <TableHead>Next due</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {accounts.map((a) => {
                  const s = statusFor(a);
                  return (
                    <TableRow key={a.id}>
                      <TableCell className="font-medium">{a.name}</TableCell>
                      <TableCell>{memberCountByAccount.get(a.id) ?? 0}</TableCell>
                      <TableCell>
                        {a.is_free ? (
                          <span className="text-muted-foreground">—</span>
                        ) : (
                          formatMoney(a.amount_cents, a.currency)
                        )}
                      </TableCell>
                      <TableCell>{a.is_free ? "—" : `Day ${a.billing_day}`}</TableCell>
                      <TableCell className="font-mono text-xs">{a.next_due_date ?? "—"}</TableCell>
                      <TableCell>
                        <StatusBadge status={s.status} days={s.daysDiff} />
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-1">
                          {!a.is_free && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => markPaid.mutate(a.id)}
                              disabled={markPaid.isPending}
                              title="Mark paid"
                            >
                              <CheckCircle2 className="h-3 w-3" />
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setManageMembers(a)}
                            title="Manage members"
                          >
                            <Users className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setHistoryFor(a)}
                            title="History"
                          >
                            <History className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setEditing(a)}
                            title="Edit"
                          >
                            <Pencil className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-destructive hover:text-destructive"
                            onClick={() => {
                              if (
                                confirm(
                                  `Delete account "${a.name}"? Members will be unassigned. Payment history will be removed.`,
                                )
                              )
                                del.mutate(a.id);
                            }}
                            title="Delete"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {createOpen && <EditAccountDialog
        open={createOpen}
        onOpenChange={setCreateOpen}
        mode="create"
        members={members}
        onSaved={() => {
          qc.invalidateQueries({ queryKey: ["accounts"] });
          qc.invalidateQueries({ queryKey: ["members"] });
        }}
      />}
      {editing && (
        <EditAccountDialog
          key={editing.id}
          open={!!editing}
          onOpenChange={(v) => !v && setEditing(null)}
          mode="edit"
          account={editing}
          members={members}
          onSaved={() => {
            qc.invalidateQueries({ queryKey: ["accounts"] });
            qc.invalidateQueries({ queryKey: ["members"] });
          }}
        />
      )}
      {manageMembers && (
        <ManageMembersDialog
          key={manageMembers.id}
          open={!!manageMembers}
          onOpenChange={(v) => !v && setManageMembers(null)}
          account={manageMembers}
          members={members}
          onSaved={() => {
            qc.invalidateQueries({ queryKey: ["members"] });
            qc.invalidateQueries({ queryKey: ["accounts"] });
          }}
        />
      )}
      {historyFor && (
        <AccountHistoryDialog
          key={historyFor.id}
          open={!!historyFor}
          onOpenChange={(v) => !v && setHistoryFor(null)}
          account={historyFor}
        />
      )}
    </>
  );
}

function EditAccountDialog({
  open,
  onOpenChange,
  mode,
  account,
  members,
  onSaved,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  mode: "create" | "edit";
  account?: Account;
  members: MemberLite[];
  onSaved: () => void;
}) {
  const [name, setName] = useState(account?.name ?? "");
  const [isFree, setIsFree] = useState(account?.is_free ?? false);
  const [amount, setAmount] = useState((account?.amount_cents ?? 0) / 100);
  const [currency, setCurrency] = useState(account?.currency ?? "USD");
  const [billingDay, setBillingDay] = useState(account?.billing_day ?? new Date().getDate());
  const [nextDueDate, setNextDueDate] = useState(account?.next_due_date ?? "");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [saving, setSaving] = useState(false);

  const save = async () => {
    if (!name.trim()) {
      toast.error("Name is required");
      return;
    }
    setSaving(true);
    try {
      if (mode === "create") {
        await createAccount({
          name: name.trim(),
          isFree,
          amountCents: Math.round(amount * 100),
          currency: currency.toUpperCase().trim() || "USD",
          billingDay: Math.max(1, Math.min(31, Math.round(billingDay))),
          memberIds: Array.from(selected),
          nextDueDate: nextDueDate || undefined,
        });
        toast.success("Account created");
      } else if (account) {
        await updateAccount({
          id: account.id,
          name: name.trim(),
          isFree,
          amountCents: Math.round(amount * 100),
          currency: currency.toUpperCase().trim() || "USD",
          billingDay: Math.max(1, Math.min(31, Math.round(billingDay))),
          nextDueDate: nextDueDate || undefined,
        });
        toast.success("Account updated");
      }
      onSaved();
      onOpenChange(false);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : String(e));
    } finally {
      setSaving(false);
    }
  };

  const eligibleMembers = mode === "create" ? members.filter((m) => !m.account_id) : [];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>{mode === "create" ? "New account" : `Edit — ${account?.name}`}</DialogTitle>
          <DialogDescription>
            One bill that covers one or more members.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Account name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Maita Household"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="free">Free (no charge)</Label>
              <p className="text-xs text-muted-foreground">For family or comped accounts.</p>
            </div>
            <Switch id="free" checked={isFree} onCheckedChange={setIsFree} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="amount">Monthly amount</Label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                min="0"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                disabled={isFree}
              />
            </div>
            <div>
              <Label htmlFor="currency">Currency</Label>
              <Input
                id="currency"
                value={currency}
                maxLength={3}
                onChange={(e) => setCurrency(e.target.value)}
                disabled={isFree}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="day">Billing day (1–31)</Label>
            <Input
              id="day"
              type="number"
              min="1"
              max="31"
              value={billingDay}
              onChange={(e) => setBillingDay(Number(e.target.value))}
              disabled={isFree}
            />
            <p className="mt-1 text-xs text-muted-foreground">
              Days past month-end clamp to the last day (e.g. 31 → Feb 28).
            </p>
          </div>
          {!isFree && <div className="space-y-2"><Label htmlFor="next-due">Next unpaid month starts</Label><Input id="next-due" type="date" value={nextDueDate} onInput={e=>setNextDueDate(e.currentTarget.value)} onChange={e=>setNextDueDate(e.target.value)}/><p className="text-xs text-muted-foreground">Use a past date to enter an existing overdue balance. Leave blank to calculate from the billing day. This is the oldest unpaid period.</p></div>}
          {mode === "create" && eligibleMembers.length > 0 && (
            <div>
              <Label>Add members</Label>
              <p className="text-xs text-muted-foreground mb-2">
                Only members without an account are shown. You can change members later.
              </p>
              <div role="group" aria-label="Available members" className="px-member-list rounded border border-border">
                {eligibleMembers.map((m) => (
                  <label
                    key={m.id}
                    className="flex cursor-pointer items-center gap-2 border-b border-border px-3 py-2 text-sm last:border-b-0 hover:bg-accent"
                  >
                    <input
                      type="checkbox"
                      checked={selected.has(m.id)}
                      onChange={(e) => {
                        const next = new Set(selected);
                        if (e.target.checked) next.add(m.id);
                        else next.delete(m.id);
                        setSelected(next);
                      }}
                    />
                    <span className="min-w-0 flex-1"><span className="block">{m.display_name}</span><span className="block break-all font-mono text-xs text-muted-foreground">{m.email}</span></span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange(false)} disabled={saving}>
            Cancel
          </Button>
          <Button onClick={save} disabled={saving}>
            {saving ? "Saving…" : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function ManageMembersDialog({
  open,
  onOpenChange,
  account,
  members,
  onSaved,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  account: Account;
  members: MemberLite[];
  onSaved: () => void;
}) {
  const [selected, setSelected] = useState<Set<string>>(
    new Set(members.filter((m) => m.account_id === account.id).map((m) => m.id)),
  );
  const [saving, setSaving] = useState(false);

  const save = async () => {
    setSaving(true);
    try {
      await setAccountMembers(account.id, Array.from(selected));
      toast.success("Members updated");
      onSaved();
      onOpenChange(false);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : String(e));
    } finally {
      setSaving(false);
    }
  };

  const eligible = members.filter((m) => !m.account_id || m.account_id === account.id);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Members — {account.name}</DialogTitle>
          <DialogDescription>
            Check who belongs to this account. Members already on another account aren't shown.
          </DialogDescription>
        </DialogHeader>
        <div role="group" aria-label="Account members" className="px-member-list rounded border border-border">
          {eligible.length === 0 ? (
            <p className="p-3 text-sm text-muted-foreground">No eligible members.</p>
          ) : (
            eligible.map((m) => (
              <label
                key={m.id}
                className="flex cursor-pointer items-center gap-2 border-b border-border px-3 py-2 text-sm last:border-b-0 hover:bg-accent"
              >
                <input
                  type="checkbox"
                  checked={selected.has(m.id)}
                  onChange={(e) => {
                    const next = new Set(selected);
                    if (e.target.checked) next.add(m.id);
                    else next.delete(m.id);
                    setSelected(next);
                  }}
                />
                <span className="min-w-0 flex-1"><span className="block">{m.display_name}</span><span className="block break-all font-mono text-xs text-muted-foreground">{m.email}</span></span>
              </label>
            ))
          )}
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={() => onOpenChange(false)} disabled={saving}>
            Cancel
          </Button>
          <Button onClick={save} disabled={saving}>
            {saving ? "Saving…" : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function AccountHistoryDialog({
  open,
  onOpenChange,
  account,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  account: Account;
}) {
  const qc = useQueryClient();
  const q = useQuery({
    queryKey: ["account-payments", account.id],
    queryFn: () => listAccountPayments(account.id),
    enabled: open,
  });
  const del = useMutation({
    mutationFn: (id: string) => deleteAccountPayment(id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["account-payments", account.id] });
      qc.invalidateQueries({ queryKey: ["accounts"] });
      qc.invalidateQueries({ queryKey: ["dashboard-recent-payments"] });
      toast.success("Payment undone; due date restored");
    },
    onError: (e: Error) => toast.error(e.message),
  });
  const record = useMutation({
    mutationFn: () => recordAccountPayment({ accountId: account.id, expectedDue:(qc.getQueryData<Account[]>(["accounts"])?.find(a=>a.id===account.id) ?? account).next_due_date }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["account-payments", account.id] });
      qc.invalidateQueries({ queryKey: ["accounts"] });
      qc.invalidateQueries({ queryKey: ["dashboard-recent-payments"] });
      toast.success("One month paid");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Payment history — {account.name}</DialogTitle>
          <DialogDescription>All recorded payments for this account.</DialogDescription>
        </DialogHeader>
        {q.isLoading ? (
          <p className="text-sm text-muted-foreground">Loading…</p>
        ) : (q.data ?? []).length === 0 ? (
          <p className="text-sm text-muted-foreground">No payments recorded yet.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Paid</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Period</TableHead>
                <TableHead>Note</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(q.data ?? []).map((p, index) => (
                <TableRow key={p.id}>
                  <TableCell className="font-mono text-xs">
                    {new Date(p.paid_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{formatMoney(p.amount_cents, p.currency)}</TableCell>
                  <TableCell className="font-mono text-xs">
                    {p.period_start ?? "—"} → {p.period_end ?? "—"}
                  </TableCell>
                  <TableCell className="text-xs">{p.note ?? ""}</TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-destructive hover:text-destructive"
                      aria-label="Undo latest payment"
                      disabled={del.isPending || index > 0}
                      title={index === 0 ? "Undo latest payment" : "Undo newer payments first"}
                      onClick={() => {
                        if (confirm("Undo this payment and restore its due date? Only the latest payment can be undone."))
                          del.mutate(p.id);
                      }}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        <DialogFooter>
          {!account.is_free && (
            <Button
              variant="outline"
              onClick={() => record.mutate()}
              disabled={record.isPending}
            >
              Record payment now
            </Button>
          )}
          <Button onClick={() => onOpenChange(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function AccountPickerCell({
  member,
  accounts,
  onChanged,
}: {
  member: MemberLite;
  accounts: Account[];
  onChanged: () => void;
}) {
  const [saving, setSaving] = useState(false);
  const change = async (val: string) => {
    setSaving(true);
    try {
      const accountId = val === "__none__" ? null : val;
      const { error } = await localDb
        .from("plex_home_members")
        .update({ account_id: accountId })
        .eq("id", member.id);
      if (error) throw error;
      onChanged();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : String(e));
    } finally {
      setSaving(false);
    }
  };

  return (
    <Select value={member.account_id ?? "__none__"} onValueChange={change} disabled={saving}>
      <SelectTrigger className="h-8 w-[180px]">
        <SelectValue placeholder="Unassigned" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="__none__">— Unassigned —</SelectItem>
        {accounts.map((a) => (
          <SelectItem key={a.id} value={a.id}>
            {a.name}
            {a.is_free ? " (Free)" : ""}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
