import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import TibberInvite from "@/components/TibberInvite";
import { guide } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

const meta = guide("tibber-grid-rewards");
const path = `/guider/${meta.slug}`;

export const metadata = pageMetadata(meta.title, meta.description, path, true);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        Elnätet måste vara i balans varje sekund: det som produceras ska motsvara det som används. När vinden mojnar
        eller många startar något samtidigt behövs någon som snabbt kan dra ner eller öka sin förbrukning. Grid Rewards
        är Tibbers sätt att låta din elbil och ditt hembatteri göra det jobbet – mot betalning.
      </p>

      <h2>Så fungerar det</h2>
      <p>
        Tibber samlar många elbilar och batterier till ett så kallat virtuellt kraftverk. När elnätet behöver hjälp
        pausar, startar eller ökar Tibber laddningen hos de anslutna kunderna en kort stund. Den flexibiliteten säljer
        Tibber vidare – till Svenska kraftnät, till ett lokalt nätbolag eller på elbörsen, beroende på vem som betalar
        mest för tillfället – och delar ersättningen med dig.
      </p>
      <p>Du märker det knappt. Enligt Tibber pausas laddningen vanligtvis noll till fem gånger per laddning, i ungefär tio minuter åt gången.</p>

      <h2>Vad krävs?</h2>
      <ul>
        <li>
          <strong>Ett elavtal med Tibber.</strong>
        </li>
        <li>
          <strong>För elbil:</strong> en laddbox som är kopplad till Tibber-appen och har stöd för Grid Rewards, samt
          Smartladdning påslagen. Det är laddboxen, inte bilmärket, som avgör om du kan vara med – men vissa bilmärken
          kan delta direkt utan laddbox. Se aktuell lista i appen.
        </li>
        <li>
          <strong>För hembatteri:</strong> ett batteri eller en växelriktare som är kopplad till Tibber, med
          Smartstyrning påslagen. Enligt Tibber har alla batterier som går att koppla till appen stöd för Grid Rewards.
        </li>
      </ul>

      <h2>Hur mycket kan man tjäna?</h2>
      <p>
        Tibber räknar med att en elbil kan ge runt 1 000 kronor om året, ovanpå besparingen från att ladda på billiga
        timmar. För hembatterier räknar Tibber med mer, eftersom ett batteri kan ställa upp oftare och längre än en bil
        som ibland är bortrest.
      </p>
      <p>Ersättningen dras av på elräkningen samma månad som du tjänade in den.</p>
      <Callout title="Ingen garanti" tone="butter">
        <p>
          Ersättningen beror på hur mycket elnätet behöver hjälp, och det varierar med väder, säsong och regler. Det som
          gällde förra året är inget löfte om nästa. Se Grid Rewards som en bonus, inte som en kalkylerad intäkt.
        </p>
      </Callout>

      <h2>Blir laddningen dyrare?</h2>
      <p>
        Om en paus gör att bilen behöver ladda klart under en dyrare timme än planerat kompenserar Tibber dig för
        prisskillnaden. Sammantaget ska en laddning med Grid Rewards alltså bli billigare än med enbart Smartladdning.
        Väljer du ”Ladda nu” i appen hoppar du över planen – och kan gå miste om kompensationen.
      </p>

      <h2>Så får du ut mest</h2>
      <ol>
        <li>Sätt i laddkabeln så fort du parkerar hemma, även om bilen inte behöver laddas.</li>
        <li>Ställ in en realistisk avresetid, så att Tibber har tid att planera.</li>
        <li>Låt Smartladdning vara påslagen hela tiden.</li>
        <li>Har du hembatteri: låt Smartstyrning sköta det i stället för att styra själv.</li>
      </ol>

      <TibberInvite />

      <h2>Bra att veta</h2>
      <ul>
        <li>
          Läs Tibbers villkor för Grid Rewards innan du börjar – där står vad Tibber får göra med din laddning och hur
          ersättningen beräknas.
        </li>
        <li>
          Andra elbolag och aggregatorer erbjuder liknande tjänster, särskilt för hembatterier. Jämför gärna.{" "}
          <Link href="/guider/smart-styrning-hembatteri">Läs mer om batterier</Link>.
        </li>
      </ul>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Kostar Grid Rewards något?",
            a: "Nej. Grid Rewards ingår i Tibbers elavtal utan extra kostnad.",
          },
          {
            q: "Kan Tibber ladda ur min elbil till elnätet?",
            a: "Nej. För elbilar handlar Grid Rewards om att pausa, starta eller öka laddningen – inte om att skicka tillbaka el från bilen.",
          },
          {
            q: "Kan jag vara med utan elbil eller batteri?",
            a: "Inte i dagsläget. Tibber har sagt att fler typer av enheter, till exempel uppvärmning, ska kunna delta i framtiden.",
          },
        ]}
      />
    </ArticlePage>
  );
}
