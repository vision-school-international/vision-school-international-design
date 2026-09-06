import ts from "typescript";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = "/Users/dev/Projects/vision-school-international-design";
const source = readFileSync(join(root, "app/concepts/componentCatalog.ts"), "utf8");

const stripped = source
  .replace(/: ComponentSection\[\]/g, "")
  .replace(/: readonly ComponentSection\[\]/g, "")
  .replace(/as const;/g, ";");

const js = ts.transpileModule(stripped, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
}).outputText;

writeFileSync(join(root, "server", "registry-data.mjs"), js, "utf8");
console.log("Generated server/registry-data.mjs from app/concepts/componentCatalog.ts");
