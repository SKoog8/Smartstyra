export interface GuideMeta {
  slug: string;
  title: string;
  description: string;
  /** Datum då innehållet senast gicks igenom (ÅÅÅÅ-MM-DD) */
  updated: string;
  minutes: number;
  /** Bakgrundsfärg på kortet i guidelistan */
  tone: "mint" | "sky" | "butter" | "clay";
  /** Vilken av de tre vägarna till lägre elräkning guiden handlar om */
  theme: "Använd mindre" | "Flytta i tid" | "Styr automatiskt";
}

// Alla guider, i den ordning de visas på /guider. Varje guide har sin egen sida i src/app/guider/<slug>/page.tsx.
export const GUIDES: GuideMeta[] = [
  {
    slug: "flytta-elforbrukningen-till-billiga-timmar",
    title: "Så flyttar du elförbrukningen till billigare timmar",
    description:
      "Med timpris kan samma kilowattimme kosta helt olika mycket under dygnet. Så tar du vara på det – med och utan smarta prylar.",
    updated: "2026-10-28",
    minutes: 7,
    tone: "butter",
    theme: "Flytta i tid",
  },
  {
    slug: "smarta-elementtermostater",
    title: "Smarta elementtermostater: sänk värmen där ingen är",
    description:
      "En grad lägre inomhus ger ungefär fem procent lägre uppvärmningskostnad. Så får du det att hända rum för rum – utan att frysa.",
    updated: "2026-10-28",
    minutes: 6,
    tone: "clay",
    theme: "Styr automatiskt",
  },
  {
    slug: "mat-din-elforbrukning",
    title: "Mät först: så hittar du det som drar mest el i huset",
    description:
      "Elmätarens HAN-port, smarta uttag och ett enkelt nattest visar var elen tar vägen – innan du lägger pengar på åtgärder.",
    updated: "2026-10-28",
    minutes: 6,
    tone: "mint",
    theme: "Använd mindre",
  },
];

export function guide(slug: string): GuideMeta {
  const g = GUIDES.find((g) => g.slug === slug);
  if (!g) throw new Error(`Okänd guide: ${slug}`);
  return g;
}

export const TONE: Record<GuideMeta["tone"], string> = {
  mint: "bg-mint",
  sky: "bg-sky",
  butter: "bg-butter",
  clay: "bg-clay",
};
