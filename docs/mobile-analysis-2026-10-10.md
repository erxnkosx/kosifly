# Mobiele analyse — Kosifly

10 oktober 2026 · Analyse van de huidige lokale productiebuild.

De mobiele basis is goed: leesbare koppen, duidelijke primaire knoppen, formulieren die onder elkaar staan, bruikbare navigatie en een eigen mobiele pakketvergelijking. De belangrijkste problemen zitten in het auditformulier, de betrouwbaarheid van de prijsinformatie en de hoeveelheid geladen beeldmateriaal. Deze analyse wijzigt geen applicatiecode.

## Gecontroleerd

- Nieuwe productiebuild, inclusief TypeScript-controle: geslaagd.
- Bestaande mobiele Playwright-suite: 117 tests op 320×568, 360×740, 390×844, 430×932, 768×1024, 844×390 en 1024×768.
- Aanvullende visuele inspectie en metingen van 17 paginaweergaven op 390×844: alle 16 verschillende pagina's en de afzonderlijke offerteweergave van Contact.
- De nieuwe `/website-audit` aanvullend op alle zeven schermformaten.
- Gerichte tests van auditverzending, pakketvergelijking uitklappen, calculatorbediening, offerteoverdracht en inhoud zonder JavaScript.
- Chrome met mobiele viewport en touch-emulatie. Geen fysiek Android- of iOS-toestel, Safari-test, screenreadertest of gemeten Core Web Vitals op een productieverbinding.
- Verzendtests gebruiken onderschepte, gesimuleerde serverantwoorden. Er zijn geen echte aanvragen verzonden en echte e-mailaflevering is niet bevestigd.

## Bevindingen op prioriteit

### 1. Hoog — Auditformulier toont een fout na succesvol verzenden

Reproductie op 390×844: vul website, naam en e-mail in, accepteer privacy en verzend. Wanneer `/api/contact` met HTTP 200 en `{ "ok": true }` antwoordt, verschijnt alsnog:

> Cannot read properties of null (reading 'reset')

De oorzaak is `e.currentTarget.reset()` na de asynchrone aanvraag. Het React-event heeft op dat moment geen `currentTarget` meer. De fout komt in de `catch` terecht en overschrijft de succesmelding. Een bezoeker denkt daardoor dat de aanvraag mislukt is en kan opnieuw verzenden. Dit raakt de hoofdactie van de mobiele homepage en geldt ook buiten mobiel.

Herstel: bewaar het formulier vóór de eerste `await` in een lokale variabele en reset die referentie na succes. Voeg een test toe die juist de succesmelding én het resetten controleert.

[Bron: AuditForm.tsx, regel 50](C:/Personal_Projects/KOSIFLY_CLAUDE/kosifly-main/components/audit/AuditForm.tsx:50) · [Screenshot van de fout](C:/Personal_Projects/KOSIFLY_CLAUDE/kosifly-main/tests/artifacts/mobile-review-2026-10-10/audit-submit-result.png)

### 2. Hoog — Pakketkaarten en calculator geven verschillende prijzen

De mobiele pakketvergelijking is goed leesbaar, maar gebruikt andere basisprijzen dan de calculator:

| Pakket                       | Kaart / vergelijking | Basisbedrag calculator |
| ---------------------------- | -------------------: | ---------------------: |
| Starter                      |                € 850 |                € 1.490 |
| Professioneel / Bedrijfssite |              € 1.250 |                € 3.450 |
| Groei                        |              € 2.500 |                € 6.900 |

Ook pakketnamen en aantallen pagina's verschillen. Dit zijn bestaande, in de broncode als voorlopig gedocumenteerde verschillen. Voor de bezoeker wordt de sprong tussen een pakket kiezen en een offerte samenstellen daarmee moeilijk te begrijpen. Dit is een algemeen conversieprobleem dat ook in de mobiele flow zichtbaar is.

Herstel: laat de eigenaar de commerciële bedragen en pakketinhoud bevestigen, en gebruik daarna één gegevensbron voor kaarten, vergelijking en calculator. Er zijn in deze analyse geen bedragen gekozen of aangepast.

[Kaartgegevens](C:/Personal_Projects/KOSIFLY_CLAUDE/kosifly-main/components/pricing/websites/Websites.data.ts:24) · [Calculatorgegevens](C:/Personal_Projects/KOSIFLY_CLAUDE/kosifly-main/lib/pricing.ts:3)

### 3. Middel — Projectbeelden zijn te zwaar voor de mobiele weergave

De projectpagina's laden in de eerste lokale meting ongeveer 9,4 MB aan resources. Na door de pagina te scrollen liep dit bij de twee cases op tot ongeveer 11,8–12,3 MB. De homepage kwam na volledig scrollen op ongeveer 12,8 MB, inclusief resources die tijdens scrollen worden geladen of vooraf opgehaald.

Drie grote PNG-bestanden domineren de beeldlast:

- `4cd9a.png`: ongeveer 4,11 MB.
- `309ed.png`: ongeveer 2,34 MB.
- `8aa05.png`: ongeveer 1,18 MB.

De kaartcomponenten laden dezelfde bronbestanden op een telefoon als op grotere schermen. `loading="lazy"` is op de kaarten al aanwezig, maar verkleint het bestand niet. De hero's gebruiken deze beelden eveneens. Dat kost onnodig mobiele data en maakt laden op een trage verbinding kwetsbaar.

Herstel: maak passende mobiele varianten, lever ze via `srcset`/`sizes` of een beeldpipeline en gebruik gecomprimeerde WebP/AVIF waar geschikt. Controleer vervolgens of het vooraf ophalen van cases ook de grote heroafbeeldingen te vroeg ophaalt.

De genoemde totalen zijn lokale resource-metingen, geen productie-laadtijden: de previewserver gebruikt geen productiecompressie of CDN-cache. Afbeeldingsgroottes en het ontbreken van responsieve bronvarianten zijn wel rechtstreeks vastgesteld.

[Taxi-afbeelding](C:/Personal_Projects/KOSIFLY_CLAUDE/kosifly-main/components/projects/art/TaxiCardScene.tsx:38) · [Primelabs-afbeelding](C:/Personal_Projects/KOSIFLY_CLAUDE/kosifly-main/components/projects/art/PrimeCardScene.tsx:27) · [Meetgegevens](C:/Personal_Projects/KOSIFLY_CLAUDE/kosifly-main/tests/artifacts/mobile-review-2026-10-10/inspection.json)

### 4. Middel — Belangrijke tekst is afhankelijk van het starten van JavaScript

Op Home, Website-audit en Contact blijft de H1 onzichtbaar wanneer JavaScript uitstaat. De reveal-componenten leveren de beginstatus `hidden`, met `opacity: 0`, al in de HTML. JavaScript moet de tekst daarna zichtbaar maken.

Met normaal werkend JavaScript verschijnt de inhoud. Wanneer scripts op mobiel traag laden of niet starten, ontbreekt juist de belangrijkste boodschap. De eerste screenshots vóór het afronden van de introanimatie lieten hetzelfde lege tekstgebied zien; de normale screenshots zijn daarom opnieuw gemaakt na het afronden van die animatie.

Herstel: laat essentiële hero-inhoud zichtbaar renderen en voeg animatie pas als verbetering toe. Beperk vertraging op kop, uitleg en primaire knop.

[Reveal-beginstatus](C:/Personal_Projects/KOSIFLY_CLAUDE/kosifly-main/components/motion/Reveal.tsx:55) · [Opaciteit](C:/Personal_Projects/KOSIFLY_CLAUDE/kosifly-main/components/motion/presets.ts:13) · [Home zonder JavaScript](C:/Personal_Projects/KOSIFLY_CLAUDE/kosifly-main/tests/artifacts/mobile-review-2026-10-10/home-without-js.png)

### 5. Middel — Mobiele tests sluiten niet meer aan op de huidige UI

De bestaande suite eindigt op **80 geslaagd en 37 mislukt**. De 37 meldingen zijn geen 37 afzonderlijke mobiele bugs:

- 36 layouttests keuren elementen buiten de viewport af die in de nieuwe opbouw bewust in horizontale scrollers staan. Op de prijzenpagina wordt ook een visueel verborgen sectiekop meegenomen.
- Eén interactietest verwacht horizontaal scrollen in de vergelijkingstabel. De huidige mobiele vergelijking toont juist alle drie pakketten binnen de schermbreedte.
- De nieuwe website-auditpagina ontbreekt volledig in de routelijst, waardoor de echte verzendfout niet wordt opgemerkt.

Geen van de 112 bestaande pagina-/formaatcontroles meldde horizontale overloop van het document. De aanvullende zeven controles van de auditpagina meldden die evenmin. De actuele calculatorflow is afzonderlijk getest: vergelijking uitklappen, pagina toevoegen, Groei selecteren en de keuzes doorgeven aan het offerteformulier werken.

Herstel: controleer reflow binnen de juiste scrollcontainer, test of de overige kaarten bereikbaar zijn, pas de vergelijkingstest aan en voeg de auditpagina inclusief verzending toe.

[Bestaande mobiele tests](C:/Personal_Projects/KOSIFLY_CLAUDE/kosifly-main/tests/mobile.spec.ts:3) · [Testresultaten](C:/Personal_Projects/KOSIFLY_CLAUDE/kosifly-main/tests/artifacts/mobile-review-2026-10-10/existing-tests.json) · [Gerichte hertest](C:/Personal_Projects/KOSIFLY_CLAUDE/kosifly-main/tests/artifacts/mobile-review-2026-10-10/followup.json)

### 6. Lager — Aanraakcomfort en overlap kunnen beter

De selectiestippen voor carrousels hebben op verschillende plekken een raakvlak van 28×44 of 32×44 px. Ze werken, maar zijn smal voor bediening met een duim. Maak het klikvlak waar mogelijk 44×44 px zonder de zichtbare stip te vergroten. Dit is een comfortaanbeveling, geen vastgestelde algemene toegankelijkheidsovertreding.

De vaste auditknop onderaan bedekt bij sommige scrollposities een deel van de etalage-inhoud. Hij komt 700 ms na stoppen met scrollen terug; dat is juist het moment waarop iemand leest. De inhoud blijft bereikbaar door verder te scrollen, maar de overlap vermindert de rust en beschikbare leesruimte. Maak de balk compacter of voorkom dat hij belangrijke kaartinhoud en lokale acties overlapt.

[Stippen Over ons](C:/Personal_Projects/KOSIFLY_CLAUDE/kosifly-main/app/styles/mobile-pages.css:467) · [Prijsstippen](C:/Personal_Projects/KOSIFLY_CLAUDE/kosifly-main/app/styles/mobile-pricing.css:488) · [Vaste balk](C:/Personal_Projects/KOSIFLY_CLAUDE/kosifly-main/components/home/MobileCtaBar.tsx:38) · [Screenshot overlap](C:/Personal_Projects/KOSIFLY_CLAUDE/kosifly-main/tests/artifacts/mobile-review-2026-10-10/home-etalage.png)

## Wat goed werkt

- De mobiele hero's hebben duidelijke hiërarchie en prominente, brede actieknoppen.
- De pagina's blijven binnen de schermbreedte op de geteste formaten; horizontale beweging is beperkt tot bedoelde onderdelen.
- Contact- en audittekstvelden zijn op 390 px breedte 52 px hoog en gebruiken 16 px invoertekst. Labels en automatisch invullen zijn aanwezig.
- Navigatie blijft bereikbaar op korte schermen en na rotatie. Sluiten met Escape en selectie van een dienst werken.
- De gewone contactverzending verwerkt een gesimuleerde serverfout, behoudt de invoer en laat opnieuw proberen toe.
- Projectfilters, alle softwaretabs, FAQ's, touchsliders en de etalagebediening slagen voor de bestaande interactietests.
- In de aanvullende inspectie zijn geen kapotte zichtbare afbeeldingen of ongehanteerde paginafouten gevonden. De auditverzendfout wordt door de applicatie opgevangen en als fouttekst getoond.
- De mobiele prijsvergelijking toont drie pakketten naast elkaar en kan extra kenmerken uitklappen.

## Visuele verfijning

De grote secties en swipebare kaarten geven het merk een consistente mobiele stijl. Wel vraagt de site veel scrollwerk: bij 390×844 is Home ongeveer 8.061 px hoog, de dienstenpagina's circa 8.800–9.200 px en Prijzen circa 12.669 px. Dat is op zichzelf geen defect. Een volgende ontwerpstap kan herhaalde uitleg verkorten en de meest relevante pakket- of dienstkeuze eerder laten zien. De ankerbalk op Prijzen helpt al.

De hoofdnavigatie combineert Engelse labels zoals “Projects”, “Pricing” en “About” met Nederlandse content. “Projecten”, “Prijzen” en “Over ons” sluiten beter aan op de rest van de website.

Aanbevolen volgorde: auditverzending herstellen en afdekken met een test; commerciële informatie gelijkmaken na bevestiging; afbeeldingen verkleinen; zichtbare HTML als basis gebruiken; vervolgens de testdekking en het aanraakcomfort bijwerken.

Alle aanvullende scripts, meetgegevens en screenshots staan in [de auditmap](C:/Personal_Projects/KOSIFLY_CLAUDE/kosifly-main/tests/artifacts/mobile-review-2026-10-10).
