import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { Products } from "@/components/ProductCard";
import { guide } from "@/lib/guides";

const meta = guide("smarta-elementtermostater");
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
        I de flesta hus står alla element på samma värme dygnet runt, oavsett om någon är i rummet eller inte.
        Gästrummet håller 21 grader hela vintern och sovrummet är lika varmt mitt på dagen som på kvällen. Smarta
        elementtermostater ändrar på det: varje rum får sin egen temperatur, efter ett schema som följer hur ni faktiskt
        lever.
      </p>

      <h2>Hur mycket kan man spara?</h2>
      <p>
        Energimyndighetens tumregel är att varje grad lägre inomhustemperatur ger ungefär fem procent lägre kostnad för
        uppvärmningen. Smarta termostater sänker sällan hela huset en grad dygnet runt, men de sänker vissa rum flera
        grader under stora delar av dygnet – och det är där vinsten finns.
      </p>
      <Callout title="Räkneexempel">
        <p>
          Ett hus som använder 12 000 kWh om året till värme, med ett elpris på 1,80 kr per kWh, betalar ungefär 21 600
          kronor för värmen. Fem procent av det är drygt 1 000 kronor om året – för varje grad.{" "}
          <Link href="/kalkylator">Räkna på ditt hus</Link>.
        </p>
      </Callout>

      <h2>Passar det mitt hus?</h2>
      <p>
        Smarta elementtermostater är gjorda för <strong>vattenburna element</strong>, alltså element som värms av
        varmvatten från en värmepump, fjärrvärme eller panna. Du ser det på att elementet har ett termostathuvud på
        sidan, ett vred med siffror.
      </p>
      <ul>
        <li>
          <strong>Direktverkande elelement</strong> har egna termostater och styrs på andra sätt, till exempel med
          smarta termostater för elelement eller med relä.
        </li>
        <li>
          <strong>Golvvärme</strong> styrs oftast från en central reglercentral och behöver en annan lösning.
        </li>
        <li>
          <strong>Har du bergvärme eller frånluftsvärmepump</strong> sänker du hela husets temperatur bäst med
          värmekurvan i pumpen. Smarta termostater är då ett komplement för enskilda rum, som sovrum och gästrum.
        </li>
      </ul>

      <h2>Var gör det mest nytta?</h2>
      <ol>
        <li>
          <strong>Rum som sällan används.</strong> Gästrum, hobbyrum och tvättstuga kan ligga några grader lägre större
          delen av tiden.
        </li>
        <li>
          <strong>Sovrum.</strong> Många sover bättre i 16–18 grader. Låt termostaten sänka på natten och höja en stund
          innan ni går upp.
        </li>
        <li>
          <strong>Hela huset när ingen är hemma.</strong> Står huset tomt på dagarna kan termostaterna sänka några
          grader och höja igen innan första person kommer hem.
        </li>
      </ol>
      <p>
        Låt inga rum bli riktigt kalla. Kalla väggar och golv drar till sig fukt, och det tar mycket energi att värma
        upp ett nedkylt rum igen. Håll gärna minst 15–16 grader även i rum som inte används.
      </p>

      <h2>Så installerar du dem</h2>
      <p>
        Det tar några minuter per element och kräver inga verktyg utöver en tång ibland. Du rör inte vattnet i
        elementet, bara termostathuvudet.
      </p>
      <ol>
        <li>Vrid det gamla termostathuvudet till max och lossa det – oftast med en ring eller en skruv.</li>
        <li>Kontrollera vilken ventil du har. De flesta följer standarden M30 × 1,5 och passar direkt.</li>
        <li>Sätt på rätt adapter om ventilen kräver det. Vanliga adaptrar följer med i förpackningen.</li>
        <li>Skruva på den smarta termostaten och låt den kalibrera sig.</li>
        <li>Lägg upp rummet i appen och skapa ett schema.</li>
      </ol>

      <h2>Så väljer du</h2>
      <ul>
        <li>
          <strong>Ekosystem.</strong> Har du redan Apple Hem, Google Home eller Home Assistant – välj termostater som
          fungerar där.
        </li>
        <li>
          <strong>Hubb.</strong> Nästan alla behöver en brygga eller hubb som kopplar dem till nätverket. Räkna med den
          i kostnaden för det första rummet.
        </li>
        <li>
          <strong>Abonnemang.</strong> Vissa funktioner, till exempel automatisk sänkning när alla lämnat hemmet, kan
          kräva abonnemang. Kontrollera innan du köper.
        </li>
        <li>
          <strong>Fönsterdetektering.</strong> Bra termostater märker när temperaturen sjunker snabbt och stänger
          elementet medan du vädrar.
        </li>
      </ul>

      <h2>Termostaterna vi rekommenderar</h2>
      <p>
        Fler alternativ och köpråd finns i <Link href="/produkter/elementtermostater">vår lista över elementtermostater</Link>.
      </p>
      <Products ids={["tado-x-radiator", "netatmo-valves", "aqara-e1"]} />

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Fungerar smarta termostater med fjärrvärme?",
            a: "Ja. Fjärrvärme värmer upp vattnet i elementen precis som en panna eller värmepump, så termostaterna fungerar på samma sätt.",
          },
          {
            q: "Hur länge räcker batterierna?",
            a: "Oftast ungefär ett år, beroende på modell och hur ofta termostaten justerar ventilen. Appen varnar när det är dags att byta.",
          },
          {
            q: "Kan jag ta med termostaterna när jag flyttar?",
            a: "Ja. Sätt tillbaka de gamla termostathuvudena så kan du ta med de smarta till nästa bostad.",
          },
        ]}
      />
    </ArticlePage>
  );
}
