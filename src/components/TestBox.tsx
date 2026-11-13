import JsonLd from "./JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { TESTER, type TestMeta } from "@/lib/tests";

// Ruta överst i ett test: vem som testat, hur länge och i vilket hus – plus artikelmärkning för sökmotorer.
export default function TestBox({ meta }: { meta: TestMeta }) {
  const path = `/tester/${meta.slug}`;
  return (
    <>
      <aside className="not-prose mb-10 rounded-3xl bg-white p-6 sm:p-7">
        <p className="inline-flex rounded-full bg-volt px-3 py-1 text-sm font-semibold text-ink">Testat hemma</p>
        <dl className="mt-4 grid gap-x-6 gap-y-3 text-[0.95rem] sm:grid-cols-[8rem_1fr]">
          <dt className="font-semibold text-ink">Testat av</dt>
          <dd className="text-ink/80">
            {TESTER.name}, {meta.used}
          </dd>
          <dt className="font-semibold text-ink">Hemma i</dt>
          <dd className="text-ink/80">En {TESTER.home}</dd>
          <dt className="font-semibold text-ink">Om testaren</dt>
          <dd className="text-ink/80">{TESTER.about}. Ingen tillverkare har betalat eller lånat ut något.</dd>
        </dl>
      </aside>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: meta.title,
              description: meta.description,
              image: `${SITE_URL}${path}/opengraph-image`,
              datePublished: meta.published,
              dateModified: meta.updated,
              inLanguage: "sv-SE",
              mainEntityOfPage: `${SITE_URL}${path}`,
              author: { "@type": "Person", name: TESTER.name },
              publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL, logo: `${SITE_URL}/apple-icon` },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Start", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Tester", item: `${SITE_URL}/tester` },
                { "@type": "ListItem", position: 3, name: meta.title, item: `${SITE_URL}${path}` },
              ],
            },
          ],
        }}
      />
    </>
  );
}
