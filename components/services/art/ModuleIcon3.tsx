const assetPathPrefix = "/figma";
const imgGroup2 = `${assetPathPrefix}/b31f1.svg`;

function IconLink({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[24px]"}
      data-node-id="231:280"
      data-name="Icon / link"
    >
      <div className="absolute inset-[13.23%_13.64%]" data-node-id="231:277" data-name="Group">
        <div className="absolute inset-[-5.67%_-5.73%]">
          <img
            loading="lazy"
            decoding="async"
            alt=""
            className="block max-w-none size-full"
            src={imgGroup2}
          />
        </div>
      </div>
    </div>
  );
}

export default function ModuleIcon3() {
  return (
    <div
      className="bg-[#bdbdbd] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[48px]"
      data-node-id="275:1226"
      data-name="Icoon"
    >
      <IconLink className="overflow-clip relative shrink-0 size-[24px]" />
    </div>
  );
}
