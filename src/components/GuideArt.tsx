// Enkla, handritade illustrationer till guiderna. Rena SVG-former med fyllnadsfärger som attribut, så att samma
// bilder fungerar både på sajten och i delningsbilderna (next/og).

export const ART_KEYS = [
  "elbil",
  "varmepump",
  "sol",
  "batteri",
  "radiator",
  "element",
  "beredare",
  "spa",
  "lampa",
  "matare",
  "pris",
  "effekt",
  "app",
  "natet",
  "ved",
  "golvvarme",
  "kurva",
  "hus",
] as const;
export type ArtKey = (typeof ART_KEYS)[number];

const INK = "#16213a";
const LEAF = "#ff5a1f";
const VOLT = "#ffb21f";
const FOREST = "#16213a";
const WHITE = "#ffffff";
const CLAY = "#ff8a5c";
const SKY = "#a9bde3";

const s = { stroke: INK, strokeWidth: 4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function bolt(x: number, y: number, scale = 1) {
  return (
    <path
      d={`M${x + 8 * scale} ${y} L${x} ${y + 16 * scale} H${x + 8 * scale} L${x + 4 * scale} ${y + 30 * scale} L${x + 18 * scale} ${y + 11 * scale} H${x + 10 * scale} L${x + 14 * scale} ${y} Z`}
      fill={VOLT}
      {...s}
      strokeWidth={3}
    />
  );
}

const ART: Record<ArtKey, () => React.ReactNode> = {
  elbil: () => (
    <g>
      <path d="M22 98 L32 72 Q36 64 46 64 H104 Q114 64 118 72 L130 98 Z" fill={LEAF} {...s} />
      <rect x="16" y="96" width="120" height="24" rx="10" fill={LEAF} {...s} />
      <path d="M42 70 H70 V92 H34 Z M78 70 H106 L116 92 H78 Z" fill={SKY} {...s} strokeWidth={3} />
      <circle cx="44" cy="122" r="11" fill={INK} />
      <circle cx="108" cy="122" r="11" fill={INK} />
      <circle cx="44" cy="122" r="4" fill={WHITE} />
      <circle cx="108" cy="122" r="4" fill={WHITE} />
      <path d="M136 108 Q150 108 150 92 V60" fill="none" {...s} />
      <rect x="140" y="38" width="20" height="24" rx="5" fill={WHITE} {...s} />
      {bolt(110, 16, 1.1)}
    </g>
  ),
  varmepump: () => (
    <g>
      <rect x="18" y="52" width="104" height="80" rx="10" fill={WHITE} {...s} />
      <circle cx="60" cy="92" r="27" fill={SKY} {...s} />
      <path d="M60 92 L60 68 M60 92 L81 104 M60 92 L39 104" {...s} />
      <circle cx="60" cy="92" r="5" fill={INK} />
      <path d="M98 66 H112 M98 78 H112 M98 90 H112 M98 102 H112" {...s} strokeWidth={3} />
      <path d="M130 50 q8 -10 0 -20 q-8 -10 0 -20" fill="none" stroke={CLAY} strokeWidth={5} strokeLinecap="round" />
      <path d="M148 58 q8 -10 0 -20 q-8 -10 0 -20" fill="none" stroke={CLAY} strokeWidth={5} strokeLinecap="round" />
    </g>
  ),
  sol: () => (
    <g>
      <circle cx="116" cy="38" r="18" fill={VOLT} {...s} />
      <path d="M116 6 V12 M116 64 V70 M84 38 H90 M142 38 H148 M94 16 L98 20 M134 56 L138 60 M138 16 L134 20" {...s} strokeWidth={3} />
      <path d="M18 132 L44 70 H124 L104 132 Z" fill={FOREST} {...s} />
      <path d="M38 85 H118 M28 108 H110 M71 70 L58 132 M98 70 L84 132" stroke={SKY} strokeWidth={3} />
      <path d="M18 132 L44 70 H124 L104 132 Z" fill="none" {...s} />
      <path d="M60 132 V146 M90 132 V146" {...s} />
    </g>
  ),
  batteri: () => (
    <g>
      <rect x="40" y="30" width="80" height="112" rx="12" fill={WHITE} {...s} />
      <rect x="62" y="18" width="36" height="14" rx="4" fill={INK} />
      <rect x="50" y="98" width="60" height="34" rx="5" fill={LEAF} />
      <rect x="50" y="62" width="60" height="30" rx="5" fill={VOLT} />
      {bolt(72, 68, 0.65)}
      <path d="M134 60 q10 16 0 32" fill="none" stroke={LEAF} strokeWidth={4} strokeLinecap="round" />
      <path d="M26 92 q-10 -16 0 -32" fill="none" stroke={LEAF} strokeWidth={4} strokeLinecap="round" />
    </g>
  ),
  radiator: () => (
    <g>
      {[30, 52, 74, 96].map((x) => (
        <rect key={x} x={x} y="50" width="18" height="78" rx="8" fill={WHITE} {...s} />
      ))}
      <path d="M24 70 H122 M24 112 H122" {...s} strokeWidth={3} />
      <circle cx="132" cy="58" r="14" fill={VOLT} {...s} />
      <path d="M132 58 L138 50" {...s} strokeWidth={3} />
      <rect x="126" y="70" width="12" height="16" rx="3" fill={INK} />
      <path d="M48 36 q6 -8 0 -16 M70 36 q6 -8 0 -16 M92 36 q6 -8 0 -16" fill="none" stroke={CLAY} strokeWidth={4} strokeLinecap="round" />
    </g>
  ),
  element: () => (
    <g>
      <rect x="18" y="58" width="124" height="64" rx="12" fill={WHITE} {...s} />
      <path d="M34 76 H126 M34 90 H126 M34 104 H126" stroke={INK} strokeWidth={2} opacity={0.35} />
      <rect x="104" y="66" width="28" height="14" rx="4" fill={FOREST} />
      <rect x="110" y="70" width="6" height="6" rx="1" fill={VOLT} />
      <rect x="119" y="70" width="6" height="6" rx="1" fill={VOLT} />
      <path d="M36 122 V136 M124 122 V136" {...s} />
      <path d="M50 44 q7 -9 0 -18 M80 44 q7 -9 0 -18 M110 44 q7 -9 0 -18" fill="none" stroke={CLAY} strokeWidth={4} strokeLinecap="round" />
    </g>
  ),
  beredare: () => (
    <g>
      <rect x="48" y="20" width="64" height="118" rx="30" fill={WHITE} {...s} />
      <rect x="62" y="78" width="36" height="8" rx="4" fill={CLAY} />
      <rect x="62" y="92" width="36" height="8" rx="4" fill={CLAY} />
      <circle cx="80" cy="54" r="12" fill={VOLT} {...s} strokeWidth={3} />
      <path d="M80 54 L86 48" {...s} strokeWidth={3} />
      <path d="M62 138 V150 M98 138 V150" {...s} />
      <path d="M132 70 q-10 16 0 26 q10 -10 0 -26 Z" fill={SKY} {...s} strokeWidth={3} />
      <rect x="16" y="56" width="22" height="34" rx="5" fill={LEAF} {...s} strokeWidth={3} />
      <path d="M38 72 H48" {...s} strokeWidth={3} />
    </g>
  ),
  spa: () => (
    <g>
      <path d="M14 82 H146 L136 128 Q134 136 126 136 H34 Q26 136 24 128 Z" fill={WHITE} {...s} />
      <path d="M24 96 Q52 88 80 96 T136 96 L134 110 H26 Z" fill={SKY} />
      <path d="M14 82 H146" {...s} />
      <circle cx="56" cy="104" r="4" fill={WHITE} {...s} strokeWidth={2} />
      <circle cx="84" cy="110" r="5" fill={WHITE} {...s} strokeWidth={2} />
      <circle cx="108" cy="102" r="3.5" fill={WHITE} {...s} strokeWidth={2} />
      <path d="M50 66 q8 -10 0 -20 q-8 -10 0 -20 M80 66 q8 -10 0 -20 q-8 -10 0 -20 M110 66 q8 -10 0 -20 q-8 -10 0 -20" fill="none" stroke={CLAY} strokeWidth={4} strokeLinecap="round" />
    </g>
  ),
  lampa: () => (
    <g>
      <path d="M80 14 V34" {...s} />
      <path d="M52 76 Q52 34 80 34 Q108 34 108 76 Q108 92 96 102 V112 H64 V102 Q52 92 52 76 Z" fill={VOLT} {...s} />
      <rect x="64" y="112" width="32" height="14" rx="4" fill={INK} />
      <path d="M70 132 H90" {...s} />
      <path d="M30 60 H18 M142 60 H130 M38 30 L30 22 M122 30 L130 22" {...s} strokeWidth={3} />
      <rect x="116" y="104" width="30" height="42" rx="8" fill={WHITE} {...s} strokeWidth={3} />
      <rect x="125" y="114" width="12" height="22" rx="6" fill={LEAF} />
    </g>
  ),
  matare: () => (
    <g>
      <rect x="28" y="20" width="104" height="124" rx="14" fill={WHITE} {...s} />
      <rect x="42" y="36" width="76" height="36" rx="6" fill={FOREST} />
      <path d="M52 54 H74 M84 46 V62 M94 54 H108" stroke={VOLT} strokeWidth={6} strokeLinecap="round" />
      <path d="M44 120 L60 100 L74 110 L92 86 L116 98" fill="none" stroke={LEAF} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="116" cy="98" r="5" fill={VOLT} {...s} strokeWidth={2} />
      <rect x="66" y="144" width="28" height="10" rx="3" fill={INK} />
    </g>
  ),
  pris: () => (
    <g>
      <path d="M20 140 H144" {...s} />
      {[
        [26, 60],
        [44, 82],
        [62, 104],
        [80, 96],
        [98, 70],
        [116, 50],
      ].map(([x, h], i) => (
        <rect key={x} x={x} y={140 - h} width="14" height={h} rx="4" fill={i === 2 || i === 3 ? LEAF : WHITE} {...s} strokeWidth={3} />
      ))}
      <circle cx="122" cy="34" r="20" fill={VOLT} {...s} />
      <path d="M122 22 V34 L130 40" {...s} strokeWidth={3} />
    </g>
  ),
  effekt: () => (
    <g>
      <path d="M22 116 A58 58 0 0 1 138 116" fill="none" stroke={WHITE} strokeWidth={22} />
      <path d="M22 116 A58 58 0 0 1 52 66" fill="none" stroke={LEAF} strokeWidth={22} />
      <path d="M108 66 A58 58 0 0 1 138 116" fill="none" stroke={CLAY} strokeWidth={22} />
      <path d="M11 116 A69 69 0 0 1 149 116 M33 116 A47 47 0 0 1 127 116" fill="none" {...s} strokeWidth={3} />
      <path d="M80 116 L60 74" {...s} strokeWidth={5} />
      <circle cx="80" cy="116" r="9" fill={INK} />
      {bolt(70, 124, 0.9)}
    </g>
  ),
  app: () => (
    <g>
      <rect x="44" y="12" width="72" height="136" rx="14" fill={INK} />
      <rect x="51" y="24" width="58" height="112" rx="8" fill={WHITE} />
      <path d="M58 70 V62 M66 70 V54 M74 70 V58 M82 70 V48 M90 70 V60 M98 70 V52" stroke={LEAF} strokeWidth={5} strokeLinecap="round" />
      <rect x="58" y="84" width="44" height="14" rx="7" fill={VOLT} {...s} strokeWidth={2} />
      <circle cx="94" cy="91" r="5" fill={INK} />
      <rect x="58" y="106" width="44" height="14" rx="7" fill={WHITE} {...s} strokeWidth={2} />
      <circle cx="66" cy="113" r="5" fill={INK} />
      <circle cx="132" cy="40" r="12" fill={VOLT} {...s} strokeWidth={3} />
      <path d="M132 34 V46 M126 40 H138" {...s} strokeWidth={3} />
    </g>
  ),
  natet: () => (
    <g>
      <path d="M80 14 L54 146 M80 14 L106 146 M60 114 H100 M64 92 H96 M70 62 H90 M40 46 H120 M46 72 H114" fill="none" {...s} />
      <path d="M40 46 v10 M120 46 v10 M46 72 v10 M114 72 v10" {...s} strokeWidth={3} />
      <circle cx="132" cy="112" r="17" fill={VOLT} {...s} />
      <circle cx="132" cy="112" r="9" fill="none" stroke={INK} strokeWidth={3} />
      <circle cx="26" cy="112" r="15" fill={LEAF} {...s} />
      {bolt(18, 98, 0.85)}
    </g>
  ),
  ved: () => (
    <g>
      <path d="M80 26 Q100 50 92 66 Q108 58 104 40 Q124 62 112 90 Q104 106 80 106 Q56 106 48 90 Q38 66 60 50 Q58 66 70 70 Q60 46 80 26 Z" fill={CLAY} {...s} />
      <path d="M80 62 Q92 76 88 88 Q86 98 80 98 Q72 98 70 90 Q68 78 80 62 Z" fill={VOLT} />
      <rect x="22" y="108" width="116" height="18" rx="9" fill="#c9935f" {...s} transform="rotate(-8 80 117)" />
      <rect x="22" y="108" width="116" height="18" rx="9" fill="#b07b4a" {...s} transform="rotate(8 80 117)" />
      <circle cx="30" cy="125" r="7" fill="#e9cfa7" {...s} strokeWidth={3} />
      <circle cx="130" cy="125" r="7" fill="#e9cfa7" {...s} strokeWidth={3} />
    </g>
  ),
  golvvarme: () => (
    <g>
      <path d="M14 104 L52 76 H148 L110 104 Z" fill={WHITE} {...s} />
      <path d="M14 104 V118 H110 V104 M110 118 L148 90 V76" fill={WHITE} {...s} />
      <path d="M34 98 Q50 86 66 98 T98 98 M48 88 Q64 76 80 88 T112 88" fill="none" stroke={CLAY} strokeWidth={4} strokeLinecap="round" />
      <rect x="112" y="18" width="34" height="46" rx="8" fill={WHITE} {...s} strokeWidth={3} />
      <rect x="118" y="26" width="22" height="14" rx="3" fill={FOREST} />
      <circle cx="129" cy="52" r="5" fill={VOLT} {...s} strokeWidth={2} />
      <path d="M40 60 q6 -8 0 -16 M66 60 q6 -8 0 -16" fill="none" stroke={CLAY} strokeWidth={4} strokeLinecap="round" />
    </g>
  ),
  kurva: () => (
    <g>
      <path d="M26 20 V136 H146" fill="none" {...s} />
      <path d="M30 128 Q80 112 140 34" fill="none" stroke={LEAF} strokeWidth={6} strokeLinecap="round" />
      <path d="M30 136 Q80 124 140 60" fill="none" stroke={INK} strokeWidth={3} strokeDasharray="6 7" opacity={0.4} />
      <circle cx="98" cy="88" r="8" fill={VOLT} {...s} strokeWidth={3} />
      <rect x="48" y="26" width="16" height="54" rx="8" fill={WHITE} {...s} strokeWidth={3} />
      <circle cx="56" cy="80" r="11" fill={CLAY} {...s} strokeWidth={3} />
      <rect x="53" y="46" width="6" height="30" rx="3" fill={CLAY} />
    </g>
  ),
  hus: () => (
    <g>
      <path d="M22 74 L80 26 L138 74" fill="none" {...s} />
      <path d="M34 66 V134 H126 V66" fill={WHITE} {...s} />
      <rect x="68" y="96" width="24" height="38" rx="3" fill={LEAF} {...s} strokeWidth={3} />
      <rect x="46" y="80" width="16" height="16" rx="2" fill={SKY} {...s} strokeWidth={3} />
      <rect x="98" y="80" width="16" height="16" rx="2" fill={SKY} {...s} strokeWidth={3} />
      {bolt(110, 22, 1)}
    </g>
  ),
};

export default function GuideArt({ art, size = 120, className }: { art: ArtKey; size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" className={className} aria-hidden="true">
      <circle cx="80" cy="84" r="70" fill={WHITE} opacity={0.45} />
      {ART[art]()}
    </svg>
  );
}
