import { Metadata } from "next";
import dynamic from "next/dynamic";
import KPICard from "@/components/KPICard";

const PriceChart = dynamic(() => import("@/components/PriceChart"), {
  ssr: false,
  loading: () => (
    <div className="bg-surface border border-border rounded-lg p-4 h-[262px] flex items-center justify-center">
      <span className="text-muted text-sm">Loading chart…</span>
    </div>
  ),
});
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  FileText,
  Activity,
} from "lucide-react";
import { UPCOMING_CATALYSTS } from "@/data/thesis";
import clsx from "clsx";

export const metadata: Metadata = { title: "Dashboard" };
export const revalidate = 300;

type QuoteNorm = {
  symbol: string;
  price: number;
  changePct: number;
  longName: string;
};

async function getDashboardData(): Promise<{
  quotes: QuoteNorm[];
  edgarCount: number;
}> {
  const TICKERS =
    "AVGO,MRVL,COHR,LITE,FN,MTSI,AAOI,AXTI,POET,LWLG,TSEM,GFS";

  try {
    const [sparkRes, edgarRes] = await Promise.allSettled([
      fetch(
        `https://query1.finance.yahoo.com/v7/finance/spark?symbols=${TICKERS}&range=1mo&interval=1d`,
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
            Accept: "application/json",
          },
          next: { revalidate: 300 },
        }
      ),
      fetch(
        "https://efts.sec.gov/LATEST/search-index?q=%22silicon+photonics%22&forms=8-K&dateRange=custom&startdt=2024-01-01",
        {
          headers: { "User-Agent": "PhotonicAnalytics research@photonic.ai" },
          next: { revalidate: 3600 },
        }
      ),
    ]);

    let quotes: QuoteNorm[] = [];
    if (sparkRes.status === "fulfilled" && sparkRes.value.ok) {
      const data = await sparkRes.value.json();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const results: any[] = data.spark?.result ?? [];
      quotes = results
        .filter((r) => r?.response?.[0])
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((r: any) => {
          const resp = r.response[0];
          const closes = (resp.indicators?.quote?.[0]?.close ?? []).filter(
            Boolean
          );
          const price = resp.meta.regularMarketPrice ?? 0;
          const prevClose = closes[0] ?? resp.meta.chartPreviousClose ?? price;
          return {
            symbol: r.symbol,
            price,
            changePct:
              prevClose > 0
                ? +((price / prevClose - 1) * 100).toFixed(2)
                : 0,
            longName: resp.meta.longName ?? r.symbol,
          };
        });
    }

    let edgarCount = 0;
    if (edgarRes.status === "fulfilled" && edgarRes.value.ok) {
      const edgarData = await edgarRes.value.json();
      edgarCount = edgarData.hits?.total?.value ?? 0;
    }

    return { quotes, edgarCount };
  } catch {
    return { quotes: [], edgarCount: 0 };
  }
}

export default async function DashboardPage() {
  const { quotes, edgarCount } = await getDashboardData();

  const sorted = [...quotes].sort((a, b) => b.changePct - a.changePct);
  const topGainer = sorted[0];
  const topLoser = sorted[sorted.length - 1];
  const gainers = quotes.filter((q) => q.changePct > 0).length;
  const losers = quotes.filter((q) => q.changePct < 0).length;
  const sentiment =
    gainers > losers ? "Bullish" : losers > gainers ? "Bearish" : "Neutral";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-muted text-sm mt-1">
          Silicon Photonics &amp; Photonic AI investment tracker
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Top Gainer (1M)"
          value={topGainer ? topGainer.symbol : "—"}
          subtext={
            topGainer
              ? `+${topGainer.changePct.toFixed(2)}% · ${topGainer.longName}`
              : "Loading…"
          }
          trend="up"
          icon={TrendingUp}
        />
        <KPICard
          title="Top Loser (1M)"
          value={topLoser ? topLoser.symbol : "—"}
          subtext={
            topLoser
              ? `${topLoser.changePct.toFixed(2)}% · ${topLoser.longName}`
              : "Loading…"
          }
          trend="down"
          icon={TrendingDown}
        />
        <KPICard
          title="Market Sentiment"
          value={sentiment}
          subtext={`${gainers} up · ${losers} down · ${quotes.length - gainers - losers} flat`}
          trend={
            sentiment === "Bullish"
              ? "up"
              : sentiment === "Bearish"
              ? "down"
              : "neutral"
          }
          icon={Activity}
        />
        <KPICard
          title="SEC Filings (SiPh)"
          value={edgarCount > 0 ? edgarCount.toString() : "—"}
          subtext="8-K filings since Jan 2024"
          trend="neutral"
          icon={FileText}
        />
      </div>

      {/* Price Chart + Top Movers */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PriceChart symbol="AVGO" defaultRange="3M" />
        </div>

        {/* Top Movers */}
        <div className="bg-surface border border-border rounded-lg p-4">
          <h2 className="text-white font-semibold text-sm mb-3">
            Top Movers (1M)
          </h2>
          {sorted.length === 0 ? (
            <p className="text-muted text-sm">Loading market data…</p>
          ) : (
            <div className="space-y-0">
              <p className="text-xs text-muted mb-1 font-medium">Leaders</p>
              {sorted.slice(0, 4).map((q) => (
                <div
                  key={q.symbol}
                  className="flex items-center justify-between py-1.5 border-b border-border/50 last:border-0"
                >
                  <div>
                    <span className="font-mono text-accent text-sm font-bold">
                      {q.symbol}
                    </span>
                    <p className="text-muted text-xs">${q.price.toFixed(2)}</p>
                  </div>
                  <span className="font-mono text-sm font-semibold text-positive">
                    +{q.changePct.toFixed(2)}%
                  </span>
                </div>
              ))}
              <p className="text-xs text-muted mt-2 mb-1 font-medium">Laggards</p>
              {sorted
                .slice(-3)
                .reverse()
                .map((q) => (
                  <div
                    key={q.symbol}
                    className="flex items-center justify-between py-1.5 border-b border-border/50 last:border-0"
                  >
                    <div>
                      <span className="font-mono text-accent text-sm font-bold">
                        {q.symbol}
                      </span>
                      <p className="text-muted text-xs">${q.price.toFixed(2)}</p>
                    </div>
                    <span className="font-mono text-sm font-semibold text-negative">
                      {q.changePct.toFixed(2)}%
                    </span>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      {/* Upcoming Catalysts */}
      <div className="bg-surface border border-border rounded-lg p-4">
        <h2 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
          <AlertTriangle size={14} className="text-yellow-400" />
          Upcoming Catalysts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {UPCOMING_CATALYSTS.map((c, i) => (
            <div
              key={i}
              className="border border-border/60 rounded p-3 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={clsx("text-xs px-1.5 py-0.5 rounded font-medium", {
                    "bg-accent/10 text-accent": c.type === "milestone",
                    "bg-yellow-500/10 text-yellow-400": c.type === "earnings",
                    "bg-purple-500/10 text-purple-400":
                      c.type === "conference",
                  })}
                >
                  {c.type}
                </span>
                <span className="text-muted text-xs">{c.date}</span>
              </div>
              <p className="text-white text-sm font-medium">{c.event}</p>
              <p className="text-muted text-xs mt-1">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
