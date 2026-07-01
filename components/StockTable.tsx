"use client";

import useSWR from "swr";
import { fetchAllQuotes, type StockQuote } from "@/lib/stocks";
import { STOCK_METADATA, type StockMeta } from "@/data/stocks";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import clsx from "clsx";

type Row = StockMeta & Partial<StockQuote>;

export default function StockTable() {
  const { data: quotes, isLoading } = useSWR("all-quotes", fetchAllQuotes, {
    revalidateOnFocus: false,
    refreshInterval: 300000,
  });

  const rows: Row[] = STOCK_METADATA.map((meta) => {
    const live = quotes?.find((q: StockQuote) => q.symbol === meta.symbol);
    return { ...meta, ...live };
  });

  return (
    <div className="bg-surface border border-border rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-muted text-left">
              <th className="px-4 py-3 font-medium text-xs uppercase tracking-wide">Symbol</th>
              <th className="px-4 py-3 font-medium text-xs uppercase tracking-wide">Company</th>
              <th className="px-4 py-3 font-medium text-xs uppercase tracking-wide hidden md:table-cell">Sector</th>
              <th className="px-4 py-3 font-medium text-xs uppercase tracking-wide text-right">Price</th>
              <th className="px-4 py-3 font-medium text-xs uppercase tracking-wide text-right">1D Chg</th>
              <th className="px-4 py-3 font-medium text-xs uppercase tracking-wide text-right hidden lg:table-cell">52W High</th>
              <th className="px-4 py-3 font-medium text-xs uppercase tracking-wide text-right hidden lg:table-cell">52W Low</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row) => {
              const chg = row.changePct !== undefined ? Number(row.changePct) : undefined;
              const isUp = (chg ?? 0) > 0;
              const isDown = (chg ?? 0) < 0;
              return (
                <tr
                  key={row.symbol}
                  className="hover:bg-white/[0.02] transition-colors"
                >
                  <td className="px-4 py-3">
                    <span className="font-mono font-bold text-accent">
                      {row.symbol}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-white">
                    <div className="font-medium">{row.name}</div>
                    <div className="text-muted text-xs mt-0.5 hidden sm:block leading-relaxed">
                      {row.thesis}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted hidden md:table-cell">
                    {row.sector}
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-white whitespace-nowrap">
                    {isLoading ? (
                      <span className="text-muted">—</span>
                    ) : row.price ? (
                      `$${row.price.toFixed(2)}`
                    ) : (
                      <span className="text-muted">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right whitespace-nowrap">
                    {isLoading ? (
                      <span className="text-muted font-mono">—</span>
                    ) : chg !== undefined ? (
                      <span
                        className={clsx("font-mono flex items-center justify-end gap-1", {
                          "text-positive": isUp,
                          "text-negative": isDown,
                          "text-muted": !isUp && !isDown,
                        })}
                      >
                        {isUp ? (
                          <TrendingUp size={12} />
                        ) : isDown ? (
                          <TrendingDown size={12} />
                        ) : (
                          <Minus size={12} />
                        )}
                        {isUp ? "+" : ""}
                        {chg.toFixed(2)}%
                      </span>
                    ) : (
                      <span className="text-muted">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right text-muted font-mono hidden lg:table-cell whitespace-nowrap">
                    {row.high52w ? `$${row.high52w.toFixed(2)}` : "—"}
                  </td>
                  <td className="px-4 py-3 text-right text-muted font-mono hidden lg:table-cell whitespace-nowrap">
                    {row.low52w ? `$${row.low52w.toFixed(2)}` : "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {isLoading && (
        <div className="text-center py-4 text-muted text-xs border-t border-border">
          Fetching live prices…
        </div>
      )}
    </div>
  );
}
