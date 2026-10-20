import type { CSSProperties } from "react";
import { DASHBOARD, MOBILE, PscDashboard, PscMobile } from "./PscScreens";

/** Telefoonframe zoals in de etalage: 230 × 470, scherm van 214 × 454 op 8 px binnen een rand van 1,5 px. */
export const PHONE = { w: 230, h: 470, border: 1.5, inset: 8, screen: { w: 214, h: 454 } };

/** Schaal van de gsm-versie (390 breed) op het scherm van het frame. */
export const PHONE_SCREEN_SCALE = PHONE.screen.w / MOBILE.w;

/** Het dashboard in een wit, afgerond kader; het dashboard schaalt mee met de breedte en vult de hoogte. */
export function PscDesktop({
  width,
  height,
  style,
}: {
  width: number;
  height: number;
  /** Plaats (left/top) binnen de ouder. */
  style?: CSSProperties;
}) {
  const scale = width / DASHBOARD.w;
  return (
    <div
      className="absolute overflow-hidden rounded-[16px] bg-white"
      style={{
        width,
        height,
        boxShadow: "0 30px 60px rgba(0,0,0,0.5), 0 0 70px rgba(129,0,18,0.45)",
        ...style,
      }}
    >
      <div style={{ transform: `scale(${scale})`, transformOrigin: "0 0" }}>
        <PscDashboard height={height / scale} />
      </div>
    </div>
  );
}

/** De gsm-versie in het telefoonframe; `scale` vergroot of verkleint het hele toestel. */
export function PscPhone({ scale = 1, style }: { scale?: number; style?: CSSProperties }) {
  return (
    <div className="absolute" style={{ width: PHONE.w * scale, height: PHONE.h * scale, ...style }}>
      <div
        className="absolute left-0 top-0"
        style={{
          width: PHONE.w,
          height: PHONE.h,
          transform: `scale(${scale})`,
          transformOrigin: "0 0",
          borderRadius: 40,
          background: "rgb(10,10,11)",
          border: `${PHONE.border}px solid rgba(255,255,255,0.16)`,
          boxShadow: "0 30px 60px rgba(0,0,0,0.55)",
        }}
      >
        <div
          className="absolute overflow-hidden"
          style={{
            left: PHONE.inset,
            top: PHONE.inset,
            width: PHONE.screen.w,
            height: PHONE.screen.h,
            borderRadius: 33,
          }}
        >
          <div style={{ transform: `scale(${PHONE_SCREEN_SCALE})`, transformOrigin: "0 0" }}>
            <PscMobile height={Math.ceil(PHONE.screen.h / PHONE_SCREEN_SCALE)} />
          </div>
        </div>
      </div>
    </div>
  );
}
