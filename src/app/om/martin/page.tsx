import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import TestCard from "@/components/TestCard";
import JsonLd from "@/components/JsonLd";
import { TESTS, TESTER } from "@/lib/tests";
import { pageMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata = pageMetadata(
  "Martin – elektriker som testar smarta prylar",
  "Martin är elektriker och testar smart styrning av elen i sin egen villa. Läs om huset, hur testerna går till och vilka produkter han använder.",
  "/om/martin"
);

export default function MartinPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageIntro eyebrow="Skribent" title="Martin, elektriker">
        Martin skriver Smartstyras tester och faktagranskar guiderna. Han är elektriker och använder produkterna i sin
        egen villa – köpta för egna pengar.
      </PageIntro>
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6">
        <section className="article max-w-3xl">
          <h2>Huset där testerna görs</h2>
          <p>
            Martin bor i en {TESTER.home}. Huset har ett elavtal med kvartspris, så det spelar roll när elen används.
            Det är därför mycket av förbrukningen styrs till billigare timmar – och därför testerna handlar om vad som
            fungerar i vardagen, inte i ett labb.
          </p>
          <h2>Elektriker – och vad det betyder för testerna</h2>
          <p>
            Som elektriker kan Martin själv installera sådant som ska sitta i elcentralen eller i den fasta
            installationen, till exempel reläet och kontaktorn som styr varmvattenberedaren. Det betyder inte att du ska
            göra det själv: arbete i den fasta elinstallationen ska göras av ett{" "}
            <a href="https://elsakerhetsverket.se/privatpersoner/anlita-ett-elinstallationsforetag">registrerat elinstallationsföretag</a>.
            I testerna står det alltid vad du kan göra själv och vad som kräver en elinstallatör.
          </p>
          <h2>Faktagranskning av guiderna</h2>
          <p>
            Martin läser igenom guiderna innan de märks som faktagranskade, med särskilt fokus på det som rör
            elinstallationer, styrning och säkerhet. På varje granskad guide står det när den senast granskades. Nya
            guider märks först när Martin har läst dem.
          </p>
          <h2>Så går testerna till</h2>
          <ul>
            <li>Alla produkter är köpta för egna pengar. Ingen tillverkare har betalat för ett test eller lånat ut något.</li>
            <li>Produkterna används i vardagen under lång tid. Det står i varje test hur länge.</li>
            <li>Vi sätter inga betyg. I stället skriver vi vad som fungerar, vad som inte gör det och vem produkten passar.</li>
            <li>Vi hittar aldrig på besparingar. Har vi inga siffror beskriver vi vad vi har märkt.</li>
          </ul>
          <p>
            Läs mer om <Link href="/tester">hur vi testar</Link> och <Link href="/om">hur sajten finansieras</Link>.
          </p>
          <h2>Martins tester</h2>
        </section>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TESTS.map((t) => (
            <TestCard key={t.slug} test={t} />
          ))}
        </div>
      </main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfilePage",
              url: `${SITE_URL}/om/martin`,
              mainEntity: {
                "@type": "Person",
                "@id": `${SITE_URL}/om/martin#person`,
                name: TESTER.name,
                jobTitle: "Elektriker",
                url: `${SITE_URL}/om/martin`,
                worksFor: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Start", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Om oss", item: `${SITE_URL}/om` },
                { "@type": "ListItem", position: 3, name: TESTER.name, item: `${SITE_URL}/om/martin` },
              ],
            },
          ],
        }}
      />
      <Footer />
    </div>
  );
}
