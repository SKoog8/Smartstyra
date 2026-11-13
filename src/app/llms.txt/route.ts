import { GUIDES } from "@/lib/guides";
import { SITE_URL } from "@/lib/site";
import { TESTS } from "@/lib/tests";

// Sammanfattning av sajten för AI-tjänster. Byggs från guidelistan, så nya guider kommer med automatiskt.
export const dynamic = "force-static";

export function GET() {
  const lines = [
    "# Smartstyra",
    "",
    "> Svenska guider för villaägare som vill sänka elförbrukningen och flytta den till billigare timmar, med rekommendationer på smarta prylar.",
    "",
    "## Guider",
    "",
    ...GUIDES.map((g) => `- [${g.title}](${SITE_URL}/guider/${g.slug}): ${g.description}`),
    "",
    "## Testat hemma",
    "",
    ...TESTS.map((t) => `- [${t.title}](${SITE_URL}/tester/${t.slug}): ${t.description}`),
    "",
    "## Verktyg och produkter",
    "",
    `- [Kalkylator](${SITE_URL}/kalkylator): uppskatta besparingen av lägre temperatur, flyttad förbrukning och mindre standby.`,
    `- [Produkter](${SITE_URL}/produkter): smarta uttag, elementtermostater, golvtermostater, värmepumpsstyrning, smarta reläer och energimätare.`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
