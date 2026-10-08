# Mobiele controle — 8 oktober 2026

De volledige site is nagekeken op leesbaarheid, reflow, zichtbare sectie-inhoud, bediening met aanraking, navigatie en formuliergedrag. De geautomatiseerde controles draaien tegen de gebouwde statische export, met Chromium en ingeschakelde touch-emulatie.

## Dekking

Schermformaten: 320×568, 360×740, 390×844, 430×932, 768×1024, 844×390 (liggend) en 1024×768. Daarnaast is de desktopweergave gecontroleerd op 1440×900.

| Pagina               | Gecontroleerde onderdelen                                                                                           |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Home                 | Hero, vergelijking, diensten, alle vijf etalages, reviews, FAQ, footer                                              |
| Services             | Intro, alle vijf dienstkaarten, lichte navigatie, footer                                                            |
| Contact              | Hero, contactopties, berichtformulier, offerteformulier, proces, locatie, FAQ, footer                               |
| Prijzen              | Hero, ankerbalk, websitepakketten, vergelijking, maandpakketten, maatwerk, extra’s, calculator, proces, FAQ, footer |
| Projecten            | Hero, filters, resultaatkaarten, lege filterstatus, contactuitnodiging, footer                                      |
| Taxi Bornem          | Hero en gegevens, vraag en aanpak, drie bouwonderdelen, resultaten, volgende case, footer                           |
| Primelabs            | Hero en gegevens, vraag en aanpak, drie bouwonderdelen, resultaten, volgende case, footer                           |
| Over ons             | Hero, dienstenlinks, introductie en feiten, expertises, principes, cases, footer                                    |
| Privacy              | Hero, inhoudsopgave, alle zeven inhoudssecties, footer                                                              |
| Algemene voorwaarden | Hero, inhoudsopgave, alle acht inhoudssecties, footer                                                               |
| Webdesign            | Hero, voor/na, features, proces, etalage, verwante diensten, FAQ, footer                                            |
| Lokale SEO           | Hero, regio, zoekresultaten/features, proces, etalage, verwante diensten, FAQ, footer                               |
| Web apps             | Hero, introductie, alle zes modulekeuzes, proces, etalage, verwante diensten, FAQ, footer                           |
| AI & automatisaties  | Hero, besparingscalculator en sliders, features, proces, etalage, verwante diensten, FAQ, footer                    |
| Onderhoud & hosting  | Hero, maandvoorbeeld, onderhoudsbon, proces, etalage, verwante diensten, FAQ, footer                                |

Contact is zowel als bericht als met `?tab=offerte` getest: samen 16 paginaweergaven.

## Hersteld

- De vijf homepage-etalages hebben op telefoon en tablet een eigen leesbare opbouw. Alleen illustraties worden geschaald. Pijlen, selectie, links, native scrollen en toetsenbordbediening blijven bruikbaar; inactieve dia’s ontvangen geen focus. De carrouselhoogte volgt de actieve inhoud.
- De koppen en inleidingen van donkere prijssecties worden niet langer afgesneden door vaste desktopbreedtes. Prijscontent blijft tot 1100 px op ware tekstgrootte.
- De pakketvergelijking heeft een scrollaanwijzing, toetsenbordfocus, compactere kolommen en vaste rijlabels tijdens horizontaal schuiven.
- Calculatorstappen en lange extra-namen lopen correct om. Hoeveelheidsknoppen zijn minimaal 44×44 px; de samenvatting verdeelt omschrijvingen en bedragen zonder overlap.
- Zowel bericht- als offertevelden staan op mobiel onder elkaar. Tekstvelden gebruiken 16 px, ondersteunen automatisch invullen en tekstvakken zijn verticaal vergrootbaar.
- Het contactformulier stuurt nu ook het vereiste backendveld `name`. Niet-JSON-serverfouten geven een begrijpelijke melding en een directe e-maillink; ingevulde gegevens blijven beschikbaar voor opnieuw proberen.
- Touchdoelen van belangrijke losse links, footerlinks, filters en sliders zijn vergroot. Proceskaarten hebben geen overbodige minimumhoogte meer.
- De lichte navigatie gebruikt logo’s met transparantie. Donkere sectielabels en het footeraccent hebben beter contrast. Lange caseteksten en smalle footercontactkolommen lopen correct om.
- Het dienstenmenu blijft ook op korte liggende schermen scrollbaar en bereikbaar. De mobiele navigatie houdt rekening met de actuele viewporthoogte en onderste veilige schermruimte.

## Verificatie

- 117 mobiele browsertests: 112 pagina-/formaatcontroles en vijf uitgebreide interactiescenario’s.
- 36 aanvullende regressietests geslaagd: alle paginaweergaven op 1440×900 en 390×844, menuafmetingen, wisselen naar verminderde beweging en zichtbare inhoud tijdens scrollen.
- Acht bestaande DOM-interactietests, inclusief controle van het correcte naamveld in de formulierpayload.
- Productiebuild en TypeScript-controle.
- Visuele screenshots per pagina en gerichte hercontrole van de aangepaste etalage, prijskoppen, calculator, formulieren, logo’s en footer.

Uitvoeren:

```sh
npm run build
npm run typecheck
npm test
npx playwright test tests/mobile.spec.ts --workers=3
npx playwright test tests/browser.spec.ts --grep '1440x900|390x844|menu fits|motion honours|scroll content'
```

De Playwright-configuratie start hiervoor een lokale server voor `out/` op poort 3100. `next start` is niet geschikt voor deze `output: export`-configuratie.

## Externe afhankelijkheden en grenzen

Formulierverzending is met gesimuleerde succes- en foutantwoorden gecontroleerd; er zijn geen echte aanvragen verstuurd. Echte aflevering vereist de server-side `CONTACT_WEBHOOK_URL` en hosting die `functions/api/contact.ts` uitvoert. De foutmelding en mailoptie werken ook als die koppeling ontbreekt.

Sociale profiel-URL’s zijn niet in het project aanwezig. Prijskaarten en de calculator bevatten bestaande, onderling afwijkende voorlopige bedragen. De definitieve commerciële bedragen zijn niet als onderdeel van deze mobiele ontwerpcontrole gekozen of gewijzigd.

De controles gebruiken browseremulatie; dit is geen certificering voor elk fysiek iOS- of Android-toestel.
