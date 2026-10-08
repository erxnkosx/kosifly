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
import "@fontsource/milonga/400.css";
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
import { MotionProvider } from "@/components/motion/MotionProvider";

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export const metadata: Metadata = { title: "Kosifly", description: "Digital solutions for KMO's." };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={GeistSans.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          Naar de inhoud
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
