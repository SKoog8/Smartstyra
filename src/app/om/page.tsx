import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import { OWNER_NAME } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

const subtitle = "Vem som står bakom sajten, hur vi väljer produkter och hur sajten finansieras.";

export const metadata = pageMetadata("Om Smartstyra", subtitle, "/om");

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
        ut nackdelarna lika tydligt som fördelarna. Urvalet bygger på tillverkarnas specifikationer, kompatibilitet med
        vanliga smarta hem-system och vad som fungerar i svenska hus. Vi har inte testat alla produkter själva och
        skriver aldrig att vi har gjort det när vi inte har det.
      </p>
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
