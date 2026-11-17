import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import ElavtalJamfor from "@/components/ElavtalJamfor";
import Faq from "@/components/Faq";
import { pageMetadata } from "@/lib/metadata";
import data from "../../../data/elavtal.json";

export const metadata = pageMetadata(
  "Elavtal med kvartspris – jämför elbolagen",
  "Jämför elbolag med kvartspris: månadsavgift, påslag och vad de kan styra åt dig – elbil, värmepump, hembatteri och betalt för att hjälpa elnätet.",
  "/elavtal"
);

const checked = new Date(data.checkedAt).toLocaleDateString("sv-SE", { dateStyle: "long", timeZone: "Europe/Stockholm" });

export default function ElavtalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageIntro eyebrow="Elavtal" title="Elavtal med kvartspris – jämför elbolagen">
        Bara elbolag med kvartspris, eftersom det är där smart styrning lönar sig. Jämför vad de kostar – och vad de kan
        göra åt dig.
      </PageIntro>
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6">
        <p className="mb-8 text-sm text-ink/60">
          Priser och funktioner kontrollerade {checked} på elbolagens egna sidor. {data.note}
        </p>
        <ElavtalJamfor />

        <section className="article max-w-3xl mt-16">
          <h2>Varför bara kvartspris?</h2>
          <p>
            Med <Link href="/guider/kvartspris">kvartspris</Link> betalar du elbörsens pris för varje kvart du använder
            el. Det är bara då det lönar sig att flytta elbilsladdningen, varmvattnet och värmen till billiga tider. Med
            rörligt månadspris betalar du ett snitt, och då spelar det ingen roll när elen används.
          </p>
          <h2>Så väljer du</h2>
          <ul>
            <li>
              <strong>Har du lite att styra</strong> – välj lägst avgift och påslag för din förbrukning. Skillnaden
              ligger ofta på några hundralappar om året.
            </li>
            <li>
              <strong>Har du elbil, värmepump eller hembatteri</strong> – titta på vad elbolaget kan styra själv. Det
              som flyttas automatiskt till billiga kvartar kan vara värt mer än skillnaden i avgift.{" "}
              <Link href="/ditt-hus">Gör en plan för ditt hus</Link>.
            </li>
            <li>
              <strong>Har du redan smart styrning</strong>, till exempel Home Assistant eller en laddbox med egen app,
              räcker ett billigt kvartsprisavtal. Styrningen sköter du då själv.
            </li>
            <li>
              <strong>Se upp med kampanjer.</strong> Fri månadsavgift i några månader är bra, men jämför priset som
              gäller när kampanjen är slut.
            </li>
          </ul>
          <Faq
            title="Vanliga frågor om elavtal med kvartspris"
            items={[
              {
                q: "Är elpriset olika hos olika elbolag?",
                a: "Nej, spotpriset från elbörsen är detsamma. Det som skiljer är elbolagets månadsavgift, påslag och rörliga kostnader för inköp – och vilka tjänster som ingår.",
              },
              {
                q: "Vad är rörliga kostnader?",
                a: "Kostnader elbolaget har när det köper in el, till exempel handels- och balanskostnader, elcertifikat och avgifter till Svenska kraftnät. De varierar och redovisas ofta först på fakturan. Tibber anger sin i förväg.",
              },
              {
                q: "Kan jag byta elbolag när som helst?",
                a: "Ja, kvartsprisavtalen i jämförelsen har ingen bindningstid. Bytet tar minst 14 dagar. Elnätet byter du inte – det äger nätbolaget där du bor.",
              },
              {
                q: "Får Smartstyra betalt av elbolagen?",
                a: "Bara av Tibber, via inbjudningslänken: både du och vi får en bonus om du tecknar via den. Det står öppet vid länken, och det påverkar inte siffrorna i jämförelsen.",
              },
            ]}
          />
          <p>
            Se också <Link href="/elpris">elpriset i dag och i morgon</Link> och{" "}
            <Link href="/amnen/elavtal-och-elnat">allt om elavtal och elnät</Link>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
