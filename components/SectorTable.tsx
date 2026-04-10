"use client";

import useSWR from "swr";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

type Quote = {
  symbol: string;
  changePct: number;
};

type SectorGroup = {
  sector: string;
  tickers: string[];
};

const SECTOR_GROUPS: SectorGroup[] = [
  { sector: "Chip Makers", tickers: ["AVGO", "MRVL"] },
  { sector: "Foundries", tickers: ["TSEM", "GFS"] },
  { sector: "Laser / Emitters", tickers: ["LITE", "COHR"] },
  { sector: "Optical Mfg", tickers: ["FN", "MTSI"] },
  { sector: "Materials", tickers: ["AXTI"] },
  { sector: "Small Cap / Platform", tickers: ["POET", "LWLG", "AAOI"] },
];

async function fetchQuotes(range: string): Promise<Quote[]> {
  const res = await fetch(`/api/stocks/quote?range=${range}`);
  if (!res.ok) return [];
  return res.json();
}

function avg(quotes: Quote[], tickers: string[]): number | null {
  const vals = tickers
    .map((t) => quotes.find((q) => q.symbol === t)?.changePct)
    .filter((v): v is number => v !== undefined);
  if (!vals.length) return null;
  return vals.reduce((a, b) => a + b, 0) / vals.length;
}

function PctCell({ val }: { val: number | null }) {
  if (val === null) return <span className="text-muted text-sm">—</span>;
  const isPos = val > 0;
  const isNeg = val < 0;
  return (
    <span
      className={`font-mono text-sm font-semibold ${
        isPos ? "text-positive" : isNeg ? "text-negative" : "text-muted"
      }`}
    >
      {isPos ? "+" : ""}
      {val.toFixed(1)}%
    </span>
  );
}

function TrendIcon({ val }: { val: number | null }) {
  if (val === null) return <Minus size={14} className="text-muted" />;
  if (val > 0.5) return <TrendingUp size={14} className="text-positive" />;
  if (val < -0.5) return <TrendingDown size={14} className="text-negative" />;
  return <Minus size={14} className="text-muted" />;
}

export default function SectorTable() {
  const { data: quotes1m } = useSWR("sector-1mo", () => fetchQuotes("1mo"), {
    revalidateOnFocus: false,
    refreshInterval: 300000,
  });
  const { data: quotes3m } = useSWR("sector-3mo", () => fetchQuotes("3mo"), {
    revalidateOnFocus: false,
    refreshInterval: 300000,
  });
  const { data: quotes1y } = useSWR("sector-1y", () => fetchQuotes("1y"), {
    revalidateOnFocus: false,
    refreshInterval: 300000,
  });

  const isLoading = !quotes1m && !quotes3m && !quotes1y;

  if (isLoading) {
    return (
      <div className="bg-surface border border-border rounded-lg p-4 h-[262px] flex items-center justify-center">
        <span className="text-muted text-sm">Loading sector data…</span>
      </div>
    );
  }

  return (
    <div className="bg-surface border border-border rounded-lg p-4">
      <h2 className="text-white font-semibold text-sm mb-4">
        Sector Performance
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-muted text-xs font-medium pb-2 pr-4">
                Sector
              </th>
              <th className="text-left text-muted text-xs font-medium pb-2 pr-4">
                Companies
              </th>
              <th className="text-right text-muted text-xs font-medium pb-2 px-3">
                1M
              </th>
              <th className="text-right text-muted text-xs font-medium pb-2 px-3">
                3M
              </th>
              <th className="text-right text-muted text-xs font-medium pb-2 px-3">
                1Y
              </th>
              <th className="text-right text-muted text-xs font-medium pb-2 pl-3">
                Trend
              </th>
            </tr>
          </thead>
          <tbody>
            {SECTOR_GROUPS.map((group) => {
              const avg1m = quotes1m ? avg(quotes1m, group.tickers) : null;
              const avg3m = quotes3m ? avg(quotes3m, group.tickers) : null;
              const avg1y = quotes1y ? avg(quotes1y, group.tickers) : null;

              return (
                <tr
                  key={group.sector}
                  className="border-b border-border/40 last:border-0 hover:bg-border/10 transition-colors"
                >
                  <td className="py-2.5 pr-4">
                    <span className="text-white text-xs font-medium">
                      {group.sector}
                    </span>
                  </td>
                  <td className="py-2.5 pr-4">
                    <div className="flex flex-wrap gap-1">
                      {group.tickers.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs text-accent bg-accent/10 px-1.5 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <PctCell val={avg1m} />
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <PctCell val={avg3m} />
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <PctCell val={avg1y} />
                  </td>
                  <td className="py-2.5 pl-3 text-right">
                    <div className="flex justify-end">
                      <TrendIcon val={avg1m} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
