const { chromium } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const routes = [
  "/",
  "/services",
  "/prijzen",
  "/contact",
  "/diensten/webdesign",
  "/diensten/lokale-seo",
  "/diensten/web-apps",
  "/diensten/ai-automatisaties",
  "/diensten/onderhoud-hosting",
  "/projecten",
  "/projecten/taxi-bornem",
  "/projecten/primelabs",
  "/over-ons",
  "/privacy",
  "/algemene-voorwaarden",
];
const added = routes.slice(9);
(async () => {
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  });
  try {
    const page = await browser.newPage({ reducedMotion: "reduce" });
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    const results = [];
    fs.mkdirSync("tests/artifacts/portfolio", { recursive: true });
    for (const width of [320, 390, 768, 1280, 1920, 2560]) {
      let footerReference;
      for (const route of routes) {
        await page.setViewportSize({ width, height: width >= 1920 ? 1080 : 900 });
        const response = await page.goto("http://127.0.0.1:3000" + route);
        assert.equal(response.status(), 200, route);
        await page.evaluate(() => document.fonts.ready);
        const geometry = await page.evaluate(() => {
          const edge = (e) => {
            const r = e.getBoundingClientRect();
            return +(r.left + parseFloat(getComputedStyle(e).paddingLeft)).toFixed(2);
          };
          const nav = document.querySelector(".nav-inner"),
            footer = document.querySelector(".footer-inner");
          const edges = [
            nav,
            footer,
            ...document.querySelectorAll(".page-section,.portfolio-hero-copy"),
          ].map(edge);
          const clipped = [
            ...document.querySelectorAll(
              ".portfolio-hero-copy h1,.project-card-body h2,.project-card-body>p,.case-step-copy h3,.case-step-copy>p,.about-principle-card h3,.about-principle-card p,.legal-article h2",
            ),
          ]
            .filter((e) => e.scrollWidth > e.clientWidth + 2)
            .map((e) => e.textContent);
          const fr = footer.getBoundingClientRect();
          const footerGeometry = [
            ...footer.querySelectorAll("h2,.footer-call,.footer-columns,.footer-bottom"),
          ].map((e) => {
            const r = e.getBoundingClientRect();
            return [
              Math.round(r.x - fr.x),
              Math.round(r.y - fr.y),
              Math.round(r.width),
              Math.round(r.height),
            ];
          });
          return {
            viewport: document.documentElement.clientWidth,
            scrollWidth: document.documentElement.scrollWidth,
            edgeSpread: Math.max(...edges) - Math.min(...edges),
            clipped,
            footerGeometry,
            h1Count: document.querySelectorAll("h1").length,
          };
        });
        assert.equal(geometry.h1Count, 1, route + " H1");
        assert(geometry.scrollWidth <= geometry.viewport + 1, route + " overflow at " + width);
        assert(geometry.edgeSpread <= 1, route + " content edges at " + width);
        assert.deepEqual(geometry.clipped, [], route + " clipped text at " + width);
        if (!footerReference) footerReference = geometry.footerGeometry;
        assert.deepEqual(
          geometry.footerGeometry,
          footerReference,
          route + " shared footer at " + width,
        );
        if (added.includes(route)) {
          await page.locator("main img").evaluateAll((imgs) =>
            Promise.all(
              imgs.map((i) => {
                i.loading = "eager";
                return i.decode().catch(() => {});
              }),
            ),
          );
          const broken = await page
            .locator("main img")
            .evaluateAll((imgs) =>
              imgs.filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.src),
            );
          assert.deepEqual(broken, [], route + " assets");
          if ([390, 1920].includes(width))
            await page.screenshot({
              path: `tests/artifacts/portfolio/${route.slice(1).replaceAll("/", "-")}-${width}.png`,
              fullPage: true,
            });
        }
        results.push({ route, width, ...geometry });
      }
    }
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("http://127.0.0.1:3000/projecten");
    assert.equal(await page.locator(".project-card").count(), 2);
    await page.getByRole("button", { name: "Lokale SEO", exact: true }).click();
    assert.equal(await page.locator(".project-card").count(), 1);
    assert.match(await page.locator(".project-card").innerText(), /Taxi Bornem/);
    await page.getByRole("button", { name: "Web apps", exact: true }).click();
    assert.equal(await page.locator(".project-card").count(), 0);
    assert(await page.locator(".project-empty").isVisible());
    await page.getByRole("button", { name: "Alle projecten", exact: true }).click();
    await page.getByRole("link", { name: "Bekijk de case van Taxi Bornem" }).click();
    await page.waitForURL("**/projecten/taxi-bornem");
    await page.locator(".next-case").click();
    await page.waitForURL("**/projecten/primelabs");
    await page.locator(".next-case").click();
    await page.waitForURL("**/projecten/taxi-bornem");
    const invalid = await page.goto("http://127.0.0.1:3000/projecten/bestaat-niet");
    assert.equal(invalid.status(), 404);
    for (const route of ["/privacy", "/algemene-voorwaarden"]) {
      await page.goto("http://127.0.0.1:3000" + route);
      assert.match(await page.locator('meta[name="robots"]').getAttribute("content"), /noindex/);
      await page.locator(".legal-toc nav a").last().click();
      const target = await page.locator(".legal-toc nav a").last().getAttribute("href");
      assert(await page.locator(target).isVisible());
    }
    assert.deepEqual(errors, [], "browser errors");
    fs.writeFileSync(
      "tests/artifacts/portfolio/results.json",
      JSON.stringify({ pages: results, interactions: "passed", errors }, null, 2),
    );
    console.log(
      `${results.length} page/viewport checks passed; filters, case navigation, 404 and legal anchors passed.`,
    );
  } finally {
    await browser.close();
  }
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
