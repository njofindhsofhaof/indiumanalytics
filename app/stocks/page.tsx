import { Metadata } from "next";
import dynamic from "next/dynamic";
import StockTable from "@/components/StockTable";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = { title: "Stock Tracker" };

// Leaflet uses browser APIs — must load client-side only
const CompanyMap = dynamic(() => import("@/components/CompanyMap"), {
  ssr: false,
  loading: () => (
    <div className="bg-surface border border-border rounded-lg h-[536px] flex items-center justify-center">
      <span className="text-muted text-sm">Loading map…</span>
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
          17 stocks across semiconductors, photonics, networking, materials, and foundries.
          Prices update every 5 minutes via Yahoo Finance.
        </p>
      </div>

      <StockTable />

      <CompanyMap />

      <Disclaimer />
    </div>
  );
}
