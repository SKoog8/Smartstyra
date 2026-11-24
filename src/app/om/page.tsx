import Link from "next/link";
import ArticlePage from "@/components/ArticlePage";
import JsonLd from "@/components/JsonLd";
import { OWNER_NAME, SITE_NAME, SITE_URL } from "@/lib/site";
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

      <h2>Teamet</h2>
      <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
        <Link
          href="/om/martin"
          className="group flex flex-col items-center rounded-2xl bg-sand-dark/60 px-6 py-8 text-center transition-colors hover:bg-sand-dark"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/martin.jpg" alt="Martin, elektriker och testare på Smartstyra" width={96} height={96} className="h-24 w-24 rounded-full object-cover" />
          <span className="mt-4 text-lg font-extrabold text-ink">Martin</span>
          <span className="mt-1 text-sm text-ink/60">Elektriker · testar och faktagranskar</span>
        </Link>
      </div>

      <h2>Hur vi väljer produkter</h2>
      <p>
        Vi rekommenderar bara produkter som hjälper dig att använda mindre el eller styra den smartare, och vi skriver
        ut nackdelarna lika tydligt som fördelarna.
      </p>
      <ul>
        <li>
          <strong>Testat hemma.</strong> En del produkter använder <Link href="/om/martin">Martin, som är elektriker</Link>, i sin egen villa. De är
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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AboutPage",
              "@id": `${SITE_URL}/om`,
              url: `${SITE_URL}/om`,
              name: "Om Smartstyra",
              description: subtitle,
              inLanguage: "sv-SE",
              about: { "@id": `${SITE_URL}/#organization` },
              mainEntity: { "@id": `${SITE_URL}/#organization` },
            },
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: SITE_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/apple-icon`,
              description:
                "Svenska guider för villaägare som vill sänka elförbrukningen och flytta den till billigare timmar.",
              member: { "@id": `${SITE_URL}/om/martin#person` },
            },
            {
              "@type": "Person",
              "@id": `${SITE_URL}/om/martin#person`,
              name: "Martin",
              jobTitle: "Elektriker",
              url: `${SITE_URL}/om/martin`,
              image: `${SITE_URL}/martin.jpg`,
              worksFor: { "@id": `${SITE_URL}/#organization` },
            },
          ],
        }}
      />
    </ArticlePage>
  );
}
