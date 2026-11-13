import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import TestBox from "@/components/TestBox";
import { test } from "@/lib/tests";
import { pageMetadata } from "@/lib/metadata";

const meta = test("home-assistant");
const path = `/tester/${meta.slug}`;

export const metadata = pageMetadata(meta.seoTitle ?? meta.title, meta.description, path, true);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path}>
      <TestBox meta={meta} />
      <p>
        Jag har kört Home Assistant på en Home Assistant Green i flera år. Det är det bästa jag har gjort för
        elräkningen – men räkna med några kvällar innan allt sitter.
      </p>

      <h2>Vad är Home Assistant?</h2>
      <div className="table-wrap">
        <table>
          <tbody>
            <tr>
              <th>Vad det är</th>
              <td>Gratis programvara med öppen källkod som samlar husets smarta prylar i en app och kör automationer</td>
            </tr>
            <tr>
              <th>Var den körs</th>
              <td>Lokalt hemma, på en egen dator, t.ex. Home Assistant Green eller en Raspberry Pi</td>
            </tr>
            <tr>
              <th>Kostnad</th>
              <td>
                Programvaran är gratis. Hårdvaran köper du själv. Fjärråtkomst och röststyrning via Home Assistant Cloud
                är ett frivilligt abonnemang
              </td>
            </tr>
            <tr>
              <th>Elpris</th>
              <td>Integrationer för Nord Pool och Tibber</td>
            </tr>
            <tr>
              <th>Fungerar med</th>
              <td>
                Bland annat Shelly, Adax, Sensibo och Tibber via officiella integrationer. Plejd och ControlMySpa via
                integrationer från användare
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Så kom jag igång</h2>
      <p>
        Själva installationen går fort. Det som tar tid är att få in alla produkter. Det svåraste har varit det som
        kräver HACS – tillägg som användare har skrivit och som installeras från GitHub. Det behövs till exempel för
        Plejd och ControlMySpa, som saknar officiella integrationer.
      </p>

      <h2>Det här styr jag</h2>
      <p>
        Spabadet är det tydligaste exemplet. När det är perioder med väldigt högt elpris sänker jag temperaturen
        direkt från mobilen, och på sommaren värmer jag badet med solel från taket.{" "}
        <Link href="/tester/controlmyspa">Läs mitt test av ControlMySpa</Link>.
      </p>

      <h2>Bra och mindre bra</h2>
      <ul>
        <li>Allt i en app, oavsett tillverkare</li>
        <li>Fungerar lokalt, även när internet går ner</li>
        <li>Kan styra efter elpriset utan abonnemang</li>
        <li>Kräver tid och viss teknisk vana</li>
        <li>Uppdateringar kan ibland kräva att man justerar inställningar</li>
      </ul>

      <h2>Vad det har gett</h2>
      <p>
        Jag har inga exakta siffror, men jag har märkt att en stor del av elförbrukningen har flyttats till billigare
        timmar. Med <Link href="/guider/kvartspris">kvartspris</Link> är det precis där vinsten finns.{" "}
        <Link href="/guider/flytta-elforbrukningen-till-billiga-timmar">Så flyttar du förbrukningen</Link>.
      </p>

      <h2>Vem passar det för?</h2>
      <p>
        Home Assistant passar dig som är lite teknikintresserad och vill få ner elräkningen. Vill du hellre ha något
        som fungerar direkt kan en app från elbolaget räcka långt.{" "}
        <Link href="/guider/sa-fungerar-tibber">Så fungerar Tibber</Link>.
      </p>
    </ArticlePage>
  );
}
