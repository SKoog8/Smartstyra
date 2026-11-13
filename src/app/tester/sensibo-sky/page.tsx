import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import TestBox from "@/components/TestBox";
import { test } from "@/lib/tests";
import { pageMetadata } from "@/lib/metadata";

const meta = test("sensibo-sky");
const path = `/tester/${meta.slug}`;

export const metadata = pageMetadata(meta.seoTitle ?? meta.title, meta.description, path, true);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path}>
      <TestBox meta={meta} />
      <p>
        Sensibo Sky har styrt min luft-luft-värmepump från Panasonic i ett år. Den har fungerat bra, och den
        integrerar bra direkt i Tibber, som sköter styrningen efter elpriset.
      </p>

      <h2>Fakta</h2>
      <div className="table-wrap">
        <table>
          <tbody>
            <tr>
              <th>Vad det är</th>
              <td>Liten IR-styrenhet som gör luft-luft-värmepumpen smart genom att härma fjärrkontrollen</td>
            </tr>
            <tr>
              <th>Anslutning</th>
              <td>Wifi, bara 2,4 GHz</td>
            </tr>
            <tr>
              <th>Givare</th>
              <td>Temperatur och luftfuktighet</td>
            </tr>
            <tr>
              <th>Räckvidd</th>
              <td>IR-signaler upp till ca 6 meter, 180 grader. Behöver fri sikt till inomhusdelen</td>
            </tr>
            <tr>
              <th>Funktioner</th>
              <td>
                Scheman, styrning från mobilen och Climate React. Vissa funktioner kräver abonnemanget Sensibo Plus
              </td>
            </tr>
            <tr>
              <th>Fungerar med</th>
              <td>Google Home, Amazon Alexa, Tibber och Home Assistant</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Sky är Sensibos äldre modell. Efterföljaren heter Sensibo Air.{" "}
        <Link href="/produkter/varmepumpsstyrning">Jämför styrning för luft-luft-värmepumpar</Link>.
      </p>

      <h2>Installation</h2>
      <p>
        Sensibo hittade fjärrkontrollen till min Panasonic direkt. Den ska placeras i närheten av inomhusdelen, så att
        IR-signalen når fram.
      </p>

      <h2>Så styr jag värmepumpen</h2>
      <p>
        Jag använder Tibber-integrationen. Den gick att koppla in direkt, och sedan sköter Tibber värmepumpen efter
        elpriset tillsammans med resten av huset. Det finns också en integration för Home Assistant, men den har jag
        inte provat.{" "}
        <Link href="/guider/sa-fungerar-tibber">Så fungerar Tibber</Link>.
      </p>

      <h2>Bra och mindre bra</h2>
      <ul>
        <li>Gör en vanlig värmepump smart utan att öppna den</li>
        <li>Integrerar bra direkt i Tibber</li>
        <li>Sensibo vet inte säkert vad värmepumpen gör – tar någon i fjärrkontrollen kan appen visa fel läge</li>
        <li>Bara 2,4 GHz-wifi</li>
      </ul>
    </ArticlePage>
  );
}
