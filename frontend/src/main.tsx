import React from "react";
import {createRoot, Root} from "react-dom/client";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster,toast} from "sonner";
import {PanelPage} from "./panel";
import {setHass, Hass, command} from "./lib/ha";
import {PortalContext} from "./portal";
import css from "./styles.css?inline";
import toastCss from "sonner/dist/styles.css?inline";
import {ThemeContext, ThemePreference, THEME_STORAGE_KEY} from "./theme";

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
  private themePreference:ThemePreference = "auto";
  constructor() {
    super();
    try {
      const saved=localStorage.getItem(THEME_STORAGE_KEY);
      if(saved==="light"||saved==="dark") this.themePreference=saved;
    } catch { /* Storage can be unavailable in privacy mode; the selector still works. */ }
    const shadow=this.attachShadow({mode:"open"});
    const style=document.createElement("style");style.textContent=css+toastCss;
    shadow.append(style,this.mount,this.portals);
  }
  set hass(value:Hass) {this.current=value;setHass(value);this.applyTheme();this.render();}
  private applyTheme(){
    const dark=this.themePreference==="dark"||(this.themePreference==="auto"&&!!this.current?.themes?.darkMode);
    this.classList.toggle("dark",dark);
    this.style.colorScheme=dark?"dark":"light";
  }
  private setTheme=(preference:ThemePreference)=>{
    this.themePreference=preference;
    try {localStorage.setItem(THEME_STORAGE_KEY,preference);} catch { /* Keep the in-memory choice. */ }
    this.applyTheme();this.render();
  };
  connectedCallback(){this.render();}
  disconnectedCallback(){this.root?.unmount();this.root=undefined;this.client.clear();}
  private render(){
    if (!this.isConnected || !this.current) return;
    this.root ??=createRoot(this.mount);
    if (!this.current.user?.is_admin) {this.client.clear();this.root.render(<p>Administrator access is required.</p>);return;}
    this.root.render(<ThemeContext.Provider value={{preference:this.themePreference,setPreference:this.setTheme}}><PortalContext.Provider value={this.portals}><QueryClientProvider client={this.client}><PanelPage/><BackupButton/><Toaster theme={this.classList.contains("dark")?"dark":"light"} richColors position="bottom-center"/></QueryClientProvider></PortalContext.Provider></ThemeContext.Provider>);
  }
}
if (!customElements.get("px-account-manager")) customElements.define("px-account-manager",PXPanel);
