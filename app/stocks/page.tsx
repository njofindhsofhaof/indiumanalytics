import { Metadata } from "next";
import dynamic from "next/dynamic";
import StockTable from "@/components/StockTable";

export const metadata: Metadata = { title: "Stock Tracker" };

// Recharts uses browser APIs (ResizeObserver, window) — must load client-side only
const PriceChart = dynamic(() => import("@/components/PriceChart"), {
  ssr: false,
  loading: () => (
    <div className="bg-surface border border-border rounded-lg p-4 h-[262px] flex items-center justify-center">
      <span className="text-muted text-sm">Loading chart…</span>
    </div>
  ),
});

export default function StocksPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">
          Silicon Photonics Watchlist
        </h1>
        <p className="text-muted text-sm mt-1">
          12 stocks across semiconductors, photonics, materials, and foundries.
          Prices update every 5 minutes via Yahoo Finance.
        </p>
      </div>

      <StockTable />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PriceChart symbol="AVGO" defaultRange="3M" />
        <PriceChart symbol="MRVL" defaultRange="3M" />
        <PriceChart symbol="COHR" defaultRange="3M" />
        <PriceChart symbol="FN" defaultRange="3M" />
      </div>
    </div>
  );
}
