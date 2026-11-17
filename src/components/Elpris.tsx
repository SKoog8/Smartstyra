"use client";

import { useEffect, useMemo, useState } from "react";
import { AREAS, type AreaId, type Day, type ElprisData } from "@/lib/elpris";
import week47 from "../../data/veckoprognos.json";
import { REFERRALS } from "@/lib/referrals";

type WeekOutlook = typeof week47;

const WEEKDAYS = ["måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag", "söndag"];
const STORAGE_KEY = "smartstyra-elomrade";

const swedishNow = () => {
  const parts = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/Stockholm",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return { date: `${get("year")}-${get("month")}-${get("day")}`, hour: Number(get("hour")) };
};

const weekdayOf = (date: string) => (new Date(`${date}T12:00:00Z`).getUTCDay() + 6) % 7;
const pad = (h: number) => String(h % 24).padStart(2, "0");
const fmt = (ore: number) => Math.round(ore).toLocaleString("sv-SE");

/** Billigaste sammanhängande fönster med `len` timmar. */
function cheapestWindow(points: { label: string; day: string; hour: number; price: number }[], len: number) {
  let best: { start: number; avg: number } | null = null;
  for (let i = 0; i + len <= points.length; i++) {
    const avg = points.slice(i, i + len).reduce((a, p) => a + p.price, 0) / len;
    if (!best || avg < best.avg) best = { start: i, avg };
  }
  if (!best) return null;
  const first = points[best.start];
  const last = points[best.start + len - 1];
  return { first, last, avg: best.avg };
}

function cheapestHours(hours: (number | null)[], n: number) {
  return new Set(
    hours
      .map((p, h) => [p, h] as const)
      .filter((x): x is readonly [number, number] => x[0] !== null)
      .sort((a, b) => a[0] - b[0])
      .slice(0, n)
      .map(([, h]) => h)
  );
}

function PriceChart({ day, vat, nowHour, title }: { day: Day; vat: number; nowHour?: number; title: string }) {
  const [hover, setHover] = useState<number | null>(null);
  const cheap = cheapestHours(day.hours, 4);
  const vals = day.hours.filter((v): v is number => v !== null);
  const max = Math.max(...vals.map((v) => Math.max(v, 0)), 1);
  const min = Math.min(...vals);
  const maxH = day.hours.indexOf(Math.max(...vals));
  const minH = day.hours.indexOf(min);
  const shown = hover ?? nowHour ?? null;

  return (
    <figure className="rounded-3xl bg-white p-5 sm:p-7">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <span className="text-lg font-extrabold text-ink">{title}</span>
        <span className="text-sm text-ink/60 tabular-nums">
          Snitt {fmt(day.avg * vat)} öre · lägst {fmt(min * vat)} kl. {pad(minH)} · högst {fmt(Math.max(...vals) * vat)} kl.{" "}
          {pad(maxH)}
        </span>
      </figcaption>
      <p className="mt-3 h-6 text-sm text-ink/80 tabular-nums" aria-live="polite">
        {shown !== null && day.hours[shown] !== null && (
          <>
            <strong className="text-ink">
              {pad(shown)}–{pad(shown + 1)}
            </strong>{" "}
            {fmt(day.hours[shown]! * vat)} öre/kWh
            {hover === null && nowHour !== undefined && " just nu"}
          </>
        )}
      </p>
      <div className="mt-2 flex h-44 sm:h-56 items-end gap-[2px] sm:gap-[3px]" onMouseLeave={() => setHover(null)}>
        {day.hours.map((p, h) => (
          <button
            key={h}
            type="button"
            aria-label={p === null ? `${pad(h)}: pris saknas` : `${pad(h)}–${pad(h + 1)}: ${fmt(p * vat)} öre per kWh`}
            onMouseEnter={() => setHover(h)}
            onFocus={() => setHover(h)}
            onClick={() => setHover(h)}
            className="group flex h-full flex-1 items-end"
          >
            <span
              className={`block w-full rounded-t-[4px] transition-opacity ${
                cheap.has(h) ? "bg-leaf" : "bg-ink/20"
              } ${h === nowHour ? "ring-2 ring-ink ring-offset-1" : ""} ${hover === h ? "opacity-70" : ""}`}
              style={{ height: `${Math.max(((p ?? 0) / max) * 100, 2)}%` }}
            />
          </button>
        ))}
      </div>
      <div className="mt-2 flex justify-between text-xs text-ink/50 tabular-nums" aria-hidden="true">
        <span>00</span>
        <span>06</span>
        <span>12</span>
        <span>18</span>
        <span>24</span>
      </div>
      <p className="mt-4 flex items-center gap-2.5 text-sm text-ink/70">
        <span className="h-2.5 w-2.5 rounded-sm bg-leaf" aria-hidden="true" />
        De fyra billigaste timmarna: {[...cheap].sort((a, b) => a - b).map((h) => `${pad(h)}–${pad(h + 1)}`).join(", ")}
      </p>
    </figure>
  );
}

export default function Elpris({ outlook }: { outlook: WeekOutlook | null }) {
  const [area, setArea] = useState<AreaId>("SE3");
  const [vatOn, setVatOn] = useState(true);
  const [data, setData] = useState<ElprisData | null>(null);
  const [error, setError] = useState(false);
  const [len, setLen] = useState(4);
  const [now, setNow] = useState<{ date: string; hour: number } | null>(null);

  useEffect(() => {
    setNow(swedishNow());
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && AREAS.some((a) => a.id === saved)) setArea(saved as AreaId);
    } catch {}
  }, []);

  useEffect(() => {
    let cancelled = false;
    setData(null);
    setError(false);
    fetch(`/api/elpris/${area}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d: ElprisData) => !cancelled && setData(d))
      .catch(() => !cancelled && setError(true));
    return () => {
      cancelled = true;
    };
  }, [area]);

  const choose = (a: AreaId) => {
    setArea(a);
    try {
      localStorage.setItem(STORAGE_KEY, a);
    } catch {}
  };

  const vat = vatOn ? 1.25 : 1;

  // Svaret kan vara cachat från i går kväll – välj dagarna efter dagens datum, inte efter fältnamnen.
  const { today, tomorrow } = useMemo(() => {
    if (!data || !now) return { today: null, tomorrow: null };
    const days = [data.today, data.tomorrow].filter((d): d is Day => d !== null);
    const t = days.find((d) => d.date === now.date) ?? null;
    const next = days.find((d) => d.date > now.date) ?? null;
    return { today: t, tomorrow: next };
  }, [data, now]);

  const slot = useMemo(() => {
    if (!now) return null;
    const points: { label: string; day: string; hour: number; price: number }[] = [];
    for (const [d, label] of [
      [today, "i dag"],
      [tomorrow, "i morgon"],
    ] as const) {
      if (!d) continue;
      d.hours.forEach((p, h) => {
        if (p !== null && (d !== today || h >= now.hour)) points.push({ label, day: d.date, hour: h, price: p });
      });
    }
    return cheapestWindow(points, len);
  }, [today, tomorrow, now, len]);

  const week = useMemo(() => {
    if (!data || !now) return [];
    const start = weekdayOf(now.date);
    return Array.from({ length: 7 }, (_, i) => data.pattern[(start + i) % 7]).filter((p) => p && p.avg > 0);
  }, [data, now]);

  const areaInfo = AREAS.find((a) => a.id === area)!;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div role="radiogroup" aria-label="Elområde" className="flex flex-wrap gap-2">
          {AREAS.map((a) => (
            <button
              key={a.id}
              type="button"
              role="radio"
              aria-checked={area === a.id}
              onClick={() => choose(a.id)}
              className={`rounded-full px-4 py-2 font-semibold transition-colors ${
                area === a.id ? "bg-forest text-white" : "bg-white text-ink hover:bg-mint"
              }`}
            >
              {a.id} <span className={`font-normal ${area === a.id ? "text-white/70" : "text-ink/60"}`}>{a.city}</span>
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 text-sm font-medium text-ink/80">
          <input type="checkbox" checked={vatOn} onChange={(e) => setVatOn(e.target.checked)} className="h-4 w-4 accent-leaf" />
          Visa inklusive moms
        </label>
      </div>

      <p className="text-sm text-ink/60">
        {areaInfo.id} – {areaInfo.name}. Spotpris från elbörsen i öre/kWh{vatOn ? " inklusive moms" : " exklusive moms"}. Elnät,
        energiskatt och elhandlarens påslag tillkommer.
      </p>

      {error && (
        <p className="rounded-3xl bg-clay p-6 text-ink">Elpriserna gick inte att hämta just nu. Försök igen om en stund.</p>
      )}
      {!data && !error && <p className="rounded-3xl bg-white p-6 text-ink/60">Hämtar elpriserna …</p>}

      {data && (
        <>
          {today ? (
            <PriceChart day={today} vat={vat} nowHour={now?.hour} title={`I dag, ${WEEKDAYS[weekdayOf(today.date)]}`} />
          ) : (
            <p className="rounded-3xl bg-white p-6 text-ink/70">Dagens priser saknas just nu.</p>
          )}
          {tomorrow ? (
            <PriceChart day={tomorrow} vat={vat} title={`I morgon, ${WEEKDAYS[weekdayOf(tomorrow.date)]}`} />
          ) : (
            <p className="rounded-3xl bg-white p-6 text-ink/70">
              Morgondagens priser publiceras av elbörsen strax efter lunch, oftast runt klockan 13. Titta in igen i
              eftermiddag.
            </p>
          )}

          <section className="rounded-3xl bg-forest p-6 sm:p-8 text-white">
            <h2 className="text-2xl font-extrabold">När ska elbilen laddas?</h2>
            <p className="mt-2 text-white/75">
              Välj hur många timmar laddningen behöver, så letar vi upp det billigaste sammanhängande fönstret bland de
              priser som är satta.
            </p>
            <label htmlFor="laddtid" className="mt-5 flex items-baseline justify-between font-semibold">
              Laddtid <span className="tabular-nums">{len} timmar</span>
            </label>
            <input
              id="laddtid"
              type="range"
              min={1}
              max={10}
              value={len}
              onChange={(e) => setLen(Number(e.target.value))}
              className="mt-3 w-full accent-volt"
            />
            <p className="mt-5 text-lg" aria-live="polite">
              {slot ? (
                <>
                  Billigast:{" "}
                  <strong className="text-volt">
                    {slot.first.label} kl. {pad(slot.first.hour)} till {slot.last.label === slot.first.label ? "" : `${slot.last.label} `}
                    kl. {pad(slot.last.hour + 1)}
                  </strong>
                  , i snitt {fmt(slot.avg * vat)} öre/kWh.
                </>
              ) : (
                "Det finns inte tillräckligt många satta timmar kvar för den laddtiden. Prova kortare tid eller titta in efter kl. 13."
              )}
            </p>
            <p className="mt-3 text-sm text-white/60">
              Samma sak gäller varmvattenberedaren, disken och tvätten. Har ditt nätbolag effektavgift – sprid ut
              förbrukningen i stället för att lägga allt på samma timme.
            </p>
          </section>

          {outlook && (
            <section className="rounded-3xl bg-mint p-6 sm:p-8">
              <p className="text-sm font-semibold text-ink/60">
                Vecka {outlook.week} · {Number(outlook.from.slice(8))}–{Number(outlook.to.slice(8))}{" "}
                {new Date(`${outlook.to}T12:00:00Z`).toLocaleDateString("sv-SE", { month: "long" })}
              </p>
              <h2 className="mt-1 text-2xl font-extrabold text-ink">Veckans prognos från Tibber</h2>
              <p className="mt-3 text-lg text-ink">
                Tibber räknar med ett snitt runt{" "}
                <strong>
                  {fmt(outlook.areas[area].avg * vat)} öre/kWh i {area}
                </strong>{" "}
                den här veckan{vatOn ? " (omräknat inklusive moms)" : " (exklusive moms)"}.
              </p>
              <p className="mt-2 text-ink/75">{outlook.areas[area].note}</p>
              <p className="mt-3 text-ink/75">{outlook.summary}</p>
              <p className="mt-4 text-sm text-ink/60">
                Sammanfattat med egna ord från{" "}
                <a href={outlook.source} className="underline">
                  Tibbers elprisprognos vecka {outlook.week}
                </a>
                . Det är en bedömning, inte satta priser.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-ink/10 pt-5">
                <a href={REFERRALS.tibber.url} target="_blank" rel="sponsored noopener" className="btn-leaf py-2.5 text-[0.95rem]">
                  Teckna Tibber via inbjudan <span aria-hidden="true">→</span>
                </a>
                <p className="text-sm text-ink/70 max-w-md">
                  Du får {REFERRALS.tibber.bonus}. Smartstyra får samma bonus, och det påverkar inte vad vi skriver.{" "}
                  <a href="/om#finansiering" className="underline">
                    Läs mer
                  </a>
                </p>
              </div>
            </section>
          )}

          {week.length > 0 && (
            <section>
              <h2 className="text-2xl font-extrabold text-ink">Så brukar veckan se ut</h2>
              <p className="mt-2 text-ink/70">
                Snittet för varje veckodag de senaste {Math.round(data.patternDays / 7)} veckorna i {area}. Det här är
                historik, inte en prognos – vädret och kärnkraften kan ändra bilden snabbt. Men mönstret brukar hålla:
                natten är billigast och morgon och kväll dyrast.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {week.map((p, i) => {
                  const best = cheapestWindow(
                    p.hours.map((price, hour) => ({ label: "", day: "", hour, price })),
                    3
                  );
                  return (
                    <li key={p.weekday} className="rounded-3xl bg-white p-5">
                      <p className="text-sm font-semibold text-ink/60">{i === 0 ? "I dag" : i === 1 ? "I morgon" : ""}</p>
                      <p className="text-lg font-extrabold capitalize text-ink">{WEEKDAYS[p.weekday]}</p>
                      <p className="mt-2 tabular-nums text-ink/80">
                        Snitt <strong className="text-ink">{fmt(p.avg * vat)} öre</strong>
                      </p>
                      {best && (
                        <p className="mt-1 text-sm text-ink/70 tabular-nums">
                          Brukar vara billigast kl. {pad(best.first.hour)}–{pad(best.last.hour + 1)}
                        </p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          {data.forecast && data.forecast.length > 0 && (
            <section className="rounded-3xl border-2 border-dashed border-sand-dark p-6 sm:p-8">
              <p className="inline-flex rounded-full bg-butter px-3 py-1 text-sm font-semibold text-ink">Experimentell prognos</p>
              <h2 className="mt-3 text-2xl font-extrabold text-ink">Prognos för de kommande dagarna</h2>
              <p className="mt-2 text-ink/70">
                Prognosen kommer från <a href="https://unagieel.net" className="underline">Unagi – unagieel.net</a>, som
                räknar fram den med maskininlärning. Den är osäker: verkligt pris hamnar ofta utanför spannet. Använd den
                för att se åt vilket håll det lutar, inte för att planera exakt.
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {data.forecast.map((f) => (
                  <li key={f.date} className="rounded-2xl bg-white p-4 tabular-nums">
                    <p className="font-extrabold capitalize text-ink">
                      {WEEKDAYS[weekdayOf(f.date)]} {Number(f.date.slice(8))}/{Number(f.date.slice(5, 7))}
                    </p>
                    <p className="mt-1 text-ink/80">Runt {fmt(f.avg * vat)} öre i snitt</p>
                    <p className="text-sm text-ink/60">
                      Timpriser troligen {fmt(f.low * vat)}–{fmt(f.high * vat)} öre
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <p className="text-sm text-ink/60">
            Elpriser tillhandahålls av <a href="https://www.elprisetjustnu.se" className="underline">Elpriset just nu.se</a>.
            Uppdateras var 15:e minut.
          </p>
        </>
      )}
    </div>
  );
}
