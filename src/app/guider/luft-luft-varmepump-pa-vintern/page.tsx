import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import TestLink from "@/components/TestLink";
import { Products } from "@/components/ProductCard";
import { guide } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

const meta = guide("luft-luft-varmepump-pa-vintern");
const path = `/guider/${meta.slug}`;

export const metadata = pageMetadata(meta.seoTitle ?? meta.title, meta.description, path, true, meta);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        <strong>
          En luft-luftvärmepump är en värmepump som hämtar värme ur uteluften och blåser ut den som varm luft inne, via en
          inomhusdel på väggen.
        </strong>{" "}
        I ett hus med direktverkande el kan den ta en stor del av uppvärmningen, och därför märks det på elräkningen om den
        är rätt inställd. Det är också på vintern, när den behövs mest, som den har det svårast.
      </p>
      <p>
        Här går vi igenom de inställningar som gör skillnad: temperaturen, driftläget, fläkten, avfrostningen och filtren.
        Råden bygger på Boverkets och Energimyndighetens rekommendationer och på en tillverkares bruksanvisning. Din modell
        kan skilja sig, så ha din egen manual till hands.
      </p>

      <h2>Så fungerar luft-luftvärmepumpen när det är kallt</h2>
      <p>
        Ju kallare det är ute, desto mindre värme finns det att hämta. Panasonic skriver i sin bruksanvisning att
        uppvärmningsförmågan minskar när utomhustemperaturen sjunker, och att du ska komplettera med annan värme om den
        inte räcker. Boverket säger samma sak: de kallaste dagarna kan det behövas extra värme, och i norra Sverige ger en
        luftvärmepump mindre effekt eftersom vintrarna är långa och kalla.
      </p>
      <p>
        Hur kallt den klarar står i manualen. För Panasonics modeller CS-HZ25UKE och CS-HZ35UKE anges värmedrift ner till
        −25 grader ute. Andra modeller har andra gränser.
      </p>
      <p>
        Boverkets råd är därför att låta elementen sitta kvar och se värmepumpen som ett komplement. Räkna med att rum långt
        från inomhusdelen blir en till två grader kallare.
      </p>

      <h2>Rätt temperatur: låt värmepumpen ta grundvärmen</h2>
      <p>
        Det viktigaste är att värmepumpen gör så mycket av jobbet som möjligt och att elementen bara fyller i. Boverket
        rekommenderar att du ställer elementens termostater två grader lägre än värmepumpen. Då går elementen bara igång i
        rum som pumpen inte når, till exempel rum med stängd dörr.
      </p>
      <p>
        Håll innerdörrarna öppna så att den varma luften sprids. En luft-luftvärmepump fungerar bäst i hus med öppen
        planlösning och med inomhusdelen på en central plats.
      </p>
      <p>
        Panasonic anger 20–24 grader som rekommenderad temperatur för att spara energi i värmeläget. Välj den lägsta
        temperatur som känns bra. Enligt Energimyndigheten minskar energin för uppvärmning med ungefär fem procent för varje
        grad du sänker inomhus.
      </p>
      <Callout title="Räkneexempel: en grad lägre" tone="butter">
        <p>
          Antaganden: uppvärmningen drar 15 000 kWh om året och du betalar 2 kronor per kWh allt inräknat. Byt mot dina
          egna siffror. Hur mycket huset drar ser du i{" "}
          <Link href="/guider/mat-din-elforbrukning">elbolagets app eller elmätaren</Link>.
        </p>
        <ul>
          <li>Fem procent av 15 000 kWh = 750 kWh</li>
          <li>750 kWh × 2 kr = 1 500 kronor om året</li>
        </ul>
        <p>Det är en tumregel, inte ett löfte. Hur mycket det blir i ditt hus beror på huset och vädret.</p>
      </Callout>

      <h2>Välj värmeläge – inte auto</h2>
      <p>
        I autoläget väljer värmepumpen själv mellan värme och kyla. Panasonics manual beskriver att enheten då byter
        driftläge var tionde minut beroende på inställningen och rumstemperaturen. Boverket varnar för att pumpen kan
        börja kyla när det blir för varmt inne, och att du därför ska stänga av autoläget om du eldar i braskaminen. Då
        betalar du annars för att kyla bort värmen från brasan. Ställ in värmeläget på vintern.
      </p>

      <h2>Fläkten: låg hastighet ger mindre värme</h2>
      <p>
        Den lägsta fläkthastigheten är tystast, men enligt Panasonic kan den minska värmeförmågan. Öka fläkthastigheten om
        du vill ha mer värme. Autoläget för fläkten låter enheten anpassa hastigheten själv, och det är ett bra
        utgångsläge om du inte störs av ljudet.
      </p>

      <h2>Avfrostning: därför blåser den inte ibland</h2>
      <p>
        När det är kallt och fuktigt bildas frost på utomhusdelens värmeväxlare, och pumpen måste frosta av den då och då.
        Under tiden stannar fläkten inne, eller går mycket långsamt, så att det inte kommer in kall luft. På Panasonics
        HZ-modeller blinkar strömlampan under avfrostningen. Det är normalt och tar några minuter. Försök inte skynda på det –
        tillverkarna varnar för att använda andra metoder än de som de själva rekommenderar.
      </p>
      <p>
        Det du kan göra är att hålla utomhusdelen fri. Boverket skriver att fram- och baksidan inte får blockeras av löv
        eller snö, och att det inte får byggas upp mycket is under den. Når isen ända upp till underdelen kan pumpen sluta
        fungera. Bildas det ofta en ishög under utomhusdelen behöver smältvattnet ledas bort på ett bättre sätt – fråga
        installatören.
      </p>

      <h2>Rengör filtren oftare än du tror</h2>
      <p>
        Ett igensatt filter gör att pumpen jobbar hårdare för samma värme. Boverket rekommenderar att du rengör filtren ungefär
        var tredje vecka. Panasonic skriver en gång varannan vecka för de modeller vi har läst manualen för. Vissa filter
        sköljs, andra dammsugs – manualen säger vilket. Värmeväxlare och fläktar inuti enheten ska rengöras av en
        auktoriserad återförsäljare.
      </p>

      <h2>Bortrest i vinter? Använd underhållsvärmen</h2>
      <p>
        Många värmepumpar har ett läge som bara håller huset frostfritt. På Panasonics HZ-modeller går det att välja 8 eller
        15 grader, och fläkten går då automatiskt på hög hastighet. Kontrollera vilka temperaturer din modell har, och tänk
        på att element med egna termostater fortsätter att värma efter sin egen inställning.
      </p>

      <h2>Styr värmepumpen efter elpriset</h2>
      <p>
        Har värmepumpen ingen egen wifi kan du göra den smart med en IR-styrenhet som härmar fjärrkontrollen. Då kan du
        styra den från mobilen, lägga scheman och sänka värmen när ingen är hemma. Martin har haft en Sensibo Sky på sin
        luft-luftvärmepump från Panasonic i ett år, och den styrs av Tibber efter elpriset – se{" "}
        <TestLink slug="sensibo-sky" />.
      </p>
      <Products ids={["sensibo-air", "sensibo-sky", "tado-ac"]} />
      <p>
        Grunderna för att flytta förbrukning till billiga timmar finns i{" "}
        <Link href="/guider/flytta-elforbrukningen-till-billiga-timmar">flytta elförbrukningen till billigare timmar</Link>,
        och hur Tibbers styrning fungerar i <Link href="/guider/sa-fungerar-tibber">så fungerar Tibber</Link>. Vill du
        styra elementen som kompletterar värmepumpen finns tips i{" "}
        <Link href="/guider/smarta-elementtermostater">smarta elementtermostater</Link>. Vad en sänkt temperatur betyder
        i kronor kan du räkna på i <Link href="/kalkylator">kalkylatorn</Link>.
      </p>
      <p>
        Själva värmepumpen ska installeras av en certifierad installatör, och elarbetet – till exempel en ny matning till
        utomhusdelen – ska göras av ett registrerat elinstallationsföretag.
      </p>

      <h2>Checklista inför vintern</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Inställning</th>
              <th>Gör så här</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Driftläge</td>
              <td>Värme, inte auto – särskilt om du eldar i kaminen</td>
            </tr>
            <tr>
              <td>Temperatur</td>
              <td>Så lågt som känns bra. Panasonic rekommenderar 20–24 grader i värmeläget</td>
            </tr>
            <tr>
              <td>Elementen</td>
              <td>Två grader lägre än värmepumpen</td>
            </tr>
            <tr>
              <td>Innerdörrar</td>
              <td>Öppna, så att värmen sprids</td>
            </tr>
            <tr>
              <td>Filter</td>
              <td>Rengör var annan till var tredje vecka</td>
            </tr>
            <tr>
              <td>Utomhusdelen</td>
              <td>Fri från snö, löv och is</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Källor</h2>
      <ul>
        <li>
          Boverket, Energiguiden:{" "}
          <a href="https://www.boverket.se/sv/energiguiden/energirenovera-smahus/5.valja_atgarder/luftvarmepump/">
            Installation av luft-vattenvärmepump eller luft-luftvärmepump
          </a>
        </li>
        <li>
          Energimyndigheten:{" "}
          <a href="https://www.energimyndigheten.se/effektiv-energianvandning/hushall/spara-energi-enkla-tips/">
            Spara energi – enkla tips
          </a>
        </li>
        <li>
          Energimyndigheten:{" "}
          <a href="https://www.energimyndigheten.se/effektiv-energianvandning/foretag/inkop-av-produkter/produkter-med-energimarkning/energimarkning-av-luftluftvarmepumpar/">
            Energimärkning av luftluftvärmepumpar
          </a>
        </li>
        <li>
          Energimyndigheten:{" "}
          <a href="https://www.energimyndigheten.se/effektiv-energianvandning/hushall/nar-du-ska-kopa-nya-produkter/luftkonditionering/">
            Luftkonditionering (om installation av luftluftvärmepump)
          </a>
        </li>
        <li>
          Panasonic:{" "}
          <a href="https://global-uploads.webflow.com/5e4e624f45b75df139132ea5/5e4e624f45b75d871513317d_HZ.pdf">
            Bruksanvisning för CS-HZ25UKE och CS-HZ35UKE (svensk del)
          </a>
        </li>
      </ul>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Ska luft-luftvärmepumpen stå på auto på vintern?",
            a: "Nej, välj värmeläget. I autoläget kan pumpen börja kyla när det blir varmt inne, till exempel när du eldar i kaminen. Boverket rekommenderar att du stänger av autoläget då.",
          },
          {
            q: "Varför blåser värmepumpen kall luft eller inte alls ibland?",
            a: "Den frostar troligen av utomhusdelen. Fläkten inne stannar eller går långsamt i några minuter för att det inte ska komma in kall luft. Det är normalt.",
          },
          {
            q: "Hur ofta ska jag rengöra filtret?",
            a: "Boverket rekommenderar ungefär var tredje vecka, och Panasonic skriver varannan vecka för vissa modeller. Följ manualen för din modell, som också säger om filtret ska sköljas eller dammsugas.",
          },
        ]}
      />
    </ArticlePage>
  );
}
