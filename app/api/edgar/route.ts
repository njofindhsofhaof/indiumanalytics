import { NextResponse } from "next/server";

export async function GET() {
  const url =
    "https://efts.sec.gov/LATEST/search-index?q=%22silicon+photonics%22&forms=8-K&dateRange=custom&startdt=2024-01-01";

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "PhotonicAnalytics research@photonic.ai",
        Accept: "application/json",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`EDGAR returned ${res.status}`);
    }

    const data = await res.json();
    const hits = data.hits?.hits ?? [];

    const filings = hits.slice(0, 10).map((h: any) => ({
      id: h._id,
      company: h._source?.display_names?.[0] ?? "Unknown",
      date: h._source?.file_date ?? "",
      form: h._source?.form ?? "8-K",
      adsh: h._source?.adsh ?? "",
      url: h._source?.adsh
        ? `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&filenum=${h._source.adsh}`
        : "https://www.sec.gov/cgi-bin/srqsb?text=form-type%3D8-K+%22silicon+photonics%22",
    }));

    return NextResponse.json(filings);
  } catch {
    return NextResponse.json([]);
  }
}
