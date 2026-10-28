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
    slug: "sa-fungerar-tibber",
    title: "Så fungerar Tibber – och allt du kan koppla in",
    description:
      "Kvartspris, appen, Pulse och Power-ups: en genomgång av hur Tibber fungerar och vilka värmepumpar, element, laddboxar och batterier som går att styra.",
    updated: "2026-10-28",
    minutes: 8,
    tone: "sky",
    theme: "Flytta i tid",
  },
  {
    slug: "tibber-grid-rewards",
    title: "Tibber Grid Rewards: få betalt för att elbilen och batteriet hjälper elnätet",
    description:
      "Så fungerar Grid Rewards, vad som krävs, hur mycket det kan ge och vad det betyder för laddningen av din bil.",
    updated: "2026-10-28",
    minutes: 6,
    tone: "butter",
    theme: "Flytta i tid",
  },
  {
    slug: "smart-laddning-elbil-tibber",
    title: "Smart laddning av elbilen med Tibber",
    description:
      "Koppla bilen eller laddboxen till Tibber, ställ in avresetid och låt laddningen hamna på dygnets billigaste timmar – utan att säkringen går.",
    updated: "2026-10-28",
    minutes: 7,
    tone: "mint",
    theme: "Flytta i tid",
  },
  {
    slug: "styr-varmvattenberedaren-med-kontaktor",
    title: "Styr varmvattenberedaren efter elpriset med en kontaktor",
    description:
      "Varmvattenberedaren är en av husets största elförbrukare och perfekt att flytta i tid. Så fungerar styrning med kontaktor och smart relä.",
    updated: "2026-10-28",
    minutes: 7,
    tone: "clay",
    theme: "Flytta i tid",
  },
  {
    slug: "smart-styrning-hembatteri",
    title: "Koppla hembatteriet till smart styrning",
    description:
      "Ett batteri som bara lagrar solel står still halva året. Med smart styrning laddar det när elen är billig och tjänar pengar på att stötta elnätet.",
    updated: "2026-10-28",
    minutes: 7,
    tone: "sky",
    theme: "Flytta i tid",
  },
  {
    slug: "uppkopplade-golvtermostater",
    title: "Uppkopplade golvtermostater: sluta värma badrumsgolvet i onödan",
    description:
      "Elektrisk golvvärme går ofta dygnet runt, året om. Så byter du till en uppkopplad termostat och styr värmen efter schema och elpris.",
    updated: "2026-10-28",
    minutes: 6,
    tone: "butter",
    theme: "Styr automatiskt",
  },
  {
    slug: "adax-wifi-element",
    title: "Adax WiFi-element: styr elementen från mobilen och efter elpriset",
    description:
      "Så fungerar Adax WiFi-element, vad appen kan, och hur du kopplar dem till Tibber eller Home Assistant för att värma på billiga timmar.",
    updated: "2026-10-28",
    minutes: 6,
    tone: "clay",
    theme: "Styr automatiskt",
  },
  {
    slug: "plejd-smart-belysning",
    title: "Plejd: smart belysning som installeras som vanlig el",
    description:
      "Så fungerar Plejd, vilka produkter som finns, vad gatewayen behövs till – och hur mycket el smart belysning egentligen sparar.",
    updated: "2026-10-28",
    minutes: 6,
    tone: "mint",
    theme: "Styr automatiskt",
  },
  {
    slug: "controlmyspa-spabad",
    title: "Styr spabadet med ControlMySpa – och värm vattnet när elen är billig",
    description:
      "Ett spabad kan dra lika mycket el som en elbil. Så använder du ControlMySpa för att schemalägga värmen och vilka vägar som finns till elprisstyrning.",
    updated: "2026-10-28",
    minutes: 6,
    tone: "sky",
    theme: "Flytta i tid",
  },
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
