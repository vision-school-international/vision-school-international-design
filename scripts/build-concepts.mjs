import ts from "typescript";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const conceptFiles = [
  "app/concepts/ComponentConcepts.tsx",
  "app/concepts/SearchNavigationConcept.tsx",
  "app/concepts/RegionalBranchDirectoryConcept.tsx",
];

// section keys of the catalog, used to recognize object-literal keys as sections
const catalogSource = readFileSync(join(root, "app/concepts/componentCatalog.ts"), "utf8");
const sectionKeys = [...catalogSource.matchAll(/key: "([a-z]+)",/g)].map((m) => m[1]);
const sectionKeySet = new Set(sectionKeys);

const results = [];

for (const file of conceptFiles) {
  const source = readFileSync(join(root, file), "utf8");
  const sf = ts.createSourceFile(file, source, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TSX);

  // Find each exported array, then each object inside it
  const visit = (node, exportedArrayName) => {
    if (ts.isObjectLiteralExpression(node)) {
      const props = new Map();
      for (const prop of node.properties) {
        if (ts.isPropertyAssignment(prop) && ts.isIdentifier(prop.name)) {
          props.set(prop.name.text, prop);
        }
      }
      const keyProp = props.get("key");
      const nameProp = props.get("name");
      const sectionsProp = props.get("sections");

      if (
        keyProp &&
        nameProp &&
        sectionsProp &&
        ts.isStringLiteral(keyProp.initializer)
      ) {
        const sections = [];
        if (ts.isObjectLiteralExpression(sectionsProp.initializer)) {
          for (const prop of sectionsProp.initializer.properties) {
            if (ts.isPropertyAssignment(prop) && ts.isIdentifier(prop.name) && sectionKeySet.has(prop.name.text)) {
              sections.push(prop.name.text);
            }
          }
        }
        results.push({
          key: keyProp.initializer.text,
          name: nameProp.initializer.text,
          sections,
          source: exportedArrayName ?? file,
        });
      }
    }
    ts.forEachChild(node, (child) => visit(child, exportedArrayName));
  };

  sf.forEachChild((node) => {
    if (ts.isVariableStatement(node)) {
      const decl = node.declarationList.declarations[0];
      if (decl && ts.isIdentifier(decl.name)) {
        visit(decl.initializer, decl.name.text);
      }
    } else {
      visit(node, undefined);
    }
  });
}

const outFile = join(root, "server", "registry-concepts.mjs");
mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(
  outFile,
  `export const concepts = ${JSON.stringify(results, null, 2)};\n`,
  "utf8",
);
console.log(`Extracted ${results.length} concepts with section mappings -> server/registry-concepts.mjs`);