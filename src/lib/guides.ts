export interface GuideMeta {
  slug: string;
  title: string;
  /** Kortare titel för sökresultaten, när rubriken blir längre än Google visar (runt 60 tecken med sajtnamnet). */
  seoTitle?: string;
  description: string;
  /** Datum då guiden publicerades (ÅÅÅÅ-MM-DD) */
  published: string;
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
    slug: "effektavgift",
    title: "Effektavgift 2026: kravet är borta – så vet du vad som gäller för dig",
    seoTitle: "Effektavgift 2026 – vad gäller nu?",
    description:
      "Kravet på effektavgift upphävdes i juni 2026. Så ser du om ditt nätbolag har kvar den – och hur du håller nere avgiften om det har det.",
    published: "2026-11-12",
    updated: "2026-11-12",
    minutes: 6,
    tone: "clay",
    theme: "Flytta i tid",
  },
  {
    slug: "kvartspris",
    title: "Kvartspris på el: så fungerar det – och när det lönar sig",
    seoTitle: "Kvartspris på el – så fungerar det",
    description:
      "Sedan oktober 2025 sätts elpriset per kvart. Så skiljer sig kvartspris från timpris och rörligt månadspris, och så ser du om det lönar sig för dig.",
    published: "2026-11-12",
    updated: "2026-11-12",
    minutes: 6,
    tone: "butter",
    theme: "Flytta i tid",
  },
  {
    slug: "tibber-pulse",
    title: "Tibber Pulse: så fungerar den – och behöver du en?",
    seoTitle: "Tibber Pulse – så fungerar den",
    description:
      "Tibber Pulse visar elförbrukningen i realtid och skyddar säkringen när elbilen laddar. Så väljer du rätt modell och det här kan den – med och utan Tibber.",
    published: "2026-11-12",
    updated: "2026-11-12",
    minutes: 6,
    tone: "mint",
    theme: "Använd mindre",
  },
  {
    slug: "styr-bergvarmepumpen-efter-elpriset",
    title: "Styr bergvärmepumpen efter elpriset",
    description:
      "Så flyttar du bergvärmepumpens värme till billiga timmar med NIBE myUplink, Tibber eller Ngenic Tune – utan att det blir kallt inne.",
    published: "2026-11-12",
    updated: "2026-11-12",
    minutes: 7,
    tone: "sky",
    theme: "Styr automatiskt",
  },
  {
    slug: "solceller-och-batteri",
    title: "Solceller och batteri 2026: så får du ut mest av solelen",
    seoTitle: "Solceller och batteri 2026 – lönar det sig?",
    description:
      "60-öringen är borta och grönt avdrag har ändrats. Så räknar du på solceller och batteri nu – och varför smart styrning gör störst skillnad.",
    published: "2026-11-12",
    updated: "2026-11-12",
    minutes: 7,
    tone: "butter",
    theme: "Flytta i tid",
  },
  {
    slug: "sa-fungerar-tibber",
    title: "Så fungerar Tibber – och allt du kan koppla in",
    description:
      "Kvartspris, appen, Pulse och Power-ups: en genomgång av hur Tibber fungerar och vilka värmepumpar, element, laddboxar och batterier som går att styra.",
    published: "2026-10-28",
    updated: "2026-10-28",
    minutes: 8,
    tone: "sky",
    theme: "Flytta i tid",
  },
  {
    slug: "tibber-grid-rewards",
    title: "Tibber Grid Rewards: få betalt för att elbilen och batteriet hjälper elnätet",
    seoTitle: "Tibber Grid Rewards – så fungerar det",
    description:
      "Så fungerar Grid Rewards, vad som krävs, hur mycket det kan ge och vad det betyder för laddningen av din bil.",
    published: "2026-10-28",
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
    published: "2026-10-28",
    updated: "2026-11-12",
    minutes: 7,
    tone: "mint",
    theme: "Flytta i tid",
  },
  {
    slug: "styr-varmvattenberedaren-med-kontaktor",
    title: "Styr varmvattenberedaren efter elpriset med en kontaktor",
    seoTitle: "Styr varmvattenberedaren efter elpriset",
    description:
      "Varmvattenberedaren är en av husets största elförbrukare och perfekt att flytta i tid. Så fungerar styrning med kontaktor och smart relä.",
    published: "2026-10-28",
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
    published: "2026-10-28",
    updated: "2026-10-28",
    minutes: 7,
    tone: "sky",
    theme: "Flytta i tid",
  },
  {
    slug: "uppkopplade-golvtermostater",
    title: "Uppkopplade golvtermostater: sluta värma badrumsgolvet i onödan",
    seoTitle: "Uppkopplad golvtermostat – styr golvvärmen smart",
    description:
      "Elektrisk golvvärme går ofta dygnet runt, året om. Så byter du till en uppkopplad termostat och styr värmen efter schema och elpris.",
    published: "2026-10-28",
    updated: "2026-10-28",
    minutes: 6,
    tone: "butter",
    theme: "Styr automatiskt",
  },
  {
    slug: "adax-wifi-element",
    title: "Adax WiFi-element: styr elementen från mobilen och efter elpriset",
    seoTitle: "Adax WiFi-element: styr efter elpriset",
    description:
      "Så fungerar Adax WiFi-element, vad appen kan, och hur du kopplar dem till Tibber eller Home Assistant för att värma på billiga timmar.",
    published: "2026-10-28",
    updated: "2026-10-28",
    minutes: 6,
    tone: "clay",
    theme: "Styr automatiskt",
  },
  {
    slug: "plejd-smart-belysning",
    title: "Plejd: smart belysning som installeras som vanlig el",
    seoTitle: "Plejd smart belysning – så fungerar det",
    description:
      "Så fungerar Plejd, vilka produkter som finns, vad gatewayen behövs till – och hur mycket el smart belysning egentligen sparar.",
    published: "2026-10-28",
    updated: "2026-10-28",
    minutes: 6,
    tone: "mint",
    theme: "Styr automatiskt",
  },
  {
    slug: "controlmyspa-spabad",
    title: "Styr spabadet med ControlMySpa – och värm vattnet när elen är billig",
    seoTitle: "ControlMySpa: styr spabadet efter elpriset",
    description:
      "Ett spabad kan dra lika mycket el som en elbil. Så använder du ControlMySpa för att schemalägga värmen och vilka vägar som finns till elprisstyrning.",
    published: "2026-10-28",
    updated: "2026-10-28",
    minutes: 6,
    tone: "sky",
    theme: "Flytta i tid",
  },
  {
    slug: "flytta-elforbrukningen-till-billiga-timmar",
    title: "Så flyttar du elförbrukningen till billigare timmar",
    seoTitle: "Flytta elförbrukningen till billiga timmar",
    description:
      "Med timpris kan samma kilowattimme kosta helt olika mycket under dygnet. Så tar du vara på det – med och utan smarta prylar.",
    published: "2026-10-28",
    updated: "2026-11-12",
    minutes: 7,
    tone: "butter",
    theme: "Flytta i tid",
  },
  {
    slug: "smarta-elementtermostater",
    title: "Smarta elementtermostater: sänk värmen där ingen är",
    seoTitle: "Smarta elementtermostater – sänk värmen rum för rum",
    description:
      "En grad lägre inomhus ger ungefär fem procent lägre uppvärmningskostnad. Så får du det att hända rum för rum – utan att frysa.",
    published: "2026-10-28",
    updated: "2026-10-28",
    minutes: 6,
    tone: "clay",
    theme: "Styr automatiskt",
  },
  {
    slug: "mat-din-elforbrukning",
    title: "Mät först: så hittar du det som drar mest el i huset",
    seoTitle: "Mät elförbrukningen och hitta eltjuvarna",
    description:
      "Elmätarens HAN-port, smarta uttag och ett enkelt nattest visar var elen tar vägen – innan du lägger pengar på åtgärder.",
    published: "2026-10-28",
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

/** Andra guider att läsa härnäst: först de med samma tema, sedan övriga. */
export function relatedGuides(slug: string, count = 3): GuideMeta[] {
  const current = guide(slug);
  const others = GUIDES.filter((g) => g.slug !== slug);
  return [...others.filter((g) => g.theme === current.theme), ...others.filter((g) => g.theme !== current.theme)].slice(
    0,
    count
  );
}
