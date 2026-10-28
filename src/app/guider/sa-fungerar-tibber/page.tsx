import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { Products } from "@/components/ProductCard";
import { guide } from "@/lib/guides";

const meta = guide("sa-fungerar-tibber");
const path = `/guider/${meta.slug}`;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: path },
};

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        Tibber är ett elbolag, men de flesta väljer det för appen. Elen kostar ungefär som hos andra elhandlare med
        rörligt pris – skillnaden är att Tibber kan styra värmepumpen, elementen, elbilen och hembatteriet så att de
        använder el när den är billig. Här går vi igenom hur det fungerar och vad du kan koppla in.
      </p>

      <h2>Elavtalet: kvartspris och en fast månadsavgift</h2>
      <p>
        Med Tibber betalar du elbörsens pris för varje kvart du använder el, plus ett litet fast påslag per kWh och en
        fast månadsavgift på 49 kronor. Det finns ingen bindningstid. Det betyder att du tjänar på att använda el när
        den är billig – och betalar mer om du använder mycket när den är dyr.
      </p>
      <p>
        Elnätet byter du inte. Nätavgiften, effektavgiften om ditt nätbolag har en sådan, och energiskatten betalar du
        som vanligt till nätbolaget. Tibber påverkar bara själva elpriset.
      </p>
      <Callout title="Kontrollera alltid aktuella villkor">
        <p>
          Påslag och avgifter ändras ibland. Se Tibbers egen sammanfattning av avtalsvillkoren innan du byter.
        </p>
      </Callout>

      <h2>Appen</h2>
      <p>I appen ser du morgondagens priser, din förbrukning och vad den kostat. Det är också där du kopplar in prylar:</p>
      <ul>
        <li>
          <strong>Power-ups</strong> är Tibbers namn på integrationer. Du väljer märke och loggar in med ditt konto hos
          tillverkaren, så får Tibber styra enheten.
        </li>
        <li>
          <strong>Tibber Labs</strong> är integrationer i beta. De slås på under ”Du” i appen och fungerar i regel som
          de färdiga, men kan ha buggar.
        </li>
      </ul>

      <h2>Tibber Pulse: förbrukningen i realtid</h2>
      <p>
        Tibber Pulse är en liten dosa som du kopplar till HAN-porten på din elmätare. Den skickar förbrukningen till
        appen i realtid i stället för en gång per timme. Pulse behövs också för <strong>Effektkontroll</strong>, som
        sänker laddeffekten till elbilen om resten av huset drar mycket, så att huvudsäkringen inte löser ut.
      </p>
      <p>
        HAN-porten måste aktiveras av ditt nätbolag, vilket är kostnadsfritt. Läs mer i{" "}
        <Link href="/guider/mat-din-elforbrukning">guiden om att mäta förbrukningen</Link>.
      </p>
      <Products ids={["tibber-pulse-p1"]} />

      <h2>Det här kan du koppla till Tibber</h2>
      <h3>Uppvärmning</h3>
      <p>
        Tibber kan styra flera värmepumpar, termostater och element. När smart uppvärmning är på flyttar Tibber
        uppvärmningen till billigare timmar och låter temperaturen gå som mest en grad under den du ställt in – tre
        grader i dagsbesparing och bortaläge.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Typ</th>
              <th>Exempel på integrationer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bergvärme och luft-vatten</td>
              <td>NIBE via myUplink, CTC, Ngenic Tune för flera andra märken</td>
            </tr>
            <tr>
              <td>Luft-luft-värmepump</td>
              <td>Sensibo, Mitsubishi via MELCloud (i Tibber Labs)</td>
            </tr>
            <tr>
              <td>Elelement</td>
              <td>
                <Link href="/guider/adax-wifi-element">Adax</Link>, Mill
              </td>
            </tr>
            <tr>
              <td>Vattenburna element</td>
              <td>
                <Link href="/guider/smarta-elementtermostater">Netatmo-termostater</Link>
              </td>
            </tr>
            <tr>
              <td>Elektrisk golvvärme</td>
              <td>
                <Link href="/guider/uppkopplade-golvtermostater">Ebeco</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Elbil</h3>
      <p>
        Smartladdning planerar laddningen till dygnets billigaste timmar och ser till att bilen är klar till din
        avresetid. Tibber kan kopplas direkt till bilar från flera stora märken eller till en uppkopplad laddbox, till
        exempel Easee eller Zaptec. <Link href="/guider/smart-laddning-elbil-tibber">Så kommer du igång</Link>.
      </p>

      <h3>Hembatteri och solceller</h3>
      <p>
        Med Smartstyrning laddar Tibber batteriet när elen är billig och använder eller säljer den när den är dyr.
        Homevolt, Huawei och SolarEdge kopplas direkt i appen, medan flera andra märken kräver Tibber Bridge.{" "}
        <Link href="/guider/smart-styrning-hembatteri">Läs guiden om hembatterier</Link>.
      </p>

      <h3>Grid Rewards</h3>
      <p>
        Elbilen och hembatteriet kan också tjäna pengar genom att hjälpa till att hålla elnätet i balans.{" "}
        <Link href="/guider/tibber-grid-rewards">Så fungerar Grid Rewards</Link>.
      </p>

      <h2>Det här kan Tibber inte styra (än)</h2>
      <p>
        Fast installerade förbrukare som varmvattenberedaren, elpatronen och spabadet har ingen egen integration. De
        kan du styra med ett smart relä och ett smart hem-system som läser elpriset.{" "}
        <Link href="/guider/styr-varmvattenberedaren-med-kontaktor">Så styr du varmvattenberedaren</Link>.
      </p>

      <h2>Passar Tibber dig?</h2>
      <ul>
        <li>
          <strong>Ja, om</strong> du har elbil, värmepump, elelement eller hembatteri som kan styras, och vill att det
          sköter sig självt.
        </li>
        <li>
          <strong>Kanske inte, om</strong> du använder mest el på morgnar och kvällar och inte har något att flytta. Då
          betalar du de dyra kvartarna fullt ut, och ett vanligt rörligt månadsavtal kan bli billigare.
        </li>
      </ul>
      <p>
        Oavsett elbolag kan det vara värt att räkna på din egen förbrukning först.{" "}
        <Link href="/kalkylator">Prova kalkylatorn</Link>.
      </p>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Måste jag ha Tibber Pulse?",
            a: "Nej. Utan Pulse fungerar avtalet och styrningen som vanligt, men du ser förbrukningen i efterhand i stället för i realtid. Pulse behövs för Effektkontroll vid elbilsladdning.",
          },
          {
            q: "Kan jag använda Tibber-appen utan att vara elkund?",
            a: "Smart styrning, Smartladdning och Grid Rewards kräver elavtal med Tibber.",
          },
          {
            q: "Byter jag nätbolag om jag går till Tibber?",
            a: "Nej. Elnätet ägs av ditt lokala nätbolag och går inte att byta. Du byter bara elhandlare.",
          },
        ]}
      />
    </ArticlePage>
  );
}
