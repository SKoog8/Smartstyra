import type { Metadata } from "next";
import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import Callout from "@/components/Callout";
import Faq from "@/components/Faq";
import { guide } from "@/lib/guides";

const meta = guide("adax-wifi-element");
const path = `/guider/${meta.slug}`;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: path },
};

export default function Page() {
  return (
    <ArticlePage title={meta.title} subtitle={meta.description} path={path} guide={meta}>
      <p>
        Har du direktverkande elelement är varje element sin egen lilla värmekälla med egen termostat. Det gör dem
        perfekta att styra rum för rum. Adax WiFi-element har uppkopplingen inbyggd, så du kan styra dem från mobilen,
        schemalägga dem och låta en app välja de billigaste timmarna.
      </p>

      <h2>Vad är Adax WiFi?</h2>
      <p>
        Adax är en norsk tillverkare av elelement. WiFi-modellerna, bland annat Neo WiFi och Clea WiFi, har en termostat
        som kopplas till hemmets wifi och styrs med appen Adax WiFi. Där ställer du in temperatur och veckoschema för
        varje rum.
      </p>

      <h2>Tre sätt att styra dem</h2>
      <h3>1. Adax-appen</h3>
      <p>
        Lägg upp ett schema per rum: lägre temperatur på natten och när ingen är hemma, högre när ni är det. Det är
        gratis och ger den största delen av besparingen för många.
      </p>
      <h3>2. Tibber</h3>
      <p>
        Adax Neo WiFi och Clea WiFi kan kopplas till <Link href="/guider/sa-fungerar-tibber">Tibber-appen</Link>. Med
        smart uppvärmning påslagen flyttar Tibber så mycket som möjligt av uppvärmningen till billiga timmar, men slår
        på värmen igen om temperaturen sjunker för långt under den du ställt in.
      </p>
      <h3>3. Home Assistant</h3>
      <p>
        Home Assistant har en officiell Adax-integration som kan styra elementen lokalt eller via Adax moln. Den lokala
        anslutningen sätts upp via Bluetooth och kräver ett element av den nyare generationen med både wifi och
        Bluetooth. Därifrån kan du bygga egna regler efter elpris, närvaro och väder.
      </p>

      <Callout title="Hur mycket går det att flytta?" tone="butter">
        <p>
          Ett elelement lagrar nästan ingen värme själv, men huset gör det. Att förvärma ett rum en grad innan de dyra
          timmarna och sänka en grad under dem fungerar bra. Att stänga av värmen i flera timmar gör det däremot kallt –
          och kostar mycket energi att ta igen.
        </p>
      </Callout>

      <h2>Tips för lägre elräkning med elelement</h2>
      <ul>
        <li>Håll sovrummen svalare, gärna 16–18 grader på natten.</li>
        <li>Sänk några grader i rum som sällan används, men inte under 15–16 grader.</li>
        <li>Använd bortaläge när ni är bortresta.</li>
        <li>
          Kombinera med en luft-luft-värmepump om du har en. Låt värmepumpen sköta grundvärmen och elementen ta toppar –
          värmepumpen ger flera gånger mer värme per kWh. Se{" "}
          <Link href="/produkter/varmepumpsstyrning">styrning för värmepumpen</Link>.
        </li>
      </ul>

      <Faq
        title="Vanliga frågor"
        items={[
          {
            q: "Behöver jag en hubb för Adax WiFi?",
            a: "Nej. Elementen ansluts direkt till hemmets wifi och styrs från Adax-appen.",
          },
          {
            q: "Kan jag blanda Adax med andra märken i Tibber?",
            a: "Ja. Varje integration läggs till som en egen Power-up, så du kan ha Adax-element i vissa rum och till exempel en värmepump i Tibber samtidigt.",
          },
          {
            q: "Vad händer om wifi går ner?",
            a: "Elementet har en egen termostat och fortsätter att värma. Men du kan inte styra det från appen, och prisstyrningen via Tibber eller Home Assistant slutar fungera tills uppkopplingen är tillbaka.",
          },
        ]}
      />
    </ArticlePage>
  );
}
