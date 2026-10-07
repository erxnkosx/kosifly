import { test, expect } from "@playwright/test";

const routes = [
  "/",
  "/services",
  "/contact",
  "/contact?tab=offerte",
  "/prijzen",
  "/projecten",
  "/projecten/taxi-bornem",
  "/projecten/primelabs",
  "/over-ons",
  "/privacy",
  "/algemene-voorwaarden",
  "/diensten/webdesign",
  "/diensten/lokale-seo",
  "/diensten/web-apps",
  "/diensten/ai-automatisaties",
  "/diensten/onderhoud-hosting",
];
const viewports = [
  { width: 1280, height: 800 },
  { width: 1366, height: 768 },
  { width: 1440, height: 900 },
  { width: 1536, height: 864 },
  { width: 1920, height: 1080 },
  { width: 390, height: 844 },
];
for (const viewport of viewports) {
  for (const route of routes) {
    test(`${viewport.width}x${viewport.height} ${route}`, async ({ page }, testInfo) => {
      await page.setViewportSize(viewport);
      await page.emulateMedia({ reducedMotion: "reduce" });
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("main")).toBeVisible();
      const geometry = await page.evaluate(() => {
        const header = document.querySelector("header")!;
        const h1 = document.querySelector("h1")!;
        const headerRect = header.getBoundingClientRect();
        const h1Rect = h1.getBoundingClientRect();
        const clipped = Array.from(
          document.querySelectorAll<HTMLElement>(
            ".hero-copy h1, .hero-copy>p, .section-heading, .feature-copy, .step-card, .faq-item h3 button, .home-service-copy, .home-problem-card, .contact-form",
          ),
        )
          .filter((element) => element.scrollWidth > element.clientWidth + 2)
          .map((element) => element.className);
        return {
          width: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          headerHeight: headerRect.height,
          headerBackground: getComputedStyle(header).backgroundColor,
          headerImage: getComputedStyle(header).backgroundImage,
          titleTop: h1Rect.top,
          headerBottom: headerRect.bottom,
          clipped,
        };
      });
      expect(geometry.scrollWidth).toBeLessThanOrEqual(geometry.width + 1);
      expect(geometry.headerHeight).toBeLessThanOrEqual(96);
      expect(geometry.headerBackground).toBe("rgba(0, 0, 0, 0)");
      expect(geometry.headerImage).toBe("none");
      expect(geometry.titleTop).toBeGreaterThanOrEqual(geometry.headerBottom);
      expect(geometry.clipped).toEqual([]);
      // Trigger lazy assets before collecting screenshots and image failures.
      await page.evaluate(async () => {
        for (let y = 0; y < document.documentElement.scrollHeight; y += window.innerHeight) {
          window.scrollTo(0, y);
          await new Promise((resolve) => requestAnimationFrame(resolve));
        }
        await Promise.all(Array.from(document.images).map((img) => img.decode().catch(() => {})));
        window.scrollTo(0, 0);
      });
      const broken = await page.evaluate(() =>
        Array.from(document.images)
          .filter((img) => !img.complete || !img.naturalWidth)
          .map((img) => img.currentSrc),
      );
      expect(broken).toEqual([]);
      expect(errors).toEqual([]);
      await page.screenshot({ path: testInfo.outputPath("page.png"), fullPage: true });
      await testInfo.attach("geometry", {
        body: JSON.stringify(geometry, null, 2),
        contentType: "application/json",
      });
    });
  }
}

test("menu fits laptop and mobile screens", async ({ page }) => {
  for (const width of [390, 768, 1024, 1280, 1366, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/diensten/webdesign");
    if (width <= 760) await page.locator(".mobile-toggle").click();
    await page.locator(".services-menu>button").click();
    const menu = page.locator(".services-dropdown");
    await expect(menu).toBeVisible();
    const box = await menu.boundingBox();
    expect(box!.x).toBeGreaterThanOrEqual(0);
    expect(box!.x + box!.width).toBeLessThanOrEqual(width);
    await page.keyboard.press("Escape");
    await expect(menu).toHaveCount(0);
  }
});

test("motion honours a live reduced-motion preference", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  await page.locator(".home-services").scrollIntoViewIfNeeded();
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect
    .poll(() =>
      page.evaluate(() => document.getAnimations().filter((a) => a.playState === "running").length),
    )
    .toBe(0);
});

for (const width of [390, 1440]) {
  test(`scroll content stays visible without delayed entrances at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "no-preference" });
    for (const route of ["/", "/prijzen", "/diensten/webdesign"]) {
      await page.goto(route);
      await expect(page.locator("h1")).toBeVisible();
      const sections = page.locator(".home-service-card, .feature-card, .faq-item, [data-reveal]");
      expect(await sections.count()).toBeGreaterThan(0);
      for (const element of await sections.all()) {
        await expect(element).toHaveCSS("opacity", "1");
        await expect(element).toHaveCSS("translate", "none");
      }
      await page.locator("footer").scrollIntoViewIfNeeded();
      await page.locator("h1").scrollIntoViewIfNeeded();
      for (const element of await sections.all()) {
        await expect(element).toHaveCSS("opacity", "1");
        await expect(element).toHaveCSS("translate", "none");
      }
    }
  });
}
