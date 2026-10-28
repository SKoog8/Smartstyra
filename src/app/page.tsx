import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PriceDay from "@/components/PriceDay";
import GuideCard from "@/components/GuideCard";
import CategoryIcon from "@/components/CategoryIcon";
import NewsletterForm from "@/components/NewsletterForm";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { GUIDES } from "@/lib/guides";
import { CATEGORIES } from "@/lib/products";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const WAYS = [
  {
    n: "01",
    title: "Använd mindre",
    text: "Hitta det som drar i onödan och stäng av det. Det mesta av vinsten finns ofta i några få apparater.",
    href: "/guider/mat-din-elforbrukning",
    link: "Mät din förbrukning",
    bg: "bg-mint",
  },
  {
    n: "02",
    title: "Flytta i tid",
    text: "Med timpris kostar samma kilowattimme olika mycket under dygnet. Låt disk, varmvatten och elbil gå när det är billigt.",
    href: "/guider/flytta-elforbrukningen-till-billiga-timmar",
    link: "Flytta förbrukningen",
    bg: "bg-butter",
  },
  {
    n: "03",
    title: "Styr automatiskt",
    text: "Smarta termostater och uttag gör jobbet åt dig, varje dag, utan att du behöver tänka på det.",
    href: "/guider/smarta-elementtermostater",
    link: "Börja med värmen",
    bg: "bg-clay",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="px-2 sm:px-4">
        <div className="max-w-[90rem] mx-auto bg-forest text-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 sm:py-20 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <h1 className="text-[2.75rem] leading-[1] sm:text-7xl font-extrabold tracking-[-0.04em]">
                Samma hus.
                <br />
                <span className="text-volt">Lägre elräkning.</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-white/75 leading-relaxed max-w-lg">
                Guider och smarta prylar som hjälper dig att använda mindre el – och att använda den när den är billig.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/kalkylator" className="btn-volt">
                  Räkna på din besparing
                </Link>
                <Link href="/guider" className="btn-ghost-dark">
                  Läs guiderna
                </Link>
              </div>
            </div>
            <PriceDay />
          </div>
        </div>
      </section>

      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-ink max-w-2xl leading-[1.05]">
            Tre sätt att sänka elräkningen
          </h2>
          <p className="mt-4 text-lg text-ink/70 max-w-xl">
            Du behöver inte byta värmesystem eller sätta solceller på taket. Börja med det som kostar minst.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {WAYS.map((w) => (
              <Link key={w.n} href={w.href} className={`${w.bg} group rounded-3xl p-7 flex flex-col min-h-[19rem]`}>
                <span className="text-sm font-bold text-ink/50 tabular-nums">{w.n}</span>
                <h3 className="mt-auto text-3xl font-extrabold text-ink">{w.title}</h3>
                <p className="mt-3 text-ink/75 leading-relaxed">{w.text}</p>
                <span className="mt-5 text-sm font-semibold text-ink">
                  {w.link} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-ink leading-[1.05]">Senaste guiderna</h2>
            <Link href="/guider" className="font-semibold text-leaf hover:text-leaf-dark">
              Alla guider →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GUIDES.slice(0, 3).map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-ink leading-[1.05]">Prylarna som gör jobbet</h2>
              <p className="mt-4 text-lg text-ink/70 leading-relaxed">
                Smarta uttag, termostater och mätare som faktiskt sänker förbrukningen – med ärliga för- och nackdelar.
              </p>
              <Link href="/produkter" className="btn-leaf mt-7">
                Se alla produkter
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {CATEGORIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/produkter/${c.slug}`}
                  className="group bg-white rounded-3xl p-6 flex items-start gap-4 hover:ring-2 hover:ring-leaf/30 transition-shadow"
                >
                  <span className="rounded-2xl bg-mint p-2.5 text-leaf">
                    <CategoryIcon slug={c.slug} className="w-8 h-8" />
                  </span>
                  <span>
                    <span className="block font-bold text-ink text-lg">{c.name}</span>
                    <span className="block text-sm text-ink/65 mt-1 leading-relaxed">{c.description}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-2 sm:px-4 pt-20 sm:pt-28">
          <div className="max-w-[90rem] mx-auto bg-ink text-white rounded-[2rem] sm:rounded-[2.5rem]">
            <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 sm:py-20 grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
              <div>
                <p className="text-volt font-semibold">Kalkylator</p>
                <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold leading-[1.05]">
                  En grad lägre är ungefär fem procent av värmekostnaden.
                </h2>
                <p className="mt-5 text-lg text-white/70 max-w-lg leading-relaxed">
                  Vad blir det i ditt hus? Fyll i förbrukning och elpris och se vad temperatur, timpris och standby är
                  värda per år.
                </p>
              </div>
              <div className="md:justify-self-end">
                <Link href="/kalkylator" className="btn-volt text-lg px-8 py-4">
                  Räkna på ditt hus →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28">
          <div className="bg-sky rounded-3xl p-7 sm:p-12 grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-ink leading-tight">Nya guider i inkorgen</h2>
              <p className="mt-3 text-ink/70 text-lg leading-relaxed">
                Ett kort mejl när vi publicerar något nytt – och en påminnelse när det är dags att se över värmen inför
                vintern.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-8">
          <Faq
            title="Vanliga frågor"
            items={[
              {
                q: "Vad är Smartstyra?",
                a: "En oberoende sajt med guider för villaägare som vill sänka elförbrukningen eller flytta den till billigare timmar. Vi säljer ingen el och är inte knutna till något elbolag.",
              },
              {
                q: "Hur tjänar ni pengar?",
                a: "Länkarna till produkter går till Amazon. Köper du något via dem kan vi få en liten ersättning, utan att det kostar dig något extra. Det påverkar inte vilka produkter vi rekommenderar.",
              },
              {
                q: "Var ska jag börja?",
                a: "Börja med att mäta. Ett enkelt nattest av elmätaren visar hur stor grundlasten är, och elhandlarens app visar när på dygnet du använder mest el. Sedan vet du om det lönar sig mest att använda mindre eller att flytta förbrukningen.",
              },
            ]}
          />
        </section>
      </main>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
          inLanguage: "sv-SE",
        }}
      />
      <Footer />
    </div>
  );
}
