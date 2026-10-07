/** Hero-badge: "Sectie / Pagina" met rode stip (Figma: Badge) */
export function Badge({ section, page }: { section: string; page: string }) {
  return (
    <div className="inline-flex items-center gap-[10px] rounded-[40px] border border-white/16 bg-white/6 py-[8px] pl-[14px] pr-[16px]">
      <span className="size-[8px] rounded-full bg-brand-bright" />
      <span className="font-inter text-[14px] font-medium leading-[normal] text-white/60">
        {section}&nbsp;&nbsp;/&nbsp;&nbsp;<span className="text-white">{page}</span>
      </span>
    </div>
  );
}
