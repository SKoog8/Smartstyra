import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { guide } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

const meta = guide("effektavgift-natbolag");
const path = `/guider/${meta.slug}`;

export const metadata = pageMetadata(meta.seoTitle ?? meta.title, meta.description, path, true, meta);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        <strong>
          Per den 20 november 2026 har 8 av de 17 nätbolag vi har gått igenom kvar effektavgiften för villor – och 9 har
          tagit bort eller pausat den.
        </strong>{" "}
        De som har kvar den räknar på helt olika sätt: vissa tar betalt för månadens högsta timme dygnet runt, andra
        bara för vardagar dagtid på vintern. Kravet på effektavgift försvann i juni 2026, så nu bestämmer varje
        nätbolag själv. Här är läget hos några av de större bolagen och hur de räknar fram din avgift.
      </p>
      <p>
        Vill du veta vad som hände med kravet och hur effektavgiften fungerar i grunden? Läs först{" "}
        <Link href="/guider/effektavgift">guiden om effektavgiften 2026</Link>.
      </p>

      <h2>Nätbolagen som har kvar effektavgiften</h2>
      <p>
        Uppgifterna kommer från nätbolagens egna sidor och prislistor och gäller villor med huvudsäkring upp till 63 A.
        Priserna är per kW och månad inklusive moms, om inget annat anges.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Nätbolag</th>
              <th>Så räknas toppen</th>
              <th>När den gäller</th>
              <th>Pris</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="https://www.goteborgenergi.se/privat/elnat/elnatsavgiften">Göteborg Energi</a>
              </td>
              <td>Snittet av månadens tre högsta timmar, på tre olika dygn</td>
              <td>Hela dygnet, hela året</td>
              <td>49 kr/kW</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.goteborgenergi.se/privat/elnat/valj-tidsindelad-elnatsavgift">
                  Göteborg Energi, valbar tidsindelad
                </a>
              </td>
              <td>De tre högsta timmarna under högpristid</td>
              <td>Vardagar kl. 07–20, november–mars. Övrig tid 0 kr</td>
              <td>135 kr/kW</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.tekniskaverken.se/privat/elnat/information/priser-ersattningar">
                  Tekniska verken, Linköping
                </a>
              </td>
              <td>Snittet av månadens fem högsta toppar, på olika datum</td>
              <td>Hela dygnet. Högre pris november–mars</td>
              <td>45 kr/kW vinter, 23 kr/kW sommar</td>
            </tr>
            <tr>
              <td>
                <a href="https://tekniskaverken.se/privat/elnat/effektavgifter">Tekniska verken, Katrineholm</a>
              </td>
              <td>Samma modell som i Linköping</td>
              <td>Hela dygnet, säsongsindelat</td>
              <td>Se prislistan</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.kraftringen.se/privat/elnat/ny-prismodell-elnat/fragor-och-svar/">Kraftringen</a>
              </td>
              <td>Snittet av de tre högsta timmarna</td>
              <td>Helgfria vardagar kl. 07–21, november–mars. Övriga månader 0 kr</td>
              <td>Se prislistan</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.veab.se/om-oss/press/pressmeddelanden/2026/vaxjo-energi-forandrar-elnatsavgiften---ingen-effektavgift-pa-sommaren/">
                  Växjö Energi
                </a>
              </td>
              <td>Snittet av månadens tre högsta toppar</td>
              <td>Vardagar kl. 07–20, november–mars. Ingen avgift april–oktober sedan 1 augusti 2026</td>
              <td>Ca 72 kr/kW (20–63 A)</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.nackaenergi.se/kundservice-och-faq/vara-elnatspriser/priser-privatperson">
                  Nacka Energi
                </a>
              </td>
              <td>Snittet av månadens tre högsta timmar</td>
              <td>Hela dygnet, hela året</td>
              <td>56,52 kr/kW</td>
            </tr>
            <tr>
              <td>
                <a href="https://karlstadsenergi.se/gemensamt-innehall/elnat/priser/elnatsavgifter">Karlstads Energi</a>
              </td>
              <td>Månadens högsta timme</td>
              <td>Hela dygnet. Dessutom en högbelastningsavgift på 80,09 kr/kW – se prislistan för när den gäller</td>
              <td>48,35 kr/kW</td>
            </tr>
            <tr>
              <td>
                <a href="https://unicorn.telge.se/elnat/elnatskostnad/elnatspriser/">Telge Nät (Södertälje, Nykvarn)</a>
              </td>
              <td>Höglastavgift per kW under höglasttid</td>
              <td>Helgfria vardagar kl. 07–20, november–mars</td>
              <td>125,10 kr/kW (säkring 16–63 A)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm">
        Källor: nätbolagens prislistor, länkade i tabellen. Vill du se alla elnätsföretag finns{" "}
        <a href="https://ei.se/om-oss/statistik-och-oppna-data/natavgifter---elnat/elnatsforetagens-inrapporterade-natavgifter-med-effektavgift-for-ovriga-forbrukare">
          Energimarknadsinspektionens öppna data om nätavgifter med effektavgift
        </a>
        . Den visar vilka bolag som hade rapporterat in en effektavgift per 1 januari 2026 – alltså innan flera av dem
        tog bort eller pausade den.
      </p>
      <Callout title="Kontrollera din egen prislista" tone="butter">
        <p>
          Nätbolagen ändrar sina prismodeller med några månaders varsel, och flera väntar på Energimarknadsinspektionens
          nya förslag som ska komma i april 2027. Uppgifterna ovan kontrollerades i november 2026. Din egen prislista hos
          nätbolaget är det som gäller.
        </p>
      </Callout>

      <h2>Nätbolagen som har tagit bort eller pausat den</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Nätbolag</th>
              <th>Läge för villor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="https://www.ellevio.se/abonnemang/prismodell-utan-effektavgift/">Ellevio</a>
              </td>
              <td>Borttagen från 1 juni 2026</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.malarenergi.se/elnat/effektsmart/prismodellen/">Mälarenergi Elnät</a>
              </td>
              <td>Borttagen från 1 juli 2026</td>
            </tr>
            <tr>
              <td>
                <a href="https://jonkopingenergi.se/privat/elnat/effekttariff">Jönköping Energi Nät</a>
              </td>
              <td>Borttagen från 1 september 2026</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.vattenfalleldistribution.se/abonnemang-och-avgifter/avtal-och-avgifter/effektguiden/">
                  Vattenfall Eldistribution
                </a>
              </td>
              <td>Aldrig införd för hushåll – det planerade införandet är pausat</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.eon.se/el/elnat/effekt">E.ON Energidistribution</a>
              </td>
              <td>Den nya effektavgiften från 1 september 2026 är pausad</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.gavleenergi.se/2026/03/vi-pausar-inforandet-av-effektavgift/">Gävle Energi</a>
              </td>
              <td>Införandet för privatkunder är pausat</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.hem.se/nyheter/vi-pausar-inforandet-av-effektavgifter">Halmstads Energi och Miljö</a>
              </td>
              <td>Pausad för säkringar 16–63 A</td>
            </tr>
            <tr>
              <td>
                <a href="https://kalmarenergi.se/nyheter/paus-effektavgifter-elnatsavgift/">Kalmar Energi</a>
              </td>
              <td>Pausad för säkringar 16–63 A</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.borlange-energi.se/aktuellt/arkiv/2026-03-13-vi-pausar-planerna-for-effektavgifter">
                  Borlänge Energi
                </a>
              </td>
              <td>Planerna är pausade</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Pausad betyder inte borttagen för alltid. Flera bolag skriver att de väntar på Ei:s nya modell, och en
        effektavgift kan komma tillbaka i ny form.
      </p>

      <h2>Fyra sätt att räkna – och vad de betyder för dig</h2>
      <h3>1. Månadens högsta timme</h3>
      <p>
        Den strängaste modellen. En enda timme då bastun, spisen och elbilen gick samtidigt sätter priset för hela
        månaden. Här lönar det sig mest att ha en automatisk spärr som håller effekten under en gräns.
      </p>
      <h3>2. Snittet av de tre eller fem högsta timmarna, på olika dagar</h3>
      <p>
        Den vanligaste modellen. En enstaka miss slår mindre, men du behöver hålla nere toppen flera dagar i månaden.
        Tänk på att det är snittet av timmarna – en topp på 10 kW och två på 6 kW ger 7,3 kW.
      </p>
      <h3>3. Bara under höglasttid</h3>
      <p>
        Kraftringen, Växjö Energi, Telge Nät och Göteborg Energis valbara modell räknar bara vardagar dagtid under
        vintern. Då kan du ladda elbilen, värma varmvattnet och köra tvätten på kvällen, natten och helgen utan att det
        påverkar avgiften. Det ger stor frihet om du planerar rätt.
      </p>
      <h3>4. Olika pris över året</h3>
      <p>
        Tekniska verken tar dubbelt så mycket per kW på vintern som på sommaren. Det är vintermånaderna du ska fokusera
        på – det är också då värmen drar mest.
      </p>

      <h2>Räkna på din egen avgift</h2>
      <p>
        Ta din toppeffekt, enligt nätbolagets modell, gånger priset per kW. Exempel: med Göteborg Energis standardmodell
        och ett snitt på 8 kW för månadens tre högsta timmar blir effektavgiften 8 × 49 = 392 kronor den månaden. Sänker
        du snittet till 5 kW blir det 245 kronor – nästan 150 kronor mindre i månaden.
      </p>
      <p>
        Din toppeffekt ser du ofta på nätbolagets Mina sidor. Vill du se den i realtid behöver du en HAN-läsare.{" "}
        <Link href="/guider/tibber-pulse">Läs om Tibber Pulse</Link> eller{" "}
        <Link href="/guider/mat-din-elforbrukning">hur du mäter förbrukningen</Link>.
      </p>

      <h2>Så håller du nere avgiften</h2>
      <p>
        Grundregeln är att inte låta stora förbrukare gå samtidigt – och, om ditt nätbolag bara räknar vissa timmar, att
        lägga dem utanför de timmarna. Det enklaste är att låta något sköta det automatiskt.{" "}
        <Link href="/guider/sank-effektavgiften-tibber-hembatteri">
          Så sänker du effektavgiften med Tibber eller hembatteriets egen styrning
        </Link>
        .
      </p>

      <h2>Källor</h2>
      <ul>
        <li>
          Energimarknadsinspektionen:{" "}
          <a href="https://ei.se/konsument/el/elnatsavgiften-och-elnatsreglering/effektavgifter">Effektavgifter</a>
        </li>
        <li>
          Regeringen:{" "}
          <a href="https://www.regeringen.se/pressmeddelanden/2026/03/krav-pa-inforande-av-effektavgifter-stoppas/">
            Krav på införande av effektavgifter stoppas
          </a>{" "}
          (13 mars 2026)
        </li>
        <li>
          Energimarknadsinspektionen:{" "}
          <a href="https://ei.se/om-oss/statistik-och-oppna-data/natavgifter---elnat/elnatsforetagens-inrapporterade-natavgifter-med-effektavgift-for-ovriga-forbrukare">
            Elnätsföretagens inrapporterade nätavgifter med effektavgift
          </a>{" "}
          (öppna data, per 1 januari 2026)
        </li>
        <li>Nätbolagens egna sidor och prislistor, länkade i tabellerna ovan (kontrollerade november 2026)</li>
      </ul>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Hur vet jag vilket nätbolag jag har?",
            a: "Det står på din elnätsfaktura. Nätbolaget är det som äger elnätet där du bor, och det kan du inte byta. Det är elhandlaren du kan välja själv.",
          },
          {
            q: "Räknas effekten per timme eller per kvart?",
            a: "De flesta bolag vi har gått igenom anger att de räknar med timmedeleffekt, alltså genomsnittet under en hel timme. Kontrollera ditt nätbolags prislista, eftersom elmätarna nu kan mäta per kvart.",
          },
          {
            q: "Lönar det sig att byta till en tidsindelad modell?",
            a: "Det beror på när du använder mest el. Kan du lägga elbilsladdning, varmvatten och tvätt på kvällar, nätter och helger kan en modell som bara räknar vardagar dagtid bli billigare, även om priset per kW är högre.",
          },
          {
            q: "Kan effektavgiften komma tillbaka hos de bolag som tagit bort den?",
            a: "Ja. Energimarknadsinspektionen ska lämna förslag på en ny, gemensam modell i april 2027. Den kan innehålla en effektdel.",
          },
        ]}
      />
    </ArticlePage>
  );
}
