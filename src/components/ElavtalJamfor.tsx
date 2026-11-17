"use client";

import { useState } from "react";
import data from "../../data/elavtal.json";
import { REFERRALS } from "@/lib/referrals";

type Provider = (typeof data.providers)[number] & { monthlyFeeNote?: string; variableNote?: string };
const PROVIDERS = data.providers as Provider[];

const kr = (n: number) => `${(Math.round(n / 10) * 10).toLocaleString("sv-SE")} kr`;
const ore = (n: number) => n.toLocaleString("sv-SE", { maximumFractionDigits: 2 });

const FEATURES: [keyof Provider["features"], string][] = [
  ["elbil", "Elbil"],
  ["varme", "Värme"],
  ["batteri", "Hembatteri"],
  ["stodtjanster", "Betalt för att hjälpa elnätet"],
  ["matare", "Realtidsmätning"],
];

export default function ElavtalJamfor() {
  const [kwh, setKwh] = useState(20000);
  const priced = PROVIDERS.filter((p) => p.monthlyFee !== null && p.markup !== null)
    .map((p) => ({ p, year: p.monthlyFee! * 12 + (kwh * p.markup!) / 100 }))
    .sort((a, b) => a.year - b.year);
  const unpriced = PROVIDERS.filter((p) => p.monthlyFee === null || p.markup === null);

  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-extrabold text-ink">Vad kostar elbolaget per år?</h2>
        <p className="mt-2 text-ink/70">
          Elpriset från elbörsen är detsamma hos alla. Det som skiljer är månadsavgiften och påslaget. Dra i reglaget
          för din årsförbrukning – den står på elfakturan.
        </p>
        <label htmlFor="kwh" className="mt-6 flex items-baseline justify-between font-semibold text-ink">
          Årsförbrukning <span className="tabular-nums">{kwh.toLocaleString("sv-SE")} kWh</span>
        </label>
        <input
          id="kwh"
          type="range"
          min={2000}
          max={35000}
          step={1000}
          value={kwh}
          onChange={(e) => setKwh(Number(e.target.value))}
          className="mt-3 w-full accent-leaf"
        />
        <div className="table-wrap mt-6">
          <table className="w-full text-left text-[0.95rem]">
            <thead>
              <tr className="border-b border-sand-dark text-ink/60">
                <th className="py-2 pr-4 font-semibold">Elbolag</th>
                <th className="py-2 pr-4 font-semibold">Månadsavgift</th>
                <th className="py-2 pr-4 font-semibold">Fast påslag</th>
                <th className="py-2 pr-4 font-semibold">Per år*</th>
              </tr>
            </thead>
            <tbody>
              {priced.map(({ p, year }, i) => (
                <tr key={p.id} className="border-b border-sand-dark/60 align-top">
                  <td className="py-3 pr-4">
                    <a href={p.url} target="_blank" rel="noopener" className="font-bold text-ink underline decoration-leaf/40 underline-offset-[3px]">
                      {p.name}
                    </a>
                    {i === 0 && <span className="ml-2 rounded-full bg-volt px-2 py-0.5 text-xs font-semibold text-ink">Lägst</span>}
                    {p.campaign && <p className="mt-1 text-sm text-leaf-dark">{p.campaign}</p>}
                  </td>
                  <td className="py-3 pr-4 tabular-nums">
                    {p.monthlyFee} kr
                    {p.monthlyFeeNote && <p className="text-xs text-ink/60">{p.monthlyFeeNote}</p>}
                  </td>
                  <td className="py-3 pr-4 tabular-nums">
                    {ore(p.markup!)} öre/kWh
                    {p.markupNote && <p className="text-xs text-ink/60 max-w-[16rem]">{p.markupNote}</p>}
                  </td>
                  <td className="py-3 pr-4 font-bold tabular-nums text-ink">{kr(year)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink/60">
          * Månadsavgift och fast påslag, inklusive moms, utan kampanjer. Rörliga kostnader för inköp (handel, balans,
          elcertifikat) tillkommer hos alla, men bara Tibber anger dem i förväg: cirka {ore(PROVIDERS[0].variable ?? 0)}{" "}
          öre/kWh inklusive moms. Elpriset, elnätet och energiskatten är desamma oavsett elbolag och ingår inte.
        </p>
        {unpriced.length > 0 && (
          <p className="mt-2 text-sm text-ink/60">
            Har också kvartspris, men visar inte avgift och påslag öppet på sin sida:{" "}
            {unpriced.map((p, i) => (
              <span key={p.id}>
                {i > 0 && ", "}
                <a href={p.url} target="_blank" rel="noopener" className="underline">
                  {p.name}
                </a>
              </span>
            ))}
            .
          </p>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-extrabold text-ink">Vad kan elbolaget styra åt dig?</h2>
        <p className="mt-2 text-ink/70 max-w-3xl">
          Med kvartspris tjänar du mest när förbrukningen flyttas automatiskt. Här är det som elbolagen själva säger att
          de erbjuder. Ett streck betyder att vi inte hittade det på bolagets sida – inte att det säkert saknas.
        </p>
        <div className="table-wrap mt-6 rounded-3xl bg-white p-2 sm:p-4">
          <table className="w-full text-left text-[0.95rem]">
            <thead>
              <tr className="border-b border-sand-dark text-ink/60">
                <th className="py-2 px-3 font-semibold">Elbolag</th>
                {FEATURES.map(([k, label]) => (
                  <th key={k} className="py-2 px-3 font-semibold">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PROVIDERS.map((p) => (
                <tr key={p.id} className="border-b border-sand-dark/60 align-top last:border-0">
                  <td className="py-3 px-3 font-bold text-ink">{p.name}</td>
                  {FEATURES.map(([k]) => {
                    const v = (p.features as Record<string, string>)[k];
                    return (
                      <td key={k} className="py-3 px-3 text-ink/80">
                        {v ? (
                          <span className="flex gap-2">
                            <span className="mt-0.5 font-bold text-leaf" aria-hidden="true">✓</span>
                            {v}
                          </span>
                        ) : (
                          <span className="text-ink/30" aria-label="Inte angivet">–</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <aside className="rounded-3xl bg-forest p-6 sm:p-8 text-white">
        <p className="text-sm font-semibold text-volt">Vårt val för smart styrning</p>
        <h2 className="mt-2 text-2xl font-extrabold">Tibber – inte billigast, men gör mest</h2>
        <p className="mt-3 text-white/80 max-w-3xl">
          Tibber är inte alltid billigast på avgift och påslag. Men av det elbolagen själva visar upp är det Tibber som
          styr flest saker: elbilen, värmepumpen, elementen och hembatteriet, plus Grid Rewards som betalar när elbilen eller batteriet
          hjälper elnätet. Flyttar det fler kilowattimmar till billiga kvartar kan det väga upp några hundralappar i
          avgift. Har du inget att styra är ett billigare avtal ofta bättre.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a href={REFERRALS.tibber.url} target="_blank" rel="sponsored noopener" className="btn-volt">
            Teckna Tibber via inbjudan <span aria-hidden="true">→</span>
          </a>
          <p className="text-sm text-white/70 max-w-md">
            Du får {REFERRALS.tibber.bonus}. Smartstyra får samma bonus, och det påverkar inte jämförelsen.
          </p>
        </div>
      </aside>
    </div>
  );
}
