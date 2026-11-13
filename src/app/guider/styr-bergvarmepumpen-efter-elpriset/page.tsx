import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { guide } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

const meta = guide("styr-bergvarmepumpen-efter-elpriset");
const path = `/guider/${meta.slug}`;

export const metadata = pageMetadata(meta.seoTitle ?? meta.title, meta.description, path, true);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        I ett hus med bergvärme går den största delen av elräkningen till värmepumpen. Samtidigt är huset ett stort
        värmelager: väggar, golv och möbler håller värmen i timmar. Det gör bergvärmepumpen perfekt att styra efter
        elpriset – värm lite extra när elen är billig och vila när den är dyr.
      </p>

      <h2>Så fungerar det</h2>
      <p>
        En bergvärmepump styrs vanligtvis av en <strong>värmekurva</strong>: ju kallare det är ute, desto varmare vatten
        skickar den ut i elementen eller golvvärmen. Smart styrning justerar det här efter elpriset. Före de dyra
        timmarna höjer den värmen något, och under de dyra timmarna sänker den. Huset jämnar ut skillnaden, så
        inomhustemperaturen ändras bara lite.
      </p>
      <Callout title="Kräver rätt elavtal">
        <p>
          För att tjäna på styrningen behöver du ett elavtal med timpris eller{" "}
          <Link href="/guider/kvartspris">kvartspris</Link>. Med rörligt månadspris eller fast pris spelar det ingen roll
          när pumpen går.
        </p>
      </Callout>

      <h2>Tre sätt att styra</h2>
      <h3>1. Värmepumpens egen funktion – exempel NIBE</h3>
      <p>
        Många nyare värmepumpar har inbyggd prisstyrning. NIBE kallar sin funktion Smart Price Adaption. Den hämtar
        morgondagens elpriser och planerar driften så att mer värme och varmvatten produceras när elen är billig. Det
        kräver att pumpen är uppkopplad mot NIBE:s tjänst myUplink och att du har timpris eller kvartspris. Vissa
        funktioner i myUplink kräver ett premiumabonnemang. Andra tillverkare har ofta liknande funktioner i sina appar
        – kontrollera vad din modell klarar.
      </p>
      <h3>2. Via elbolaget – exempel Tibber</h3>
      <p>
        Tibber kan styra flera värmepumpar direkt, bland annat NIBE:s S-serie via myUplink (tillsammans med en
        rumsgivare) och CTC. Tibber flyttar uppvärmningen till billigare timmar och låter temperaturen gå som mest en
        grad under den du har ställt in. Använder du Tibbers styrning stängs NIBE:s egen prisstyrning av, så välj det
        ena eller det andra. <Link href="/guider/sa-fungerar-tibber">Så fungerar Tibber</Link>.
      </p>
      <h3>3. En fristående styrning – Ngenic Tune</h3>
      <p>
        Ngenic Tune fungerar med de flesta vattenburna värmesystem, även äldre pumpar utan uppkoppling. Den består av
        en trådlös innegivare, en gateway och en styrbox som kopplas in på pumpens utegivare. Styrboxen låter pumpen tro
        att det är lite varmare eller kallare ute än det är, och på så sätt styr Ngenic värmen efter innetemperatur,
        väderprognos och – om du har timpris – elpriset. Enligt Ngenic klarar de flesta installationen själva på ungefär
        20 minuter. Tune hyrs som ett abonnemang utan bindningstid, och den kan också kopplas till Tibber.
      </p>

      <h2>Tänk på det här</h2>
      <ul>
        <li>
          <strong>Inte för stora svängningar.</strong> Huset klarar att lagra värme några timmar, inte ett halvt dygn.
          Att stänga av värmen helt under långa dyra perioder gör det kallt och kan få elpatronen att gå när pumpen ska
          ta igen – vilket kostar mer än det sparar.
        </li>
        <li>
          <strong>Golvvärme lagrar mest.</strong> Har du vattenburen golvvärme i betongplatta kan du flytta mer än med
          element, eftersom plattan håller värmen längre.
        </li>
        <li>
          <strong>Varmvattnet går också att flytta.</strong> Många pumpar kan värma varmvattnet extra under billiga
          timmar. Det ger ofta en stor del av vinsten.
        </li>
        <li>
          <strong>Ändra inte för mycket själv.</strong> Låt styrningen jobba en vecka eller två innan du justerar.
          Pröva sedan att sänka grundtemperaturen en halv grad – varje grad lägre ger ungefär fem procent lägre
          uppvärmningskostnad.
        </li>
      </ul>

      <h2>Vad kan det ge?</h2>
      <p>
        Det beror på hur mycket värme huset behöver, hur stora prisskillnaderna är i ditt elområde och hur mycket huset
        kan lagra. Räkna på ditt eget hus i <Link href="/kalkylator">kalkylatorn</Link> – flyttad förbrukning och sänkt
        temperatur kan du lägga in var för sig.
      </p>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Sliter prisstyrning på bergvärmepumpen?",
            a: "Inte om den görs måttligt. Bra styrningar justerar värmekurvan eller den inställda temperaturen i stället för att slå av och på kompressorn ofta.",
          },
          {
            q: "Fungerar det med frånluftsvärmepump?",
            a: "Ja, både värmepumpens egna funktioner och lösningar som Ngenic Tune fungerar med många frånluftsvärmepumpar. Kontrollera din modell hos tillverkaren.",
          },
          {
            q: "Kan jag använda flera styrningar samtidigt?",
            a: "Nej, välj en. Två system som justerar samma värmepump motarbetar varandra. Använder du Tibbers styrning ska till exempel NIBE:s Smart Price Adaption vara avstängd.",
          },
        ]}
      />
    </ArticlePage>
  );
}
