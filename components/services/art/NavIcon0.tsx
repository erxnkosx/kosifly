const assetPathPrefix = "/figma";
const imgGroup = `${assetPathPrefix}/c39f1.svg`;

export default function NavIcon0() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[40px]"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(69, 10, 19) 14.286%, rgb(126, 12, 30) 85.714%)",
      }}
      data-name="Icoon"
    >
      <div className="overflow-clip relative shrink-0 size-[19.2px]" data-name="Icon / layout">
        <div className="absolute inset-[12.5%]" data-name="Group">
          <div className="absolute inset-[-5.56%]">
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
    </div>
  );
}
