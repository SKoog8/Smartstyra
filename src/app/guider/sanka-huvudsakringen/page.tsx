import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { guide } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

const meta = guide("sanka-huvudsakringen");
const path = `/guider/${meta.slug}`;

export const metadata = pageMetadata(meta.seoTitle ?? meta.title, meta.description, path, true, meta);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        <strong>
          Huvudsäkringen är säkringen där elen kommer in i huset, och den bestämmer hur mycket ström du kan ta ut
          samtidigt.
        </strong>{" "}
        Hos de flesta nätbolag avgör den också den fasta delen av elnätsavgiften. Har du en större säkring än du
        behöver betalar du alltså extra varje månad för kapacitet du aldrig använder. Att sänka den är en av få
        åtgärder som sänker elräkningen utan att du behöver ändra något i vardagen, så länge den nya säkringen
        räcker till.
      </p>

      <h2>Vad du sparar på en mindre huvudsäkring</h2>
      <p>
        Hur mycket det handlar om beror helt på ditt nätbolag. Ellevio är ett exempel på ett nätbolag som tar betalt
        efter säkringsstorlek. Så här ser deras fasta avgift ut för trefas från den 1 juni 2026:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Huvudsäkring</th>
              <th>Fast avgift, kr/mån inkl. moms</th>
              <th>Per år</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>16 A</td>
              <td>450</td>
              <td>5 400 kr</td>
            </tr>
            <tr>
              <td>20 A</td>
              <td>590</td>
              <td>7 080 kr</td>
            </tr>
            <tr>
              <td>25 A</td>
              <td>740</td>
              <td>8 880 kr</td>
            </tr>
            <tr>
              <td>35 A</td>
              <td>1 130</td>
              <td>13 560 kr</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Hos Ellevio är överföringsavgiften per kWh densamma oavsett säkring, så det är bara den fasta avgiften som
        ändras. Ditt nätbolag har andra priser. Du hittar din nuvarande säkring och avgift på fakturan eller på nätbolagets Mina
        sidor. Läs också <Link href="/guider/effektavgift-natbolag">vad de största nätbolagen tar betalt för</Link>,
        eftersom en del nätbolag har effektavgift och då spelar säkringen en annan roll.
      </p>

      <Callout title="Räkneexempel: lönar det sig?" tone="mint">
        <p>
          Med Ellevios priser sparar du 740 − 590 = 150 kronor i månaden på att gå från 25 till 20 A, alltså 1 800
          kronor om året. Från 20 till 16 A blir det 590 − 450 = 140 kronor i månaden, 1 680 kronor om året.
        </p>
        <p>
          Kostnaden är elinstallatörens arbete. Dela offerten med besparingen per år, så ser du hur lång tid det tar
          innan ändringen har betalat sig. Kostar arbetet till exempel 2 000 kronor och du sparar 1 800 kronor om året
          har du tjänat in det på drygt ett år. Byt ut siffrorna mot ditt nätbolags priser och installatörens offert.
        </p>
      </Callout>

      <h2>Hur stor säkring behöver du?</h2>
      <p>
        Vattenfall Eldistribution ger en tumregel för hur mycket som ryms i varje storlek. Siffrorna är ungefärliga
        och beror på anläggningen:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Huvudsäkring</th>
              <th>Maximalt effektuttag</th>
              <th>Årsförbrukning, riktvärde</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>16 A</td>
              <td>11 kW</td>
              <td>0–20 000 kWh</td>
            </tr>
            <tr>
              <td>20 A</td>
              <td>14 kW</td>
              <td>20 000–25 000 kWh</td>
            </tr>
            <tr>
              <td>25 A</td>
              <td>17 kW</td>
              <td>25 000–30 000 kWh</td>
            </tr>
            <tr>
              <td>35 A</td>
              <td>24 kW</td>
              <td>30 000–40 000 kWh</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Enligt Vattenfall klarar sig de flesta som bara har hushållsel, utan elvärme eller värmepump, med 16 A. Det
        som avgör är ändå inte årsförbrukningen utan hur mycket du drar på en gång. En villa som förbrukar lite över
        året kan behöva en större säkring om elpannan, bastun och laddboxen går samtidigt.
      </p>

      <h2>Så tar du reda på dina toppar</h2>
      <p>Det finns tre sätt, från enklast till mest exakt:</p>
      <ol>
        <li>
          <strong>Räkna på märkskyltarna.</strong> Vattenfall föreslår att du läser av effekten på apparaternas
          märkskyltar och lägger ihop dem som kan gå samtidigt. Börja med de stora: elpatron eller elpanna,
          värmepump, laddbox, spis, ugn, bastu, torktumlare och varmvattenberedare.
        </li>
        <li>
          <strong>Titta på förbrukningen hos nätbolaget.</strong> På Mina sidor ser du ofta förbrukningen per timme.
          Tänk på att det är ett medelvärde. En timme med 8 kWh kan innehålla några minuter då huset drog betydligt
          mer.
        </li>
        <li>
          <strong>Mät i realtid.</strong> En mätare på elmätarens P1-port visar effekten nästan i realtid, så att du
          ser de korta topparna. Vill du se varje fas för sig kan en elinstallatör montera en energimätare i
          elcentralen. Det är det bästa underlaget, eftersom det är fasen som belastas mest som löser ut säkringen. Se <Link href="/guider/mat-din-elforbrukning">guiden om att mäta elförbrukningen</Link>.
        </li>
      </ol>
      <p>
        Mät helst under den kallaste delen av vintern. Det är då värmepumpen tar hjälp av elpatronen och toppen blir
        som högst.
      </p>

      <h2>Sänk toppen först, säkringen sedan</h2>
      <p>
        Om du ligger strax över gränsen för en mindre säkring kan det räcka att jämna ut topparna. Boverket skriver
        att du med en belastningsvakt, som kort kopplar bort till exempel en elpanna eller en elbilsladdare när huset
        drar för mycket, kanske kan välja en lägre säkring utan att riskera strömavbrott. Läs mer i guiden om{" "}
        <Link href="/guider/lastbalansering-och-effektvakt">lastbalansering och effektvakt</Link>.
      </p>
      <p>
        Det finns också enklare saker: låt laddboxen ladda på natten, kör inte bastun och torktumlaren samtidigt och
        styr varmvattenberedaren till timmar då resten av huset drar lite. Det sistnämnda går att lösa med{" "}
        <Link href="/guider/styr-varmvattenberedaren-med-kontaktor">en kontaktor</Link>.
      </p>

      <h2>Så går bytet till</h2>
      <p>
        Bytet ska göras av ett registrerat elinstallationsföretag. Hos Vattenfall Eldistribution går det till så att
        installatören gör ändringen och skickar en färdiganmälan, och nätbolaget ändrar sedan ditt abonnemang från
        det datum då arbetet gjordes. Att sänka säkringen kostar ingenting hos Vattenfall, du betalar bara
        installatören.
      </p>
      <p>
        Tänk på att Vattenfall bara tillåter en ändring av huvudsäkringen per tolvmånadersperiod. Om du sänker för
        mycket och strömmen börjar gå kan du alltså inte bara byta tillbaka direkt. Att höja igen kan dessutom kosta
        en anslutningsavgift om du hamnar i ett högre intervall. Vattenfalls intervall är 16–25 A, 35 A och 50–63 A.
        Andra nätbolag har egna regler, så fråga ditt nätbolag innan du bestämmer dig.
      </p>
      <p>
        Vill du räkna på vad du sparar på att flytta förbrukningen till billigare timmar kan du prova{" "}
        <Link href="/kalkylator">kalkylatorn</Link>.
      </p>

      <h2>Källor</h2>
      <ul>
        <li>
          Vattenfall Eldistribution:{" "}
          <a href="https://www.vattenfalleldistribution.se/elnatsanslutning/min-elanlaggning/valj-ratt-huvudsakring/">Välj rätt huvudsäkring</a>{" "}
          och{" "}
          <a href="https://www.vattenfalleldistribution.se/elnatsanslutning/min-elanlaggning/andra-huvudsakring/">Ändra huvudsäkring</a>
        </li>
        <li>
          Ellevio:{" "}
          <a href="https://www.ellevio.se/globalassets/content/priserabonnemang-pdf/2026/sakring/sakringsabonnemang-16-63a_260601.pdf">Säkringsabonnemang 16–63 A från 1 juni 2026 (pdf)</a>
        </li>
        <li>
          Boverket:{" "}
          <a href="https://www.boverket.se/sv/energiguiden/energirenovera-smahus/3.viktiga_hansyn/energi/">Energi- och effektbehov</a>
        </li>
      </ul>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Får jag byta huvudsäkring själv?",
            a: "Nej. Bytet ska göras av ett registrerat elinstallationsföretag, som också anmäler ändringen till nätbolaget så att abonnemanget ändras.",
          },
          {
            q: "Vad händer om säkringen är för liten?",
            a: "Den kan lösa ut när du använder mycket el samtidigt, och då blir huset strömlöst tills den är bytt. Hos Vattenfall får du bara ändra säkringen en gång per tolvmånadersperiod, så räkna med marginal.",
          },
          {
            q: "Räcker 16 A till en villa?",
            a: "Enligt Vattenfall räcker 16 A för de flesta som bara har hushållsel. Har du elvärme, värmepump med elpatron eller laddbox beror det på hur mycket som går samtidigt – mät eller låt en elinstallatör räkna på det.",
          },
        ]}
      />
    </ArticlePage>
  );
}
