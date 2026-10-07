// Checks built HTML and local source assets. Does not simulate browser geometry.
const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
const { JSDOM } = require("jsdom");
const root = path.resolve(__dirname, "..");
const design = require("../data/services-design.json");
const normalize = (text) => text.replace(/\s+/g, " ").trim();
const routes = [
  "/",
  "/services",
  "/contact",
  "/prijzen",
  "/projecten",
  "/projecten/taxi-bornem",
  "/projecten/primelabs",
  "/over-ons",
  "/privacy",
  "/algemene-voorwaarden",
  ...Object.keys(design).map((slug) => "/diensten/" + slug),
];
const pages = [];
const knownMissingRoutes = new Set();
for (const route of routes) {
  const file = path.join(
    root,
    ".next/server/app",
    route === "/" ? "index.html" : route.slice(1) + ".html",
  );
  const document = new JSDOM(fs.readFileSync(file, "utf8")).window.document;
  assert.equal(document.querySelectorAll("h1").length, 1, route + " one H1");
  assert.equal(document.querySelectorAll("header").length, 1, route + " one navbar");
  assert(document.querySelector("main#main-content"), route + " main landmark");
  assert.match(document.querySelector("meta[name=viewport]").content, /width=device-width/);
  assert.equal(
    document.querySelector(".site-header").getAttribute("data-height"),
    null,
    "no old 130px navbar",
  );
  const text = normalize(document.querySelector("main").textContent);
  const slug = route.split("/").at(-1);
  if (design[slug]) {
    assert.equal(document.querySelectorAll("main>section").length, 7, route + " complete sections");
    for (const item of design[slug].faq) {
      assert(text.includes(normalize(item.q)), item.q);
      assert(text.includes(normalize(item.a)), item.a);
    }
    for (const item of design[slug].process.steps)
      assert(text.includes(normalize(item.titel)), item.titel);
  }
  const broken = [];
  for (const anchor of document.querySelectorAll('a[href^="/"]')) {
    const target = new URL(anchor.href, "http://localhost");
    if (!routes.includes(target.pathname) && !knownMissingRoutes.has(target.pathname))
      broken.push(target.pathname);
    if (
      target.pathname === route &&
      target.hash &&
      !document.getElementById(decodeURIComponent(target.hash.slice(1)))
    )
      broken.push(target.hash);
  }
  assert.deepEqual(broken, [], route + " internal routes");
  pages.push({
    route,
    h1: normalize(document.querySelector("h1").textContent),
    mainSections: document.querySelectorAll("main section").length,
    status: "passed",
  });
}
const assets = new Set();
function walk(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)],
    );
}
for (const dir of ["app", "components", "data"])
  for (const file of walk(path.join(root, dir))) {
    if (!/\.(tsx|css|json)$/.test(file)) continue;
    const source = fs.readFileSync(file, "utf8");
    assert(!source.includes("https://www.figma.com/api/mcp/asset/"), file + " temporary Figma URL");
    for (const match of source.matchAll(/["'`(](\/(?:figma|images|brand)\/[^"'`)\s{}]+)/g)) {
      if (path.extname(match[1])) assets.add(match[1]);
    }
    const prefix = source.match(/const assetPathPrefix = ["']([^"']+)["']/)?.[1];
    if (prefix)
      for (const match of source.matchAll(/\$\{assetPathPrefix\}\/([^`]+)/g))
        assets.add(prefix + "/" + match[1]);
  }
for (const asset of assets) {
  const file = path.join(root, "public", asset);
  assert(fs.existsSync(file), asset + " exists");
  const bytes = fs.readFileSync(file);
  assert(bytes.length > 0, asset + " nonempty");
  assert(
    !/<html|<!doctype html/i.test(bytes.subarray(0, 300).toString()),
    asset + " is not an error page",
  );
  if (asset.endsWith(".svg")) assert(/<svg[\s>]/.test(bytes.toString()), asset + " valid SVG root");
}
const result = {
  environment: "built HTML and source files; no layout engine",
  pages,
  localAssets: assets.size,
  knownMissingContent: [
    "Legal pages are drafts; official company details, retention and processing providers need confirmation",
    "Case request metrics and customer quotes are not supplied in Figma",
  ],
  browserVerification:
    "See portfolio/results.json, layout-verification.json and visual-audit.json for browser checks",
};
fs.mkdirSync(path.join(__dirname, "artifacts"), { recursive: true });
fs.writeFileSync(
  path.join(__dirname, "artifacts", "structure-results.json"),
  JSON.stringify(result, null, 2),
);
console.log(`${pages.length} pages and ${assets.size} local assets checked.`);
