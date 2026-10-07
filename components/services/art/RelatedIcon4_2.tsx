const assetPathPrefix = "/figma";
const imgGroup = `${assetPathPrefix}/1fa32.svg`;

function IconSparkles({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[24px]"}
      data-node-id="231:306"
      data-name="Icon / sparkles"
    >
      <div
        className="absolute inset-[14.58%_12.5%_16.67%_16.67%]"
        data-node-id="231:303"
        data-name="Group"
      >
        <div className="absolute inset-[-6.06%_-5.88%]">
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

export default function RelatedIcon4_2() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shadow-[0px_0px_18px_0px_rgba(232,51,79,0.45)] shrink-0 size-[48px]"
      data-node-id="I320:1654;320:1400"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
      }}
      data-name="Icoon-tegel"
    >
      <IconSparkles className="overflow-clip relative shrink-0 size-[24px]" />
    </div>
  );
}
