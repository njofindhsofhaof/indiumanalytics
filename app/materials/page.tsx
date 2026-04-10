import { Metadata } from "next";
import MaterialsTable from "@/components/MaterialsTable";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = { title: "Materials" };

const MATERIAL_NEWS = [
  {
    material: "InP",
    title: "InP Supply Chain & Shortage Updates",
    url: "https://news.google.com/search?q=indium+phosphide+supply+shortage",
  },
  {
    material: "Ge",
    title: "Germanium Export Controls (China 2023+)",
    url: "https://news.google.com/search?q=germanium+export+controls+China",
  },
  {
    material: "LiNbO₃",
    title: "Thin-Film LiNbO₃ Scale-Up Progress",
    url: "https://news.google.com/search?q=thin+film+lithium+niobate+production",
  },
  {
    material: "GaAs",
    title: "Gallium Export Restrictions & Photonics",
    url: "https://news.google.com/search?q=gallium+export+restriction+photonics",
  },
  {
    material: "Si₃N₄",
    title: "Silicon Nitride Photonics Platform",
    url: "https://news.google.com/search?q=silicon+nitride+photonics+waveguide",
  },
  {
    material: "EOP",
    title: "EO Polymer Commercial Progress (LWLG)",
    url: "https://news.google.com/search?q=electro+optic+polymer+Lightwave+Logic",
  },
];

export default function MaterialsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">
          Key Photonic Materials
        </h1>
        <p className="text-muted text-sm mt-1">
          Supply chain risk analysis for the seven critical materials
          underpinning silicon photonics and III-V photonic IC production.
        </p>
      </div>

      <MaterialsTable />

      {/* Material News Grid */}
      <div className="bg-surface border border-border rounded-lg p-4">
        <h2 className="text-white font-semibold text-sm mb-3">
          Material News &amp; Updates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {MATERIAL_NEWS.map((item) => (
            <a
              key={item.material}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-border rounded-lg px-3 py-2.5 hover:border-accent/40 transition-colors group"
            >
              <span className="font-mono text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded flex-shrink-0">
                {item.material}
              </span>
              <p className="text-white text-xs flex-1 min-w-0 truncate group-hover:text-accent transition-colors">
                {item.title}
              </p>
              <ExternalLink
                size={11}
                className="text-muted flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          ))}
        </div>
      </div>

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
