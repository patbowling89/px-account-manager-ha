import React from "react";
import {createRoot, Root} from "react-dom/client";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster,toast} from "sonner";
import {PanelPage} from "./panel";
import {setHass, Hass, command} from "./lib/ha";
import {PortalContext} from "./portal";
import css from "./styles.css?inline";
import toastCss from "sonner/dist/styles.css?inline";

function BackupButton() {
  const [busy,setBusy] = React.useState(false);
  return <button type="button" disabled={busy} className="m-4 rounded-md border px-3 py-2 text-sm" onClick={async()=>{
    setBusy(true);
    try {
      const data = await command("export");
      const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:"application/json"}));
      const a=document.createElement("a"); a.href=url;a.download=`px-accounts-${new Date().toISOString().slice(0,10)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
    } catch(error) {toast.error(error instanceof Error ? error.message : "Backup failed");} finally {setBusy(false);}
  }}>Download local backup</button>;
}
class PXPanel extends HTMLElement {
  private root?:Root;
  private mount = document.createElement("div");
  private portals = document.createElement("div");
  private client = new QueryClient({defaultOptions:{queries:{retry:1,staleTime:15000,refetchOnWindowFocus:true},mutations:{retry:false}}});
  private current?:Hass;
  constructor() {
    super();
    const shadow=this.attachShadow({mode:"open"});
    const style=document.createElement("style");style.textContent=css+toastCss;
    shadow.append(style,this.mount,this.portals);
  }
  set hass(value:Hass) {this.current=value;setHass(value);this.classList.toggle("dark",!!value.themes?.darkMode);this.render();}
  connectedCallback(){this.render();}
  disconnectedCallback(){this.root?.unmount();this.root=undefined;this.client.clear();}
  private render(){
    if (!this.isConnected || !this.current) return;
    this.root ??=createRoot(this.mount);
    if (!this.current.user?.is_admin) {this.client.clear();this.root.render(<p>Administrator access is required.</p>);return;}
    this.root.render(<PortalContext.Provider value={this.portals}><QueryClientProvider client={this.client}><PanelPage/><BackupButton/><Toaster richColors position="bottom-center"/></QueryClientProvider></PortalContext.Provider>);
  }
}
if (!customElements.get("px-account-manager")) customElements.define("px-account-manager",PXPanel);
