import fs from "fs";
import path from "path";

const routes = ["klienti", "sluzby", "media", "jak-to-funguje", "kontakt"];

const distDir = path.resolve("dist");
const srcIndex = path.join(distDir, "index.html");

if (!fs.existsSync(srcIndex)) {
  console.error("Missing dist/index.html. Run build first.");
  process.exit(1);
}

for (const r of routes) {
  const dir = path.join(distDir, r);
  fs.mkdirSync(dir, { recursive: true });
  fs.copyFileSync(srcIndex, path.join(dir, "index.html"));
  console.log(`✓ created ${r}/index.html`);
}