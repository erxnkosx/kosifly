const { chromium } = require("playwright");
const fs = require("node:fs");
(async () => {
  const b = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  });
  const p = await b.newPage({ reducedMotion: "reduce" });
  const results = [];
  for (const width of [320, 390, 768, 1024, 1280, 1440, 1920, 2560])
    for (const route of [
      "/",
      "/services",
      "/contact",
      "/diensten/webdesign",
      "/diensten/lokale-seo",
      "/diensten/web-apps",
      "/diensten/ai-automatisaties",
      "/diensten/onderhoud-hosting",
    ]) {
      await p.setViewportSize({ width, height: 900 });
      await p.goto("http://127.0.0.1:3000" + route);
      await p.evaluate(() => document.fonts.ready);
      await p
        .locator("header img")
        .evaluateAll((imgs) => Promise.all(imgs.map((i) => i.decode().catch(() => {}))));
      const data = await p.evaluate(() => {
        const rect = (e) => e.getBoundingClientRect();
        const style = (e) => getComputedStyle(e);
        const nav = document.querySelector(".nav-inner"),
          footer = document.querySelector(".footer-inner"),
          hero = document.querySelector(".hero-grid,.contact-section>div:last-child");
        const sections = [
          ...document.querySelectorAll(".service-section,.home-visual.legacy-home"),
        ];
        const clipped = [
          ...document.querySelectorAll(
            ".services-index .related-card h2,.hero-copy h1,.hero-copy>p,.contact-copy h1,.footer-columns>div,.feature-copy,.step-card,.faq-item h3 button,.home-service-copy,.home-problem-card",
          ),
        ]
          .filter((e) => e.scrollWidth > e.clientWidth + 2)
          .map((e) => e.className);
        const edges = [nav, footer, ...(hero ? [hero] : []), ...sections].map(
          (e) => +(rect(e).left + parseFloat(style(e).paddingLeft)).toFixed(2),
        );
        const edgeSpread = Math.max(...edges) - Math.min(...edges);
        const out = {
          edgeSpread,
          viewport: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          padding: {
            nav: parseFloat(style(nav).paddingLeft),
            footer: parseFloat(style(footer).paddingLeft),
            hero: hero ? parseFloat(style(hero).paddingLeft) : null,
            sections: sections.map((e) => ({
              name: e.className,
              padding: parseFloat(style(e).paddingLeft),
            })),
          },
          clipped,
        };
        if (hero) {
          const r = rect(hero);
          const children = [...hero.children].map(rect);
          const top = Math.min(...children.map((x) => x.top)),
            bottom = Math.max(...children.map((x) => x.bottom));
          out.heroCenterError = +Math.abs((top + bottom) / 2 - (r.top + r.bottom) / 2).toFixed(2);
        }
        return out;
      });
      results.push({ width, route, ...data });
      if (
        data.clipped.length ||
        data.scrollWidth > data.viewport + 1 ||
        data.heroCenterError > 2 ||
        data.edgeSpread > 1
      )
        console.log(JSON.stringify(results.at(-1)));
      if (width === 1440 && route === "/")
        await p.screenshot({ path: "tests/artifacts/layout-home.png" });
      if (width === 1440 && route === "/diensten/webdesign")
        await p.screenshot({ path: "tests/artifacts/layout-service.png" });
    }
  fs.mkdirSync("tests/artifacts", { recursive: true });
  fs.writeFileSync("tests/artifacts/layout-verification.json", JSON.stringify(results, null, 2));
  require("node:assert/strict")(
    results.every(
      (r) =>
        r.clipped.length === 0 &&
        r.scrollWidth <= r.viewport + 1 &&
        (r.heroCenterError ?? 0) <= 2 &&
        r.edgeSpread <= 1,
    ),
    "Page layout checks failed",
  );
  console.log("Checked " + results.length + " page/viewport combinations");
  await b.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
