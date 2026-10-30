import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { guide } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

const meta = guide("controlmyspa-spabad");
const path = `/guider/${meta.slug}`;

export const metadata = pageMetadata(meta.title, meta.description, path, true);

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        Ett spabad ute håller 37–38 grader i vatten som ofta är kallare än luften runt omkring. På vintern blir det
        lätt flera tusen kWh om året – i nivå med en elbil. Samtidigt är tusen liter varmt vatten ett utmärkt
        värmelager. Den som styr när värmaren får gå kan sänka kostnaden rejält.
      </p>

      <h2>Vad är ControlMySpa?</h2>
      <p>
        ControlMySpa är Balboas app och molntjänst för spabad. Balboa gör styrsystemen i många av de spabad som säljs i
        Sverige, även under andra varumärken. Med en wifi-modul kopplad till styrsystemet kan du styra badet från mobilen:
      </p>
      <ul>
        <li>Ställa in och ändra temperaturen.</li>
        <li>Ändra filtercyklerna – när och hur länge vattnet cirkuleras och renas.</li>
        <li>Slå av och på pumpar, blåsare och belysning.</li>
        <li>Se badets status och få larm.</li>
      </ul>
      <p>
        ControlMySpa fungerar med Balboas BP-styrsystem. Du behöver också badets CMS-kod, en kod på åtta tecken som
        följer med badet eller modulen. Har du ett äldre Balboa-system finns en annan wifi-modul och appen Balboa
        Worldwide App – kontrollera vilket du har innan du köper något.
      </p>

      <h2>Knepet: värmeläget Rest</h2>
      <p>Balboas styrsystem har två värmelägen:</p>
      <ul>
        <li>
          <strong>Ready</strong> – värmaren går så fort temperaturen sjunker. Badet är alltid varmt, men värmen går när
          den behövs, oavsett elpris.
        </li>
        <li>
          <strong>Rest</strong> – värmaren går bara under filtercyklerna. Lägger du filtercyklerna på natten värms
          vattnet då, när elen oftast är billig.
        </li>
      </ul>
      <p>
        Kombinationen Rest och filtercykler på natten är alltså ett enkelt sätt att flytta uppvärmningen till billiga
        timmar – utan något extra. Prova dig fram så att badet ändå hinner bli varmt till när ni vill bada.
      </p>
      <Callout title="Kontrollera din modell" tone="butter">
        <p>
          Exakt hur värmelägen och filtercykler fungerar kan skilja mellan styrsystem och tillverkare. Läs manualen
          till ditt bad eller fråga återförsäljaren innan du ändrar inställningarna.
        </p>
      </Callout>

      <h2>Styrning efter elpriset</h2>
      <p>
        ControlMySpa har ingen inbyggd styrning efter elpriset. Vill du att badet automatiskt väljer de billigaste
        timmarna finns några vägar:
      </p>
      <ul>
        <li>
          <strong>Homey</strong> har en app för Balboa-bad som kan läsa status och ändra temperatur och värmeläge. Med
          ett flöde kan du höja temperaturen när elen är billig och sänka när den är dyr.
        </li>
        <li>
          <strong>Home Assistant</strong> har integrationer för Balboas wifi-moduler. Stödet skiljer sig mellan
          modulerna, så kontrollera vilken du har.
        </li>
        <li>
          <strong>Spärra värmaren</strong> med ett relä som en elinstallatör kopplar in. Det kräver att badets
          styrsystem har en ingång för det – fråga återförsäljaren först.
        </li>
      </ul>

      <h2>Det som sparar mest</h2>
      <p>Innan du automatiserar något, se över grunderna:</p>
      <ol>
        <li>
          <strong>Locket.</strong> Ett tätt, välisolerat lock som alltid ligger på gör störst skillnad. Byt det om det är
          vattenskadat eller tungt – då isolerar det dåligt.
        </li>
        <li>
          <strong>Temperaturen.</strong> Sänk några grader de veckor ni inte badar, men töm inte badet och låt det inte
          frysa.
        </li>
        <li>
          <strong>Mät.</strong> Spabadet är fast anslutet, så förbrukningen syns bäst med en energimätare i elcentralen
          eller via elmätarens HAN-port. <Link href="/guider/mat-din-elforbrukning">Så mäter du</Link>.
        </li>
      </ol>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Lönar det sig att stänga av spabadet mellan baden?",
            a: "Sällan. Det tar lång tid och mycket energi att värma upp kallt vatten igen, och på vintern riskerar badet att frysa. Sänk hellre några grader och värm på billiga timmar.",
          },
          {
            q: "Fungerar ControlMySpa med alla spabad?",
            a: "Nej, bara med Balboas BP-styrsystem. Kontrollera styrsystemet i badets manual eller på styrboxen.",
          },
          {
            q: "Kan Tibber styra mitt spabad?",
            a: "Det finns i dagsläget ingen Tibber-integration för spabad. Vill du styra efter elpriset behöver du till exempel Homey eller Home Assistant.",
          },
        ]}
      />
    </ArticlePage>
  );
}
