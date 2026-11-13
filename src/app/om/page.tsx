import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import { OWNER_NAME } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

const subtitle = "Vem som står bakom sajten, hur vi väljer produkter och hur sajten finansieras.";

export const metadata = pageMetadata("Om oss", subtitle, "/om");

export default function AboutPage() {
  return (
    <ArticlePage title="Om Smartstyra" subtitle={subtitle} path="/om">
      <p>
        Smartstyra finns för villaägare som vill få ner elräkningen utan att göra om hela huset. Vi skriver raka guider
        om hur man använder mindre el, hur man flyttar förbrukningen till billigare timmar och vilka smarta prylar som
        faktiskt gör skillnad.
      </p>
      {OWNER_NAME && <p>Sajten drivs av {OWNER_NAME}.</p>}

      <h2>Hur vi väljer produkter</h2>
      <p>
        Vi rekommenderar bara produkter som hjälper dig att använda mindre el eller styra den smartare, och vi skriver
        ut nackdelarna lika tydligt som fördelarna.
      </p>
      <ul>
        <li>
          <strong>Testat hemma.</strong> En del produkter använder Martin, som är elektriker, i sin egen villa. De är
          köpta för egna pengar, och testerna beskriver hur de fungerar i vardagen. De är märkta{" "}
          <Link href="/tester">Testat hemma</Link>.
        </li>
        <li>
          <strong>Jämförda.</strong> Övriga produkter har vi inte testat själva. Där bygger urvalet på tillverkarnas
          specifikationer, kompatibilitet med vanliga smarta hem-system och vad som fungerar i svenska hus. Vi skriver
          aldrig att vi har testat något när vi inte har det.
        </li>
      </ul>
      <p>Varje lista har ett datum för när urvalet senast gicks igenom. Hittar du något som inte stämmer – hör av dig.</p>

      <h2 id="finansiering">Så finansieras sajten</h2>
      <p>
        Produktlänkarna går till Amazon. Som Amazon-partner kan vi få en liten ersättning när du köper något via dem.
        Det kostar dig ingenting extra, och ersättningen påverkar inte vilka produkter vi tar med eller i vilken ordning.
      </p>
      <p>
        I guiderna om Tibber finns också en inbjudningslänk. Tecknar du elavtal via den får både du och Smartstyra en
        bonus från Tibber. Vi skriver lika ärligt om Tibbers nackdelar som om fördelarna, och berättar när ett vanligt
        rörligt avtal kan vara bättre för dig.
      </p>
      <p>Vi har inga annonser och säljer ingen el.</p>

      <h2>Kontakt</h2>
      <p>
        Frågor, tips och rättelser är välkomna via <Link href="/kontakt">kontaktformuläret</Link>.
      </p>
    </ArticlePage>
  );
}
