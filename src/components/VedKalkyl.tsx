"use client";

import { useState } from "react";

// Ungefärligt energiinnehåll i torr björkved (ca 20 % fukthalt), mitt i de intervall som brukar anges.
const MEASURES = [
  { id: "stjalpt", label: "Stjälpt kubik", kwh: 1300, range: "1 100–1 550" },
  { id: "travad", label: "Travad kubik", kwh: 1800, range: "1 450–2 100" },
] as const;

const STOVES = [
  { id: "kamin", label: "Braskamin", eff: 0.75 },
  { id: "insats", label: "Insats i öppen spis", eff: 0.6 },
  { id: "panna", label: "Ny vedpanna med ackumulatortank", eff: 0.85 },
  { id: "gammalpanna", label: "Äldre vedpanna", eff: 0.55 },
  { id: "oppen", label: "Öppen spis utan insats", eff: 0.1 },
] as const;

const krKwh = (n: number) => `${n.toLocaleString("sv-SE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} kr`;

export default function VedKalkyl() {
  const [price, setPrice] = useState(1000);
  const [measure, setMeasure] = useState<(typeof MEASURES)[number]["id"]>("stjalpt");
  const [stove, setStove] = useState<(typeof STOVES)[number]["id"]>("kamin");
  const [el, setEl] = useState(2.5);

  const m = MEASURES.find((x) => x.id === measure)!;
  const s = STOVES.find((x) => x.id === stove)!;
  const heat = m.kwh * s.eff;
  const perKwh = price / heat;

  const compare = [
    { label: "Ved i din eldstad", value: perKwh, highlight: true },
    { label: "Direktverkande el eller elpanna", value: el },
    { label: "Värmepump som ger 3 kWh värme per kWh el", value: el / 3 },
  ].sort((a, b) => a.value - b.value);

  return (
    <div className="not-prose my-10 rounded-3xl bg-white p-6 sm:p-8">
      <p className="text-sm font-semibold text-leaf">Räkna själv</p>
      <h3 className="mt-1 text-2xl font-extrabold text-ink">Vad kostar en kWh värme från veden?</h3>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="vedpris" className="flex items-baseline justify-between font-semibold text-ink">
            Pris per kubik <span className="tabular-nums">{price.toLocaleString("sv-SE")} kr</span>
          </label>
          <input
            id="vedpris"
            type="range"
            min={400}
            max={2000}
            step={50}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-3 w-full accent-leaf"
          />
          <fieldset className="mt-5">
            <legend className="font-semibold text-ink">Vilket mått gäller priset?</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {MEASURES.map((x) => (
                <button
                  key={x.id}
                  type="button"
                  aria-pressed={measure === x.id}
                  onClick={() => setMeasure(x.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${measure === x.id ? "bg-forest text-white" : "bg-sand text-ink hover:bg-mint"}`}
                >
                  {x.label}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
        <div>
          <label htmlFor="eldstad" className="font-semibold text-ink">
            Eldstad
          </label>
          <select
            id="eldstad"
            value={stove}
            onChange={(e) => setStove(e.target.value as typeof stove)}
            className="mt-2 w-full rounded-xl border border-sand-dark bg-white px-3 py-2.5 text-ink"
          >
            {STOVES.map((x) => (
              <option key={x.id} value={x.id}>
                {x.label} (ca {Math.round(x.eff * 100)} %)
              </option>
            ))}
          </select>
          <label htmlFor="elpris-total" className="mt-5 flex items-baseline justify-between font-semibold text-ink">
            Ditt totala elpris <span className="tabular-nums">{el.toLocaleString("sv-SE", { minimumFractionDigits: 2 })} kr/kWh</span>
          </label>
          <p className="text-sm text-ink/60">Elpris, elnät, energiskatt och moms per kWh.</p>
          <input
            id="elpris-total"
            type="range"
            min={0.5}
            max={5}
            step={0.1}
            value={el}
            onChange={(e) => setEl(Number(e.target.value))}
            className="mt-3 w-full accent-leaf"
          />
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-forest p-6 text-white">
        <p className="text-white/70">
          En {m.label.toLowerCase()} torr björk innehåller ungefär {m.kwh.toLocaleString("sv-SE")} kWh ({m.range} kWh). I en{" "}
          {s.label.toLowerCase()} blir ungefär {Math.round(heat).toLocaleString("sv-SE")} kWh till värme i huset.
        </p>
        <p className="mt-3 text-3xl font-extrabold">
          <span className="text-volt">{krKwh(perKwh)}</span> per kWh värme
        </p>
      </div>

      <ul className="mt-6 space-y-2">
        {compare.map((c) => (
          <li
            key={c.label}
            className={`flex items-baseline justify-between gap-4 rounded-xl px-4 py-3 ${c.highlight ? "bg-mint font-bold text-ink" : "bg-sand text-ink/80"}`}
          >
            <span>{c.label}</span>
            <span className="tabular-nums">{krKwh(c.value)}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-ink/60">
        Uppskattning. Det verkliga utfallet beror på hur torr veden är, hur du eldar, hur mycket ved som ryms i en kubik
        och hur väl värmen sprids i huset. Din egen tid för att bära, hugga och elda ingår inte.
      </p>
    </div>
  );
}
