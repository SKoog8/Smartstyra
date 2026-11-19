import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { Products } from "@/components/ProductCard";
import TestLink from "@/components/TestLink";
import { guide } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

const meta = guide("nord-pool-elpris-i-home-assistant");
const path = `/guider/${meta.slug}`;

const codeClass = "not-prose my-5 overflow-x-auto rounded-xl bg-ink/5 p-4 text-sm leading-relaxed";

const yamlTotalpris = `template:
  - sensor:
      - name: "Elpris totalt"
        unit_of_measurement: "SEK/kWh"
        state_class: measurement
        state: >
          {% set spot = states('sensor.nord_pool_se3_current_price') | float(0) %}
          {% set tillagg = states('input_number.elpris_tillagg') | float(0) %}
          {{ ((spot + tillagg) * 1.25) | round(2) }}`;

const yamlBilligt = `template:
  - binary_sensor:
      - name: "Billig el just nu"
        state: >
          {{ states('sensor.nord_pool_se3_current_price') | float(0)
             < states('sensor.nord_pool_se3_daily_average') | float(0) }}`;

const yamlAutomation = `automation:
  - alias: "Elpatronen får gå när elen är billig"
    triggers:
      - trigger: state
        entity_id: binary_sensor.billig_el_just_nu
        to: ["on", "off"]
    actions:
      - action: >
          {{ 'switch.turn_on' if trigger.to_state.state == 'on'
             else 'switch.turn_off' }}
        target:
          entity_id: switch.elpatron`;

export const metadata = pageMetadata(meta.seoTitle ?? meta.title, meta.description, path, true, meta);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        <strong>
          Nord Pool-integrationen i Home Assistant är en inbyggd integration som hämtar spotpriset på el för ditt
          elområde från elbörsen Nord Pool, så att du kan visa priset och låta automationer styra efter det.
        </strong>{" "}
        Har du ett rörligt elavtal som följer spotpriset är det just det priset som avgör vad varje kilowattimme kostar.
        När Home Assistant vet priset kan beredaren, elpatronen eller laddboxen vänta in de billiga perioderna utan att
        du behöver titta i en app. Den här guiden visar hur du lägger in priset och bygger dina första automationer.
      </p>

      <h2>Vad du behöver</h2>
      <p>
        Du behöver en Home Assistant-installation och något som Home Assistant kan slå av och på, till exempel ett
        smart relä eller uttag. Integrationen är inbyggd i Home Assistant sedan version 2024.12, så har du en någorlunda
        aktuell version finns den redan. Den hämtar priserna över internet från Nord Pools öppna data, och
        du behöver inget konto hos Nord Pool.
      </p>
      <p>
        Martin kör Home Assistant på en Home Assistant Green hemma. Hur han kom igång och vad han styr beskriver han i
        testet <TestLink slug="home-assistant" />.
      </p>
      <Products ids={["home-assistant-green"]} />

      <h2>Så lägger du till Nord Pool i Home Assistant</h2>
      <ol>
        <li>Gå till Inställningar, Enheter och tjänster, och välj Lägg till integration.</li>
        <li>Sök på Nord Pool och välj den.</li>
        <li>Välj ditt elområde, SE1, SE2, SE3 eller SE4. Du kan välja flera om du vill jämföra.</li>
        <li>Välj valuta SEK. Nord Pool räknar i euro, och integrationen räknar om till kronor med växelkursen.</li>
      </ol>
      <p>
        Vet du inte vilket elområde du bor i står det på elräkningen. Det går bara att lägga till integrationen en
        gång, så vill du byta elområde senare gör du det med alternativet för att konfigurera om.
      </p>

      <h2>Vilka sensorer du får</h2>
      <p>
        Integrationen skapar sensorer för det aktuella priset, föregående och nästa pris, dagens lägsta och högsta
        pris med start- och sluttid, och dygnets medelpris. Det finns också en sensor som visar om morgondagens priser
        har kommit, och sensorer för priset under dagtid (8–20) och natt och kväll. En del av sensorerna, bland annat
        de för dag och natt, är avstängda från början. Hittar du inte en sensor: öppna integrationen, gå till
        entiteterna och aktivera den.
      </p>
      <p>
        Elpriset sätts per kvart sedan oktober 2025, och integrationen följer det: det aktuella priset byts varje
        kvart. Hur kvartspriset fungerar och vad det betyder för dig förklarar vi i guiden om{" "}
        <Link href="/guider/kvartspris">kvartspris</Link>.
      </p>
      <p>
        Exemplen nedan använder namn som <code>sensor.nord_pool_se3_current_price</code>. Dina sensorer kan heta lite
        annorlunda, beroende på elområde och på vilket språk Home Assistant hade när du lade till integrationen. Kolla
        det exakta namnet under entiteterna och byt ut det i koden.
      </p>

      <h2>Spotpriset är inte det du betalar</h2>
      <p>
        Integrationen visar bara själva elpriset från börsen, utan moms och utan andra kostnader. På elräkningen
        tillkommer elhandlarens påslag, energiskatt, nätbolagets överföringsavgift och 25 procent moms på alltihop.
        Vill du se ett pris som ligger närmare verkligheten kan du skapa en nummerhjälpare,{" "}
        <code>input_number.elpris_tillagg</code>, och fylla i påslag, energiskatt och överföringsavgift per kWh från din
        egen elräkning. Sedan gör du en mallsensor som lägger ihop allt och lägger på moms:
      </p>
      <pre className={codeClass}>
        <code>{yamlTotalpris}</code>
      </pre>
      <Callout title="Räkneexempel" tone="butter">
        <p>
          Antag att spotpriset just nu är 0,80 kr/kWh och att påslag, energiskatt och överföringsavgift enligt din
          elräkning blir 0,90 kr/kWh tillsammans, exklusive moms. Då blir priset (0,80 + 0,90) × 1,25 = 2,13 kr/kWh.
          Siffrorna är bara exempel – använd dina egna. Mallsensorn kan du sedan välja i energipanelen, under alternativet
          att använda en entitet med aktuellt pris, så att Home Assistant visar vad förbrukningen kostar.
        </p>
      </Callout>
      <p>
        För automationerna räcker oftast spotpriset. Påslag och energiskatt är desamma oavsett tid på dygnet, så det är
        spotpriset som avgör vilka perioder som är billigast. Har ditt nätbolag olika överföringsavgift dag och natt
        behöver du räkna med den också – kontrollera det i nätbolagets prislista.
      </p>

      <h2>Automation: kör när priset är under dygnets snitt</h2>
      <p>
        Ett enkelt och robust sätt att börja är att låta en apparat gå när priset ligger under dagens medelpris. Gör
        först en binär mallsensor som säger om elen är billig just nu. Den behöver sensorn för dygnets medelpris, så
        aktivera den om den är avstängd.
      </p>
      <pre className={codeClass}>
        <code>{yamlBilligt}</code>
      </pre>
      <p>
        Sedan kan vilken automation som helst använda sensorn. Här slår den på en elpatron när elen blir billig och av
        när den blir dyr igen:
      </p>
      <pre className={codeClass}>
        <code>{yamlAutomation}</code>
      </pre>
      <p>
        Samma sensor kan styra en varmvattenberedare via ett relä och en kontaktor, se guiden om att{" "}
        <Link href="/guider/styr-varmvattenberedaren-med-shelly">styra varmvattenberedaren med Shelly</Link>. Tänk på att
        beredaren ändå måste få värma tillräckligt länge varje dygn för att hålla minst 60 grader. Ett tak på pris är
        enklare, till exempel att något bara får gå under 0,50 kr/kWh, men då kan det bli dagar då det aldrig slår på.
      </p>

      <h2>Morgondagens priser och de billigaste timmarna</h2>
      <p>
        Integrationen har också två åtgärder, <code>nordpool.get_prices_for_date</code> och{" "}
        <code>nordpool.get_price_indices_for_date</code>, som hämtar alla priser för ett visst datum. Den andra kan ge
        priset per kvart, halvtimme eller timme. Med dem kan du till exempel räkna ut morgondagens billigaste timme, och
        Home Assistants dokumentation har ett färdigt exempel på just det. Observera att åtgärderna ger priset i kronor
        per MWh, så dela med 1 000 för att få kronor per kWh. Morgondagens priser finns först när sensorn för
        morgondagens pris visar att de har kommit.
      </p>
      <p>
        Vill du flytta mer än en apparat är det värt att tänka igenom vad som faktiskt går att flytta. Guiden om att{" "}
        <Link href="/guider/flytta-elforbrukningen-till-billiga-timmar">flytta elförbrukningen till billigare timmar</Link>{" "}
        går igenom det, och i <Link href="/kalkylator">kalkylatorn</Link> kan du räkna på vad det kan ge.
      </p>

      <Callout title="Om internet går ner" tone="mint">
        <p>
          Integrationen hämtar priserna från Nord Pool över internet. Utan uppkoppling slutar priserna att uppdateras,
          och då kan en automation fastna i fel läge. Bygg in en reserv, till exempel att beredaren alltid får värma
          ett par timmar på natten oavsett pris. Elinstallationer som reläer och kontaktorer i elcentralen ska alltid
          göras av ett registrerat elinstallationsföretag.
        </p>
      </Callout>

      <h2>Källor</h2>
      <ul>
        <li>
          Home Assistant: <a href="https://www.home-assistant.io/integrations/nordpool/">Nord Pool-integrationen</a>
        </li>
        <li>
          Home Assistant:{" "}
          <a href="https://github.com/home-assistant/core/tree/dev/homeassistant/components/nordpool">
            integrationens källkod på GitHub
          </a>
        </li>
        <li>
          Home Assistant: <a href="https://www.home-assistant.io/integrations/template/">mallsensorer (template)</a>
        </li>
        <li>
          Nord Pool:{" "}
          <a href="https://www.nordpoolgroup.com/en/trading/transition-to-15-minute-market-time-unit-mtu/">
            övergången till 15-minuterspriser
          </a>
        </li>
        <li>
          Elsäkerhetsverket:{" "}
          <a href="https://elsakerhetsverket.se/privatpersoner/anlita-ett-elinstallationsforetag">
            Anlita ett elinstallationsföretag
          </a>
        </li>
      </ul>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Ingår moms i priset från Nord Pool-integrationen?",
            a: "Nej. Integrationen visar bara spotpriset från börsen. Moms, energiskatt, elhandlarens påslag och nätavgiften tillkommer. Lägg på dem med en mallsensor om du vill se totalpriset.",
          },
          {
            q: "Behöver jag HACS för att få in elpriset?",
            a: "Nej. Nord Pool-integrationen är inbyggd i Home Assistant sedan version 2024.12 och läggs till under Enheter och tjänster.",
          },
          {
            q: "Visar integrationen pris per kvart eller per timme?",
            a: "Per kvart, eftersom elpriset sätts per kvart sedan oktober 2025. Åtgärden för prisindex kan också ge snitt per halvtimme eller timme.",
          },
        ]}
      />
    </ArticlePage>
  );
}
