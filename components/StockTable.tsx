"use client";

import useSWR from "swr";
import { fetchAllQuotes, type StockQuote } from "@/lib/stocks";
import { STOCK_METADATA } from "@/data/stocks";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import clsx from "clsx";

export default function StockTable() {
  const { data: quotes, isLoading } = useSWR("all-quotes", fetchAllQuotes, {
    revalidateOnFocus: false,
    refreshInterval: 300000,
  });

  const rows = STOCK_METADATA.map((meta) => {
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
              <th className="px-4 py-3 font-medium text-xs uppercase tracking-wide text-right">1M Chg</th>
              <th className="px-4 py-3 font-medium text-xs uppercase tracking-wide text-right hidden lg:table-cell">Volume</th>
              <th className="px-4 py-3 font-medium text-xs uppercase tracking-wide text-right hidden lg:table-cell">52W High</th>
              <th className="px-4 py-3 font-medium text-xs uppercase tracking-wide text-right hidden lg:table-cell">52W Low</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row) => {
              const chg = (row as any).changePct;
              const isUp = chg > 0;
              const isDown = chg < 0;
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
                  <td className="px-4 py-3 text-white max-w-[200px]">
                    <div className="truncate">{row.name}</div>
                    <div className="text-muted text-xs truncate hidden sm:block">
                      {row.thesis}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted hidden md:table-cell">
                    {row.sector}
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-white">
                    {isLoading ? (
                      <span className="text-muted">—</span>
                    ) : (row as any).price ? (
                      `$${((row as any).price as number).toFixed(2)}`
                    ) : (
                      <span className="text-muted">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right">
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
                  <td className="px-4 py-3 text-right text-muted font-mono hidden lg:table-cell">
                    {(row as any).volume
                      ? `${(((row as any).volume as number) / 1e6).toFixed(1)}M`
                      : "—"}
                  </td>
                  <td className="px-4 py-3 text-right text-muted font-mono hidden lg:table-cell">
                    {(row as any).high52w
                      ? `$${((row as any).high52w as number).toFixed(2)}`
                      : "—"}
                  </td>
                  <td className="px-4 py-3 text-right text-muted font-mono hidden lg:table-cell">
                    {(row as any).low52w
                      ? `$${((row as any).low52w as number).toFixed(2)}`
                      : "—"}
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
