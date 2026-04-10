import { NextRequest, NextResponse } from "next/server";
import { ALL_SYMBOLS } from "@/data/stocks";

const YAHOO_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept: "application/json",
  "Accept-Language": "en-US,en;q=0.9",
};

const VALID_RANGES = ["1mo", "3mo", "1y"] as const;
type Range = (typeof VALID_RANGES)[number];

function makeMockQuotes(range: Range) {
  const seed = range === "1y" ? 6 : range === "3mo" ? 3 : 1;
  return ALL_SYMBOLS.map((symbol, i) => ({
    symbol,
    longName: symbol,
    price: +(100 + i * 15),
    changePct: +((Math.random() * seed * 4 - seed * 2).toFixed(2)),
    volume: Math.floor(Math.random() * 10000000),
    high52w: +(150 + i * 15),
    low52w: +(60 + i * 10),
    closes: [95, 97, 99, 101, 100 + i * 15],
  }));
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const rangeParam = searchParams.get("range") ?? "1mo";
  const range: Range = (VALID_RANGES as readonly string[]).includes(rangeParam)
    ? (rangeParam as Range)
    : "1mo";

  const symbols = ALL_SYMBOLS.join(",");
  const url = `https://query1.finance.yahoo.com/v7/finance/spark?symbols=${symbols}&range=${range}&interval=1d`;

  try {
    const res = await fetch(url, {
      headers: YAHOO_HEADERS,
      next: { revalidate: 300 },
    });

    if (!res.ok) throw new Error(`Yahoo returned ${res.status}`);

    const data = await res.json();
    const results = data.spark?.result ?? [];

    const normalized = results
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .filter((r: any) => r?.response?.[0])
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((r: any) => {
        const resp = r.response[0];
        const meta = resp.meta ?? {};
        const closes: number[] = (resp.indicators?.quote?.[0]?.close ?? [])
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .filter((v: any) => v != null)
          .map(Number);

        const price: number = Number(meta.regularMarketPrice ?? closes[closes.length - 1] ?? 0);
        const prevClose: number = Number(closes[0] ?? meta.chartPreviousClose ?? price);
        const changePct: number = prevClose > 0
          ? +((price / prevClose - 1) * 100).toFixed(2)
          : 0;

        return {
          symbol: String(r.symbol),
          longName: String(meta.longName ?? r.symbol),
          price,
          changePct,
          volume: Number(meta.regularMarketVolume ?? 0),
          high52w: Number(meta.fiftyTwoWeekHigh ?? 0),
          low52w: Number(meta.fiftyTwoWeekLow ?? 0),
          closes: closes.slice(-5),
        };
      });

    return NextResponse.json(normalized);
  } catch {
    return NextResponse.json(makeMockQuotes(range));
  }
}
