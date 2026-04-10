export type RangeKey = "1W" | "1M" | "3M" | "6M" | "1Y";

export const RANGE_MAP: Record<RangeKey, string> = {
  "1W": "5d",
  "1M": "1mo",
  "3M": "3mo",
  "6M": "6mo",
  "1Y": "1y",
};

export type ChartDataPoint = {
  date: string;
  close: number;
  open: number;
  high: number;
  low: number;
  volume: number;
};

export type StockQuote = {
  symbol: string;
  longName: string;
  price: number;
  changePct: number;
  volume: number;
  high52w: number;
  low52w: number;
  closes: number[];
};

export async function fetchChartData(
  symbol: string,
  range: RangeKey
): Promise<ChartDataPoint[]> {
  const yahooRange = RANGE_MAP[range];
  const res = await fetch(
    `/api/stocks/chart?symbol=${symbol}&range=${yahooRange}`
  );
  if (!res.ok) throw new Error("Chart fetch failed");
  const data = await res.json();

  const result = data.chart?.result?.[0];
  if (!result) return [];

  const timestamps: number[] = result.timestamp ?? [];
  const quote = result.indicators?.quote?.[0] ?? {};
  const { open = [], high = [], low = [], close = [], volume = [] } = quote;

  return timestamps.map((ts: number, i: number) => ({
    date: new Date(ts * 1000).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    close: close[i] ?? 0,
    open: open[i] ?? 0,
    high: high[i] ?? 0,
    low: low[i] ?? 0,
    volume: volume[i] ?? 0,
  }));
}

export async function fetchAllQuotes(): Promise<StockQuote[]> {
  const res = await fetch("/api/stocks/quote");
  if (!res.ok) throw new Error("Quote fetch failed");
  return res.json();
}
