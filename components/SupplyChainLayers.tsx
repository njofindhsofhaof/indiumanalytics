"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

type Actor = {
  name: string;
  role: string;
  hq: string;
};

type Layer = {
  title: string;
  sub: string;
  risk: "critical" | "high" | "developing" | "bottleneck" | "watch";
  dot: string;
  body: string[];
  actors: Actor[];
  concentration?: { label: string; pct: number; color: string };
};

const RISK_LABEL: Record<Layer["risk"], string> = {
  critical:    "Critical Risk",
  high:        "High Risk",
  developing:  "Developing",
  bottleneck:  "Bottleneck",
  watch:       "Watch List",
};

const RISK_CLASS: Record<Layer["risk"], string> = {
  critical:   "bg-red-500/10 text-red-400 border border-red-500/20",
  high:       "bg-orange-500/10 text-orange-400 border border-orange-500/20",
  developing: "bg-accent/10 text-accent border border-accent/20",
  bottleneck: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
  watch:      "bg-positive/10 text-positive border border-positive/20",
};

const BAR_COLOR: Record<string, string> = {
  red:    "bg-red-500",
  amber:  "bg-orange-400",
  accent: "bg-accent",
  green:  "bg-positive",
};

const LAYERS: Layer[] = [
  {
    title: "Layer 1 — Raw Materials",
    sub: "Silicon, indium, germanium, rare earth inputs",
    risk: "critical",
    dot: "bg-red-500",
    body: [
      "Silicon wafers are the base substrate for all SiPh devices. The 300mm wafer market is dominated by two Japanese companies — Shin-Etsu Chemical and SUMCO — which together control over 50% of global supply. GlobalWafers (Taiwan), Siltronic (Germany), and SK Siltron (Korea) account for most of the remainder.",
      "For photonic-specific functions, the critical scarce materials are: indium phosphide (InP) — the substrate for III-V laser integration — controlled primarily by AXT Inc. (USA) and Sumitomo Electric (Japan); germanium — essential for on-chip photodetectors — where China controls upstream feedstock and implemented export restrictions in 2023; and lithium niobate (LiNbO₃) — emerging as the modulator platform of choice — where China controls the majority of raw boule production.",
      "Rare earths (neodymium, dysprosium) used in magnets and lasers are ~70% sourced from China at mining stage, rising to ~85% at refining.",
    ],
    actors: [
      { name: "Shin-Etsu", role: "Si wafers", hq: "Japan · ~30% global share" },
      { name: "SUMCO", role: "Si wafers", hq: "Japan · ~25% global share" },
      { name: "AXT Inc.", role: "InP substrates", hq: "USA · duopoly w/ Sumitomo" },
      { name: "NanoLN", role: "LNOI wafers", hq: "China · dominant TFLN" },
      { name: "Umicore", role: "Ge feedstock", hq: "Belgium · key western" },
      { name: "GlobalWafers", role: "Si wafers", hq: "Taiwan · 300mm" },
    ],
    concentration: { label: "Geographic concentration — top 2 suppliers, Si wafer 300mm", pct: 55, color: "red" },
  },
  {
    title: "Layer 2 — Wafer Processing & Epitaxy",
    sub: "SOI wafers, Ge epitaxy, III-V bonding",
    risk: "high",
    dot: "bg-orange-400",
    body: [
      "Silicon-on-insulator (SOI) wafers — the actual starting substrate for most SiPh PICs — require an additional processing step beyond standard Si wafers. Soitec (France) dominates SOI wafer production globally using its SmartCut™ ion implantation process, holding approximately 80% of global SOI supply.",
      "Germanium epitaxial growth on silicon is a technically demanding process requiring dedicated MOCVD tools. SiPh foundries with in-house Ge-on-Si capability have a significant moat — Ge photodetectors achieve responsivity >0.8 A/W at 1550nm, making them irreplaceable in all current receiver architectures. The damascene Ge growth process requires tight control of a ~4.2% lattice mismatch with silicon.",
      "Thin-film lithium niobate on insulator (LNOI) requires wafer-scale bonding of LiNbO₃ films onto Si₃N₄ substrates — a process demonstrated at wafer scale by ETH Zürich/IBM in 2023 and now at early commercialization. NanoLN supplies 100mm LNOI wafers; 200mm scale-up is in development but not yet commercial.",
    ],
    actors: [
      { name: "Soitec", role: "SOI wafers", hq: "France · SmartCut™ IP" },
      { name: "TSMC", role: "Ge-on-Si epitaxy", hq: "Taiwan · 300mm CoWoS" },
      { name: "Tower Semi", role: "SiPh foundry + Ge", hq: "Israel/USA · PD200" },
      { name: "Imec", role: "R&D / PDK dev", hq: "Belgium · EU SiPh hub" },
    ],
    concentration: { label: "SOI wafer supply — Soitec market share (global, 200mm+)", pct: 80, color: "amber" },
  },
  {
    title: "Layer 3 — SiPh Foundry Ecosystem",
    sub: "PIC fabrication, process platforms, PDKs",
    risk: "developing",
    dot: "bg-accent",
    body: [
      "Unlike CMOS, which has consolidated around a handful of leading-edge foundries, silicon photonics fabs remain fragmented. There are approximately 4–8 CMOS foundries, 4 IDMs, and ~20 research institutes globally with mature SOI-PIC process flows on 200mm or 300mm wafers (IPSR-I, 2024). Most commercial fabs operate at 90–65–45nm CMOS nodes adapted for photonics.",
      "The most critical differentiation is whether a foundry offers a complete photonic process design kit (PDK): a validated library of passive and active components (waveguides, ring resonators, grating couplers, Mach-Zehnder modulators, Ge photodetectors) that design houses can use without process-level expertise. PDK maturity is the primary barrier to fabless SiPh design — unlike CMOS, where major EDA-foundry PDK partnerships are well established.",
      "Tower Semiconductor's PD200 platform and GlobalFoundries' Fotonix platform are the leading commercial open-access offerings. TSMC operates a SiPh process tied to AI chip co-packaging (CoWoS) but is not generally open-access. Imec (Belgium) serves as the primary open-access research platform in Europe.",
    ],
    actors: [
      { name: "TSMC", role: "SiPh + CoWoS", hq: "Taiwan · AI-linked CPO" },
      { name: "Tower Semi (TSEM)", role: "PD200 platform", hq: "Israel/USA · open-access" },
      { name: "GlobalFoundries", role: "Fotonix (GF45)", hq: "USA · 300mm SiPh" },
      { name: "AMF", role: "Multi-project wafer", hq: "Singapore · MPW runs" },
      { name: "Cornerstone", role: "R&D foundry", hq: "UK · silicon nitride" },
      { name: "Imec", role: "Research fab", hq: "Belgium · iSiPP platform" },
    ],
  },
  {
    title: "Layer 4 — III-V Laser Integration",
    sub: "InP lasers, bonding, heterogeneous integration",
    risk: "critical",
    dot: "bg-red-500",
    body: [
      "Silicon does not emit light efficiently — this is the fundamental materials limitation of silicon photonics. All current SiPh platforms require an external laser source, whether co-packaged (InP DFB laser bonded to the PIC), in-package (separate component), or remote (fiber-coupled). This III-V integration step is the most fragile node in the SiPh supply chain.",
      "InP-based lasers require InP substrates (sourced from AXT/Sumitomo), MOCVD epitaxial growth, and either flip-chip bonding, wafer bonding, or transfer printing to the Si PIC. Each approach introduces yield loss — current III-V bonding processes carry approximately 30% yield penalty. Companies like Coherent, Lumentum, and POET Technologies are pursuing different paths to solve this integration problem.",
      "POET's optical interposer approach — monolithically integrating III-V and Si photonics on a shared substrate without wafer bonding — is the most differentiated attempt to eliminate this yield bottleneck. Volume production remains to be demonstrated at commercial scale.",
    ],
    actors: [
      { name: "Coherent (COHR)", role: "InP laser + integration", hq: "USA · vertically integrated" },
      { name: "Lumentum (LITE)", role: "InP DFB lasers", hq: "USA · CPO supply" },
      { name: "POET Technologies", role: "Optical interposer", hq: "Canada · pre-revenue" },
      { name: "DenseLight", role: "InP epitaxy", hq: "Singapore · POET partner" },
      { name: "Sumitomo Electric", role: "InP substrates", hq: "Japan · duopoly w/ AXT" },
    ],
    concentration: { label: "InP substrate suppliers — top 2 global market share", pct: 75, color: "red" },
  },
  {
    title: "Layer 5 — Advanced Packaging & CPO",
    sub: "CoWoS, co-packaged optics, optical I/O chiplets",
    risk: "bottleneck",
    dot: "bg-orange-400",
    body: [
      "Advanced packaging is the hidden bottleneck of the AI chip supply chain — and co-packaged optics (CPO) sits at the frontier of this layer. TSMC's CoWoS (Chip-on-Wafer-on-Substrate) is the dominant advanced packaging platform for AI accelerators. Monthly CoWoS output roughly doubled in 2024 (from ~35,000 to ~75,000 wafer starts/month) and TSMC targets ~130,000 by 2026 — yet demand continues to outpace supply.",
      "The top four AI chip designers consumed approximately 90% of global advanced packaging and HBM supply in 2025. This concentration means the SiPh optical I/O chiplets that enable CPO must compete for packaging capacity against pure-electrical compute dies.",
      "For the 51.2 Tb/s switch generation (2025–2026), CPO becomes economically compelling: pluggable transceiver cost at that bandwidth is approximately $8,000 per switch vs. ~$3,200 for embedded CPO — a ~$4,800 per-switch BOM saving that hyperscalers cannot ignore at scale.",
    ],
    actors: [
      { name: "TSMC CoWoS", role: "Advanced packaging", hq: "Taiwan · dominant platform" },
      { name: "Ayar Labs", role: "TeraPHY optical I/O", hq: "USA · TSMC-integrated" },
      { name: "Broadcom (AVGO)", role: "CPO switch ASICs", hq: "USA · Tomahawk 5" },
      { name: "Marvell (MRVL)", role: "CPO switch ASICs", hq: "USA · Teralynx 10" },
      { name: "Cisco", role: "CPO-ready switches", hq: "USA · Silicon One" },
    ],
  },
  {
    title: "Layer 6 — Emerging Material Platforms",
    sub: "TFLN, EO polymers, silicon nitride",
    risk: "watch",
    dot: "bg-positive",
    body: [
      "Three material platforms are competing to extend SiPh performance beyond what silicon alone can deliver, each targeting different parts of the performance envelope.",
      "Thin-film lithium niobate (TFLN) enables electro-optic modulation at CMOS-compatible voltages with bandwidths exceeding 100 GHz — far beyond silicon's plasma dispersion limit (~50 GHz). ETH Zürich / IBM demonstrated wafer-scale heterogeneous LiNbO₃-on-Si₃N₄ bonding in 2023, a foundry-ready solution. The supply chain constraint: NanoLN (China) dominates X-cut LNOI wafer supply at 100mm; 200mm scale-up is in progress but not yet commercial.",
      "Electro-optic polymers (EOP) — the platform pursued by Lightwave Logic (LWLG) — offer theoretical modulation bandwidths exceeding 1 THz. If manufacturable at volume, they would enable 200 Gbaud+ signaling that no crystalline material can match. Manufacturing yield and long-term stability remain the key unknowns.",
      "Silicon nitride (Si₃N₄) is a more mature platform used for low-loss passive waveguides, nonlinear optics, and rack-scale optical fabrics. Propagation losses below 0.1 dB/cm have been demonstrated. Cornerstone (UK) and EPFL are key research foundries; commercial production exists at several CMOS fabs.",
    ],
    actors: [
      { name: "Lightwave Logic", role: "EO polymer (LWLG)", hq: "USA · pre-commercial" },
      { name: "NanoLN", role: "LNOI wafers", hq: "China · 100mm dominant" },
      { name: "HyperLight", role: "TFLN foundry", hq: "USA · MIT spinout" },
      { name: "Sandia Labs", role: "Si₃N₄ R&D", hq: "USA · government fab" },
    ],
  },
];

export default function SupplyChainLayers() {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (i: number) => setActive(active === i ? null : i);

  return (
    <div className="flex flex-col gap-1.5">
      {LAYERS.map((layer, i) => {
        const open = active === i;
        return (
          <div
            key={i}
            className={clsx(
              "border rounded-lg overflow-hidden transition-colors",
              open ? "border-accent/40" : "border-border hover:border-border/80"
            )}
          >
            {/* Header */}
            <button
              className="w-full flex items-center gap-3 px-4 py-3 bg-surface text-left"
              onClick={() => toggle(i)}
            >
              <span className={clsx("w-2 h-2 rounded-full flex-shrink-0", layer.dot)} />
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate">{layer.title}</p>
                <p className="text-muted text-xs mt-0.5 hidden sm:block truncate">{layer.sub}</p>
              </div>
              <span className={clsx("text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 hidden sm:inline-flex", RISK_CLASS[layer.risk])}>
                {RISK_LABEL[layer.risk]}
              </span>
              <ChevronDown
                size={14}
                className={clsx("text-muted flex-shrink-0 transition-transform duration-200", open && "rotate-180")}
              />
            </button>

            {/* Body */}
            {open && (
              <div className="px-5 pb-5 pt-4 border-t border-border bg-[#0d1117]">
                {layer.body.map((para, j) => (
                  <p key={j} className="text-muted text-sm leading-relaxed mb-3 last:mb-0">
                    {para}
                  </p>
                ))}

                {/* Actors grid */}
                <p className="text-xs font-semibold uppercase tracking-widest text-muted/50 mt-5 mb-2.5">
                  Key actors
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {layer.actors.map((a) => (
                    <div key={a.name} className="bg-surface border border-border rounded-lg px-3 py-2.5">
                      <p className="text-white text-xs font-medium">{a.name}</p>
                      <p className="text-muted text-xs mt-0.5">{a.role}</p>
                      <p className="text-muted/60 text-xs mt-0.5 font-mono">{a.hq}</p>
                    </div>
                  ))}
                </div>

                {/* Concentration bar */}
                {layer.concentration && (
                  <div className="mt-4 bg-surface border border-border rounded-lg px-3 py-3">
                    <p className="text-muted text-xs mb-2">{layer.concentration.label}</p>
                    <div className="h-1.5 bg-border rounded-full overflow-hidden">
                      <div
                        className={clsx("h-full rounded-full", BAR_COLOR[layer.concentration.color])}
                        style={{ width: `${layer.concentration.pct}%` }}
                      />
                    </div>
                    <p className="text-muted/60 text-xs mt-1.5 font-mono">{layer.concentration.pct}% concentrated</p>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
