import JsonLd from "./JsonLd";

export interface FaqItem {
  q: string;
  a: string;
}

export default function Faq({ title, items }: { title: string; items: FaqItem[] }) {
  return (
    <section className="mt-14 not-prose">
      <h2 className="text-2xl sm:text-[1.75rem] font-extrabold text-ink mb-5">{title}</h2>
      <div className="divide-y divide-sand-dark border-y border-sand-dark">
        {items.map((item) => (
          <details key={item.q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
              {item.q}
              <span className="text-2xl leading-none text-leaf transition-transform group-open:rotate-45" aria-hidden="true">
                +
              </span>
            </summary>
            <p className="mt-2 text-ink/75 leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />
    </section>
  );
}
