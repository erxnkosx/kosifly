// Preview Next's static export without an external server dependency.
const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");
const root = path.resolve(__dirname, "../../out");
const mime = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".txt": "text/plain",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
};
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
            "Content-Type": mime[path.extname(candidate)] || "application/octet-stream",
          });
          response.end(await fs.readFile(candidate));
          return;
        } catch {}
      }
      response.writeHead(404, { "Content-Type": "text/html" });
      response.end(await fs.readFile(path.join(root, "404.html")));
    } catch {
      response.writeHead(500).end();
    }
  })
  .listen(3100, "127.0.0.1");
