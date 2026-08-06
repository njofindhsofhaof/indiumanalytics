import { renderRichText } from "@/lib/richText";

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
      { label: "Co-packaged optics (CPO)",  trl: "TRL 8–9", pct: 92  },
      { label: "Chip-to-chip optical",      trl: "TRL 7–8", pct: 83  },
      { label: "Board-level optical",       trl: "TRL 6–7", pct: 72  },
    ],
    milestones: [
      {
        date: "2026 (Now)",
        desc: "1.6T transceivers entering volume deployment at hyperscalers. CPO at 51.2 Tb/s switches now standard in new datacenter builds. NVIDIA, Google, Amazon, and Microsoft committed to optical I/O-first architectures through 2028 capex cycles.",
      },
      {
        date: "Mar 2025",
        desc: "NVIDIA Spectrum-X Co-Packaged Optics launched (TSMC, Coherent, Corning, Lumentum consortium). Direct photonic connection to chipset — 3.5× electrical efficiency, 4× fewer lasers, 63× better signal integrity.",
      },
      {
        date: "2026–2027",
        desc: "Lightmatter Passage L200/L200X entering customer chip integration in 2026 via GlobalFoundries, ASE, and Amkor; production systems targeted for 2027. Celestial AI photonic fabric in customer evaluation. Photonic interposer connecting GPU clusters at rack scale — targeting 1 Pb/s aggregate bandwidth.",
      },
      {
        date: "2027–2030",
        desc: "Board-to-board optical inside servers — CPU/GPU boards connected directly via fiber, eliminating electrical signaling at board level. Si₃N₄ optical backplanes targeted.",
      },
    ],
  },
  {
    color: "blue",
    title: "Layer 2 — Photonic Switch",
    trlRange: "6–8 / 9",
    status: "Early commercial · Scaling",
    segments: [
      { label: "ASIC + CPO switch",             trl: "TRL 8",   pct: 89 },
      { label: "Fully photonic switch",          trl: "TRL 6–7", pct: 72 },
      { label: "Photonic AI-optimised switch",   trl: "TRL 4–5", pct: 50 },
    ],
    milestones: [
      {
        date: "2026 (Now)",
        desc: "ASIC + CPO switches now at third-generation CPO: Broadcom shipped **Tomahawk 6 – Davisson (102.4 Tb/s CPO)** in October 2025, doubling the bandwidth of Tomahawk 5 (51.2 Tb/s). Marvell Teralynx 10 remains in production deployment. CPO is now economically preferred over pluggables at hyperscale density. [[AMD acquired Enosemi (May 2025)|https://www.amd.com/en/blogs/2025/amd-acquires-enosemi-to-accelerate-co-packaged-optics-innovation.html]] to accelerate photonic interconnect manufacturing.",
      },
      {
        date: "2025–2026",
        desc: "IPRONICS ONE and Lumentum fully photonic switch PICs sampling to Tier 1 OEMs. Photon routing instead of electron routing — sub-nanosecond switching latency demonstrated in lab.",
      },
      {
        date: "2027–2030",
        desc: "Photonic AI switch becomes standard in hyperscale spine/leaf architecture. AI-optimised optical flow steering — major reduction in inter-server latency and network power consumption.",
      },
    ],
  },
  {
    color: "amber",
    title: "Layer 3 — Photonic Processor",
    trlRange: "3–5 / 9",
    status: "Research · Pre-production",
    segments: [
      { label: "Matrix multiply (ONN)",   trl: "TRL 5",   pct: 56 },
      { label: "Full DNN on single chip", trl: "TRL 4–5", pct: 50 },
      { label: "Programmable processor",  trl: "TRL 3–4", pct: 39 },
      { label: "Production-ready chip",   trl: "TRL 2–3", pct: 25 },
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
        desc: "LightIn — programmable photonic processor (arXiv). 40 MZI programmable unit cells, 3.8×3 mm². Runs matrix multiply, image recognition, channel switching, and PUF security on one chip.",
      },
      {
        date: "2025",
        desc: "64×64 photonic accelerator — 1 GHz MAC, 7.61-bit precision (Nature). 65nm SiPh + 28nm CMOS co-packaged, 16,000+ photonic components. Runs max-cut optimization.",
      },
      {
        date: "2026 (Now)",
        desc: "Celestial AI in A/B customer tape-outs. No production silicon yet — still pre-revenue. EO polymer modulators (LWLG) and TFLN platforms at pilot-scale validation for 200Gbaud+ applications.",
      },
      {
        date: "2027–2030",
        desc: "First production photonic AI accelerators for inference-specific niche workloads. Lightmatter Passage and Celestial AI targeting early revenue at specialized HPC/AI deployments.",
      },
      {
        date: "2030+",
        desc: "Photonic TPU in hyperscale AI datacenters — the ultimate goal. Silicon-photonic AI accelerators standard for bandwidth-bound training and inference at scale.",
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
                {layer.milestones.map((m, i) => (
                  <div key={i} className="flex gap-2.5">
                    <span className={`text-xs font-mono font-bold flex-shrink-0 ${c.text} w-20`}>{m.date}</span>
                    <p
                      className="text-muted text-xs leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: renderRichText(m.desc) }}
                    />
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
