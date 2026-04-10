import { Metadata } from "next";
import StockTable from "@/components/StockTable";
import PriceChart from "@/components/PriceChart";

export const metadata: Metadata = { title: "Stock Tracker" };

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
