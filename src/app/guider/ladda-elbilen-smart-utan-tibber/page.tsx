import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import TestLink from "@/components/TestLink";
import { guide } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

const meta = guide("ladda-elbilen-smart-utan-tibber");
const path = `/guider/${meta.slug}`;

export const metadata = pageMetadata(meta.seoTitle ?? meta.title, meta.description, path, true, meta);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        <strong>
          Smart laddning är när laddboxen eller en app själv väljer de billigaste timmarna att ladda elbilen på,
          i stället för att börja så fort du kopplar in kabeln.
        </strong>{" "}
        Du behöver inte Tibber för det. Flera laddboxar har en egen funktion i appen, och andra elbolag har egna
        tjänster. Här går vi igenom vad Zaptec och Easee erbjuder, vad du behöver för att det ska löna sig och den
        vanligaste fällan: att flera system försöker styra samma laddning.
      </p>

      <h2>Först: utan rätt elavtal spelar det ingen roll</h2>
      <p>
        Smart laddning sänker bara elräkningen om du betalar olika pris för olika tider på dygnet. Det betyder ett
        avtal med <Link href="/guider/kvartspris">kvartspris eller timpris</Link>. Med månadspris eller fast pris
        kostar en kilowattimme lika mycket klockan tre på natten som klockan sex på kvällen. Zaptec skriver själva
        att Eco Mode inte sänker energipriset om du har fast pris – det flyttar bara laddningen till natten. Easee
        skriver att deras smarta laddning inte går att använda alls med fast pris.
      </p>

      <h2>Zaptec Eco Mode: klar till avresetiden</h2>
      <p>
        Har du en Zaptec-laddbox hemma, till exempel Zaptec Go, finns <strong>Eco Mode</strong> i Zaptec-appen. Funktionen finns i
        Sverige och fungerar så här:
      </p>
      <ul>
        <li>Du anger när bilen ska vara klar, hur många kWh du vill ladda och vilket elområde du bor i.</li>
        <li>Zaptec hämtar morgondagens priser från Nord Pool för ditt elområde.</li>
        <li>
          Appen räknar ut hur lång tid laddningen tar och lägger den på de billigaste timmarna före avresetiden.
        </li>
      </ul>
      <p>
        Du slår på det under Laddläge i appen. Välj rätt elområde – annars använder Zaptec SE3, som är
        standardvalet för Sverige. Vilket område du bor i står på elräkningen.
      </p>
      <p>Tre saker är bra att veta:</p>
      <ul>
        <li>
          Eco Mode läser inte av bilens batterinivå. Den laddar det antal kWh du har angett. På vintern drar bilen
          mer, så du kan behöva höja målet.
        </li>
        <li>
          Eco Mode vet inte vilket elavtal eller vilken elnätsavgift du har. Vill du hålla nere effekttopparna kan
          du sänka maxströmmen i appen.
        </li>
        <li>
          Zaptec rekommenderar i dag inte att du kör Eco Mode och lastbalansering med Zaptec Sense samtidigt. Sense
          kan strypa laddningen under de billiga timmarna så att bilen inte blir klar.
        </li>
      </ul>

      <Callout title="Räkneexempel: så planerar Eco Mode" tone="mint">
        <p>
          Zaptecs eget exempel: du kopplar in bilen klockan 18, vill ha 20 kWh till klockan 07 och laddboxen ger
          5 kW. Då behövs 20 / 5 = 4 timmars laddning, och appen väljer fyra billiga timmar under natten.
        </p>
        <p>
          Vad det sparar beror på prisskillnaden. Antag att elen kostar 2,00 kr/kWh direkt när du kommer hem och
          1,00 kr/kWh mitt i natten. Då kostar 20 kWh 40 kronor om bilen laddar direkt och 20 kronor om den laddar
          på natten. Byt ut priserna mot dem som gäller i ditt elområde den dagen.
        </p>
      </Callout>

      <h2>Easee Smart Charging: ladda under en prisgräns</h2>
      <p>
        Easee har valt ett annat upplägg. I Easee-appen, under Schema och Smart charging, kopplar du först din
        elleverantör så att appen får rätt pris. Finns inte ditt elbolag i listan kan du ange priset manuellt.
        Sedan sätter du en <strong>prisgräns</strong> per kWh. Laddboxen laddar då bara när priset ligger på eller
        under gränsen. I schemat syns de tiderna i blått.
      </p>
      <p>
        Skillnaden mot Zaptec är viktig: Easee utgår från ett pris, inte från en avresetid. Sätter du gränsen för
        lågt en vecka med höga priser kan bilen stå oladdad på morgonen. Easee föreslår själva att du antingen
        använder det vanliga veckoschemat eller startar laddningen manuellt om du behöver mer. Följ elpriset de
        första veckorna och justera gränsen därefter – och kontrollera i appen vilket pris den jämför med.
      </p>
      <p>
        Funktionen finns för Easee One, Charge, Charge Core och Charge Max. Du kan alltid starta laddningen direkt
        med knappen i appen.
      </p>

      <h2>Elbolagets app i stället</h2>
      <p>
        Flera elbolag har egna tjänster för smart laddning. E.ON har till exempel Smartladdning i sin app. Den
        styrs alltid via bilen, och för vissa bilmodeller behövs även en laddbox som stöds – listan
        omfattar bland annat Easee, Zaptec, Charge Amps och Garo. Kraven är bland annat att du är elhandelskund hos E.ON och,
        för att spara pengar, har kvartspris. Fördelen med att gå via bilen är att tjänsten vet batterinivån.
        Kontrollera på ditt elbolags sida vilka bilar och laddboxar som stöds.
      </p>

      <h2>Den vanligaste fällan: två system som styr samtidigt</h2>
      <p>
        Bilen kan ha ett eget laddschema, laddboxen kan ha ett och elbolagets app kan ha ett tredje. Zaptec,
        Easee och E.ON varnar alla för samma sak:
      </p>
      <ul>
        <li>Zaptec pausar tjänster som Tibber och Enegic så länge Eco Mode är på.</li>
        <li>
          Easee skriver att du ska kontrollera att bilen inte har ett eget schema och inte är kopplad till en
          tredjepartstjänst om laddningen uteblir.
        </li>
        <li>
          E.ON avråder från att ha smarta laddfunktioner igång på flera enheter samtidigt, eftersom de kan krocka.
        </li>
      </ul>
      <p>
        Välj alltså ett system som bestämmer när bilen laddar, och stäng av schemat i de andra. Går laddningen inte
        som du tänkt är det det första du ska kontrollera.
      </p>

      <h2>Vill du styra mer än bilen?</h2>
      <p>
        Laddboxens app styr bara laddboxen. Vill du låta varmvattenberedaren, värmen och bilen följa samma elpris
        är ett smart hem-system nästa steg. Martin styr sitt hus med Home Assistant, se{" "}
        <TestLink slug="home-assistant" />, och i guiden om{" "}
        <Link href="/guider/nord-pool-elpris-i-home-assistant">Nord Pool-priset i Home Assistant</Link> visar vi
        hur du får in elpriset. Kontrollera först att din laddbox går att koppla till systemet. Står du i
        begrepp att köpa laddbox, läs <Link href="/guider/valj-laddbox">guiden om att välja laddbox</Link>, och
        vill du se vad det betyder för din elräkning kan du prova <Link href="/kalkylator">kalkylatorn</Link>.
      </p>
      <p>
        Installation av laddbox och mätare för lastbalansering ska alltid göras av ett registrerat
        elinstallationsföretag.
      </p>

      <h2>Källor</h2>
      <ul>
        <li>
          Zaptec:{" "}
          <a href="https://help.zaptec.com/smart-charging/eco-mode-in-the-zaptec-app-how-it-works-and-how-to-get-started">
            Eco Mode in the Zaptec app
          </a>
          ,{" "}
          <a href="https://help.zaptec.com/smart-charging/zaptec-charging-modes-how-they-work-and-when-to-use-them">
            Zaptec charging modes
          </a>{" "}
          och <a href="https://www.zaptec.com/charging-solutions/zaptec-app">Zaptec App</a>
        </li>
        <li>
          Easee:{" "}
          <a href="https://support.easee.com/hc/sv/articles/33112890709521-St%C3%A4lla-in-Smart-Charging">
            Ställa in Smart Charging
          </a>{" "}
          och{" "}
          <a href="https://support.easee.com/hc/sv/articles/33123627163281-Information-och-l%C3%B6sningar-f%C3%B6r-smart-laddning">
            Information och lösningar för smart laddning
          </a>
        </li>
        <li>
          E.ON: <a href="https://www.eon.se/kundservice/vara-tjanster/app/smart-laddning">Smartladdning</a>
        </li>
      </ul>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Lönar sig smart laddning med fast elpris?",
            a: "Nej, inte för din egen elräkning. Med fast pris eller månadspris kostar elen lika mycket oavsett när bilen laddar. Du behöver kvartspris eller timpris för att tjäna på billiga timmar.",
          },
          {
            q: "Varför laddade inte bilen i natt?",
            a: "Kontrollera först att bara ett system styr laddningen – bilen, laddboxen eller elbolagets app. Med Easee kan prisgränsen ha varit för låg, och med Zaptec Eco Mode kan kWh-målet ha varit för lågt.",
          },
          {
            q: "Kan jag ladda direkt när smart laddning är på?",
            a: "Ja. Både Zaptec och Easee har en knapp i appen som startar laddningen direkt. I E.ON-appen stänger du av Smartladdning och laddar som vanligt.",
          },
        ]}
      />
    </ArticlePage>
  );
}
