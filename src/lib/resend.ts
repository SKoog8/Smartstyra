// Gemensamt för kontaktformuläret och nyhetsbrevet, som båda går via Resend (resend.com).
// Mottagaradressen (CONTACT_TO) är en serverinställning och når aldrig webbläsaren.
export const API_KEY = process.env.RESEND_API_KEY ?? "";
export const TO = process.env.CONTACT_TO ?? "";
const FROM = process.env.CONTACT_FROM || "Smartstyra <onboarding@resend.dev>";

export const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function resend(path: string, body: object): Promise<boolean> {
  const res = await fetch(`https://api.resend.com${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(15_000),
  }).catch(() => null);

  if (!res?.ok) {
    console.error(`Resend ${path} misslyckades:`, res?.status, await res?.text().catch(() => ""));
    return false;
  }
  return true;
}

export const sendMail = (mail: { subject: string; text: string; reply_to?: string }) =>
  resend("/emails", { from: FROM, to: [TO], ...mail });
