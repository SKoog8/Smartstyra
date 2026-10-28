"use client";

import { useState } from "react";

// Energimyndighetens tumregel: en grad lägre inomhustemperatur ger ungefär fem procent lägre uppvärmningskostnad.
const PER_DEGREE = 0.05;
const HOURS_PER_YEAR = 8760;

// Avrundat till tiotal kronor – mer exakt än så blir inte en uppskattning.
const kr = (n: number) => `${(Math.round(n / 10) * 10).toLocaleString("sv-SE")} kr`;
const num = (n: number, digits = 0) =>
  n.toLocaleString("sv-SE", { minimumFractionDigits: digits, maximumFractionDigits: digits });

interface SliderProps {
  id: string;
  label: string;
  hint?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string | ((v: number) => string);
  digits?: number;
  onChange: (v: number) => void;
}

function Slider({ id, label, hint, value, min, max, step, unit, digits = 0, onChange }: SliderProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="font-semibold text-ink">
          {label}
        </label>
        <span className="tabular-nums font-semibold text-ink whitespace-nowrap">
          {num(value, digits)} {typeof unit === "string" ? unit : unit(value)}
        </span>
      </div>
      {hint && <p className="text-sm text-ink/60 mt-0.5">{hint}</p>}
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-leaf"
      />
    </div>
  );
}

export default function SavingsCalculator() {
  const [usage, setUsage] = useState(20000);
  const [heatShare, setHeatShare] = useState(60);
  const [price, setPrice] = useState(1.8);
  const [degrees, setDegrees] = useState(1);
  const [shiftKwh, setShiftKwh] = useState(8);
  const [spread, setSpread] = useState(50);
  const [standby, setStandby] = useState(40);

  const rows = [
    {
      label: "Sänkt inomhustemperatur",
      value: usage * (heatShare / 100) * PER_DEGREE * degrees * price,
    },
    {
      label: "Flyttad förbrukning",
      value: shiftKwh * 365 * (spread / 100),
    },
    {
      label: "Mindre standby",
      value: ((standby * HOURS_PER_YEAR) / 1000) * price,
    },
  ];
  const total = rows.reduce((sum, r) => sum + r.value, 0);
  const max = Math.max(...rows.map((r) => r.value), 1);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_24rem] items-start">
      <div className="bg-white rounded-3xl p-6 sm:p-8 space-y-10">
        <section className="space-y-6">
          <h2 className="text-xl font-extrabold text-ink">Ditt hus</h2>
          <Slider
            id="usage"
            label="Elförbrukning per år"
            hint="Står på din elräkning eller i elhandlarens app."
            value={usage}
            min={3000}
            max={40000}
            step={500}
            unit="kWh"
            onChange={setUsage}
          />
          <Slider
            id="heat"
            label="Andel som går till uppvärmning"
            hint="I ett eluppvärmt hus ofta 50–70 procent, inklusive varmvatten."
            value={heatShare}
            min={0}
            max={80}
            step={5}
            unit="%"
            onChange={setHeatShare}
          />
          <Slider
            id="price"
            label="Totalt elpris"
            hint="Elpris, elnät, energiskatt och moms per kWh. Dela fakturornas totalsumma med antalet kWh."
            value={price}
            min={0.5}
            max={4}
            step={0.05}
            unit="kr/kWh"
            digits={2}
            onChange={setPrice}
          />
        </section>

        <section className="space-y-6">
          <h2 className="text-xl font-extrabold text-ink">Det du gör</h2>
          <Slider
            id="degrees"
            label="Sänk inomhustemperaturen"
            hint="I snitt över dygnet, till exempel med nattsänkning och svalare gästrum."
            value={degrees}
            min={0}
            max={3}
            step={0.5}
            unit={(v) => (v === 1 ? "grad" : "grader")}
            digits={Number.isInteger(degrees) ? 0 : 1}
            onChange={setDegrees}
          />
          <Slider
            id="shift"
            label="Förbrukning du flyttar till billiga timmar"
            hint="Elbilsladdning, varmvatten, disk och tvätt. En elbil laddar ofta 5–15 kWh per dygn."
            value={shiftKwh}
            min={0}
            max={30}
            step={1}
            unit="kWh/dygn"
            onChange={setShiftKwh}
          />
          <Slider
            id="spread"
            label="Prisskillnad mellan dyra och billiga timmar"
            hint="Inklusive moms. Kräver ett elavtal med timpris. Ofta 30–100 öre i södra Sverige, mindre i norr."
            value={spread}
            min={0}
            max={150}
            step={5}
            unit="öre/kWh"
            onChange={setSpread}
          />
          <Slider
            id="standby"
            label="Standby du stänger av"
            hint="Tv-bänk, datorhörna och laddare drar ofta 20–80 watt tillsammans."
            value={standby}
            min={0}
            max={200}
            step={5}
            unit="W"
            onChange={setStandby}
          />
        </section>
      </div>

      <div className="bg-forest text-white rounded-3xl p-6 sm:p-8 lg:sticky lg:top-6" aria-live="polite">
        <p className="text-white/70 font-medium">Du kan spara ungefär</p>
        <p className="mt-1 text-5xl sm:text-6xl font-extrabold tracking-tight text-volt tabular-nums">{kr(total)}</p>
        <p className="text-white/70">per år</p>

        <ul className="mt-8 space-y-5">
          {rows.map((r) => (
            <li key={r.label}>
              <div className="flex justify-between gap-4 text-[0.95rem]">
                <span>{r.label}</span>
                <span className="tabular-nums font-semibold">{kr(r.value)}</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-white/10">
                <div className="h-2 rounded-full bg-volt transition-[width]" style={{ width: `${(r.value / max) * 100}%` }} />
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-white/60 leading-relaxed">
          En uppskattning, inte ett löfte. Temperatursänkningen bygger på tumregeln att en grad ger ungefär fem procent
          lägre uppvärmningskostnad. För flyttad förbrukning räknas bara prisskillnaden, eftersom nätavgift och
          energiskatt är desamma oavsett när du använder elen.
        </p>
      </div>

      {/* På mobil hamnar resultatet under reglagen, så summan visas också i en list längst ner. */}
      <div className="lg:hidden fixed inset-x-3 bottom-3 z-10 flex items-center justify-between rounded-full bg-forest px-5 py-3 text-white shadow-lg">
        <span className="text-sm text-white/75">Besparing per år</span>
        <span className="text-xl font-extrabold text-volt tabular-nums">{kr(total)}</span>
      </div>
    </div>
  );
}
