import { Fig, type FigNode } from "../Fig";
import { Anchor, Shell } from "./Shell";

export type EtalageData = {
  kop: FigNode;
  intro: FigNode;
  beeld: FigNode;
  lijnen: FigNode;
  slot: FigNode;
  call: FigNode[];
  anch: number[][];
};

/** Etalage 2 t/m 5: volledig gerenderd uit de Figma-lagen (data/etalage-N.json). */
export function DataSlide({ data, id }: { data: EtalageData; id: string }) {
  return (
    <Shell id={id}>
      <Fig node={data.kop} />
      <Fig node={data.intro} />
      <Fig node={data.beeld} />
      <Fig node={data.lijnen} />
      {data.anch.map(([x, y]) => (
        <Anchor key={x + "-" + y} x={x} y={y} />
      ))}
      {data.call.map((c, i) => (
        <Fig key={i} node={c} />
      ))}
      <Fig node={data.slot} />
    </Shell>
  );
}
