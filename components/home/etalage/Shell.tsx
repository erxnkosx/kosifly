import type { ReactNode } from "react";

/** Gedeelde opbouw van alle etalages (Figma: ETALAGE) — 1920 x 1120: achtergrond, eyebrow, gloed en vloerschaduw. */
export function Anchor({ x, y }: { x: number; y: number }) {
  return (
    <svg
      className="absolute"
      style={{ left: x - 10, top: y - 10 }}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
    >
      <g style={{ filter: "drop-shadow(0 0 5px rgba(242,74,99,0.9))" }}>
        <circle cx="16" cy="16" r="6" fill="white" />
        <circle cx="16" cy="16" r="4.5" stroke="#F24A63" strokeWidth="3" />
      </g>
    </svg>
  );
}

export function Shell({ children, id }: { children: ReactNode; id: string }) {
  return (
    <section
      className="relative h-[1120px] w-[1920px] shrink-0 snap-start overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(242deg, #000 0%, #000 9%, #2a0808 29.0764%, #47000a 50.0891%, #180202 75%, #000 100%)",
      }}
    >
      <p className="absolute left-[960px] top-[80px] h-[27px] w-[490px] -translate-x-1/2 whitespace-pre-wrap text-center font-manrope text-[20px] font-extrabold uppercase leading-[0] tracking-[1.98px] text-brand-soft [word-break:break-word]">
        <span className="font-extralight leading-[16.5px] tracking-[-3.2px]">------------</span>
        <span className="font-extralight leading-[16.5px]"> </span>
        <span className="leading-[16.5px]"> </span>
        <span className="leading-[16.5px] tracking-[5px]">DE ETALAGE</span>
        <span className="font-extralight leading-[16.5px] tracking-[-3.2px]">------------</span>
        <span className="font-extralight leading-[16.5px]"> </span>
      </p>
      <svg
        className="absolute left-[300px] top-[170px]"
        width="1320"
        height="880"
        viewBox="0 0 1320 880"
        fill="none"
        aria-hidden
      >
        <defs>
          <filter
            id={`${id}-gl`}
            x="0"
            y="0"
            width="1320"
            height="880"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="80" />
          </filter>
        </defs>
        <g filter={`url(#${id}-gl)`}>
          <ellipse cx="660" cy="440" rx="500" ry="280" fill="#9E081A" fillOpacity="0.5" />
        </g>
      </svg>
      <svg
        className="absolute left-[578px] top-[814px]"
        width="764"
        height="124"
        viewBox="0 0 764 124"
        fill="none"
        aria-hidden
      >
        <defs>
          <filter
            id="et-fl"
            x="0"
            y="0"
            width="764"
            height="124"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="16" />
          </filter>
        </defs>
        <g filter="url(#et-fl)">
          <ellipse cx="382" cy="62" rx="350" ry="30" fill="black" fillOpacity="0.55" />
        </g>
      </svg>
      {children}
    </section>
  );
}
