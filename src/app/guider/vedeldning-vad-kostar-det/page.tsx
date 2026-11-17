import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import VedKalkyl from "@/components/VedKalkyl";
import { guide } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

const meta = guide("vedeldning-vad-kostar-det");
const path = `/guider/${meta.slug}`;

export const metadata = pageMetadata(meta.seoTitle ?? meta.title, meta.description, path, true, meta);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        <strong>
          Med björkved för 1 000 kronor per kubik kostar värmen från en braskamin ungefär 0,75–1 krona per kWh
        </strong>{" "}
        – beroende på om kubiken är travad eller stjälpt. Det är mindre än hälften av vad direktverkande el kostar när
        elpriset är högt, men ofta inte billigare än en värmepump. Här är kalkylen, och när det faktiskt lönar sig att
        elda.
      </p>

      <h2>Vad kostar en kWh värme från ved?</h2>
      <p>
        Två saker avgör: hur mycket energi det finns i veden du köper, och hur mycket av den som blir värme i huset.
      </p>
      <h3>1. Energin i en kubik björkved</h3>
      <p>
        Torr björkved med en fukthalt kring 20 procent innehåller ungefär 2 800 kWh per fast kubikmeter – alltså om
        det inte fanns någon luft mellan vedträna. Ved säljs nästan alltid i <strong>travat</strong> eller{" "}
        <strong>stjälpt</strong> mått, och då är en stor del av kubiken luft:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Mått</th>
              <th>Vad det är</th>
              <th>Energi, torr björk</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fast kubik</td>
              <td>Bara ved, ingen luft</td>
              <td>ca 2 800 kWh</td>
            </tr>
            <tr>
              <td>Travad kubik</td>
              <td>Vedträn staplade tätt i en kubikmeter</td>
              <td>ca 1 450–2 100 kWh</td>
            </tr>
            <tr>
              <td>Stjälpt kubik</td>
              <td>Vedträn hällda löst i en säck eller låda</td>
              <td>ca 1 100–1 550 kWh</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Spannet är stort eftersom det beror på hur kluvna och raka vedträna är och hur tätt de ligger. Fråga alltid
        vilket mått priset gäller – 1 000 kronor för en travad kubik är en betydligt bättre affär än 1 000 kronor för en
        stjälpt.
      </p>

      <h3>2. Hur mycket som blir värme</h3>
      <p>Verkningsgraden säger hur stor del av vedens energi som hamnar i huset i stället för i skorstenen:</p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Eldstad</th>
              <th>Ungefärlig verkningsgrad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ny vedpanna med ackumulatortank</td>
              <td>80–90 %</td>
            </tr>
            <tr>
              <td>Braskamin</td>
              <td>70–80 %</td>
            </tr>
            <tr>
              <td>Insats i öppen spis</td>
              <td>50–70 %</td>
            </tr>
            <tr>
              <td>Äldre vedpanna</td>
              <td>40–70 %</td>
            </tr>
            <tr>
              <td>Öppen spis utan insats</td>
              <td>5–15 %</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Så blir kalkylen med björkved för 1 000 kr per kubik</h3>
      <p>
        Pris per kWh värme = priset per kubik delat med (energin i kubiken × verkningsgraden). Med ett mittvärde för
        energin – 1 300 kWh för en stjälpt kubik och 1 800 kWh för en travad – blir det:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Eldstad</th>
              <th>Stjälpt kubik, 1 000 kr</th>
              <th>Travad kubik, 1 000 kr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ny vedpanna med ackumulatortank (85 %)</td>
              <td>ca 0,90 kr/kWh</td>
              <td>ca 0,65 kr/kWh</td>
            </tr>
            <tr>
              <td>Braskamin (75 %)</td>
              <td>ca 1,05 kr/kWh</td>
              <td>ca 0,75 kr/kWh</td>
            </tr>
            <tr>
              <td>Insats i öppen spis (60 %)</td>
              <td>ca 1,30 kr/kWh</td>
              <td>ca 0,95 kr/kWh</td>
            </tr>
            <tr>
              <td>Öppen spis utan insats (10 %)</td>
              <td>ca 7,70 kr/kWh</td>
              <td>ca 5,55 kr/kWh</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Öppen spis är alltså mysig men en dyr värmekälla – nästan all värme går rakt upp i skorstenen.</p>

      <VedKalkyl />

      <h2>Jämfört med el och värmepump</h2>
      <p>
        Med direktverkande el eller elpanna kostar en kWh värme lika mycket som en kWh el – med elpris, elnät,
        energiskatt och moms blir det ofta 2–4 kronor per kWh när elpriset är högt i södra Sverige. Där är ved för
        under en krona per kWh en klar besparing.
      </p>
      <p>
        En värmepump ger flera kWh värme för varje kWh el. Ger den tre kWh värme per kWh el och elen kostar 2,40 kronor
        totalt, kostar värmen 80 öre per kWh – ungefär samma som ved i en braskamin. Med värmepump är veden alltså inte
        självklart billigare, utom när elpriset är riktigt högt.
      </p>

      <h2>När lönar det sig att elda?</h2>
      <ul>
        <li>
          <strong>Du har direktverkande el eller elpanna.</strong> Då ersätter varje kWh från veden en full kWh el, och
          besparingen blir störst. Se också <Link href="/guider/adax-wifi-element">hur du styr elementen</Link>.
        </li>
        <li>
          <strong>Elpriset är högt.</strong> Kalla veckor med svag vind och kärnkraft som står still kan elpriset i
          södra Sverige gå upp kraftigt. Titta på <Link href="/elpris">elpriset och veckans prognos</Link> – en dyr
          vecka är rätt vecka att elda.
        </li>
        <li>
          <strong>De dyra timmarna.</strong> Elda på morgonen och kvällen, när elpriset brukar toppa. Värmen från
          kaminen gör att värmepumpen eller elementen kan vila just då. Har du{" "}
          <Link href="/guider/kvartspris">kvartspris</Link> märks det direkt.
        </li>
        <li>
          <strong>Ditt nätbolag har effektavgift.</strong> Kaminen sänker effekttoppen kalla vardagskvällar, när
          värmen, spisen och kanske elbilen drar samtidigt. <Link href="/guider/effektavgift">Läs om effektavgiften</Link>.
        </li>
        <li>
          <strong>Du har egen eller billig ved.</strong> Hugger du själv ur egen skog blir kalkylen en helt annan – men
          räkna med tiden.
        </li>
      </ul>

      <Callout title="Med värmepump: se upp med termostaten" tone="butter">
        <p>
          Kaminen gör rummet den står i varmt. Sitter värmepumpens eller luft-luft-värmepumpens givare där, tror den
          att hela huset är varmt och stänger av – och resten av huset blir kallt. Med en bergvärmepump som styrs på
          utetemperatur och värmekurva märks kaminen mindre. Låt den gå som vanligt och se kaminen som ett tillskott
          under de dyraste timmarna. <Link href="/guider/styr-bergvarmepumpen-efter-elpriset">Så styr du värmepumpen efter elpriset</Link>.
        </p>
      </Callout>

      <h2>Elda rätt – det påverkar både plånbok och luft</h2>
      <ul>
        <li>
          <strong>Torr ved.</strong> Fukthalten ska ligga kring 15–20 procent. Nyhuggen ved innehåller ungefär hälften
          vatten och behöver torka under tak i minst ett halvår, gärna ett år. Fuktig ved ger mindre värme och mer
          rök och sot.
        </li>
        <li>
          <strong>Tänd uppifrån och ge luft.</strong> Det ger en renare förbränning och mindre partiklar.
        </li>
        <li>
          <strong>Elda aldrig målat, impregnerat eller sopor.</strong> Det är inte tillåtet och ger giftiga utsläpp.
        </li>
        <li>
          <strong>Sotning och brandskyddskontroll.</strong> Eldstaden och skorstenen ska sotas och kontrolleras enligt
          kommunens regler. Kontakta kommunen innan du installerar en ny eldstad.
        </li>
      </ul>

      <h2>Vedpanna med ackumulatortank</h2>
      <p>
        Vill du värma hela huset med ved är en modern vedpanna med ackumulatortank det effektivaste. Pannan eldar med
        full effekt och lagrar värmen i tanken, som sedan värmer huset i ett eller flera dygn. Naturvårdsverket
        rekommenderar just den kombinationen. En ackumulatortank kan också ha en elpatron som{" "}
        <Link href="/produkter/smarta-relaer">styrs efter elpriset med ett smart relä</Link>.
      </p>

      <h2>Räkna på ditt hus</h2>
      <p>
        Vill du se hela bilden – temperatur, flyttad förbrukning och vad som passar just ditt hus? Prova{" "}
        <Link href="/kalkylator">kalkylatorn</Link> eller <Link href="/ditt-hus">gör en elplan för ditt hus</Link>.
      </p>

      <h2>Källor</h2>
      <ul>
        <li>
          Naturvårdsverket:{" "}
          <a href="https://naturvardsverket.se/vagledning-och-stod/luft-och-klimat/vedeldning/elda-med-ved-i-kamin-spis-och-ugn">
            Elda med ved i kamin, spis och ugn
          </a>
        </li>
        <li>
          Naturvårdsverket:{" "}
          <a href="https://www.naturvardsverket.se/vagledning-och-stod/luft-och-klimat/vedeldning/elda-med-ved-i-panna/">
            Elda med ved i panna
          </a>
        </li>
        <li>
          Boverket:{" "}
          <a href="https://www.boverket.se/sv/energiguiden/energirenovera-smahus/5.valja_atgarder/vedpanna-pelletspanna/">
            Installation av vedpanna eller pelletspanna
          </a>
        </li>
        <li>
          Umeå kommun, energirådgivningen:{" "}
          <a href="https://umea.se/download/18.250f9659174ae4b97941e64/1601639269938/Energir%C3%A5dgivning,%20vedeldning.pdf">
            Vedeldning (verkningsgrad för olika eldstäder)
          </a>
        </li>
        <li>
          <a href="https://www.diva-portal.org/smash/get/diva2:522819/fulltext01.pdf">Vedens energiinnehåll</a>{" "}
          (examensarbete, energiinnehåll per mått och träslag)
        </li>
        <li>
          Energimyndigheten:{" "}
          <a href="https://www.energimyndigheten.se/effektiv-energianvandning/hushall/spara-energi-enkla-tips/">
            Spara energi – enkla tips
          </a>
        </li>
      </ul>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Vad är skillnaden mellan stjälpt och travad kubik?",
            a: "En travad kubik är vedträn staplade tätt i en kubikmeter. En stjälpt kubik är vedträn hällda löst, som i en storsäck. I en stjälpt kubik är det mer luft, så den innehåller ungefär en tredjedel mindre ved än en travad.",
          },
          {
            q: "Hur mycket ved går åt för att värma ett hus?",
            a: "Det beror helt på husets värmebehov. Ett hus som behöver 15 000 kWh värme om året skulle, med en braskamin och torr björk, behöva runt 10–14 travade kubik om all värme kom från veden. De flesta eldar som komplement och använder betydligt mindre.",
          },
          {
            q: "Är björk bäst?",
            a: "Björk är populär eftersom den har högt energiinnehåll per kubik, brinner jämnt och är lätt att klyva. Lövträ som ek och bok har ännu högre energi per kubik, medan barrved som gran och tall har lägre.",
          },
          {
            q: "Lönar sig vedeldning om jag har bergvärme?",
            a: "Sällan som huvudvärme, eftersom bergvärmen redan ger flera kWh värme per kWh el. Men under riktigt dyra timmar och veckor kan kaminen avlasta värmepumpen och sänka effekttoppen.",
          },
        ]}
      />
    </ArticlePage>
  );
}
