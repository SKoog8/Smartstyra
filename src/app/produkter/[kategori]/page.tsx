import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import ProductCard from "@/components/ProductCard";
import JsonLd from "@/components/JsonLd";
import { CATEGORIES, YEAR, category, productsIn } from "@/lib/products";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ kategori: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ kategori: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = category((await params).kategori);
  if (!c) return {};
  return {
    title: `${c.title} ${YEAR}`,
    description: c.description,
    alternates: { canonical: `/produkter/${c.slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const c = category((await params).kategori);
  if (!c) notFound();
  const products = productsIn(c.slug);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageIntro eyebrow={c.name} title={`${c.title} ${YEAR}`}>
        {c.intro}
      </PageIntro>
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_20rem] items-start">
          <div className="space-y-4">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} rank={i + 1} />
            ))}
          </div>
          <aside className="bg-forest text-white rounded-3xl p-7 lg:sticky lg:top-6">
            <h2 className="text-xl font-extrabold">Tänk på det här</h2>
            <ul className="mt-4 space-y-4 text-white/80 leading-relaxed text-[0.95rem]">
              {c.tips.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-volt" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-white/60">
              Urvalet gicks igenom{" "}
              {new Date(c.checkedAt).toLocaleDateString("sv-SE", { dateStyle: "long", timeZone: "Europe/Stockholm" })}.
            </p>
          </aside>
        </div>
        <p className="mt-8 text-sm text-ink/60 max-w-2xl">
          Amazonlänkarna är affiliatelänkar. Köper du via dem kan vi få en liten ersättning, utan att det påverkar priset eller
          vilka produkter vi rekommenderar. <Link href="/produkter" className="underline">Alla produktkategorier</Link>.
        </p>
      </main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${c.title} ${YEAR}`,
          url: `${SITE_URL}/produkter/${c.slug}`,
          itemListElement: products.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.name,
          })),
        }}
      />
      <Footer />
    </div>
  );
}
