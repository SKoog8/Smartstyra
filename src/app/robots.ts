import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Alla sökmotorer och AI-tjänster får läsa sidorna; bara API:t hålls utanför.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
