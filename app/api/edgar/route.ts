import { NextResponse } from "next/server";

export const revalidate = 86400; // 1 day

const MOCK_FILINGS = [
  {
    id: "mock-1",
    company: "Coherent Corp",
    date: "2024-11-14",
    form: "8-K",
    url: "https://www.sec.gov/cgi-bin/browse-edgar?company=coherent+corp&CIK=&type=8-K&dateb=&owner=include&count=10&search_text=&action=getcompany",
    description: "Current report (8-K) filed 2024-11-14 — events of significance to silicon photonics investors",
  },
  {
    id: "mock-2",
    company: "Lumentum Holdings",
    date: "2024-10-30",
    form: "8-K",
    url: "https://www.sec.gov/cgi-bin/browse-edgar?company=lumentum&CIK=&type=8-K&dateb=&owner=include&count=10&search_text=&action=getcompany",
    description: "Current report (8-K) filed 2024-10-30 — events of significance to silicon photonics investors",
  },
  {
    id: "mock-3",
    company: "Marvell Technology",
    date: "2024-09-05",
    form: "8-K",
    url: "https://www.sec.gov/cgi-bin/browse-edgar?company=marvell+technology&CIK=&type=8-K&dateb=&owner=include&count=10&search_text=&action=getcompany",
    description: "Current report (8-K) filed 2024-09-05 — events of significance to silicon photonics investors",
  },
];

export async function GET() {
  const url =
    "https://efts.sec.gov/LATEST/search-index?q=%22silicon+photonics%22&forms=8-K&dateRange=custom&startdt=2024-01-01";

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "PhotonicAnalytics research@photonic.ai",
        Accept: "application/json",
      },
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      throw new Error(`EDGAR returned ${res.status}`);
    }

    const data = await res.json();
    const hits = data.hits?.hits ?? [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filings = hits.slice(0, 10).map((h: any) => {
      const company: string =
        h._source?.display_names?.[0] ?? h._source?.entity_name ?? "Unknown";
      const date: string = h._source?.file_date ?? "";
      return {
        id: h._id ?? String(Math.random()),
        company,
        date,
        form: h._source?.form ?? "8-K",
        url: `https://www.sec.gov/cgi-bin/browse-edgar?company=${encodeURIComponent(company)}&CIK=&type=8-K&dateb=&owner=include&count=10&search_text=&action=getcompany`,
        description: `Current report (8-K) filed ${date} — events of significance to silicon photonics investors`,
      };
    });

    return NextResponse.json(filings.length ? filings : MOCK_FILINGS);
  } catch {
    return NextResponse.json(MOCK_FILINGS);
  }
}
