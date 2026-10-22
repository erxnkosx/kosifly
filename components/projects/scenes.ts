import type { ComponentType } from "react";
import { mockupScenes } from "./art/MockupScenes";
import { PrimeDesktopScene } from "./art/PrimeDesktopScene";
import { PrimeInspectionScene } from "./art/PrimeInspectionScene";
import { PrimeMobileScene } from "./art/PrimeMobileScene";
import { PscCalendarScene, PscMembersScene, PscSignupScene } from "./art/PscScenes";
import { TaxiBookingScene } from "./art/TaxiBookingScene";
import { TaxiMailScene } from "./art/TaxiMailScene";
import { TaxiSearchScene } from "./art/TaxiSearchScene";

type CaseScenes = {
  /** Bovenaan de casepagina en bij "Volgende case" (dan met `lazy`). */
  hero: ComponentType<{ lazy?: boolean }>;
  /** Op de projectkaart. */
  card: ComponentType;
  /** Eén beeld per stap uit project.steps, in dezelfde volgorde. */
  steps: ComponentType[];
};

// Hero, projectkaart en "Volgende case" tonen altijd de laptop-, gsm- of monitormockup uit de
// Instagram-posts (Canva), bijgesneden in public/images/projects.
const taxi = mockupScenes({
  desktop: "/images/projects/taxi-desktop.webp",
  phone: "/images/projects/taxi-mobiel.webp",
  device: "laptop",
  label: "PERSONENVERVOER  ·  LIVE",
});
const primelabs = mockupScenes({
  desktop: "/images/projects/primelabs-desktop.webp",
  phone: "/images/projects/primelabs-mobiel.webp",
  device: "laptop",
  label: "DRONE-INSPECTIES  ·  WEBSITE",
});
const psc = mockupScenes({
  desktop: "/images/projects/psc-desktop.webp",
  device: "monitor",
  ratio: 1292 / 880,
  label: "SENIORENWERKING  ·  LIVE",
});

/** Beelden per case (slug uit lib/projects.ts). */
export const caseScenes: Record<string, CaseScenes> = {
  // De stappen van de uitgebreide cases tonen wat er gebouwd is (formulier, mail, zoekresultaat ...).
  "taxi-bornem": { ...taxi, steps: [TaxiBookingScene, TaxiMailScene, TaxiSearchScene] },
  primelabs: { ...primelabs, steps: [PrimeDesktopScene, PrimeInspectionScene, PrimeMobileScene] },
  "psc-open-huis": { ...psc, steps: [PscMembersScene, PscCalendarScene, PscSignupScene] },
  zerain: mockupScenes({
    desktop: "/images/projects/zerain-desktop.webp",
    phone: "/images/projects/zerain-mobiel.webp",
    device: "laptop",
    label: "HORECA  ·  WEBSITE",
  }),
  panero: mockupScenes({
    desktop: "/images/projects/panero-desktop.webp",
    phone: "/images/projects/panero-mobiel.webp",
    device: "laptop",
    label: "BROODJES & TAKE-AWAY  ·  WEBSITE",
  }),
  futsalytix: mockupScenes({
    desktop: "/images/projects/futsalytix-desktop.webp",
    phone: "/images/projects/futsalytix-mobiel.webp",
    device: "laptop",
    label: "SPORTTECH  ·  WEBSITE",
  }),
  "ay-gold": mockupScenes({
    desktop: "/images/projects/aygold-desktop.webp",
    device: "monitor",
    // Close-up van het blok "Per categorie" voor de tweede stap.
    closeUp: { x: 0.19, y: 0.125, width: 0.81 },
    label: "JUWELIER  ·  MAATWERKSOFTWARE",
  }),
};
