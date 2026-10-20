import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/800-italic.css";
import "@fontsource/inter/900.css";
import "@fontsource/manrope/200.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "@fontsource/orbitron/500.css";
import "@fontsource/michroma/400.css";
import "./globals.css";
import "./styles/services.css";
import "./styles/refinements.css";
import "./styles/footer.css";
import "./styles/page-layout.css";
import "./styles/service-details.css";
import "./styles/portfolio.css";
import "./styles/reviews.css";
import "./styles/website-comparison.css";
import "./styles/mobile.css";
import "./styles/audit.css";
import "./styles/mobile-first.css";
import "./styles/mobile-services.css";
import "./styles/mobile-pricing.css";
import "./styles/mobile-projects.css";
import "./styles/mobile-pages.css";
import "./styles/mobile-system.css";
import "./styles/responsive.css";
import "./styles/service-heroes.css";
import "./styles/buttons.css";
import "./styles/home-accent.css";
import "./styles/bordeaux.css";
import "./styles/motion.css";
import "./styles/buttons-luxe.css";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SITE } from "@/lib/site";

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0b0b0d" };

// Pagina's zetten hun eigen title, description en canonical; Open Graph-afbeelding en iconen komen uit app/.
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Kosifly · Websites, software en AI voor KMO's",
  description: SITE.description,
  applicationName: SITE.name,
  openGraph: { siteName: SITE.name, locale: "nl_BE", type: "website" },
  twitter: { card: "summary_large_image" },
};

/** Bedrijfsgegevens voor zoekmachines (schema.org), op elke pagina. */
const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/icon.png`,
  image: `${SITE.url}/opengraph-image.png`,
  description: SITE.description,
  email: SITE.email,
  telephone: SITE.phoneHref.replace("tel:", ""),
  address: { "@type": "PostalAddress", addressLocality: SITE.locality, addressCountry: "BE" },
  areaServed: "BE",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl-BE" className={GeistSans.variable} data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
          }}
        />
        <a href="#main-content" className="skip-link">
          Naar de inhoud
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
