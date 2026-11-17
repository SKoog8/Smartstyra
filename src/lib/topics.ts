// Ämnessidor som samlar guider, tester och produkter kring ett tema.
export interface Topic {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string[];
  guides: string[];
  tests: string[];
  categories: string[];
}

export const TOPICS: Topic[] = [
  {
    slug: "tibber",
    name: "Tibber",
    title: "Allt om Tibber",
    description:
      "Guider och tester om Tibber: elavtalet, Tibber Pulse, smart laddning av elbilen, Grid Rewards och vilka prylar du kan styra från appen.",
    intro: [
      "Tibber är en elhandlare som säljer el till inköpspris per kvart mot en fast månadsavgift, och vars app kan styra en hel del av det som drar el i huset: elbilens laddning, värmepumpen, elementen och hembatteriet.",
      "Här har vi samlat allt vi har skrivit om Tibber. Börja med hur Tibber fungerar om du funderar på att byta elavtal. Har du redan Tibber hittar du guiderna om Pulse, Smartladdning och Grid Rewards nedan – och tester av prylar som Martin styr via Tibber-appen hemma.",
    ],
    guides: ["sa-fungerar-tibber", "tibber-pulse", "smart-laddning-elbil-tibber", "tibber-grid-rewards", "adax-wifi-element", "smart-styrning-hembatteri"],
    tests: ["adax-neo-wifi", "sensibo-sky"],
    categories: ["energimatare", "varmepumpsstyrning"],
  },
  {
    slug: "varme",
    name: "Värme och värmepumpar",
    title: "Värme och värmepumpar",
    description:
      "Så sänker du kostnaden för uppvärmningen: styr värmepumpen efter elpriset, sänk temperaturen rum för rum och välj rätt termostat för element och golvvärme.",
    intro: [
      "I de flesta villor går den största delen av elen till uppvärmning och varmvatten. Det är också där det finns mest att vinna. Enligt Energimyndigheten minskar energin för uppvärmning med ungefär fem procent för varje grad du sänker inomhus.",
      "Guiderna här handlar om två saker: att använda mindre värme där den inte behövs, och att flytta värmen till billiga timmar. Huset håller värmen i flera timmar, så en värmepump, elelement eller golvvärme kan ofta vila under de dyraste timmarna utan att du märker det.",
    ],
    guides: [
      "stall-in-varmekurvan-nibe",
      "styr-bergvarmepumpen-efter-elpriset",
      "smarta-elementtermostater",
      "adax-wifi-element",
      "uppkopplade-golvtermostater",
      "styr-varmvattenberedaren-med-kontaktor",
      "controlmyspa-spabad",
    ],
    tests: ["sensibo-sky", "adax-neo-wifi", "plejd-golvtermostat-och-rela", "controlmyspa"],
    categories: ["varmepumpsstyrning", "elementtermostater", "golvtermostater", "smarta-relaer"],
  },
  {
    slug: "elavtal-och-elnat",
    name: "Elavtal och elnät",
    title: "Elavtal, elnät och elpris",
    description:
      "Kvartspris, timpris eller månadspris? Effektavgift eller inte? Så fungerar elavtalet och elnätsavgiften – och hur du får ut mest av billiga timmar.",
    intro: [
      "Elräkningen består av två delar: elhandeln, där du väljer avtal själv, och elnätet, där du har det nätbolag som äger ledningarna där du bor. Båda har ändrats de senaste åren. Sedan oktober 2025 sätts elpriset per kvart, och 2026 stoppades kravet på att alla nätbolag ska ha effektavgift.",
      "Guiderna här förklarar vad som gäller nu och vad det betyder för dig som villaägare – från valet mellan kvartspris och månadspris till hur solelen räknas när 60-öringen är borta.",
    ],
    guides: ["kvartspris", "effektavgift", "flytta-elforbrukningen-till-billiga-timmar", "solceller-och-batteri", "sa-fungerar-tibber", "mat-din-elforbrukning"],
    tests: [],
    categories: ["energimatare"],
  },
  {
    slug: "smarta-hem",
    name: "Smarta hem",
    title: "Smarta hem som sänker elräkningen",
    description:
      "Home Assistant, Plejd, smarta uttag och reläer: så bygger du ett smart hem som styr elen efter priset och visar vad som drar mest.",
    intro: [
      "Ett smart hem gör två saker för elräkningen: det visar var elen tar vägen, och det låter saker gå när elen är billig utan att du behöver tänka på det. Du kan börja litet med ett smart uttag med energimätning, eller bygga ett helt system med Home Assistant eller Plejd.",
      "Här har vi samlat guider och tester om smarta hem-system och prylarna som kopplas till dem. Martin har styrt sitt hus med Home Assistant i flera år, och testerna beskriver hur det fungerar i vardagen.",
    ],
    guides: [
      "flytta-elforbrukningen-till-billiga-timmar",
      "mat-din-elforbrukning",
      "plejd-smart-belysning",
      "styr-varmvattenberedaren-med-kontaktor",
      "uppkopplade-golvtermostater",
      "smart-styrning-hembatteri",
    ],
    tests: ["home-assistant", "plejd-golvtermostat-och-rela", "controlmyspa"],
    categories: ["smarta-uttag", "smarta-relaer", "energimatare"],
  },
];

export const topic = (slug: string) => TOPICS.find((t) => t.slug === slug);
export const topicsForGuide = (slug: string) => TOPICS.filter((t) => t.guides.includes(slug));
