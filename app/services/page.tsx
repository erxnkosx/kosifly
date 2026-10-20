import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import design from "@/data/services-design.json";
import { ServiceCtaBar } from "@/components/services/ServiceCtaBar";
import RelatedIcon0_0 from "@/components/services/art/RelatedIcon0_0";
import RelatedIcon0_1 from "@/components/services/art/RelatedIcon0_1";
import RelatedIcon0_2 from "@/components/services/art/RelatedIcon0_2";
import RelatedIcon1_0 from "@/components/services/art/RelatedIcon1_0";
import RelatedIcon3_0 from "@/components/services/art/RelatedIcon3_0";
export const metadata: Metadata = {
  title: "Diensten | Kosifly",
  description: "Webdesign, lokale SEO, web apps, automatisaties en hosting op maat van je KMO.",
  alternates: { canonical: "/services" },
};
/* Mobiel: icoon + doorlooptijd per dienst (dezelfde iconen als in "Past goed bij"). */
const icons = {
  webdesign: RelatedIcon1_0,
  "lokale-seo": RelatedIcon0_0,
  "web-apps": RelatedIcon3_0,
  "ai-automatisaties": RelatedIcon0_2,
  "onderhoud-hosting": RelatedIcon0_1,
};
const sentence = (t: string) => t.charAt(0) + t.slice(1).toLowerCase();
export default function Services() {
  return (
    <div className="services-index-page">
      <Navbar active="Services" tone="light" />
      <main id="main-content" className="service-section light-section services-index">
        <div className="section-heading">
          <span className="section-eyebrow">ONZE SERVICES</span>
          <h1>
            Alles om je bedrijf
            <br />
            <span>te laten groeien.</span>
          </h1>
          <p>Van een sterke website tot software die het werk voor je doet.</p>
        </div>
        <div className="related-grid">
          {services.map((s, n) => {
            const Icon = icons[s.slug];
            return (
              <Link key={s.slug} href={"/diensten/" + s.slug} className="related-card">
                <span className="svc-index-extra svc-index-top" aria-hidden="true">
                  <Icon />
                  <span>0{n + 1}</span>
                </span>
                <h2>{s.label}</h2>
                <p>{s.description}</p>
                <span className="svc-index-extra svc-index-badge">
                  {sentence(design[s.slug].process.badge)}
                </span>
                <strong>
                  Bekijk de dienst <span className="only-desktop">→</span>
                </strong>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
      <ServiceCtaBar
        title="Niet zeker welke dienst?"
        subtitle="Antwoord binnen 24 uur"
        action="Plan een gesprek"
        href="/contact"
      />
    </div>
  );
}
