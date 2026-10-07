import Link from "next/link";
import { services } from "@/lib/services";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
export const metadata = {
  title: "Services | Kosifly",
  description: "Webdesign, lokale SEO, web apps, automatisaties en hosting op maat van je KMO.",
};
export default function Services() {
  return (
    <>
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
          {services.map((s) => (
            <Link key={s.slug} href={"/diensten/" + s.slug} className="related-card">
              <h2>{s.label}</h2>
              <p>{s.description}</p>
              <strong>Bekijk de dienst →</strong>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
