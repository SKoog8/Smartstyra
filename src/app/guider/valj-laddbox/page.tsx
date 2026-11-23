import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { guide } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

const meta = guide("valj-laddbox");
const path = `/guider/${meta.slug}`;

export const metadata = pageMetadata(meta.seoTitle ?? meta.title, meta.description, path, true, meta);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        <strong>
          En laddbox är en fast installerad laddningspunkt för elbilen, som kommunicerar med bilen och kan styras
          från en app.
        </strong>{" "}
        Den är säkrare än ett vanligt vägguttag, men för elräkningen är det funktionerna som avgör: om boxen kan
        flytta laddningen till billiga kvartar och om den kan hålla huset under huvudsäkringen. Här är det du ska
        titta på innan du beställer.
      </p>

      <h2>Varför inte bara ladda i vägguttaget?</h2>
      <p>
        Elsäkerhetsverket rekommenderar att du inte laddar i vanliga vägguttag. De är inte gjorda för höga laster
        under många timmar, och glapp i uttag, kopplingsdosor eller centralen kan ge varmgång och
        brand. Uttag i garage och carport delar dessutom ofta säkring med andra uttag. En laddbox installeras på en
        egen grupp och är byggd för att dra hög ström länge.
      </p>

      <h2>Hur mycket effekt behöver du?</h2>
      <p>
        Det är lätt att tro att mer är bättre, men Elsäkerhetsverket skriver att höga effekter ofta är onödiga om
        bilen kan ladda över natten. Tre saker sätter gränsen: hur långt du kör, hur mycket bilen själv kan ta emot
        med växelström och vad din elanläggning klarar. Bilens maxeffekt för växelström står i
        instruktionsboken eller specifikationen – laddboxen kan aldrig ladda snabbare än så.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Anslutning</th>
              <th>Ungefärlig effekt</th>
              <th>Energi på 8 timmar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1-fas, 16 A</td>
              <td>3,7 kW</td>
              <td>ca 29 kWh</td>
            </tr>
            <tr>
              <td>3-fas, 16 A</td>
              <td>11 kW</td>
              <td>ca 88 kWh</td>
            </tr>
            <tr>
              <td>3-fas, 32 A</td>
              <td>22 kW</td>
              <td>ca 177 kWh</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Effekten är räknad med 230 volt per fas. I praktiken blir den lite lägre, och bilen kan begränsa den.</p>

      <Callout title="Räkneexempel: räcker en natt?" tone="butter">
        <p>
          Antag att du kör 1 500 mil om året och att bilen drar 1,8 kWh per mil. Det blir 2 700 kWh om året, eller
          drygt 7 kWh per dygn i snitt. Med 11 kW tar det under en timme att ladda tillbaka, och även med 3,7 kW
          räcker två timmar. Byt ut siffrorna mot din egen körsträcka och bilens förbrukning.
        </p>
      </Callout>
      <p>
        Att laddningen bara behöver några timmar är just det som gör smart laddning möjlig: boxen kan välja de
        billigaste kvartarna under natten i stället för att börja direkt när du kommer hem.
      </p>

      <h2>Lastbalansering: ladda utan att säkringen går</h2>
      <p>
        <strong>Lastbalansering</strong> betyder att laddboxen mäter hur mycket resten av huset drar och sänker
        laddeffekten när det behövs. Elsäkerhetsverket nämner det som lösningen när övrig last annars skulle kunna
        lösa ut huvudsäkringen. Det kräver en mätare i elcentralen eller vid elmätaren, som oftast köps som ett
        tillbehör:
      </p>
      <ul>
        <li>
          <strong>Easee Equalizer</strong> ansluts till elmätaren och fördelar den tillgängliga effekten mellan
          laddboxen och huset i realtid. Saknas en smart mätare finns Equalizer Amp, som mäter med egen utrustning
          i elcentralen.
        </li>
        <li>
          <strong>Zaptec Sense</strong> läser av husets förbrukning, i Sverige via elmätarens P1-port, och höjer
          eller sänker laddeffekten därefter.
        </li>
      </ul>
      <p>
        Båda tillverkarna skriver att mätaren också kan användas för att ladda bilen med solelöverskott. Har du
        solceller är det ett skäl att välja lastbalansering från början, se{" "}
        <Link href="/guider/solceller-och-batteri">guiden om solceller och batteri</Link>. Lastbalansering kan också
        göra det möjligt att ladda med hög effekt utan att byta till en större huvudsäkring. Tar ditt nätbolag betalt
        efter säkringsstorlek kostar en större säkring mer varje månad – kontrollera i nätbolagets prislista. Vad
        som räcker för ditt hus får elinstallatören räkna på.
      </p>

      <h2>Appen och smart laddning</h2>
      <p>
        Laddboxens egen app visar ofta laddhistorik och styr laddningen. Zaptecs app visar till exempel historik och
        låter dig låsa kabeln, och Easee skriver att appen kan utnyttja perioder med låga elpriser. För att
        tjäna på billiga timmar behöver du ett elavtal med{" "}
        <Link href="/guider/kvartspris">kvartspris eller timpris</Link> – med månadspris spelar det ingen roll när
        du laddar.
      </p>
      <p>
        Det viktigaste är ofta inte tillverkarens app, utan vad boxen kan kopplas till. Har du Tibber, kontrollera
        att laddboxen finns bland Tibbers Power-ups. Easee och Zaptec gör det, och då kan Tibber sköta den smarta
        laddningen. Med en realtidsmätare som Tibber Pulse kan Tibber också sänka laddeffekten när huset drar mycket. <Link href="/guider/smart-laddning-elbil-tibber">Så fungerar smart laddning med Tibber</Link>.
        En laddbox som stöds kan också delta i{" "}
        <Link href="/guider/tibber-grid-rewards">Grid Rewards</Link>.
      </p>
      <p>
        Fråga också efter <strong>OCPP</strong>, ett öppet protokoll som låter andra system än tillverkarens moln
        styra laddboxen. Zaptec skriver till exempel att Go och Go 2 kan köras över OCPP 1.6J med lastbalansering
        via Sense. Det gör dig mindre beroende av ett enda företag om du byter elavtal eller styrsystem senare.
      </p>

      <h2>Fast kabel eller uttag?</h2>
      <p>
        Typ 2 är i dag det vanligaste kontaktdonet, enligt Elsäkerhetsverket. De påpekar också att en box med Typ 2-uttag i stället för fast kabel gör att du kan använda olika laddkablar, till exempel om
        någon i familjen har en bil med Typ 1. En fast kabel är å andra sidan alltid på plats.
      </p>

      <h2>Installation och grönt avdrag</h2>
      <p>
        Laddboxen ska installeras av ett registrerat elinstallationsföretag, och enligt Elsäkerhetsverket ska
        företaget vara registrerat för verksamhetstypen ”Övriga anläggningar för användning av el”. Det kan du
        kontrollera i deras tjänst Kolla elföretaget. Laddningspunkten ska ha en egen jordfelsbrytare och inte
        kopplas in under husets befintliga. Bor du på landet med luftledningar kan ett överspänningsskydd vara
        värt att fråga om.
      </p>
      <p>
        Skatteverket ger skattereduktion för grön teknik med 50 procent av arbete och material för en
        laddningspunkt, högst 50 000 kronor per person och år. Avdraget görs direkt på fakturan. Två saker att
        tänka på:
      </p>
      <ul>
        <li>Köper du laddboxen själv någon annanstans gäller avdraget bara arbetet.</li>
        <li>
          En ny eller utökad elcentral ger inte avdrag. Det som normalt räknas är laddboxen, fästet, kabeln till
          centralen och laddkabeln.
        </li>
      </ul>
      <p>
        Vill du se vad smart laddning kan betyda för just din elräkning kan du prova{" "}
        <Link href="/kalkylator">kalkylatorn</Link>.
      </p>

      <h2>Checklista inför köpet</h2>
      <ul>
        <li>Rätt effekt för din körning och din bil – inte nödvändigtvis den högsta.</li>
        <li>Lastbalansering, särskilt om du har elvärme, värmepump eller vill ladda med solel.</li>
        <li>Stöd för den styrning du vill använda, till exempel Tibber, och gärna OCPP.</li>
        <li>Fast kabel eller Typ 2-uttag.</li>
        <li>Installation av registrerat elföretag, med offert där grönt avdrag är avdraget.</li>
      </ul>

      <h2>Källor</h2>
      <ul>
        <li>
          Elsäkerhetsverket:{" "}
          <a href="https://elsakerhetsverket.se/privatpersoner/din-elanlaggning/bygga-och-renovera/installation-av-elbilsladdare">Installation av elbilsladdare</a>,{" "}
          <a href="https://elsakerhetsverket.se/privatpersoner/din-elanlaggning/bygga-och-renovera/installation-av-elbilsladdare/planera-din-laddningspunkt">Planera din laddningspunkt</a>,{" "}
          <a href="https://elsakerhetsverket.se/privatpersoner/din-elanlaggning/bygga-och-renovera/installation-av-elbilsladdare/installera-din-laddningspunkt">Installera din laddningspunkt</a> och{" "}
          <a href="https://elsakerhetsverket.se/privatpersoner/din-elanlaggning/bygga-och-renovera/installation-av-elbilsladdare/sakerhetsrisker-vid-laddning-av-elbilar">Säkerhetsrisker vid laddning av elbilar</a>
        </li>
        <li>
          Skatteverket: <a href="https://www.skatteverket.se/privat/fastigheterochbostad/gronteknik.4.676f4884175c97df4192860.html">Grön teknik</a>
        </li>
        <li>
          Easee: <a href="https://easee.com/sv/produkter/tillbehor/equalizer/">Equalizer</a> och{" "}
          <a href="https://easee.com/sv/produkter/tillbehor/equalizer/equalizer-amp/">Equalizer Amp</a>
        </li>
        <li>
          Zaptec: <a href="https://www.zaptec.com/charging-solutions/zaptec-sense">Zaptec Sense</a> och{" "}
          <a href="https://help.zaptec.com/integrations/zaptec-load-balancing-with-zaptec-sense-over-ocpp-1-6j-how-it-works-and-how-to-get-started?lang=sv">Lastbalansering med Zaptec Sense via OCPP 1.6J</a>
        </li>
      </ul>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Behöver jag en laddbox på 22 kW?",
            a: "Sällan. Kan bilen ladda över natten räcker 11 kW långt för de flesta körsträckor. Bilen kan dessutom ha en lägre gräns för växelström – kolla specifikationen.",
          },
          {
            q: "Får jag installera laddboxen själv?",
            a: "Nej. Installationen ska göras av ett registrerat elinstallationsföretag. Du kan kontrollera företaget i Elsäkerhetsverkets tjänst Kolla elföretaget.",
          },
          {
            q: "Hur mycket får jag i grönt avdrag för en laddbox?",
            a: "50 procent av kostnaden för arbete och material, högst 50 000 kronor per person och år. Köper du boxen själv gäller avdraget bara arbetet.",
          },
        ]}
      />
    </ArticlePage>
  );
}
