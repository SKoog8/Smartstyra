import { ogImage, OG_SIZE } from "@/lib/og";

export const alt = "Smartstyra – sänk elräkningen i villan";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    title: "Samma hus. Lägre elräkning.",
    subtitle: "Guider och smarta prylar för villaägare",
  });
}
