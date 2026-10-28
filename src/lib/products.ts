import data from "../../data/products.json";

export interface Category {
  slug: string;
  name: string;
  /** Rubrik på topplistan, utan år */
  title: string;
  description: string;
  intro: string;
  tips: string[];
  /** Datum då urvalet senast gicks igenom (ÅÅÅÅ-MM-DD) */
  checkedAt: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  badge?: string;
  summary: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  works: string[];
  /** Länk till Amazon.se utan partner-tagg – taggen läggs på automatiskt. */
  amazon?: string;
  /** Annan butik eller tillverkare, för produkter som inte säljs på Amazon. */
  shop?: { name: string; url: string };
}

// Året i titlar som "Bästa smarta uttagen 2026". Sidorna byggs om vid varje driftsättning.
export const YEAR = new Date().getFullYear();

export const amazonTag: string = data.amazonTag;
export const CATEGORIES: Category[] = data.categories;
export const PRODUCTS: Product[] = data.products;

export const category = (slug: string) => CATEGORIES.find((c) => c.slug === slug);

export const productsIn = (slug: string) => PRODUCTS.filter((p) => p.category === slug);

export function product(id: string): Product {
  const p = PRODUCTS.find((p) => p.id === id);
  if (!p) throw new Error(`Okänd produkt: ${id}`);
  return p;
}

// Amazon kräver att partner-taggen finns i länken för att köpet ska räknas.
function withAmazonTag(url: string): string {
  if (!amazonTag) return url;
  const u = new URL(url);
  u.searchParams.set("tag", amazonTag);
  return u.href;
}

/** Var produkten köps: Amazon i första hand, annars butiken eller tillverkaren i `shop`. */
export function buyLink(p: Product): { url: string; label: string; sponsored: boolean } {
  if (p.amazon) return { url: withAmazonTag(p.amazon), label: "Se pris på Amazon", sponsored: true };
  if (p.shop) return { url: p.shop.url, label: `Läs mer hos ${p.shop.name}`, sponsored: false };
  throw new Error(`Produkten ${p.id} saknar länk`);
}
