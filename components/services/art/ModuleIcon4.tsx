const assetPathPrefix = "/figma";
const imgGroup1 = `${assetPathPrefix}/70821.svg`;

function IconShieldCheck({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[24px]"}
      data-node-id="231:285"
      data-name="Icon / shield-check"
    >
      <div className="absolute inset-[10.42%_18.75%]" data-node-id="231:282" data-name="Group">
        <div className="absolute inset-[-5.26%_-6.67%]">
          <img
            loading="lazy"
            decoding="async"
            alt=""
            className="block max-w-none size-full"
            src={imgGroup1}
          />
        </div>
      </div>
    </div>
  );
}

export default function ModuleIcon4() {
  return (
    <div
      className="bg-[#bdbdbd] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[48px]"
      data-node-id="275:1235"
      data-name="Icoon"
    >
      <IconShieldCheck className="overflow-clip relative shrink-0 size-[24px]" />
    </div>
  );
}
