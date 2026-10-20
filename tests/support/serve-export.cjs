// Serveert de statische export (out/) zoals Cloudflare Pages: /pad -> pad.html, 404.html, en de headers uit
// out/_headers (zelfde bestand als in productie, dus ook de Content-Security-Policy wordt getest).
// Gebruik: npm run preview  (poort 3100, of PORT=…)
const http = require("node:http");
const fs = require("node:fs/promises");
const { readFileSync, existsSync } = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "../../out");
const port = Number(process.env.PORT) || 3100;
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
};

/** Regels uit _headers: een padpatroon (met *) gevolgd door ingesprongen "Naam: waarde"-regels. */
function loadHeaderRules() {
  const file = path.join(root, "_headers");
  if (!existsSync(file)) return [];
  const rules = [];
  for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    if (!/^\s/.test(line)) {
      const pattern = line
        .trim()
        .replace(/[.+?^${}()|[\]\\]/g, "\\$&")
        .replace(/\*/g, ".*");
      rules.push({ match: new RegExp(`^${pattern}$`), headers: {} });
    } else if (rules.length) {
      const i = line.indexOf(":");
      rules.at(-1).headers[line.slice(0, i).trim()] = line.slice(i + 1).trim();
    }
  }
  return rules;
}
const rules = loadHeaderRules();
const headersFor = (pathname) =>
  Object.assign({}, ...rules.filter((r) => r.match.test(pathname)).map((r) => r.headers));

http
  .createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
      const file = path.resolve(root, "." + pathname);
      if (!file.startsWith(root + path.sep) && file !== root) {
        response.writeHead(403).end();
        return;
      }
      for (const candidate of [file, file + ".html", path.join(file, "index.html")]) {
        try {
          if (!(await fs.stat(candidate)).isFile()) continue;
          response.writeHead(200, {
            ...headersFor(pathname),
            "Content-Type": mime[path.extname(candidate)] || "application/octet-stream",
          });
          response.end(await fs.readFile(candidate));
          return;
        } catch {}
      }
      response.writeHead(404, { ...headersFor(pathname), "Content-Type": mime[".html"] });
      response.end(await fs.readFile(path.join(root, "404.html")));
    } catch {
      response.writeHead(500).end();
    }
  })
  .listen(port, "127.0.0.1", () => console.log(`out/ op http://127.0.0.1:${port}`));
