import Link from "next/link";
import type { ServiceSlug } from "@/lib/services";

const examples: Record<
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

export function ShowcaseLinks({ slug }: { slug: ServiceSlug }) {
  const example = examples[slug];
  return (
    <div className="showcase-links">
      <span className="live-badge">
        <i />
        {example.label}
      </span>
      <Link href={example.href} className="button white">
        {example.action} →
      </Link>
      <Link href={example.secondaryHref}>{example.secondary}</Link>
    </div>
  );
}
