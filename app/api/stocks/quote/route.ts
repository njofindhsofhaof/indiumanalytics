import { NextResponse } from "next/server";
import { ALL_SYMBOLS } from "@/data/stocks";

const YAHOO_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept: "application/json",
  "Accept-Language": "en-US,en;q=0.9",
};

// Mock fallback — changePct must be a number (not string from .toFixed())
const MOCK_QUOTES = ALL_SYMBOLS.map((symbol, i) => ({
  symbol,
  longName: symbol,
  price: +(100 + i * 15),
  changePct: +((Math.random() * 6 - 3).toFixed(2)), // + prefix converts to number
  volume: Math.floor(Math.random() * 10000000),
  high52w: +(150 + i * 15),
  low52w: +(60 + i * 10),
  closes: [95, 97, 99, 101, 100 + i * 15],
}));

export async function GET() {
  const symbols = ALL_SYMBOLS.join(",");
  const url = `https://query1.finance.yahoo.com/v7/finance/spark?symbols=${symbols}&range=1mo&interval=1d`;

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
          .map(Number); // ensure all values are numbers

        const price: number = Number(meta.regularMarketPrice ?? closes[closes.length - 1] ?? 0);
        const prevClose: number = Number(closes[0] ?? meta.chartPreviousClose ?? price);
        // Explicitly cast to number — .toFixed() returns string, + converts back
        const changePct: number = prevClose > 0
          ? +((price / prevClose - 1) * 100).toFixed(2)
          : 0;

        return {
          symbol: String(r.symbol),
          longName: String(meta.longName ?? r.symbol),
          price,
          changePct,       // always number
          volume: Number(meta.regularMarketVolume ?? 0),
          high52w: Number(meta.fiftyTwoWeekHigh ?? 0),
          low52w: Number(meta.fiftyTwoWeekLow ?? 0),
          closes: closes.slice(-5),
        };
      });

    return NextResponse.json(normalized);
  } catch {
    return NextResponse.json(MOCK_QUOTES);
  }
}
