const assetPathPrefix = "/figma";
const imgGroup2 = `${assetPathPrefix}/fe132.svg`;

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
            src={imgGroup2}
          />
        </div>
      </div>
    </div>
  );
}

export default function RelatedIcon3_0() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shadow-[0px_0px_18px_0px_rgba(232,51,79,0.45)] shrink-0 size-[48px]"
      data-node-id="I320:1572;320:1400"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
      }}
      data-name="Icoon-tegel"
    >
      <IconDashboard className="overflow-clip relative shrink-0 size-[24px]" />
    </div>
  );
}
