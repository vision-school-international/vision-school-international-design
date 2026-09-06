import { execSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const transform = `import ts from "typescript";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = ${JSON.stringify(root)};
const source = readFileSync(join(root, "app/concepts/componentCatalog.ts"), "utf8");

const stripped = source
  .replace(/: ComponentSection\\[\\]/g, "")
  .replace(/: readonly ComponentSection\\[\\]/g, "")
  .replace(/as const;/g, ";");

const js = ts.transpileModule(stripped, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
}).outputText;

writeFileSync(join(root, "server", "registry-data.mjs"), js, "utf8");
console.log("Generated server/registry-data.mjs from app/concepts/componentCatalog.ts");
`;

const genPath = join(root, "server", "generate-registry.mjs");
mkdirSync(dirname(genPath), { recursive: true });
writeFileSync(genPath, transform, "utf8");
execSync(`node ${genPath}`, { stdio: "inherit" });
console.log("Registry data generated.");