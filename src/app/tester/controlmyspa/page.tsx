import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import TestBox from "@/components/TestBox";
import { test } from "@/lib/tests";
import { pageMetadata } from "@/lib/metadata";

const meta = test("controlmyspa");
const path = `/tester/${meta.slug}`;

export const metadata = pageMetadata(meta.seoTitle ?? meta.title, meta.description, path, true);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path}>
      <TestBox meta={meta} />
      <p>
        Mitt spabad drar ungefär 4 000 kWh om året om det står igång hela tiden. Det är mycket el, och därför styr
        jag när det värms med ControlMySpa.
      </p>

      <h2>Fakta</h2>
      <div className="table-wrap">
        <table>
          <tbody>
            <tr>
              <th>Vad det är</th>
              <td>Balboas app och molntjänst för spabad, via en wifi-modul kopplad till badets styrsystem</td>
            </tr>
            <tr>
              <th>Fungerar med</th>
              <td>Balboas BP-styrsystem. Äldre Balboa-system har en annan wifi-modul och app</td>
            </tr>
            <tr>
              <th>Kräver</th>
              <td>Badets CMS-kod, en kod på åtta tecken</td>
            </tr>
            <tr>
              <th>I appen</th>
              <td>Temperatur, filtercykler, pumpar, blåsare och belysning, status och larm</td>
            </tr>
            <tr>
              <th>Elpris</th>
              <td>Ingen inbyggd styrning efter elpriset</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Installation</h2>
      <p>
        Modulen var enkel att koppla in – plug and play – i mitt Balboa-spa. Men det fungerar bara om badet har ett
        kompatibelt styrsystem, så kontrollera det innan du köper.
      </p>

      <h2>Så styr jag spabadet</h2>
      <ul>
        <li>Jag sänker temperaturen några grader på schema under de tider då elen brukar vara dyrare.</li>
        <li>Under perioder med väldigt högt elpris sänker jag den direkt från mobilen.</li>
        <li>På sommaren värmer jag med solel, och på vintern på natten.</li>
      </ul>
      <p>
        Jag styr badet både i ControlMySpa-appen och via{" "}
        <Link href="/tester/home-assistant">Home Assistant</Link>. Uppkopplingen har varit stabil.
      </p>

      <h2>Vad det har gett</h2>
      <p>
        Ett spabad som står igång året runt drar mycket. Det går att spara många kilowattimmar på att sänka
        temperaturen på vintern när elpriset är som högst, och på att värma med solel på sommaren.
      </p>
      <Callout title="Tips: värmeläget Rest">
        <p>
          Balboas styrsystem har ett värmeläge, Rest, där badet bara värms under filtercyklerna. Lägger man dem på
          natten hamnar uppvärmningen på billigare timmar.{" "}
          <Link href="/guider/controlmyspa-spabad">Läs guiden om ControlMySpa</Link>.
        </p>
      </Callout>

      <h2>Bra och mindre bra</h2>
      <ul>
        <li>Full koll på badet från mobilen</li>
        <li>Filtercykler och värmeläge går att använda för att flytta uppvärmningen</li>
        <li>Stabil uppkoppling</li>
        <li>Ingen egen styrning efter elpriset</li>
      </ul>
    </ArticlePage>
  );
}
