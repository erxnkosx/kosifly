const assetPathPrefix = "/figma";
const imgGroup4 = `${assetPathPrefix}/fe132.svg`;

function IconDashboard({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[24px]"}
      data-node-id="231:270"
      data-name="Icon / dashboard"
    >
      <div className="absolute inset-[12.5%]" data-node-id="231:265" data-name="Group">
        <div className="absolute inset-[-5.56%]">
          <img
            loading="lazy"
            decoding="async"
            alt=""
            className="block max-w-none size-full"
            src={imgGroup4}
          />
        </div>
      </div>
    </div>
  );
}

export default function ModuleIcon1() {
  return (
    <div
      className="bg-[#bdbdbd] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[48px]"
      data-node-id="275:1206"
      data-name="Icoon"
    >
      <IconDashboard className="overflow-clip relative shrink-0 size-[24px]" />
    </div>
  );
}
