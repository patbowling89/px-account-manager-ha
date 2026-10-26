import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import {fileURLToPath, URL} from "node:url";
export default defineConfig({
  define:{"process.env.NODE_ENV":JSON.stringify("production")},
  plugins:[react(),tailwind()],
  resolve:{alias:{"@":fileURLToPath(new URL("./src",import.meta.url))}},
  build:{outDir:"../custom_components/px_account_manager/www",emptyOutDir:false,minify:true,
    lib:{entry:"src/main.tsx",formats:["es"],fileName:()=>"panel.js"},
    cssCodeSplit:false,
    rollupOptions:{output:{inlineDynamicImports:true}},
  },
});
