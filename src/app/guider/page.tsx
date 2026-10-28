import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import GuideCard from "@/components/GuideCard";
import { GUIDES } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guider: sänk elförbrukningen i villan",
  description:
    "Guider om hur du använder mindre el, flyttar förbrukningen till billiga timmar och låter smarta prylar sköta resten.",
  alternates: { canonical: "/guider" },
};

export default function GuidesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageIntro eyebrow="Guider" title="Lägre elräkning, en sak i taget">
        Raka guider för villaägare. Börja var du vill – eller med att mäta, så vet du var vinsten finns.
      </PageIntro>
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
