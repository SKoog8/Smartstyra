import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import TibberInvite from "@/components/TibberInvite";
import { Products } from "@/components/ProductCard";
import { guide } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

const meta = guide("sank-effektavgiften-tibber-hembatteri");
const path = `/guider/${meta.slug}`;

export const metadata = pageMetadata(meta.seoTitle ?? meta.title, meta.description, path, true, meta);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        <strong>
          Effekttoppar uppstår när flera stora förbrukare går samtidigt – och det är just då en automatisk styrning gör
          mest nytta
        </strong>
        . Har ditt nätbolag effektavgift kan du låta Tibber sänka elbilsladdningen när huset drar mycket, eller låta
        hembatteriet kapa topparna. Här är hur det fungerar, vad som krävs och vad du ska se upp med.
      </p>

      <h2>Steg 1: Ta reda på hur ditt nätbolag räknar</h2>
      <p>
        Allt annat beror på det här. Räknar nätbolaget månadens högsta timme dygnet runt behöver styrningen vara på
        jämt. Räknar det bara vardagar dagtid under vintern räcker det att hålla nere effekten just då – och resten av
        tiden kan du ladda och värma fritt.{" "}
        <Link href="/guider/effektavgift-natbolag">Se hur nätbolagen räknar</Link>.
      </p>

      <h2>Steg 2: Mät i realtid</h2>
      <p>
        Styrningen behöver veta vad huset drar just nu. Det får den från elmätarens HAN-port, via en HAN-läsare som
        Tibber Pulse, eller från en energimätare i elcentralen. Batterisystem har ofta en egen mätare vid
        anslutningspunkten.
      </p>
      <Products ids={["tibber-pulse-p1"]} />

      <h2>Tibber: Effektkontroll för elbilen och batteriet</h2>
      <p>
        Med Effektkontroll ställer du in en gräns för hur mycket huset får dra. När förbrukningen närmar sig gränsen
        sänker Tibber laddeffekten till elbilen, och höjer den igen om förbrukningen går ner inom samma timme. Har
        gränsen redan passerats pausas laddningen till nästa hela timme.
      </p>
      <ul>
        <li>
          <strong>Det här styr den:</strong> laddboxar och elbilar som är integrerade i Tibber-appen, och integrerade
          hembatterier.
        </li>
        <li>
          <strong>Det här styr den inte:</strong> enligt Tibber kan Effektkontroll inte styra värmepumpar och termostater
          än. Värmen får du hålla nere på annat sätt.
        </li>
        <li>
          <strong>Det här krävs:</strong> Tibber Pulse och en integrerad laddbox eller ett kompatibelt batteri. Tibbers
          sidor är inte helt överens om ett elavtal hos Tibber krävs – kontrollera i appen innan du räknar med det.
        </li>
        <li>
          <strong>Effektlarm:</strong> vill du hellre styra själv kan appen varna när du närmar dig gränsen.
        </li>
      </ul>
      <p>
        Effektkontroll går före Smartladdning. Det betyder att bilen ibland laddar lite långsammare än planerat, men
        fortfarande blir klar när huset inte drar så mycket. Läs mer om{" "}
        <Link href="/guider/smart-laddning-elbil-tibber">smart laddning med Tibber</Link>.
      </p>
      <TibberInvite />

      <h2>Hembatteriet: peak shaving från tillverkaren</h2>
      <p>
        Ett hembatteri kan kapa effekttopparna genom att ladda ur när huset drar mycket och ladda igen när
        förbrukningen är låg. Funktionen kallas ofta <strong>peak shaving</strong> eller &quot;kapa effekttoppar&quot;. Så
        här ser det ut hos några vanliga tillverkare:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Tillverkare</th>
              <th>Funktion</th>
              <th>Så ställer du in den</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ferroamp</td>
              <td>Kapa effekttoppar</td>
              <td>
                Två gränsvärden: ett för när batteriet ska ladda ur (när huset drar mer än gränsen) och ett för när det
                får ladda. FerroAI kan sätta gränserna automatiskt utifrån historiken.
              </td>
            </tr>
            <tr>
              <td>Huawei (FusionSolar)</td>
              <td>Peak shaving</td>
              <td>
                Max effekt från elnätet per tidsperiod, upp till 14 perioder, och en reserv i batteriet som sparas för att
                kapa toppar. Kräver en mätare vid anslutningspunkten.
              </td>
            </tr>
            <tr>
              <td>Sungrow (iSolarCloud)</td>
              <td>Peak shaving i läget egenförbrukning</td>
              <td>
                En reserverad laddnivå för peak shaving (70 procent som standard) och en gräns för hur mycket som får
                köpas från nätet.
              </td>
            </tr>
            <tr>
              <td>Tibber</td>
              <td>Effektkontroll</td>
              <td>Samma gräns som för elbilen, för integrerade hembatterier.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Menyer och namn skiljer sig mellan modeller och programversioner. Läs manualen för just ditt batteri, eller be
        installatören ställa in det.
      </p>

      <h3>Så sätter du gränsen</h3>
      <ol>
        <li>
          <strong>Titta på historiken.</strong> Hur höga är dina toppar en vanlig vintervardag, och hur länge håller de i
          sig?
        </li>
        <li>
          <strong>Räkna på batteriet.</strong> Batteriet måste klara både effekten och energin. Ett batteri på 5 kW kan
          bara kapa 5 kW, och en topp som håller i sig i två timmar kräver tillräckligt många kWh.
        </li>
        <li>
          <strong>Spara en reserv.</strong> Är batteriet tomt när toppen kommer hjälper det inte. Ställ in en reserv som
          alltid finns kvar för peak shaving under de månader och timmar som räknas.
        </li>
        <li>
          <strong>Följ upp efter en månad.</strong> Kontrollera toppen på nätbolagets Mina sidor och justera gränsen.
        </li>
      </ol>

      <Callout title="Stödtjänster och peak shaving krockar" tone="butter">
        <p>
          Säljer batteriet stödtjänster, till exempel via Tibber Grid Rewards eller en aggregator som CheckWatt, är en
          del av kapaciteten upptagen för elnätet. Då kan det saknas energi just när din topp kommer. CheckWatt påpekar
          att det räcker med några missade toppar under en månad för att besparingen ska minska eller försvinna. Välj
          vad batteriet ska prioritera under de timmar ditt nätbolag räknar.{" "}
          <Link href="/guider/smart-styrning-hembatteri">Läs om smart styrning av hembatteriet</Link>.
        </p>
      </Callout>

      <h2>Det som styrningen inte tar hand om</h2>
      <ul>
        <li>
          <strong>Varmvattenberedaren.</strong> En beredare på 3 kW som startar mitt i middagslagningen syns direkt i
          toppen. Ett smart relä kan låta den värma på natten.{" "}
          <Link href="/guider/styr-varmvattenberedaren-med-kontaktor">Så styr du beredaren</Link>.
        </li>
        <li>
          <strong>Värmen.</strong> Effektkontroll styr inte värmepumpen. Undvik att låta pumpen ta igen värme med
          elpatronen under de dyra timmarna – värm lite extra innan i stället.{" "}
          <Link href="/guider/styr-bergvarmepumpen-efter-elpriset">Så styr du värmepumpen</Link>.
        </li>
        <li>
          <strong>Billigaste timmen.</strong> Lägger all smart styrning allt på samma billiga timme blir den timmen din
          topp. Sprid ut laddning, varmvatten och tvätt över flera billiga timmar.
        </li>
      </ul>

      <h2>Vad kan det ge?</h2>
      <p>
        Det beror på ditt nätbolags pris och hur mycket du sänker toppen. Med 49 kronor per kW, som hos Göteborg Energi,
        blir varje kW lägre topp ungefär 49 kronor mindre i månaden. Sänker du snittet av de högsta timmarna från 8 till
        5 kW sparar du runt 150 kronor i månaden, eller ungefär 1 750 kronor om året.
      </p>

      <h2>Källor</h2>
      <ul>
        <li>
          Tibber:{" "}
          <a href="https://support.tibber.com/sv/articles/6341501-ta-kontroll-over-dina-effekttoppar-och-din-effektavgift">
            Effektkontroll
          </a>
        </li>
        <li>
          Tibber: <a href="https://tibber.com/se/effekttariff">Effektavgifter</a>
        </li>
        <li>
          Ferroamp:{" "}
          <a href="https://support.ferroamp.com/en/support/solutions/articles/47001257054-what-does-peak-shaving-mean-and-what-should-i-think-about-when-setting-the-different-parameters-">
            Peak shaving – inställningar
          </a>{" "}
          och <a href="https://ferroamp.com/kundservice/ferroai/">FerroAI</a>
        </li>
        <li>
          Huawei:{" "}
          <a href="https://support.huawei.com/enterprise/en/doc/EDOC1100165054/73c3adf6/peak-shaving">
            Peak Shaving – FusionSolar App User Manual
          </a>
        </li>
        <li>
          Sungrow:{" "}
          <a href="https://info-support.sungrowpower.com/product-materials/ef49ce80-425a-4a13-b805-b90bd2271866/GUID-DEFC11CF-0FE5-4677-956E-958FEF3C9A5C.html">
            Self-Consumption och peak shaving i iSolarCloud
          </a>
        </li>
        <li>
          CheckWatt: <a href="https://www.checkwatt.se/faq">Vanliga frågor om effekttariffer och stödtjänster</a>
        </li>
      </ul>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Kan Tibber styra värmepumpen efter effektavgiften?",
            a: "Enligt Tibber kan Effektkontroll i dag bara styra integrerade laddare och hembatterier, inte värmepumpar och termostater. Tibbers smarta värmestyrning flyttar värmen efter elpriset. Hur mycket den tar hänsyn till din effektavgift skiljer sig mellan Tibbers sidor, så kontrollera i appen vad som gäller för din värmepump.",
          },
          {
            q: "Lönar det sig att köpa ett hembatteri bara för att sänka effektavgiften?",
            a: "Sällan, om effektavgiften är det enda batteriet ska göra. Batteriet behöver oftast också lagra solel eller utnyttja prisskillnader för att kalkylen ska gå ihop. Räkna med din egen effektavgift och dina egna toppar.",
          },
          {
            q: "Vilken gräns ska jag sätta?",
            a: "Börja strax under din vanliga topp en vintervardag och sänk stegvis. En för låg gräns gör att elbilen laddar för långsamt eller att batteriet töms för tidigt.",
          },
          {
            q: "Behöver jag göra något om mitt nätbolag inte har effektavgift?",
            a: "Nej, då räcker det att flytta förbrukningen till billiga timmar. Men en gräns kan ändå vara bra för att huvudsäkringen inte ska lösa ut när elbilen laddar.",
          },
        ]}
      />
    </ArticlePage>
  );
}
