import { Metadata } from "next";
import SupplyChainDiagram from "@/components/SupplyChainDiagram";

export const metadata: Metadata = { title: "Supply Chain" };

export default function SupplyChainPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">
          Photonic Supply Chain Map
        </h1>
        <p className="text-muted text-sm mt-1">
          End-to-end supply chain from raw materials to hyperscaler deployment.
          Critical nodes highlighted by supply risk.
        </p>
      </div>

      <div className="max-w-4xl">
        <SupplyChainDiagram />
      </div>

      {/* Legend */}
      <div className="bg-surface border border-border rounded-lg p-4 max-w-4xl">
        <h2 className="text-white font-semibold text-sm mb-3">Supply Risk Legend</h2>
        <div className="flex flex-wrap gap-4">
          {[
            { label: "Critical", color: "bg-negative" },
            { label: "High", color: "bg-orange-400" },
            { label: "Medium", color: "bg-yellow-400" },
            { label: "Low", color: "bg-positive" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
              <span className="text-muted text-sm">{item.label}</span>
            </div>
          ))}
        </div>
        <p className="text-muted text-xs mt-3">
          InP (Indium Phosphide) and Electro-Optic Polymers are the two most
          critical single-point-of-failure nodes in the photonic AI supply
          chain.
        </p>
      </div>
    </div>
  );
}
