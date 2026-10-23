import Link from "next/link";
import type { ReactNode } from "react";
import { OFFERS } from "@/components/pricing/custom/CustomWork.data";
import { EXTRAS } from "@/components/pricing/extras/Extras.data";
import {
  MAINTENANCE_PLANS,
  SEO_PLANS,
  SOFTWARE_PLANS,
  type Plan,
} from "@/components/pricing/monthly/MonthlyPlans.data";
import { WEBSITE_PACKAGES } from "@/components/pricing/websites/Websites.data";
import { BtnArrow } from "@/components/ui/BtnArrow";
import { fmt, ONDERHOUD, SOFTWARE_DATA_GB, SOFTWARE_ONDERHOUD } from "@/lib/pricing";
import type { ServiceSlug } from "@/lib/services";

/*
 * "Wat kost het?" per dienst (enkel mobiel). Alle bedragen komen uit dezelfde data als /prijzen, zodat de
 * prijzen overal gelijk zijn. Hier staan geen eigen bedragen.
 */

type Tier = {
  name: string;
  meta: string;
  price: string;
  unit: string;
  note?: string;
  featured?: boolean;
};
type Step = {
  kicker: string;
  title: string;
  price: string;
  meta: string[];
  includes?: readonly string[];
  featured?: boolean;
};
type Addon = { title: string; price: string; unit: string };
type Action = { label: string; href: string };
/** Pakketten met een eigen kop, zodat website- en software-onderhoud apart staan. */
type TierGroup = { kicker: string; title: string; note: string; tiers: Tier[]; more?: Action };
type Compare = {
  title: string;
  intro: string;
  rows: [label: string, website: string, software: string][];
};
type Model = {
  heading: ReactNode;
  intro: string;
  tiers?: Tier[];
  oneOff?: Tier;
  steps?: Step[];
  groups?: TierGroup[];
  compare?: Compare;
  addons?: Addon[];
  footnote: string;
  primary: Action;
  secondary: Action;
};

const extra = (title: string): Addon => {
  const found = EXTRAS.find((e) => e.title.replace(/­/g, "") === title);
  if (!found) throw new Error(`Extra "${title}" ontbreekt in Extras.data.ts`);
  return { title: found.title, price: found.price, unit: found.unit };
};
const offer = (title: string) => {
  const found = OFFERS.find((o) => o.title === title);
  if (!found) throw new Error(`Aanbod "${title}" ontbreekt in CustomWork.data.ts`);
  return found;
};
/** "€ 750 – € 1.050 · 2 weken" → ["€ 750 – € 1.050", "2 weken"] */
const split = (value: string) => value.split(" · ");
const sentence = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);
const dienst = (name: string) => "/contact?dienst=" + encodeURIComponent(name);
const planTiers = (plans: readonly Plan[], unit: string): Tier[] =>
  plans.map((p) => ({ name: p.name, meta: p.tagline, price: p.price, unit, featured: p.popular }));
/** Laagste maandprijs van een reeks onderhoudspakketten ("geen" telt niet mee). */
const lowest = (plans: readonly { price: number }[]) =>
  `€ ${fmt(Math.min(...plans.map((p) => p.price).filter((price) => price > 0)))}`;

const WEBSITE_GROUP: TierGroup = {
  kicker: "Voor websites",
  title: "Website-onderhoud",
  note: "Hosting, updates, back-ups en monitoring voor je site. Per website, per maand.",
  tiers: planTiers(MAINTENANCE_PLANS, "per maand"),
  more: { label: "Alle details", href: "/prijzen#maandpakketten" },
};
const SOFTWARE_GROUP: TierGroup = {
  kicker: "Voor software op maat",
  title: "Software-onderhoud",
  note: `Voor web apps en platformen met een database, logins en koppelingen. Per app, met hosting in de EU tot ${SOFTWARE_DATA_GB} GB data.`,
  tiers: planTiers(SOFTWARE_PLANS, "per app · per maand"),
  more: { label: "Alle details", href: "/prijzen#software-hosting" },
};

function model(slug: ServiceSlug): Model {
  switch (slug) {
    case "webdesign":
      return {
        heading: (
          <>
            Drie pakketten, <span>één vaste prijs</span>.
          </>
        ),
        intro:
          "Alle prijzen zijn vanaf-prijzen, exclusief btw. Je vaste prijs krijg je na een gratis gesprek.",
        tiers: WEBSITE_PACKAGES.map((p) => ({
          name: p.title,
          meta: `${p.features[0]} · levering in ${p.delivery}`,
          price: `€ ${fmt(p.price)}`,
          unit: "vanaf · eenmalig",
          featured: p.featured,
        })),
        footnote:
          "Extra's zoals copywriting, een extra taal of een boekingsmodule vind je op de prijzenpagina.",
        primary: { label: "Bekijk alle pakketten", href: "/prijzen#websites" },
        secondary: { label: "Vraag je gratis audit", href: "/website-audit" },
      };
    case "lokale-seo": {
      const monthly = SEO_PLANS.filter((p) => p.unit !== "eenmalig");
      const start = SEO_PLANS.find((p) => p.unit === "eenmalig");
      return {
        heading: (
          <>
            Een vast bedrag <span>per maand</span>.
          </>
        ),
        intro:
          "Je kiest hoeveel gemeenten en diensten je wil laten groeien. Na een gratis SEO-check weet je precies wat het kost.",
        tiers: monthly.map((p) => ({
          name: p.name,
          meta: p.features[0],
          price: p.price,
          unit: p.unit.replace("/ ", "per "),
          featured: p.popular,
        })),
        oneOff: start && {
          name: start.name,
          meta: start.tagline,
          price: start.price,
          unit: "eenmalig",
          note: start.note,
        },
        footnote: "Alle prijzen excl. btw. Maandpakketten betaal je per maand.",
        primary: { label: "Plan je gratis SEO-check", href: dienst("Lokale SEO") },
        secondary: { label: "Alle prijzen", href: "/prijzen#maandpakketten" },
      };
    }
    case "web-apps": {
      const o = offer("Web apps & maatwerksoftware");
      const [entryPrice, entryTime] = split(o.entry.price);
      return {
        heading: (
          <>
            Zo is je prijs <span>opgebouwd</span>.
          </>
        ),
        intro:
          "Elk project is anders. Daarom start je met een korte analyse aan een vaste prijs. Daarna weet je precies wat je software kost.",
        steps: [
          {
            kicker: "Stap 1 · Vaste prijs",
            title: o.entry.title,
            price: entryPrice,
            meta: [entryTime, sentence(o.entry.note.replace(/\.$/, ""))],
            includes: o.included.slice(0, 2),
          },
          {
            kicker: `Stap 2 · ${o.priceLabel}`,
            title: "Bouw van je software",
            price: o.price,
            meta: [sentence(o.priceNote.replace(/^excl\. btw · /, ""))],
            includes: o.included.slice(2).map((line) => sentence(line.replace(/^Daarna /, ""))),
            featured: true,
          },
        ],
        groups: [
          {
            ...SOFTWARE_GROUP,
            kicker: "Na de oplevering · per maand",
            title: "Onderhoud & hosting voor je software",
            more: {
              label: "Verschil met website-onderhoud",
              href: "/diensten/onderhoud-hosting#prijs",
            },
          },
        ],
        addons: [extra("API- of CRM-koppeling op maat")],
        footnote:
          "Alle prijzen excl. btw. De bouw krijgt een vaste prijs in het functioneel plan, het onderhoud betaal je per maand.",
        primary: { label: o.cta.label, href: dienst("Web apps & maatwerk") },
        secondary: { label: "Alle prijzen", href: "/prijzen#maatwerk" },
      };
    }
    case "ai-automatisaties": {
      const o = offer("AI & automatisaties");
      const [entryPrice, entryTime] = split(o.entry.price);
      return {
        heading: (
          <>
            Zo is je prijs <span>opgebouwd</span>.
          </>
        ),
        intro:
          "Je start met een procesanalyse aan een vaste prijs. Zo zie je eerst waar de meeste winst zit, en wat het je oplevert.",
        steps: [
          {
            kicker: "Stap 1 · Vaste prijs",
            title: o.entry.title,
            price: entryPrice,
            meta: [entryTime, o.entry.note.replace(/\.$/, "")],
          },
          {
            kicker: `Stap 2 · ${o.priceLabel}`,
            title: "Je automatisatie, gebouwd en getest",
            price: o.price.replace(/^vanaf/, "Vanaf"),
            meta: [sentence(o.priceNote.replace(/^excl\. btw · /, ""))],
            includes: o.included,
            featured: true,
          },
        ],
        addons: [extra("AI-chatbot op je site"), extra("API- of CRM-koppeling op maat")],
        footnote: "Alle prijzen excl. btw. Je krijgt vooraf een vaste prijs per automatisatie.",
        primary: { label: "Plan je procesanalyse", href: dienst("AI & automatisaties") },
        secondary: { label: "Alle prijzen", href: "/prijzen#maatwerk" },
      };
    }
    case "onderhoud-hosting":
      return {
        heading: (
          <>
            Eén vast bedrag <span>per maand</span>.
          </>
        ),
        intro:
          "Een website onderhouden is iets anders dan software op maat. Daarom zijn er twee soorten pakketten, elk met een vaste prijs per maand.",
        groups: [WEBSITE_GROUP, SOFTWARE_GROUP],
        compare: {
          title: "Welk onderhoud heb je nodig?",
          intro:
            "Software heeft een database, gebruikers en koppelingen die elke dag moeten werken. Daar is meer opvolging voor nodig dan voor een website.",
          rows: [
            ["Voor", "Je website", "Je web app of platform"],
            ["Hosting", "Snelle hosting met SSL", `In de EU, tot ${SOFTWARE_DATA_GB} GB data`],
            ["Back-ups", "Dagelijks", "Dagelijks, extern bewaard"],
            ["Opvolging", "Updates en uptime", "Beveiliging, bugfixes en koppelingen"],
            [
              "Prijs",
              `Vanaf ${lowest(ONDERHOUD)} per maand`,
              `Vanaf ${lowest(SOFTWARE_ONDERHOUD)} per app per maand`,
            ],
          ],
        },
        footnote: "Alle prijzen excl. btw. Je betaalt per maand.",
        primary: { label: "Plan een gesprek", href: dienst("Onderhoud & hosting") },
        secondary: { label: "Alle prijzen", href: "/prijzen#maandpakketten" },
      };
  }
}

function TierRow({ tier }: { tier: Tier }) {
  return (
    <li className={"price-tier" + (tier.featured ? " is-featured" : "")}>
      {tier.featured && <span className="price-badge">Meest gekozen</span>}
      <div className="price-tier-copy">
        <strong>{tier.name}</strong>
        <span>{tier.meta}</span>
        {tier.note && <em>{tier.note}</em>}
      </div>
      <div className="price-tier-amount">
        <b>{tier.price}</b>
        <small>{tier.unit}</small>
      </div>
    </li>
  );
}

/** Inhoud van het prijsblok (pakketten of prijsladder, opties, voetnoot en knoppen). */
function PricingBody({ m }: { m: Model }) {
  return (
    <>
      {m.tiers && (
        <ul className="price-tiers">
          {m.tiers.map((t) => (
            <TierRow key={t.name} tier={t} />
          ))}
        </ul>
      )}
      {m.oneOff && (
        <ul className="price-tiers price-tiers-oneoff">
          <TierRow tier={m.oneOff} />
        </ul>
      )}

      {m.steps && (
        <ol className="price-ladder">
          {m.steps.map((s) => (
            <li key={s.title} className={"price-step" + (s.featured ? " is-featured" : "")}>
              <span className="price-step-kicker">{s.kicker}</span>
              <h3>{s.title}</h3>
              <p className="price-step-amount">{s.price}</p>
              <ul className="price-step-meta">
                {s.meta.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              {s.includes && s.includes.length > 0 && (
                <ul className="price-step-includes">
                  {s.includes.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      )}

      {m.groups?.map((g) => (
        <div key={g.title} className="price-group">
          <div className="price-group-head">
            <span className="price-group-kicker">{g.kicker}</span>
            <h3>{g.title}</h3>
            <p>{g.note}</p>
          </div>
          <ul className="price-tiers">
            {g.tiers.map((t) => (
              <TierRow key={t.name} tier={t} />
            ))}
          </ul>
          {g.more && (
            <Link href={g.more.href} className="price-group-more">
              {g.more.label} <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      ))}

      {m.compare && (
        <div className="price-compare">
          <h3>{m.compare.title}</h3>
          <p>{m.compare.intro}</p>
          <table>
            <thead>
              <tr>
                <td />
                <th scope="col">Website-onderhoud</th>
                <th scope="col">Software-onderhoud</th>
              </tr>
            </thead>
            <tbody>
              {m.compare.rows.map(([label, website, software]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{website}</td>
                  <td>{software}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {m.addons && (
        <div className="price-addons">
          <span>Optioneel</span>
          <ul>
            {m.addons.map((a) => (
              <li key={a.title}>
                <strong>{a.title}</strong>
                <b>
                  {a.price} <small>{a.unit}</small>
                </b>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="price-footnote">{m.footnote}</p>
      <div className="price-actions">
        <Link href={m.primary.href} className="button primary">
          {m.primary.label} <BtnArrow />
        </Link>
        <Link href={m.secondary.href} className="btn-outline">
          {m.secondary.label} <BtnArrow />
        </Link>
      </div>
    </>
  );
}

/** "Wat kost het?" als volledige sectie op een dienstpagina (enkel mobiel). */
export function ServicePricing({ slug }: { slug: ServiceSlug }) {
  const m = model(slug);
  return (
    <section className="service-section light-section service-pricing" id="prijs">
      <div className="section-heading">
        <span className="section-eyebrow">WAT KOST HET?</span>
        <h2>{m.heading}</h2>
        <p>{m.intro}</p>
      </div>
      <PricingBody m={m} />
    </section>
  );
}

/**
 * Dezelfde prijsladder zonder sectiekop, voor de maatwerksectie op /prijzen. Zonder de onderhoudspakketten:
 * die staan op /prijzen al onder de ladders (#software-hosting).
 */
export function PriceLadder({ slug }: { slug: "web-apps" | "ai-automatisaties" }) {
  const m = model(slug);
  const secondary =
    slug === "web-apps"
      ? { label: "Meer over web apps", href: "/diensten/web-apps" }
      : { label: "Meer over AI & automatisaties", href: "/diensten/ai-automatisaties" };
  return <PricingBody m={{ ...m, groups: undefined, secondary }} />;
}
