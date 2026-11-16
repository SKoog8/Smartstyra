import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import Link from "next/link";
import TestCard from "@/components/TestCard";
import Faq from "@/components/Faq";
import { TESTS, TESTER } from "@/lib/tests";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Tester: smarta prylar testade hemma",
  "Produkter för smart styrning av elen som vi har använt hemma i vardagen – med ärliga omdömen om installation, styrning och vad de har gett.",
  "/tester"
);

export default function TestsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageIntro eyebrow="Tester" title="Testat hemma, på riktigt">
        Det här är prylar {TESTER.name} använder i sin egen {TESTER.home.split(",")[0]}. Inga lånade exemplar, inga
        betalda omdömen – bara hur de fungerar i vardagen.
      </PageIntro>
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TESTS.map((t) => (
            <TestCard key={t.slug} test={t} />
          ))}
        </div>

        <section className="article max-w-3xl mt-16">
          <h2>Så testar vi</h2>
          <p>
            Testerna på Smartstyra skrivs av Martin, som är elektriker och bor i en villa på 175 kvadratmeter från
            70-talet. Huset har solceller, ett elavtal med kvartspris och använder ungefär 24 000 kWh el om året. Alla
            produkter är köpta för egna pengar – ingen tillverkare har betalat för ett test eller lånat ut något.
          </p>
          <p>
            Vi testar inte i ett labb. Produkterna används hemma, i vardagen, under lång tid – Sensibo i ett år och Home Assistant i flera år.
            Det ger andra svar än ett snabbtest. Vi ser hur installationen gick, hur appen fungerar efter några månader,
            om uppkopplingen håller och – viktigast – om produkten faktiskt hjälper till att använda mindre el eller
            flytta den till billigare timmar.
          </p>
          <h3>Det här tittar vi på</h3>
          <ul>
            <li>
              <strong>Installation.</strong> Kan du göra det själv, eller behövs en elinstallatör? Hur lång tid tog det?
            </li>
            <li>
              <strong>Styrning.</strong> Hur styrs produkten i praktiken – i sin egen app, via{" "}
              <Link href="/guider/sa-fungerar-tibber">Tibber</Link> eller via{" "}
              <Link href="/tester/home-assistant">Home Assistant</Link>?
            </li>
            <li>
              <strong>Elpris.</strong> Går det att låta produkten följa elpriset, och hur bra fungerar det?
            </li>
            <li>
              <strong>Vardagen.</strong> Stabil uppkoppling, begriplig app och vad som har krånglat.
            </li>
            <li>
              <strong>Resultatet.</strong> Vad har det gett? Har vi siffror redovisar vi dem, annars beskriver vi vad vi
              har märkt – vi hittar aldrig på besparingar.
            </li>
          </ul>
          <p>
            Vi sätter inga betyg. En siffra säger lite om hur en produkt passar just ditt hus, så vi skriver i stället
            vem produkten passar för. Produkter vi inte har använt själva hittar du bland{" "}
            <Link href="/produkter">våra jämförelser</Link> – där bygger urvalet på specifikationer och tillverkarnas
            uppgifter, och det står alltid vilket som är vilket.
          </p>

          <h2>Testerna jämförda</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Produkt</th>
                  <th>Vad den styr</th>
                  <th>Så styr Martin den</th>
                  <th>Installation</th>
                  <th>Passar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Link href="/tester/home-assistant">Home Assistant</Link></td>
                  <td>Hela huset i en app</td>
                  <td>Automationer, översikt över temperatur och förbrukning</td>
                  <td>Själv</td>
                  <td>Teknikintresserade som vill få ner elräkningen</td>
                </tr>
                <tr>
                  <td><Link href="/tester/adax-neo-wifi">Adax Neo WiFi</Link></td>
                  <td>Direktverkande elelement</td>
                  <td>Tibber-appen</td>
                  <td>Beror på modell: med stickpropp själv, fast anslutna av elinstallatör</td>
                  <td>Villor med direktverkande el som byter element</td>
                </tr>
                <tr>
                  <td><Link href="/tester/plejd-golvtermostat-och-rela">Plejd TRM-01 och REL-02</Link></td>
                  <td>Golvvärme och varmvattenberedare (via kontaktor)</td>
                  <td>Plejd-appen</td>
                  <td>Elinstallatör</td>
                  <td>De flesta, gärna vid renovering</td>
                </tr>
                <tr>
                  <td><Link href="/tester/sensibo-sky">Sensibo Sky</Link></td>
                  <td>Luft-luft-värmepump</td>
                  <td>Tibber-integrationen</td>
                  <td>Själv</td>
                  <td>Dig med luft-luft-värmepump och Tibber</td>
                </tr>
                <tr>
                  <td><Link href="/tester/controlmyspa">ControlMySpa</Link></td>
                  <td>Spabad med Balboa-styrning</td>
                  <td>Scheman i appen, översikt i Home Assistant</td>
                  <td>Själv, om badet är kompatibelt</td>
                  <td>Dig med Balboa-spa som vill sänka elkostnaden</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Faq
            title="Vanliga frågor om våra tester"
            items={[
              {
                q: "Får ni betalt av tillverkarna?",
                a: "Nej. Alla testade produkter är köpta för egna pengar, och ingen tillverkare har betalat för ett test eller lånat ut något. Vissa produktlänkar är affiliatelänkar, och det står alltid när de är det.",
              },
              {
                q: "Varför sätter ni inga betyg?",
                a: "En siffra säger lite om hur en produkt passar just ditt hus. Vi skriver i stället vad som fungerar, vad som inte gör det och vem produkten passar för.",
              },
              {
                q: "Hur länge har ni använt produkterna?",
                a: "Det varierar från produkt till produkt. Det står i varje test hur länge produkten har använts.",
              },
              {
                q: "Kan jag föreslå en produkt att testa?",
                a: "Ja, gärna. Skriv till oss via kontaktsidan. Vi testar bara sådant vi faktiskt använder hemma, så det kan ta tid.",
              },
            ]}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
