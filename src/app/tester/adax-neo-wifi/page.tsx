import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import TestBox from "@/components/TestBox";
import { test } from "@/lib/tests";
import { pageMetadata } from "@/lib/metadata";

const meta = test("adax-neo-wifi");
const path = `/tester/${meta.slug}`;

export const metadata = pageMetadata(meta.seoTitle ?? meta.title, meta.description, path, true);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path}>
      <TestBox meta={meta} />
      <p>
        Jag har Adax Neo WiFi-element hemma och låter Tibber styra dem. Elementen gick att koppla till Tibber direkt,
        utan någon hubb eller extra utrustning.
      </p>

      <h2>Fakta</h2>
      <div className="table-wrap">
        <table>
          <tbody>
            <tr>
              <th>Vad det är</th>
              <td>Direktverkande elelement med inbyggd wifi-termostat</td>
            </tr>
            <tr>
              <th>App</th>
              <td>Adax WiFi – temperatur och veckoschema per rum</td>
            </tr>
            <tr>
              <th>Hubb</th>
              <td>Behövs inte, elementen ansluter direkt till hemmets wifi</td>
            </tr>
            <tr>
              <th>Elpris</th>
              <td>Kan kopplas till Tibber, som flyttar uppvärmningen till billiga timmar</td>
            </tr>
            <tr>
              <th>Smart hem</th>
              <td>Officiell integration i Home Assistant</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Så styr jag dem</h2>
      <p>
        Jag använder Tibber-appen. Där kopplade jag elementen direkt, och sedan sköter Tibber uppvärmningen efter
        elpriset. Jag behöver inte använda Adax egen app i vardagen.{" "}
        <Link href="/guider/sa-fungerar-tibber">Så fungerar Tibber</Link>.
      </p>

      <h2>Bra och mindre bra</h2>
      <ul>
        <li>Ingen hubb behövs</li>
        <li>Schema per rum direkt i appen</li>
        <li>Fungerar med både Tibber och Home Assistant</li>
        <li>
          Ett elelement lagrar nästan ingen värme, så det går inte att flytta lika mycket som med en värmepump
        </li>
      </ul>

      <h2>Vem passar de för?</h2>
      <p>
        Adax Neo WiFi passar de flesta i villor med direktverkande el som ändå vill byta ut sina element. Med Tibber
        blir de smarta utan att man behöver tänka på det.{" "}
        <Link href="/guider/adax-wifi-element">Läs guiden om Adax WiFi-element</Link>.
      </p>
    </ArticlePage>
  );
}
