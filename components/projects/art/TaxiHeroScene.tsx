import { Artwork } from "@/components/ui/Artwork";
const imgImage14 = "/figma/projects/8aa05.webp";
const imgImage22 = "/figma/projects/4cd9a.webp";
/** `lazy`: onderaan de pagina (volgende case), zodat de beelden niet vooraf geladen worden. */
export function TaxiHeroScene({ lazy = false }: { lazy?: boolean }) {
  return (
    <Artwork width={1180} height={752.294}>
      <div className="relative h-[752.294px]   w-[1180px]">
        <div className="absolute aspect-[702.4921875/522.7623901367188] left-0 right-[18.57%] shadow-[0px_0px_292.949px_1.172px_rgba(0,0,0,0.3)] top-[18.75px]">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            loading={lazy ? "lazy" : undefined}
            src={imgImage14}
          />
        </div>
        <div className="absolute h-[752.294px] left-[834.32px] top-0 w-[345.68px]">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            loading={lazy ? "lazy" : undefined}
            src={imgImage22}
          />
        </div>
      </div>
    </Artwork>
  );
}
