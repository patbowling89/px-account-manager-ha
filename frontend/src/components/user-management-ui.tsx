import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { localDb } from "@/lib/ha";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Eye, EyeOff, Copy, KeyRound, Pencil } from "lucide-react";
import { toast } from "sonner";

export type CredentialMember = {
  id: string;
  display_name: string;
  email: string;
  status: string;
  plex_username: string | null;
  plex_password: string | null;
  plex_pin: string | null;
  credentials_note: string | null;
};

export function UserManagementSection({ members }: { members: CredentialMember[] }) {
  const [editing, setEditing] = useState<CredentialMember | null>(null);
  const [query, setQuery] = useState("");

  const filtered = members.filter((m) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      m.display_name.toLowerCase().includes(q) ||
      m.email.toLowerCase().includes(q) ||
      (m.plex_username ?? "").toLowerCase().includes(q)
    );
  });

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <CardTitle className="flex items-center gap-2">
              <KeyRound className="h-4 w-4" /> User credentials
            </CardTitle>
            <CardDescription>
              Optional Plex credentials. Visible to Home Assistant administrators; nothing is pushed to Plex.
            </CardDescription>
          </div>
          <Input
            className="w-full sm:w-64"
            placeholder="Search name, email, username…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent>
        {members.length === 0 ? (
          <p className="text-sm text-muted-foreground">No members yet.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Password</TableHead>
                <TableHead>PIN</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((m) => (
                <TableRow key={m.id}>
                  <TableCell className="font-medium">{m.display_name}</TableCell>
                  <TableCell className="font-mono text-xs">{m.email}</TableCell>
                  <TableCell>
                    <Badge variant={m.status === "removed" ? "outline" : "secondary"}>
                      {m.status.replace("_", " ")}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-mono text-xs">
                    {m.plex_username ? (
                      <div className="flex items-center gap-1">
                        <span>{m.plex_username}</span>
                        <CopyBtn value={m.plex_username} />
                      </div>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <SecretCell value={m.plex_password} />
                  </TableCell>
                  <TableCell>
                    <SecretCell value={m.plex_pin} short />
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="outline" onClick={() => setEditing(m)}>
                      <Pencil className="mr-1 h-3 w-3" /> Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>

      <EditCredentialsDialog
        member={editing}
        onOpenChange={(open) => !open && setEditing(null)}
      />
    </Card>
  );
}

function SecretCell({ value, short }: { value: string | null; short?: boolean }) {
  const [shown, setShown] = useState(false);
  if (!value) return <span className="text-muted-foreground">—</span>;
  const mask = short ? "••••" : "••••••••";
  return (
    <div className="flex items-center gap-1">
      <span className="font-mono text-xs">{shown ? value : mask}</span>
      <Button
        size="sm"
        variant="ghost"
        className="h-6 w-6 p-0"
        onClick={() => setShown((s) => !s)}
        aria-label={shown ? "Hide" : "Show"}
      >
        {shown ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
      </Button>
      <CopyBtn value={value} />
    </div>
  );
}

function CopyBtn({ value }: { value: string }) {
  return (
    <Button
      size="sm"
      variant="ghost"
      className="h-6 w-6 p-0"
      aria-label="Copy"
      onClick={() => {
        navigator.clipboard.writeText(value).then(
          () => toast.success("Copied"),
          () => toast.error("Copy failed"),
        );
      }}
    >
      <Copy className="h-3 w-3" />
    </Button>
  );
}

function EditCredentialsDialog({
  member,
  onOpenChange,
}: {
  member: CredentialMember | null;
  onOpenChange: (open: boolean) => void;
}) {
  const qc = useQueryClient();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [note, setNote] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // reset when member changes
  const open = !!member;
  if (member && username === "" && password === "" && pin === "" && note === "") {
    // initialize once per opening
  }

  // Use effect-less init: sync when member id changes
  const [initFor, setInitFor] = useState<string | null>(null);
  if (member && initFor !== member.id) {
    setInitFor(member.id);
    setUsername(member.plex_username ?? "");
    setPassword(member.plex_password ?? "");
    setPin(member.plex_pin ?? "");
    setNote(member.credentials_note ?? "");
    setShowPassword(false);
  }
  if (!member && initFor !== null) {
    setInitFor(null);
  }

  const save = useMutation({
    mutationFn: async () => {
      if (!member) return;
      const { error } = await localDb
        .from("plex_home_members")
        .update({
          plex_username: username.trim() || null,
          plex_password: password || null,
          plex_pin: pin.trim() || null,
          credentials_note: note.trim() || null,
        })
        .eq("id", member.id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["members"] });
      toast.success("Credentials saved");
      onOpenChange(false);
    },
    onError: (e: Error) => toast.error(e.message),
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit credentials</DialogTitle>
          <DialogDescription>
            {member ? `${member.display_name} · ${member.email}` : ""}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3">
          <div className="space-y-2">
            <Label htmlFor="cred-username">Plex username</Label>
            <Input
              id="cred-username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="alexdoe"
              autoComplete="off"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cred-password">Password</Label>
            <div className="flex gap-2">
              <Input
                id="cred-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />
              <Button
                type="button"
                size="icon"
                variant="outline"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="cred-pin">PIN</Label>
            <Input
              id="cred-pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="4-digit PIN"
              inputMode="numeric"
              maxLength={8}
              autoComplete="off"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cred-note">Notes</Label>
            <Textarea
              id="cred-note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Recovery email, security question, etc."
              rows={3}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Stored locally in Home Assistant and included in its backups. Accessible to administrators. Use a password manager for sensitive credentials.
          </p>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={() => save.mutate()} disabled={save.isPending}>
            {save.isPending ? "Saving…" : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
