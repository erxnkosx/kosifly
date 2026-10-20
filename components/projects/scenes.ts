import type { ComponentType } from "react";
import { PrimeCardScene } from "./art/PrimeCardScene";
import { PrimeDesktopScene } from "./art/PrimeDesktopScene";
import { PrimeHeroScene } from "./art/PrimeHeroScene";
import { PrimeInspectionScene } from "./art/PrimeInspectionScene";
import { PrimeMobileScene } from "./art/PrimeMobileScene";
import {
  PscCalendarScene,
  PscCardScene,
  PscHeroScene,
  PscMembersScene,
  PscSignupScene,
} from "./art/PscScenes";
import { TaxiBookingScene } from "./art/TaxiBookingScene";
import { TaxiCardScene } from "./art/TaxiCardScene";
import { TaxiHeroScene } from "./art/TaxiHeroScene";
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

/** Beelden per case (slug uit lib/projects.ts). */
export const caseScenes: Record<string, CaseScenes> = {
  "taxi-bornem": {
    hero: TaxiHeroScene,
    card: TaxiCardScene,
    steps: [TaxiBookingScene, TaxiMailScene, TaxiSearchScene],
  },
  primelabs: {
    hero: PrimeHeroScene,
    card: PrimeCardScene,
    steps: [PrimeDesktopScene, PrimeInspectionScene, PrimeMobileScene],
  },
  "psc-open-huis": {
    hero: PscHeroScene,
    card: PscCardScene,
    steps: [PscMembersScene, PscCalendarScene, PscSignupScene],
  },
};
