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
  /**
   * Datum då Martin (elektriker) läste igenom och godkände guiden (ÅÅÅÅ-MM-DD). Sätts bara när han faktiskt har
   * gjort det – då visas "Faktagranskad av Martin, elektriker" på guiden. Nya guider från den dagliga rutinen har
   * inget sådant datum förrän Martin har läst dem.
   */
  reviewed?: string;
  /** Illustration på kortet och i delningsbilden (se src/components/GuideArt.tsx) */
  art?: import("@/components/GuideArt").ArtKey;
  /** Bakgrundsfärg på kortet i guidelistan */
  tone: "mint" | "sky" | "butter" | "clay";
  /** Vilken av de tre vägarna till lägre elräkning guiden handlar om */
  theme: "Använd mindre" | "Flytta i tid" | "Styr automatiskt";
}

// Alla guider, i den ordning de visas på /guider. Varje guide har sin egen sida i src/app/guider/<slug>/page.tsx.
export const GUIDES: GuideMeta[] = [
  {
    slug: "luft-luft-varmepump-pa-vintern",
    art: "varmepump",
    title: "Luft-luft-värmepump på vintern: rätt inställningar för lägst elräkning",
    seoTitle: "Luft-luft-värmepump på vintern: rätt inställningar",
    description:
      "Värmeläge i stället för auto, elementen två grader lägre och rena filter. Så ställer du in luft-luftvärmepumpen i vinter, enligt Boverket och tillverkaren.",
    published: "2026-11-22",
    updated: "2026-11-22",
    minutes: 7,
    tone: "butter",
    theme: "Använd mindre",
  },
  {
    slug: "spabad-elkostnad",
    art: "spa",
    title: "Lönar sig spabad? Så mycket el drar det och så sänker du kostnaden",
    seoTitle: "Spabad elkostnad: så mycket el drar det",
    description:
      "Mätningar hos RISE visar runt 2 200–2 500 kWh om året för ett välisolerat spabad. Så räknar du ut din kostnad och sänker den med lock, temperatur och tid.",
    published: "2026-11-21",
    updated: "2026-11-21",
    minutes: 6,
    tone: "sky",
    theme: "Använd mindre",
  },
  {
    slug: "sank-effektavgiften-tibber-hembatteri",
    art: "batteri",
    title: "Sänk effektavgiften med Tibber eller hembatteriets egen styrning",
    seoTitle: "Sänk effektavgiften med Tibber eller batteri",
    description:
      "Så håller du nere effekttopparna automatiskt – med Tibbers Effektkontroll för elbilen eller med peak shaving i hembatteriet från Ferroamp, Huawei eller Sungrow.",
    published: "2026-11-20",
    updated: "2026-11-20",
    minutes: 8,
    tone: "mint",
    theme: "Styr automatiskt",
  },
  {
    slug: "effektavgift-natbolag",
    art: "natet",
    title: "Effektavgift: nätbolagen som har kvar den – och hur de räknar",
    seoTitle: "Vilka nätbolag har kvar effektavgiften?",
    description:
      "Göteborg Energi, Tekniska verken, Kraftringen, Nacka Energi och fler har kvar effektavgiften för villor. Så räknar varje bolag – och vilka som har pausat den.",
    published: "2026-11-20",
    updated: "2026-11-20",
    minutes: 7,
    tone: "clay",
    theme: "Flytta i tid",
  },
  {
    slug: "tibber-pulse-i-home-assistant",
    art: "matare",
    title: "Tibber Pulse i Home Assistant: realtidsförbrukning och automationer",
    seoTitle: "Tibber Pulse i Home Assistant",
    description:
      "Så kopplar du Tibber Pulse till Home Assistant, ser grundlasten och låter automationer pausa elpatronen när huset drar mycket eller elen är dyr.",
    published: "2026-11-20",
    updated: "2026-11-20",
    minutes: 7,
    tone: "butter",
    theme: "Styr automatiskt",
  },
  {
    slug: "nord-pool-elpris-i-home-assistant",
    art: "pris",
    title: "Elpriset från Nord Pool i Home Assistant – och automationer som följer det",
    seoTitle: "Nord Pool-elpris i Home Assistant",
    description:
      "Så lägger du in spotpriset från Nord Pool i Home Assistant, räknar fram vad elen kostar med moms och låter automationer gå när elen är billig.",
    published: "2026-11-19",
    updated: "2026-11-19",
    minutes: 7,
    tone: "mint",
    theme: "Styr automatiskt",
  },
  {
    slug: "styr-varmvattenberedaren-med-shelly",
    art: "beredare",
    title: "Styr varmvattenberedaren med Shelly efter elpriset",
    description:
      "Så styr du varmvattenberedaren med ett Shelly-relä och en kontaktor – med schema, med ett elprisskript direkt i reläet eller via Home Assistant.",
    published: "2026-11-18",
    updated: "2026-11-18",
    minutes: 7,
    tone: "sky",
    theme: "Styr automatiskt",
  },
  {
    slug: "vedeldning-vad-kostar-det",
    art: "ved",
    title: "Vedeldning: vad kostar värmen per kWh – och när lönar det sig?",
    seoTitle: "Vad kostar vedeldning per kWh?",
    description:
      "Så mycket kostar en kWh värme från björkved jämfört med el och värmepump, och när det är smart att elda – särskilt när elpriset är högt.",
    published: "2026-11-17",
    updated: "2026-11-17",
    minutes: 7,
    tone: "butter",
    theme: "Använd mindre",
  },
  {
    slug: "stall-in-varmekurvan-nibe",
    art: "kurva",
    title: "Ställ in värmekurvan på NIBE-värmepumpen – sänk förbrukningen utan att frysa",
    seoTitle: "Ställ in värmekurvan på NIBE",
    description:
      "Kurvlutning eller förskjutning? Så hittar du rätt värmekurva på din NIBE-värmepump, steg för steg – och slipper värma huset mer än det behöver.",
    published: "2026-11-17",
    updated: "2026-11-17",
    minutes: 6,
    tone: "mint",
    theme: "Använd mindre",
  },
  {
    slug: "effektavgift",
    art: "effekt",
    title: "Effektavgift 2026: kravet är borta – så vet du vad som gäller för dig",
    seoTitle: "Effektavgift 2026 – vad gäller nu?",
    description:
      "Kravet på effektavgift upphävdes i juni 2026. Så ser du om ditt nätbolag har kvar den – och hur du håller nere avgiften om det har det.",
    published: "2026-11-12",
    updated: "2026-11-16",
    reviewed: "2026-11-17",
    minutes: 6,
    tone: "clay",
    theme: "Flytta i tid",
  },
  {
    slug: "kvartspris",
    art: "pris",
    title: "Kvartspris på el: så fungerar det – och när det lönar sig",
    seoTitle: "Kvartspris på el – så fungerar det",
    description:
      "Sedan oktober 2025 sätts elpriset per kvart. Så skiljer sig kvartspris från timpris och rörligt månadspris, och så ser du om det lönar sig för dig.",
    published: "2026-11-12",
    updated: "2026-11-16",
    reviewed: "2026-11-17",
    minutes: 6,
    tone: "butter",
    theme: "Flytta i tid",
  },
  {
    slug: "tibber-pulse",
    art: "matare",
    title: "Tibber Pulse: så fungerar den – och behöver du en?",
    seoTitle: "Tibber Pulse – så fungerar den",
    description:
      "Tibber Pulse visar elförbrukningen i realtid och skyddar säkringen när elbilen laddar. Så väljer du rätt modell och det här kan den – med och utan Tibber.",
    published: "2026-11-12",
    updated: "2026-11-12",
    reviewed: "2026-11-17",
    minutes: 6,
    tone: "mint",
    theme: "Använd mindre",
  },
  {
    slug: "styr-bergvarmepumpen-efter-elpriset",
    art: "varmepump",
    title: "Styr bergvärmepumpen efter elpriset",
    description:
      "Så flyttar du bergvärmepumpens värme till billiga timmar med NIBE myUplink, Tibber eller Ngenic Tune – utan att det blir kallt inne.",
    published: "2026-11-12",
    updated: "2026-11-12",
    reviewed: "2026-11-17",
    minutes: 7,
    tone: "sky",
    theme: "Styr automatiskt",
  },
  {
    slug: "solceller-och-batteri",
    art: "sol",
    title: "Solceller och batteri 2026: så får du ut mest av solelen",
    seoTitle: "Solceller och batteri 2026 – lönar det sig?",
    description:
      "60-öringen är borta och grönt avdrag har ändrats. Så räknar du på solceller och batteri nu – och varför smart styrning gör störst skillnad.",
    published: "2026-11-12",
    updated: "2026-11-12",
    reviewed: "2026-11-17",
    minutes: 7,
    tone: "butter",
    theme: "Flytta i tid",
  },
  {
    slug: "sa-fungerar-tibber",
    art: "app",
    title: "Så fungerar Tibber – och allt du kan koppla in",
    description:
      "Kvartspris, appen, Pulse och Power-ups: en genomgång av hur Tibber fungerar och vilka värmepumpar, element, laddboxar och batterier som går att styra.",
    published: "2026-10-28",
    updated: "2026-10-28",
    reviewed: "2026-11-17",
    minutes: 8,
    tone: "sky",
    theme: "Flytta i tid",
  },
  {
    slug: "tibber-grid-rewards",
    art: "natet",
    title: "Tibber Grid Rewards: få betalt för att elbilen och batteriet hjälper elnätet",
    seoTitle: "Tibber Grid Rewards – så fungerar det",
    description:
      "Så fungerar Grid Rewards, vad som krävs, hur mycket det kan ge och vad det betyder för laddningen av din bil.",
    published: "2026-10-28",
    updated: "2026-10-28",
    reviewed: "2026-11-17",
    minutes: 6,
    tone: "butter",
    theme: "Flytta i tid",
  },
  {
    slug: "smart-laddning-elbil-tibber",
    art: "elbil",
    title: "Smart laddning av elbilen med Tibber",
    description:
      "Koppla bilen eller laddboxen till Tibber, ställ in avresetid och låt laddningen hamna på dygnets billigaste timmar – utan att säkringen går.",
    published: "2026-10-28",
    updated: "2026-11-12",
    reviewed: "2026-11-17",
    minutes: 7,
    tone: "mint",
    theme: "Flytta i tid",
  },
  {
    slug: "styr-varmvattenberedaren-med-kontaktor",
    art: "beredare",
    title: "Styr varmvattenberedaren efter elpriset med en kontaktor",
    seoTitle: "Styr varmvattenberedaren efter elpriset",
    description:
      "Varmvattenberedaren är en av husets största elförbrukare och perfekt att flytta i tid. Så fungerar styrning med kontaktor och smart relä.",
    published: "2026-10-28",
    updated: "2026-10-28",
    reviewed: "2026-11-17",
    minutes: 7,
    tone: "clay",
    theme: "Flytta i tid",
  },
  {
    slug: "smart-styrning-hembatteri",
    art: "batteri",
    title: "Koppla hembatteriet till smart styrning",
    description:
      "Ett batteri som bara lagrar solel står still halva året. Med smart styrning laddar det när elen är billig och tjänar pengar på att stötta elnätet.",
    published: "2026-10-28",
    updated: "2026-10-28",
    reviewed: "2026-11-17",
    minutes: 7,
    tone: "sky",
    theme: "Flytta i tid",
  },
  {
    slug: "uppkopplade-golvtermostater",
    art: "golvvarme",
    title: "Uppkopplade golvtermostater: sluta värma badrumsgolvet i onödan",
    seoTitle: "Uppkopplad golvtermostat – styr golvvärmen smart",
    description:
      "Elektrisk golvvärme går ofta dygnet runt, året om. Så byter du till en uppkopplad termostat och styr värmen efter schema och elpris.",
    published: "2026-10-28",
    updated: "2026-10-28",
    reviewed: "2026-11-17",
    minutes: 6,
    tone: "butter",
    theme: "Styr automatiskt",
  },
  {
    slug: "adax-wifi-element",
    art: "element",
    title: "Adax WiFi-element: styr elementen från mobilen och efter elpriset",
    seoTitle: "Adax WiFi-element: styr efter elpriset",
    description:
      "Så fungerar Adax WiFi-element, vad appen kan, och hur du kopplar dem till Tibber eller Home Assistant för att värma på billiga timmar.",
    published: "2026-10-28",
    updated: "2026-10-28",
    reviewed: "2026-11-17",
    minutes: 6,
    tone: "clay",
    theme: "Styr automatiskt",
  },
  {
    slug: "plejd-smart-belysning",
    art: "lampa",
    title: "Plejd: smart belysning som installeras som vanlig el",
    seoTitle: "Plejd smart belysning – så fungerar det",
    description:
      "Så fungerar Plejd, vilka produkter som finns, vad gatewayen behövs till – och hur mycket el smart belysning egentligen sparar.",
    published: "2026-10-28",
    updated: "2026-10-28",
    reviewed: "2026-11-17",
    minutes: 6,
    tone: "mint",
    theme: "Styr automatiskt",
  },
  {
    slug: "controlmyspa-spabad",
    art: "spa",
    title: "Styr spabadet med ControlMySpa – och värm vattnet när elen är billig",
    seoTitle: "ControlMySpa: styr spabadet efter elpriset",
    description:
      "Ett spabad kan dra lika mycket el som en elbil. Så använder du ControlMySpa för att schemalägga värmen och vilka vägar som finns till elprisstyrning.",
    published: "2026-10-28",
    updated: "2026-10-28",
    reviewed: "2026-11-17",
    minutes: 6,
    tone: "sky",
    theme: "Flytta i tid",
  },
  {
    slug: "flytta-elforbrukningen-till-billiga-timmar",
    art: "pris",
    title: "Så flyttar du elförbrukningen till billigare timmar",
    seoTitle: "Flytta elförbrukningen till billiga timmar",
    description:
      "Med timpris kan samma kilowattimme kosta helt olika mycket under dygnet. Så tar du vara på det – med och utan smarta prylar.",
    published: "2026-10-28",
    updated: "2026-11-12",
    reviewed: "2026-11-17",
    minutes: 7,
    tone: "butter",
    theme: "Flytta i tid",
  },
  {
    slug: "smarta-elementtermostater",
    art: "radiator",
    title: "Smarta elementtermostater: sänk värmen där ingen är",
    seoTitle: "Smarta elementtermostater – sänk värmen rum för rum",
    description:
      "En grad lägre inomhus ger ungefär fem procent lägre uppvärmningskostnad. Så får du det att hända rum för rum – utan att frysa.",
    published: "2026-10-28",
    updated: "2026-10-28",
    reviewed: "2026-11-17",
    minutes: 6,
    tone: "clay",
    theme: "Styr automatiskt",
  },
  {
    slug: "mat-din-elforbrukning",
    art: "matare",
    title: "Mät först: så hittar du det som drar mest el i huset",
    seoTitle: "Mät elförbrukningen och hitta eltjuvarna",
    description:
      "Elmätarens HAN-port, smarta uttag och ett enkelt nattest visar var elen tar vägen – innan du lägger pengar på åtgärder.",
    published: "2026-10-28",
    updated: "2026-10-28",
    reviewed: "2026-11-17",
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
  // Korten är vita med ram i den tekniska designen; tonen syns som en tunn färgad list överst.
  mint: "bg-white border-t-[6px] border-t-[#16213a]",
  sky: "bg-white border-t-[6px] border-t-[#a9bde3]",
  butter: "bg-white border-t-[6px] border-t-[#ffb21f]",
  clay: "bg-white border-t-[6px] border-t-[#ff5a1f]",
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
