import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageIntro from "@/components/PageIntro";
import SavingsCalculator from "@/components/SavingsCalculator";

export const metadata: Metadata = {
  title: "Räkna ut hur mycket du kan sänka elräkningen",
  description:
    "Räkna på vad lägre inomhustemperatur, flyttad förbrukning och mindre standby kan spara i just ditt hus.",
  alternates: { canonical: "/kalkylator" },
};

export default function CalculatorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageIntro eyebrow="Räkna på det" title="Vad kan du spara?">
        Dra i reglagen och se vad tre enkla åtgärder kan vara värda i ditt hus. Utgå från din egen elräkning för bäst
        resultat.
      </PageIntro>
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6">
        <SavingsCalculator />
        <div className="mt-10 grid gap-4 sm:grid-cols-3 text-ink/80">
          {[
            ["/guider/smarta-elementtermostater", "Sänk temperaturen", "Smarta elementtermostater rum för rum."],
            ["/guider/flytta-elforbrukningen-till-billiga-timmar", "Flytta förbrukningen", "Så tar du vara på billiga timmar."],
            ["/guider/mat-din-elforbrukning", "Hitta standbyförbrukningen", "Mät grundlasten och hitta tjuvarna."],
          ].map(([href, title, text]) => (
            <Link key={href} href={href} className="rounded-3xl border border-sand-dark px-6 py-5 hover:bg-white transition-colors">
              <span className="font-bold text-ink">{title} →</span>
              <span className="block mt-1 text-[0.95rem]">{text}</span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
