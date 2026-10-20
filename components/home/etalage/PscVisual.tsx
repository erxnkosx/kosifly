import {
  PHONE,
  PHONE_SCREEN_SCALE,
  PscDesktop,
  PscPhone,
} from "@/components/projects/psc/PscDevices";
import { DASHBOARD, MOBILE } from "@/components/projects/psc/PscScreens";

/**
 * Etalage 3: PSC Open Huis in de originele huisstijl. Vervangt de Figma-lagen van data.beeld (920 × 560
 * canvaspixels): het dashboard (1440 breed) verkleind in het witte kader (740 × 476) en de gsm-versie in het
 * telefoonframe (230 × 470) dat rechts over het kader valt, zoals in de andere etalages.
 */

const CARD = { x: 0, y: 30, w: 740, h: 476 };
const PHONE_AT = { x: 690, y: 80 };
const SCREEN = {
  x: PHONE_AT.x + PHONE.border + PHONE.inset,
  y: PHONE_AT.y + PHONE.border + PHONE.inset,
};

const DESKTOP_SCALE = CARD.w / DASHBOARD.w;

/** Punten op het beeld waar de vier uitlegkaders naar wijzen (zelfde volgorde als data.call). */
export const PSC_POINTS = [
  // Actief menu-item "Dashboard"
  [
    CARD.x + DASHBOARD.navDashboard[0] * DESKTOP_SCALE,
    CARD.y + DASHBOARD.navDashboard[1] * DESKTOP_SCALE,
  ],
  // Derde activiteit: volgeboekt
  [
    CARD.x + DASHBOARD.fullActivity[0] * DESKTOP_SCALE,
    CARD.y + DASHBOARD.fullActivity[1] * DESKTOP_SCALE,
  ],
  // Kerncijfers op de gsm: rechtsboven in de tweede tegel
  [
    SCREEN.x + (20 + 2 * MOBILE.kpi.w + MOBILE.kpi.gap - 14) * PHONE_SCREEN_SCALE,
    SCREEN.y + (MOBILE.kpiTop + 14) * PHONE_SCREEN_SCALE,
  ],
  // Tab "Inschrijvingen" op de gsm: rechts naast het icoon en zijn telbolletje
  [
    SCREEN.x + ((MOBILE.w * 2.5) / 4 + 48) * PHONE_SCREEN_SCALE,
    SCREEN.y + (MOBILE.tabTop + 19) * PHONE_SCREEN_SCALE,
  ],
];

/** Beeld van etalage 3: vult zijn ouder (920 × 560 canvaspixels). */
export function PscVisual() {
  return (
    <div className="absolute inset-0">
      <PscDesktop width={CARD.w} height={CARD.h} style={{ left: CARD.x, top: CARD.y }} />
      <PscPhone style={{ left: PHONE_AT.x, top: PHONE_AT.y }} />
    </div>
  );
}
