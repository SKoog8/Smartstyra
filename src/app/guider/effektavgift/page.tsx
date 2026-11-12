import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { guide } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

const meta = guide("effektavgift");
const path = `/guider/${meta.slug}`;

export const metadata = pageMetadata(meta.seoTitle ?? meta.title, meta.description, path, true);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        I flera år var planen att alla elnätsbolag i Sverige skulle ta betalt för hur mycket el du använder samtidigt –
        inte bara hur mycket du använder totalt. Under 2026 vände det. Kravet är borttaget, och nu är det upp till varje
        nätbolag om det vill ha en effektavgift. Det betyder att det som gäller för dig beror helt på var du bor.
      </p>

      <h2>Vad är en effektavgift?</h2>
      <p>
        Elnätsavgiften har traditionellt bestått av en fast avgift och en avgift per kilowattimme. En effektavgift tar
        dessutom betalt för din <strong>högsta effekt</strong>, alltså hur många kilowatt huset drar på en gång. Den
        vanligaste modellen räknar på genomsnittet av månadens tre högsta timmar, ofta på tre olika dagar, och tar ett
        pris per kilowatt.
      </p>
      <p>
        Tanken är att elnätet ska dimensioneras för toppar. Om alla laddar elbilen, lagar mat och kör bastu samtidigt
        behövs grövre ledningar. Effektavgiften ska få oss att sprida ut förbrukningen.
      </p>

      <h2>Vad hände 2026?</h2>
      <ul>
        <li>
          <strong>2022</strong> beslutade Energimarknadsinspektionen (Ei) att alla elnätsbolag skulle ha infört
          effektavgift senast 1 januari 2027.
        </li>
        <li>
          <strong>I mars 2026</strong> gav regeringen Ei i uppdrag att upphäva kravet. Motiveringen var att modellerna
          skilde sig för mycket mellan nätbolagen och slog för hårt mot vanliga hushåll.
        </li>
        <li>
          <strong>I juni 2026</strong> upphävde Ei föreskrifterna. Det finns alltså inget krav längre – men inte heller
          något förbud. Ei ska ta fram förslag på en ny, gemensam modell till april 2027.
        </li>
      </ul>

      <h2>Har ditt nätbolag kvar effektavgiften?</h2>
      <p>
        Det skiljer sig. Flera nätbolag tog bort effektavgiften för villor under 2026, bland andra Ellevio, Mälarenergi
        Elnät och Jönköping Energi. Andra har valt att behålla den, till exempel Göteborg Energi. Vattenfall Eldistribution
        hade inte hunnit införa någon effektavgift för hushåll när kravet stoppades.
      </p>
      <p>Så tar du reda på vad som gäller för dig:</p>
      <ol>
        <li>Titta på din senaste elnätsfaktura. En effektavgift redovisas som en egen rad, ofta i kronor per kW.</li>
        <li>Logga in på ditt nätbolags Mina sidor och kontrollera din tariff eller prislista.</li>
        <li>Läs nätbolagens nyheter – flera har aviserat ändringar med några månaders varsel.</li>
      </ol>
      <Callout title="Kolla din egen tariff" tone="butter">
        <p>
          Läget förändras fortfarande. Exemplen ovan bygger på nätbolagens besked hösten 2026. Ditt eget nätbolags
          prislista är det enda som säkert gäller för dig.
        </p>
      </Callout>

      <h2>Har du effektavgift? Så håller du nere den</h2>
      <p>
        Grundprincipen är enkel: undvik att stora förbrukare går samtidigt. Det är toppen som kostar, inte den totala
        förbrukningen.
      </p>
      <ul>
        <li>
          <strong>Sprid ut elbilsladdningen.</strong> Ladda med lägre effekt under fler timmar i stället för full effekt
          under en timme. Många laddboxar och appar kan sätta ett tak, till exempel Tibbers Effektkontroll.{" "}
          <Link href="/guider/smart-laddning-elbil-tibber">Så laddar du smart</Link>.
        </li>
        <li>
          <strong>Låt inte varmvattenberedaren starta samtidigt som laddningen.</strong> Ett smart relä kan spärra den
          medan bilen laddar. <Link href="/guider/styr-varmvattenberedaren-med-kontaktor">Så styr du beredaren</Link>.
        </li>
        <li>
          <strong>Se upp med de billigaste timmarna.</strong> Om allt schemaläggs till samma billiga timme kan du spara
          på elpriset men betala mer i effektavgift. Fördela över flera billiga timmar.
        </li>
        <li>
          <strong>Mät.</strong> En realtidsmätare på elmätarens HAN-port visar direkt när huset drar mycket.{" "}
          <Link href="/guider/tibber-pulse">Läs om Tibber Pulse</Link>.
        </li>
      </ul>

      <h2>Har du ingen effektavgift?</h2>
      <p>
        Då betalar du som vanligt per kilowattimme, och det enda som räknas är när elen används och hur mycket. Det gör
        det ännu enklare att flytta förbrukningen till billiga timmar.{" "}
        <Link href="/guider/flytta-elforbrukningen-till-billiga-timmar">Så flyttar du elförbrukningen</Link>. Men tänk på
        att en effektavgift kan komma tillbaka i en ny form när Ei har lagt fram sin modell.
      </p>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Är effektavgiften förbjuden nu?",
            a: "Nej. Kravet på att alla nätbolag ska ha effektavgift är borttaget, men nätbolagen får fortfarande ha en om den följer ellagens krav på rimliga och sakliga avgifter.",
          },
          {
            q: "Kan jag byta nätbolag för att slippa effektavgiften?",
            a: "Nej. Elnätet är ett lokalt monopol, så du har det nätbolag som äger nätet där du bor. Det du kan välja är elhandlare.",
          },
          {
            q: "Hur räknas effektavgiften ut?",
            a: "Det varierar mellan nätbolagen. Vanligast är genomsnittet av månadens tre högsta timmar, ofta på olika dagar, gånger ett pris per kW. Vissa räknar bara på dagtid eller har lägre pris på natten och sommaren.",
          },
        ]}
      />
    </ArticlePage>
  );
}
