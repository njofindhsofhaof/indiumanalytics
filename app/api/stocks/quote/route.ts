import { NextResponse } from "next/server";
import YahooFinance from "yahoo-finance2";
import { ALL_SYMBOLS } from "@/data/stocks";

const yahooFinance = new YahooFinance({ suppressNotices: ["yahooSurvey"] });

const YAHOO_SYMBOL_OVERRIDES: Record<string, string> = {};
const DISPLAY_SYMBOL: Record<string, string> = Object.fromEntries(
  Object.entries(YAHOO_SYMBOL_OVERRIDES).map(([display, yahoo]) => [yahoo, display])
);

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
  try {
    const querySymbols = ALL_SYMBOLS.map((s) => YAHOO_SYMBOL_OVERRIDES[s] ?? s);
    const results = await yahooFinance.quote(querySymbols, {}, { validateResult: false });
    const list = Array.isArray(results) ? results : [results];
    if (!list.length) throw new Error("Empty result");

    return NextResponse.json(list.map((r) => ({
      symbol: DISPLAY_SYMBOL[String(r.symbol)] ?? String(r.symbol),
      longName: String(r.shortName ?? r.longName ?? r.symbol),
      price: Number(r.regularMarketPrice ?? 0),
      changePct: +Number(r.regularMarketChangePercent ?? 0).toFixed(2),
      volume: Number(r.regularMarketVolume ?? 0),
      high52w: Number(r.fiftyTwoWeekHigh ?? 0),
      low52w: Number(r.fiftyTwoWeekLow ?? 0),
      closes: [],
    })));
  } catch {
    return NextResponse.json(makeMockQuotes());
  }
}
