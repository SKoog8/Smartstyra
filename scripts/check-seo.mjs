// Kontrollerar guidelistan innan en ny guide publiceras: längd på titlar och beskrivningar,
// unika slugs och att varje guide har en sida och en delningsbild.
// Kör: node scripts/check-seo.mjs
import { readFileSync, existsSync } from "node:fs";

const src = readFileSync("src/lib/guides.ts", "utf8");
const blocks = [...src.matchAll(/\{\s*slug: "([^"]+)",([\s\S]*?)\n  \}/g)];
const field = (body, name) => body.match(new RegExp(`${name}:\\s*\\n?\\s*"([^"]+)"`))?.[1];

const errors = [];
const slugs = new Set();
for (const [, slug, body] of blocks) {
  if (slugs.has(slug)) errors.push(`${slug}: slug finns redan`);
  slugs.add(slug);
  const title = field(body, "seoTitle") ?? field(body, "title");
  const description = field(body, "description");
  // Sajtnamnet " | Smartstyra" läggs till efter titeln i sökresultaten.
  if (!title || title.length + 13 > 64) errors.push(`${slug}: sökresultatstiteln är för lång (${title?.length}) – lägg till seoTitle`);
  if (!description || description.length > 160 || description.length < 100)
    errors.push(`${slug}: beskrivningen ska vara 100–160 tecken (nu ${description?.length})`);
  for (const f of ["page.tsx", "opengraph-image.tsx"])
    if (!existsSync(`src/app/guider/${slug}/${f}`)) errors.push(`${slug}: saknar src/app/guider/${slug}/${f}`);
  if (!/published: "\d{4}-\d\d-\d\d"/.test(body) || !/updated: "\d{4}-\d\d-\d\d"/.test(body))
    errors.push(`${slug}: saknar published eller updated`);
}

console.log(`${blocks.length} guider kontrollerade.`);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("Allt ser bra ut.");
