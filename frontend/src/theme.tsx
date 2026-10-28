import {createContext, useContext} from "react";

export type ThemePreference = "auto" | "light" | "dark";
export const THEME_STORAGE_KEY = "px-account-manager-theme";
export const ThemeContext = createContext<{preference:ThemePreference;setPreference:(value:ThemePreference)=>void}>({preference:"auto",setPreference:()=>{}});

export function ThemePicker() {
  const {preference,setPreference}=useContext(ThemeContext);
  return <label className="flex items-center gap-2 text-xs text-muted-foreground">
    <span>Theme</span>
    <select aria-label="Color theme" value={preference} onChange={event=>setPreference(event.target.value as ThemePreference)} className="h-9 max-w-44 rounded-md border border-input bg-background px-2 text-sm text-foreground">
      <option value="auto">Follow Home Assistant</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </label>;
}
