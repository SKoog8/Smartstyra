import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import SavingsCalculator from "@/components/SavingsCalculator";
import Faq from "@/components/Faq";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Räkna ut hur mycket du kan sänka elräkningen", "Räkna på vad lägre inomhustemperatur, flyttad förbrukning och mindre standby kan spara i just ditt hus.", "/kalkylator");

export default function CalculatorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageIntro eyebrow="Räkna på det" title="Vad kan du spara?">
        Dra i reglagen och se vad tre enkla åtgärder kan vara värda i ditt hus. Utgå från din egen elräkning för bäst
        resultat.
      </PageIntro>
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6">
        <SavingsCalculator />
        <div className="mt-10 grid gap-4 sm:grid-cols-3 text-ink/80">
          {[
            ["/guider/smarta-elementtermostater", "Sänk temperaturen", "Smarta elementtermostater rum för rum."],
            ["/guider/flytta-elforbrukningen-till-billiga-timmar", "Flytta förbrukningen", "Så tar du vara på billiga timmar."],
            ["/guider/mat-din-elforbrukning", "Hitta standbyförbrukningen", "Mät grundlasten och hitta tjuvarna."],
          ].map(([href, title, text]) => (
            <Link key={href} href={href} className="rounded-3xl border border-sand-dark px-6 py-5 hover:bg-white transition-colors">
              <span className="font-bold text-ink">{title} →</span>
              <span className="block mt-1 text-[0.95rem]">{text}</span>
            </Link>
          ))}
        </div>

        <section className="article max-w-3xl mt-16">
          <h2>Så räknar kalkylatorn</h2>
          <p>
            Kalkylatorn räknar på tre åtgärder var för sig och lägger sedan ihop dem. Siffrorna är uppskattningar per
            år, avrundade till tiotal kronor. De bygger på dina egna uppgifter, så ju närmare din verkliga elräkning du
            kommer, desto bättre blir resultatet.
          </p>
          <h3>1. Sänkt inomhustemperatur</h3>
          <p>
            Vi utgår från{" "}
            <a href="https://www.energimyndigheten.se/effektiv-energianvandning/hushall/spara-energi-enkla-tips/">Energimyndighetens tumregel</a>{" "}
            att varje grad lägre inomhustemperatur ger ungefär fem procent mindre energi till uppvärmningen. Kalkylatorn
            tar din årsförbrukning gånger andelen som går till uppvärmning, gånger fem procent per grad, gånger ditt
            totala elpris. Sänkningen räknas som ett snitt över dygnet – två graders nattsänkning under åtta timmar
            motsvarar ungefär en dryg halv grad i snitt.
          </p>
          <h3>2. Flyttad förbrukning</h3>
          <p>
            Här räknar vi med hur många kilowattimmar per dygn du flyttar från dyra till billiga timmar, gånger
            prisskillnaden mellan dem, gånger årets dagar. Det kräver ett elavtal med timpris eller{" "}
            <Link href="/guider/kvartspris">kvartspris</Link> – med rörligt månadspris spelar det ingen roll när du
            använder elen. Prisskillnaden varierar mycket mellan elområden och årstider, så välj hellre en försiktig
            siffra.
          </p>
          <h3>3. Mindre standby</h3>
          <p>
            Standby är effekt som går dygnet runt. Kalkylatorn räknar watt gånger årets timmar, delat med tusen för att
            få kilowattimmar, gånger ditt elpris. Ta reda på din egen grundlast genom att läsa av elmätaren en natt när
            inget stort går – <Link href="/guider/mat-din-elforbrukning">så mäter du förbrukningen</Link>.
          </p>
          <h3>Det här räknar kalkylatorn inte med</h3>
          <ul>
            <li>
              <strong>Effektavgift.</strong> Har ditt nätbolag effektavgift kan du spara mer genom att sprida ut
              förbrukningen. <Link href="/guider/effektavgift">Läs om effektavgiften</Link>.
            </li>
            <li>
              <strong>Värmepump.</strong> Med värmepump ger varje sparad grad färre kilowattimmar än med direktverkande
              el, eftersom pumpen redan ger mer värme per kWh. Sätt andelen uppvärmning lägre om du har värmepump.
            </li>
            <li>
              <strong>Solel.</strong> El du använder från egna solceller kostar dig inte elpriset. Läs om{" "}
              <Link href="/guider/solceller-och-batteri">solceller och batteri</Link>.
            </li>
            <li>
              <strong>Kostnaden för prylarna.</strong> Jämför besparingen med vad termostater, reläer eller en
              elinstallatör kostar. Se <Link href="/produkter">våra produktjämförelser</Link>.
            </li>
          </ul>

          <Faq
            title="Vanliga frågor om kalkylatorn"
            items={[
              {
                q: "Var hittar jag mitt totala elpris per kWh?",
                a: "Lägg ihop elhandelsfakturan och elnätsfakturan för en månad och dela med antalet kilowattimmar. Då får du med elpris, påslag, elnätsavgift, energiskatt och moms. Gör gärna samma sak för en vintermånad och en sommarmånad och ta ett snitt.",
              },
              {
                q: "Hur mycket av min el går till uppvärmning?",
                a: "I ett hus med direktverkande el eller elpanna går ofta mer än hälften av elen till uppvärmning och varmvatten. Med värmepump är andelen lägre. Jämför förbrukningen en sommarmånad med en vintermånad för att få en uppfattning.",
              },
              {
                q: "Stämmer tumregeln om fem procent per grad?",
                a: "Den är en tumregel från Energimyndigheten och ett bra riktvärde. Hur mycket det blir i ditt hus beror på klimatet där du bor, hur välisolerat huset är och hur mycket av energin som går till varmvatten, som inte påverkas av inomhustemperaturen.",
              },
              {
                q: "Varför blir flyttad förbrukning så lite värd?",
                a: "Med små prisskillnader blir vinsten liten per kilowattimme. Det är först med större förbrukare som elbil, varmvattenberedare eller värmepump, och med stora skillnader mellan dyra och billiga timmar, som det blir hundralappar eller mer per år.",
              },
            ]}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
