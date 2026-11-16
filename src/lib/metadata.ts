import type { Metadata } from "next";
import { SITE_NAME } from "./site";

/**
 * Titel, beskrivning och canonical-adress för en sida, även i de uppgifter som visas när sidan delas
 * (Open Graph). Utan dem ärver delningarna startsidans titel från layout.tsx. Sidor med en egen
 * opengraph-image i sin mapp (guider och tester) sätter `ownImage`, övriga får sajtens standardbild.
 * Guider och tester skickar med sina datum i `article` och märks då som artiklar.
 */
export function pageMetadata(
  title: string,
  description: string,
  path: string,
  ownImage = false,
  article?: { published: string; updated: string }
): Metadata {
  // Ett images-fält, även ett tomt, tar över sidans egen opengraph-image – så det får bara finnas utan en sådan.
  const image = ownImage
    ? {}
    : { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Smartstyra – sänk elräkningen i villan" }] };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...(article
        ? { type: "article", publishedTime: article.published, modifiedTime: article.updated }
        : { type: "website" }),
      siteName: SITE_NAME,
      locale: "sv_SE",
      title,
      description,
      url: path,
      ...image,
    },
  };
}
