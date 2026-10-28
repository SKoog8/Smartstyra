import { NextRequest, NextResponse } from "next/server";
import { API_KEY, EMAIL, TO, resend, sendMail } from "@/lib/resend";

// Med RESEND_AUDIENCE_ID läggs prenumeranten in i en Audience hos Resend, varifrån nyhetsbrevet skickas.
// Utan den mejlas varje ny prenumerant till CONTACT_TO så att ingen anmälan går förlorad.
const AUDIENCE = process.env.RESEND_AUDIENCE_ID ?? "";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const email = String(body?.email ?? "").trim().slice(0, 200);

  // Fältet "website" är dolt för människor. Fylls det i är det en bot – låtsas att allt gick bra.
  if (body?.website) return NextResponse.json({ ok: true });

  if (!EMAIL.test(email)) {
    return NextResponse.json({ error: "Ange en giltig e-postadress." }, { status: 400 });
  }
  if (!API_KEY || (!AUDIENCE && !TO)) {
    return NextResponse.json({ error: "Nyhetsbrevet är inte igång ännu. Försök igen senare." }, { status: 503 });
  }

  const ok = AUDIENCE
    ? await resend(`/audiences/${AUDIENCE}/contacts`, { email, unsubscribed: false })
    : await sendMail({ subject: "Smartstyra: ny prenumerant", text: `Ny prenumerant på nyhetsbrevet: ${email}` });

  if (!ok) {
    return NextResponse.json({ error: "Det gick inte att anmäla dig. Försök igen om en stund." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
