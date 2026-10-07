import { Reveal } from "@/components/motion/Reveal";
import { fadeIn } from "@/components/motion/presets";
import { Artwork } from "@/components/ui/Artwork";

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

/**
 * Gedeelde hero-achtergrond: gloed, puntraster, diagonale lijnen en de gebogen lijn linksboven.
 * Plaats hem als eerste kind in een `.service-hero`-sectie.
 */
export function HeroBackdrop() {
  return (
    <Reveal className="hero-backdrop" variants={fadeIn} onMount aria-hidden="true">
      <Artwork width={1920} height={1080}>
        <BackdropArt />
      </Artwork>
    </Reveal>
  );
}
