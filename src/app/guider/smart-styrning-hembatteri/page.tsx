import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import TibberInvite from "@/components/TibberInvite";
import { guide } from "@/lib/guides";

const meta = guide("smart-styrning-hembatteri");
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
        De flesta hembatterier säljs tillsammans med solceller, och från fabrik gör de en enda sak: lagrar solel på
        dagen och använder den på kvällen. Det fungerar bra på sommaren. Men från oktober till mars finns det knappt
        någon solel att lagra, och då står batteriet mest still. Med smart styrning får batteriet jobba året runt.
      </p>

      <h2>Tre sätt ett batteri kan tjäna pengar</h2>
      <ol>
        <li>
          <strong>Egen solel.</strong> Lagra överskottet på dagen i stället för att sälja det billigt, och använd det när
          elen är dyr.
        </li>
        <li>
          <strong>Prisskillnader.</strong> Ladda från elnätet när elen är billig och använd den – eller sälj den – när
          den är dyr. Det fungerar även på vintern.
        </li>
        <li>
          <strong>Stödtjänster.</strong> Låt batteriet hjälpa till att hålla elnätet i balans och få betalt för det.
          Det är ofta här de största intäkterna finns.
        </li>
      </ol>
      <p>Punkt två och tre kräver att någon styr batteriet efter elpriset och elnätets behov. Det är vad smart styrning gör.</p>

      <h2>Alternativ 1: Tibber Smartstyrning</h2>
      <p>
        Är du elkund hos Tibber kan du koppla batteriet till appen och slå på Smartstyrning. Tibber laddar batteriet
        när elen är billig, använder eller säljer den när den är dyr och låter batteriet delta i{" "}
        <Link href="/guider/tibber-grid-rewards">Grid Rewards</Link>. Det ingår i Tibbers elavtal utan extra kostnad.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Så kopplas det in</th>
              <th>Märken</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Direkt i appen</td>
              <td>Homevolt, Huawei, SolarEdge</td>
            </tr>
            <tr>
              <td>Via Tibber Bridge</td>
              <td>SAJ, KOSTAL, SolaX, Solis</td>
            </tr>
            <tr>
              <td>I beta (Tibber Labs)</td>
              <td>GoodWe, Sigenergy, Sungrow</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Listan växer löpande – kontrollera i Tibber-appen under Power-ups vad som gäller för just din växelriktare.
        Tibber prioriterar alltid elbilsladdningen om du har en avresetid inställd.
      </p>

      <TibberInvite />

      <h2>Alternativ 2: en aggregator eller ditt elbolag</h2>
      <p>
        Flera företag, till exempel CheckWatt, är specialiserade på att låta hembatterier sälja stödtjänster till
        elnätet, och flera elbolag erbjuder egen batteristyrning. Villkoren skiljer sig mycket åt: hur intäkterna delas,
        om det kostar något och om du måste byta elavtal. Jämför innan du väljer, och kontrollera att din växelriktare
        stöds.
      </p>

      <h2>Alternativ 3: styr själv</h2>
      <p>
        Med Home Assistant och integrationer för växelriktaren och elpriset kan du styra batteriet helt själv. Det ger
        full kontroll, men du missar stödtjänsterna, som kräver en aggregator med avtal mot Svenska kraftnät.
      </p>

      <Callout title="Var skeptisk mot de högsta siffrorna" tone="butter">
        <p>
          Marknadsföringen visar gärna vad de bästa kunderna tjänade. Intäkterna beror på elområde, batteriets storlek,
          hur mycket el huset använder och vad elnätet betalar för stödtjänster – och de har varierat mycket från år till
          år. Räkna försiktigt.
        </p>
      </Callout>

      <h2>Effektavgiften</h2>
      <p>
        Laddar batteriet från elnätet samtidigt som huset drar mycket kan din toppeffekt öka – och därmed effektavgiften
        om ditt nätbolag har en. Kontrollera att styrningen tar hänsyn till en maxgräns för husets effekt. Tibber låter
        dig till exempel ange en högsta förbrukning per timme som batteriladdningen planeras efter.
      </p>

      <h2>Skattereduktion för grön teknik</h2>
      <p>
        Installerar du ett batteri för att lagra egen solel kan du få skattereduktion för grön teknik på arbete och
        material. Ett batteri utan egen elproduktion ger inte rätt till reduktionen. Kontrollera aktuella regler hos
        Skatteverket.
      </p>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Lönar sig ett hembatteri utan solceller?",
            a: "Det kan göra det om batteriet får sälja stödtjänster och utnyttja prisskillnader, men kalkylen är osäkrare och du går miste om skattereduktionen för grön teknik. Räkna på det med försiktiga antaganden.",
          },
          {
            q: "Sliter smart styrning på batteriet?",
            a: "Fler laddcykler innebär mer slitage. Kontrollera vad batteriets garanti säger om antal cykler eller total energi, och om styrningen tar hänsyn till det.",
          },
          {
            q: "Kan jag byta styrning senare?",
            a: "Oftast ja, men det kan kräva ny hårdvara eller att du byter elavtal. Kontrollera villkoren innan du binder upp dig.",
          },
        ]}
      />
    </ArticlePage>
  );
}
