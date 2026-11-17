// Elpriser per elområde. Riktiga spotpriser kommer från elprisetjustnu.se (öppet API, källan anges på sidan).
// Den experimentella veckoprognosen kommer från unagieel.net och är avstängd tills vi har tillstånd att använda
// den kommersiellt (deras villkor: fritt för privat, icke-kommersiellt bruk). Slå på med FORECAST_ENABLED.

export const AREAS = [
  { id: "SE1", name: "Norra Sverige", city: "Luleå" },
  { id: "SE2", name: "Norra Mellansverige", city: "Sundsvall" },
  { id: "SE3", name: "Södra Mellansverige", city: "Stockholm" },
  { id: "SE4", name: "Södra Sverige", city: "Malmö" },
] as const;

export type AreaId = (typeof AREAS)[number]["id"];
export const isArea = (a: string): a is AreaId => AREAS.some((x) => x.id === a);

export const FORECAST_ENABLED = false;

/** Ett dygns priser per timme i öre/kWh, exklusive moms. Ett tal per timme (00–23); null om timmen saknas. */
export interface Day {
  date: string;
  hours: (number | null)[];
  avg: number;
}

export interface WeekdayPattern {
  /** 0 = måndag … 6 = söndag */
  weekday: number;
  avg: number;
  hours: number[];
}

export interface ForecastDay {
  date: string;
  avg: number;
  low: number;
  high: number;
  cheapest: number[];
}

export interface ElprisData {
  area: AreaId;
  fetchedAt: string;
  today: Day | null;
  tomorrow: Day | null;
  pattern: WeekdayPattern[];
  patternDays: number;
  forecast: ForecastDay[] | null;
}

const TZ = "Europe/Stockholm";

/** Datum (ÅÅÅÅ-MM-DD) i svensk tid, förskjutet ett antal dygn från nu. */
export function swedishDate(offsetDays = 0): string {
  const d = new Date(Date.now() + offsetDays * 86_400_000);
  return new Intl.DateTimeFormat("sv-SE", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" }).format(d);
}

function hourOf(iso: string): number {
  return Number(new Intl.DateTimeFormat("sv-SE", { timeZone: TZ, hour: "2-digit", hourCycle: "h23" }).format(new Date(iso)));
}

type Raw = { SEK_per_kWh: number; time_start: string }[];

async function fetchDay(area: AreaId, date: string, revalidate: number): Promise<Day | null> {
  const [y, m, d] = date.split("-");
  try {
    const res = await fetch(`https://www.elprisetjustnu.se/api/v1/prices/${y}/${m}-${d}_${area}.json`, {
      next: { revalidate },
    });
    if (!res.ok) return null;
    const raw = (await res.json()) as Raw;
    if (!Array.isArray(raw) || raw.length === 0) return null;
    // Priserna sätts per kvart sedan oktober 2025 – snittet per timme räcker för att planera.
    const sum = Array(24).fill(0);
    const n = Array(24).fill(0);
    for (const p of raw) {
      const h = hourOf(p.time_start);
      sum[h] += p.SEK_per_kWh * 100;
      n[h] += 1;
    }
    const hours = sum.map((s, h) => (n[h] ? s / n[h] : null));
    const vals = hours.filter((v): v is number => v !== null);
    return { date, hours, avg: vals.reduce((a, b) => a + b, 0) / vals.length };
  } catch {
    return null;
  }
}

const weekdayOf = (date: string) => (new Date(`${date}T12:00:00Z`).getUTCDay() + 6) % 7;

async function fetchForecast(area: AreaId): Promise<ForecastDay[] | null> {
  if (!FORECAST_ENABLED) return null;
  try {
    const res = await fetch(`https://catch.unagieel.net/v1/forecast/${area}.json`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const json = (await res.json()) as {
      days: { date: string; kind: string; daily_avg: number; cheapest_hours: number[]; hours: { low: number; high: number }[] }[];
    };
    return json.days
      .filter((d) => d.kind === "forecast")
      .map((d) => ({
        date: d.date,
        avg: d.daily_avg * 100,
        low: Math.min(...d.hours.map((h) => h.low)) * 100,
        high: Math.max(...d.hours.map((h) => h.high)) * 100,
        cheapest: d.cheapest_hours,
      }));
  } catch {
    return null;
  }
}

const HISTORY_DAYS = 28;

export async function getElpris(area: AreaId): Promise<ElprisData> {
  const historyDates = Array.from({ length: HISTORY_DAYS }, (_, i) => swedishDate(-(i + 1)));
  const [today, tomorrow, forecast, ...history] = await Promise.all([
    fetchDay(area, swedishDate(0), 900),
    fetchDay(area, swedishDate(1), 900),
    fetchForecast(area),
    // Historiska priser ändras inte – de kan cachas länge.
    ...historyDates.map((d) => fetchDay(area, d, 86_400)),
  ]);

  const byWeekday: Day[][] = Array.from({ length: 7 }, () => []);
  for (const d of history) if (d) byWeekday[weekdayOf(d.date)].push(d);
  const pattern = byWeekday.map((days, weekday) => {
    const hours = Array.from({ length: 24 }, (_, h) => {
      const v = days.map((d) => d.hours[h]).filter((x): x is number => x !== null);
      return v.length ? v.reduce((a, b) => a + b, 0) / v.length : 0;
    });
    return { weekday, hours, avg: days.length ? days.reduce((a, d) => a + d.avg, 0) / days.length : 0 };
  });

  return {
    area,
    fetchedAt: new Date().toISOString(),
    today,
    tomorrow,
    pattern,
    patternDays: history.filter(Boolean).length,
    forecast,
  };
}
