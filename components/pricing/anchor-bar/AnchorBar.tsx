"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { withArrow } from "../shared";

type Tab = { label: string; target: string; sections: readonly string[]; cta?: boolean };

const TABS: readonly Tab[] = [
  { label: "Websites", target: "websites", sections: ["hero", "websites", "vergelijking"] },
  { label: "Lokale SEO", target: "maandpakketten", sections: ["maandpakketten"] },
  { label: "Onderhoud & hosting", target: "maandpakketten", sections: ["maandpakketten"] },
  { label: "Web apps & AI", target: "maatwerk", sections: ["maatwerk"] },
  { label: "Extra's", target: "extras", sections: ["extras"] },
  { label: "Bereken je prijs", target: "bereken-je-prijs", sections: [], cta: true },
];

const SECTION_IDS = [
  "hero",
  "websites",
  "vergelijking",
  "maandpakketten",
  "maatwerk",
  "extras",
  "bereken-je-prijs",
  "zo-werkt-het",
  "faq",
];

const TAB_STYLE =
  "flex rounded-[30px] px-[22px] py-[13px] text-[16px] font-semibold leading-[19px] whitespace-nowrap transition-[filter,border-color]";
const TAB_VARIANTS = {
  active: "bg-ink text-white",
  idle: "border border-[#dbdbdb] bg-white text-ink hover:border-ink",
  cta: "bg-brand text-white shadow-[0_0_18px_rgba(130,0,18,0.35)] hover:brightness-125",
};

/** Id van de sectie die de activeringslijn (40% van de viewport) kruist; blijft staan zolang geen sectie de lijn raakt. */
function useActiveSection() {
  const [active, setActive] = useState(SECTION_IDS[0]);
  useEffect(() => {
    const crossing = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting } of entries) {
          if (isIntersecting) crossing.add(target.id);
          else crossing.delete(target.id);
        }
        const current = SECTION_IDS.findLast((id) => crossing.has(id));
        if (current) setActive(current);
      },
      { rootMargin: "-40% 0px -59% 0px" },
    );
    for (const id of SECTION_IDS) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);
  return active;
}

/** Ankerbalk van de prijzenpagina (Figma: ANKERBALK, 1920 x 140): blijft bovenaan staan, markeert de actieve sectie en scrolt naar een sectie bij klikken. */
export function AnchorBar() {
  const bar = useRef<HTMLElement>(null);
  const active = useActiveSection();

  function scrollToSection(event: MouseEvent<HTMLAnchorElement>, id: string) {
    const section = document.getElementById(id);
    if (!section || !bar.current) return;
    event.preventDefault();
    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      bar.current.getBoundingClientRect().height;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <nav
      ref={bar}
      aria-label="Onderdelen van deze pagina"
      className="sticky top-0 z-30 h-[140px] w-[1920px] border-b border-[#e6e6e6] bg-[#f6f6f6] pt-[46.5px] leading-[normal]"
    >
      <ul className="mx-auto flex h-[47px] w-fit items-center gap-[10px] overflow-clip">
        {TABS.map(({ label, target, sections, cta }) => {
          const isActive = sections.includes(active);
          const variant = cta
            ? TAB_VARIANTS.cta
            : isActive
              ? TAB_VARIANTS.active
              : TAB_VARIANTS.idle;
          return (
            <li key={label}>
              <a
                href={`#${target}`}
                aria-label={cta ? label : undefined}
                aria-current={isActive ? "location" : undefined}
                onClick={(event) => scrollToSection(event, target)}
                className={`${TAB_STYLE} ${variant}`}
              >
                {cta ? withArrow(label) : label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
