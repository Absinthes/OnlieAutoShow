import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import Unocss from "unocss/vite";
import { join, resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      configFile: resolve(__dirname, "uno.config.ts"),
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "~/": resolve(__dirname, "src"),
    },
  },
});
