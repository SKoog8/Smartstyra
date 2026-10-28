// Illustration på startsidan: ett påhittat men typiskt vinterdygn med timpris,
// där de billigaste timmarna är markerade. Det är inte riktiga priser.
const PRICES = [
  42, 38, 31, 27, 26, 30, 58, 112, 134, 96, 74, 66, 61, 63, 70, 88, 121, 146, 128, 97, 79, 64, 55, 47,
];
const CHEAPEST = new Set(
  PRICES.map((p, h) => [p, h])
    .sort((a, b) => a[0] - b[0])
    .slice(0, 5)
    .map(([, h]) => h)
);
const MAX = Math.max(...PRICES);

export default function PriceDay() {
  return (
    <figure className="bg-forest-light/60 rounded-3xl p-5 sm:p-7 ring-1 ring-white/10">
      <figcaption className="flex items-baseline justify-between gap-4 text-sm">
        <span className="font-semibold text-white">Elpris under ett vinterdygn</span>
        <span className="text-white/60">Exempel</span>
      </figcaption>
      <div className="mt-6 flex h-44 sm:h-52 items-end gap-[3px] sm:gap-1" aria-hidden="true">
        {PRICES.map((p, h) => (
          <div
            key={h}
            className={`flex-1 rounded-t-[3px] ${CHEAPEST.has(h) ? "bg-volt" : "bg-white/25"}`}
            style={{ height: `${(p / MAX) * 100}%` }}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-xs text-white/50 tabular-nums" aria-hidden="true">
        <span>00</span>
        <span>06</span>
        <span>12</span>
        <span>18</span>
        <span>24</span>
      </div>
      <p className="mt-5 flex items-center gap-2.5 text-sm text-white/80">
        <span className="h-2.5 w-2.5 rounded-sm bg-volt" aria-hidden="true" />
        Billigaste timmarna – här ska diskmaskinen, varmvattnet och elbilen gå.
      </p>
    </figure>
  );
}
