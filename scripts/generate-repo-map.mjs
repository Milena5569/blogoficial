import fs from "fs";
import path from "path";

const root = process.cwd();

function walk(dir, depth = 0) {
  const files = fs.readdirSync(dir);

  let output = "";

  for (const file of files) {
    if (file === "node_modules" || file.startsWith(".")) continue;

    const full = path.join(dir, file);
    const stat = fs.statSync(full);

    const indent = "  ".repeat(depth);

    output += `${indent}- ${file}\n`;

    if (stat.isDirectory()) {
      // Skip build artifacts and generated directories
      const skipDirs = ["dist", ".astro", ".vercel", ".next"];
      if (!skipDirs.includes(file)) {
        output += walk(full, depth + 1);
      }
    }
  }

  return output;
}

const tree = walk(root);

const content = `# Repository Map

Generated automatically.

${tree}
`;

fs.writeFileSync("docs/REPO_MAP.generated.md", content);

console.log("Repository map generated.");
