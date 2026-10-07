const { chromium } = require("playwright");
const fs = require("node:fs");
const assert = require("node:assert/strict");
const reference = require("./figma-reference.json");
const routes = ["webdesign", "lokale-seo", "web-apps", "ai-automatisaties", "onderhoud-hosting"];
const normalize = (text) => text.replace(/-->/g, "→").replace(/\s+/g, "").trim();

(async () => {
  const browser = await chromium.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  });
  const page = await browser.newPage({ reducedMotion: "reduce" });
  const results = [];
  fs.mkdirSync("tests/artifacts/screenshots", { recursive: true });
  for (const width of [390, 768, 1440, 1920]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const [index, slug] of routes.entries()) {
      await page.goto("http://127.0.0.1:3000/diensten/" + slug);
      await page.evaluate(async () => {
        await document.fonts.ready;
        await Promise.all(
          [...document.images].map(async (image) => {
            image.loading = "eager";
            await image.decode().catch(() => {});
          }),
        );
      });
      const check = await page.evaluate(() => {
        const rect = (element) => element.getBoundingClientRect();
        const art = document.querySelector(".hero-art .artwork"),
          boundary = rect(art);
        const clippedCards = [
          ...art.querySelectorAll(
            '[data-name^="Melding"],[data-name^="Notificatie"], [data-name^="Chip –"], [data-name="Local pack – Google Maps"], [data-name="Kaart – Klein-Brabant"]',
          ),
        ]
          .filter((element) => {
            const r = rect(element);
            return (
              r.left < boundary.left - 1 ||
              r.right > boundary.right + 1 ||
              r.top < boundary.top - 1 ||
              r.bottom > boundary.bottom + 1
            );
          })
          .map((element) => element.dataset.name);
        return {
          brokenImages: [...document.images]
            .filter((image) => !image.complete || image.naturalWidth === 0)
            .map((image) => image.getAttribute("src")),
          clippedCards,
          headingDecoration: getComputedStyle(document.querySelector(".process-intro h2"))
            .textDecorationLine,
          phraseDecoration: getComputedStyle(document.querySelector(".process-emphasis"))
            .textDecorationLine,
          arrowDecoration: getComputedStyle(document.querySelector(".projects-link"))
            .textDecorationLine,
          viewport: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          text: [
            ...document.querySelectorAll(
              "main p,main h1,main h2,main h3,main h4,main span,main strong,main small,main a,main .your-step,main .faq-contact,main .faq-intro h2",
            ),
          ]
            .map((element) => element.innerText || element.textContent)
            .join("\n"),
        };
      });
      assert.deepEqual(check.brokenImages, [], slug + " images");
      assert.deepEqual(check.clippedCards, [], slug + " hero cards inside canvas");
      assert.equal(check.headingDecoration, "none");
      assert.equal(check.phraseDecoration, "underline");
      assert.equal(check.arrowDecoration, "none");
      assert(check.scrollWidth <= check.viewport + 1, slug + " horizontal overflow");
      const texts = normalize(check.text);
      const missingReferenceText = reference[index].sections
        .filter((section) => section.name !== "FOOTER")
        .flatMap((section) => section.texts)
        .filter((text) => normalize(text).length > 25 && !/^-/.test(text.trim()))
        .filter((text) => !texts.includes(normalize(text)));
      delete check.text;
      results.push({ width, slug, ...check, missingReferenceText });
      if (width === 1440) {
        for (const selector of [
          ".service-hero",
          ".difference-section",
          ".features-section",
          ".process-section",
          ".showcase-section",
          ".related-section",
          ".faq-section",
        ]) {
          await page.locator(selector).screenshot({
            path: `tests/artifacts/screenshots/${slug}-${selector.slice(1)}.png`,
          });
        }
      }
      if (slug === "web-apps") {
        const tabs = page.getByRole("tab");
        for (let i = 0; i < 6; i++) {
          await tabs.nth(i).click();
          const panel = page.getByRole("tabpanel");
          await assert.doesNotReject(() => panel.waitFor({ state: "visible" }));
          assert.equal(
            await tabs.nth(i).getAttribute("aria-controls"),
            await panel.getAttribute("id"),
          );
          assert.equal(await panel.count(), 1);
          const clipped = await panel.evaluate((element) => {
            const boundary = element.getBoundingClientRect();
            return [
              ...element.querySelectorAll(
                ".module-alternative,.module-explanation,.software-preview",
              ),
            ]
              .filter((child) => {
                const box = child.getBoundingClientRect();
                return (
                  box.right > boundary.right + 1 ||
                  box.left < boundary.left - 1 ||
                  child.scrollWidth > child.clientWidth + 1
                );
              })
              .map((child) => child.className);
          });
          assert.deepEqual(clipped, [], `Module ${i} fits its panel at ${width}px`);
          if (i > 0) assert.equal(await panel.locator(".software-preview").count(), 1);
          if (width === 390 || width === 1440)
            await page.locator(".module-picker").screenshot({
              path: `tests/artifacts/screenshots/module-${i}-${width}.png`,
            });
        }
        await tabs.nth(5).focus();
        await page.keyboard.press("ArrowDown");
        assert.equal(await tabs.nth(0).evaluate((e) => e === document.activeElement), true);
      }
    }
    for (const route of ["/", "/services", "/contact"]) {
      await page.goto("http://127.0.0.1:3000" + route);
      await page.evaluate(async () => {
        await document.fonts.ready;
        await Promise.all(
          [...document.images].map(async (i) => {
            i.loading = "eager";
            await i.decode().catch(() => {});
          }),
        );
      });
      if (width === 1440 || width === 390)
        await page.screenshot({
          path: `tests/artifacts/screenshots/${route.slice(1) || "home"}-${width}.png`,
          fullPage: true,
        });
    }
  }
  fs.writeFileSync("tests/artifacts/visual-audit.json", JSON.stringify(results, null, 2));
  for (const result of results.filter((r) => r.width === 1440))
    console.log(
      JSON.stringify({
        slug: result.slug,
        missing: result.missingReferenceText,
      }),
    );
  console.log(
    "All hero assets, underline scopes, module panels and page widths passed at four viewport sizes.",
  );
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
