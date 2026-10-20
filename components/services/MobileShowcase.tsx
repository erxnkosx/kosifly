import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { ServiceSlug } from "@/lib/services";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { mobileIcon as icon } from "./MobileHero";
import { showcaseExamples } from "./ShowcaseLinks";
import { BtnArrow } from "@/components/ui/BtnArrow";

/*
 * Mobiele etalage per dienst. De desktop-etalage is een scène van 1920px breed die op een gsm
 * onleesbaar wordt; hier staat dezelfde inhoud als één leesbare visual met de vier toelichtingen
 * eronder. Alle teksten en voorbeeldcijfers komen uit de desktop-etalage. Enkel zichtbaar op mobiel.
 */

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

function Phone() {
  return (
    <div className="sms-phone">
      <Image
        src="/images/etalage-phone.webp"
        alt=""
        width={258}
        height={560}
        sizes="(max-width: 760px) 240px, 1px"
      />
    </div>
  );
}

function GoogleProfile() {
  return (
    <div className="sms-google">
      <div className="sms-google-bar">
        {icon.search}
        <span>taxi bornem</span>
      </div>
      <div className="sms-google-tabs" aria-hidden="true">
        <b>Alles</b>
        <span>Maps</span>
        <span>Afbeeldingen</span>
        <span>Nieuws</span>
      </div>
      <div className="sms-google-profile">
        <Image
          src="/images/taxi-foto.jpg"
          alt=""
          width={535}
          height={399}
          sizes="(max-width: 760px) 92vw, 1px"
        />
        <div className="sms-google-body">
          <strong>Taxi Bornem</strong>
          <span className="sms-google-rating">
            4,9 <i aria-hidden="true">★★★★★</i> 50+ Google-reviews
          </span>
          <small>Taxidienst in Bornem</small>
          <div className="sms-google-actions">
            <span>Website</span>
            <span>{icon.route} Route</span>
            <span>{icon.phone} Bellen</span>
          </div>
          <dl>
            <div>
              <dt>Open</dt>
              <dd>24 uur per dag, 7 dagen per week</dd>
            </div>
            <div>
              <dt>Regio</dt>
              <dd>Bornem en omgeving</dd>
            </div>
            <div>
              <dt>Boeken</dt>
              <dd>Online of via WhatsApp</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

function CrewApp() {
  return (
    <div className="sms-device">
      <div className="sms-device-status" aria-hidden="true">
        <span>7:42</span>
        <i />
      </div>
      <div className="sms-crew">
        <strong className="sms-crew-hello">Goedemorgen, Wout</strong>
        <small>Woensdag 15 oktober</small>
        <div className="sms-crew-job">
          <span className="sms-tag">Volgende klus</span>
          <strong>Keuken Maes</strong>
          <span>Kerkstraat 12, Bornem</span>
          <span className="sms-crew-time">08:00 – 16:30</span>
          <div className="sms-crew-actions">
            <span>{icon.route} Navigeer</span>
            <span>{icon.phone} Bel klant</span>
          </div>
        </div>
        <div className="sms-crew-material">
          <span className="sms-tag">Materiaal</span>
          <ul>
            <li>12 dozen tegels</li>
            <li>Voegsel grijs</li>
            <li>Silicone wit</li>
          </ul>
        </div>
        <span className="sms-crew-photo">+ Foto van de werf</span>
      </div>
    </div>
  );
}

function Quote() {
  return (
    <div className="sms-quote">
      <div className="sms-request">
        <span className="sms-tag">Nieuwe aanvraag · via je website</span>
        <p>
          Hallo, we zoeken een <mark>warmtepomp</mark> voor onze woning van <mark>160 m²</mark> in{" "}
          <mark>Mechelen</mark>. Kunnen jullie eens <mark>langskomen</mark>?
        </p>
        <small>Lien Vermeulen · Mechelen</small>
      </div>
      <div className="sms-extract">
        <span className="sms-tag">
          <span className="sms-spark">{icon.sparkle}</span> AI haalde eruit
        </span>
        <dl>
          <div>
            <dt>Toestel</dt>
            <dd>Warmtepomp</dd>
          </div>
          <div>
            <dt>Woning</dt>
            <dd>160 m²</dd>
          </div>
          <div>
            <dt>Gemeente</dt>
            <dd>Mechelen</dd>
          </div>
          <div>
            <dt>Volgende stap</dt>
            <dd>Plaatsbezoek</dd>
          </div>
        </dl>
      </div>
      <div className="sms-offer">
        <div className="sms-offer-head">
          <strong>Offerte OF-2026-118</strong>
          <small>AI-voorstel · klaar om te controleren</small>
        </div>
        <ul>
          <li>
            <span>Lucht-water warmtepomp 8 kW</span>
            <b>€ 9.450</b>
          </li>
          <li>
            <span>Plaatsing en inbedrijfstelling</span>
            <b>€ 1.850</b>
          </li>
          <li>
            <span>Plaatsbezoek</span>
            <b>gratis</b>
          </li>
        </ul>
        <div className="sms-offer-total">
          <span>Totaal excl. btw</span>
          <strong>€ 11.300</strong>
        </div>
        <span className="sms-offer-cta">Goedkeuren en versturen</span>
      </div>
    </div>
  );
}

const reportDone = [
  "3 updates getest en geïnstalleerd",
  "Beveiligingsscan: alles in orde",
  "Openingsuren aangepast op vraag",
  "Afbeeldingen geoptimaliseerd",
];

function Report() {
  return (
    <div className="sms-report">
      <div className="sms-report-head">
        <span>
          <strong>Maandrapport</strong>
          <small>November 2026 · jouwbedrijf.be</small>
        </span>
        <span className="sms-report-logo" aria-hidden="true">
          KOSIFLY
        </span>
      </div>
      <dl className="sms-report-stats">
        <div>
          <dt>Uptime</dt>
          <dd>99,98 %</dd>
        </div>
        <div>
          <dt>Laadtijd</dt>
          <dd>0,9 s</dd>
        </div>
        <div>
          <dt>Back-ups</dt>
          <dd>30/30</dd>
        </div>
      </dl>
      <p className="sms-report-title">Wat we deden</p>
      <ul className="sms-report-done">
        {reportDone.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <div className="sms-report-visitors">
        <span>
          <small>Bezoekers</small>
          <strong>+12 % t.o.v. oktober</strong>
        </span>
        <span className="sms-bars" aria-hidden="true">
          {[42, 55, 48, 63, 58, 72, 80].map((h, n) => (
            <i key={n} style={{ height: h + "%" }} />
          ))}
        </span>
      </div>
    </div>
  );
}

const visuals: Record<ServiceSlug, () => ReactNode> = {
  webdesign: Phone,
  "lokale-seo": GoogleProfile,
  "web-apps": CrewApp,
  "ai-automatisaties": Quote,
  "onderhoud-hosting": Report,
};

export function MobileShowcase({ slug }: { slug: ServiceSlug }) {
  const Visual = visuals[slug];
  const example = showcaseExamples[slug];
  return (
    <div className="sms">
      <span className="sms-badge">
        <i />
        {example.label}
      </span>
      <div className={"sms-visual sms-visual-" + slug}>
        <Visual />
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
