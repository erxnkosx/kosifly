import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
export const metadata: Metadata = {
  title: "Privacy | Kosifly",
  description: "Informatie over je contactgegevens, privacy en rechten bij Kosifly.",
  robots: { index: false, follow: true },
};
const sections: LegalSection[] = [
  {
    id: "contact",
    title: "1. Wie kan je contacteren?",
    content: (
      <>
        <p>
          Voor vragen over persoonsgegevens kan je Kosifly bereiken via{" "}
          <a href="mailto:info@kosifly.com">info@kosifly.com</a> of{" "}
          <a href="tel:+32483690426">+32 483 69 04 26</a>.
        </p>
        <p>
          De volledige juridische naam, het ondernemingsnummer en het officiële adres van de
          verwerkingsverantwoordelijke worden vóór publicatie van de definitieve verklaring
          toegevoegd.
        </p>
      </>
    ),
  },
  {
    id: "gegevens",
    title: "2. Welke gegevens geef je door?",
    content: (
      <>
        <p>
          Het contact- en offerteformulier vraagt je naam en e-mailadres. Afhankelijk van je
          aanvraag kan je ook je telefoonnummer, bedrijfsnaam, website, gewenste dienst, budget,
          planning en bericht doorgeven.
        </p>
        <p>
          Deel alleen gegevens die nodig zijn voor je aanvraag. Voeg geen gevoelige persoonsgegevens
          toe aan je bericht.
        </p>
      </>
    ),
  },
  {
    id: "doel",
    title: "3. Waarvoor dienen deze gegevens?",
    content: (
      <>
        <p>
          Je gegevens dienen om je vraag te beantwoorden, een kennismaking te plannen of een
          voorstel voor je project te maken. Bij een aanvraag voor een overeenkomst is het beoogde
          uitgangspunt de voorbereiding en uitvoering van die overeenkomst.
        </p>
        <p>
          De definitieve verklaring zal per verwerking het doel en de toepasselijke rechtsgrond
          vermelden. Een contactaanvraag is geen inschrijving op een nieuwsbrief.
        </p>
      </>
    ),
  },
  {
    id: "ontvangers",
    title: "4. Wie ontvangt je gegevens?",
    content: (
      <p>
        Wanneer het formulier is aangesloten, wordt je aanvraag naar de gekozen contactdienst
        doorgestuurd. De definitieve verklaring zal de gebruikte hosting- en contactdienstverleners,
        hun rol en eventuele doorgiften buiten de Europese Economische Ruimte vermelden. Deze
        dienstverleners zijn nog te bevestigen.
      </p>
    ),
  },
  {
    id: "bewaren",
    title: "5. Hoe lang worden gegevens bewaard?",
    content: (
      <p>
        De bewaartermijnen voor aanvragen, klantdossiers en technische logs worden nog vastgelegd.
        De definitieve verklaring vermeldt per doel de bewaartermijn of de criteria waarmee die
        wordt bepaald, en eventuele wettelijke bewaarplichten.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "6. Cookies en externe links",
    content: (
      <>
        <p>
          In de huidige websitecode zijn geen advertentie- of analysetrackers opgenomen. De fonts en
          ontwerpafbeeldingen worden lokaal geladen. De uiteindelijke hostinginstellingen worden
          vóór publicatie gecontroleerd.
        </p>
        <p>
          Links naar websites van klanten openen een andere website. Daar geldt de privacyverklaring
          van die aanbieder.
        </p>
      </>
    ),
  },
  {
    id: "rechten",
    title: "7. Je privacyrechten",
    content: (
      <>
        <p>
          Afhankelijk van de toepasselijke voorwaarden kan je inzage, correctie, verwijdering,
          beperking of overdracht van je gegevens vragen. Je kan bezwaar maken tegen bepaalde
          verwerkingen en eventuele toestemming intrekken. Contacteer ons via{" "}
          <a href="mailto:info@kosifly.com">info@kosifly.com</a>.
        </p>
        <p>
          Je kan ook een klacht indienen bij de{" "}
          <a href="https://www.gegevensbeschermingsautoriteit.be/burger/acties/klacht-indienen">
            Gegevensbeschermingsautoriteit
          </a>
          . Lees meer over je rechten bij de{" "}
          <a href="https://www.edpb.europa.eu/topics/key-gdpr-concepts/data-subject-rights_en">
            European Data Protection Board
          </a>
          .
        </p>
      </>
    ),
  },
];
export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy"
      intro="Helder over je gegevens en hoe je ons daarover bereikt."
      sections={sections}
    />
  );
}
