import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { guide } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

const meta = guide("spabad-elkostnad");
const path = `/guider/${meta.slug}`;

export const metadata = pageMetadata(meta.seoTitle ?? meta.title, meta.description, path, true, meta);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        <strong>
          Ett spabads elkostnad är elen som går åt för att hålla runt tusen liter vatten vid 37–38 grader dygnet runt,
          plus det som pumparna drar när du badar och när vattnet renas.
        </strong>{" "}
        Det mesta går åt även de dagar ingen badar. Därför är spabadet en av de större posterna på elräkningen i de villor
        som har ett, och en av de lättaste att påverka.
      </p>
      <p>
        Här går vi igenom vad oberoende mätningar visar, hur du räknar ut kostnaden för ditt eget bad och vad som faktiskt
        sänker den.
      </p>

      <h2>Hur mycket el drar ett spabad?</h2>
      <p>
        De bästa siffrorna kommer från mätningar i klimatkammare hos RISE i Borås, där baden står i samma kyla och
        används på samma sätt. Ett exempel är spabadet Fjorden, som RISE mätte 2022 på uppdrag av tillverkaren. Badet
        rymmer 1 365 liter, har en värmare på 3,6 kW och stod i +7 grader med vattnet inställt på 38 grader.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Mätning (RISE, spabad Fjorden, +7 °C)</th>
              <th>Energi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ett dygn med locket på, utan bad</td>
              <td>6,42 kWh</td>
            </tr>
            <tr>
              <td>Ett dygn med ett bad på 30 minuter</td>
              <td>8,74 kWh</td>
            </tr>
            <tr>
              <td>Första uppvärmningen, från 14 till 38 grader (12,5 timmar)</td>
              <td>39,5 kWh</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Folkpool har låtit RISE testa flera av sina bad på samma sätt och räknat om resultatet till ett år med två bad i
        veckan, tre vattenbyten och Stockholms årsmedeltemperatur. Där landar modellerna på 2 210–2 521 kWh om året.
        Folkpool skriver själva att förbrukningen normalt ligger mellan 2 500 och 4 000 kWh per år, beroende på
        isolering, lock, användning och var i landet badet står.
      </p>
      <p>
        Det är mycket el. Lägg siffrorna bredvid husets övriga förbrukning – den ser du i{" "}
        <Link href="/guider/mat-din-elforbrukning">elmätaren eller elbolagets app</Link>.
      </p>

      <h2>Räkna ut vad ditt spabad kostar</h2>
      <p>
        Du behöver två saker: hur många kWh badet drar och vad en kWh kostar dig totalt, alltså elpris, nätavgift per kWh,
        energiskatt och moms. Det totala priset står på elräkningen, eller kan räknas fram i{" "}
        <Link href="/kalkylator">kalkylatorn</Link>.
      </p>
      <Callout title="Räkneexempel" tone="butter">
        <p>
          Antaganden: badet drar 2 500 kWh om året och du betalar 2 kronor per kWh allt inräknat. Byt mot dina egna
          siffror.
        </p>
        <ul>
          <li>Ett år: 2 500 kWh × 2 kr = 5 000 kr</li>
          <li>En månad i snitt: 5 000 kr / 12 ≈ 417 kr</li>
          <li>Ett bad (8,74 − 6,42 ≈ 2,3 kWh extra i RISE-mätningen): 2,3 × 2 kr ≈ 5 kr</li>
          <li>Ett vattenbyte (39,5 kWh): 39,5 × 2 kr = 79 kr</li>
        </ul>
        <p>
          Slutsatsen: själva baden kostar lite. Det dyra är att hålla vattnet varmt de dagar ingen badar.
        </p>
      </Callout>
      <p>
        Vill du räkna på uppvärmningen själv: det går åt ungefär 1,16 Wh att värma en liter vatten en grad. Tusen liter
        som ska upp 20 grader kräver alltså runt 23 kWh, plus det som läcker ut under tiden.
      </p>

      <h2>Jämför siffrorna med försiktighet</h2>
      <p>
        Uppgifter om förbrukning går inte alltid att jämföra. Ett bad som mäts i 16 grader drar betydligt mindre än samma
        bad i 7 grader, och svenska vintrar är kallare än så. Folkpool påpekar själva att amerikanska standbytester ofta
        görs i varmare luft. Funderar du på att köpa: be om testrapporten och kontrollera vem som har mätt, i vilken
        temperatur och om bad och vattenbyten är med.
      </p>

      <h2>Så sänker du kostnaden</h2>
      <ol>
        <li>
          <strong>Locket.</strong> Isolering och termolock är det som betyder mest enligt tillverkarna. Ett lock som är
          tungt av vatten eller inte sluter tätt släpper ut värme hela dygnet. Spänn fast det så att det inte lyfter när
          det blåser.
        </li>
        <li>
          <strong>Sänk temperaturen när ni inte badar.</strong> Ska badet stå oanvänt en vecka eller mer, sänk några
          grader. Töm det inte på vintern – frysrisken är stor, och uppvärmningen efteråt kostar flera dygns standby.
        </li>
        <li>
          <strong>Se över filtercyklerna.</strong> Pumpen behöver inte gå längre än vad vattenkvaliteten kräver. Följ
          tillverkarens rekommendation för lägsta filtertid.
        </li>
        <li>
          <strong>Värm på billiga timmar.</strong> Tusen liter varmt vatten håller värmen i flera timmar. Många
          styrsystem kan låta värmaren gå bara under filtercyklerna, och då kan du lägga dem på natten. Hur det fungerar
          med Balboas system beskriver vi i{" "}
          <Link href="/guider/controlmyspa-spabad">guiden om ControlMySpa</Link>, och i{" "}
          <Link href="/guider/flytta-elforbrukningen-till-billiga-timmar">flytta elförbrukningen till billiga timmar</Link>{" "}
          finns grunderna.
        </li>
        <li>
          <strong>Fyll på vid rätt tid.</strong> Ett vattenbyte innebär många timmar med värmaren på full effekt. Fyll på
          på kvällen så att det mesta av uppvärmningen sker under natten.
        </li>
      </ol>

      <h2>Spabadet och effektavgiften</h2>
      <p>
        En värmare på 3–4 kW är en stor effekt för ett hushåll. Har ditt nätbolag kvar en effektavgift kan det kosta extra
        om badet värmer samtidigt som elbilen laddar eller bastun är på. Se vilka bolag som har kvar avgiften i{" "}
        <Link href="/guider/effektavgift-natbolag">effektavgift: nätbolagen som har kvar den</Link>.
      </p>
      <p>
        Ett spabad ansluts fast, ofta till 3 × 16 A. Inkoppling, reläer för styrning och ändringar i elcentralen ska
        göras av ett registrerat elinstallationsföretag.
      </p>

      <h2>Lönar sig ett spabad?</h2>
      <p>
        Ett spabad sparar inga pengar – frågan är vad du betalar per bad. Badar ni två gånger i veckan och badet drar 2 500
        kWh om året blir det runt 100 bad, och med 2 kronor per kWh ungefär 50 kronor per bad. Badar ni sällan blir varje
        bad dyrare, eftersom standbyförbrukningen är densamma. Då är det värt att fundera på att sänka temperaturen mellan
        baden, eller att ha badet igång bara delar av året om det går att tömma och frostsäkra det på rätt sätt enligt
        tillverkaren.
      </p>

      <h2>Källor</h2>
      <ul>
        <li>
          RISE, på uppdrag av Svenska Bad:{" "}
          <a href="https://svenskabad.se/wp-content/uploads/2024/04/Energimatning-pa-Spabad-Fjorden.pdf">
            Energimätning på spabad Fjorden (P114796-03, 2022)
          </a>
        </li>
        <li>
          Folkpool:{" "}
          <a href="https://www.folkpool.se/spabad/energiforbrukningstest-av-spabad">Energiförbrukningstest av spabad</a>
        </li>
        <li>
          Folkpool:{" "}
          <a href="https://www.folkpool.se/spabad/artiklar/energiforbrukning-och-spabad">
            Minska energiförbrukningen på ditt spabad
          </a>
        </li>
      </ul>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Hur mycket el drar ett spabad per månad?",
            a: "I RISE-tester av välisolerade bad ligger det på runt 185–210 kWh i månaden i snitt över året. På vintern är det mer, på sommaren mindre. Mät ditt eget bad för att veta säkert.",
          },
          {
            q: "Är det billigare att stänga av spabadet mellan baden?",
            a: "Sällan på vintern. En ny uppvärmning från kallt vatten kan kräva runt 40 kWh, lika mycket som flera dygn i standby, och badet riskerar att frysa. Sänk hellre temperaturen några grader.",
          },
          {
            q: "Kostar ett bad mycket el?",
            a: "Nej. I RISE-mätningen drog ett dygn med ett bad på 30 minuter ungefär 2,3 kWh mer än ett dygn utan bad. Det mesta av elen går åt till att hålla vattnet varmt.",
          },
        ]}
      />
    </ArticlePage>
  );
}
