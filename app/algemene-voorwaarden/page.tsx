import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
export const metadata: Metadata = {
  title: "Algemene voorwaarden | Kosifly",
  description: "Conceptafspraken over offertes, projecten, oplevering en onderhoud bij Kosifly.",
  robots: { index: false, follow: true },
};
const sections: LegalSection[] = [
  {
    id: "identiteit",
    title: "1. Bedrijfsgegevens en contact",
    content: (
      <>
        <p>
          Kosifly bouwt digitale oplossingen voor KMO&apos;s. Je bereikt ons via{" "}
          <a href="mailto:info@kosifly.com">info@kosifly.com</a> of{" "}
          <a href="tel:+32483690426">+32 483 69 04 26</a>.
        </p>
        <p>
          De officiële juridische naam, het ondernemingsnummer en het adres worden nog toegevoegd.
          Deze conceptpagina legt op zichzelf geen bindende projectafspraken vast.
        </p>
      </>
    ),
  },
  {
    id: "offerte",
    title: "2. Offerte en opdracht",
    content: (
      <p>
        Het voorstel beschrijft de afgesproken diensten, scope, prijs, planning en wat de klant
        aanlevert. Een contactaanvraag of prijsberekening op de website is geen bestelling. De
        opdracht en toepasselijke voorwaarden worden vóór de start schriftelijk bevestigd.
      </p>
    ),
  },
  {
    id: "prijs",
    title: "3. Prijs en betaling",
    content: (
      <p>
        De offerte vermeldt de vaste projectprijs, de btw-behandeling, eventuele terugkerende kosten
        en het betalingsschema. Werk buiten de afgesproken scope wordt vooraf besproken en apart
        bevestigd. Betalingstermijnen en gevolgen van laattijdige betaling moeten nog worden
        vastgelegd in de definitieve voorwaarden.
      </p>
    ),
  },
  {
    id: "samenwerking",
    title: "4. Planning en samenwerking",
    content: (
      <p>
        De planning gaat uit van tijdige feedback en het aanleveren van de afgesproken teksten,
        afbeeldingen en toegangen. Als de scope of beschikbaarheid wijzigt, bespreken we de gevolgen
        voor planning en prijs. Gebruik alleen materiaal waarvoor je de nodige rechten hebt.
      </p>
    ),
  },
  {
    id: "oplevering",
    title: "5. Oplevering en gebruiksrechten",
    content: (
      <p>
        Vóór oplevering bekijken we samen of het werk aan de afgesproken scope voldoet. De offerte
        of overeenkomst bepaalt de correctierondes, acceptatieprocedure en overdracht of licentie
        van broncode, ontwerp en content. Voor externe software, fonts of diensten kunnen aparte
        licentievoorwaarden gelden.
      </p>
    ),
  },
  {
    id: "onderhoud",
    title: "6. Hosting en onderhoud",
    content: (
      <p>
        Hosting, back-ups, beveiligingsupdates, ondersteuning en doorontwikkeling worden opgenomen
        voor zover ze in het gekozen pakket zijn afgesproken. De overeenkomst bepaalt de looptijd,
        inbegrepen werkzaamheden, bereikbaarheid, opzegging en overdracht bij beëindiging.
      </p>
    ),
  },
  {
    id: "privacy",
    title: "7. Gegevens en vertrouwelijkheid",
    content: (
      <p>
        We spreken af wie toegang nodig heeft tot projectgegevens en hoe vertrouwelijke informatie
        wordt behandeld. Als Kosifly persoonsgegevens namens een klant verwerkt, worden de relevante
        afspraken in een afzonderlijke verwerkersovereenkomst vastgelegd. Lees ook de{" "}
        <a href="/privacy">privacyverklaring</a>.
      </p>
    ),
  },
  {
    id: "vragen",
    title: "8. Vragen en geschillen",
    content: (
      <>
        <p>
          Meld een probleem via <a href="mailto:info@kosifly.com">info@kosifly.com</a> met de
          betrokken opdracht en een beschrijving. We bespreken eerst een oplossing.
          Aansprakelijkheid, annulering, toepasselijk recht en geschillenregeling worden nog
          uitgewerkt in de definitieve voorwaarden.
        </p>
        <p>
          Dwingende wettelijke rechten blijven van toepassing. Informatie over contractvoorwaarden
          en consumentenrechten is beschikbaar bij de{" "}
          <a href="https://economie.fgov.be/nl/themas/verkoop/contracten/onrechtmatige-bedingen">
            FOD Economie
          </a>
          .
        </p>
      </>
    ),
  },
];
export default function TermsPage() {
  return (
    <LegalPage
      title="Algemene voorwaarden"
      intro="Duidelijke afspraken voor een goede samenwerking."
      sections={sections}
    />
  );
}
