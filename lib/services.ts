export const services = [
  {
    slug: "webdesign",
    label: "Webdesign & development",
    short: "Webdesign",
    description: "Websites die bezoekers omzetten in klanten",
    title: "Webdesign & development voor KMO’s | Kosifly",
    meta: "Snelle websites op maat van je KMO, met een strategie die van bezoekers aanvragen maakt. Live in vijf weken, met een vaste prijs.",
    lines: ["Een website die", "bezoekers omzet in"],
    accent: "klanten",
    body: "We ontwerpen en bouwen snelle websites op maat van je KMO, met een strategie die van bezoekers aanvragen maakt.",
    cta: "Vraag je gratis website-audit",
  },
  {
    slug: "lokale-seo",
    label: "Lokale SEO",
    short: "Lokale SEO",
    description: "Gevonden worden in je eigen regio",
    title: "Lokale SEO voor KMO’s | Gevonden in je regio | Kosifly",
    meta: "Bovenaan in Google en Google Maps wanneer iemand in je regio zoekt wat jij aanbiedt. Opstart in twee weken, elke maand een rapport.",
    lines: ["Wie in je regio", "zoekt, vindt"],
    accent: "jou",
    after: " eerst",
    body: "We zorgen dat je bovenaan staat in Google en Google Maps wanneer iemand in je regio zoekt wat jij aanbiedt.",
    cta: "Plan een gesprek",
  },
  {
    slug: "web-apps",
    label: "Web apps & maatwerksoftware",
    short: "Web apps & maatwerk",
    description: "Software die past bij hoe jij werkt",
    title: "Web apps & maatwerksoftware voor KMO’s | Kosifly",
    meta: "Klantenportalen, dashboards en boekingssystemen op maat. Software die zich aanpast aan je bedrijf, met een klikbaar prototype na vier weken.",
    lines: ["Software die", "past bij hoe jij"],
    accent: "werkt",
    body: "Klantenportalen, dashboards en boekingssystemen op maat. Software die zich aanpast aan je bedrijf, niet omgekeerd.",
    cta: "Plan een gesprek",
  },
  {
    slug: "ai-automatisaties",
    label: "AI & automatisaties",
    short: "AI & automatisaties",
    description: "Minder handwerk, meer tijd om te groeien",
    title: "AI & automatisaties voor KMO’s | Kosifly",
    meta: "Automatiseer leadopvolging, offertes en opvolgmails. Bereken zelf hoeveel uur je wint en draai binnen zes weken live.",
    lines: ["Minder handwerk.", "Meer tijd om te"],
    accent: "groeien",
    body: "We automatiseren het repetitieve werk, van leadopvolging tot offertes, zodat jij tijd overhoudt voor je klanten.",
    cta: "Plan een gesprek",
  },
  {
    slug: "onderhoud-hosting",
    label: "Onderhoud & hosting",
    short: "Onderhoud & hosting",
    description: "Snel, veilig en altijd online",
    title: "Website-onderhoud & hosting voor KMO’s | Kosifly",
    meta: "Snelle hosting, updates, dagelijkse back-ups en 24/7 monitoring voor één vast bedrag per maand. Overstappen in vijf werkdagen.",
    lines: ["Snel, veilig", "en altijd"],
    accent: "online",
    body: "Updates, back-ups, beveiliging en snelle hosting voor één vast bedrag per maand. Problemen lossen we op voor jij ze merkt.",
    cta: "Plan een gesprek",
  },
] as const;
export type ServiceSlug = (typeof services)[number]["slug"];
export function serviceHref(label: string) {
  return (
    "/diensten/" +
    (services.find((s) => s.label === label || s.short === label)?.slug || "webdesign")
  );
}
