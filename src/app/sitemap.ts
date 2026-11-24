import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { GUIDES } from "@/lib/guides";
import { CATEGORIES } from "@/lib/products";
import { TESTS } from "@/lib/tests";
import { TOPICS } from "@/lib/topics";
import elavtal from "../../data/elavtal.json";

// Senaste ändringsdatum för sidor som inte har ett eget datum i data. Uppdatera när sidan ändras.
const PAGE_UPDATED = {
  hem: "2026-11-17",
  dittHus: "2026-11-17",
  kalkylator: "2026-11-17",
  om: "2026-11-24",
  omMartin: "2026-11-17",
  kontakt: "2026-10-30",
  integritet: "2026-10-30",
};

const latest = (...dates: string[]) => dates.filter(Boolean).sort().at(-1)!;
const newestGuide = latest(...GUIDES.map((g) => g.updated));

export default function sitemap(): MetadataRoute.Sitemap {
  // Elpriset ändras varje dag, och sajten byggs om minst en gång per dygn.
  const today = new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Stockholm" }).format(new Date());
  return [
    { url: `${SITE_URL}/`, lastModified: latest(PAGE_UPDATED.hem, newestGuide), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/guider`, lastModified: newestGuide, changeFrequency: "weekly", priority: 0.8 },
    ...GUIDES.map((g) => ({
      url: `${SITE_URL}/guider/${g.slug}`,
      lastModified: g.updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...TOPICS.map((t) => ({
      url: `${SITE_URL}/amnen/${t.slug}`,
      lastModified: latest(...GUIDES.filter((g) => t.guides.includes(g.slug)).map((g) => g.updated)),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${SITE_URL}/produkter`,
      lastModified: latest(...CATEGORIES.map((c) => c.checkedAt)),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...CATEGORIES.map((c) => ({
      url: `${SITE_URL}/produkter/${c.slug}`,
      lastModified: c.checkedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${SITE_URL}/tester`, lastModified: latest(...TESTS.map((t) => t.updated)), changeFrequency: "monthly", priority: 0.7 },
    ...TESTS.map((t) => ({
      url: `${SITE_URL}/tester/${t.slug}`,
      lastModified: t.updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/elpris`, lastModified: today, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/ditt-hus`, lastModified: PAGE_UPDATED.dittHus, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/elavtal`, lastModified: elavtal.checkedAt, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/kalkylator`, lastModified: PAGE_UPDATED.kalkylator, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/om`, lastModified: PAGE_UPDATED.om, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/om/martin`, lastModified: PAGE_UPDATED.omMartin, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/kontakt`, lastModified: PAGE_UPDATED.kontakt, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/integritet`, lastModified: PAGE_UPDATED.integritet, changeFrequency: "yearly", priority: 0.2 },
  ];
}
