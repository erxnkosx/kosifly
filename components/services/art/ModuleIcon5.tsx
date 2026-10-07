const assetPathPrefix = "/figma";
const imgGroup = `${assetPathPrefix}/3b7a7.svg`;

function IconTrendingUp({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[24px]"}
      data-node-id="231:290"
      data-name="Icon / trending-up"
    >
      <div
        className="absolute inset-[29.17%_10.42%_33.33%_10.42%]"
        data-node-id="231:287"
        data-name="Group"
      >
        <div className="absolute inset-[-11.11%_-5.26%]">
          <img
            loading="lazy"
            decoding="async"
            alt=""
            className="block max-w-none size-full"
            src={imgGroup}
          />
        </div>
      </div>
    </div>
  );
}

export default function ModuleIcon5() {
  return (
    <div
      className="bg-[#bdbdbd] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[48px]"
      data-node-id="275:1244"
      data-name="Icoon"
    >
      <IconTrendingUp className="overflow-clip relative shrink-0 size-[24px]" />
    </div>
  );
}
