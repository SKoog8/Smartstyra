import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import HusPlan from "@/components/HusPlan";
import Faq from "@/components/Faq";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Elplan för ditt hus – så sänker du elräkningen",
  "Svara på fem frågor om huset – byggår, uppvärmning, elbil, spabad och elavtal – och få en plan för hur du sänker och styr elförbrukningen.",
  "/ditt-hus"
);

export default function DittHusPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageIntro eyebrow="Ditt hus" title="Gör en elplan för ditt hus">
        Fem frågor om huset, och du får en plan med det som gör mest skillnad för just dig – med guider, tester och
        produkter som passar.
      </PageIntro>
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6">
        <HusPlan />

        <section className="article max-w-3xl mt-16">
          <h2>Så tas planen fram</h2>
          <p>
            Planen bygger på samma tre vägar som resten av Smartstyra: <strong>använd mindre</strong>,{" "}
            <strong>flytta förbrukningen i tid</strong> och <strong>låt smarta prylar sköta det</strong>. Uppvärmningen
            kommer oftast först, eftersom den är den största delen av elräkningen i de flesta villor. Därefter kommer
            stora förbrukare som går att flytta, som varmvattenberedaren, elbilen och spabadet.
          </p>
          <p>
            Vi räknar inte fram någon besparing i kronor – den beror på ditt elområde, ditt elavtal och hur huset
            används. Vill du ha en siffra kan du <Link href="/kalkylator">räkna på det i kalkylatorn</Link> och se{" "}
            <Link href="/elpris">elpriset i ditt elområde</Link>.
          </p>
          <Faq
            title="Vanliga frågor om planen"
            items={[
              {
                q: "Sparas mina svar?",
                a: "Nej, inte hos oss. Svaren ligger bara i adressen till sidan, så att du kan spara planen som bokmärke eller skicka länken till någon.",
              },
              {
                q: "Varför ska jag mäta först?",
                a: "För att veta var vinsten finns. Två hus med samma uppvärmning kan använda elen helt olika, och en mätning visar vad som faktiskt drar mest hos dig.",
              },
              {
                q: "Behöver jag en elinstallatör?",
                a: "För allt som sitter i elcentralen eller den fasta installationen, som reläer, kontaktorer och golvtermostater, ja. Smarta uttag, elementtermostater och styrenheter för luft-luft-värmepumpar kan du oftast sätta upp själv.",
              },
              {
                q: "Mitt hus passar inte in i alternativen – vad gör jag?",
                a: "Välj det som ligger närmast. Hör gärna av dig via kontaktsidan om något saknas, så bygger vi ut planen.",
              },
            ]}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
