import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { GUIDES } from "@/lib/guides";
import { CATEGORIES } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/guider`, changeFrequency: "weekly", priority: 0.8 },
    ...GUIDES.map((g) => ({
      url: `${SITE_URL}/guider/${g.slug}`,
      lastModified: g.updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/produkter`, changeFrequency: "monthly", priority: 0.7 },
    ...CATEGORIES.map((c) => ({
      url: `${SITE_URL}/produkter/${c.slug}`,
      lastModified: c.checkedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${SITE_URL}/kalkylator`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/om`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/kontakt`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/integritet`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
