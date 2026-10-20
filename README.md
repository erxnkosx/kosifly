# Kosifly — website

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion.
De site wordt als **statische export** gebouwd (`out/`) en draait op **Cloudflare Pages**. Het contact- en
auditformulier posten naar een Cloudflare Pages Function (`functions/api/contact.ts`).

## Lokaal werken

```bash
npm ci
npm run dev        # http://localhost:3000
```

Node 22 (zie `.nvmrc`; minimaal 20.9).

## Controles

```bash
npm run check      # typecheck + prettier + interactietests + build + structuurtest
npm run preview    # serveert out/ op http://127.0.0.1:3100, met de headers uit public/_headers
npm run test:browser   # Playwright op de gebouwde site (eerst: npx playwright install chromium)
```

- `tests/interactions.cjs`: FAQ's, calculators, gegevensoverdracht naar het contactformulier, navigatie.
- `tests/structure.cjs`: gebouwde HTML van alle pagina's (één H1, secties, interne links, lokale assets).
- `tests/browser.spec.ts` en `tests/mobile.spec.ts`: overloop, afbeeldingen, JS-fouten, menu's en touch op
  desktop- en mobiele formaten.
- `tests/verify-*.cjs` en `tests/visual-audit.cjs`: extra handmatige metingen tegen `npm run dev` (poort 3000).
  Resultaten komen in `tests/artifacts/` (niet in git).

## Deploy (Cloudflare Pages)

| Instelling       | Waarde                                                                        |
| ---------------- | ----------------------------------------------------------------------------- |
| Build command    | `npm run build`                                                               |
| Output directory | `out`                                                                         |
| Node-versie      | 22 (`.nvmrc`, of variabele `NODE_VERSION=22`)                                 |
| Functions        | `functions/` wordt automatisch opgepikt (`/api/contact`)                      |
| Variabele        | `CONTACT_WEBHOOK_URL` (versleuteld, voor Production én Preview)               |
| Domein           | `kosifly.be`; stuur `www.kosifly.be` en `*.pages.dev` door via Redirect Rules |

`public/_headers` zet HSTS, een Content-Security-Policy, framing- en referrerregels en caching. Wie
externe scripts of iframes toevoegt (bv. een agenda-widget of Turnstile), moet die domeinen daar toelaten.

`npm run build` draait na `next build` ook `scripts/fix-export-segments.cjs`: op Windows schrijft Next 16 de
prefetchbestanden van de export onder een verkeerde naam; het script corrigeert dat (op Linux doet het niets).

### Contactformulier

`functions/api/contact.ts` controleert herkomst (zelfde host), omvang (max. 20 kB), naam en e-mail, weigert
spam via een verborgen veld (`components/ui/Honeypot.tsx`) en stuurt alleen deze velden als JSON door naar
`CONTACT_WEBHOOK_URL`: `ontvangen, name, email, telefoon, bedrijf, website, bericht, type` (`bericht`,
`offerte` of `audit`), `budget, topics, quote, calculation`. Zonder webhook krijgt de bezoeker een melding
met het e-mailadres en telefoonnummer.

Lokaal testen van de function: `npx wrangler pages dev out` met `CONTACT_WEBHOOK_URL=…` in `.dev.vars`.
`npm run dev` kent `/api/contact` niet; het formulier toont dan de foutmelding.

## Waar pas je wat aan?

| Wat                                     | Waar                                                                                                                  |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Domein, e-mail, telefoon, regio, uren   | `lib/site.ts` (ook gebruikt voor metadata en structured data)                                                         |
| Prijzen en levertijden van de pakketten | `lib/pricing.ts` (kaarten, vergelijking en calculator lezen hier)                                                     |
| Teksten per pakket                      | `components/pricing/*/*.data.ts`                                                                                      |
| Diensten (titels, routes, metadata)     | `lib/services.ts` en `data/services-design.json`                                                                      |
| Cases                                   | `lib/projects.ts`, beelden in `components/projects/scenes.ts`                                                         |
| Etalage op de homepage                  | `data/etalage-*.json` (oorspronkelijk gegenereerd met `tools/*.py`, daarna met de hand aangepast)                     |
| Sitemap, robots, iconen, social preview | `app/sitemap.ts`, `app/robots.ts`, `app/icon.svg`, `app/apple-icon.png`, `app/favicon.ico`, `app/opengraph-image.png` |
| HTTP-headers en caching                 | `public/_headers`                                                                                                     |

### Stijlen

`app/layout.tsx` importeert de stylesheets in een vaste volgorde; die bepaalt de cascade. Kleuren en
verlopen staan als variabelen in `app/globals.css` (`--brand-fill`, `--brand-rim`, `--accent-text-fill`).
Knoppen: `app/styles/buttons-luxe.css` (vorm, kleur, pijl, hover); rode vlakken en accentwoorden:
`app/styles/bordeaux.css`. Afbeeldingen in `public/` zijn al als WebP op maat gezet: Next optimaliseert
beelden niet bij een statische export.

## Nog te regelen voor livegang

- **Juridisch:** `/privacy` en `/algemene-voorwaarden` zijn concepten (banner, `noindex`, niet in de
  sitemap). Nodig: bedrijfsnaam, KBO/btw-nummer, adres, verwerkers (Cloudflare + de webhookontvanger),
  bewaartermijnen. Daarna de banner en `robots: { index: false }` weghalen en de pagina's aan
  `app/sitemap.ts` toevoegen.
- **Formulier:** `CONTACT_WEBHOOK_URL` instellen en één echte testaanvraag doen. De contactpagina belooft
  "meteen een bevestiging per mail": laat de webhook die mail versturen of pas de tekst aan
  (`components/contact/ContactDetails.tsx`).
- **Reviews:** `components/home/Reviews.tsx` bevat voorbeeldreviews op naam van klanten. Vervang ze door
  echte reviews (met toestemming) en link het Google-bedrijfsprofiel.
- **Social media:** de iconen in footer en contactpagina linken nog nergens naartoe.
- **Inhoud nakijken:** Primelabs linkt naar een `pages.dev`-voorbeeld (`lib/projects.ts`), twee cases
  tonen "Metingen volgen", de Google-score van Taxi Bornem, openingsuren (ma–zo) tegenover "op werkdagen"
  in de FAQ, en de inhoud van de audit (`app/website-audit/page.tsx`).
