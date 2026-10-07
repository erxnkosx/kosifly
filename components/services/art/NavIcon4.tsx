const assetPathPrefix = "/figma";
const imgGroup4 = `${assetPathPrefix}/a467d.svg`;

export default function NavIcon4() {
  return (
    <div
      className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[40px]"
      data-node-id="321:1631"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(69, 10, 19) 14.286%, rgb(126, 12, 30) 85.714%)",
      }}
      data-name="Icoon"
    >
      <div
        className="overflow-clip relative shrink-0 size-[19.2px]"
        data-node-id="321:1632"
        data-name="Icon / server"
      >
        <div
          className="absolute inset-[12.5%_10.42%]"
          data-node-id="I321:1632;231:323"
          data-name="Group"
        >
          <div className="absolute inset-[-5.56%_-5.26%]">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="block max-w-none size-full"
              src={imgGroup4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
