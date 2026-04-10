import { Metadata } from "next";
import MaterialsTable from "@/components/MaterialsTable";

export const metadata: Metadata = { title: "Materials" };

export default function MaterialsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">
          Key Photonic Materials
        </h1>
        <p className="text-muted text-sm mt-1">
          Supply chain risk analysis for the six critical materials
          underpinning silicon photonics and III-V photonic IC production.
        </p>
      </div>

      <MaterialsTable />

      <div className="bg-surface border border-border rounded-lg p-4">
        <h2 className="text-white font-semibold text-sm mb-2">
          Why Materials Matter for Photonic AI Investors
        </h2>
        <p className="text-muted text-sm leading-relaxed">
          Unlike digital semiconductors where silicon is essentially unlimited,
          photonics depends on exotic III-V compound semiconductors — Indium
          Phosphide, Gallium Arsenide — that are byproducts of base metal
          smelting. Supply cannot be ramped quickly. Companies with secured
          supply agreements or vertical integration (COHR, LITE, AXTI) carry
          structural moat. Export control risk on Germanium (China) and raw
          crystal growth (LiNbO₃) adds geopolitical overlay to the supply
          thesis.
        </p>
      </div>
    </div>
  );
}
