import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import GuideCard from "@/components/GuideCard";
import { GUIDES, type GuideMeta } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";

const THEMES: GuideMeta["theme"][] = ["Flytta i tid", "Styr automatiskt", "Använd mindre"];

export const metadata = pageMetadata("Guider: sänk elförbrukningen i villan", "Guider om hur du använder mindre el, flyttar förbrukningen till billiga timmar och låter smarta prylar sköta resten.", "/guider");

export default function GuidesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageIntro eyebrow="Guider" title="Lägre elräkning, en sak i taget">
        Raka guider för villaägare. Börja var du vill – eller med att mäta, så vet du var vinsten finns.
      </PageIntro>
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 space-y-16">
        {THEMES.map((theme) => (
          <section key={theme}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-6">{theme}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GUIDES.filter((g) => g.theme === theme).map((g) => (
                <GuideCard key={g.slug} guide={g} />
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}
