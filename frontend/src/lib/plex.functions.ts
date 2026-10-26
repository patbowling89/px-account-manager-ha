import { command } from "./ha";
const operation = (name: string) => (args: {data?: Record<string, unknown>}) => command("plex", {operation: name, ...args.data});
export const testPlexToken = operation("test");
export const sendHomeInvite = operation("invite");
export const removeHomeMember = operation("remove");
export const syncMemberStatuses = operation("sync");
export const convertMember = operation("convert");
export const revokeInvite = operation("revoke");
