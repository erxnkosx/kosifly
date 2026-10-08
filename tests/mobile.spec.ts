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
const screens = [
  { width: 320, height: 568 },
  { width: 360, height: 740 },
  { width: 390, height: 844 },
  { width: 430, height: 932 },
  { width: 768, height: 1024 },
  { width: 844, height: 390 },
  { width: 1024, height: 768 },
];
test.describe.configure({ mode: "parallel" });
test.use({ isMobile: true, hasTouch: true });
test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
});
for (const viewport of screens) {
  for (const route of routes) {
    test(`${viewport.width}×${viewport.height}: all sections on ${route}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      const errors: string[] = [];
      page.on("pageerror", (e) => errors.push(e.message));
      expect((await page.goto(route))?.status()).toBe(200);
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator("h1")).toBeVisible();
      // Inspect every section, including those below the fold; ignore decorative canvases and intentional table scrolling.
      const issues = await page.evaluate(() => {
        const problems: string[] = [];
        for (const el of document.querySelectorAll<HTMLElement>(
          "main h1, main h2, main h3, main p, main dd, main legend, main button, main input:not(.sr-only), main textarea",
        )) {
          if (
            el.closest(
              '[aria-hidden="true"], [inert], .artwork, [role="img"], .sr-only, table, .etalage-slide > :not(.etalage-mobile)',
            )
          )
            continue;
          const r = el.getBoundingClientRect();
          if (!r.width || !r.height) continue;
          const text = el.textContent?.trim().slice(0, 70) || el.tagName;
          if (r.left < -2 || r.right > innerWidth + 2 || el.scrollWidth > el.clientWidth + 3)
            problems.push(text);
        }
        if (document.documentElement.scrollWidth > innerWidth) problems.push("page overflow");
        return problems;
      });
      expect(issues).toEqual([]);
      expect(errors).toEqual([]);
    });
  }
}

test("every mobile carousel slide is readable and can be selected or swiped", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 740 });
  await page.goto("/");
  const carousel = page.locator(".etalage-carousel");
  for (let i = 0; i < 5; i++) {
    await carousel.getByRole("button", { name: `Etalage ${i + 1}`, exact: true }).tap();
    const slide = carousel.locator(".etalage-item").nth(i);
    await expect(slide).toHaveAttribute("aria-hidden", "false");
    await expect(slide.locator(".etalage-mobile h2")).toBeVisible();
    for (const link of await slide.locator(".etalage-mobile a").all()) {
      const box = await link.boundingBox();
      expect(box!.height).toBeGreaterThanOrEqual(44);
      expect(box!.x).toBeGreaterThanOrEqual(0);
      expect(box!.x + box!.width).toBeLessThanOrEqual(321);
    }
  }
  await carousel.getByRole("button", { name: "Vorige", exact: true }).tap();
  await expect(carousel.getByRole("button", { name: "Etalage 4", exact: true })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  // Native horizontal scrolling is the same scroll path used by a touch swipe.
  await carousel
    .locator(".etalage-track")
    .evaluate((el) => el.scrollTo({ left: 0, behavior: "instant" }));
  await expect(carousel.getByRole("button", { name: "Etalage 1", exact: true })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
});

test("mobile price controls, comparison scroll and quote handoff", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 740 });
  await page.goto("/prijzen");
  for (const heading of await page.locator(".pricing-section-heading").all()) {
    const bounds = await heading.boundingBox();
    expect(bounds!.x).toBeGreaterThanOrEqual(0);
    expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(320);
  }
  const table = page.getByRole("region", { name: "Pakketten vergelijken" });
  await table.evaluate((el) => (el.scrollLeft = el.scrollWidth));
  await expect.poll(() => table.evaluate((el) => el.scrollLeft)).toBeGreaterThan(0);
  const calc = page.locator("#bereken-je-prijs");
  const plus = calc.getByRole("button", { name: "Meer pagina's" });
  const box = await plus.boundingBox();
  expect(box!.width).toBeGreaterThanOrEqual(44);
  await plus.tap();
  await expect(calc.getByText("1 pagina", { exact: true })).toBeVisible();
  await calc.locator('input[name="pakket"][value="groei"]').locator("..").tap();
  await calc.locator("aside a").tap();
  await expect(page).toHaveURL(/tab=offerte/);
  await expect(page.getByRole("heading", { name: "Stel je offerte samen" })).toBeVisible();
  const name = page.locator('input[name="naam"]');
  const email = page.locator('input[name="email"]');
  expect((await email.boundingBox())!.y).toBeGreaterThan((await name.boundingBox())!.y + 40);
  await expect(email).toHaveCSS("font-size", "16px");
});

test("contact sends the backend field names, handles server failure and allows retry", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/contact");
  await page.locator('[name="naam"]').fill("Mobiele test");
  await page.locator('[name="email"]').fill("test@example.com");
  await page.locator('[name="bericht"]').fill("Een testaanvraag.");
  await page.locator(".contact-consent").tap();
  let attempts = 0;
  await page.route("**/api/contact", async (route) => {
    expect(route.request().postDataJSON().name).toBe("Mobiele test");
    attempts++;
    await route.fulfill(
      attempts === 1
        ? { status: 503, contentType: "text/html", body: "Unavailable" }
        : { status: 200, json: { ok: true } },
    );
  });
  await page.getByRole("button", { name: "Verstuur je aanvraag →" }).tap();
  await expect(page.getByRole("status")).toContainText("Je aanvraag kon niet verstuurd worden");
  await expect(page.getByRole("status").getByRole("link")).toHaveAttribute(
    "href",
    "mailto:info@kosifly.com",
  );
  await expect(page.locator('[name="naam"]')).toHaveValue("Mobiele test");
  await page.getByRole("button", { name: "Verstuur je aanvraag →" }).tap();
  await expect(page.getByRole("status")).toContainText("Bedankt!");
  expect(attempts).toBe(2);
});

test("filters, all software tabs, accordions and touch sliders work", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 740 });
  await page.goto("/projecten");
  await page.getByRole("button", { name: "AI & automatisaties", exact: true }).tap();
  await expect(page.locator(".project-empty")).toBeVisible();
  await page.getByRole("button", { name: "Alle projecten", exact: true }).tap();
  await expect(page.locator(".project-card")).toHaveCount(2);
  await page.goto("/diensten/web-apps");
  for (const tab of await page.getByRole("tab").all()) {
    await tab.tap();
    await expect(tab).toHaveAttribute("aria-selected", "true");
    await expect(page.getByRole("tabpanel")).toBeVisible();
    expect(
      await page.getByRole("tabpanel").evaluate((el) => el.scrollWidth <= el.clientWidth + 2),
    ).toBe(true);
  }
  for (const question of await page.locator(".faq-item button").all()) {
    if ((await question.getAttribute("aria-expanded")) === "true") await question.tap();
    await question.tap();
    await expect(question).toHaveAttribute("aria-expanded", "true");
    await question.tap();
    await expect(question).toHaveAttribute("aria-expanded", "false");
  }
  await page.goto("/diensten/ai-automatisaties");
  const range = page.locator('input[type="range"]').first();
  await range.scrollIntoViewIfNeeded();
  const box = await range.boundingBox();
  expect(box!.height).toBeGreaterThanOrEqual(44);
  await page.touchscreen.tap(box!.x + box!.width * 0.8, box!.y + box!.height / 2);
  expect(Number(await range.inputValue())).toBeGreaterThan(12);
});

test("navigation remains reachable on short screens and after rotation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 568 });
  await page.goto("/services");
  const toggle = page.locator(".mobile-toggle");
  await toggle.tap();
  await page.locator(".services-menu > button").tap();
  await page.locator(".service-menu-items a").last().tap();
  await expect(page).toHaveURL(/onderhoud-hosting$/);
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await toggle.tap();
  await page.keyboard.press("Escape");
  await expect(toggle).toBeFocused();
  await page.setViewportSize({ width: 844, height: 390 });
  await page.locator(".services-menu > button").tap();
  const dropdown = page.locator(".services-dropdown");
  await expect(dropdown).toBeVisible();
  const bounds = await dropdown.boundingBox();
  expect(bounds!.y + bounds!.height).toBeLessThanOrEqual(391);
  await page.locator(".service-menu-items a").last().tap();
  await expect(dropdown).toHaveCount(0);
});
