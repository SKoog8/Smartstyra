import { amazonUrl, product as findProduct, type Product } from "@/lib/products";

function Check({ ok }: { ok: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`mt-[0.2rem] flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[0.65rem] font-bold ${
        ok ? "bg-leaf text-white" : "bg-ink/10 text-ink/60"
      }`}
    >
      {ok ? "+" : "–"}
    </span>
  );
}

export default function ProductCard({ product, rank }: { product: Product; rank?: number }) {
  return (
    <div className="not-prose bg-white rounded-3xl p-6 sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm text-ink/60">
            {rank !== undefined && <span className="font-semibold text-ink">{rank}. </span>}
            {product.brand}
          </p>
          <h3 className="text-xl sm:text-2xl font-extrabold text-ink leading-tight mt-0.5">{product.name}</h3>
        </div>
        {product.badge && (
          <span className="rounded-full bg-volt px-3 py-1 text-sm font-semibold text-ink">{product.badge}</span>
        )}
      </div>

      <p className="mt-3 text-ink/80 leading-relaxed">{product.summary}</p>
      <p className="mt-2 text-sm text-ink/70">
        <span className="font-semibold text-ink">Passar: </span>
        {product.bestFor}
      </p>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <ul className="space-y-1.5 text-[0.95rem] text-ink/80">
          {product.pros.map((p) => (
            <li key={p} className="flex gap-2.5">
              <Check ok />
              {p}
            </li>
          ))}
        </ul>
        <ul className="space-y-1.5 text-[0.95rem] text-ink/80">
          {product.cons.map((c) => (
            <li key={c} className="flex gap-2.5">
              <Check ok={false} />
              {c}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <ul className="flex flex-wrap gap-1.5" aria-label="Fungerar med">
          {product.works.map((w) => (
            <li key={w} className="rounded-full bg-sand px-2.5 py-1 text-xs font-medium text-ink/70">
              {w}
            </li>
          ))}
        </ul>
        <a href={amazonUrl(product)} target="_blank" rel="sponsored nofollow noopener" className="btn-leaf py-2.5 text-[0.95rem]">
          Se pris på Amazon
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}

/** Produktkort inne i en guide, utpekade med id från data/products.json. */
export function Products({ ids }: { ids: string[] }) {
  return (
    <div className="my-8 space-y-4">
      {ids.map((id) => (
        <ProductCard key={id} product={findProduct(id)} />
      ))}
      <p className="text-sm text-ink/60">
        Länkarna går till Amazon. Köper du via dem kan vi få en liten ersättning, utan att priset påverkas.
      </p>
    </div>
  );
}
