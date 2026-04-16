const STATUS_COLORS = {
  teal:  { border: "border-teal-500/30",   bg: "bg-teal-500/5",   dot: "bg-teal-400",   text: "text-teal-400",   badge: "bg-teal-500/10 text-teal-400 border-teal-500/20",   bar: "bg-teal-400"   },
  blue:  { border: "border-blue-500/30",   bg: "bg-blue-500/5",   dot: "bg-blue-400",   text: "text-blue-400",   badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",   bar: "bg-blue-400"   },
  amber: { border: "border-orange-500/30", bg: "bg-orange-500/5", dot: "bg-orange-400", text: "text-orange-400", badge: "bg-orange-500/10 text-orange-400 border-orange-500/20", bar: "bg-orange-400" },
};

type Color = keyof typeof STATUS_COLORS;
type Segment   = { label: string; trl: string; pct: number };
type Milestone = { date: string; desc: string };
type Challenge = { title: string; detail: string };
type Layer = {
  color: Color;
  title: string;
  trlRange: string;
  status: string;
  segments: Segment[];
  milestones: Milestone[];
  challenges?: Challenge[];
};

const LAYERS: Layer[] = [
  {
    color: "teal",
    title: "Layer 1 — Interconnect",
    trlRange: "8–9 / 9",
    status: "Commercial · At scale",
    segments: [
      { label: "Rack-to-rack fiber optic",  trl: "TRL 9",   pct: 100 },
      { label: "Co-packaged optics (CPO)",  trl: "TRL 7–8", pct: 83  },
      { label: "Chip-to-chip optical",      trl: "TRL 6–7", pct: 72  },
      { label: "Board-level optical",       trl: "TRL 5–6", pct: 61  },
    ],
    milestones: [
      {
        date: "Today",
        desc: "Tens of millions of SiPh transceivers deployed per year across hyperscaler data centers (NVIDIA, Google, Amazon). Optical I/O reaches 4 Tb/s, 5 ns latency, 5 pJ/bit — 10× more efficient than electronics at the same speed.",
      },
      {
        date: "Mar 2025",
        desc: "NVIDIA Spectrum-X Co-Packaged Optics launch (TSMC, Coherent, Corning, Lumentum consortium). Direct photonic connection to chipset — 3.5× electrical efficiency, 4× fewer lasers, 63× better signal integrity.",
      },
      {
        date: "2025–2027",
        desc: "Lightmatter Passage + Celestial AI photonic fabric. Photonic interposer connects GPU clusters, solving bandwidth bottleneck between compute nodes.",
      },
      {
        date: "2027–2030",
        desc: "Board-to-board optical inside servers — not just between servers. CPU/GPU boards connected directly via fiber, eliminating electrical signaling at board level.",
      },
    ],
  },
  {
    color: "blue",
    title: "Layer 2 — Photonic Switch",
    trlRange: "5–7 / 9",
    status: "Pilot · Early commercial",
    segments: [
      { label: "ASIC + CPO switch",             trl: "TRL 7",   pct: 78 },
      { label: "Fully photonic switch",          trl: "TRL 5–6", pct: 61 },
      { label: "Photonic AI-optimised switch",   trl: "TRL 3–4", pct: 39 },
    ],
    milestones: [
      {
        date: "Today",
        desc: "Electronic switch + CPO (ASIC + optics). The switching ASIC still computes with electrons — photons handle data in/out only. NVIDIA, Arista, and Cisco are at this stage.",
      },
      {
        date: "2025–2026",
        desc: "IPRONICS ONE — fully photonic switch. Both chip and connections are a photonic integrated circuit (PIC). IPRONICS (Spain) and Lumentum (US) shipping product. Photon routing instead of electron routing — much lower latency and power.",
      },
      {
        date: "2027–2030",
        desc: "Photonic AI switch becomes standard in hyperscale data centers, replacing all spine/leaf electronic switches. Major reduction in inter-server latency and network power consumption.",
      },
    ],
  },
  {
    color: "amber",
    title: "Layer 3 — Photonic Processor",
    trlRange: "3–5 / 9",
    status: "Research · No production chip yet",
    segments: [
      { label: "Matrix multiply (ONN)",   trl: "TRL 4–5", pct: 50 },
      { label: "Full DNN on single chip", trl: "TRL 3–4", pct: 39 },
      { label: "Programmable processor",  trl: "TRL 3–4", pct: 39 },
      { label: "Production-ready chip",   trl: "TRL 1–2", pct: 17 },
    ],
    milestones: [
      {
        date: "Dec 2024",
        desc: "MIT executes a full DNN entirely in the optical domain (Nature Photonics). First single chip running a deep neural network purely in light with no mid-layer electronic conversion — the most important proof-of-concept of the decade.",
      },
      {
        date: "2024",
        desc: "Taichi chip — 160 TOPS/W (Science 2024). Large-scale photonic chiplet achieves 160 TOPS/W, 50–160× more efficient than current GPUs. Runs image recognition. Lab chip with peer-reviewed performance.",
      },
      {
        date: "2025",
        desc: "LightIn — programmable photonic processor (arXiv 2025). 40 MZI programmable unit cells, 3.8×3 mm². Runs matrix multiply, image recognition, channel switching, and PUF security on one chip.",
      },
      {
        date: "2025",
        desc: "64×64 photonic accelerator — 1 GHz MAC, 7.61-bit precision (Nature). 65nm SiPh + 28nm CMOS co-packaged, 16,000+ photonic components. Runs max-cut optimization.",
      },
      {
        date: "2027–2030",
        desc: "First production photonic AI accelerators for niche workloads. Inference-specific first, training later. Lightmatter and Celestial AI are targeting this phase.",
      },
      {
        date: "2030+",
        desc: "Photonic TPU in AI data centers — the ultimate goal. Silicon-photonic AI accelerators become standard in hyperscale, especially for bandwidth-bound training and inference.",
      },
    ],
    challenges: [
      {
        title: "Precision limited to 7–8 bit",
        detail: "Versus GPU 16–32 bit. Sufficient for inference workloads, not yet sufficient for large LLM training.",
      },
      {
        title: "Noise accumulation",
        detail: "Builds across multiple waveguide layers — requires continuous calibration that is difficult to automate at scale.",
      },
      {
        title: "Analog-digital conversion overhead",
        detail: "Each optical-to-electrical conversion consumes power, eroding the efficiency advantage. Many benchmark figures measure only the optical portion, excluding ADC, laser source, and electronic control.",
      },
    ],
  },
];

export default function PhotonicStages() {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-white font-semibold text-sm">
          Photonic AI — Current Development Stages
        </h2>
        <span className="text-muted text-xs">3 parallel layers · TRL 1–9</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {LAYERS.map((layer) => {
          const c = STATUS_COLORS[layer.color];
          return (
            <div key={layer.title} className={`border ${c.border} ${c.bg} rounded-lg p-4 flex flex-col gap-4`}>

              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />
                  <h3 className={`text-sm font-semibold ${c.text}`}>{layer.title}</h3>
                </div>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full border ${c.badge}`}>
                    TRL {layer.trlRange}
                  </span>
                  <span className="text-muted text-xs">{layer.status}</span>
                </div>
              </div>

              {/* TRL segments */}
              <div className="space-y-2">
                {layer.segments.map((seg) => (
                  <div key={seg.label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-muted text-xs truncate pr-2">{seg.label}</span>
                      <span className={`text-xs font-mono flex-shrink-0 ${c.text}`}>{seg.trl}</span>
                    </div>
                    <div className="h-1 bg-border rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${c.bar}`} style={{ width: `${seg.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline */}
              <div className="space-y-3 border-t border-border/40 pt-3">
                {layer.milestones.map((m) => (
                  <div key={m.date} className="flex gap-2.5">
                    <span className={`text-xs font-mono font-bold flex-shrink-0 ${c.text} w-20`}>{m.date}</span>
                    <p className="text-muted text-xs leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>

              {/* Technical challenges (Layer 3 only) */}
              {layer.challenges && (
                <div className="border-t border-border/40 pt-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted/50 mb-2">
                    Technical challenges
                  </p>
                  <div className="space-y-2.5">
                    {layer.challenges.map((ch) => (
                      <div key={ch.title} className="flex gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${c.dot}`} />
                        <div>
                          <p className="text-white text-xs font-medium">{ch.title}</p>
                          <p className="text-muted text-xs leading-relaxed mt-0.5">{ch.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
