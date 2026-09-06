import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const apiProxyTarget = `http://localhost:${process.env.API_PORT ?? 3000}`;

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    proxy: {
      "^/(api|assets)": {
        target: apiProxyTarget,
        changeOrigin: true,
      },
    },
  },
});