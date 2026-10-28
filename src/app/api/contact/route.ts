import { NextRequest, NextResponse } from "next/server";
import { API_KEY, EMAIL, TO, sendMail } from "@/lib/resend";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const name = String(body?.name ?? "").trim().slice(0, 100);
  const email = String(body?.email ?? "").trim().slice(0, 200);
  const message = String(body?.message ?? "").trim();

  // Fältet "website" är dolt för människor. Fylls det i är det en bot – låtsas att allt gick bra.
  if (body?.website) return NextResponse.json({ ok: true });

  if (!EMAIL.test(email)) {
    return NextResponse.json({ error: "Ange en giltig e-postadress så att vi kan svara." }, { status: 400 });
  }
  if (message.length < 10 || message.length > 5000) {
    return NextResponse.json({ error: "Meddelandet ska vara mellan 10 och 5 000 tecken." }, { status: 400 });
  }
  if (!API_KEY || !TO) {
    return NextResponse.json({ error: "Kontaktformuläret är inte igång just nu. Försök igen senare." }, { status: 503 });
  }

  const ok = await sendMail({
    reply_to: email,
    subject: `Smartstyra: meddelande från ${name || email}`,
    text: `Namn: ${name || "(inget angivet)"}\nE-post: ${email}\n\n${message}`,
  });

  if (!ok) {
    return NextResponse.json({ error: "Meddelandet kunde inte skickas. Försök igen om en stund." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
