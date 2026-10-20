import { Artwork } from "@/components/ui/Artwork";
const imgMockupPrimelabs = "/figma/projects/309ed.webp";
/** `lazy`: onderaan de pagina (volgende case), zodat de beelden niet vooraf geladen worden. */
export function PrimeHeroScene({ lazy = false }: { lazy?: boolean }) {
  return (
    <Artwork width={1180} height={786.667}>
      <div className="relative h-[786.667px]   w-[1180px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          loading={lazy ? "lazy" : undefined}
          src={imgMockupPrimelabs}
        />
      </div>
    </Artwork>
  );
}
