const assetPathPrefix = "/figma";
const imgGroup3 = `${assetPathPrefix}/1665b.svg`;

function IconCalendar({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[24px]"}
      data-node-id="231:275"
      data-name="Icon / calendar"
    >
      <div className="absolute inset-[10.42%_12.5%]" data-node-id="231:272" data-name="Group">
        <div className="absolute inset-[-5.26%_-5.56%]">
          <img
            loading="lazy"
            decoding="async"
            alt=""
            className="block max-w-none size-full"
            src={imgGroup3}
          />
        </div>
      </div>
    </div>
  );
}

export default function ModuleIcon2() {
  return (
    <div
      className="bg-[#bdbdbd] content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[48px]"
      data-node-id="275:1217"
      data-name="Icoon"
    >
      <IconCalendar className="overflow-clip relative shrink-0 size-[24px]" />
    </div>
  );
}
