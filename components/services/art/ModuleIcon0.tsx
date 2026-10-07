const assetPathPrefix = "/figma";
const imgGroup5 = `${assetPathPrefix}/f0691.svg`;

function IconUserCircle({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[24px]"}
      data-node-id="231:263"
      data-name="Icon / user-circle"
    >
      <div className="absolute inset-[10.42%]" data-node-id="231:259" data-name="Group">
        <div className="absolute inset-[-5.26%]">
          <img
            loading="lazy"
            decoding="async"
            alt=""
            className="block max-w-none size-full"
            src={imgGroup5}
          />
        </div>
      </div>
    </div>
  );
}

export default function ModuleIcon0() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shadow-[0px_0px_18px_0px_rgba(232,51,79,0.45)] shrink-0 size-[48px]"
      data-node-id="275:1194"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
      }}
      data-name="Icoon"
    >
      <IconUserCircle className="overflow-clip relative shrink-0 size-[24px]" />
    </div>
  );
}
