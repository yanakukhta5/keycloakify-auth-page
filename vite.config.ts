import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    keycloakify({
      extraThemeProperties: ["locales=ru,en"],
      accountThemeImplementation: "none",
      startKeycloakOptions: {
        dockerExtraArgs: ["-locales=ru,en"]
      }
    })
  ]
});
