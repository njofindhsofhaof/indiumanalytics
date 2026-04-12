import { Metadata } from "next";
import dynamic from "next/dynamic";
import SupplyChainDiagram from "@/components/SupplyChainDiagram";
import { AlertTriangle } from "lucide-react";

const SupplyChainLayers = dynamic(
  () => import("@/components/SupplyChainLayers"),
  { ssr: false }
);

export const metadata: Metadata = { title: "Supply Chain" };

const BOTTLENECKS = [
  {
    level: "critical" as const,
    title: "InP substrate duopoly",
    desc: "AXT (USA) and Sumitomo Electric (Japan) control InP wafer supply globally. No new capacity expansion has been announced. Indium is a byproduct of zinc smelting — supply cannot be ramped on a chip-fab timeline.",
  },
  {
    level: "critical" as const,
    title: "Germanium export controls",
    desc: "China implemented Ge export restrictions in August 2023. Western foundries have an estimated 12–18 months of strategic inventory. After that window, photodetector supply chains face a hard constraint unless non-Chinese feedstock or recycling routes can fill the gap.",
  },
  {
    level: "high" as const,
    title: "CoWoS capacity constraint",
    desc: "TSMC's CoWoS advanced packaging is severely oversubscribed. The four largest AI chip designers consumed ~90% of global supply in 2025. SiPh optical I/O chiplets must compete for the same packaging slots as GPU dies.",
  },
  {
    level: "high" as const,
    title: "SOI wafer monoculture",
    desc: "Soitec controls approximately 80% of global SOI wafer supply via its SmartCut™ process IP. Unlike standard Si wafers (5 major suppliers), SOI has a single effective supplier. Any production disruption at Soitec propagates directly to every SiPh fab.",
  },
  {
    level: "medium" as const,
    title: "PDK fragmentation",
    desc: "Unlike CMOS, there is no standard SiPh process design kit shared across foundries. Each fab has proprietary component libraries — a design optimized for Tower's PD200 cannot be ported to GF45 without significant re-characterization. This slows ecosystem development and prevents the second-sourcing that mature supply chains depend on.",
  },
];

const BN_COLORS = {
  critical: { dot: "bg-red-500", text: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
  high:     { dot: "bg-orange-400", text: "text-orange-400", bg: "bg-orange-400/10 border-orange-400/20" },
  medium:   { dot: "bg-accent", text: "text-accent", bg: "bg-accent/10 border-accent/20" },
};

export default function SupplyChainPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">SiPh Supply Chain</h1>
        <p className="text-muted text-sm mt-2 leading-relaxed max-w-2xl">
          Silicon photonics doesn&apos;t have its own supply chain — it inherits one from the $700B
          silicon IC industry, then adds a thin layer of photonic-specific materials and processes on top.
          That inheritance is both a strength and a vulnerability: world-class CMOS infrastructure is
          available, but photonic-specific inputs (InP substrates, germanium epitaxy, thin-film lithium
          niobate) sit at the end of extremely concentrated supply lines.
        </p>
        <p className="text-muted text-sm mt-2 leading-relaxed max-w-2xl">
          This page maps the six layers of the SiPh supply chain, from raw materials to emerging
          platforms, highlighting where concentration creates risk and which players control each chokepoint.
        </p>
      </div>

      {/* Visual flow diagram */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted/50 mb-3">
          Supply chain overview
        </p>
        <div className="max-w-4xl">
          <SupplyChainDiagram />
        </div>
      </div>

      {/* Expandable layer detail cards */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted/50 mb-3">
          Supply chain layers — click to expand
        </p>
        <div className="max-w-4xl">
          <SupplyChainLayers />
        </div>
      </div>

      {/* Structural bottlenecks */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted/50 mb-3 flex items-center gap-2">
          <AlertTriangle size={11} className="text-orange-400" />
          Structural bottlenecks
        </p>
        <div className="max-w-4xl flex flex-col gap-2">
          {BOTTLENECKS.map((bn) => {
            const c = BN_COLORS[bn.level];
            return (
              <div
                key={bn.title}
                className="flex items-start gap-4 bg-surface border border-border rounded-lg px-4 py-3"
              >
                <span className={`w-2 h-2 rounded-full flex-shrink-0 mt-1.5 ${c.dot}`} />
                <div>
                  <p className={`text-sm font-medium mb-1 ${c.text}`}>{bn.title}</p>
                  <p className="text-muted text-sm leading-relaxed">{bn.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Risk legend */}
      <div className="bg-surface border border-border rounded-lg p-4 max-w-4xl">
        <h2 className="text-white font-semibold text-sm mb-3">Supply Risk Legend</h2>
        <div className="flex flex-wrap gap-4">
          {[
            { label: "Critical",    color: "bg-red-500" },
            { label: "High",        color: "bg-orange-400" },
            { label: "Developing",  color: "bg-accent" },
            { label: "Bottleneck",  color: "bg-orange-400" },
            { label: "Watch List",  color: "bg-positive" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
              <span className="text-muted text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
