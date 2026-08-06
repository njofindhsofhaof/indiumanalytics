import { Metadata } from "next";
import dynamic from "next/dynamic";
import SupplyChainDiagram from "@/components/SupplyChainDiagram";
import { AlertTriangle } from "lucide-react";
import Disclaimer from "@/components/Disclaimer";
import LastReviewed from "@/components/LastReviewed";

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
    title: "Germanium / Gallium export controls",
    desc: (
      <>
        <p className="mb-2">China controls ~98% of global gallium production and ~68% of germanium refining — both essential for III-V semiconductors and fiber-optic components. Beijing has escalated this leverage in three steps:</p>
        <ul className="list-disc list-inside space-y-1 mb-2 ml-1">
          <li><strong>August 2023:</strong> Export licensing requirements for Ge &amp; Ga take effect, immediately halting shipments. Gallium prices more than doubled within months.</li>
          <li><strong>December 2024:</strong> China upgrades to an outright ban on Ge, Ga, and antimony exports to the US, alongside tighter graphite controls.</li>
          <li><strong>March 2026:</strong> The US-specific ban is suspended until November 2026 amid trade negotiations — but the legal framework remains intact and can be reinstated at any time.</li>
        </ul>
        <p className="mb-2">The suspension is not a resolution. US trade data shows ~26% of germanium imports in 2024 still originated from China via third-country routing (notably Belgium), exposing the limits of outright bans when transshipment channels remain open. The structural vulnerability — no US gallium production, no strategic stockpile — has not changed.</p>
        <p><strong>Implication for photonics:</strong> InP and GaAs substrate suppliers remain exposed. Western foundries sourcing through Japanese and German intermediaries face cascading risk if Beijing tightens controls on those third-party channels.</p>
      </>
    ),
  },
  {
    level: "high" as const,
    title: "CoWoS packaging: easing, but oligopolistic",
    desc: (
      <>
        <p className="mb-2">CoWoS (Chip on Wafer on Substrate) — the advanced packaging technology enabling HBM integration in AI accelerators — was the primary supply chain bottleneck for AI hardware through 2024–2025. The picture in 2026 has shifted:</p>
        <ul className="list-disc list-inside space-y-1 mb-2 ml-1">
          <li><strong>Capacity ramp:</strong> TSMC scaled CoWoS from ~35,000 wafers/month (late 2024) to ~75,000–80,000 wafers/month (end 2025), targeting 120,000–130,000 by end 2026.</li>
          <li><strong>Outsourcing begins:</strong> TSMC is offloading an estimated 240,000–270,000 wafers/year to OSATs — primarily Amkor (~180–190K) and SPIL (~60–80K) — marking the first time CoWoS production meaningfully exits TSMC.</li>
          <li><strong>Demand remains hyper-concentrated:</strong> NVIDIA (~60%), Broadcom (~15%), AMD (~11%) collectively lock in ~85%+ of total 2026 CoWoS supply. Less than 15% is available to all other buyers.</li>
        </ul>
        <p>The bottleneck is loosening, but the market structure has not opened. For photonic chiplet developers seeking CoWoS-compatible packaging, scarcity has evolved from a technical constraint into a <strong>market access barrier</strong> — dominated by a handful of hyperscaler-adjacent chip companies with multi-year capacity reservations.</p>
      </>
    ),
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
                  <div className="text-muted text-sm leading-relaxed space-y-2">{bn.desc}</div>
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

      <Disclaimer />
      <LastReviewed date="August 2026" />
    </div>
  );
}
