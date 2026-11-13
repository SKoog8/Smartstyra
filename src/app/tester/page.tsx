import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import TestCard from "@/components/TestCard";
import { TESTS, TESTER } from "@/lib/tests";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Tester: smarta prylar testade hemma",
  "Produkter för smart styrning av elen som vi har använt hemma i vardagen – med ärliga omdömen om installation, styrning och vad de har gett.",
  "/tester"
);

export default function TestsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageIntro eyebrow="Tester" title="Testat hemma, på riktigt">
        Det här är prylar {TESTER.name} använder i sin egen {TESTER.home.split(",")[0]}. Inga lånade exemplar, inga
        betalda omdömen – bara hur de fungerar i vardagen.
      </PageIntro>
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TESTS.map((t) => (
            <TestCard key={t.slug} test={t} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
