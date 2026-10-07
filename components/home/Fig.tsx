import type { CSSProperties, ReactNode } from "react";

/** Rendert een uit Figma geserialiseerde laag-boom (zie tools/figgen.py) als absoluut gepositioneerde HTML. */
export type FigNode = {
  t: string;
  x: number;
  y: number;
  w: number;
  h: number;
  r?: number;
  o?: number;
  s?: (string | number)[][];
  a?: string;
  ar?: number;
  f?: string[];
  n?: string;
  k?: [string, number, number];
  c?: number | number[];
  e?: (string | number)[][];
  cl?: number;
  vb?: string;
  v?: string;
  k2?: FigNode[];
};

const WEIGHT: Record<string, number> = {
  ExtraLight: 200,
  Light: 300,
  Regular: 400,
  Medium: 500,
  "Semi Bold": 600,
  SemiBold: 600,
  Bold: 700,
  "Extra Bold": 800,
  ExtraBold: 800,
  Black: 900,
};
const FAMILY: Record<string, string> = {
  Inter: "var(--font-inter)",
  Manrope: "var(--font-manrope)",
  Orbitron: "var(--font-orbitron)",
  Michroma: "var(--font-michroma)",
  Geist: "var(--font-geist)",
};
const IMAGES: Record<string, string> = { Foto: "url(/images/taxi-foto.jpg)" };
const ALIGN: Record<string, CSSProperties["textAlign"]> = {
  L: "left",
  C: "center",
  R: "right",
  J: "justify",
};

function boxStyle(n: FigNode): CSSProperties {
  const st: CSSProperties = { position: "absolute", left: n.x, top: n.y, width: n.w, height: n.h };
  if (n.r) {
    st.transform = `rotate(${n.r}deg)`;
    st.transformOrigin = "0 0";
  }
  if (n.o !== undefined) st.opacity = n.o;
  if (n.f) {
    st.backgroundImage = n.f
      .map((l) =>
        l === "IMG"
          ? (IMAGES[n.n ?? ""] ?? "none")
          : l.startsWith("linear-gradient") || l.startsWith("radial-gradient")
            ? l
            : `linear-gradient(${l},${l})`,
      )
      .join(",");
    st.backgroundSize = n.f.map((l) => (l === "IMG" ? "cover" : "auto")).join(",");
    st.backgroundPosition = "center";
    st.backgroundRepeat = "no-repeat";
  }
  if (n.k) {
    st.border = `${n.k[1]}px ${n.k[2] ? "dashed" : "solid"} ${n.k[0]}`;
    st.boxSizing = "border-box";
  }
  if (n.c !== undefined)
    st.borderRadius =
      n.c === 9999 ? "50%" : Array.isArray(n.c) ? n.c.map((v) => v + "px").join(" ") : n.c;
  if (n.e) {
    const sh: string[] = [];
    const fl: string[] = [];
    const bf: string[] = [];
    for (const e of n.e) {
      if (e[0] === "d") sh.push(`${e[1]}px ${e[2]}px ${e[3]}px ${e[4]}px ${e[5]}`);
      else if (e[0] === "i") sh.push(`inset ${e[1]}px ${e[2]}px ${e[3]}px ${e[4]}px ${e[5]}`);
      else if (e[0] === "b") fl.push(`blur(${(e[1] as number) / 2}px)`);
      else if (e[0] === "g") bf.push(`blur(${(e[1] as number) / 2}px)`);
    }
    if (sh.length) st.boxShadow = sh.join(",");
    if (fl.length) st.filter = fl.join(" ");
    if (bf.length) {
      st.backdropFilter = bf.join(" ");
      st.WebkitBackdropFilter = bf.join(" ");
    }
  }
  if (n.cl) st.overflow = "hidden";
  return st;
}

export function Fig({ node }: { node: FigNode }): ReactNode {
  if (node.t === "G")
    return (
      <>
        {node.k2?.map((c, i) => (
          <Fig key={i} node={c} />
        ))}
      </>
    );
  if (node.t === "V")
    return (
      <svg
        fill="none"
        style={{
          position: "absolute",
          left: node.x,
          top: node.y,
          width: node.w,
          height: node.h,
          overflow: "visible",
        }}
        viewBox={node.vb}
        dangerouslySetInnerHTML={{ __html: node.v ?? "" }}
      />
    );
  if (node.t === "T") {
    const st: CSSProperties = {
      position: "absolute",
      left: node.x,
      top: node.y,
      width: node.w,
      textAlign: ALIGN[node.a ?? "L"],
      lineHeight: 0,
      whiteSpace: node.ar ? "pre" : "pre-wrap",
      wordBreak: "break-word",
    };
    if (!node.ar) st.height = node.h;
    if (node.r) {
      st.transform = `rotate(${node.r}deg)`;
      st.transformOrigin = "0 0";
    }
    if (node.o !== undefined) st.opacity = node.o;
    return (
      <div style={st}>
        {node.s?.map((s, i) => (
          <span
            key={i}
            style={{
              fontFamily: FAMILY[s[1] as string] ?? "inherit",
              fontWeight: WEIGHT[s[2] as string] ?? 400,
              fontSize: s[3] as number,
              color: s[4] as string,
              letterSpacing: s[5] ? `${s[5]}px` : undefined,
              lineHeight: s[6] ? `${s[6]}px` : "normal",
              textDecoration: s[7] ? "underline" : undefined,
              textTransform: s[8] ? "uppercase" : undefined,
            }}
          >
            {(s[0] as string).replace("-->", "→")}
          </span>
        ))}
      </div>
    );
  }
  return (
    <div style={boxStyle(node)}>
      {node.k2?.map((c, i) => (
        <Fig key={i} node={c} />
      ))}
    </div>
  );
}
