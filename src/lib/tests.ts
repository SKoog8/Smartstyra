export interface TestMeta {
  slug: string;
  /** Produktens namn, visas på kortet i testlistan */
  product: string;
  title: string;
  /** Kortare titel för sökresultaten, när rubriken blir längre än Google visar */
  seoTitle?: string;
  description: string;
  /** Hur länge produkten har använts, t.ex. "i ett år" */
  used: string;
  /** Datum då testet publicerades (ÅÅÅÅ-MM-DD) */
  published: string;
  /** Datum då testet senast gicks igenom (ÅÅÅÅ-MM-DD) */
  updated: string;
  tone: "mint" | "sky" | "butter" | "clay";
}

/** Den som har testat produkterna hemma. */
export const TESTER = {
  name: "Martin",
  home: "villa på 175 m² från 70-talet, med solceller och kvartsprisavtal. Huset använder ungefär 24 000 kWh om året",
  about: "Martin är elektriker och har köpt alla produkter själv",
};

// Alla tester, i den ordning de visas på /tester. Varje test har sin egen sida i src/app/tester/<slug>/page.tsx.
export const TESTS: TestMeta[] = [
  {
    slug: "home-assistant",
    product: "Home Assistant",
    title: "Test: Home Assistant – så styr jag elen i hela huset",
    seoTitle: "Home Assistant – testat hemma",
    description:
      "Martin har kört Home Assistant på en Home Assistant Green i flera år. Så kom han igång, det här styr han och det här har det gett.",
    used: "i flera år",
    published: "2026-11-13",
    updated: "2026-11-13",
    tone: "sky",
  },
  {
    slug: "adax-neo-wifi",
    product: "Adax Neo WiFi",
    title: "Test: Adax Neo WiFi – elelement som styrs av Tibber",
    seoTitle: "Adax Neo WiFi – testat hemma",
    description:
      "Adax Neo WiFi kopplas direkt till Tibber, som styr värmen efter elpriset. Så fungerar det hemma hos Martin – och vem elementen passar för.",
    used: "sedan de installerades",
    published: "2026-11-13",
    updated: "2026-11-13",
    tone: "clay",
  },
  {
    slug: "plejd-golvtermostat-och-rela",
    product: "Plejd TRM-01 och REL-02",
    title: "Test: Plejd golvtermostat och kronrelä",
    seoTitle: "Plejd golvtermostat och relä – testat",
    description:
      "Martin, som är elektriker, har installerat Plejds golvtermostat och ett kronrelä som styr varmvattenberedaren. Så fungerar de i vardagen.",
    used: "sedan installationen",
    published: "2026-11-13",
    updated: "2026-11-13",
    tone: "mint",
  },
  {
    slug: "sensibo-sky",
    product: "Sensibo Sky",
    title: "Test: Sensibo Sky på en Panasonic-värmepump",
    seoTitle: "Sensibo Sky – testat hemma",
    description:
      "Sensibo Sky har styrt Martins luft-luft-värmepump från Panasonic i ett år, via Tibber. Så gick installationen och så fungerar den.",
    used: "i ett år",
    published: "2026-11-13",
    updated: "2026-11-13",
    tone: "butter",
  },
  {
    slug: "controlmyspa",
    product: "ControlMySpa",
    title: "Test: ControlMySpa – så sänker jag spabadets elkostnad",
    seoTitle: "ControlMySpa – testat hemma",
    description:
      "Ett spabad som står igång året runt kan dra omkring 4 000 kWh. Så använder Martin ControlMySpa för att värma med solel och undvika de dyraste perioderna.",
    used: "sedan badet installerades",
    published: "2026-11-13",
    updated: "2026-11-13",
    tone: "sky",
  },
];

export function test(slug: string): TestMeta {
  const t = TESTS.find((t) => t.slug === slug);
  if (!t) throw new Error(`Okänt test: ${slug}`);
  return t;
}
