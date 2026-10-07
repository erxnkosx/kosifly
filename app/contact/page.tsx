import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact | Plan een gratis gesprek | Kosifly",
  description:
    "Vertel ons wat je wil bereiken en krijg binnen 24 uur antwoord. Plan een gratis gesprek of stel meteen je offerte samen.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar active="Contact" />
      <main id="main-content">
        <ContactHero />
        <ContactDetails />
      </main>
      <Footer />
    </>
  );
}
