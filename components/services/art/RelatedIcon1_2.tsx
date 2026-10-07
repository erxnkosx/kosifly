const assetPathPrefix = "/figma";
const imgGroup = `${assetPathPrefix}/bc3ca.svg`;

function IconServer({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[24px]"}
      data-node-id="231:328"
      data-name="Icon / server"
    >
      <div className="absolute inset-[12.5%_10.42%]" data-node-id="231:323" data-name="Group">
        <div className="absolute inset-[-5.56%_-5.26%]">
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

export default function RelatedIcon1_2() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shadow-[0px_0px_18px_0px_rgba(232,51,79,0.45)] shrink-0 size-[48px]"
      data-node-id="I320:1498;320:1400"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
      }}
      data-name="Icoon-tegel"
    >
      <IconServer className="overflow-clip relative shrink-0 size-[24px]" />
    </div>
  );
}
