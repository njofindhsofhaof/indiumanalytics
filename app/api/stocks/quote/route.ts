import { NextResponse } from "next/server";
import { ALL_SYMBOLS } from "@/data/stocks";

const YAHOO_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept: "application/json",
  "Accept-Language": "en-US,en;q=0.9",
  Referer: "https://finance.yahoo.com/",
};

function makeMockQuotes() {
  return ALL_SYMBOLS.map((symbol, i) => ({
    symbol,
    longName: symbol,
    price: +(100 + i * 15),
    changePct: +((Math.random() * 4 - 2).toFixed(2)),
    volume: Math.floor(Math.random() * 10000000),
    high52w: +(150 + i * 15),
    low52w: +(60 + i * 10),
    closes: [95, 97, 99, 101, 100 + i * 15],
  }));
}

export async function GET() {
  const symbols = ALL_SYMBOLS.join(",");
  const fields = [
    "regularMarketPrice",
    "regularMarketChangePercent",
    "regularMarketVolume",
    "fiftyTwoWeekHigh",
    "fiftyTwoWeekLow",
    "shortName",
  ].join(",");

  const quoteUrl = `https://query2.finance.yahoo.com/v7/finance/quote?symbols=${symbols}&fields=${fields}&formatted=false&corsDomain=finance.yahoo.com`;

  try {
    const res = await fetch(quoteUrl, {
      headers: YAHOO_HEADERS,
      next: { revalidate: 300 },
    });

    if (!res.ok) throw new Error(`Yahoo v7/quote returned ${res.status}`);

    const data = await res.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const results: any[] = data.quoteResponse?.result ?? [];
    if (!results.length) throw new Error("Empty result");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return NextResponse.json(results.map((r: any) => ({
      symbol: String(r.symbol),
      longName: String(r.shortName ?? r.symbol),
      price: Number(r.regularMarketPrice ?? 0),
      changePct: +Number(r.regularMarketChangePercent ?? 0).toFixed(2),
      volume: Number(r.regularMarketVolume ?? 0),
      high52w: Number(r.fiftyTwoWeekHigh ?? 0),
      low52w: Number(r.fiftyTwoWeekLow ?? 0),
      closes: [],
    })));
  } catch {
    // Fallback: Spark API (returns 1-month range closes)
    try {
      const sparkUrl = `https://query1.finance.yahoo.com/v7/finance/spark?symbols=${symbols}&range=1mo&interval=1d`;
      const res2 = await fetch(sparkUrl, { headers: YAHOO_HEADERS, next: { revalidate: 300 } });
      if (!res2.ok) throw new Error("Spark fallback failed");

      const data2 = await res2.json();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const results2 = (data2.spark?.result ?? []).filter((r: any) => r?.response?.[0]);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return NextResponse.json(results2.map((r: any) => {
        const meta = r.response[0].meta ?? {};
        const closes: number[] = (r.response[0].indicators?.quote?.[0]?.close ?? [])
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .filter((v: any) => v != null).map(Number);
        const price = Number(meta.regularMarketPrice ?? closes[closes.length - 1] ?? 0);
        const prev = Number(meta.chartPreviousClose ?? closes[closes.length - 2] ?? price);
        return {
          symbol: String(r.symbol),
          longName: String(meta.longName ?? r.symbol),
          price,
          changePct: prev > 0 ? +((price / prev - 1) * 100).toFixed(2) : 0,
          volume: Number(meta.regularMarketVolume ?? 0),
          high52w: Number(meta.fiftyTwoWeekHigh ?? 0),
          low52w: Number(meta.fiftyTwoWeekLow ?? 0),
          closes: closes.slice(-5),
        };
      }));
    } catch {
      return NextResponse.json(makeMockQuotes());
    }
  }
}
