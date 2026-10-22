"use client";

import { useEffect, useRef } from "react";

type Line = {
  left: number;
  top: number;
  width: number;
  height: number;
  length: number;
  angle: number;
  src: string;
};

/** Diagonale accentlijnen: drie linksonder en drie rechtsboven (Figma-hero, canvas 1920×1080). */
const LINES: readonly Line[] = [
  { left: 311, top: 821, width: 266, height: 259, length: 371.264, angle: -44.24, src: "eefd4" },
  { left: 412, top: 893, width: 193, height: 187, length: 268.734, angle: -44.1, src: "54140" },
  { left: 515, top: 967, width: 120, height: 113, length: 164.83, angle: -43.28, src: "314db" },
  {
    left: 1451.01,
    top: 4.59,
    width: 262.105,
    height: 261.527,
    length: 370.264,
    angle: 135.06,
    src: "c4979",
  },
  {
    left: 1422.13,
    top: 5.83,
    width: 189.989,
    height: 188.642,
    length: 267.734,
    angle: 135.2,
    src: "a6624",
  },
  {
    left: 1391.23,
    top: 7.08,
    width: 117.89,
    height: 113.765,
    length: 163.83,
    angle: 136.02,
    src: "d003f",
  },
];

function DiagonalLine({ left, top, width, height, length, angle, src }: Line) {
  return (
    <div className="absolute flex items-center justify-center" style={{ left, top, width, height }}>
      <div className="flex-none" style={{ rotate: `${angle}deg` }}>
        <div className="relative h-0" style={{ width: length }}>
          <div className="absolute inset-[-1px_0_0_0]">
            <img
              src={`/figma/${src}.svg`}
              alt=""
              loading="lazy"
              decoding="async"
              className="block size-full max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function BackdropArt() {
  return (
    <div className="relative h-[1080px] w-[1920px]">
      <img
        src="/figma/1cff9.svg"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute left-[900px] top-[160px] block h-[760px] w-[1000px] max-w-none"
      />
      <div
        className="absolute left-[880px] top-0 h-[1080px] w-[1040px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20px_90px] mask-size-[1100px_900px]"
        style={{ maskImage: 'url("/figma/fbc8f.svg")' }}
      >
        <img
          src="/figma/443a9.svg"
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 block size-full max-w-none"
        />
      </div>
      {LINES.map((line) => (
        <DiagonalLine key={line.src} {...line} />
      ))}
      <div className="absolute left-px top-[6.5px] h-[240px] w-[667px]">
        <div className="absolute inset-[-0.17%_0_-0.21%_0]">
          <img
            src="/figma/965f5.svg"
            alt=""
            loading="lazy"
            decoding="async"
            className="block size-full max-w-none"
          />
        </div>
      </div>
    </div>
  );
}

/** Figma-canvas van de hero-achtergrond. */
const CANVAS = { width: 1920, height: 1080 };

/**
 * Gedeelde hero-achtergrond (Figma 232:1228): diagonaal verloop met overlay (CSS op `.hero-backdrop`),
 * daarboven gloed, puntraster, diagonale lijnen en de gebogen lijn linksboven.
 * Desktop: het canvas vult de hero zoals `background-size: cover`. Smallere schermen: het canvas houdt
 * minstens 75% van zijn ware grootte, zodat het puntraster niet uitvergroot wordt; het verloop vult de rest.
 * Plaats hem als eerste kind in een hero-sectie.
 */
export function HeroBackdrop() {
  const root = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = root.current;
    const art = canvas.current;
    if (!box || !art) return;
    const fit = () => {
      // Layoutmaat, niet getBoundingClientRect: binnen een geschaald canvas (prijzenpagina) telt de eigen maat.
      const width = box.offsetWidth;
      const height = box.offsetHeight;
      const scale =
        width >= 1100
          ? Math.max(width / CANVAS.width, height / CANVAS.height)
          : Math.max(width / CANVAS.width, 0.75);
      // Verankerd op 70% van de breedte: gloed en puntraster rechts blijven in beeld.
      const x = (width - CANVAS.width * scale) * 0.7;
      art.style.transform = `translate3d(${x}px, 0, 0) scale(${scale})`;
    };
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(box);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={root} className="hero-backdrop" aria-hidden="true">
      <div ref={canvas} className="hero-backdrop-canvas">
        <BackdropArt />
      </div>
    </div>
  );
}
