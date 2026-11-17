import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import Elpris from "@/components/Elpris";
import Faq from "@/components/Faq";
import { pageMetadata } from "@/lib/metadata";
import outlook from "../../../data/veckoprognos.json";

// Veckoprognosen visas bara medan veckan pågår. Sidan byggs om var timme så att en gammal prognos försvinner.
export const revalidate = 3600;

export const metadata = pageMetadata(
  "Elpris i dag och i morgon – SE1, SE2, SE3, SE4",
  "Se elpriset timme för timme i ditt elområde i dag och i morgon, hitta billigaste tiden att ladda elbilen och se hur veckan brukar se ut.",
  "/elpris"
);

export default function ElprisPage() {
  const today = new Intl.DateTimeFormat("sv-SE", { timeZone: "Europe/Stockholm" }).format(new Date());
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageIntro eyebrow="Elpris" title="Elpriset i dag och i morgon">
        Välj ditt elområde och se när elen är billigast – så vet du när elbilen, varmvattnet och tvätten ska gå.
      </PageIntro>
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6">
        <Elpris outlook={outlook.to >= today && outlook.from <= today ? outlook : null} />

        <section className="article max-w-3xl mt-16">
          <h2>Så använder du elpriset</h2>
          <p>
            Elpriset för nästa dygn bestäms på elbörsen dagen innan och publiceras strax efter lunch. Sedan oktober
            2025 sätts priset per kvart, och här visar vi snittet för varje timme. Med ett elavtal med{" "}
            <Link href="/guider/kvartspris">kvartspris</Link> eller timpris betalar du det priset för den el du använder
            – då lönar det sig att flytta förbrukning till de billiga timmarna.
          </p>
          <ul>
            <li>
              <strong>Elbilen:</strong> ladda i det billigaste fönstret. Låt helst laddboxen eller elhandlarens app sköta
              det automatiskt – <Link href="/guider/smart-laddning-elbil-tibber">så laddar du smart</Link>.
            </li>
            <li>
              <strong>Varmvattnet:</strong> en varmvattenberedare kan värma under natten och hålla värmen hela dagen.{" "}
              <Link href="/guider/styr-varmvattenberedaren-med-kontaktor">Så styr du beredaren</Link>.
            </li>
            <li>
              <strong>Värmen:</strong> huset håller värmen i flera timmar, så värmepumpen kan vila under de dyraste
              timmarna. <Link href="/guider/styr-bergvarmepumpen-efter-elpriset">Så styr du värmepumpen</Link>.
            </li>
            <li>
              <strong>Disk och tvätt:</strong> använd fördröjd start eller ett{" "}
              <Link href="/produkter/smarta-uttag">smart uttag</Link>.
            </li>
          </ul>
          <h2>Vilket elområde bor jag i?</h2>
          <p>
            Sverige är indelat i fyra elområden. SE1 är norra Norrland, SE2 södra Norrland, SE3 Svealand och större
            delen av Götaland, och SE4 Skåne och södra Småland. Elområdet står på din elfaktura. Priset är oftast lägst
            i norr, där mycket el produceras, och högst i söder.
          </p>

          <Faq
            title="Vanliga frågor om elpriset"
            items={[
              {
                q: "Vad ingår i priset som visas?",
                a: "Spotpriset från elbörsen, med eller utan moms beroende på vad du väljer. Elhandlarens påslag, elnätsavgiften och energiskatten tillkommer, så det du betalar totalt per kWh är högre.",
              },
              {
                q: "När kommer morgondagens elpris?",
                a: "Elbörsen räknar fram priserna för nästa dygn strax efter lunch. De brukar synas här runt klockan 13, och sidan uppdateras var 15:e minut.",
              },
              {
                q: "Finns det en prognos för hela veckan?",
                a: "Priset är bara bestämt för i dag och i morgon. Längre fram finns bara bedömningar. Vi sammanfattar Tibbers veckoprognos per elområde, och under rubriken Så brukar veckan se ut visar vi snittet för varje veckodag de senaste veckorna.",
              },
              {
                q: "Lönar det sig att flytta förbrukningen?",
                a: "Ja, om du har ett elavtal med kvartspris eller timpris och prisskillnaden under dygnet är stor. Räkna på ditt eget hus i kalkylatorn.",
              },
            ]}
          />
          <p>
            Funderar du på elavtal? <Link href="/elavtal">Jämför elbolagen med kvartspris</Link>. Vill du veta vad som
            passar just ditt hus? <Link href="/ditt-hus">Gör en elplan för ditt hus</Link> eller{" "}
            <Link href="/kalkylator">räkna på besparingen</Link>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
