# Kosifly — Figma-integratie

Next.js / React / TypeScript / Tailwind CSS. Gebaseerd op het aangeleverde project en Figma-bestand `Ry6EvmhUtoXM3JFdnJn4rS`, selectie `513:1628`.

## Starten

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. Voor productie:

```bash
npm run typecheck
npm run format:check
npm test
npm run build
npm run test:structure
npm start
```

## Geïntegreerd

- `/diensten/webdesign`
- `/diensten/lokale-seo`
- `/diensten/web-apps`
- `/diensten/ai-automatisaties`
- `/diensten/onderhoud-hosting`
- `/services`: overzicht van de vijf diensten.
- `/prijzen`: prijzenpagina (Figma `328:92`) met negen secties, ankerbalk en interactieve prijscalculator.
- `/projecten`: filterbaar overzicht (Figma `402:92`).
- `/projecten/taxi-bornem` en `/projecten/primelabs`: cases met vraag, aanpak, drie uitgewerkte onderdelen, resultaten en volgende case (Figma `408:185` en `412:285`).
- `/over-ons`: manifest, bedrijfsinformatie, vijf expertises, vier principes en projecten (Figma `436:92`).
- `/privacy` en `/algemene-voorwaarden`: vormgegeven conceptpagina’s met inhoudsnavigatie. De definitieve bedrijfsgegevens, verwerkingstermijnen, dienstverleners en juridische teksten ontbreken nog; de pagina’s staan daarom op `noindex`.
- Gedeelde navigatie met Services-menu op hover, klik en toetsenbord.
- Alle diensten hebben hero, uitleg, aanbod, proces, etalage, gerelateerde diensten, FAQ en footer.
- Originele Figma-assets lokaal in `public/figma`; geen tijdelijke Figma-URL’s in de applicatie.
- Voor/na-schuifregelaar, zes selecteerbare softwaremodules, live besparingscalculator, FAQ met één open antwoord en FAQPage-gegevens.
- Calculatorwaarden en gekozen dienst worden meegenomen naar het bestaande contactformulier.

## Prijzenpagina

`app/prijzen/page.tsx` rendert de secties uit `components/pricing`, binnen `components/ui/DesignCanvas.tsx`. Dat is een canvas van 1920 px dat meeschaalt met de beschikbare breedte, zodat de Figma-maten 1-op-1 kloppen. Op telefoon- en tabletbreedtes wordt de pagina daardoor verkleind weergegeven; een echte responsieve variant is nog niet ontworpen.

- Elke sectie heeft een eigen map (`hero`, `anchor-bar`, `websites`, `comparison`, `monthly`, `custom`, `extras`, `calculator`, `how-it-works`, `faq`) met het component en een `*.data.ts` met de teksten en bedragen. Gedeelde onderdelen (sectiekop, lichte/donkere sectie, pilknop, chips, checkpictogram) staan in `components/pricing/shared`.
- De statische kaarten (websitepakketten, maandpakketten, extra's, hero) tonen de bedragen uit het ontwerp. De calculator rekent met `lib/pricing.ts` (overdrachtsblad in Figma). Die twee bronnen verschillen bewust en zijn nog niet gelijkgetrokken.
- Keuzes uit de calculator gaan als URL-parameters mee naar `/contact?tab=offerte`; `/prijzen?pakket=…&onderhoud=…&seo=…#bereken-je-prijs` selecteert ze vooraf.

## Schermformaten

De vaste minimale documentbreedte van 1920 pixels is verwijderd. De viewport gebruikt `device-width`. Dienstenpagina’s gebruiken normale documentflow, CSS Grid, flexbox, begrensde tekstgroottes en breekpunten op 1280, 1000 en 760 pixels. Gedetailleerde illustraties behouden hun interne Figma-coördinaten en schalen proportioneel binnen hun eigen container. De homepage-hero, probleemsectie, vergelijking, dienstenkaarten, reviews en FAQ gebruiken nu normale tekstflow en flexibele grids. Alleen de decoratieve laptopcompositie en de vijf bestaande etalages behouden een proportioneel geschaald canvas. Contact, navigatie en footer hebben een flexibele layout.

De desktop-Figma-maten zijn geen geforceerde schermmaten. Secties groeien mee met hun inhoud. Teksten en kaarten stapelen op smalle schermen. Verminderde beweging wordt gerespecteerd.

## Gecontroleerd

- TypeScript-controle geslaagd.
- Productiebuild met webpack geslaagd; alle vijf diensten worden statisch gegenereerd.
- Negen DOM-interactietests geslaagd: FAQ’s voor alle diensten en homepage, calculator inclusief grenswaarden, gegevensoverdracht, voor/na, modulekiezer, desktop-/mobiele navigatie en animatiegedrag inclusief live reduced-motion-wijziging.
- Alle vijftien pagina’s gecontroleerd in de gebouwde HTML: één H1, één navbar, viewport, inhoudsanker, dienstenonderdelen, proces-/FAQ-teksten en interne links.
- Lokale assetverwijzingen gecontroleerd op bestaande, niet-lege bestanden; originele footericonen, homepagebeelden en casebeelden lokaal opgeslagen vanuit Figma.
- Browsercontrole met de lokaal geïnstalleerde Chrome: acht pagina’s op acht breedtes van 320 tot 2560 pixels. Gelijke contentranden, gecentreerde hero’s en geen horizontale overloop.
- Footercontrole op alle acht pagina’s en vijf breedtes: identieke opbouw, gelijke maten en geladen assets.
- Aanvullend: `npm run test:portfolio` controleert alle vijftien pagina’s op zes breedtes (320, 390, 768, 1280, 1920 en 2560 px), gedeelde randen en footer, tekstoverloop, afbeeldingen en browserfouten. Ook projectfilters, de lege filterstatus, beide case-links, onbekende cases (404) en juridische ankers worden getest. Screenshots en resultaten staan in `tests/artifacts/portfolio`.
- De vijf diensten vergeleken met de actuele Figma-secties. Screenshots van alle zeven secties per dienst staan in `tests/artifacts/screenshots`. De zes softwarepanelen zijn gecontroleerd op vier breedtes, inclusief de zichtbaarheid van de voorbeelden, toetsenbordbediening en unieke ARIA-koppelingen.
- De Figma-referentieteksten staan in `tests/figma-reference.json`; de browserresultaten in `tests/artifacts/visual-audit.json` en `tests/artifacts/layout-verification.json`.
- Deze controles onderbouwen de uitvoering op de geteste formaten. Er is geen geautomatiseerde pixelvergelijking; de eerdere verzoeken om gelijke marges en gecentreerde hero’s blijven leidend.

## Navbar en animaties

De navbar is transparant, zonder eigen gradient, rand of schaduw. Hij ligt boven de hero-achtergrond; de hero reserveert daarvoor ruimte. De hoogte is 72–96 pixels (72 px op gangbare laptops), tegenover maximaal 130 pixels eerder. Het lichte dienstenoverzicht gebruikt donkere navigatietekst.

Animaties gebruiken Framer Motion (`framer-motion`) en staan in `components/motion`:

- `MotionProvider` (in `app/layout.tsx`) zet de standaardovergang en respecteert de systeemvoorkeur voor verminderde beweging.
- `Reveal`, `RevealGroup` en `RevealItem` laten hero-inhoud na elkaar binnenkomen en elementen verschijnen bij het scrollen.
- `ScrollReveal` laat bestaande, server-gerenderde secties (en elementen met `data-reveal` of `data-reveal-group`) verschijnen bij het in beeld komen. Alleen inhoud onder de vouw wordt verborgen, dus de hero en de inhoud zonder JavaScript blijven zichtbaar.
- `AnimatedNumber` telt zacht naar nieuwe bedragen in de calculators. Het Services-menu, de FAQ-accordeons en de tabinhoud van het contactformulier animeren met Framer Motion.

Alle heroes gebruiken dezelfde achtergrond (`components/ui/HeroBackdrop.tsx`: gloed, puntraster, diagonale lijnen en de gebogen lijn linksboven) op een `.service-hero`-sectie.

## Reproduceerbare browsercontrole

Na de productiebuild:

```bash
npx playwright install chromium
npm run test:browser
npm run test:browser:report
```

Playwright start automatisch een lokale server voor de statische export in `out/` op poort 3100. De suite controleert alle vijftien pagina’s plus de offerteweergave op desktop- en mobiele schermformaten, met controles voor overloop, tekstcontainers, navigatie, afbeeldingen, JavaScript-fouten en verminderde beweging. De aanvullende mobiele suite test zeven schermformaten en aanraking voor onder meer de carrousel, calculator, formulieren, filters en menu’s. Dekking en resultaten staan in [de mobiele audit](docs/mobile-audit.md). Structurele tests bewijzen geen pixel-perfecte overeenkomst met Figma.

De aanvullende controles die in deze sessie zijn uitgevoerd gebruiken de lokaal geïnstalleerde Chrome:

```bash
node tests/verify-layout.cjs
node tests/verify-footer.cjs
node tests/visual-audit.cjs
```

Start eerst de gebouwde website op poort 3000. De scripts schrijven hun meetresultaten en screenshots naar `tests/artifacts`.

## Contactformulier aansluiten

De aangeleverde contact-API logde aanvragen en gaf daarna succes terug. De aangepaste API bevestigt alleen succes wanneer een ingestelde ontvanger de aanvraag accepteert.

Kopieer `.env.example` naar `.env.local` en stel `CONTACT_WEBHOOK_URL` in op de server-side webhook van je mailbox- of CRM-integratie. Zonder configuratie geeft het formulier een heldere melding en het bestaande e-mailadres/telefoonnummer. Er worden geen aanvragen alleen gelogd of stilzwijgend als verzonden gemarkeerd.

## Nog te bevestigen uit het ontwerp / oorspronkelijke project

- De gebruiker heeft vijf weken voor webdesign bevestigd. Proces, FAQ’s en metadata noemen nu overal vijf weken. De oude Figma-stap met week zes is daarom gecorrigeerd.
- Uptime en rapportages zijn voorbeelden; de onderhoudshero is als voorbeeld gemarkeerd.
- Alleen het klantenportaal is als detailmodule in Figma uitgewerkt. De vijf overige modulepanelen volgen dezelfde stijl met beschrijvende voorbeeldinhoud.
- De aanvullende pagina’s zijn gevonden op de Figma-pagina’s CASES en ABOUT. Navigatie, footer en bestaande Taxi Bornem-caseknoppen verwijzen nu naar de afzonderlijke routes. Sociale profiel-URL’s ontbreken nog.
- De twee caseontwerpen bevatten nog lege aanvraagcijfers en klantquotes. De website toont geen verzonnen aantallen of klantbeoordelingen: de derde meetwaarde is gemarkeerd als ‘Metingen volgen’ en het quotevak bevat een eigen samenvatting met afzender Kosifly.
- De homepage is aanvullend vergeleken met de bestaande homepage-nodes in hetzelfde Figma-bestand (o.a. 154:1248, 156:2773, 144:2657 en 144:2695). De oorspronkelijke homepagevariant is behouden.
- Reviewkaarten in Figma bevatten herhaalde namen zonder reviewtekst; die placeholders zijn niet vervangen door verzonnen beoordelingen. De knop naar Google Reviews opent een zoekopdracht; een directe bedrijfsprofiel-URL ontbreekt.
- Privacy en voorwaarden zijn concepten, geen goedgekeurde juridische documenten. Voor definitieve publicatie zijn de bedrijfsidentiteit, dienstverleners, bewaartermijnen en contractafspraken nodig. Het fictieve btw-nummer is verwijderd uit de gedeelde footer.

## Belangrijkste bestanden

- `components/services/ServicePage.tsx`: gedeelde pagina-opbouw.
- `components/services/Interactions.tsx`: FAQ, calculator en vergelijking.
- `components/services/ModulePicker.tsx` en `ModulePreview.tsx`: toegankelijke modulekiezer en vijf afzonderlijk uitgewerkte softwarevoorbeelden.
- `components/contact/ContactDetails.tsx`: vervolgproces, locatie en contact-FAQ.
- `components/services/art/RegionMap.tsx`: gedeelde actuele Figma-kaart.
- `app/styles/service-details.css`: procesonderlijnen, softwarepanelen, onderhoudsticket en contactsecties.
- `components/services/art/`: Figma-illustraties en precieze decoratieve composities.
- `data/services-design.json`: teksten uit de vijf Figma-ontwerpen.
- `app/styles/`: `services.css` en `refinements.css` (responsive layouts, laptoptypografie), `page-layout.css`, `footer.css` en `service-details.css`. De importvolgorde in `app/layout.tsx` bepaalt de cascade; wijzig die niet zonder visuele controle.
- `components/pricing/`: de prijzenpagina, per sectie een map.
- `components/motion/`: Framer Motion-bouwstenen.
- `components/ui/`: gedeelde onderdelen (`Artwork`, `HeroBackdrop`, `DesignCanvas`, `Badge`, pictogrammen).
- `components/SiteMotion.tsx`: progressive scrollanimaties.
- `tests/browser.spec.ts`: browsermetingen en screenshots op zes schermformaten.
- `tests/structure.cjs`: gebouwde HTML en lokale assets.
- `lib/services.ts`: dienstnamen, routes en metadata.
- `lib/projects.ts`: gedeelde case-inhoud en beperkte kaartgegevens voor het interactieve overzicht.
- `components/projects/`: projectkaart, overzicht en gedeelde caseopbouw; alleen illustraties behouden Figma-coördinaten.
- `components/legal/LegalPage.tsx`: gedeelde juridische opbouw met inhoudsnavigatie en conceptmelding.
- `app/styles/portfolio.css`: nieuwe pagina’s met dezelfde contentranden als de rest van de site.
- `tests/interactions.cjs`: reproduceerbare DOM-interactietests (met `tests/support/framer-motion-stub.cjs` omdat jsdom geen animatieframes heeft).
- `tests/artifacts/`: door de testscripts geschreven resultaten en screenshots.

TypeScript is vastgezet op de compatibele 5.9-reeks; de meegeleverde 7.0-compiler kon in deze uitvoeromgeving niet starten. De build gebruikt webpack zodat hij overeenkomt met de gecontroleerde productiebuild.
