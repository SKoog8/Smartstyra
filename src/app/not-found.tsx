import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideCard from "@/components/GuideCard";
import { GUIDES } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Sidan hittades inte",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 pt-10 sm:pt-16">
        <p className="text-sm font-semibold text-leaf">404</p>
        <h1 className="mt-2 text-4xl sm:text-6xl font-extrabold text-ink">Här var det mörkt.</h1>
        <p className="mt-4 text-lg text-ink/70 max-w-xl">
          Sidan finns inte, eller så har den flyttat. Börja om från <Link href="/" className="text-leaf underline">startsidan</Link>{" "}
          eller läs en av guiderna.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES.slice(0, 3).map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
