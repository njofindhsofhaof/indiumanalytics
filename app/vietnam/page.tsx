import { Metadata } from "next";
import { AlertTriangle, ExternalLink } from "lucide-react";

export const metadata: Metadata = { title: "Vietnam" };

interface PolicyRow {
  name: string;
  date: string;
  content: string;
  url: string | null;
}

const POLICIES: PolicyRow[] = [
  {
    name: "Decision 1018/QĐ-TTg",
    date: "Sept 21, 2024",
    content:
      'National semiconductor strategy to 2030 & vision 2050. "C = SET + 1" (Chip, Specialized, Electronics, Talent, +safe destination). Three phases.',
    url: "https://english.luatvietnam.vn/cong-nghiep/decision-1018-qd-ttg-2024-strategy-for-development-of-vietnams-semiconductor-industry-through-2030-366694-d1.html",
  },
  {
    name: "Program 1017",
    date: "Ongoing",
    content: "Semiconductor workforce development — target 50,000 engineers by 2030.",
    url: "https://en.vietnamplus.vn/vietnams-semiconductor-surge-underscores-mounting-demand-for-skilled-engineers-post333947.vnp",
  },
  {
    name: "Resolution 57-NQ/TW",
    date: "Late 2024",
    content:
      "Politburo sets science/tech, innovation, and digital transformation as strategic national pillars.",
    url: null,
  },
  {
    name: "Decree 57/2021/NĐ-CP",
    date: "2021",
    content: "Up to 15-year corporate income tax incentives for high-tech projects.",
    url: null,
  },
  {
    name: "PM Self-Sufficiency Target",
    date: "Aug 4, 2025",
    content:
      "PM Phạm Minh Chính: domestic design–manufacturing–test self-sufficiency by 2027.",
    url: "https://www.semi.org/sea/blogs/Vietnams-Semiconductor-Pivot",
  },
  {
    name: "Circular 32/2025/TT-BKHCN",
    date: "Eff. Jan 1, 2026",
    content:
      'Packaging materials — sputtering targets, leadframes, substrates, bonding wire, die-attach — listed as "investment-encouraged" categories.',
    url: null,
  },
];

export default function VietnamPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Vietnam — ATP &amp; Make in Vietnam</h1>
        <p className="text-muted text-sm mt-2 leading-relaxed max-w-2xl">
          Vietnam&apos;s role is often reduced to a single sentence — &ldquo;assembly, test, and
          packaging (ATP) hub.&rdquo; That framing conflates two structurally different investment
          layers: foreign OSAT giants diversifying from China, and Vietnamese entities investing in
          their own value chain. This page tracks the domestic layer.
        </p>
      </div>

      {/* Two layers */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted/50 mb-3">
          Two layers, not one
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl">
          <div className="bg-surface border border-border rounded-lg p-4">
            <p className="text-amber-400 text-xs font-semibold uppercase tracking-wide mb-1">
              Foreign OSAT FDI
            </p>
            <p className="text-white text-sm font-medium mb-2">
              Global giants diversifying from China
            </p>
            <p className="text-muted text-sm leading-relaxed">
              Packaging/test majors building capacity in Vietnam for labor cost and tariff arbitrage.
              Anchored by <strong className="text-white">Samsung</strong> (~$850M FCBGA, Bắc Ninh)
              and <strong className="text-white">Amkor</strong> (~$1.6B, Bắc Ninh).
            </p>
            <div className="mt-3 pt-3 border-t border-border">
              <p className="text-xs text-muted/70 leading-relaxed">
                <AlertTriangle size={10} className="inline text-amber-400 mr-1" />
                ATP switching costs are lower than front-end fab. This cluster is not automatically
                durable — sensitive to cost competition from Malaysia and India.
              </p>
            </div>
          </div>

          <div className="bg-surface border border-accent/30 rounded-lg p-4">
            <p className="text-accent text-xs font-semibold uppercase tracking-wide mb-1">
              Domestic &ldquo;Make in Vietnam&rdquo;
            </p>
            <p className="text-white text-sm font-medium mb-2">
              Vietnamese entities building their own chain
            </p>
            <p className="text-muted text-sm leading-relaxed">
              <strong className="text-white">VSAP Lab</strong>,{" "}
              <strong className="text-white">Viettel</strong>, and{" "}
              <strong className="text-white">FPT</strong> — three specific, named, dated cases of
              committed capital, not general policy aspiration.
            </p>
            <div className="mt-3 pt-3 border-t border-border">
              <p className="text-xs text-muted/70 leading-relaxed">
                As of this writing, none of the three has shipped a commercial product. All are at
                groundbreaking or announcement stage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Three domestic cases */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted/50 mb-3">
          Three domestic cases
        </p>
        <div className="flex flex-col gap-4 max-w-4xl">

          {/* VSAP */}
          <div className="bg-surface border border-border rounded-lg p-4">
            <div className="flex items-start justify-between gap-2 mb-3 flex-wrap">
              <div>
                <span className="text-accent text-xs font-semibold uppercase tracking-wide">
                  VSAP Lab · Đà Nẵng
                </span>
                <h3 className="text-white font-medium text-sm mt-0.5">
                  Advanced packaging R&amp;D + pilot line
                </h3>
              </div>
              <span className="text-xs text-muted bg-accent/10 border border-accent/20 rounded px-2 py-0.5 whitespace-nowrap">
                Target: Q4 2026
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
              {[
                { label: "Investment", value: "~$69–72M" },
                { label: "Financing", value: "~80% debt" },
                { label: "Technology", value: "FOWLP · 2.5D/3D" },
                { label: "Scale", value: "~10M units/yr" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 rounded p-2">
                  <p className="text-muted text-xs">{s.label}</p>
                  <p className="text-white text-sm font-medium mt-0.5">{s.value}</p>
                </div>
              ))}
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Groundbreaking July 2025. Led by Dr. Nguyễn Bích Yên.{" "}
              <span className="text-amber-400">Financial risk:</span> ~80% debt-to-equity on a
              pre-revenue R&amp;D-fab project is a high-risk structure if FOWLP/2.5D-3D
              commercialization takes longer than planned. At lab-fab scale, VSAP functions as an
              R&amp;D/training/pilot line — not yet an anchor large enough to pull a materials
              supply chain into the region.
            </p>
          </div>

          {/* Viettel */}
          <div className="bg-surface border border-border rounded-lg p-4">
            <div className="flex items-start justify-between gap-2 mb-3 flex-wrap">
              <div>
                <span className="text-green-400 text-xs font-semibold uppercase tracking-wide">
                  Viettel · Hòa Lạc, Hanoi
                </span>
                <h3 className="text-white font-medium text-sm mt-0.5">
                  Vietnam&apos;s first front-end wafer fab
                </h3>
              </div>
              <span className="text-xs text-muted bg-green-400/10 border border-green-400/20 rounded px-2 py-0.5 whitespace-nowrap">
                Target: 32nm pilot by 2027
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
              {[
                { label: "Groundbreaking", value: "Jan 16, 2026" },
                { label: "Site", value: "27 hectares" },
                { label: "Target node", value: "32nm pilot" },
                { label: "Capacity", value: "3–4K wafers/mo" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 rounded p-2">
                  <p className="text-muted text-xs">{s.label}</p>
                  <p className="text-white text-sm font-medium mt-0.5">{s.value}</p>
                </div>
              ))}
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Ministry of National Defense (state-directed). Hòa Lạc Hi-Tech Park, Hanoi.{" "}
              <strong className="text-white">Distinct from ATP</strong> — Vietnam&apos;s first
              front-end fabrication attempt, targeting defense/aerospace/telecom chips.{" "}
              <span className="text-amber-400">Not commercial advanced-node logic.</span> The
              official announcement acknowledges fabrication is &ldquo;not yet achievable
              domestically.&rdquo; Even once operational, does not solve wafer supply for commercial
              ATP players like VSAP Lab.
            </p>
            <div className="mt-2 text-xs text-muted/60">
              Sources:{" "}
              <a
                href="https://technode.global/2026/01/19/viettel-breaks-ground-on-vietnams-first-semiconductor-chip-fabrication-plant/"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                TechNode Global
              </a>{" "}
              ·{" "}
              <a
                href="https://www.usasean.org/article/vietnams-semiconductor-industry-enters-new-strategic-phase"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                US-ASEAN
              </a>
            </div>
          </div>

          {/* FPT */}
          <div className="bg-surface border border-border rounded-lg p-4">
            <div className="flex items-start justify-between gap-2 mb-3 flex-wrap">
              <div>
                <span className="text-blue-400 text-xs font-semibold uppercase tracking-wide">
                  FPT · Bắc Ninh
                </span>
                <h3 className="text-white font-medium text-sm mt-0.5">
                  Vietnam&apos;s first Vietnamese-owned ATP plant
                </h3>
              </div>
              <span className="text-xs text-muted bg-blue-400/10 border border-blue-400/20 rounded px-2 py-0.5 whitespace-nowrap">
                Phase 1: 2026–27
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-white/5 rounded p-2">
                <p className="text-muted text-xs">Phase 1 (2026–27)</p>
                <p className="text-white text-sm font-medium mt-0.5">
                  1,600 m² · 6 functional test lines
                </p>
              </div>
              <div className="bg-white/5 rounded p-2">
                <p className="text-muted text-xs">Phase 2 (2028–30)</p>
                <p className="text-white text-sm font-medium mt-0.5">6,000 m² · QFN/QFP/WLP/CSP</p>
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-2">
              Announced Jan 28, 2026, Yên Phong II-C Industrial Park, Bắc Ninh. Two key
              partnerships:
            </p>
            <ul className="space-y-1 text-sm text-muted ml-0.5">
              <li>
                <strong className="text-white">VSAP Lab</strong> — joint R&amp;D-to-mass-production
                for advanced packaging
              </li>
              <li>
                <strong className="text-white">Viettel</strong> — joint AI-on-edge SoC (28–32nm,
                camera/drone/UAV applications)
              </li>
            </ul>
            <div className="mt-3 text-xs text-muted/60">
              Sources:{" "}
              <a
                href="https://fptsoftware.com/newsroom/news-and-press-releases/news/fpt-established-advanced-semiconductor-testing-and-packaging-plant"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                FPT Software
              </a>{" "}
              ·{" "}
              <a
                href="https://en.vietnamplus.vn/fpt-announces-semiconductor-testing-packaging-plant-post336885.vnp"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                VietnamPlus
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Policy table */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted/50 mb-3">
          Government policy framework
        </p>
        <div className="bg-surface border border-border rounded-lg overflow-hidden max-w-4xl">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-muted text-xs font-medium px-4 py-2 whitespace-nowrap">
                    Policy
                  </th>
                  <th className="text-left text-muted text-xs font-medium px-4 py-2 whitespace-nowrap">
                    Date
                  </th>
                  <th className="text-left text-muted text-xs font-medium px-4 py-2">Content</th>
                </tr>
              </thead>
              <tbody>
                {POLICIES.map((p, i) => (
                  <tr
                    key={p.name}
                    className={i < POLICIES.length - 1 ? "border-b border-border/50" : ""}
                  >
                    <td className="px-4 py-2.5 align-top whitespace-nowrap">
                      {p.url ? (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline text-xs font-medium inline-flex items-center gap-1"
                        >
                          {p.name}
                          <ExternalLink size={10} />
                        </a>
                      ) : (
                        <span className="text-white text-xs font-medium">{p.name}</span>
                      )}
                    </td>
                    <td className="px-4 py-2.5 align-top text-muted text-xs whitespace-nowrap">
                      {p.date}
                    </td>
                    <td className="px-4 py-2.5 align-top text-muted text-xs leading-relaxed">
                      {p.content}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Roadmap phases */}
        <div className="grid grid-cols-3 gap-3 mt-3 max-w-4xl">
          {[
            {
              phase: "Phase 1",
              years: "2024–2030",
              items: ["≥100 design companies", "1 small-scale fab", "10 ATP facilities"],
            },
            {
              phase: "Phase 2",
              years: "2030–2040",
              items: ["200 design companies", "2 fabs", "15 ATP facilities"],
            },
            {
              phase: "Phase 3",
              years: "2040–2050",
              items: ["300 design companies", "3 fabs", "20 OSAT facilities"],
            },
          ].map((ph) => (
            <div key={ph.phase} className="bg-surface border border-border rounded-lg p-3">
              <p className="text-accent text-xs font-semibold uppercase tracking-wide">
                {ph.phase}
              </p>
              <p className="text-muted text-xs mb-2">{ph.years}</p>
              <ul className="space-y-1">
                {ph.items.map((item) => (
                  <li key={item} className="text-muted text-xs">
                    · {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Supply chain reality check */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted/50 mb-3 flex items-center gap-2">
          <AlertTriangle size={11} className="text-orange-400" />
          Upstream supply chain reality check
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl">
          {[
            {
              dep: "Wafer / die supply",
              verdict: "Not domestically feasible",
              color: "red" as const,
              detail:
                "Viettel's fab targets defense chips at 32nm — not commercial-node supply. VSAP and FPT will continue importing wafers/die.",
            },
            {
              dep: "Packaging materials",
              verdict: "Partial, blocked by scale",
              color: "amber" as const,
              detail:
                "Policy groundwork (Circular 32/2025) just landed. But material suppliers only site plants once cluster demand crosses a threshold Vietnam hasn't reached.",
            },
            {
              dep: "Equipment",
              verdict: "Not feasible near-term",
              color: "red" as const,
              detail:
                "No domestic production and no realistic near-term path. Equipment remains fully imported.",
            },
          ].map((item) => (
            <div
              key={item.dep}
              className={`bg-surface border rounded-lg p-3 ${
                item.color === "red" ? "border-red-500/20" : "border-amber-400/20"
              }`}
            >
              <p className="text-white text-xs font-medium">{item.dep}</p>
              <p
                className={`text-xs font-semibold mt-0.5 mb-2 ${
                  item.color === "red" ? "text-red-400" : "text-amber-400"
                }`}
              >
                {item.verdict}
              </p>
              <p className="text-muted text-xs leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 bg-surface border border-border rounded-lg p-3 max-w-4xl">
          <p className="text-muted text-sm leading-relaxed">
            <strong className="text-white">Core structural gap:</strong> VSAP Lab at lab-fab scale
            (~10M units/year, ~80% debt-financed) functions as an R&amp;D/training/pilot line —
            not an anchor large enough to pull a materials supply chain into Vietnam. ATP&apos;s
            lower switching costs mean technological success won&apos;t automatically create
            gravitational pull without a billion-dollar-scale anchor investor.
          </p>
        </div>
      </div>

      {/* Corridor question */}
      <div className="bg-surface border border-border rounded-lg p-4 max-w-4xl">
        <p className="text-white text-sm font-medium mb-2">Open question: which corridor wins?</p>
        <p className="text-muted text-sm leading-relaxed">
          <strong className="text-white">Bắc Ninh</strong> (Samsung, Amkor, FPT) has a head start
          from established anchor investors. The{" "}
          <strong className="text-white">Đà Nẵng corridor</strong> (VSAP Lab) is building from
          scratch — success depends on attracting a comparable anchor, not on land cost or
          infrastructure alone.{" "}
          <span className="text-amber-400">
            Anchor investor commitment, not natural geography, is the determining variable.
          </span>
        </p>
      </div>

      {/* Facility map */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted/50 mb-3">
          Facility map
        </p>
        <div className="bg-surface border border-border rounded-lg p-4 max-w-4xl">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* SVG Vietnam map */}
            <div className="flex-shrink-0 flex justify-center sm:justify-start">
              <svg
                viewBox="0 0 200 480"
                width={148}
                height={355}
                aria-label="Vietnam semiconductor facility map"
              >
                {/* Vietnam silhouette — simplified outline */}
                <path
                  d="M 2,32 L 30,20 L 60,10 L 85,8 L 105,14 L 120,36
                     L 137,50 L 137,65 L 137,80 L 112,96 L 100,128 L 95,160
                     L 118,192 L 112,208 L 148,222 L 155,237
                     L 168,256 L 180,288 L 182,320 L 180,352
                     L 162,384 L 137,416 L 122,432 L 87,464 L 70,477
                     L 62,464 L 55,448 L 55,432 L 50,416
                     L 100,390 L 125,375 L 125,355 L 130,335
                     L 128,315 L 128,295 L 135,272 L 126,240
                     L 107,208 L 102,192 L 77,160
                     L 77,128 L 25,96 L 12,80 L 2,64 Z"
                  fill="rgba(99,102,241,0.10)"
                  stroke="rgba(99,102,241,0.38)"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />

                {/* Reference city labels */}
                <circle cx="92" cy="80" r="1.2" fill="rgba(255,255,255,0.22)" />
                <text x="95" y="78" fontSize="5.5" fill="rgba(255,255,255,0.32)" fontFamily="system-ui,sans-serif">Hà Nội</text>

                <circle cx="116" cy="375" r="1.2" fill="rgba(255,255,255,0.22)" />
                <text x="119" y="379" fontSize="5.5" fill="rgba(255,255,255,0.32)" fontFamily="system-ui,sans-serif">TP.HCM</text>

                {/* Samsung + Amkor — Bắc Ninh — amber */}
                <circle cx="108" cy="75" r="7" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" strokeWidth="1" />
                <circle cx="108" cy="75" r="3" fill="#fbbf24" />

                {/* FPT — Bắc Ninh — blue, slight offset south */}
                <circle cx="118" cy="87" r="7" fill="rgba(96,165,250,0.15)" stroke="#60a5fa" strokeWidth="1" />
                <circle cx="118" cy="87" r="3" fill="#60a5fa" />

                {/* Viettel — Hòa Lạc — green, west of Hanoi */}
                <circle cx="77" cy="82" r="7" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="1" />
                <circle cx="77" cy="82" r="3" fill="#22c55e" />

                {/* VSAP Lab — Đà Nẵng — violet */}
                <circle cx="155" cy="237" r="7" fill="rgba(167,139,250,0.15)" stroke="#a78bfa" strokeWidth="1" />
                <circle cx="155" cy="237" r="3" fill="#a78bfa" />
                <text x="118" y="240" fontSize="5.5" fill="rgba(255,255,255,0.38)" fontFamily="system-ui,sans-serif">Đà Nẵng</text>
              </svg>
            </div>

            {/* Legend */}
            <div className="flex flex-col gap-5 justify-center flex-1 min-w-0">
              <div>
                <p className="text-white text-xs font-semibold mb-2 uppercase tracking-wide">
                  Northern cluster — Bắc Ninh / Hòa Lạc
                </p>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white text-xs font-medium">Samsung · Amkor (Bắc Ninh)</p>
                      <p className="text-muted text-xs leading-relaxed">
                        Foreign OSAT FDI — $2.4B combined. Largest existing anchor.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white text-xs font-medium">FPT (Bắc Ninh)</p>
                      <p className="text-muted text-xs leading-relaxed">
                        First Vietnamese-owned ATP — announced Jan 2026. Phase 1 target 2026–27.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white text-xs font-medium">Viettel (Hòa Lạc)</p>
                      <p className="text-muted text-xs leading-relaxed">
                        Vietnam&apos;s first front-end fab — 32nm, groundbreaking Jan 2026.
                        State/defense-directed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-white text-xs font-semibold mb-2 uppercase tracking-wide">
                  Central — Đà Nẵng corridor
                </p>
                <div className="flex items-start gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white text-xs font-medium">VSAP Lab (Đà Nẵng)</p>
                    <p className="text-muted text-xs leading-relaxed">
                      FOWLP / 2.5D-3D R&amp;D + pilot line. ~$70M, ~80% debt. Target Q4 2026.
                      Ecosystem still developing — no anchor investor yet.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-border">
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400" /> FDI anchor
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-400" /> Domestic ATP
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400" /> Front-end fab
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-violet-400" /> R&amp;D pilot
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial disclaimer */}
      <div className="bg-surface/50 border border-border/50 rounded-lg p-3 max-w-4xl">
        <p className="text-muted/70 text-xs leading-relaxed">
          <strong className="text-muted">Editorial standard:</strong> every figure is sourced and
          dated; policy signals (groundbreakings, announcements) are explicitly distinguished from
          deployed capital and commercial output. As of this writing, none of the three domestic
          entities profiled here has shipped a commercial product.
        </p>
      </div>
    </div>
  );
}
