const assetPathPrefix = "/figma";
const imgGroup3 = `${assetPathPrefix}/52e3f.svg`;

export default function NavIcon3() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[40px]"
      data-node-id="321:1622"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(69, 10, 19) 14.286%, rgb(126, 12, 30) 85.714%)",
      }}
      data-name="Icoon"
    >
      <div
        className="overflow-clip relative shrink-0 size-[19.2px]"
        data-node-id="321:1623"
        data-name="Icon / sparkles"
      >
        <div
          className="absolute inset-[14.58%_12.5%_16.67%_16.67%]"
          data-node-id="I321:1623;231:303"
          data-name="Group"
        >
          <div className="absolute inset-[-6.06%_-5.88%]">
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
    </div>
  );
}
