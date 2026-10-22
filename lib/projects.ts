export type Project = {
  slug: string;
  name: string;
  /**
   * "compact": case met alleen wat in het opgeleverde ontwerp zichtbaar is (geen resultaten of cijfers).
   * De casepagina toont dan "Het project" en "In beeld" in plaats van vraag, aanpak en resultaat.
   */
  kind?: "compact";
  /** Korte plaatsnaam op de projectkaart; zonder plaats toont de kaart de sector. */
  place?: string;
  region?: string;
  sector: string;
  title: string;
  /** Titel bovenaan de casepagina: eerste regel, accentwoord en de rest. */
  headline: { lead: string; accent: string; rest: string };
  summary: string;
  intro: string;
  tags: string[];
  categories: string[];
  note: string;
  /** Hoofdknop bovenaan de casepagina: de live site (nieuw tabblad) of een pagina van Kosifly. */
  link: { href: string; label: string; external?: boolean };
  /** Vijfde gegeven naast klant, sector, regio en diensten. */
  highlight: { label: string; value: string };
  question: string;
  /** Woorden uit `question` die het accent (onderlijning) krijgen. */
  questionAccent: string;
  situation: string;
  approach: string;
  steps: { label: string; title: string; description: string; points: string[] }[];
  /** `note`: kleine regel onder het label, bv. wanneer een meting nog volgt. Zonder metingen: geen resultaatsectie. */
  metrics?: { value: string; label: string; note?: string }[];
  /** Slotzin van Kosifly onder het resultaat. */
  conclusion?: string;
};

export type ProjectSummary = Pick<
  Project,
  "slug" | "name" | "place" | "sector" | "title" | "summary" | "tags" | "categories" | "note"
>;

/** Copy and service attribution from the published case designs in Figma. */
export const projects: readonly Project[] = [
  {
    slug: "taxi-bornem",
    name: "Taxi Bornem",
    place: "Bornem",
    region: "Bornem en omgeving",
    sector: "Personenvervoer",
    title: "Van telefoontjes naar online ritaanvragen.",
    headline: { lead: "Van telefoontjes naar", accent: "online", rest: " ritaanvragen." },
    summary:
      "Een snelle site op maat waar klanten in een paar tikken een rit aanvragen, dag en nacht, met lokale SEO die hen vindbaar maakt in de regio.",
    intro:
      "Een snelle site op maat voor een taxidienst uit Bornem, waar klanten dag en nacht zelf een rit aanvragen.",
    tags: ["Webdesign", "Lokale SEO", "Boekingsmodule"],
    categories: ["webdesign", "lokale-seo"],
    note: "Personenvervoer · 4,9 / 5 op Google",
    link: { href: "https://taxibornem.be", label: "Bezoek de live site", external: true },
    highlight: { label: "Status", value: "Live" },
    question: "Een betrouwbare taxidienst die online meer ritten wilde binnenhalen.",
    questionAccent: "meer ritten",
    situation:
      "Taxi Bornem rijdt dag en nacht in Bornem en omgeving. Nieuwe klanten vonden hun weg vooral via de telefoon en mond-tot-mondreclame, terwijl steeds meer mensen online een taxi zoeken.",
    approach:
      "We vertrokken vanuit de klant van de klant: wie zoekt een taxi, wanneer en op welk toestel? Daarop bouwden we een snelle, mobiele site met een boekingsformulier, WhatsApp op elke pagina en een sterke lokale aanwezigheid in Google.",
    steps: [
      {
        label: "01 · BOEKEN",
        title: "Een rit boeken in drie tikken.",
        description:
          "Ophaaladres, bestemming en uur: in drie stappen is een rit aangevraagd, zonder te bellen. De klant krijgt meteen een bevestiging.",
        points: ["Werkt op elk toestel", "Bevestiging voor de klant", "Ook 's nachts"],
      },
      {
        label: "02 · OPVOLGING",
        title: "Elke aanvraag netjes in de mailbox.",
        description:
          "Aanvragen komen opgemaakt binnen bij Taxi Bornem, met alle gegevens op een rij. Niemand moet nog iets overtypen.",
        points: [
          "Een overzichtelijke mail per rit",
          "Ontvangstbevestiging voor de klant",
          "WhatsApp voor snelle vragen",
        ],
      },
      {
        label: "03 · VINDBAARHEID",
        title: "Gevonden door wie in de regio zoekt.",
        description:
          "Een volledig Google-profiel, reviews in de kijker en een site die Google begrijpt. Zo vindt wie een taxi zoekt meteen de juiste info.",
        points: [
          "Google Bedrijfsprofiel op punt",
          "4,9 sterren uit 50+ reviews",
          "Snelle, mobiele site",
        ],
      },
    ],
    metrics: [
      { value: "4,9 / 5", label: "Google-score · 50+ reviews" },
      { value: "24/7", label: "online een rit aanvragen" },
      { value: "—", label: "aanvragen per maand", note: "Metingen volgen" },
    ],
    conclusion: "Een snelle, heldere website met een duidelijke weg naar een ritaanvraag.",
  },
  {
    slug: "zerain",
    name: "Zerain",
    kind: "compact",
    place: "Rotterdam",
    region: "Rotterdam · Alexandrium",
    sector: "Koffiebar & brunch",
    title: "Koffie en brunch, online net zo uitnodigend.",
    headline: { lead: "Koffie en brunch,", accent: "online", rest: " net zo uitnodigend." },
    summary:
      "Een website voor een specialty coffee bar in Alexandrium, Rotterdam: sfeer, menu en de route naar de zaak in één oogopslag.",
    intro:
      "Een website voor Zerain, specialty coffee & kitchen in winkelcentrum Alexandrium in Rotterdam. Het menu, de sfeer van de zaak en de route staan altijd binnen handbereik.",
    tags: ["Webdesign", "Mobiel ontwerp", "Menu & route"],
    categories: ["webdesign"],
    note: "Horeca · Rotterdam",
    link: { href: "https://www.zerain.nl", label: "Bezoek de site", external: true },
    highlight: { label: "Project", value: "Website ontwerp" },
    question: "Een koffiebar waar je al zin in krijgt voor je binnenstapt.",
    questionAccent: "zin in krijgt",
    situation:
      "Zerain is een specialty coffee & kitchen in het hart van winkelcentrum Alexandrium in Rotterdam. Je kan er vanaf 07:00 terecht voor koffie, matcha en brunch: voor een snelle espresso tussen het winkelen door of een lange brunch met vrienden.",
    approach:
      "We ontwierpen een website die de sfeer van de zaak overbrengt: warme tinten, grote sfeerbeelden en een klassieke letter. Het menu, de route en Instagram staan altijd binnen één klik, op de computer en op de gsm.",
    steps: [
      {
        label: "01 · DESKTOP",
        title: "Sfeer, menu en route meteen in beeld.",
        description:
          "De homepage opent met een sfeerbeeld en de kern: koffie, matcha en brunch in Alexandrium. Met één klik bekijk je het menu of plan je je route.",
        points: [
          "Menu en route plannen in de hero",
          "Navigatie naar menu, over ons, vacatures en bezoek",
          "Instagram rechtstreeks gelinkt",
        ],
      },
      {
        label: "02 · MOBIEL",
        title: "Even landen, ook op de gsm.",
        description:
          "Op de gsm vertelt de site het verhaal van de plek: bordeaux fauteuils, licht eiken hout en de geur van vers gezette koffie, met beelden van de zaak.",
        points: ["Ontworpen voor de gsm", "Sfeerbeelden van de zaak", "Rustige, leesbare opbouw"],
      },
    ],
  },
  {
    slug: "primelabs",
    name: "Primelabs",
    place: "België",
    region: "Heel België",
    sector: "Inspecties & bouw",
    title: "Drone-inspecties, helder in beeld.",
    headline: { lead: "Drone-inspecties,", accent: "helder", rest: " in beeld." },
    summary:
      "Een strakke site voor een specialist in drone-inspecties van daken, gevels en werven, met een duidelijke weg naar een inspectieaanvraag.",
    intro:
      "Een strakke site voor een specialist in drone-inspecties, met een duidelijke weg naar een inspectieaanvraag.",
    tags: ["Webdesign", "Ontwikkeling", "Aanvraagformulier"],
    categories: ["webdesign"],
    note: "Inspecties & bouw · Heel België",
    link: { href: "https://primelabs-aap.pages.dev", label: "Bezoek de site", external: true },
    highlight: { label: "Platform", value: "Desktop en mobiel" },
    question: "Een inspectiebedrijf dat zijn vakmanschap ook online wilde tonen.",
    questionAccent: "vakmanschap",
    situation:
      "Primelabs voert visuele drone-inspecties uit van daken, gevels, werven en infrastructuur in heel België. Het werk is technisch en precies, en dat moest online meteen duidelijk worden voor bedrijven en particulieren.",
    approach:
      "We maakten het complexe eenvoudig: een heldere belofte, sterke beelden van echte inspecties, uitleg over wat je krijgt en een duidelijke knop om een inspectie aan te vragen, op elk toestel.",
    steps: [
      {
        label: "01 · EERSTE INDRUK",
        title: "Een belofte die meteen vertrouwen geeft.",
        description:
          "Wie op de site landt, ziet in één oogopslag wat Primelabs doet: een duidelijke titel, een sterk beeld van een echte inspectie en twee heldere knoppen.",
        points: [
          "Heldere belofte bovenaan",
          "Beelden van echte inspecties",
          "Meteen een inspectie aanvragen",
        ],
      },
      {
        label: "02 · WAT JE KRIJGT",
        title: "Het resultaat van een inspectie, meteen zichtbaar.",
        description:
          "Aandachtspunten, beelden en een rapport: de site toont meteen wat een inspectie oplevert en hoe ze verloopt, in vijf stappen.",
        points: ["Aandachtspunten in kaart", "Rapport als pdf", "Werkwijze in vijf stappen"],
      },
      {
        label: "03 · MOBIEL",
        title: "Een inspectie aanvragen vanaf de gsm.",
        description:
          "Ook op de werf of onderweg vraag je in een paar tikken een inspectie aan. Alles is ontworpen om op een klein scherm vlot te werken.",
        points: [
          "Mobiel eerst ontworpen",
          "Aanvragen in een paar stappen",
          "Dezelfde sterke beelden",
        ],
      },
    ],
    metrics: [
      { value: "5", label: "stappen van aanvraag tot rapport" },
      { value: "PDF", label: "rapport na elke inspectie" },
      { value: "—", label: "inspectieaanvragen per maand", note: "Metingen volgen" },
    ],
    conclusion: "Een snelle, heldere website met een duidelijke weg naar een inspectieaanvraag.",
  },
  {
    slug: "panero",
    name: "Panero",
    kind: "compact",
    sector: "Broodjes & take-away",
    title: "Tijd voor iets lekkers, ook online.",
    headline: { lead: "Broodjes met", accent: "smaak", rest: ", ook online." },
    summary:
      "Een website voor PANERO: broodjes, gerechten en desserts, met een menu per categorie en take-away binnen één tik.",
    intro:
      "Een website voor PANERO, voor een goed broodje, iets warms of een zoete pauze. Met een overzichtelijk menu en take-away vooraan.",
    tags: ["Webdesign", "Online menu", "Take-away"],
    categories: ["webdesign"],
    note: "Broodjes & take-away",
    link: { href: "https://www.panero.be", label: "Bezoek de site", external: true },
    highlight: { label: "Project", value: "Website ontwerp" },
    question: "Een menu waar je meteen trek van krijgt.",
    questionAccent: "trek",
    situation:
      "PANERO serveert broodjes, warme gerechten en desserts, om ter plaatse te eten of mee te nemen. Een goed broodje, iets warms of een zoete pauze: voor elk moment iets lekkers.",
    approach:
      "We ontwierpen een website in een eigen, warme huisstijl: diep groen, crème en een elegante letter, met grote beelden van de producten. Het menu en take-away staan centraal, op de computer en op de gsm.",
    steps: [
      {
        label: "01 · DESKTOP",
        title: "Meteen zin in iets lekkers.",
        description:
          "De homepage zet de producten en de verpakking in de verf en leidt je in één klik naar het menu of naar take-away.",
        points: [
          "Menu en take-away in de hero",
          "Grote productbeelden",
          "Knop ‘Kom langs’ altijd in beeld",
        ],
      },
      {
        label: "02 · MOBIEL",
        title: "Het menu, per categorie.",
        description:
          "Op de gsm kies je tussen broodjes, warm, zoet en dranken, en zie je per categorie wat er op de kaart staat.",
        points: ["Filter per categorie", "Leesbare kaart op de gsm", "Voor hier of onderweg"],
      },
    ],
  },
  {
    slug: "futsalytix",
    name: "Futsalytix",
    kind: "compact",
    place: "België",
    region: "België",
    sector: "Sporttechnologie",
    title: "Een nieuwe app voor zaalvoetbal, in één oogopslag uitgelegd.",
    headline: { lead: "Elke match,", accent: "helder", rest: " in beeld." },
    summary:
      "Een website voor Futsalytix, de app die je zaalvoetbalmatch filmt en er highlights, statistieken en een live scorebord van maakt.",
    intro:
      "Futsalytix filmt je zaalvoetbalmatch en maakt er highlights, statistieken en een live scorebord van. Wij ontwierpen de website die de app uitlegt, voor spelers én voor zaaluitbaters.",
    tags: ["Webdesign", "Meertalig", "App-landingspagina"],
    categories: ["webdesign"],
    note: "Sporttechnologie · België",
    link: { href: "https://www.futsalytix.be", label: "Bezoek de site", external: true },
    highlight: { label: "Talen", value: "NL · FR · EN" },
    question: "Een nieuwe app die je in één oogopslag snapt.",
    questionAccent: "in één oogopslag",
    situation:
      "Futsalytix is nieuw in België en gemaakt voor zaalvoetbal: genummerd hesje aan, spelen maar. De app filmt de match en maakt highlights, statistieken en een live scorebord, gratis voor spelers.",
    approach:
      "We ontwierpen een website die de app meteen laat zien: een live speelveld, topsnelheid en de laatste wedstrijden. Spelers downloaden de app, zaaluitbaters krijgen een eigen ingang, en alles is er in het Nederlands, Frans en Engels.",
    steps: [
      {
        label: "01 · DESKTOP",
        title: "De app in actie, op de homepage.",
        description:
          "Een live speelveld, de topsnelheid en een goalmelding laten zien wat Futsalytix doet, nog voor je iets leest.",
        points: [
          "Download de app vanuit de hero",
          "Aparte ingang voor zaaluitbaters",
          "Beschikbaar in NL, FR en EN",
        ],
      },
      {
        label: "02 · MOBIEL",
        title: "Ook op de gsm, net zo duidelijk.",
        description:
          "Op de gsm zie je live tracking en je topsnelheid, met één duidelijke knop om een account te maken.",
        points: [
          "Live tracking en topsnelheid",
          "Account maken in één tik",
          "Sportieve, eigen huisstijl",
        ],
      },
    ],
  },
  {
    slug: "psc-open-huis",
    name: "PSC Open Huis",
    place: "Antwerpen",
    region: "Antwerpen",
    sector: "Seniorenwerking",
    title: "Ledenbeheer en activiteiten op één plek.",
    headline: { lead: "Ledenbeheer en activiteiten,", accent: "op één plek", rest: "." },
    summary:
      "Een webapp op maat waarmee een seniorenwerking in Antwerpen leden, activiteiten en inschrijvingen beheert, op de computer en op de gsm.",
    intro:
      "Een webapp op maat voor een seniorenwerking in Antwerpen: leden, de maandkalender en inschrijvingen in één overzicht.",
    tags: ["Web app op maat", "Ledenbeheer", "Activiteitenkalender"],
    categories: ["web-apps"],
    note: "Seniorenwerking · Live",
    link: { href: "/contact?dienst=Web%20apps%20%26%20maatwerk", label: "Bespreek jouw project" },
    highlight: { label: "Status", value: "Live" },
    question:
      "Een seniorenwerking die leden, activiteiten en inschrijvingen op één plek wilde beheren.",
    questionAccent: "op één plek",
    situation:
      "PSC Open Huis is een seniorenwerking in Antwerpen met een volle maandkalender: koffienamiddagen, taalcafés, uitstappen en bezoeken. Inschrijven gebeurt elke maandag in het Open Huis of telefonisch, en de maandkalender gaat op papier naar de leden.",
    approach:
      "We bouwden de app rond hun manier van werken: het wekelijkse inschrijfmoment, de maandkalender op papier en de gegevens die ze echt nodig hebben, zoals A-kaart en Train+. Alles in de huisstijl van PSC Open Huis, met aanmelden via Microsoft 365.",
    steps: [
      {
        label: "01 · LEDEN",
        title: "Alle leden in één overzicht.",
        description:
          "Zoek op naam, lidnummer of gsm-nummer en filter op status, leeftijd of verhoogde tegemoetkoming. Per lid staan contactgegevens, A-kaart, Train+ en privacytoestemmingen samen.",
        points: [
          "Zoeken en filteren",
          "Privacytoestemmingen (GDPR) per lid",
          "Gevoelige gegevens enkel voor beheerders",
        ],
      },
      {
        label: "02 · KALENDER",
        title: "De maandkalender, klaar om af te drukken.",
        description:
          "Alle activiteiten staan in één maandoverzicht, met wie moet inschrijven en wat volgeboekt of geannuleerd is. De kalender gaat als Word of PDF meteen naar de printer.",
        points: [
          "Maand- en lijstweergave",
          "Export naar Word en PDF",
          "Volgeboekt en geannuleerd in één oogopslag",
        ],
      },
      {
        label: "03 · INSCHRIJVEN",
        title: "Snel inschrijven tijdens het inschrijfmoment.",
        description:
          "Zoek een lid op naam of lidnummer en schrijf in met één knop. De app houdt de vrije plaatsen bij en neemt gsm, A-kaart en Train+ automatisch over uit het ledenbestand.",
        points: [
          "Zoeken op naam of lidnummer",
          "Vrije plaatsen altijd up-to-date",
          "Ook telefonische inschrijvingen",
        ],
      },
    ],
    metrics: [
      { value: "10", label: "schermen op maat, van ledenlijst tot export" },
      { value: "2", label: "formaten voor de maandkalender: Word en PDF" },
      { value: "1", label: "app voor leden, activiteiten en inschrijvingen" },
    ],
    conclusion:
      "Eén app voor leden, activiteiten en inschrijvingen, in de eigen huisstijl van PSC Open Huis.",
  },
  {
    slug: "ay-gold",
    name: "Ay Gold",
    kind: "compact",
    sector: "Juwelier",
    title: "Bestellingen en betalingen in één overzicht.",
    headline: { lead: "Van losse Excel-bestanden", accent: "naar één platform", rest: "." },
    summary:
      "Maatwerksoftware voor juwelier Ay Gold: bestellingen per categorie, betalingen en voorschotten, herinneringen en klanten in één overzicht.",
    intro:
      "Maatwerksoftware voor juwelier Ay Gold. Elke bestelling, betaling en afhaling staat in één overzicht, in plaats van in losse Excel-bestanden.",
    tags: ["Software op maat", "Bestelbeheer", "Betalingsopvolging"],
    categories: ["web-apps"],
    note: "Juwelier · Maatwerksoftware",
    link: { href: "/contact?dienst=Web%20apps%20%26%20maatwerk", label: "Bespreek jouw project" },
    highlight: { label: "Project", value: "Maatwerksoftware" },
    question: "Elke bestelling en elke betaling op één plek.",
    questionAccent: "op één plek",
    situation:
      "Ay Gold is een juwelier met bestellingen in vier categorieën: Bilezik, Ziynet, Fantasy Ürünler en sets. Per bestelling moet duidelijk zijn of ze klaar is, afgehaald en betaald.",
    approach:
      "We bouwden software op maat rond hun manier van werken: een overzicht met de stand van alle bestellingen, openstaande betalingen en voorschotten, en per categorie snel een nieuwe bestelling.",
    steps: [
      {
        label: "01 · OVERZICHT",
        title: "Alles wat openstaat, in één oogopslag.",
        description:
          "Het overzicht toont welke bestellingen nog niet afgehaald zijn, welke betalingen nog openstaan en wat met een voorschot is betaald.",
        points: [
          "Openstaande betalingen en voorschotten",
          "Afgeleverd en geannuleerd apart geteld",
          "Zoeken op klant, telefoon of bonnummer",
        ],
      },
      {
        label: "02 · CATEGORIEËN",
        title: "Per categorie een nieuwe bestelling.",
        description:
          "Voor elke categorie zie je meteen hoeveel bestellingen openstaan en wat de laatste bon was, met één knop voor een nieuwe bestelling.",
        points: [
          "Bilezik, Ziynet, Fantasy Ürünler en sets",
          "Laatste bon per categorie",
          "Herinneringen en klantenbestand",
        ],
      },
    ],
  },
];

/** Only card data crosses the client boundary of the project filter. */
export const projectSummaries: readonly ProjectSummary[] = projects.map(
  ({ slug, name, place, sector, title, summary, tags, categories, note }) => ({
    slug,
    name,
    place,
    sector,
    title,
    summary,
    tags,
    categories,
    note,
  }),
);
