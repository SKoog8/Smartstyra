import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { Products } from "@/components/ProductCard";
import TestLink from "@/components/TestLink";
import TibberInvite from "@/components/TibberInvite";
import { guide } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

const meta = guide("tibber-pulse-i-home-assistant");
const path = `/guider/${meta.slug}`;

const codeClass = "not-prose my-5 overflow-x-auto rounded-xl bg-ink/5 p-4 text-sm leading-relaxed";

const yamlEffekt = `automation:
  - alias: "Pausa elpatronen när huset drar mycket"
    triggers:
      - trigger: numeric_state
        entity_id: sensor.tibber_pulse_villan_power
        above: 9000
        for: "00:01:00"
    actions:
      - action: switch.turn_off
        target:
          entity_id: switch.elpatron

  - alias: "Starta elpatronen igen när effekten sjunkit"
    triggers:
      - trigger: numeric_state
        entity_id: sensor.tibber_pulse_villan_power
        below: 6000
        for: "00:05:00"
    actions:
      - action: switch.turn_on
        target:
          entity_id: switch.elpatron`;

const yamlPris = `template:
  - binary_sensor:
      - name: "Tibberpris under snittet"
        state: >
          {{ states('sensor.villan_electricity_price') | float(0)
             < state_attr('sensor.villan_electricity_price', 'avg_price') | float(0) }}`;

export const metadata = pageMetadata(meta.seoTitle ?? meta.title, meta.description, path, true, meta);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        <strong>
          Tibber-integrationen i Home Assistant är en inbyggd integration som hämtar ditt elpris och, om du har en Tibber
          Pulse, husets förbrukning i realtid från ditt Tibber-konto.
        </strong>{" "}
        I Tibber-appen ser du förbrukningen, men i Home Assistant kan du använda den: pausa en elpatron när huset drar
        mycket, se grundlasten mitt i natten och lägga in förbrukningen i energipanelen. Den här guiden visar hur du
        kopplar ihop dem och bygger dina första automationer.
      </p>

      <h2>Vad du behöver</h2>
      <ul>
        <li>En Tibber Pulse som sitter i elmätaren och är kopplad till Tibber-appen.</li>
        <li>En Home Assistant-installation med internetuppkoppling.</li>
        <li>Ett Tibber-konto, samma som du loggar in med i appen.</li>
      </ul>
      <p>
        Har du inte satt upp Pulse än: HAN-porten i mätaren måste vara aktiverad av nätbolaget, och du behöver välja
        rätt variant för din mätare. Det går vi igenom i guiden om <Link href="/guider/tibber-pulse">Tibber Pulse</Link>.
      </p>
      <p>
        Integrationen skapar realtidssensorerna så fort en Pulse är parad med ditt hem. Elprissensorn och sensorerna för
        månadens kostnad och förbrukning kräver däremot ett aktivt elavtal hos Tibber.
      </p>
      <TestLink slug="home-assistant" />
      <Products ids={["tibber-pulse-p1", "home-assistant-green"]} />

      <h2>Så lägger du till Tibber i Home Assistant</h2>
      <p>
        I aktuella versioner av Home Assistant loggar du in med ditt Tibber-konto via Tibbers Data API. Det kräver att du
        först skapar en egen klient hos Tibber:
      </p>
      <ol>
        <li>
          Gå till Tibbers utvecklarportal på <code>data-api.tibber.com/clients/manage</code> och logga in.
        </li>
        <li>
          Skapa en ny klient och lägg till adressen <code>https://my.home-assistant.io/redirect/oauth</code> som
          redirect-URI. Spara.
        </li>
        <li>Kopiera klientens id (client ID) och hemlighet (client secret).</li>
        <li>
          I Home Assistant: öppna sidan för applikationsuppgifter (Application credentials) under Enheter och tjänster,
          lägg till Tibber och klistra in id och hemlighet.
        </li>
        <li>
          Gå till Inställningar, Enheter och tjänster, välj Lägg till integration, sök på Tibber och logga in med ditt
          Tibber-konto.
        </li>
      </ol>
      <p>
        Äldre guider på nätet beskriver i stället en personlig åtkomsttoken från <code>developer.tibber.com</code>. Det
        var så det fungerade tidigare. Följer du de stegen och inloggningen inte fungerar, kontrollera vad Home
        Assistants dokumentation för Tibber säger för din version.
      </p>

      <h2>Vilka sensorer du får</h2>
      <p>
        Med Pulse får du en enhet som heter Tibber Pulse följt av namnet på ditt hem, med bland annat de här sensorerna:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Sensor</th>
              <th>Visar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Power</td>
              <td>Effekten huset drar just nu, i watt</td>
            </tr>
            <tr>
              <td>Accumulated consumption</td>
              <td>Förbrukade kWh sedan midnatt</td>
            </tr>
            <tr>
              <td>Accumulated consumption current hour</td>
              <td>Förbrukade kWh sedan senaste timskiftet</td>
            </tr>
            <tr>
              <td>Min power och Max power</td>
              <td>Lägsta och högsta effekt sedan midnatt</td>
            </tr>
            <tr>
              <td>Current L1, L2, L3</td>
              <td>Strömmen per fas, i ampere</td>
            </tr>
            <tr>
              <td>Power production</td>
              <td>Effekten du skickar ut på nätet, om du har solceller</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Vilka värden som finns beror på vad din elmätare skickar ut, så alla sensorer dyker inte upp hos alla.
        Integrationen skapar också en elprissensor med dagens lägsta, högsta och genomsnittliga pris som attribut, och
        statistik med förbrukning och kostnad per timme som du kan välja i energipanelen.
      </p>
      <p>
        Exemplen nedan använder namn som <code>sensor.tibber_pulse_villan_power</code>, där &quot;villan&quot; är namnet
        på hemmet i Tibber-appen. Kolla det exakta namnet under entiteterna och byt ut det i koden.
      </p>

      <h2>Hitta grundlasten</h2>
      <p>
        Sensorn Min power visar den lägsta effekten sedan midnatt. Titta på den på morgonen, när natten har gått utan
        att någon har lagat mat eller duschat. Det är ungefär husets grundlast – det som drar dygnet runt. Hur du sedan
        letar upp vad som ligger bakom går vi igenom i guiden om att{" "}
        <Link href="/guider/mat-din-elforbrukning">mäta elförbrukningen</Link>.
      </p>
      <Callout title="Räkneexempel" tone="butter">
        <p>
          Antag att Min power visar 400 watt en vanlig natt och att du betalar 2 kr/kWh allt inräknat. Då blir
          grundlasten 0,4 kW × 8 760 timmar = 3 504 kWh om året, eller ungefär 7 000 kr. Hittar du en apparat som står
          och drar 50 watt i onödan är det 0,05 × 8 760 = 438 kWh, runt 880 kr om året med samma pris. Siffrorna är
          bara exempel – använd ditt eget värde och ditt eget elpris. En del av grundlasten, som kyl, frys och
          ventilation, ska förstås gå.
        </p>
      </Callout>

      <h2>Automation: pausa elpatronen när huset drar mycket</h2>
      <p>
        Med realtidseffekten kan du låta en stor förbrukare vänta när annat i huset drar mycket. Exemplet stänger av en
        elpatron när effekten har legat över 9 000 watt i en minut, och slår på den igen när den har legat under 6 000
        watt i fem minuter. Glappet mellan gränserna gör att den inte slår av och på hela tiden. Gränserna är bara
        exempel: utgå från din huvudsäkring och vad som drar mest hos dig.
      </p>
      <pre className={codeClass}>
        <code>{yamlEffekt}</code>
      </pre>
      <p>
        Det här kan hjälpa om du vill hålla nere effekttopparna, men det ersätter inte en riktig lastbalansering. Varför
        effekten spelar roll, och vad som gäller för effektavgiften nu, förklarar vi i guiden om{" "}
        <Link href="/guider/effektavgift">effektavgift</Link>.
      </p>

      <h2>Automation: följ Tibbers elpris</h2>
      <p>
        Elprissensorn från Tibber visar priset per kWh inklusive energiskatt, ursprungsgarantier och moms. Nätbolagets
        överföringsavgift och Tibbers månadsavgift ingår inte. Integrationen uppdaterar priset varje kvart. Precis
        som med Nord Pool-sensorn kan du göra en binär sensor som säger om priset just nu ligger under dygnets snitt:
      </p>
      <pre className={codeClass}>
        <code>{yamlPris}</code>
      </pre>
      <p>
        Den sensorn kan styra en beredare eller elpatron på samma sätt som i guiden om{" "}
        <Link href="/guider/nord-pool-elpris-i-home-assistant">Nord Pool-elpriset i Home Assistant</Link>. Integrationen
        har också åtgärden <code>tibber.get_prices</code>, som hämtar priserna för ett datumintervall om du vill räkna fram
        de billigaste perioderna själv. Vill du räkna på vad flyttad förbrukning kan ge, testa{" "}
        <Link href="/kalkylator">kalkylatorn</Link>.
      </p>

      <Callout title="Allt går via Tibbers moln" tone="mint">
        <p>
          Pulse skickar sina mätvärden till Tibber, och Home Assistant hämtar dem därifrån. Går internet eller Tibbers
          tjänst ner slutar sensorerna att uppdateras, och en automation kan fastna i fel läge. Bygg in en reserv, till
          exempel att elpatronen alltid får gå en stund på natten. Lita aldrig på automationen för att skydda
          huvudsäkringen. Reläer och kontaktorer i elcentralen ska alltid installeras av ett registrerat
          elinstallationsföretag.
        </p>
      </Callout>

      <TibberInvite />

      <h2>Källor</h2>
      <ul>
        <li>
          Home Assistant: <a href="https://www.home-assistant.io/integrations/tibber/">Tibber-integrationen</a>
        </li>
        <li>
          Home Assistant:{" "}
          <a href="https://github.com/home-assistant/core/tree/dev/homeassistant/components/tibber">
            integrationens källkod på GitHub
          </a>
        </li>
        <li>
          Tibber: <a href="https://developer.tibber.com/docs/reference">API-referens (pris och realtidsmätning)</a>
        </li>
        <li>
          Home Assistant: <a href="https://www.home-assistant.io/docs/energy/">energipanelen</a>
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
            q: "Behöver jag elavtal hos Tibber för att se Pulse i Home Assistant?",
            a: "Realtidssensorerna skapas när en Pulse är parad med ditt hem. Elprissensorn och sensorerna för månadens kostnad kräver däremot ett aktivt elavtal hos Tibber.",
          },
          {
            q: "Ingår nätavgiften i Tibbers elpris i Home Assistant?",
            a: "Nej. Priset innehåller spotpris, energiskatt, ursprungsgarantier och moms. Nätbolagets överföringsavgift och Tibbers månadsavgift ingår inte.",
          },
          {
            q: "Fungerar det om internet går ner?",
            a: "Nej. Pulse skickar data via Tibbers moln, så utan uppkoppling slutar sensorerna att uppdateras. Bygg därför in en reserv i automationerna.",
          },
        ]}
      />
    </ArticlePage>
  );
}
