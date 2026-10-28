import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { Products } from "@/components/ProductCard";
import TibberInvite from "@/components/TibberInvite";
import { guide } from "@/lib/guides";

const meta = guide("smart-laddning-elbil-tibber");
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
        Elbilen är ofta husets största enskilda elförbrukare – och den lättaste att flytta. Bilen står ändå parkerad i
        tio timmar, så det spelar ingen roll om den laddar klockan sju på kvällen eller tre på natten. För elräkningen
        spelar det däremot stor roll.
      </p>

      <h2>Så fungerar Smartladdning</h2>
      <p>
        Du talar om när bilen ska vara klar och hur mycket den ska vara laddad. Tibber räknar ut hur lång tid laddningen
        tar och lägger den på de billigaste kvartarna fram till din avresetid. Behöver du åka tidigare trycker du på
        ”Ladda nu”.
      </p>

      <h2>Bil eller laddbox – två sätt att koppla in</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Via bilen</th>
              <th>Via laddboxen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hur</td>
              <td>Du loggar in med bilens konto i Tibber-appen</td>
              <td>Du loggar in med laddboxens konto i Tibber-appen</td>
            </tr>
            <tr>
              <td>Fungerar med</td>
              <td>Bilar från flera stora märken, t.ex. Tesla, Volkswagen, Volvo, BMW och Audi</td>
              <td>Alla elbilar, om laddboxen stöds – t.ex. Easee och Zaptec</td>
            </tr>
            <tr>
              <td>Fördel</td>
              <td>Tibber ser batterinivån och vet hur mycket som behöver laddas</td>
              <td>Fungerar oavsett bilmärke och ger tillgång till Grid Rewards</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Har du både en bil och en laddbox som stöds kan du ofta koppla in båda.</p>

      <h2>Kom igång</h2>
      <ol>
        <li>Öppna Tibber-appen och gå till Power-ups.</li>
        <li>Välj ditt bilmärke eller din laddbox och logga in med kontot hos tillverkaren.</li>
        <li>Slå på Smartladdning.</li>
        <li>Ställ in avresetid och önskad laddnivå. Det går att ha olika tider olika dagar.</li>
        <li>Sätt i kabeln när du kommer hem – Tibber sköter resten.</li>
      </ol>

      <h2>Effektkontroll: ladda utan att säkringen går</h2>
      <p>
        En laddbox kan dra upp till 11 kW. Står samtidigt ugnen, bastun och värmepumpen och går kan huvudsäkringen lösa
        ut. Med Effektkontroll sänker Tibber laddeffekten när resten av huset drar mycket. Det kräver att både laddboxen
        och en <Link href="/guider/mat-din-elforbrukning">realtidsmätare på elmätaren</Link>, till exempel Tibber Pulse,
        är kopplade till appen.
      </p>
      <Products ids={["tibber-pulse-p1"]} />

      <h2>Se upp för effektavgiften</h2>
      <p>
        Om ditt nätbolag tar betalt för din högsta effekt kan det kosta mer än det smakar att ladda på full effekt
        under den billigaste timmen. Med Effektkontroll kan du sätta en gräns för hur mycket huset får dra totalt.
      </p>

      <Callout title="Räkneexempel" tone="butter">
        <p>
          Kör du 1 500 mil om året och bilen drar 1,8 kWh per mil laddar du ungefär 2 700 kWh. Om smart laddning gör
          varje kWh 50 öre billigare sparar du runt 1 350 kronor om året – innan Grid Rewards.
        </p>
      </Callout>

      <h2>Tjäna extra med Grid Rewards</h2>
      <p>
        Med en kompatibel laddbox kan bilen också delta i Grid Rewards: Tibber pausar eller startar laddningen en kort
        stund när elnätet behöver det, och du får betalt.{" "}
        <Link href="/guider/tibber-grid-rewards">Så fungerar Grid Rewards</Link>.
      </p>

      <TibberInvite />

      <h2>Förvärmning</h2>
      <p>
        Förvärmer du bilen på vintermorgnar tar den el från laddboxen. Det är bra – det sparar batteriet – men tänk på att
        förvärmningen sker strax före avresan, ofta under en dyr morgontimme. Den förbrukningen kan Smartladdning
        inte flytta, men den är liten jämfört med själva laddningen.
      </p>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Fungerar smart laddning utan Tibber?",
            a: "Ja. Många laddboxar och bilar har egen schemaläggning, och vissa kan ladda efter elpriset. Men du behöver ett elavtal med timpris eller kvartspris för att tjäna på det.",
          },
          {
            q: "Vad händer om jag behöver bilen tidigare än planerat?",
            a: "Tryck på Ladda nu i appen, så startar laddningen direkt. Det kan bli dyrare än planen, men bilen laddas.",
          },
          {
            q: "Laddar Tibber bilen till 100 procent?",
            a: "Bara om du ställer in det. Välj den laddnivå du behöver i vardagen – många nöjer sig med 80 procent för att skona batteriet.",
          },
        ]}
      />
    </ArticlePage>
  );
}
