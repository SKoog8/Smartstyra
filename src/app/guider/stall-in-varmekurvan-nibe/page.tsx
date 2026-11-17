import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { guide } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

const meta = guide("stall-in-varmekurvan-nibe");
const path = `/guider/${meta.slug}`;

export const metadata = pageMetadata(meta.seoTitle ?? meta.title, meta.description, path, true, meta);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        <strong>
          Värmekurvan är den inställning som bestämmer hur varmt vatten värmepumpen skickar ut i element eller golvvärme
          vid olika utetemperaturer.
        </strong>{" "}
        Är kurvan för hög blir huset varmare än det behöver, och det märks på elräkningen. Enligt Energimyndigheten
        minskar energin för uppvärmning med ungefär fem procent för varje grad du sänker inomhus. Den här guiden visar
        hur du hittar rätt kurva på en NIBE-värmepump, steg för steg.
      </p>

      <h2>Så fungerar värmekurvan</h2>
      <p>
        Värmepumpen läser av utegivaren och räknar ut en framledningstemperatur – temperaturen på vattnet ut till
        värmesystemet. Ju kallare ute, desto varmare vatten. Kurvan har två inställningar som gör olika saker, och det är
        viktigt att hålla isär dem.
      </p>
      <ul>
        <li>
          <strong>Kurvlutning</strong> anger hur mycket framledningen ska höjas när det blir kallare ute. En brantare
          kurva ger mer extra värme ju kallare det blir.
        </li>
        <li>
          <strong>Förskjutning</strong> flyttar hela kurvan uppåt eller nedåt, lika mycket vid alla utetemperaturer. Enligt
          NIBE höjer en förskjutning på +2 steg framledningen med ungefär 5 °C.
        </li>
      </ul>
      <p>
        Vilken lutning som passar beror enligt NIBE på klimatet där du bor, om du har element eller golvvärme och hur
        välisolerat huset är. Det finns alltså ingen siffra som är rätt för alla – du får prova dig fram.
      </p>

      <h2>Var hittar du inställningarna?</h2>
      <p>Menyerna heter olika i NIBE:s äldre F-serie och nyare S-serie.</p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>S-serien (t.ex. S1155, S1255)</th>
              <th>F-serien (t.ex. F1255)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Förskjutning</td>
              <td>Meny 1.1 Temperatur (−10 till +10)</td>
              <td>Meny 1.1 temperatur (−10 till +10)</td>
            </tr>
            <tr>
              <td>Kurvlutning</td>
              <td>Meny 1.30.1 Kurva, värme (0–15)</td>
              <td>Meny 1.9.1 kurva (0–15, fabriksinställning 9)</td>
            </tr>
            <tr>
              <td>Egen kurva</td>
              <td>Meny 1.30.7 (välj kurva 0)</td>
              <td>Meny 1.9.7 (välj kurva 0)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Har du en rumsgivare installerad och aktiverad ställer du i stället in önskad rumstemperatur i grader i meny 1.1.
        Menynumren kan skilja sig mellan modeller och mjukvaruversioner, så kontrollera i handboken till just din pump.
      </p>

      <h2>Ställ in kurvan steg för steg</h2>
      <p>
        Grundregeln från NIBE:s installatörshandbok är enkel: titta på om felet beror på utetemperaturen eller inte.
      </p>
      <ol>
        <li>
          <strong>Mät inomhustemperaturen</strong> på ett par ställen i huset, inte bara där det är varmast eller kallast.
        </li>
        <li>
          <strong>För kallt eller för varmt när det är kallt ute?</strong> Ändra kurvlutningen ett steg. Är det för kallt,
          öka den. Är det för varmt, sänk den.
        </li>
        <li>
          <strong>För kallt eller för varmt när det är milt ute?</strong> Ändra förskjutningen ett steg i stället.
        </li>
        <li>
          <strong>Vänta ett dygn</strong> innan du ändrar igen. NIBE skriver att rumstemperaturen behöver tid att
          stabilisera sig. Golvvärme i betong är ännu trögare, så där kan det löna sig att vänta längre.
        </li>
        <li>
          <strong>Upprepa</strong> tills temperaturen är rätt både en kall och en mild dag. Eftersom du behöver
          båda sorternas väder kan det ta några veckor.
        </li>
      </ol>
      <p>
        Känns det kallt bara vid en viss utetemperatur kan du använda <strong>punktförskjutning</strong> (meny 1.30.8 i
        S-serien). Den ändrar kurvan runt en utetemperatur du väljer, plus minus fem grader, utan att röra resten.
      </p>

      <Callout title="Räkneexempel: vad är en grad värd?">
        <p>
          Antag att värmepumpen använder 10 000 kWh el om året till uppvärmning och att elen kostar 1,50 kr/kWh med
          nätavgift, skatt och moms. Båda siffrorna är antaganden – byt mot dina egna.
        </p>
        <p>
          Sänker du från 22 till 21 grader blir det ungefär 5 % av 10 000 kWh = 500 kWh mindre per år. Gånger 1,50 kr
          blir det runt 750 kr om året. Räkna på ditt eget hus i <Link href="/kalkylator">kalkylatorn</Link>.
        </p>
      </Callout>

      <h2>Tre saker som gör att kurvan hamnar fel</h2>
      <ul>
        <li>
          <strong>Stängda termostater.</strong> NIBE råder dig att öppna termostatventilerna helt, utom i rum där du vill
          ha det svalare. Stängda termostater stryper flödet, och pumpen kompenserar då med högre temperatur – vilket
          kostar mer.
        </li>
        <li>
          <strong>Möbler framför elementen.</strong> Energimyndigheten påpekar att möbler i vägen för element och
          termostater gör det svårare för värmen att sprida sig. Då känns det kallt och det är lätt att höja kurvan i
          onödan.
        </li>
        <li>
          <strong>Fel gränser för framledningen.</strong> Har du golvvärme ska högsta framledningstemperatur normalt
          ligga mellan 35 och 45 °C enligt NIBE. Golvbeläggningen kan ha egna krav, så fråga golvleverantören eller din
          installatör.
        </li>
      </ul>

      <h2>Värmekurva och prisstyrning</h2>
      <p>
        Prisstyrning, som NIBE:s Smart Price Adaption, flyttar värmen till billigare timmar. Det sänker priset per
        kilowattimme, men det rättar inte till en kurva som ger mer värme än huset behöver. Ställ därför in kurvan först och slå på prisstyrningen sedan. Läs mer i guiden om att{" "}
        <Link href="/guider/styr-bergvarmepumpen-efter-elpriset">styra bergvärmepumpen efter elpriset</Link>. Har du
        rum som behöver vara svalare än resten kan{" "}
        <Link href="/guider/smarta-elementtermostater">smarta elementtermostater</Link> sänka just där.
      </p>

      <h2>Källor</h2>
      <ul>
        <li>
          NIBE:{" "}
          <a href="https://assetstore.nibe.se/hcms/v2.3/entity/document/875061/storage/ODc1MDYxLzAvbWFzdGVy">
            Installatörshandbok NIBE S1256
          </a>{" "}
          (värmekurva, menyer 1.1 och 1.30)
        </li>
        <li>
          NIBE:{" "}
          <a href="https://www.rskdatabasen.se/infodocs/MONT/MONT_30_6249293.pdf">Installatörshandbok NIBE S1255</a>{" "}
          (justering vid kall och mild väderlek, väntetid)
        </li>
        <li>
          NIBE: <a href="https://www.nibe.eu/assets/documents/26266/531103-2.pdf">Användarhandbok NIBE S1155/S1255</a>{" "}
          (spartips)
        </li>
        <li>
          NIBE: <a href="https://nibe.eu/assets/documents/23819/331292-4.pdf">Installatörshandbok NIBE F1255</a>
        </li>
        <li>
          Energimyndigheten:{" "}
          <a href="https://www.energimyndigheten.se/effektiv-energianvandning/hushall/spara-energi-enkla-tips/">
            Spara energi – enkla tips
          </a>
        </li>
      </ul>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Vilken värmekurva ska jag ha på min NIBE?",
            a: "Det beror på klimat, värmesystem och isolering, så det finns ingen siffra som passar alla. Utgå från den som installatören ställde in och justera ett steg i taget.",
          },
          {
            q: "Ska jag ändra kurvan eller förskjutningen?",
            a: "Är det fel temperatur när det är kallt ute ändrar du kurvlutningen. Är det fel när det är milt ute ändrar du förskjutningen.",
          },
          {
            q: "Hur länge ska jag vänta mellan ändringarna?",
            a: "NIBE rekommenderar minst ett dygn, så att rumstemperaturen hinner stabilisera sig. Med golvvärme i betong kan det behövas längre.",
          },
        ]}
      />
    </ArticlePage>
  );
}
