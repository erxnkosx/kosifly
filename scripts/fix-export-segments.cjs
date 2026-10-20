// Na `next build` op Windows: Next 16 schrijft de prefetch-bestanden van de statische export als
// out/contact/__next.contact/__PAGE__.txt (path.relative geeft backslashes), terwijl de client
// out/contact/__next.contact.__PAGE__.txt opvraagt. Dit script zet ze op de verwachte, platte naam.
// Op Linux/macOS (bv. de Cloudflare-build) bestaan zulke mappen niet en doet het niets.
const fs = require("node:fs");
const path = require("node:path");
const out = path.resolve(__dirname, "../out");

let moved = 0;
function flatten(dir, prefix, target) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const name = `${prefix}.${entry.name}`;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) flatten(full, name, target);
    else {
      fs.renameSync(full, path.join(target, name));
      moved++;
    }
  }
}
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir, entry.name);
    if (entry.name.startsWith("__next.")) {
      flatten(full, entry.name, dir);
      fs.rmSync(full, { recursive: true });
    } else walk(full);
  }
}

if (fs.existsSync(out)) walk(out);
if (moved) console.log(`fix-export-segments: ${moved} prefetchbestanden hernoemd`);
