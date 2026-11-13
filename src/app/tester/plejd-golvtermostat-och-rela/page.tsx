import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import TestBox from "@/components/TestBox";
import { test } from "@/lib/tests";
import { pageMetadata } from "@/lib/metadata";

const meta = test("plejd-golvtermostat-och-rela");
const path = `/tester/${meta.slug}`;

export const metadata = pageMetadata(meta.seoTitle ?? meta.title, meta.description, path, true);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path}>
      <TestBox meta={meta} />
      <p>
        Jag har Plejds golvtermostat TRM-01 och ett kronrelä REL-02 som styr varmvattenberedaren. Eftersom jag är
        elektriker installerade jag dem själv. Båda styrs i Plejd-appen.
      </p>

      <h2>Fakta</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Golvtermostat TRM-01</th>
              <th>Kronrelä REL-02</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vad den gör</td>
              <td>Styr elektrisk golvvärme, pekskärm i väggen</td>
              <td>Slår av och på en eller två laster</td>
            </tr>
            <tr>
              <td>Last</td>
              <td>Upp till 16 A</td>
              <td>Två utgångar, totalt 16 A</td>
            </tr>
            <tr>
              <td>Placering</td>
              <td>I väggdosan, med golvgivare</td>
              <td>Bakom strömbrytare, i elcentral eller takdosa</td>
            </tr>
            <tr>
              <td>Funktioner</td>
              <td>Dag- och nattsänkning, scenarion. Semesterläge kräver Plejd Gateway</td>
              <td>Styrs med schema och scenarion i appen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Allt styrs i Plejd-appen via Bluetooth-mesh. Plejd Gateway behövs för fjärrstyrning och integrationer.{" "}
        <Link href="/guider/plejd-smart-belysning">Läs mer om hur Plejd fungerar</Link>.
      </p>

      <h2>Installation</h2>
      <p>
        Plejd kräver en elektriker. Modulerna kopplas in i den fasta elinstallationen, precis som vanliga dimrar,
        reläer och termostater. Jag gjorde det själv eftersom det är mitt jobb – för de flesta betyder det att boka en
        elinstallatör.
      </p>
      <p>
        Ska ett relä styra en varmvattenberedare måste installationen vara dimensionerad för beredarens effekt. Låt
        elinstallatören avgöra om reläet räcker eller om det behövs en kontaktor.{" "}
        <Link href="/guider/styr-varmvattenberedaren-med-kontaktor">Så styr du varmvattenberedaren</Link>.
      </p>

      <h2>Så styr jag dem</h2>
      <p>Jag styr både golvvärmen och varmvattenberedaren via Plejd-appen.</p>

      <h2>Bra och mindre bra</h2>
      <ul>
        <li>Ser ut och fungerar som vanliga strömbrytare och termostater</li>
        <li>Samma app för belysning, golvvärme och reläer</li>
        <li>Fungerar även om mobilen eller internet är nere</li>
        <li>Ingen inbyggd styrning efter elpriset i Plejd-appen</li>
        <li>Kräver elinstallatör</li>
      </ul>

      <h2>Vem passar det för?</h2>
      <p>
        Plejd passar de allra flesta, men kräver en elektriker som installerar. Bäst passar det när elen ändå ska ses
        över, till exempel vid en renovering.{" "}
        <Link href="/guider/uppkopplade-golvtermostater">Jämför uppkopplade golvtermostater</Link>.
      </p>
    </ArticlePage>
  );
}
