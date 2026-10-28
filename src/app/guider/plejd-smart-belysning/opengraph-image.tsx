import { ogImage, OG_SIZE } from "@/lib/og";
import { guide } from "@/lib/guides";

const meta = guide("plejd-smart-belysning");

export const alt = meta.title;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ eyebrow: "Guide", title: meta.title, subtitle: meta.theme });
}
