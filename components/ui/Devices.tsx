import type { CSSProperties, ReactNode } from "react";

/**
 * Toestellen voor de case-beelden. De gsm komt uit de Canva-mockups (public/images/devices) met een
 * uitgesneden scherm, zodat er eigen inhoud op kan; de inhoud wordt ontworpen op een vaste `viewport`-breedte
 * en geschaald naar het scherm. Laptop en monitor zijn de Canva-beelden zelf: daarvan enkel de maten, voor
 * ankerpunten op hun rand. Daarnaast een Safari-venster in CSS. Maten in pixels van de afbeelding.
 */
type Geometry = { w: number; h: number; screen: { x: number; y: number; w: number; h: number } };
type Spec = Geometry & { src: string };

/** Laptop uit Canva (public/images/projects/*-desktop.webp). */
const LAPTOP: Geometry = { w: 1030, h: 636, screen: { x: 96, y: 15, w: 839, h: 545 } };
const PHONE: Spec = {
  src: "/images/devices/phone-frame.webp",
  w: 390,
  h: 798,
  screen: { x: 17.5, y: 15.5, w: 354, h: 767 },
};

/** Monitor uit Canva (public/images/projects/psc-desktop.webp). */
export const MONITOR: Geometry = { w: 1292, h: 880, screen: { x: 15, y: 16, w: 1261, h: 756 } };

/** Afstand van de schermrand tot het midden van de zwarte rand, in frame-pixels. */
const BEZEL = { laptop: 7, phone: 6, monitor: 7 };
const SPECS = { laptop: LAPTOP, phone: PHONE, monitor: MONITOR };

/** Ontwerpbreedte van de inhoud op de gsm, in CSS-pixels. */
const PHONE_VIEWPORT = 390;

type DeviceProps = {
  /** Breedte van het toestel in pixels van de ouder (bv. het canvas van een Artwork). */
  width: number;
  left: number;
  top: number;
  rotate?: number;
  /** Ontwerpbreedte van de inhoud; de hoogte volgt uit de verhouding van het scherm. */
  viewport?: number;
  /** Achtergrond van het scherm achter de inhoud. */
  screen?: string;
  children: ReactNode;
};

/**
 * Punt op de zwarte rand naast het scherm, op hoogte `fy` (fractie van het scherm): een ankerbolletje daar
 * wijst naar die rij zonder inhoud te bedekken.
 */
export function bezelPoint(
  kind: "laptop" | "phone" | "monitor",
  { width, left, top }: Pick<DeviceProps, "width" | "left" | "top">,
  side: "left" | "right",
  fy: number,
): [number, number] {
  const spec = SPECS[kind];
  const k = width / spec.w;
  const x =
    side === "left" ? spec.screen.x - BEZEL[kind] : spec.screen.x + spec.screen.w + BEZEL[kind];
  return [left + x * k, top + (spec.screen.y + fy * spec.screen.h) * k];
}

function Device({
  spec,
  width,
  left,
  top,
  rotate,
  viewport,
  screen = "#fff",
  children,
}: DeviceProps & { spec: Spec; viewport: number }) {
  const k = width / spec.w;
  const s = spec.screen;
  // De inhoud loopt een halve pixel onder het frame door, zodat er geen naad zichtbaar is.
  const screenStyle: CSSProperties = {
    left: s.x * k - 0.5,
    top: s.y * k - 0.5,
    width: s.w * k + 1,
    height: s.h * k + 1,
    background: screen,
  };
  return (
    <div
      className="device device-phone"
      style={{
        left,
        top,
        width,
        height: spec.h * k,
        rotate: rotate ? `${rotate}deg` : undefined,
        ["--k" as string]: k,
      }}
    >
      <div className="device-screen" style={screenStyle}>
        <div
          style={{
            width: viewport,
            height: (viewport * s.h) / s.w,
            transform: `scale(${(s.w * k + 1) / viewport})`,
            transformOrigin: "0 0",
          }}
        >
          {children}
        </div>
      </div>
      <span className="device-cutout" aria-hidden="true" />
      <img
        src={spec.src}
        alt=""
        width={spec.w}
        height={spec.h}
        loading="lazy"
        decoding="async"
        className="device-frame"
      />
    </div>
  );
}

/** iPhone uit Canva; het eiland wordt over de inhoud getekend. */
export function Phone({ viewport = PHONE_VIEWPORT, ...props }: DeviceProps) {
  return <Device spec={PHONE} viewport={viewport} {...props} />;
}

/* ───────────── Browservenster (Safari op macOS) ───────────── */

/** Ontwerpmaten van het venster: breedte en hoogte van de werkbalk. */
const BROWSER = { w: 1280, bar: 60 };

type BrowserProps = {
  width: number;
  left: number;
  top: number;
  /** Adres in de adresbalk. */
  url: string;
  /** Breedte / hoogte van de pagina onder de werkbalk. */
  ratio: number;
  children: ReactNode;
};

/** Safari-venster met verkeerslichten en adresbalk; de pagina (1280 breed ontworpen) vult de rest. */
export function BrowserWindow({ width, left, top, url, ratio, children }: BrowserProps) {
  const k = width / BROWSER.w;
  const page = BROWSER.w / ratio;
  return (
    <div className="browser" style={{ left, top, width, height: (BROWSER.bar + page) * k }}>
      <div
        className="browser-inner"
        style={{
          width: BROWSER.w,
          height: BROWSER.bar + page,
          transform: `scale(${k})`,
          transformOrigin: "0 0",
        }}
      >
        <div className="browser-bar" aria-hidden="true">
          <span className="browser-lights">
            <i />
            <i />
            <i />
          </span>
          <svg
            className="browser-nav"
            width="58"
            height="22"
            viewBox="0 0 58 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 4l-7 7 7 7M44 4l7 7-7 7" />
          </svg>
          <span className="browser-url">
            <svg width="13" height="15" viewBox="0 0 13 15" fill="currentColor">
              <path d="M2 6.5V4.8a4.5 4.5 0 0 1 9 0v1.7h.5c.8 0 1.5.7 1.5 1.5v5.5c0 .8-.7 1.5-1.5 1.5h-10C.7 15 0 14.3 0 13.5V8c0-.8.7-1.5 1.5-1.5H2zm1.8 0h5.4V4.8a2.7 2.7 0 0 0-5.4 0v1.7z" />
            </svg>
            {url}
          </span>
          <svg
            className="browser-tools"
            width="96"
            height="22"
            viewBox="0 0 96 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 2v12M6 7l5-5 5 5M3 12v7h16v-7M48 4v14M41 11h14M78 6h14v14H78zM82 2h14v14" />
          </svg>
        </div>
        <div className="browser-page" style={{ height: page }}>
          {children}
        </div>
      </div>
    </div>
  );
}

/** Punt op de pagina in een browservenster (fracties van de paginabreedte en -hoogte). */
export function browserPoint(
  { width, left, top, ratio }: Pick<BrowserProps, "width" | "left" | "top" | "ratio">,
  fx: number,
  fy: number,
): [number, number] {
  const k = width / BROWSER.w;
  return [left + fx * width, top + (BROWSER.bar + (fy * BROWSER.w) / ratio) * k];
}
