// Sätt NEXT_PUBLIC_SITE_URL i .env.local till den riktiga adressen (https://smartstyra.se)
// innan sajten publiceras – den används i canonical-länkar, sitemap och strukturerad data.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
export const SITE_NAME = "Smartstyra";

// Visas på Om- och Integritetssidan om det är ifyllt. Kontakt sker via formuläret på /kontakt,
// vars mottagaradress (CONTACT_TO) bara finns på servern.
export const OWNER_NAME = process.env.NEXT_PUBLIC_OWNER_NAME ?? "";
