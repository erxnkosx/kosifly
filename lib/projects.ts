export type Project = {
  slug: string;
  name: string;
  region: string;
  sector: string;
  title: string;
  summary: string;
  intro: string;
  tags: string[];
  categories: string[];
  note: string;
  website: string;
  question: string;
  situation: string;
  approach: string;
  steps: { label: string; title: string; description: string; points: string[] }[];
  metrics: { value: string; label: string }[];
};

export type ProjectSummary = Pick<
  Project,
  "slug" | "name" | "title" | "summary" | "tags" | "categories" | "note"
>;

/** Copy and service attribution from the two published case designs in Figma. */
export const projects: readonly Project[] = [
  {
    slug: "taxi-bornem",
    name: "Taxi Bornem",
    region: "Bornem en omgeving",
    sector: "Personenvervoer",
    title: "Van telefoontjes naar online ritaanvragen.",
    summary:
      "Een snelle site op maat waar klanten in een paar tikken een rit aanvragen, dag en nacht, met lokale SEO die hen vindbaar maakt in de regio.",
    intro:
      "Een snelle site op maat voor een taxidienst uit Bornem, waar klanten dag en nacht zelf een rit aanvragen.",
    tags: ["Webdesign", "Lokale SEO", "Boekingsmodule"],
    categories: ["webdesign", "lokale-seo"],
    note: "Personenvervoer · 4,9 / 5 op Google",
    website: "https://taxibornem.be",
    question: "Een betrouwbare taxidienst die online meer ritten wilde binnenhalen.",
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
    ],
  },
  {
    slug: "primelabs",
    name: "Primelabs",
    region: "Heel België",
    sector: "Inspecties & bouw",
    title: "Drone-inspecties, helder in beeld.",
    summary:
      "Een strakke site voor een specialist in drone-inspecties van daken, gevels en werven, met een duidelijke weg naar een inspectieaanvraag.",
    intro:
      "Een strakke site voor een specialist in drone-inspecties, met een duidelijke weg naar een inspectieaanvraag.",
    tags: ["Webdesign", "Development", "Aanvraagformulier"],
    categories: ["webdesign"],
    note: "Inspecties & bouw · Heel België",
    website: "https://primelabs-aap.pages.dev",
    question: "Een inspectiebedrijf dat zijn vakmanschap ook online wilde tonen.",
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
    ],
  },
];

/** Only card data crosses the client boundary of the project filter. */
export const projectSummaries: readonly ProjectSummary[] = projects.map(
  ({ slug, name, title, summary, tags, categories, note }) => ({
    slug,
    name,
    title,
    summary,
    tags,
    categories,
    note,
  }),
);
