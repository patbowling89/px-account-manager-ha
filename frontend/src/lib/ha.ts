export interface Hass {
  callWS<T = any>(message: Record<string, unknown>): Promise<T>;
  user: { id: string; is_admin: boolean };
  themes?: { darkMode?: boolean };
}
let hass: Hass;
export function setHass(value: Hass) { hass = value; }
export async function command<T = any>(action: string, args: Record<string, unknown> = {}): Promise<T> {
  if (!hass?.user?.is_admin) throw new Error("Home Assistant administrator access is required");
  try { return await hass.callWS<T>({ type: "px_account_manager/command", action, args }); }
  catch (e: any) { throw new Error(e?.message || "Home Assistant connection failed"); }
}
// Narrow compatibility adapter for the original UI's member CRUD and table reads.
// Every operation is authenticated and independently validated by HA.
class Query implements PromiseLike<any> {
  private operation = "select";
  private values: any;
  private filters: [string, unknown][] = [];
  private sort?: [string, boolean];
  private count?: number;
  private one = false;
  constructor(private table: string) {}
  select(_columns?: string) { return this; }
  insert(values: any) { this.operation = "insert"; this.values = values; return this; }
  update(values: any) { this.operation = "update"; this.values = values; return this; }
  delete() { this.operation = "delete"; return this; }
  eq(key: string, value: unknown) { this.filters.push([key, value]); return this; }
  order(key: string, options: {ascending: boolean}) { this.sort = [key, options.ascending]; return this; }
  limit(count: number) { this.count = count; return this; }
  single() { this.one = true; return this; }
  maybeSingle() { return this.single(); }
  async run() {
    try {
      if (this.operation === "select") {
        let rows: any[] = await command("list", {table: this.table});
        rows = rows.filter(row => this.filters.every(([key, value]) => row[key] === value));
        if (this.sort) { const [key, asc] = this.sort; rows.sort((a,b) => String(a[key] ?? "").localeCompare(String(b[key] ?? "")) * (asc ? 1 : -1)); }
        if (this.count !== undefined) rows = rows.slice(0, this.count);
        return {data: this.one ? rows[0] ?? null : rows, error: null};
      }
      if (this.table !== "plex_home_members") throw new Error("Use the billing commands for account changes");
      const id = this.filters.find(([key]) => key === "id")?.[1];
      if (this.operation !== "insert" && typeof id !== "string") throw new Error("A member ID is required");
      const action = this.operation === "insert" ? "create_member" : this.operation === "update" ? "update_member" : "delete_member";
      const data = await command(action, this.operation === "insert" ? this.values : {id, values: this.values});
      return {data, error: null};
    } catch (error) { return {data: null, error}; }
  }
  then<TResult1 = any, TResult2 = never>(onfulfilled?: ((value:any)=>TResult1|PromiseLike<TResult1>)|null,onrejected?:((reason:any)=>TResult2|PromiseLike<TResult2>)|null):Promise<TResult1|TResult2> { return this.run().then(onfulfilled,onrejected); }
}
export const localDb = {
  from: (table:string) => new Query(table),
  auth: { getUser: async () => ({data: {user: hass.user}}) },
};
