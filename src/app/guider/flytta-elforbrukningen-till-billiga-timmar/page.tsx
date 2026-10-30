import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { Products } from "@/components/ProductCard";
import { guide } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

const meta = guide("flytta-elforbrukningen-till-billiga-timmar");
const path = `/guider/${meta.slug}`;

export const metadata = pageMetadata(meta.title, meta.description, path, true);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        Har du ett elavtal med timpris betalar du vad elen kostade just när du använde den. En vanlig vardag kan
        kilowattimmen kosta flera gånger mer klockan åtta på morgonen än klockan tre på natten. Den som flyttar
        diskmaskinen, varmvattnet och elbilsladdningen till de billiga timmarna sänker elräkningen utan att använda
        en enda kilowattimme mindre.
      </p>

      <h2>Det här behöver du</h2>
      <ul>
        <li>
          <strong>Ett elavtal med timpris</strong>, ibland kallat dynamiskt elpris eller kvartspris. Med ett vanligt
          rörligt avtal betalar du månadens snittpris och tjänar ingenting på att flytta förbrukningen.
        </li>
        <li>
          <strong>En elmätare som mäter per timme eller kvart.</strong> Nätbolagen har bytt ut nästan alla mätare, så
          det har du med största sannolikhet redan.
        </li>
      </ul>
      <p>
        Sedan oktober 2025 sätts priset på elbörsen per kvart i stället för per timme. Många elhandlare räknar
        fortfarande om det till ett timpris på fakturan, men principen är densamma: det billiga och det dyra kommer vid
        olika tider på dygnet.
      </p>

      <h2>När är elen billigast?</h2>
      <p>
        Morgondagens priser publiceras ungefär klockan 13 dagen innan och syns i de flesta elhandlares appar. Mönstret
        brukar se ut så här:
      </p>
      <ul>
        <li>
          <strong>Dyrast</strong> på vardagsmorgnar mellan ungefär 7 och 9 och på kvällar mellan 17 och 20, när alla
          lagar mat, duschar och kommer hem.
        </li>
        <li>
          <strong>Billigast</strong> på natten, och allt oftare mitt på dagen under sommarhalvåret när solkraften
          producerar mycket.
        </li>
        <li>
          <strong>Störst skillnad</strong> i södra Sverige (elområde 3 och 4). I norr är priset ofta lägre och
          jämnare.
        </li>
      </ul>

      <h2>Vad går att flytta?</h2>
      <p>
        Allt som inte behöver hända exakt nu. Tumregeln är att ju mer effekt en apparat drar och ju längre den går,
        desto mer tjänar du på att flytta den.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Förbrukare</th>
              <th>Går det att flytta?</th>
              <th>Så gör du</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Elbil</td>
              <td>Ja, och det ger mest</td>
              <td>Schemalägg laddningen i bilen, laddboxen eller elhandlarens app.</td>
            </tr>
            <tr>
              <td>Varmvattenberedare</td>
              <td>Ja</td>
              <td>
                En full beredare håller värmen i många timmar. Styrs med ett relä som en elinstallatör kopplar in.
              </td>
            </tr>
            <tr>
              <td>Disk, tvätt och torktumlare</td>
              <td>Ja</td>
              <td>Använd maskinens fördröjda start eller ett smart uttag.</td>
            </tr>
            <tr>
              <td>Värmepump och elvärme</td>
              <td>Delvis</td>
              <td>
                Huset är ett värmelager. Höj någon grad före de dyra timmarna och sänk under dem – inte mer, då
                försvinner vinsten i värmeförluster.
              </td>
            </tr>
            <tr>
              <td>Golvvärme i badrum</td>
              <td>Delvis</td>
              <td>Schemalägg så att den går på natten och är varm till morgonen.</td>
            </tr>
            <tr>
              <td>Matlagning, belysning, tv</td>
              <td>Nej</td>
              <td>Här är det bättre att fokusera på att använda mindre.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Tre nivåer – välj din</h2>
      <h3>1. För hand</h3>
      <p>
        Titta på morgondagens priser på eftermiddagen och ställ in fördröjd start på disk- och tvättmaskinen. Det
        kostar ingenting och ger en stor del av vinsten för många hushåll.
      </p>
      <h3>2. Smarta uttag med schema</h3>
      <p>
        Ett smart uttag slår av och på det som sitter i det, efter ett schema du bestämmer. Det fungerar bra för
        apparater som startar av sig själva när strömmen kommer tillbaka, till exempel en avfuktare eller ett
        akvarievärmeelement. Kontrollera alltid att uttaget klarar apparatens effekt.
      </p>
      <h3>3. Låt huset sköta det</h3>
      <p>
        Ett smart hem-system som Home Assistant eller Homey kan läsa in elpriserna och själv välja de billigaste
        timmarna för varmvattnet, laddningen och värmen. Flera elhandlare har också den här styrningen inbyggd i sina
        appar för elbilar och värmepumpar. Det kräver mer i början men sköter sig sedan själv.
      </p>

      <Callout title="Räkneexempel" tone="butter">
        <p>
          Om du flyttar 10 kWh per dygn – ungefär en laddning av elbilen eller varmvattenberedaren – och priset skiljer
          50 öre per kWh mellan dyra och billiga timmar sparar du 5 kronor om dagen. Det blir drygt 1 800 kronor om
          året.{" "}
          <Link href="/kalkylator">Räkna på ditt eget hus</Link>.
        </p>
      </Callout>

      <h2>Se upp för effektavgiften</h2>
      <p>
        Allt fler nätbolag tar betalt för din högsta effekt under månaden, ofta beräknat på några enskilda timmar. Om
        elbilen, beredaren och tvättmaskinen startar samtidigt i den billigaste timmen kan du spara på elpriset men
        betala mer i effektavgift. Kontrollera vad ditt nätbolag har för tariff och sprid ut de stora förbrukarna över
        flera billiga timmar.
      </p>

      <h2>Smarta uttag som klarar jobbet</h2>
      <p>
        Alla tre mäter också förbrukningen, så du ser direkt vad flytten ger. Se fler i{" "}
        <Link href="/produkter/smarta-uttag">vår lista över smarta uttag</Link>.
      </p>
      <Products ids={["shelly-plug-s-gen3", "tapo-p110"]} />

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Lönar sig timpris för alla?",
            a: "Nej. Det lönar sig mest för den som kan flytta en stor del av förbrukningen, till exempel med elbil, varmvattenberedare eller direktverkande el. Använder du mest el på morgnar och kvällar och inte kan ändra på det kan ett vanligt rörligt avtal bli billigare.",
          },
          {
            q: "Kan jag koppla varmvattenberedaren till ett smart uttag?",
            a: "Nej. Varmvattenberedare är fast anslutna och drar för mycket för ett vanligt uttag. Låt en elinstallatör koppla in ett relä eller en kontaktor som kan styras smart.",
          },
          {
            q: "Sliter det på värmepumpen att styra efter elpris?",
            a: "Inte om du gör det måttligt. Undvik att slå av och på pumpen ofta – sänk och höj i stället temperaturen med en eller ett par grader.",
          },
        ]}
      />
    </ArticlePage>
  );
}
