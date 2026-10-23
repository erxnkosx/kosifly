import Link from "next/link";
import type { ServiceSlug } from "@/lib/services";
import {
  aiVisual,
  CaseArtwork,
  crewVisual,
  reportVisual,
  seoVisual,
  websiteVisual,
  type CaseVisual,
} from "@/components/cases/CaseVisuals";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { BtnArrow } from "@/components/ui/BtnArrow";

/*
 * Mobiele etalage per dienst. De desktop-etalage is een scène van 1920px breed die op een gsm
 * onleesbaar wordt; hier staat dezelfde inhoud als één leesbare visual met de vier toelichtingen
 * eronder. Alle teksten en voorbeeldcijfers komen uit de desktop-etalage. Enkel zichtbaar op mobiel.
 */

/** Label en knoppen van de etalage per dienst. */
const showcaseExamples: Record<
  ServiceSlug,
  {
    label: string;
    action: string;
    href: string;
    secondary: string;
    secondaryHref: string;
  }
> = {
  webdesign: {
    label: "CASE · TAXI BORNEM · LIVE",
    action: "Bekijk de case",
    href: "/projecten/taxi-bornem",
    secondary: "Alle projecten",
    secondaryHref: "/projecten",
  },
  "lokale-seo": {
    label: "CASE · TAXI BORNEM · LIVE",
    action: "Bekijk de case",
    href: "/projecten/taxi-bornem",
    secondary: "Alle projecten",
    secondaryHref: "/projecten",
  },
  "web-apps": {
    label: "VOORBEELDPROJECT · AANNEMER",
    action: "Bespreek jouw idee",
    href: "/contact?dienst=Web%20apps%20%26%20maatwerk",
    secondary: "Alle projecten",
    secondaryHref: "/projecten",
  },
  "ai-automatisaties": {
    label: "VOORBEELDPROJECT · INSTALLATEUR",
    action: "Bespreek jouw idee",
    href: "/contact?dienst=Automatisatie",
    secondary: "Alle projecten",
    secondaryHref: "/projecten",
  },
  "onderhoud-hosting": {
    label: "VOORBEELD · MAANDRAPPORT",
    action: "Vraag een voorbeeldrapport",
    href: "/contact?dienst=Onderhoud",
    secondary: "Bekijk de pakketten",
    secondaryHref: "/contact?tab=offerte&dienst=Onderhoud",
  },
};

const points: Record<ServiceSlug, { title: string; text: string }[]> = {
  webdesign: [
    { title: "Een belofte in vijf seconden", text: "Je ziet meteen wat Taxi Bornem doet en waar." },
    { title: "Rit boeken in één klik", text: "De knop staat bovenaan en is altijd in beeld." },
    { title: "Gemaakt voor de gsm", text: "Want daar zoeken de meeste klanten een taxi." },
    { title: "WhatsApp met één tik", text: "Voor wie liever een berichtje stuurt." },
  ],
  "lokale-seo": [
    { title: "Gevonden op “taxi bornem”", text: "Het eerste resultaat wanneer iemand zoekt." },
    { title: "Een resultaat dat uitnodigt", text: "Een duidelijke titel en beschrijving." },
    { title: "Google-profiel op punt", text: "Foto, openingsuren, route en bellen." },
    { title: "Reviews in de kijker", text: "4,9 sterren uit meer dan 50 reviews." },
  ],
  "web-apps": [
    { title: "Weekplanning per ploeg", text: "Het kantoor ziet in één oogopslag wie waar zit." },
    { title: "Slepen om te plannen", text: "Een klus verplaatsen kost één beweging." },
    { title: "App voor de vakman", text: "Adres, uren en materiaal op de gsm." },
    { title: "Foto's van de werf", text: "Meteen gedeeld met het kantoor." },
  ],
  "ai-automatisaties": [
    { title: "Aanvraag komt binnen", text: "Via het formulier op je site." },
    { title: "AI haalt de gegevens eruit", text: "Toestel, oppervlakte en gemeente." },
    { title: "Offerte met jouw prijzen", text: "Opgemaakt op basis van je prijslijst." },
    { title: "Goedkeuren met één klik", text: "Jij beslist, de klant krijgt ze meteen." },
  ],
  "onderhoud-hosting": [
    { title: "Uptime en snelheid", text: "Hoe je site deze maand presteerde." },
    { title: "Elke maand in je mailbox", text: "Een kort rapport als pdf." },
    { title: "Alles wat we deden", text: "Updates, controles en aanpassingen." },
    { title: "Bezoekers in één grafiek", text: "Duidelijk, zonder vakjargon." },
  ],
};

/** Beeld per dienst: de Canva-toestellen uit components/cases/CaseVisuals.tsx (zoals in de etalage op de homepage). */
const visuals: Record<ServiceSlug, CaseVisual> = {
  webdesign: websiteVisual,
  "lokale-seo": seoVisual,
  "web-apps": crewVisual,
  "ai-automatisaties": aiVisual,
  "onderhoud-hosting": reportVisual,
};

export function MobileShowcase({ slug }: { slug: ServiceSlug }) {
  const example = showcaseExamples[slug];
  return (
    <div className="sms">
      <span className="sms-badge">
        <i />
        {example.label}
      </span>
      <div className={"sms-visual sms-visual-" + slug}>
        <CaseArtwork visual={visuals[slug]} label={example.label} />
      </div>
      <RevealGroup as="ol" className="sms-points" stagger={0.08}>
        {points[slug].map((p, n) => (
          <RevealItem as="li" key={p.title}>
            <span aria-hidden="true">{n + 1}</span>
            <div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
      <div className="etalage-actions sms-actions">
        <Link href={example.href} className="etalage-action-primary">
          {example.action}
          <BtnArrow />
        </Link>
        <Link href={example.secondaryHref} className="etalage-action-secondary">
          {example.secondary}
        </Link>
      </div>
    </div>
  );
}
