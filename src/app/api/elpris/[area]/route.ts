import { AREAS, getElpris, isArea } from "@/lib/elpris";

// Svaret byggs om var 15:e minut, så att morgondagens priser kommer med strax efter att de publicerats.
export const revalidate = 900;
export const dynamicParams = false;

export function generateStaticParams() {
  return AREAS.map((a) => ({ area: a.id }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  if (!isArea(area)) return Response.json({ error: "Okänt elområde" }, { status: 404 });
  return Response.json(await getElpris(area));
}
