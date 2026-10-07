const { chromium } = require("playwright");
const fs = require("node:fs");
const assert = require("node:assert/strict");
(async () => {
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
  });
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1500 },
    reducedMotion: "reduce",
  });
  const routes = [
    "/",
    "/services",
    "/contact",
    "/diensten/webdesign",
    "/diensten/lokale-seo",
    "/diensten/web-apps",
    "/diensten/ai-automatisaties",
    "/diensten/onderhoud-hosting",
  ];
  const results = [];
  for (const width of [1920, 1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 1500 });
    let reference;
    for (const route of routes) {
      const response = await page.goto("http://127.0.0.1:3000" + route);
      assert.equal(response.status(), 200);
      const footer = page.locator(".site-footer");
      assert.equal(await footer.count(), 1);
      await footer.scrollIntoViewIfNeeded();
      await page.evaluate(() => document.fonts.ready);
      await footer.locator("img").evaluateAll((imgs) => Promise.all(imgs.map((i) => i.decode())));
      const data = await footer.evaluate((el) => {
        const r = el.getBoundingClientRect();
        const geometry = Array.from(
          el.querySelectorAll(
            "h2,.tiny-label,.footer-invitation>p,.footer-invitation>.button-row,.footer-invitation>strong,.footer-call,.footer-columns,.footer-bottom,.footer-columns>div,.footer-brand>img,.footer-social img,.footer-social-mark",
          ),
        ).map((e) => {
          const b = e.getBoundingClientRect();
          return {
            selector: e.className || e.tagName,
            x: +(b.x - r.x).toFixed(2),
            y: +(b.y - r.y).toFixed(2),
            width: +b.width.toFixed(2),
            height: +b.height.toFixed(2),
          };
        });
        const clipped = Array.from(el.querySelectorAll("h2,p,a,strong,.footer-columns>div"))
          .filter((e) => e.scrollWidth > e.clientWidth + 2)
          .map((e) => e.textContent);
        return {
          height: r.height,
          width: r.width,
          geometry,
          clipped,
          text: el.textContent,
          assets: Array.from(el.querySelectorAll("img")).map((i) => ({
            src: i.getAttribute("src"),
            naturalWidth: i.naturalWidth,
            width: i.getBoundingClientRect().width,
            height: i.getBoundingClientRect().height,
          })),
          overflow: r.right > document.documentElement.clientWidth + 1,
        };
      });
      assert(!data.overflow, route + " overflow " + width);
      assert.deepEqual(data.clipped, [], route + " clipped " + width);
      assert(data.assets.every((a) => a.naturalWidth > 0));
      if (!reference) reference = data;
      else assert.deepEqual(data, reference, route + " same footer " + width);
      await page.evaluate(() => document.activeElement?.blur());
      if (route === "/contact" && [1920, 390].includes(width))
        await footer.screenshot({ path: "tests/artifacts/footer-" + width + ".png" });
      results.push({ route, width, height: data.height, status: "passed" });
    }
    console.log(width + " px: all eight footers match; no clipped content or broken assets");
    if (width === 1920)
      fs.writeFileSync("tests/artifacts/footer-geometry.json", JSON.stringify(reference, null, 2));
  }
  fs.mkdirSync("tests/artifacts", { recursive: true });
  fs.writeFileSync("tests/artifacts/footer-verification.json", JSON.stringify(results, null, 2));
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
