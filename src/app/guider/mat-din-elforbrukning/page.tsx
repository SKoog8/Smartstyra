import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { Products } from "@/components/ProductCard";
import { guide } from "@/lib/guides";

const meta = guide("mat-din-elforbrukning");
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
        Elräkningen säger hur mycket el huset använde, men inte till vad. Innan du köper en ny frys eller byter alla
        lampor lönar det sig att ta reda på var elen faktiskt tar vägen. Ofta är det något helt annat än man trodde.
      </p>

      <h2>Steg 1: Mät grundlasten i natt</h2>
      <p>
        Grundlasten är det huset drar när ingen gör någonting – kyl och frys, routern, pumpar, laddare och allt som står
        i standby. Den går dygnet runt, året om, och är därför värd att känna till.
      </p>
      <ol>
        <li>Välj en natt när värmen inte går för fullt, gärna vår eller höst.</li>
        <li>Läs av elmätaren innan du går och lägger dig och igen när du vaknar. Notera klockslagen.</li>
        <li>Dela antalet kWh med antalet timmar. Det är din ungefärliga grundlast.</li>
      </ol>
      <p>
        Har du en elhandlare med app kan du ofta se förbrukningen per timme direkt där, och slipper gå till mätaren.
        Titta på timmarna mellan klockan 2 och 5.
      </p>
      <Callout title="Därför spelar grundlasten roll">
        <p>
          100 watt som går dygnet runt blir 876 kWh om året. Med ett elpris på 1,80 kr per kWh är det nästan 1 600
          kronor – för saker du inte ens använder.
        </p>
      </Callout>

      <h2>Steg 2: Se förbrukningen i realtid via HAN-porten</h2>
      <p>
        Den nya generationens elmätare har en HAN-port, ett kundgränssnitt där du kan läsa av förbrukningen i realtid.
        Porten är avstängd från början, men nätbolaget aktiverar den kostnadsfritt om du ber om det – ofta går det att
        göra på deras webbplats under Mina sidor.
      </p>
      <p>
        Till porten kopplar du en HAN-läsare, en liten dosa som skickar mätvärdena till en app eller ett smart hem-system.
        Flera elhandlare säljer egna läsare, och det finns läsare som fungerar med Home Assistant och Homey. Då ser du
        direkt vad som händer när värmepumpen startar eller när du sätter på ugnen.
      </p>

      <h2>Steg 3: Mät apparaterna en och en</h2>
      <p>
        Ett smart uttag med energimätning visar exakt vad en apparat drar, både i drift och i standby. Låt det sitta en
        vecka på varje misstänkt förbrukare och flytta det sedan vidare. Börja med de här:
      </p>
      <ul>
        <li>
          <strong>Den gamla frysboxen i garaget.</strong> Äldre frysar kan dra flera gånger mer än en ny.
        </li>
        <li>
          <strong>Tv-bänken och datorhörnan.</strong> Tv, mediaspelare, högtalare, spelkonsol och skärmar i standby
          kan tillsammans dra mer än man tror.
        </li>
        <li>
          <strong>Handdukstorken.</strong> Står den på dygnet runt året om blir det många kilowattimmar.
        </li>
        <li>
          <strong>Avfuktaren i källaren</strong> och <strong>akvariet</strong> går ofta större delen av dygnet.
        </li>
      </ul>
      <p>
        Det som är fast installerat – golvvärme, varmvattenberedare, spisen – går inte att mäta med ett smart uttag.
        Där får du jämföra före och efter med HAN-läsaren eller med en energimätare i elcentralen.
      </p>

      <h2>Steg 4: Hela huset, fas för fas</h2>
      <p>
        Vill du se allt i detalj kan en elinstallatör montera en energimätare i elcentralen. Den mäter varje fas för
        sig, så att du kan se om värmepumpen, laddboxen eller bastun belastar samma fas – vilket också är bra att veta
        om du har en hög huvudsäkring eller betalar effektavgift.
      </p>

      <h2>Vad gör jag med siffrorna?</h2>
      <ul>
        <li>
          <strong>Hög grundlast:</strong> stäng av eller byt ut det som drar i onödan. Ett smart uttag kan slå av hela
          tv-bänken på natten.
        </li>
        <li>
          <strong>Stora förbrukare som går på dyra timmar:</strong> flytta dem.{" "}
          <Link href="/guider/flytta-elforbrukningen-till-billiga-timmar">Så flyttar du förbrukningen</Link>.
        </li>
        <li>
          <strong>Mest el går till värme:</strong> börja med temperaturen.{" "}
          <Link href="/guider/smarta-elementtermostater">Så sänker du värmen rum för rum</Link>.
        </li>
      </ul>

      <h2>Prylarna för att mäta</h2>
      <Products ids={["tapo-p110", "shelly-pro-3em"]} />

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Hur vet jag om min elmätare har en HAN-port?",
            a: "Fråga ditt nätbolag eller titta på mätaren – porten sitter oftast bakom en lucka och liknar ett nätverks- eller telefonuttag. Nätbolagen har bytt ut nästan alla mätare till den nya generationen, som har porten.",
          },
          {
            q: "Vad är en normal grundlast för en villa?",
            a: "Det varierar mycket, men många villor ligger någonstans mellan 100 och 300 watt när ingen värme eller varmvattenberedare går. Ligger du betydligt högre finns det troligen något att hitta.",
          },
          {
            q: "Drar ett smart uttag ström i sig självt?",
            a: "Ja, men lite – oftast under en watt. Det är betydligt mindre än vad det kan spara genom att slå av något som står i standby.",
          },
        ]}
      />
    </ArticlePage>
  );
}
