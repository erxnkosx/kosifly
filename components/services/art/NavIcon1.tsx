const assetPathPrefix = "/figma";
const imgGroup1 = `${assetPathPrefix}/45f2a.svg`;

export default function NavIcon1() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[40px]"
      data-node-id="321:1602"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(69, 10, 19) 14.286%, rgb(126, 12, 30) 85.714%)",
      }}
      data-name="Icoon"
    >
      <div
        className="overflow-clip relative shrink-0 size-[19.2px]"
        data-node-id="321:1603"
        data-name="Icon / map-pin"
      >
        <div
          className="absolute inset-[12.5%_20.83%_10.42%_20.83%]"
          data-node-id="I321:1603;231:227"
          data-name="Group"
        >
          <div className="absolute inset-[-5.41%_-7.14%]">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="block max-w-none size-full"
              src={imgGroup1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
