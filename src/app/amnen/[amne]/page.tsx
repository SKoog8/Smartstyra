import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import GuideCard from "@/components/GuideCard";
import TestCard from "@/components/TestCard";
import JsonLd from "@/components/JsonLd";
import { guide } from "@/lib/guides";
import { test } from "@/lib/tests";
import { category } from "@/lib/products";
import { TOPICS, topic } from "@/lib/topics";
import { pageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ amne: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return TOPICS.map((t) => ({ amne: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = topic((await params).amne);
  if (!t) return {};
  return pageMetadata(t.title, t.description, `/amnen/${t.slug}`);
}

export default async function TopicPage({ params }: Props) {
  const t = topic((await params).amne);
  if (!t) notFound();
  const path = `/amnen/${t.slug}`;
  const guides = t.guides.map(guide);
  const categories = t.categories.map((c) => category(c)!).filter(Boolean);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageIntro eyebrow="Ämne" title={t.title}>
        {t.description}
      </PageIntro>
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 space-y-16">
        <section className="article max-w-3xl">
          {t.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-6">Guider</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </section>

        {t.tests.length > 0 && (
          <section>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-6">Testat hemma</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.tests.map((s) => (
                <TestCard key={s} test={test(s)} />
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-6">Produkter</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/produkter/${c.slug}`}
                  className="block h-full rounded-3xl border border-sand-dark px-6 py-5 hover:bg-white transition-colors"
                >
                  <span className="font-bold text-ink">{c.title} →</span>
                  <span className="block mt-1 text-[0.95rem] text-ink/70 line-clamp-2">{c.metaDescription}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-extrabold text-ink mb-3">Fler ämnen</h2>
          <ul className="flex flex-wrap gap-2">
            {TOPICS.filter((o) => o.slug !== t.slug).map((o) => (
              <li key={o.slug}>
                <Link href={`/amnen/${o.slug}`} className="inline-flex rounded-[2px] border-2 border-ink bg-white px-4 py-2 font-semibold text-ink hover:bg-mint transition-colors">
                  {o.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              name: t.title,
              description: t.description,
              url: `${SITE_URL}${path}`,
              inLanguage: "sv-SE",
              hasPart: guides.map((g) => ({ "@type": "Article", headline: g.title, url: `${SITE_URL}/guider/${g.slug}` })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Start", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Guider", item: `${SITE_URL}/guider` },
                { "@type": "ListItem", position: 3, name: t.name, item: `${SITE_URL}${path}` },
              ],
            },
          ],
        }}
      />
      <Footer />
    </div>
  );
}
