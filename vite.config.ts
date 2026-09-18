import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import react from "@vitejs/plugin-react";
import { spawn, type ChildProcess } from "node:child_process";
import { fileURLToPath } from "node:url";

const apiProxyTarget = `http://localhost:${process.env.API_PORT ?? 3000}`;

const startApiServer = (): Plugin => {
  const apiPort = process.env.API_PORT ?? process.env.PORT ?? "3000";
  const apiPath = fileURLToPath(new URL("./server/index.mjs", import.meta.url));
  const registryPaths = new Set([
    fileURLToPath(new URL("./server/registry-data.mjs", import.meta.url)),
    fileURLToPath(new URL("./server/registry-concepts.mjs", import.meta.url)),
  ]);
  let apiProcess: ChildProcess | undefined;
  let restartTimer: ReturnType<typeof setTimeout> | undefined;
  let closed = false;

  const start = () => {
    if (closed) return;
    apiProcess = spawn(process.execPath, [apiPath], {
      env: { ...process.env, PORT: process.env.PORT ?? apiPort },
      stdio: "inherit",
    });
  };

  const restart = () => {
    if (closed) return;
    if (restartTimer) clearTimeout(restartTimer);
    restartTimer = setTimeout(() => {
      restartTimer = undefined;
      const previous = apiProcess;
      if (!previous || previous.killed) {
        start();
        return;
      }
      previous.once("exit", () => start());
      previous.kill("SIGTERM");
    }, 50);
  };

  return {
    name: "vision-school-api",
    configureServer(server: ViteDevServer) {
      start();

      const onChange = (file: string) => {
        if (registryPaths.has(file)) restart();
      };
      server.watcher.on("change", onChange);

      server.httpServer?.once("close", () => {
        closed = true;
        server.watcher.off("change", onChange);
        if (restartTimer) clearTimeout(restartTimer);
        if (apiProcess && !apiProcess.killed) apiProcess.kill("SIGTERM");
      });
    },
  };
};

export default defineConfig({
  plugins: [react(), startApiServer()],
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
