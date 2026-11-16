import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import CategoryIcon from "@/components/CategoryIcon";
import Faq from "@/components/Faq";
import { CATEGORIES, YEAR, productsIn } from "@/lib/products";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(`Smarta prylar som sänker elräkningen ${YEAR}`, "Smarta uttag, elementtermostater, värmepumpsstyrning och energimätare som vi rekommenderar – med för- och nackdelar.", "/produkter");

const TONES = ["bg-mint", "bg-sky", "bg-butter", "bg-clay"];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageIntro eyebrow="Produkter" title="Prylarna som gör jobbet">
        Vi rekommenderar bara sådant som faktiskt hjälper dig att använda mindre el eller flytta den till billigare
        timmar. Inga gadgets för gadgetarnas skull.
      </PageIntro>
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {CATEGORIES.map((c, i) => (
            <Link
              key={c.slug}
              href={`/produkter/${c.slug}`}
              className={`${TONES[i % TONES.length]} group rounded-3xl p-7 sm:p-8 flex flex-col min-h-[15rem] transition-transform hover:-translate-y-1`}
            >
              <CategoryIcon slug={c.slug} className="w-12 h-12 text-ink" />
              <h2 className="mt-5 text-2xl sm:text-3xl font-extrabold text-ink">{c.name}</h2>
              <p className="mt-2 text-ink/70 leading-relaxed max-w-md">{c.description}</p>
              <span className="mt-auto pt-5 text-sm font-semibold text-ink">
                {productsIn(c.slug).length} produkter{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>

        <section className="article max-w-3xl mt-16">
          <h2>Så väljer du rätt smarta prylar för villan</h2>
          <p>
            De flesta villor kan sänka elräkningen utan att byta värmesystem. Det handlar om tre saker: att använda
            mindre el, att flytta förbrukningen till de timmar då elen är billig och att låta prylarna sköta det
            automatiskt. Produkterna på den här sidan är valda för att göra minst en av de sakerna – inga gadgets för
            gadgetarnas skull.
          </p>
          <p>
            Börja där elen går. I en eluppvärmd villa är det oftast värmen, sedan varmvattnet och – om du har en –
            elbilen. Därför gör smarta termostater, styrning av värmepumpen och styrning av varmvattenberedaren
            störst skillnad för de flesta. Smarta uttag och energimätare hjälper dig att hitta förbrukare du inte visste
            om, och att se vad åtgärderna faktiskt ger.{" "}
            <Link href="/guider/mat-din-elforbrukning">Så mäter du din förbrukning</Link>.
          </p>
          <h3>Tänk på det här innan du köper</h3>
          <ul>
            <li>
              <strong>Välj system först, pryl sedan.</strong> Har du Tibber, Apple Hem eller Home Assistant – välj
              prylar som fungerar där. Wi-Fi fungerar direkt, medan Zigbee, Z-Wave och Thread kräver en hubb men
              belastar inte routern. Matter gör att samma pryl kan användas i flera system.
            </li>
            <li>
              <strong>Lokalt är tryggare än molnet.</strong> En pryl som styrs lokalt fortsätter att följa sitt schema
              även om internet eller tillverkarens tjänst går ner.
            </li>
            <li>
              <strong>Styrning efter elpriset kräver rätt avtal.</strong> Med timpris eller{" "}
              <Link href="/guider/kvartspris">kvartspris</Link> tjänar du på att flytta förbrukningen. Med rörligt
              månadspris spelar det ingen roll när du använder elen.
            </li>
            <li>
              <strong>Fast installation kräver elinstallatör.</strong> Golvtermostater, reläer i elcentralen och
              energimätare ska installeras av ett registrerat elinstallationsföretag. Smarta uttag,
              elementtermostater och styrning av luft-luft-värmepumpar kan du sätta upp själv.
            </li>
          </ul>
          <p>
            En del produkter har vi använt hemma i vardagen – de är märkta <Link href="/tester">Testat hemma</Link>.
            Övriga har vi valt utifrån tillverkarnas specifikationer, kompatibilitet med vanliga smarta hem-system och
            vad som fungerar i svenska hus. Vi skriver alltid vad som gäller.
          </p>

          <h2>Produktkategorierna jämförda</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Kategori</th>
                  <th>Vad den gör</th>
                  <th>Installation</th>
                  <th>Styrning efter elpris</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Link href="/produkter/smarta-uttag">Smarta uttag</Link></td>
                  <td>Mäter och slår av och på lösa apparater</td>
                  <td>Själv</td>
                  <td>Via schema, Home Assistant eller Homey</td>
                </tr>
                <tr>
                  <td><Link href="/produkter/elementtermostater">Elementtermostater</Link></td>
                  <td>Sänker värmen rum för rum i vattenburna element</td>
                  <td>Själv</td>
                  <td>Via till exempel Tibber (Netatmo) eller Home Assistant</td>
                </tr>
                <tr>
                  <td><Link href="/produkter/varmepumpsstyrning">Värmepumpsstyrning</Link></td>
                  <td>Gör luft-luft-värmepumpen smart via IR</td>
                  <td>Själv</td>
                  <td>Via till exempel Tibber (Sensibo) eller Home Assistant</td>
                </tr>
                <tr>
                  <td><Link href="/produkter/golvtermostater">Golvtermostater</Link></td>
                  <td>Styr elektrisk golvvärme efter schema</td>
                  <td>Elinstallatör</td>
                  <td>Via till exempel Tibber (Ebeco) eller Home Assistant</td>
                </tr>
                <tr>
                  <td><Link href="/produkter/smarta-relaer">Smarta reläer</Link></td>
                  <td>Styr varmvattenberedare och andra fasta förbrukare via kontaktor</td>
                  <td>Elinstallatör</td>
                  <td>Via Home Assistant eller Homey</td>
                </tr>
                <tr>
                  <td><Link href="/produkter/energimatare">Energimätare</Link></td>
                  <td>Visar hela husets förbrukning i realtid</td>
                  <td>Själv (HAN-läsare) eller elinstallatör (elcentral)</td>
                  <td>Mäter – styr inte själv, men skyddar säkringen vid elbilsladdning</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Faq
            title="Vanliga frågor om smarta prylar"
            items={[
              {
                q: "Vilken smart pryl ger störst besparing?",
                a: "Det beror på huset. Går mest el till värme ger smarta termostater eller styrning av värmepumpen störst effekt. Har du elbil eller varmvattenberedare ger det mest att flytta laddningen och uppvärmningen till billiga timmar.",
              },
              {
                q: "Behöver jag ett smart hem-system som Home Assistant?",
                a: "Nej. Många prylar kan styras direkt från sin egen app eller från elbolagets app, till exempel Tibber. Ett smart hem-system behövs först när du vill samla allt på ett ställe eller bygga egna regler efter elpriset.",
              },
              {
                q: "Vad betyder Matter?",
                a: "Matter är en gemensam standard för smarta hem. En Matter-pryl kan användas i flera system samtidigt, till exempel Apple Hem, Google Home och Home Assistant, utan tillverkarens egen app.",
              },
              {
                q: "Varför länkar ni till Amazon?",
                a: "Amazonlänkarna är affiliatelänkar. Köper du via dem kan vi få en liten ersättning, utan att det påverkar priset. Det påverkar inte heller vilka produkter vi rekommenderar.",
              },
            ]}
          />
        </section>

        <p className="mt-8 text-sm text-ink/60 max-w-2xl">
          Amazonlänkarna är affiliatelänkar. Köper du via dem kan vi få en liten ersättning, utan att det påverkar priset eller
          vilka produkter vi rekommenderar. <Link href="/om#finansiering" className="underline">Så väljer vi produkter</Link>.
        </p>
      </main>
      <Footer />
    </div>
  );
}
