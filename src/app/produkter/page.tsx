import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import CategoryIcon from "@/components/CategoryIcon";
import { CATEGORIES, YEAR, productsIn } from "@/lib/products";

export const metadata: Metadata = {
  title: `Smarta prylar som sänker elräkningen ${YEAR}`,
  description:
    "Smarta uttag, elementtermostater, värmepumpsstyrning och energimätare som vi rekommenderar – med för- och nackdelar.",
  alternates: { canonical: "/produkter" },
};

const TONES = ["bg-mint", "bg-sky", "bg-butter", "bg-clay"];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageIntro eyebrow="Produkter" title="Prylarna som gör jobbet">
        Vi rekommenderar bara sådant som faktiskt hjälper dig att använda mindre el eller flytta den till billigare
        timmar. Inga gadgets för gadgetarnas skull.
      </PageIntro>
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {CATEGORIES.map((c, i) => (
            <Link
              key={c.slug}
              href={`/produkter/${c.slug}`}
              className={`${TONES[i % TONES.length]} group rounded-3xl p-7 sm:p-8 flex flex-col min-h-[15rem] transition-transform hover:-translate-y-1`}
            >
              <CategoryIcon slug={c.slug} className="w-12 h-12 text-ink" />
              <h2 className="mt-5 text-2xl sm:text-3xl font-extrabold text-ink">{c.name}</h2>
              <p className="mt-2 text-ink/70 leading-relaxed max-w-md">{c.description}</p>
              <span className="mt-auto pt-5 text-sm font-semibold text-ink">
                {productsIn(c.slug).length} produkter{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink/60 max-w-2xl">
          Länkarna går till Amazon. Köper du via dem kan vi få en liten ersättning, utan att det påverkar priset eller
          vilka produkter vi rekommenderar. <Link href="/om#finansiering" className="underline">Så väljer vi produkter</Link>.
        </p>
      </main>
      <Footer />
    </div>
  );
}
