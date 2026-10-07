// DOM behaviour tests; these deliberately do not claim to measure browser layout.
const fs = require("node:fs"),
  path = require("node:path"),
  assert = require("node:assert/strict");
const { JSDOM } = require("jsdom");
const dom = new JSDOM('<!doctype html><div id="root"></div>', { url: "http://localhost/" });
for (const name of [
  "window",
  "document",
  "HTMLElement",
  "HTMLInputElement",
  "HTMLFormElement",
  "Event",
  "MouseEvent",
  "KeyboardEvent",
  "Node",
  "FormData",
])
  global[name] = dom.window[name];
global.IS_REACT_ACT_ENVIRONMENT = true;
const React = require("react"),
  { createRoot } = require("react-dom/client"),
  { act } = React;
const Module = require("node:module"),
  ts = require("typescript"),
  original = Module._resolveFilename;
const project = path.resolve(__dirname, "..");
Module._resolveFilename = function (request, parent, ...args) {
  return original.call(
    this,
    request.startsWith("@/") ? path.join(project, request.slice(2)) : request,
    parent,
    ...args,
  );
};
const framerMotion = require("./support/framer-motion-stub.cjs");
const load = Module._load;
Module._load = function (name, ...args) {
  if (name === "next/link")
    return {
      __esModule: true,
      default: ({ children, ...props }) => React.createElement("a", props, children),
    };
  if (name === "framer-motion") return framerMotion;
  if (name === "next/navigation") return { usePathname: () => "/diensten/webdesign" };
  return load.call(this, name, ...args);
};
for (const ext of [".ts", ".tsx"])
  require.extensions[ext] = (mod, file) =>
    mod._compile(
      ts.transpileModule(fs.readFileSync(file, "utf8"), {
        compilerOptions: {
          module: ts.ModuleKind.CommonJS,
          jsx: ts.JsxEmit.ReactJSX,
          esModuleInterop: true,
          target: ts.ScriptTarget.ES2022,
        },
      }).outputText,
      file,
    );
const {
  ServiceFaq,
  SavingsCalculator,
  BeforeAfter,
  ModulePicker,
} = require("../components/services/Interactions.tsx");
const { Navbar } = require("../components/Navbar.tsx");
const { ContactForm } = require("../components/contact/ContactForm.tsx");
const design = require("../data/services-design.json");
let root;
const host = document.getElementById("root");
async function mount(component, props = {}) {
  if (root) await act(() => root.unmount());
  root = createRoot(host);
  await act(() => root.render(React.createElement(component, props)));
}
async function click(el) {
  assert(el, "Element exists");
  await act(() => el.dispatchEvent(new MouseEvent("click", { bubbles: true })));
}
async function change(el, value) {
  await act(() => {
    Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set.call(
      el,
      String(value),
    );
    el.dispatchEvent(new Event("input", { bubbles: true }));
    el.dispatchEvent(new Event("change", { bubbles: true }));
  });
}
const results = [];
async function check(name, fn) {
  await fn();
  results.push({ name, passed: true });
  console.log("PASS", name);
}
(async () => {
  await check("Every service FAQ opens one question at a time and can close it", async () => {
    for (const d of Object.values(design)) {
      await mount(ServiceFaq, { items: d.faq });
      assert.equal(document.querySelectorAll("button[aria-expanded=true]").length, 1);
      const b = document.querySelectorAll("button");
      await click(b[1]);
      assert.equal(document.querySelectorAll("button[aria-expanded=true]").length, 1);
      assert.equal(b[0].getAttribute("aria-expanded"), "false");
      assert.equal(b[1].getAttribute("aria-expanded"), "true");
      await click(b[1]);
      assert.equal(document.querySelectorAll("button[aria-expanded=true]").length, 0);
    }
  });
  await check("Calculator defaults, live changes, annual totals and contact handoff", async () => {
    await mount(SavingsCalculator);
    assert.equal(document.querySelector(".hours").textContent, "5 uur");
    const sliders = document.querySelectorAll("input");
    await change(sliders[0], 24);
    assert.equal(document.querySelector(".hours").textContent, "10 uur");
    let url = new URL(document.querySelector(".calculator-result a").href);
    assert.equal(url.searchParams.get("aanvragen"), "24");
    assert.match(document.querySelector(".yearly").textContent, /460 uur/);
    for (const [i, value] of [50, 60, 100].entries()) await change(sliders[i], value);
    assert.equal(document.querySelector(".hours").textContent, "50 uur");
    assert.match(document.querySelector(".yearly").textContent, /230\.000/);
    assert.equal(
      new URL(document.querySelector(".calculator-result a").href).searchParams.get("uurtarief"),
      "100",
    );
  });
  await check("Website makeover switches both ways and exposes its selected state", async () => {
    await mount(BeforeAfter);
    const buttons = document.querySelectorAll(".website-comparison-switch button");
    const preview = document.querySelector("#website-makeover");
    assert(preview.classList.contains("is-after"));
    assert.equal(buttons[1].getAttribute("aria-pressed"), "true");
    for (const button of buttons) {
      assert.equal(button.getAttribute("aria-controls"), preview.id);
    }
    await click(buttons[0]);
    assert(preview.classList.contains("is-before"));
    assert.equal(buttons[0].getAttribute("aria-pressed"), "true");
    assert.equal(buttons[1].getAttribute("aria-pressed"), "false");
    assert.match(document.querySelector(".makeover-result").textContent, /Weinig richting/);
    await click(buttons[1]);
    assert(preview.classList.contains("is-after"));
    assert.equal(buttons[1].getAttribute("aria-pressed"), "true");
    assert.match(document.querySelector(".makeover-result").textContent, /Een verhaal dat klopt/);
  });
  await check("All six software modules work with click and arrow keys", async () => {
    await mount(ModulePicker, { modules: design["web-apps"].modules });
    const tabs = document.querySelectorAll("[role=tab]");
    assert.equal(tabs.length, 6);
    for (let i = 0; i < tabs.length; i++) {
      await click(tabs[i]);
      assert.equal(tabs[i].getAttribute("aria-selected"), "true");
      assert.equal(document.querySelectorAll("[role=tab][aria-selected=true]").length, 1);
    }
    await act(() =>
      tabs[5].dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true })),
    );
    assert.equal(document.activeElement, tabs[0]);
    assert.equal(document.querySelectorAll("[role=tabpanel]").length, 1);
    assert.equal(
      tabs[0].getAttribute("aria-controls"),
      document.querySelector("[role=tabpanel]").id,
    );
    const ids = [...document.querySelectorAll("[id]")].map((e) => e.id);
    assert.equal(new Set(ids).size, ids.length);
  });
  await check("Services menu exposes five correct routes and closes with Escape", async () => {
    await mount(Navbar, { active: "Services" });
    const trigger = document.querySelector(".services-menu>button");
    await click(trigger);
    assert.equal(document.querySelectorAll(".service-menu-items>a").length, 5);
    assert(document.querySelector('a[href="/diensten/web-apps"]'));
    await act(() =>
      trigger.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })),
    );
    assert.equal(trigger.getAttribute("aria-expanded"), "false");
    assert.equal(document.querySelector(".services-dropdown"), null);
  });
  await check(
    "Contact form receives calculator values, validates required fields and shows server errors",
    async () => {
      window.history.replaceState(
        null,
        "",
        "/contact?dienst=Automatisatie&aanvragen=24&minuten=25&uurtarief=45",
      );
      await mount(ContactForm);
      assert.match(document.querySelector(".contact-context").textContent, /10 uur per week/);
      assert(document.querySelector("[name=naam]").required);
      assert(document.querySelector("[name=email]").required);
      let payload;
      global.fetch = async (_, opts) => {
        payload = JSON.parse(opts.body);
        return { ok: false, json: async () => ({ error: "Test: ontvanger niet geconfigureerd" }) };
      };
      await change(document.querySelector("[name=naam]"), "Testpersoon");
      await change(document.querySelector("[name=email]"), "test@example.com");
      await act(() =>
        document
          .querySelector("form")
          .dispatchEvent(new Event("submit", { bubbles: true, cancelable: true })),
      );
      assert.deepEqual(payload.calculation, { aanvragen: 24, minuten: 25, uurtarief: 45 });
      assert(payload.topics.includes("Automatisatie"));
      assert.match(
        document.querySelector("[role=status]").textContent,
        /ontvanger niet geconfigureerd/,
      );
      assert.equal(document.querySelector("button[type=submit]").disabled, false);
    },
  );
  await check("Homepage FAQ retains its eight questions and starts closed", async () => {
    const { Faq } = require("../components/home/Faq.tsx");
    await mount(Faq);
    const buttons = document.querySelectorAll(".faq-item button");
    assert.equal(buttons.length, 8);
    assert.equal(document.querySelectorAll(".faq-item button[aria-expanded=true]").length, 0);
    await click(buttons[0]);
    assert.match(document.querySelector(".faq-item.is-open .faq-answer").textContent, /vijf weken/);
    await click(buttons[1]);
    assert.match(
      document.querySelector(".faq-item.is-open .faq-answer").textContent,
      /vaste prijs/,
    );
  });
  await check("Mobile navigation closes with outside interaction", async () => {
    await mount(Navbar, { active: "Home" });
    const trigger = document.querySelector(".mobile-toggle");
    await click(trigger);
    assert.equal(trigger.getAttribute("aria-expanded"), "true");
    await act(() => document.body.dispatchEvent(new Event("pointerdown", { bubbles: true })));
    assert.equal(trigger.getAttribute("aria-expanded"), "false");
  });
  await act(() => root.unmount());
  fs.mkdirSync(path.join(__dirname, "artifacts"), { recursive: true });
  fs.writeFileSync(
    path.join(__dirname, "artifacts", "results.json"),
    JSON.stringify({ environment: "jsdom; no browser layout engine", results }, null, 2),
  );
  console.log(`${results.length} interaction checks passed.`);
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
