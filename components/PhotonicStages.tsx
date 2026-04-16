const STATUS_COLORS = {
  teal:   { border: "border-teal-500/30",   bg: "bg-teal-500/5",   dot: "bg-teal-400",   text: "text-teal-400",   badge: "bg-teal-500/10 text-teal-400 border-teal-500/20",   bar: "bg-teal-400"   },
  blue:   { border: "border-blue-500/30",   bg: "bg-blue-500/5",   dot: "bg-blue-400",   text: "text-blue-400",   badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",   bar: "bg-blue-400"   },
  amber:  { border: "border-orange-500/30", bg: "bg-orange-500/5", dot: "bg-orange-400", text: "text-orange-400", badge: "bg-orange-500/10 text-orange-400 border-orange-500/20", bar: "bg-orange-400" },
};

type Color = keyof typeof STATUS_COLORS;

type Segment = { label: string; trl: string; pct: number };
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
    title: "Tầng 1 — Interconnect",
    trlRange: "8–9 / 9",
    status: "Thực tế · Commercial",
    segments: [
      { label: "Rack-to-rack fiber optic",   trl: "TRL 9",   pct: 100 },
      { label: "Co-packaged optics (CPO)",   trl: "TRL 7–8", pct: 83  },
      { label: "Chip-to-chip optical",       trl: "TRL 6–7", pct: 72  },
      { label: "Board-level optical",        trl: "TRL 5–6", pct: 61  },
    ],
    milestones: [
      {
        date: "Hiện tại",
        desc: "Hàng chục triệu SiPh transceivers/năm tại data center (NVIDIA, Google, Amazon). Optical I/O đạt 4 Tb/s, 5ns latency, 5pJ/bit — hiệu quả hơn điện tử 10× ở cùng tốc độ.",
      },
      {
        date: "3/2025",
        desc: "NVIDIA Spectrum-X Co-Packaged Optics ra mắt (TSMC, Coherent, Corning, Lumentum). Kết nối quang trực tiếp vào chipset — hiệu quả điện 3.5×, ít laser hơn 4×, tín hiệu tốt hơn 63×.",
      },
      {
        date: "2025–2027",
        desc: "Lightmatter Passage + Celestial AI photonic fabric. Interposer quang nối cụm GPU, giải quyết bottleneck băng thông.",
      },
      {
        date: "2027–2030",
        desc: "Board-to-board optical bên trong server (không chỉ giữa server). CPU/GPU boards kết nối trực tiếp qua fiber.",
      },
    ],
  },
  {
    color: "blue",
    title: "Tầng 2 — Photonic Switch",
    trlRange: "5–7 / 9",
    status: "Pilot · Early commercial",
    segments: [
      { label: "ASIC + CPO switch",          trl: "TRL 7",   pct: 78 },
      { label: "Fully photonic switch",      trl: "TRL 5–6", pct: 61 },
      { label: "Photonic AI-optimised switch", trl: "TRL 3–4", pct: 39 },
    ],
    milestones: [
      {
        date: "Hiện tại",
        desc: "Switch điện tử + CPO (ASIC + optics). Chip vẫn tính toán bằng electron — photon chỉ dùng cho data in/out. NVIDIA, Arista, Cisco đang ở đây.",
      },
      {
        date: "2025–2026",
        desc: "IPRONICS ONE — fully photonic switch. Cả chip lẫn kết nối đều là PIC. IPRONICS (Spain) và Lumentum (US) đang ship sản phẩm. Định tuyến photon thay electron — latency và công suất thấp hơn nhiều.",
      },
      {
        date: "2027–2030",
        desc: "Photonic AI switch trở thành tiêu chuẩn trong hyperscale data center. Thay thế toàn bộ spine/leaf switch điện tử. Giảm đáng kể latency inter-server và tiêu thụ điện mạng.",
      },
    ],
  },
  {
    color: "amber",
    title: "Tầng 3 — Photonic Processor",
    trlRange: "3–5 / 9",
    status: "Research · Chưa có production chip",
    segments: [
      { label: "Matrix multiply (ONN)",      trl: "TRL 4–5", pct: 50 },
      { label: "Full DNN on single chip",    trl: "TRL 3–4", pct: 39 },
      { label: "Programmable processor",     trl: "TRL 3–4", pct: 39 },
      { label: "Production-ready chip",      trl: "TRL 1–2", pct: 17 },
    ],
    milestones: [
      {
        date: "12/2024",
        desc: "MIT DNN hoàn toàn trong miền quang (Nature Photonics). Chip đầu tiên chạy deep neural network thuần túy bằng ánh sáng, không chuyển đổi điện tử giữa các lớp.",
      },
      {
        date: "2024",
        desc: "Taichi chip — 160 TOPS/W (Science 2024). Photonic chiplet quy mô lớn đạt 160 TOPS/W — hiệu quả gấp 50–160× GPU hiện tại. Chạy nhận diện ảnh.",
      },
      {
        date: "2025",
        desc: "LightIn — bộ xử lý quang lập trình được (arXiv 2025). 40 đơn vị MZI, 3.8×3mm². Chạy được matrix multiply, nhận diện ảnh, channel switching và PUF security trên một chip.",
      },
      {
        date: "2025",
        desc: "64×64 photonic accelerator, 1 GHz MAC, 7.61-bit precision (Nature). 65nm SiPh + 28nm CMOS co-packaged, 16,000+ photonic components. Chạy max-cut optimization.",
      },
      {
        date: "2027–2030",
        desc: "Accelerator quang AI sản xuất đầu tiên cho workload niche. Inference-specific trước, training sau. Lightmatter và Celestial AI nhắm mục tiêu giai đoạn này.",
      },
      {
        date: "2030+",
        desc: "Photonic TPU trong hyperscale data center — mục tiêu cuối. Accelerator AI silicon-quang trở thành tiêu chuẩn, đặc biệt cho training và inference bandwidth-bound.",
      },
    ],
    challenges: [
      {
        title: "Precision chỉ 7–8 bit",
        detail: "So với GPU 16–32 bit. Đủ cho inference, chưa đủ cho training LLM lớn.",
      },
      {
        title: "Tích lũy nhiễu",
        detail: "Qua nhiều lớp waveguide — đòi hỏi hiệu chỉnh liên tục, khó tự động hóa.",
      },
      {
        title: "ADC overhead",
        detail: "Mỗi chuyển đổi quang-điện tốn năng lượng, làm giảm lợi thế hiệu suất. Nhiều benchmark chỉ đo phần quang, không tính ADC, laser và điều khiển điện tử.",
      },
    ],
  },
];

export default function PhotonicStages() {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-white font-semibold text-sm">
          Photonic AI — Giai đoạn phát triển hiện tại
        </h2>
        <span className="text-muted text-xs">3 tầng song song · TRL 1–9</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {LAYERS.map((layer) => {
          const c = STATUS_COLORS[layer.color];
          return (
            <div
              key={layer.title}
              className={`border ${c.border} ${c.bg} rounded-lg p-4 flex flex-col gap-4`}
            >
              {/* Card header */}
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
                      <div
                        className={`h-full rounded-full ${c.bar}`}
                        style={{ width: `${seg.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline milestones */}
              <div className="space-y-3 border-t border-border/40 pt-3">
                {layer.milestones.map((m) => (
                  <div key={m.date} className="flex gap-2.5">
                    <span className={`text-xs font-mono font-bold flex-shrink-0 ${c.text} w-20`}>
                      {m.date}
                    </span>
                    <p className="text-muted text-xs leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>

              {/* Technical challenges (Layer 3 only) */}
              {layer.challenges && (
                <div className="border-t border-border/40 pt-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted/50 mb-2">
                    Thách thức kỹ thuật
                  </p>
                  <div className="space-y-2">
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

      <p className="text-muted/50 text-xs mt-2">
        Nguồn: TEMATYS · IPSR-I · arXiv 2025 · Nature 2024–2025
      </p>
    </div>
  );
}
