import type { ComponentType } from "react";
import { Artwork } from "@/components/ui/Artwork";

/**
 * Beelden uit de Canva-mockups van de projectshowcase (laptop of monitor, eventueel met gsm), in de vaste
 * kaders van de casepagina's: hero (1180 × 752), projectkaart (852 × 540) en stappen (920 × 580).
 * De mockups staan als WebP met transparante achtergrond in public/images/projects.
 */
export type MockupSet = {
  /** Laptop- of monitormockup. */
  desktop: string;
  device: "laptop" | "monitor";
  /** Breedte / hoogte van de desktopmockup als die afwijkt van de standaard voor het toestel. */
  ratio?: number;
  /** Gsm-mockup; zonder gsm toont de tweede stap een close-up van de monitor (`closeUp`). */
  phone?: string;
  /** Linkerbovenhoek en breedte van de close-up, als fractie van de mockup. */
  closeUp?: { x: number; y: number; width: number };
  /** Label linksboven op de projectkaart, bv. "HORECA  ·  WEBSITE". */
  label: string;
};

/** Verhoudingen (breedte / hoogte) van de bijgesneden mockups. */
const RATIO = { laptop: 1030 / 636, monitor: 1292 / 860, phone: 390 / 798 };

const BACKDROP =
  "linear-gradient(154.69deg, rgb(0, 0, 0) 14.286%, rgb(151, 3, 3) 50%, rgb(0, 0, 0) 85.714%)";
const SHADOW_LIGHT = "drop-shadow(0 28px 36px rgb(0 0 0 / 0.22))";
const SHADOW_DARK = "drop-shadow(0 24px 40px rgb(0 0 0 / 0.55))";

type Box = { left: number; top: number; width: number };

function Shot({
  src,
  box,
  ratio,
  lazy,
  shadow,
}: {
  src: string;
  box: Box;
  ratio: number;
  lazy: boolean;
  shadow: string;
}) {
  const height = Math.round(box.width / ratio);
  return (
    <img
      src={src}
      alt=""
      width={box.width}
      height={height}
      loading={lazy ? "lazy" : undefined}
      decoding="async"
      className="absolute block max-w-none"
      style={{ left: box.left, top: box.top, width: box.width, height, filter: shadow }}
    />
  );
}

export function mockupScenes(set: MockupSet) {
  const laptop = set.device === "laptop";
  const desktopRatio = set.ratio ?? (laptop ? RATIO.laptop : RATIO.monitor);

  /** Hero: laptop met de gsm ervoor (zoals in de Instagram-posts), of de monitor alleen. */
  function MockupHeroScene({ lazy = false }: { lazy?: boolean }) {
    return (
      <Artwork width={1180} height={752}>
        <div className="relative h-[752px] w-[1180px]">
          {laptop ? (
            <>
              <Shot
                src={set.desktop}
                ratio={desktopRatio}
                box={{ left: 0, top: 90, width: 940 }}
                lazy={lazy}
                shadow={SHADOW_DARK}
              />
              {set.phone && (
                <Shot
                  src={set.phone}
                  ratio={RATIO.phone}
                  box={{ left: 862, top: 104, width: 293 }}
                  lazy={lazy}
                  shadow={SHADOW_DARK}
                />
              )}
            </>
          ) : (
            <Shot
              src={set.desktop}
              ratio={desktopRatio}
              box={{ left: 40, top: 10, width: 1100 }}
              lazy={lazy}
              shadow={SHADOW_DARK}
            />
          )}
        </div>
      </Artwork>
    );
  }

  /** Projectkaart: donker kader met gloed en het label, zoals de andere projectkaarten. */
  function MockupCardScene() {
    return (
      <Artwork width={852} height={540}>
        <div
          className="relative h-[540px] w-[852px] overflow-clip"
          style={{ backgroundImage: BACKDROP }}
        >
          <div className="absolute left-[76px] top-[70px] h-[420px] w-[700px]">
            <div className="absolute inset-[-28.57%_-17.14%]">
              <img
                loading="lazy"
                decoding="async"
                alt=""
                className="block size-full max-w-none"
                src="/figma/projects/ba1f3.svg"
              />
            </div>
          </div>
          {laptop ? (
            <>
              <Shot
                src={set.desktop}
                ratio={desktopRatio}
                box={{ left: 58, top: 122, width: 600 }}
                lazy
                shadow={SHADOW_DARK}
              />
              {set.phone && (
                <Shot
                  src={set.phone}
                  ratio={RATIO.phone}
                  box={{ left: 606, top: 128, width: 176 }}
                  lazy
                  shadow={SHADOW_DARK}
                />
              )}
            </>
          ) : (
            <Shot
              src={set.desktop}
              ratio={desktopRatio}
              box={{ left: 106, top: 92, width: 640 }}
              lazy
              shadow={SHADOW_DARK}
            />
          )}
          <div className="absolute left-[28px] top-[28px] flex items-center gap-[8px] overflow-clip rounded-[30px] border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] py-[8px] pl-[12px] pr-[14px] backdrop-blur-[7px]">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              width={7}
              height={7}
              className="block size-[7px] shrink-0"
              src="/figma/projects/193af.svg"
            />
            <span className="whitespace-pre font-orbitron text-[10px] font-medium leading-[normal] tracking-[2.2px] text-[rgba(255,255,255,0.95)]">
              {set.label}
            </span>
          </div>
        </div>
      </Artwork>
    );
  }

  /** Stap 1: het ontwerp op laptop of monitor. */
  function MockupDesktopStep() {
    return (
      <Artwork width={920} height={580}>
        <div className="relative h-[580px] w-[920px]">
          <Shot
            src={set.desktop}
            ratio={desktopRatio}
            box={laptop ? { left: 30, top: 22, width: 860 } : { left: 50, top: 17, width: 820 }}
            lazy
            shadow={SHADOW_LIGHT}
          />
        </div>
      </Artwork>
    );
  }

  /** Stap 2: het ontwerp op de gsm, of een close-up van dezelfde monitor. */
  function MockupSecondStep() {
    const zoom = set.closeUp ?? { x: 0, y: 0, width: 1 };
    const width = Math.round(920 / zoom.width);
    return (
      <Artwork width={920} height={580}>
        <div className="relative h-[580px] w-[920px] overflow-clip">
          {set.phone ? (
            <Shot
              src={set.phone}
              ratio={RATIO.phone}
              box={{ left: 323, top: 10, width: 274 }}
              lazy
              shadow={SHADOW_LIGHT}
            />
          ) : (
            <Shot
              src={set.desktop}
              ratio={desktopRatio}
              box={{
                left: -Math.round(zoom.x * width),
                top: -Math.round((zoom.y * width) / desktopRatio),
                width,
              }}
              lazy
              shadow="none"
            />
          )}
        </div>
      </Artwork>
    );
  }

  return {
    hero: MockupHeroScene as ComponentType<{ lazy?: boolean }>,
    card: MockupCardScene as ComponentType,
    steps: [MockupDesktopStep, MockupSecondStep] as ComponentType[],
  };
}
