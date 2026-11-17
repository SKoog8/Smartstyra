// Regler för husplanen på /ditt-hus. Allt är fasta regler utan påhittade besparingssiffror:
// svaren väljer vilka steg som visas, och varje steg länkar till guider, tester och produkter som redan finns.

export const AGES = [
  { id: "fore-1960", label: "Före 1960" },
  { id: "60", label: "60-tal" },
  { id: "70", label: "70-tal" },
  { id: "80", label: "80-tal" },
  { id: "90-00", label: "90- eller 00-tal" },
  { id: "nytt", label: "2010 eller senare" },
] as const;

export const HEATING = [
  { id: "direktel", label: "Elelement (direktverkande el)" },
  { id: "elpanna", label: "Elpanna med radiatorer eller golvvärme" },
  { id: "bergvarme", label: "Berg-, jord- eller sjövärme" },
  { id: "luftvatten", label: "Luft-vatten-värmepump" },
  { id: "franluft", label: "Frånluftsvärmepump" },
  { id: "fjarrvarme", label: "Fjärrvärme" },
  { id: "annat", label: "Annat, till exempel pellets eller ved" },
] as const;

export const EXTRAS = [
  { id: "luftluft", label: "Luft-luft-värmepump" },
  { id: "beredare", label: "Separat varmvattenberedare" },
  { id: "golvvarme", label: "Elektrisk golvvärme (badrum, hall)" },
  { id: "elbil", label: "Elbil eller laddhybrid" },
  { id: "spa", label: "Spabad eller pool" },
  { id: "solceller", label: "Solceller" },
  { id: "batteri", label: "Hembatteri" },
] as const;

export const CONTRACTS = [
  { id: "kvart", label: "Kvartspris eller timpris" },
  { id: "manad", label: "Rörligt månadspris" },
  { id: "fast", label: "Fast pris" },
  { id: "vetej", label: "Vet inte" },
] as const;

export const SYSTEMS = [
  { id: "tibber", label: "Tibber" },
  { id: "homeassistant", label: "Home Assistant" },
  { id: "plejd", label: "Plejd" },
] as const;

type Id<T extends readonly { id: string }[]> = T[number]["id"];

export interface Answers {
  age: Id<typeof AGES> | "";
  heating: Id<typeof HEATING> | "";
  extras: Id<typeof EXTRAS>[];
  contract: Id<typeof CONTRACTS> | "";
  systems: Id<typeof SYSTEMS>[];
}

export const EMPTY: Answers = { age: "", heating: "", extras: [], contract: "", systems: [] };

export type LinkKind = "Guide" | "Test" | "Produkter" | "Verktyg";
export interface PlanLink {
  href: string;
  label: string;
  kind: LinkKind;
}

export interface Step {
  id: string;
  priority: number;
  theme: "Använd mindre" | "Flytta i tid" | "Styr automatiskt" | "Mät";
  title: string;
  why: string;
  todo: string[];
  links: PlanLink[];
}

const g = (slug: string, label: string): PlanLink => ({ href: `/guider/${slug}`, label, kind: "Guide" });
const t = (slug: string, label: string): PlanLink => ({ href: `/tester/${slug}`, label, kind: "Test" });
const p = (slug: string, label: string): PlanLink => ({ href: `/produkter/${slug}`, label, kind: "Produkter" });
const v = (href: string, label: string): PlanLink => ({ href, label, kind: "Verktyg" });

export function buildPlan(a: Answers): Step[] {
  const has = (x: Id<typeof EXTRAS>) => a.extras.includes(x);
  const uses = (x: Id<typeof SYSTEMS>) => a.systems.includes(x);
  const old = ["fore-1960", "60", "70"].includes(a.age);
  const waterPump = ["bergvarme", "luftvatten", "franluft"].includes(a.heating);
  const electricHeat = ["direktel", "elpanna"].includes(a.heating) || waterPump;
  const flexible = has("elbil") || has("beredare") || has("spa") || electricHeat;
  const steps: Step[] = [];

  steps.push({
    id: "mat",
    priority: 100,
    theme: "Mät",
    title: "Börja med att se vart elen tar vägen",
    why: "Innan du köper något är det värt att veta vad som drar mest. Elmätarens HAN-port visar husets förbrukning i realtid, och ett smart uttag visar vad en enskild apparat kostar.",
    todo: [
      "Läs av elmätaren en natt när inget stort går – det är husets grundlast.",
      "Aktivera HAN-porten hos ditt nätbolag och koppla in en HAN-läsare.",
      "Mät de apparater du misstänker med ett smart uttag med energimätning.",
    ],
    links: [
      g("mat-din-elforbrukning", "Så mäter du din elförbrukning"),
      g("tibber-pulse", "Tibber Pulse – realtidsmätning via HAN-porten"),
      p("energimatare", "Energimätare"),
      p("smarta-uttag", "Smarta uttag med energimätning"),
    ],
  });

  if (a.heating === "direktel") {
    steps.push({
      id: "direktel",
      priority: 90,
      theme: "Använd mindre",
      title: "Styr elementen rum för rum",
      why: "Med direktverkande el går den största delen av elräkningen till värme. Enligt Energimyndigheten ger varje grad lägre inomhustemperatur ungefär fem procent mindre energi till uppvärmningen.",
      todo: [
        "Sänk i sovrum och rum som sällan används, och använd nattsänkning.",
        "Byter du element – välj uppkopplade element som kan styras efter schema och elpris.",
        has("luftluft")
          ? "Låt luft-luft-värmepumpen ta grundvärmen och elementen bara topparna."
          : "Fundera på en luft-luft-värmepump som grundvärme – den ger flera gånger mer värme per kWh än ett element.",
      ],
      links: [
        g("adax-wifi-element", "Adax WiFi-element"),
        t("adax-neo-wifi", "Testat hemma: Adax Neo WiFi"),
        v("/kalkylator", "Räkna på sänkt temperatur"),
      ],
    });
  }

  if (a.heating === "elpanna") {
    steps.push({
      id: "elpanna",
      priority: 90,
      theme: "Använd mindre",
      title: "Sänk värmen där ingen är – och styr pannan",
      why: "En elpanna är husets största elförbrukare. Smarta elementtermostater sänker värmen i rum som står tomma, och pannan kan styras efter elpriset med ett relä och en kontaktor.",
      todo: [
        "Sätt smarta termostater på elementen i sovrum och rum som sällan används.",
        "Låt en elinstallatör montera ett smart relä som kan styra pannan.",
        "Höj värmen något före de dyra timmarna och sänk under dem – inte mer, då blir det kallt.",
      ],
      links: [
        g("smarta-elementtermostater", "Smarta elementtermostater"),
        p("elementtermostater", "Elementtermostater"),
        p("smarta-relaer", "Smarta reläer för elcentralen"),
        v("/kalkylator", "Räkna på sänkt temperatur"),
      ],
    });
  }

  if (waterPump) {
    steps.push({
      id: "varmepump",
      priority: 90,
      theme: "Flytta i tid",
      title: "Låt värmepumpen följa elpriset",
      why: "Huset är ett värmelager som håller värmen i timmar. Värmepumpen kan värma lite extra när elen är billig och vila när den är dyr – via pumpens egen funktion, elbolaget eller en fristående styrning.",
      todo: [
        "Kontrollera om din pump har inbyggd prisstyrning, till exempel NIBE:s Smart Price Adaption.",
        "Justera värmekurvan innan du sänker temperaturen – det är där grundinställningen sitter.",
        "Välj en styrning, inte två som motarbetar varandra.",
      ],
      links: [
        g("styr-bergvarmepumpen-efter-elpriset", "Styr värmepumpen efter elpriset"),
        g("stall-in-varmekurvan-nibe", "Ställ in värmekurvan"),
        g("smarta-elementtermostater", "Smarta elementtermostater för enskilda rum"),
      ],
    });
  }

  if (a.heating === "fjarrvarme") {
    steps.push({
      id: "fjarrvarme",
      priority: 60,
      theme: "Använd mindre",
      title: "Sänk värmen rum för rum",
      why: "Med fjärrvärme går värmen inte på elräkningen, men den kostar ändå. Smarta elementtermostater fungerar med fjärrvärme och sänker värmen i rum som står tomma.",
      todo: ["Börja med sovrum och rum som sällan används.", "Fokusera elbesparingen på varmvatten, elbil och andra stora förbrukare."],
      links: [g("smarta-elementtermostater", "Smarta elementtermostater"), p("elementtermostater", "Elementtermostater")],
    });
  }

  if (has("luftluft")) {
    steps.push({
      id: "luftluft",
      priority: 70,
      theme: "Styr automatiskt",
      title: "Gör luft-luft-värmepumpen smart",
      why: "En smart styrenhet låter dig styra värmepumpen från mobilen, efter schema eller via elbolagets app – så att den sköter grundvärmen jämnt och billigt.",
      todo: ["Kontrollera att din modell stöds.", "Låt pumpen gå jämnt – sänk ett par grader i stället för att stänga av helt."],
      links: [p("varmepumpsstyrning", "Styrning för luft-luft-värmepumpen"), t("sensibo-sky", "Testat hemma: Sensibo Sky")],
    });
  }

  if (a.contract !== "kvart" && flexible) {
    steps.push({
      id: "avtal",
      priority: 85,
      theme: "Flytta i tid",
      title: a.contract === "vetej" ? "Ta reda på vilket elavtal du har" : "Se över elavtalet",
      why: "Du har förbrukning som går att flytta till billiga timmar. Men det lönar sig bara med ett elavtal med kvartspris eller timpris – med rörligt månadspris eller fast pris spelar det ingen roll när elen används.",
      todo: [
        "Titta på din förbrukning per timme i elhandlarens app.",
        "Jämför vad kvartspris hade kostat med ditt nuvarande avtal.",
      ],
      links: [g("kvartspris", "Kvartspris – när lönar det sig?"), g("sa-fungerar-tibber", "Så fungerar Tibber")],
    });
  }

  if (has("beredare")) {
    steps.push({
      id: "beredare",
      priority: 80,
      theme: "Flytta i tid",
      title: "Styr varmvattenberedaren efter elpriset",
      why: "En full beredare håller värmen i många timmar och är en av husets största förbrukare. Med ett smart relä och en kontaktor kan den värma när elen är billig" + (has("solceller") ? " – eller när solen lyser." : "."),
      todo: [
        "Låt en elinstallatör montera relä och kontaktor i elcentralen.",
        "Ge beredaren tid att värma upp – vattnet i beredaren ska hålla minst 60 grader för att undvika legionella.",
      ],
      links: [
        g("styr-varmvattenberedaren-med-kontaktor", "Styr beredaren med kontaktor"),
        p("smarta-relaer", "Smarta reläer"),
        t("plejd-golvtermostat-och-rela", "Testat hemma: Plejd-relä på beredaren"),
      ],
    });
  }

  if (has("elbil")) {
    steps.push({
      id: "elbil",
      priority: 80,
      theme: "Flytta i tid",
      title: "Ladda elbilen när elen är billigast",
      why: "Elbilen är ofta den största förbrukningen som är lätt att flytta. Smart laddning väljer de billigaste timmarna automatiskt, och effektstyrning ser till att huvudsäkringen inte går.",
      todo: [
        "Se till att laddboxen eller bilen går att styra från en app.",
        "Ladda med lägre effekt under fler timmar om ditt nätbolag har effektavgift.",
      ],
      links: [
        g("smart-laddning-elbil-tibber", "Smart laddning av elbilen"),
        v("/elpris", "Billigaste laddtiden i dag och i morgon"),
        g("effektavgift", "Har ditt nätbolag effektavgift?"),
        ...(uses("tibber") ? [g("tibber-grid-rewards", "Tibber Grid Rewards")] : []),
      ],
    });
  }

  if (has("spa")) {
    steps.push({
      id: "spa",
      priority: 75,
      theme: "Flytta i tid",
      title: "Sänk spabadets elkostnad",
      why: "Ett spabad som står varmt året runt drar mycket el. Med schemalagd värme och lägre temperatur under dyra timmar går det att få ner kostnaden utan att badet blir kallt när du vill bada.",
      todo: ["Sänk temperaturen när badet inte används.", "Värm under billiga timmar – eller med solel på sommaren."],
      links: [g("controlmyspa-spabad", "Styr spabadet med ControlMySpa"), t("controlmyspa", "Testat hemma: ControlMySpa")],
    });
  }

  if (has("golvvarme")) {
    steps.push({
      id: "golvvarme",
      priority: 65,
      theme: "Använd mindre",
      title: "Sluta värma badrumsgolvet i onödan",
      why: "Elektrisk golvvärme står ofta på dygnet runt, året om. En uppkopplad termostat sänker på natten och när ingen är hemma.",
      todo: ["Bytet av termostat görs av ett registrerat elinstallationsföretag.", "Sänk inte för mycket i badrummet på vintern."],
      links: [
        g("uppkopplade-golvtermostater", "Uppkopplade golvtermostater"),
        p("golvtermostater", "Golvtermostater"),
        ...(uses("plejd") ? [t("plejd-golvtermostat-och-rela", "Testat hemma: Plejd TRM-01")] : []),
      ],
    });
  }

  if (has("solceller") || has("batteri")) {
    steps.push({
      id: "sol",
      priority: 60,
      theme: "Flytta i tid",
      title: has("batteri") ? "Låt batteriet och solcellerna jobba smart" : "Använd mer av solelen själv",
      why: "Skattereduktionen för såld el är borta sedan 2026, så solelen är mest värd när du använder den själv. Lägg elbil, varmvatten och disk på soliga timmar.",
      todo: has("batteri")
        ? ["Låt batteriet ladda när elen är billig och användas när den är dyr.", "Kontrollera att styrningen tar hänsyn till eventuell effektavgift."]
        : ["Flytta förbrukning till mitt på dagen när solen lyser.", "Räkna försiktigt innan du köper batteri."],
      links: [
        g("solceller-och-batteri", "Solceller och batteri 2026"),
        ...(has("batteri") ? [g("smart-styrning-hembatteri", "Smart styrning av hembatteriet")] : []),
      ],
    });
  }

  if (old && a.heating !== "fjarrvarme" && a.heating !== "annat") {
    steps.push({
      id: "aldre-hus",
      priority: 55,
      theme: "Använd mindre",
      title: "Ett äldre hus – börja med temperaturen",
      why: "Hus från 70-talet och tidigare är byggda före de skärpta energikraven efter oljekrisen och har ofta mindre isolering än dagens hus. Värmen är därför en extra stor del av elräkningen, och varje grad lägre ger mer.",
      todo: ["Sänk en grad i taget och se hur det känns.", "Täta drag runt fönster och dörrar – det är billigt och märks direkt."],
      links: [v("/kalkylator", "Räkna på sänkt temperatur")],
    });
  }

  const smartCount = [has("elbil"), has("beredare"), has("spa"), has("luftluft"), has("golvvarme"), has("batteri")].filter(Boolean).length;
  if (smartCount >= 2) {
    const links: PlanLink[] = [];
    if (uses("homeassistant")) links.push(t("home-assistant", "Testat hemma: Home Assistant"));
    if (uses("tibber")) links.push(g("sa-fungerar-tibber", "Det här kan du koppla till Tibber"));
    if (uses("plejd")) links.push(g("plejd-smart-belysning", "Plejd för hela huset"));
    if (links.length === 0) {
      links.push(g("sa-fungerar-tibber", "Tibber – styrning direkt i elbolagets app"), t("home-assistant", "Testat hemma: Home Assistant"));
    }
    links.push(g("flytta-elforbrukningen-till-billiga-timmar", "Flytta elförbrukningen till billiga timmar"));
    steps.push({
      id: "system",
      priority: 50,
      theme: "Styr automatiskt",
      title: a.systems.length ? "Samla styrningen på ett ställe" : "Låt ett system sköta styrningen",
      why: "Du har flera saker som kan styras efter elpriset. Det blir enklast om de styrs från samma ställe – antingen elbolagets app eller ett smart hem-system som Home Assistant.",
      todo: [
        "Välj ett system som stödjer det du redan har.",
        "Låt automatiken köra en vecka eller två innan du justerar.",
      ],
      links,
    });
  }

  return steps.sort((x, y) => y.priority - x.priority);
}

// Svaren sparas i adressen så att planen går att dela och spara som bokmärke.
export function toQuery(a: Answers): string {
  const q = new URLSearchParams();
  if (a.age) q.set("bygg", a.age);
  if (a.heating) q.set("varme", a.heating);
  if (a.extras.length) q.set("har", a.extras.join(","));
  if (a.contract) q.set("avtal", a.contract);
  if (a.systems.length) q.set("system", a.systems.join(","));
  return q.toString();
}

export function fromQuery(search: string): Answers {
  const q = new URLSearchParams(search);
  const pick = <T extends readonly { id: string }[]>(list: T, v: string | null) =>
    (list.some((x) => x.id === v) ? v : "") as Id<T> | "";
  const many = <T extends readonly { id: string }[]>(list: T, v: string | null) =>
    (v ?? "").split(",").filter((x) => list.some((y) => y.id === x)) as Id<T>[];
  return {
    age: pick(AGES, q.get("bygg")),
    heating: pick(HEATING, q.get("varme")),
    extras: many(EXTRAS, q.get("har")),
    contract: pick(CONTRACTS, q.get("avtal")),
    systems: many(SYSTEMS, q.get("system")),
  };
}
