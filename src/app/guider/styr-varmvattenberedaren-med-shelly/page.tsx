import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { Products } from "@/components/ProductCard";
import TestLink from "@/components/TestLink";
import { guide } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

const meta = guide("styr-varmvattenberedaren-med-shelly");
const path = `/guider/${meta.slug}`;

export const metadata = pageMetadata(meta.seoTitle ?? meta.title, meta.description, path, true, meta);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        <strong>
          Att styra varmvattenberedaren med Shelly är att låta ett smart relä från Shelly bestämma när beredaren får
          värma, så att den värmer vattnet under dygnets billigaste timmar i stället för direkt efter morgonduschen.
        </strong>{" "}
        Beredaren är en av de få stora förbrukarna i huset som kan flyttas i tid utan att någon märker det, eftersom
        tanken håller värmen i många timmar. Den här guiden visar vilken Shelly som passar, hur den kopplas och hur du
        får den att följa elpriset – med eller utan Home Assistant.
      </p>

      <h2>Vilken Shelly ska jag välja?</h2>
      <p>
        Det vanliga valet är <strong>Shelly Pro 1</strong>, ett relä för DIN-skena som monteras i elcentralen. Enligt
        Shelly har det potentialfria kontakter som klarar 16 A och 240 V, och det ansluts via wifi, nätverkskabel eller
        Bluetooth. Det har också ett eget webbgränssnitt, upp till 20 scheman och stöd för skript direkt i reläet. Det
        betyder att det kan styra beredaren helt lokalt, utan moln och utan någon annan dator i huset.
      </p>
      <p>
        Vill du också se hur mycket beredaren drar finns <strong>Shelly Pro 1PM</strong> med energimätning. Den mäter
        bara en fas, så har du en trefasberedare behöver du mäta på annat sätt, till exempel med en Shelly Pro 3EM.
      </p>
      <Products ids={["shelly-pro-1", "shelly-pro-1pm", "shelly-pro-3em"]} />

      <h2>Reläet styr en kontaktor – inte beredaren direkt</h2>
      <p>
        Varmvattenberedaren är fast ansluten, och många beredare är kopplade på tre faser. Därför låter man inte
        Shelly-reläet bryta strömmen till beredaren själv. Reläet styr i stället spolen på en{" "}
        <strong>kontaktor</strong>, en kraftig brytare som i sin tur slår av och på beredarens matning. Hur det
        fungerar i detalj beskriver vi i guiden om att{" "}
        <Link href="/guider/styr-varmvattenberedaren-med-kontaktor">styra varmvattenberedaren med en kontaktor</Link>.
      </p>
      <p>
        Shelly har en egen kopplingsanvisning för Pro 1 och kontaktor. Där används en kontaktor med slutande
        kontakt (NO), och Shelly rekommenderar att en RC-snubber kopplas parallellt med kontaktorns spole för att skydda
        reläet. Beredarens egen termostat sitter kvar och bestämmer som vanligt när vattnet behöver värmas. Shelly
        bestämmer bara när det <em>får</em> hända.
      </p>
      <Callout title="Det här ska en elinstallatör göra" tone="clay">
        <p>
          Shelly Pro 1, kontaktor och snubber monteras i elcentralen och ska installeras av ett registrerat
          elinstallationsföretag. Be gärna om en manuell förbikoppling, så att beredaren kan gå som vanligt om
          styrningen krånglar.
        </p>
      </Callout>

      <h2>Enklast: ett schema i Shelly-appen</h2>
      <p>
        Det enklaste är att inte bry sig om elpriset alls, utan låta beredaren värma på fasta tider. Lägg ett schema i
        Shelly Smart Control eller i reläets webbgränssnitt som släpper på beredaren till exempel mellan klockan 1 och
        6, och kanske ett par timmar mitt på dagen. Schemat ligger i reläet, så det fungerar även om internet är nere.
        Nackdelen är att schemat inte vet när det blir dyrt en natt eller billigt en eftermiddag.
      </p>

      <h2>Följ elpriset utan Home Assistant: ett skript i reläet</h2>
      <p>
        Shelly Pro 1 kan köra skript, och det finns ett gratis skript med öppen källkod som heter{" "}
        <strong>shelly-elpris-se</strong>. Det hämtar spotpriset för ditt elområde, SE1–SE4, och slår av och på reläet
        efter priset. Skriptet är en svensk vidareutveckling av ett finskt skript och hämtar priserna via tjänsten
        elpris.eu. Enligt utvecklaren fungerar det på Shellys Gen 2-enheter, bland annat Pro 1, och på nyare enheter
        om Matter är avstängt.
      </p>
      <p>Så kommer du igång, enligt projektets egen beskrivning:</p>
      <ol>
        <li>Uppdatera reläet till senaste stabila firmware och välj tidszonen Europe/Stockholm.</li>
        <li>Öppna Scripts i reläets webbgränssnitt, skapa ett nytt skript och klistra in koden från projektets sida.</li>
        <li>Spara och starta skriptet. Konsolen visar en lokal adress till skriptets egen inställningssida.</li>
        <li>Öppna adressen i webbläsaren, välj elområde och hur många billiga timmar beredaren ska få, och aktivera.</li>
      </ol>
      <p>
        Elpriset sätts per kvart sedan oktober 2025, men skriptet räknar i dag med timmar: priserna slås ihop till ett
        snitt per timme. För en varmvattenberedare, som ändå behöver värma i flera timmar, spelar det liten roll. Läs
        mer om <Link href="/guider/kvartspris">kvartspris</Link> om du vill förstå skillnaden.
      </p>
      <Callout title="Tänk på" tone="mint">
        <p>
          Skriptet är ett hobbyprojekt från en privatperson, inte något Shelly står bakom, och det finns ingen support.
          Det är beroende av att pristjänsten fungerar. Ställ därför in reservtimmar om skriptet har en sådan
          inställning, och kontrollera då och då att beredaren faktiskt värmer.
        </p>
      </Callout>

      <h2>Med Home Assistant: mer kontroll</h2>
      <p>
        Har du redan Home Assistant är det ofta smidigare att låta det bestämma. Shelly Pro 1 stöds av Home Assistant,
        och där kan du kombinera elpriset med annat, till exempel att beredaren alltid ska få värma en stund före
        kvällsduschen. Martin styr sitt hus med Home Assistant, och hur det fungerar i vardagen beskriver han i testet{" "}
        <TestLink slug="home-assistant" />. Hans egen beredare styrs via en kontaktor av ett relä från Plejd, se{" "}
        <TestLink slug="plejd-golvtermostat-och-rela" />.
      </p>

      <h2>Vad kan det ge?</h2>
      <p>
        Det beror helt på hur mycket varmvatten ni gör av med och hur stor skillnaden är mellan dyra och billiga
        timmar där du bor. Så här räknar du på ditt eget hus.
      </p>
      <Callout title="Räkneexempel" tone="butter">
        <p>
          Antag att beredaren behöver 10 kWh om dygnet och att de timmar den värmer i dag i snitt kostar 40 öre mer per
          kWh än nattens billigaste timmar. Då blir besparingen 10 × 0,40 = 4 kronor om dygnet, eller runt 1 460 kronor
          om året. Byt ut siffrorna mot dina egna: förbrukningen ser du med ett relä med energimätning, och
          prisskillnaden i ditt elområde på din elhandlares sida.
        </p>
      </Callout>
      <p>
        Vill du räkna på fler saker i huset samtidigt kan du använda <Link href="/kalkylator">kalkylatorn</Link>, och
        guiden om att <Link href="/guider/flytta-elforbrukningen-till-billiga-timmar">flytta elförbrukningen till
        billigare timmar</Link> visar vad mer som går att flytta.
      </p>

      <h2>Glöm inte legionellan</h2>
      <p>
        Legionellabakterier trivs i ljummet vatten. Därför ska beredaren hålla minst 60 grader. Sänk inte
        termostaten för att spara el, och se till att styrningen ger beredaren tillräckligt många timmar för att bli
        riktigt varm varje dygn.
      </p>

      <h2>Källor</h2>
      <ul>
        <li>
          Shelly: <a href="https://kb.shelly.cloud/knowledge-base/shelly-pro-1-v1">Shelly Pro 1 – tekniska data</a>
        </li>
        <li>
          Shelly:{" "}
          <a href="https://kb.shelly.cloud/knowledge-base/using-shelly-pro-1-and-a-contactor-for-load-sheddi">
            Använda Shelly Pro 1 med en kontaktor
          </a>
        </li>
        <li>
          shelly-elpris-se: <a href="https://github.com/Soviet9773Red/shelly-elpris-se">projektets sida på GitHub</a>
        </li>
        <li>
          Boverket: <a href="https://www.boverket.se/sv/PBL-kunskapsbanken/regler-om-byggande/hygien-halsa-och-miljo/vatten-avlopp/legionella/">Legionella och annan mikrobiell tillväxt</a>
        </li>
        <li>
          Elsäkerhetsverket: <a href="https://elsakerhetsverket.se/privatpersoner/anlita-ett-elinstallationsforetag">Anlita ett elinstallationsföretag</a>
        </li>
      </ul>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Kan jag koppla beredaren direkt till Shelly-reläet?",
            a: "Låt bli. Beredaren är fast ansluten och ofta trefasig. Reläet ska styra en kontaktor, och allt arbete i elcentralen ska göras av ett registrerat elinstallationsföretag.",
          },
          {
            q: "Behöver jag Home Assistant för att styra efter elpriset?",
            a: "Nej. Ett skript som shelly-elpris-se körs direkt i reläet. Home Assistant ger mer kontroll om du redan har det, men det krävs inte.",
          },
          {
            q: "Vad händer om internet går ner?",
            a: "Ett schema i reläet fortsätter att fungera. Ett skript som hämtar elpriset behöver internet för att få nya priser, så ställ in reservtimmar och en manuell förbikoppling.",
          },
        ]}
      />
    </ArticlePage>
  );
}
