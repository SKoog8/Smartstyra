import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { guide } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

const meta = guide("solceller-och-batteri");
const path = `/guider/${meta.slug}`;

export const metadata = pageMetadata(meta.seoTitle ?? meta.title, meta.description, path, true);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        Kalkylen för solceller har ändrats. Skattereduktionen på 60 öre för såld solel är borta sedan 1 januari 2026,
        och det gröna avdraget för själva solcellerna är lägre än tidigare. Det gör det mindre lönsamt att sälja
        överskottet – och mer värt att använda solelen själv.
      </p>

      <h2>Det här gäller 2026</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Stöd</th>
              <th>Gäller</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Skattereduktion för såld el (60-öringen)</td>
              <td>Borttagen för el som matas ut från och med 1 januari 2026</td>
            </tr>
            <tr>
              <td>Grönt avdrag för solceller</td>
              <td>15 procent av arbete och material (sedan 1 juli 2025)</td>
            </tr>
            <tr>
              <td>Grönt avdrag för batteri</td>
              <td>50 procent av arbete och material – kräver egna solceller</td>
            </tr>
            <tr>
              <td>Grönt avdrag för laddbox</td>
              <td>50 procent av arbete och material</td>
            </tr>
            <tr>
              <td>Tak för grönt avdrag</td>
              <td>50 000 kronor per person och år</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Det gröna avdraget dras direkt på fakturan från installatören. Är ni två som äger huset kan ni dela på avdraget
        och få upp till 50 000 kronor var. Kontrollera alltid aktuella regler hos Skatteverket innan du skriver avtal.
      </p>

      <h2>Använd solelen själv – det är där värdet finns</h2>
      <p>
        När du säljer överskottsel får du elbörsens pris för stunden, och mitt på en solig sommardag är det ofta mycket
        lågt. Varje kilowattimme du använder själv sparar du däremot hela elpriset plus nätavgift, energiskatt och moms.
        Därför lönar det sig att flytta förbrukning till de soliga timmarna:
      </p>
      <ul>
        <li>Ladda elbilen mitt på dagen när du är hemma.</li>
        <li>
          Låt varmvattenberedaren värma när solen lyser.{" "}
          <Link href="/guider/styr-varmvattenberedaren-med-kontaktor">Så styr du beredaren</Link>.
        </li>
        <li>Kör disk- och tvättmaskin under dagen.</li>
        <li>Låt värmepumpen värma upp huset lite extra en solig vår- eller höstdag.</li>
      </ul>

      <h2>Batteri – för vem?</h2>
      <p>
        Ett hembatteri lagrar solelen från dagen till kvällen. Det höjer andelen solel du använder själv, men under
        vinterhalvåret finns det knappt någon solel att lagra. Det är därför <strong>smart styrning</strong> gör störst
        skillnad: då kan batteriet också ladda när elen är billig, använda den när den är dyr och sälja stödtjänster
        till elnätet.
      </p>
      <p>
        Skatteverket har slagit fast att ett batteri som helt eller delvis lagrar egen solel ger rätt till grönt
        avdrag, även om det också används för stödtjänster och prisskillnader. Ett batteri helt utan egna solceller
        ger däremot inget avdrag.{" "}
        <Link href="/guider/smart-styrning-hembatteri">Läs om smart styrning av hembatteriet</Link>.
      </p>
      <Callout title="Räkna försiktigt" tone="butter">
        <p>
          Intäkterna från stödtjänster och prisskillnader har varierat mycket från år till år. Marknadsföringen visar
          gärna vad de bästa kunderna tjänade. Räkna med försiktiga antaganden och låt inte batteriet bära hela kalkylen.
        </p>
      </Callout>

      <h2>Så tar du nästa steg</h2>
      <ol>
        <li>
          <strong>Ta reda på din förbrukning</strong> per timme under ett år, så vet du hur mycket solel du kan använda
          själv. <Link href="/guider/mat-din-elforbrukning">Så mäter du</Link>.
        </li>
        <li>
          <strong>Begär flera offerter</strong> och be installatören visa en kalkyl utan 60-öringen och med dagens gröna
          avdrag.
        </li>
        <li>
          <strong>Fråga om styrningen.</strong> Vilken växelriktare blir det, och går den att koppla till smart styrning,
          till exempel via din elhandlare?
        </li>
      </ol>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Lönar sig solceller fortfarande 2026?",
            a: "Det kan göra det, men återbetalningstiden har blivit längre för många. Mest lönsamt blir det om du kan använda en stor del av solelen själv, till exempel med elbil, värmepump eller smart styrd varmvattenberedare.",
          },
          {
            q: "Kan jag få grönt avdrag för ett batteri om jag redan har solceller?",
            a: "Ja. Batteriet ska vara kopplat till solceller som redan finns på fastigheten eller installeras samtidigt.",
          },
          {
            q: "Får jag fortfarande betalt för el jag säljer?",
            a: "Ja. Elhandlaren som köper din överskottsel betalar som vanligt. Det som har försvunnit är den extra skattereduktionen på 60 öre per kilowattimme.",
          },
        ]}
      />
    </ArticlePage>
  );
}
