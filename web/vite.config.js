import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  server: {
    // changing the API's port to 5173
    // proxy is used to redirect API calls to the backend server
    proxy: {
      "/api": { target: "http://localhost:3000", changeOrigin: true },
      "/public": { target: "http://localhost:3000", changeOrigin: true },
    },
  },
  plugins: [TanStackRouterVite(), react()],
  test: {
    environment: "happy-dom",
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});
