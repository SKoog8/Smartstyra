import { ogImage, OG_SIZE } from "@/lib/og";
import { test } from "@/lib/tests";

const meta = test("plejd-golvtermostat-och-rela");

export const alt = meta.title;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage({ eyebrow: "Testat hemma", title: meta.product, subtitle: "Testat av Martin" });
}
