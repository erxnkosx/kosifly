const assetPathPrefix = "/figma";
const imgGroup2 = `${assetPathPrefix}/4871b.svg`;

export default function NavIcon2() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[40px]"
      data-node-id="321:1611"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(69, 10, 19) 14.286%, rgb(126, 12, 30) 85.714%)",
      }}
      data-name="Icoon"
    >
      <div
        className="overflow-clip relative shrink-0 size-[19.2px]"
        data-node-id="321:1612"
        data-name="Icon / dashboard"
      >
        <div className="absolute inset-[12.5%]" data-node-id="I321:1612;231:265" data-name="Group">
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
    </div>
  );
}
