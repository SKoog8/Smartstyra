import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { guide } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

const meta = guide("kvartspris");
const path = `/guider/${meta.slug}`;

export const metadata = pageMetadata(meta.seoTitle ?? meta.title, meta.description, path, true);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        Den 1 oktober 2025 slutade elbörsen sätta ett pris per timme. I stället sätts priset för varje kvart – 96 priser
        per dygn i stället för 24. För de flesta märks det inte, men för dig som styr förbrukningen till billiga tider
        öppnar det nya möjligheter.
      </p>

      <h2>Vad är kvartspris?</h2>
      <p>
        Elpriset för nästa dygn bestäms på den europeiska elbörsen dagen innan. Sedan oktober 2025 gör den det i
        15-minutersintervall. Ett <strong>kvartsprisavtal</strong> betyder att du betalar det priset för den el du
        använder under respektive kvart, plus elhandlarens påslag och avgifter.
      </p>
      <p>
        Elhandlare med fler än 200 000 kunder måste erbjuda kvartsprisavtal. Timprisavtal finns fortfarande hos vissa
        elhandlare, och en del har gjort om befintliga timprisavtal till kvartspris. Kontrollera ditt avtal hos din
        elhandlare.
      </p>

      <h2>Kvartspris, timpris eller månadspris?</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Avtal</th>
              <th>Du betalar</th>
              <th>Passar dig som</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kvartspris</td>
              <td>Priset för varje kvart du använder el</td>
              <td>Kan flytta förbrukning och gärna låter appar eller smarta prylar styra</td>
            </tr>
            <tr>
              <td>Timpris</td>
              <td>Snittpriset för varje timme</td>
              <td>Vill flytta förbrukning men tycker att kvartar är onödigt detaljerat</td>
            </tr>
            <tr>
              <td>Rörligt månadspris</td>
              <td>Månadens genomsnittspris, viktat efter hur alla förbrukar</td>
              <td>Inte vill tänka på när du använder el</td>
            </tr>
            <tr>
              <td>Fast pris</td>
              <td>Samma pris hela avtalstiden</td>
              <td>Vill ha förutsägbara kostnader och kan betala lite extra för det</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>När lönar sig kvartspris?</h2>
      <p>
        Med rörligt månadspris betalar du ett snittpris som är viktat efter när alla hushåll använder el – och de flesta
        använder mest när det är dyrt. Med kvartspris betalar du för just din förbrukning. Det betyder:
      </p>
      <ul>
        <li>
          <strong>Du vinner</strong> om du använder en större del av elen när den är billig än genomsnittet gör, till
          exempel om elbilen, varmvattnet eller värmepumpen går på natten.
        </li>
        <li>
          <strong>Du förlorar</strong> om du använder mest el på vardagsmorgnar och kvällar, när priserna toppar.
        </li>
      </ul>
      <p>
        Ett bra sätt att avgöra det är att titta på din förbrukning per timme i elhandlarens eller nätbolagens app. Ligger
        mycket av förbrukningen på natten eller mitt på dagen är kvartspris troligen bättre.
      </p>

      <h2>Vad ändras med kvartar i stället för timmar?</h2>
      <ul>
        <li>
          <strong>Större spridning inom timmen.</strong> Priset kan skilja mellan kvartarna i samma timme, särskilt runt
          morgon- och kvällstopparna. Den som startar en stor förbrukare kvart i stället för vid hel timme kan ibland
          träffa ett billigare pris.
        </li>
        <li>
          <strong>Mer för automatiken.</strong> Ingen orkar planera 96 priser om dagen för hand. Kvartspris gör störst
          nytta när en app, laddbox eller ett smart hem-system styr.
        </li>
        <li>
          <strong>Samma mönster som förut.</strong> Natt och mitt på dagen är fortfarande ofta billigast, morgon och
          kväll dyrast.
        </li>
      </ul>
      <Callout title="Tips">
        <p>
          Har du redan smart styrning av elbil, varmvattenberedare eller värmepump behöver du sällan ändra något –
          styrningen använder de nya priserna automatiskt om den stödjer kvartspris.{" "}
          <Link href="/guider/flytta-elforbrukningen-till-billiga-timmar">Så flyttar du förbrukningen</Link>.
        </p>
      </Callout>

      <h2>Räkna på det</h2>
      <p>
        Hur mycket det kan ge beror på hur mycket du kan flytta och hur stora prisskillnaderna är i ditt elområde. Prova
        med dina egna siffror i <Link href="/kalkylator">kalkylatorn</Link>.
      </p>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Måste jag byta till kvartspris?",
            a: "Nej. Du kan fortfarande välja rörligt månadspris eller fast pris. Kvartspris är ett val för dig som vill tjäna på att flytta förbrukningen.",
          },
          {
            q: "Mäter min elmätare per kvart?",
            a: "Elmätaren och avräkningen sköts av nätbolaget. Fråga din elhandlare hur förbrukningen räknas om du har kvartsprisavtal, eftersom det kan skilja sig åt under övergången.",
          },
          {
            q: "När publiceras morgondagens kvartspriser?",
            a: "Priserna för nästa dygn bestäms på elbörsen strax efter lunch dagen innan och syns i de flesta elhandlares appar på eftermiddagen.",
          },
        ]}
      />
    </ArticlePage>
  );
}
