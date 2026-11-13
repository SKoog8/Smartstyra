import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { Products } from "@/components/ProductCard";
import TibberInvite from "@/components/TibberInvite";
import { guide } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

const meta = guide("tibber-pulse");
const path = `/guider/${meta.slug}`;

export const metadata = pageMetadata(meta.seoTitle ?? meta.title, meta.description, path, true);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        Tibber Pulse är en liten dosa som sitter i elmätaren och visar husets förbrukning i realtid i Tibber-appen.
        Den är en av de vanligaste HAN-läsarna i Sverige – men vad gör den egentligen, och behöver du en?
      </p>

      <h2>Vad gör Tibber Pulse?</h2>
      <ul>
        <li>
          <strong>Förbrukning i realtid.</strong> I stället för att se förbrukningen timme för timme dagen efter ser du
          den direkt. Sätt på ugnen och se kurvan stiga.
        </li>
        <li>
          <strong>Hittar eltjuvar.</strong> Med realtidsdata är det lätt att se grundlasten – det huset drar när ingen gör
          något – och hitta apparater som drar i onödan.{" "}
          <Link href="/guider/mat-din-elforbrukning">Så mäter du förbrukningen</Link>.
        </li>
        <li>
          <strong>Skyddar säkringen.</strong> Med Effektkontroll sänker Tibber laddeffekten till elbilen när resten av
          huset drar mycket, så att huvudsäkringen inte går. Det kräver en laddbox som är kopplad till Tibber-appen.{" "}
          <Link href="/guider/smart-laddning-elbil-tibber">Så laddar du elbilen smart</Link>.
        </li>
        <li>
          <strong>Solel.</strong> Har du solceller visar Pulse även när du skickar ut el på nätet.{" "}
          <Link href="/guider/solceller-och-batteri">Så får du ut mest av solelen</Link>.
        </li>
      </ul>

      <h2>Pulse P1 eller Pulse HAN – vilken ska du ha?</h2>
      <p>
        Det finns två varianter, och vilken du behöver beror på kontakten i din elmätare. Titta på porten – den sitter
        oftast bakom en lucka på mätaren:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Variant</th>
              <th>Kontakt</th>
              <th>Känns igen på</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pulse P1</td>
              <td>RJ12</td>
              <td>En liten port, ungefär som ett gammalt telefonuttag</td>
            </tr>
            <tr>
              <td>Pulse HAN</td>
              <td>RJ45</td>
              <td>Samma storlek som en vanlig nätverkskabel</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Är du osäker kan ditt nätbolag berätta vilken mätare du har.</p>

      <h2>Så kommer du igång</h2>
      <ol>
        <li>
          <strong>Aktivera HAN-porten.</strong> Porten är avstängd från början. Be ditt nätbolag aktivera den – det är
          kostnadsfritt och går ofta att göra på deras Mina sidor.
        </li>
        <li>
          <strong>Sätt i Pulse.</strong> Pulse får ström från mätaren. Med vissa äldre mätare behöver den kopplas till en
          extern strömkälla med en micro-USB-kabel under installationen.
        </li>
        <li>
          <strong>Koppla till wifi</strong> i Tibber-appen. Täckningen vid elmätaren behöver vara god – ligger mätaren i
          ett skåp utomhus kan det behövas en wifi-förstärkare.
        </li>
      </ol>

      <h2>Behöver jag vara Tibber-kund?</h2>
      <p>
        Nej, Pulse fungerar utan elavtal hos Tibber. Men vissa av de smarta funktionerna kräver avtal, bland annat
        Effektkontroll och tillgång till historisk data. Är du inte Tibber-kund och bara vill se förbrukningen i
        realtid finns andra HAN-läsare, bland annat sådana som fungerar direkt med Home Assistant och Homey.
      </p>
      <Products ids={["tibber-pulse-p1"]} />

      <Callout title="Behöver du en?">
        <p>
          <strong>Ja, om</strong> du har elbil och vill ladda snabbt utan att säkringen går, eller vill hitta vad som
          drar el i huset – eller om ditt nätbolag har <Link href="/guider/effektavgift">effektavgift</Link>.{" "}
          <strong>Troligen inte, om</strong> du bara vill se din förbrukning ungefär – det räcker ofta
          med timvärdena i elhandlarens app.
        </p>
      </Callout>

      <TibberInvite />

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Hur ofta uppdateras förbrukningen?",
            a: "Pulse läser av mätaren med några sekunders mellanrum, så förbrukningen i appen ligger mycket nära realtid.",
          },
          {
            q: "Kostar det att aktivera HAN-porten?",
            a: "Nej. Nätbolagen aktiverar porten kostnadsfritt när du ber om det.",
          },
          {
            q: "Fungerar Pulse med alla elmätare?",
            a: "Den fungerar med mätare som har en HAN-port, vilket de nya elmätarna i Sverige har. Välj Pulse P1 eller Pulse HAN beroende på vilken kontakt din mätare har.",
          },
        ]}
      />
    </ArticlePage>
  );
}
