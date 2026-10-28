import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { localDb } from "@/lib/ha";
import { ThemePicker } from "@/theme";
import {
  testPlexToken,
  sendHomeInvite,
  removeHomeMember,
  syncMemberStatuses,
  convertMember,
  revokeInvite,
} from "@/lib/plex.functions";
import { buildOutlookSignupUrl, suggestHandles } from "@/lib/outlook-signup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ExternalLink, Mail, MoreHorizontal, RefreshCw, Send, UserPlus } from "lucide-react";
import { toast } from "sonner";
import { listAccounts } from "@/lib/billing";
import { AccountsSection, AccountPickerCell } from "@/components/accounts-ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DashboardSection } from "@/components/dashboard-ui";
import { UserManagementSection } from "@/components/user-management-ui";

type InviteType = "home" | "friend";

type Member = {
  id: string;
  display_name: string;
  email: string;
  status: "not_invited" | "invited" | "accepted" | "failed" | "removed";
  invite_type: InviteType;
  plex_user_id: string | null;
  notes: string | null;
  last_error: string | null;
  account_id: string | null;
  plex_username: string | null;
  plex_password: string | null;
  plex_pin: string | null;
  credentials_note: string | null;
  created_at: string;
};

export function PanelPage() {
  const qc = useQueryClient();

  const membersQuery = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const { data, error } = await localDb
        .from("plex_home_members")
        .select("id, display_name, email, status, invite_type, plex_user_id, notes, last_error, account_id, plex_username, plex_password, plex_pin, credentials_note, created_at")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as Member[];
    },
  });

  const accountsQuery = useQuery({
    queryKey: ["accounts"],
    queryFn: listAccounts,
  });
  const accounts = accountsQuery.data ?? [];

  const testToken = testPlexToken;
  const sendInvite = sendHomeInvite;
  const removeMember = removeHomeMember;
  const syncStatuses = syncMemberStatuses;
  const convertMemberFn = convertMember;
  const revokeInviteFn = revokeInvite;

  const inviteMutation = useMutation({
    mutationFn: (memberId: string) => sendInvite({ data: { memberId } }),
    onSuccess: (res) => {
      qc.invalidateQueries({ queryKey: ["members"] });
      if (res.ok) toast.success("Plex invite sent");
      else toast.error(`Invite failed: ${res.error}`);
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const revokeMutation = useMutation({
    mutationFn: (memberId: string) => revokeInviteFn({ data: { memberId } }),
    onSuccess: (res) => {
      qc.invalidateQueries({ queryKey: ["members"] });
      if (res.ok) toast.success("Invite revoked");
      else toast.error(`Revoke failed: ${res.error}`);
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const removeMutation = useMutation({
    mutationFn: (args: { memberId: string; scope: "panel_only" | "plex" | "home_only" | "friend_only" }) =>
      removeMember({ data: args }),
    onSuccess: (res) => {
      qc.invalidateQueries({ queryKey: ["members"] });
      if (res.ok) toast.success("Done");
      else toast.error(`Failed: ${res.error}`);
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const convertMutation = useMutation({
    mutationFn: (args: { memberId: string; toType: "home" | "friend" }) =>
      convertMemberFn({ data: args }),
    onSuccess: (res) => {
      qc.invalidateQueries({ queryKey: ["members"] });
      if (res.ok) toast.success("Converted — Plex invite sent");
      else toast.error(`Convert failed: ${res.error}`);
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const syncMutation = useMutation({
    mutationFn: () => syncStatuses({}),
    onSuccess: (res) => {
      qc.invalidateQueries({ queryKey: ["members"] });
      if (res.ok) toast.success(`Synced — ${res.updated} updated, ${res.imported} imported`);
      else toast.error(`Sync failed: ${res.error}`);
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const handleTestToken = async () => {
    try {
      const res = await testToken({});
      if (res.ok) toast.success("Plex token works — account authenticated. Use Sync to load members.");
      else toast.error(`Plex token failed: ${res.error}`);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : String(e));
    }
  };

  const all = membersQuery.data ?? [];
  const active = all.filter((m) => m.status !== "removed");
  const inactive = all.filter((m) => m.status === "removed");
  const memberLite = all.map((m) => ({
    id: m.id,
    display_name: m.display_name,
    email: m.email,
    account_id: m.account_id,
  }));
  const memberLiteWithStatus = all.map((m) => ({
    id: m.id,
    display_name: m.display_name,
    email: m.email,
    status: m.status,
    account_id: m.account_id,
    created_at: m.created_at,
  }));
  const credentialMembers = all.map((m) => ({
    id: m.id,
    display_name: m.display_name,
    email: m.email,
    status: m.status,
    plex_username: m.plex_username,
    plex_password: m.plex_password,
    plex_pin: m.plex_pin,
    credentials_note: m.credentials_note,
  }));
  const accountById = new Map(accounts.map((a) => [a.id, a]));

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex flex-wrap max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <div className="flex items-center gap-3">
            <img src="/px_account_manager_static/logo.jpg" alt="" className="h-9 w-9 rounded-md object-cover" />
            <div>
              <h1 className="text-lg font-semibold leading-tight tracking-tight">PX Account Manager</h1>
              <p className="text-xs text-muted-foreground">Members, billing, and credentials in one place.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <ThemePicker />
            <Button variant="outline" size="sm" onClick={handleTestToken}>
              Test token
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => syncMutation.mutate()}
              disabled={syncMutation.isPending}
            >
              <RefreshCw className="mr-2 h-3.5 w-3.5" />
              Sync
            </Button>
            <Button variant="ghost" size="sm" onClick={() => window.location.assign("/lovelace")}>
              Home Assistant
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="billing">Payment Control</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <DashboardSection members={memberLiteWithStatus} accounts={accounts} />
          </TabsContent>

          <TabsContent value="members" className="space-y-6">
            <Tabs defaultValue="list" className="space-y-4">
              <TabsList>
                <TabsTrigger value="list">Members list</TabsTrigger>
                <TabsTrigger value="new">Add new</TabsTrigger>
              </TabsList>

              <TabsContent value="new">
                <NewMemberCard onCreated={() => qc.invalidateQueries({ queryKey: ["members"] })} />
              </TabsContent>

              <TabsContent value="list" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Active members</CardTitle>
                    <CardDescription>
                      People you're onboarding to your Plex Home. Assign each to a billing account.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {membersQuery.isLoading ? (
                      <p className="text-sm text-muted-foreground">Loading…</p>
                    ) : membersQuery.error ? (
                      <p className="text-sm text-destructive">
                        {(membersQuery.error as Error).message}
                      </p>
                    ) : active.length === 0 ? (
                      <p className="text-sm text-muted-foreground">
                        No active members yet. Use "Add new" to get started.
                      </p>
                    ) : (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Account</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {active.map((m) => {
                            const acc = m.account_id ? accountById.get(m.account_id) : null;
                            return (
                              <TableRow key={m.id}>
                                <TableCell className="font-medium">{m.display_name}</TableCell>
                                <TableCell className="font-mono text-xs">{m.email}</TableCell>
                                <TableCell>
                                  <Badge variant="outline">
                                    {m.invite_type === "friend" ? "Friend" : "Home"}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  <StatusBadge status={m.status} />
                                  {m.last_error && (
                                    <p className="mt-1 text-xs text-destructive">{m.last_error}</p>
                                  )}
                                </TableCell>
                                <TableCell>
                                  <AccountPickerCell
                                    member={{
                                      id: m.id,
                                      display_name: m.display_name,
                                      email: m.email,
                                      account_id: m.account_id,
                                    }}
                                    accounts={accounts}
                                    onChanged={() => {
                                      qc.invalidateQueries({ queryKey: ["members"] });
                                      qc.invalidateQueries({ queryKey: ["accounts"] });
                                    }}
                                  />
                                  {acc?.is_free && (
                                    <p className="mt-1 text-xs text-muted-foreground">Free</p>
                                  )}
                                </TableCell>
                                <TableCell className="text-right">
                                  <div className="flex justify-end gap-1">
                                    {m.status !== "accepted" && (
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => inviteMutation.mutate(m.id)}
                                        disabled={inviteMutation.isPending}
                                      >
                                        <Send className="mr-1 h-3 w-3" />
                                        {m.status === "invited" ? "Resend" : "Invite"}
                                      </Button>
                                    )}
                                    <DropdownMenu>
                                      <DropdownMenuTrigger asChild>
                                        <Button size="sm" variant="ghost">
                                          <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent align="end" className="w-64">
                                        {m.status === "invited" && (
                                          <>
                                            <DropdownMenuItem
                                              onSelect={() => {
                                                if (confirm(`Revoke the pending invite for ${m.display_name}?`)) {
                                                  revokeMutation.mutate(m.id);
                                                }
                                              }}
                                            >
                                              Revoke pending invite
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                          </>
                                        )}
                                        {m.invite_type === "friend" && (
                                          <>
                                            <DropdownMenuLabel>Convert</DropdownMenuLabel>
                                            <DropdownMenuItem
                                              onSelect={() => {
                                                if (confirm(`Promote ${m.display_name} to your Plex Home? Their library share will be removed and a Home invite will be sent.`)) {
                                                  convertMutation.mutate({ memberId: m.id, toType: "home" });
                                                }
                                              }}
                                            >
                                              Promote to Plex Home
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                          </>
                                        )}

                                        <DropdownMenuLabel>Remove</DropdownMenuLabel>
                                        <DropdownMenuItem
                                          onSelect={() => {
                                            if (confirm(`Remove ${m.display_name} from your Plex Home only? Library access (friend share) is preserved if present.`)) {
                                              removeMutation.mutate({ memberId: m.id, scope: "home_only" });
                                            }
                                          }}
                                        >
                                          Remove from Home only
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                          onSelect={() => {
                                            if (confirm(`Revoke library access for ${m.display_name}? Their Home membership (if any) is kept.`)) {
                                              removeMutation.mutate({ memberId: m.id, scope: "friend_only" });
                                            }
                                          }}
                                        >
                                          Revoke library access only
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                          className="text-destructive focus:text-destructive"
                                          onSelect={() => {
                                            if (confirm(`Fully remove ${m.display_name} from Plex (Home + library)? They will move to Inactive members.`)) {
                                              removeMutation.mutate({ memberId: m.id, scope: "plex" });
                                            }
                                          }}
                                        >
                                          Remove completely (Home + library)
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem
                                          onSelect={() => {
                                            if (confirm(`Remove ${m.display_name} from this panel only? Their Plex access stays untouched.`)) {
                                              removeMutation.mutate({ memberId: m.id, scope: "panel_only" });
                                            }
                                          }}
                                        >
                                          Remove from panel only
                                        </DropdownMenuItem>
                                      </DropdownMenuContent>
                                    </DropdownMenu>
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

                {inactive.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Inactive members</CardTitle>
                      <CardDescription>
                        Removed from your Plex Home and library. Re-invite to restore access or remove
                        them from the panel entirely.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Last type</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {inactive.map((m) => (
                            <TableRow key={m.id}>
                              <TableCell className="font-medium">{m.display_name}</TableCell>
                              <TableCell className="font-mono text-xs">{m.email}</TableCell>
                              <TableCell>
                                <Badge variant="outline">
                                  {m.invite_type === "friend" ? "Friend" : "Home"}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <div className="flex justify-end gap-1">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => inviteMutation.mutate(m.id)}
                                    disabled={inviteMutation.isPending}
                                  >
                                    <Send className="mr-1 h-3 w-3" />
                                    Re-invite
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    className="text-destructive hover:text-destructive"
                                    onClick={() => {
                                      if (confirm(`Permanently remove ${m.display_name} from the panel?`)) {
                                        removeMutation.mutate({ memberId: m.id, scope: "panel_only" });
                                      }
                                    }}
                                  >
                                    Delete from panel
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6">
            <AccountsSection members={memberLite} />
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <UserManagementSection members={credentialMembers} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function StatusBadge({ status }: { status: Member["status"] }) {
  const map: Record<Member["status"], { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
    not_invited: { label: "Not invited", variant: "outline" },
    invited: { label: "Invited", variant: "secondary" },
    accepted: { label: "Accepted", variant: "default" },
    failed: { label: "Failed", variant: "destructive" },
    removed: { label: "Removed", variant: "outline" },
  };
  const cfg = map[status];
  return <Badge variant={cfg.variant}>{cfg.label}</Badge>;
}

function NewMemberCard({ onCreated }: { onCreated: () => void }) {
  const [displayName, setDisplayName] = useState("");
  const [handle, setHandle] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [inviteType, setInviteType] = useState<InviteType>("home");
  const [needsOutlook, setNeedsOutlook] = useState(true);
  const [saving, setSaving] = useState(false);

  const suggestions = displayName && needsOutlook ? suggestHandles(displayName) : [];

  const openOutlook = () => {
    if (!handle.trim()) {
      toast.error("Enter a desired handle first");
      return;
    }
    window.open(buildOutlookSignupUrl(handle), "_blank", "noopener,noreferrer");
    if (!email) setEmail(`${handle.trim().toLowerCase()}@outlook.com`);
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const { data: userData } = await localDb.auth.getUser();
    const ownerId = userData.user?.id;
    if (!ownerId) {
      toast.error("Not signed in");
      setSaving(false);
      return;
    }
    const { error } = await localDb.from("plex_home_members").insert({
      owner_id: ownerId,
      display_name: displayName.trim(),
      email: email.trim().toLowerCase(),
      invite_type: inviteType,
      notes: notes.trim() || null,
    });
    setSaving(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    setDisplayName("");
    setHandle("");
    setEmail("");
    setNotes("");
    onCreated();
    toast.success("Member added");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserPlus className="h-4 w-4" /> Add a new member
        </CardTitle>
        <CardDescription>
          Choose <strong>Plex Home</strong> (full home member, ~15 slot limit) or{" "}
          <strong>Friend / library share</strong> (no slot, just library access). If they need a
          new mailbox, leave "Create Outlook address" on and use the signup helper.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={save} className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2 md:col-span-2">
            <Label>Invite type</Label>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setInviteType("home")}
                className={`rounded-md border px-3 py-1.5 text-sm ${
                  inviteType === "home"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:bg-accent"
                }`}
              >
                Plex Home member
              </button>
              <button
                type="button"
                onClick={() => setInviteType("friend")}
                className={`rounded-md border px-3 py-1.5 text-sm ${
                  inviteType === "friend"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:bg-accent"
                }`}
              >
                Friend (library share)
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="display">Display name</Label>
            <Input
              id="display"
              required
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Alex Doe"
            />
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={needsOutlook}
                onChange={(e) => setNeedsOutlook(e.target.checked)}
                className="h-3.5 w-3.5"
              />
              Create a new Outlook address
            </Label>
            {needsOutlook && (
              <>
                <div className="flex gap-2">
                  <Input
                    id="handle"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    placeholder="alex.doe"
                  />
                  <Button type="button" variant="outline" onClick={openOutlook}>
                    <ExternalLink className="mr-1 h-3.5 w-3.5" />
                    Open signup
                  </Button>
                </div>
                {suggestions.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {suggestions.map((s) => (
                      <button
                        key={s}
                        type="button"
                        className="rounded border border-border px-2 py-0.5 text-xs text-muted-foreground hover:bg-accent"
                        onClick={() => setHandle(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="email">Final email address</Label>
            <div className="flex gap-2">
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex.doe@outlook.com"
              />
              <Mail className="mt-2 h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground">
              Paste the address you actually created during the Outlook signup.
            </p>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="notes">Notes (optional)</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Relationship, libraries to share, password reminder location, etc."
              rows={2}
            />
          </div>

          <div className="md:col-span-2">
            <Button type="submit" disabled={saving}>
              {saving ? "Saving…" : "Add member"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
