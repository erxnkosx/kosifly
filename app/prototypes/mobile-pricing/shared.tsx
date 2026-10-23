import { WEBSITE_PACKAGES, type WebsitePackage } from "@/components/pricing/websites/Websites.data";
import { calculatorHref } from "@/components/pricing/wizard/calculatorHref";
import { fmt } from "@/lib/pricing";
import s from "./prototype.module.css";
export { WEBSITE_PACKAGES };
export type { WebsitePackage };
export const shortCopy = [
  "Een sterke online start.",
  "Je bedrijf klaar voor meer aanvragen.",
  "Ruimte voor je volgende groeistap.",
];
export function Price({ pkg }: { pkg: WebsitePackage }) {
  return (
    <span className={s.price}>
      <span>vanaf</span>
      <strong>€ {fmt(pkg.price)}</strong>
    </span>
  );
}
export function Features({ items }: { items: readonly string[] }) {
  return (
    <ul className={s.features}>
      {items.map((item) => (
        <li key={item}>
          <span aria-hidden="true">✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}
export function Cta({ pkg }: { pkg: WebsitePackage }) {
  return (
    <a className={s.cta} href={calculatorHref({ pakket: pkg.id })}>
      Kies {pkg.title}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
export function FullDetails({ pkg }: { pkg: WebsitePackage }) {
  return (
    <details className={s.details}>
      <summary>
        Alle inbegrepen opties <span aria-hidden="true">+</span>
      </summary>
      <Features items={pkg.features} />
    </details>
  );
}
