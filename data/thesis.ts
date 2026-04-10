export type ThesisSection = {
  id: string;
  title: string;
  body: string;
};

export const THESIS_SECTIONS: ThesisSection[] = [
  {
    id: "macro",
    title: "The Macro Tailwind: AI Is an Optical Infrastructure Problem",
    body: `Training and inference of frontier AI models is constrained not by compute density but by memory bandwidth and inter-chip communication latency. Electrical interconnects between GPUs and HBM hit a physical wall around 1–2 Tb/s per package at power envelopes that are already unsustainable. Every NVidia GB200 NVL72 rack consumes ~120 kW — the majority of which is I/O, not computation.\n\nPhotonic interconnects — whether on-chip, chiplet-to-chiplet, or rack-to-rack — offer 10–100x bandwidth density at a fraction of the power. Co-packaged optics (CPO) at 51.2 Tb/s switch ports eliminates pluggable modules entirely, reclaiming ~5 pJ/bit in overhead. Every hyperscaler capex cycle now includes optical I/O line items that did not exist in 2021.\n\nThe scale of the demand signal is unprecedented. AI network traffic is projected to reach **1,088 exabytes (EB) per month by 2033 at a 24% CAGR** (Nokia/Ericsson forecasts), with AI accounting for 33% of all global network traffic by that date. Data center energy consumption is equally staggering: from **415 TWh in 2024** to an estimated **700–1,720 TWh by 2035** across demand scenarios — a potential 4x increase in a decade. Without photonic interconnects, this trajectory is physically impossible to sustain on copper.`,
  },
  {
    id: "cpo",
    title: "Co-Packaged Optics (CPO): The Near-Term Catalyst",
    body: `CPO integrates optical transceivers directly into the switch package, eliminating the pluggable module and its ~5 pJ/bit overhead. Cisco, Broadcom, and Marvell are all shipping CPO-capable ASICs. The ecosystem inflection point is the 51.2 Tb/s switch generation (2025–2026), where CPO becomes economically mandatory for hyperscalers.\n\nBroadcom's Tomahawk 5 and Marvell's Teralynx 10 both ship with native CPO interfaces. The Bill of Materials shift is dramatic: pluggable transceiver cost at 51.2T is ~$8,000 per switch; CPO at the same bandwidth costs ~$3,200. This ~$4,800 per-switch capex savings, multiplied across millions of hyperscaler ports, represents a $3–5B TAM shift from pluggable optics to embedded silicon photonics by 2027.\n\nThe immediate beneficiaries are laser suppliers (LITE, COHR), optical manufacturers (FN), and the foundries enabling SiPh integration at volume (TSEM, GFS). AMD's acquisition of ENOSEMI in May 2025 signals that even traditional semiconductor players are moving into photonic interconnect manufacturing.`,
  },
  {
    id: "supply-chain",
    title: "Supply Chain Bottlenecks Create Asymmetric Risk/Reward",
    body: `The photonic supply chain is critically thin at several nodes. InP substrate production is dominated by two companies globally — AXT Inc (USA) and Sumitomo Electric (Japan) — with no new entrants in capacity expansion. Indium itself is a byproduct of zinc smelting; supply cannot be ramped quickly.\n\nThin-film lithium niobate (TFLN) — the emerging platform for ultra-low-loss modulators — is at pilot scale only, with China controlling the majority of raw boule production. Germanium photodetectors, essential to all SiPh receiver platforms, rely on Chinese feedstock now subject to export controls implemented in August 2023. Western foundries have an estimated 12–18 months of strategic Ge inventory.\n\nCompanies that have vertically integrated (Coherent, Lumentum) or secured substrate supply agreements (AXT Inc, Tower Semiconductor via long-term supply contracts) carry significant moat versus fabs that source on spot markets. This vertical integration premium should be reflected in valuation multiples.`,
  },
  {
    id: "smallcap",
    title: "The Small-Cap Optionality Basket",
    body: `POET, LWLG, and AAOI represent binary bets on emerging platform technologies with asymmetric upside.\n\nPOET Technologies' optical interposer promises monolithic integration of III-V and Si photonics without wafer bonding — a process that today adds ~30% yield loss and significant cost to SiPh chiplet assembly. If POET achieves volume production through their partnership with DenseLight (now POET Singapore), it disrupts the entire III-V foundry model. The company has announced sampling agreements with multiple Tier 1 datacenter component suppliers.\n\nLightwave Logic's organic electro-optic polymers target >1 THz modulation bandwidth — a regime beyond any crystalline material. At 10 Tb/s per wavelength, LWLG's material is the only path to 200Gbaud+ modulation. The company has filed 100+ patents and is in active product development discussions with strategic partners.\n\nAAOI is a leveraged bet: as 400G and 800G transceiver ASPs hold, AAOI's revenue scales rapidly with unit volumes while their fab-lite model keeps capex light.\n\nPosition sizing should reflect the R&D stage risk: 1–3% per name, with 10–50x potential versus 3–8x for core positions in AVGO/MRVL/COHR.`,
  },
  {
    id: "tech-roadmap",
    title: "Technology Roadmap: From CPO to Fully Photonic Processors",
    body: `Silicon photonics is not a single product — it is a platform that will enable a generational shift in computing architecture. The roadmap unfolds in four stages, each building on the last:\n\n**Stage 1 — Chip-to-Chip Optical Interconnect (2024–2026):** Short-reach optical links between compute dies within a package or across a board. CPO switches at 51.2 Tb/s represent the leading edge. Deployments at scale expected at Google, Amazon, and Microsoft datacenter builds in 2025–2026.\n\n**Stage 2 — Board-to-Board & Rack-Scale Photonics (2026–2028):** Optical backplanes replacing copper traces across chassis. Silicon nitride (Si₃N₄) waveguides enable wide-spectrum, low-loss rack-scale optical fabrics. Ayar Labs' TeraPHY optical I/O chiplet targets this transition.\n\n**Stage 3 — Rack-to-Rack and Datacenter-Scale Photonics (2028–2030):** Fully optical datacenter fabrics with 1.6T and 3.2T transceiver standards. Thin-film lithium niobate modulators and EO polymer modulators become commercially viable at scale.\n\n**Stage 4 — Fully Photonic Processors (2030+):** Compute performed in the optical domain — matrix multiplication, convolution, and Fourier transforms via photonic tensor cores. Companies like Lightmatter and Luminous Computing are developing these architectures. Manufacturing yield and PDK standardization for photonic processes are projected to approach CMOS maturity only post-2030 (IPSR-I Roadmap, 2024).`,
  },
  {
    id: "risks",
    title: "Key Risks to the Thesis",
    body: `**1. Electrical interconnect scaling continues longer than expected.** Advanced packaging (HBM4, UCIe electrical, XSR SerDes at 224G) could push the photonics inflection point by 2–3 years. Each year of delay compresses IRR significantly for small-cap positions.\n\n**2. CPO integration complexity delays hyperscaler adoption.** CPO requires tight co-design between the ASIC vendor, the laser supplier, and the switch OEM. Integration risk is high; hyperscalers may stay with pluggables longer than consensus expects if CPO yields at the system level disappoint.\n\n**3. China export controls on Ge and Ga escalate.** Germanium and gallium export controls implemented in 2023 could be expanded. Western foundries have 12–18 months of strategic inventory; after that, supply disruption risk is real.\n\n**4. Small-cap platforms fail to achieve volume manufacturing yields.** POET's interposer and LWLG's EOP both face significant materials and process engineering challenges. Revenue ramp timelines have slipped before.\n\n**5. Manufacturing yield immaturity across the sector.** Unlike CMOS, photonics process yields remain significantly below silicon equivalents. PDK standardization, second-sourcing options, and wafer-level inspection tools are projected to mature only post-2030 (IPSR-I Roadmap, 2024). This systemic risk affects all photonics manufacturers.\n\n**6. Open-weights AI model efficiency improvements reduce bandwidth intensity.** Distillation, quantization, and mixture-of-experts architectures could reduce compute and bandwidth per inference dollar, lowering the urgency of photonic I/O investment for hyperscalers.`,
  },
];

export const UPCOMING_CATALYSTS = [
  {
    date: "2025-Q2",
    event: "AVGO Q2 FY2025 Earnings",
    ticker: "AVGO",
    type: "earnings" as const,
    description: "CPO revenue attribution and AI ASIC pipeline update expected",
  },
  {
    date: "2025-Q2",
    event: "COHR Q3 FY2025 Earnings",
    ticker: "COHR",
    type: "earnings" as const,
    description: "InP laser supply constraints and 800G transceiver ramp progress",
  },
  {
    date: "2025-Q2",
    event: "OFC 2025 Conference",
    ticker: "SECTOR",
    type: "conference" as const,
    description:
      "Optical Fiber Conference — key CPO announcements and technology roadmaps",
  },
  {
    date: "2025-Q3",
    event: "51.2T CPO Switch Sampling",
    ticker: "AVGO/MRVL",
    type: "milestone" as const,
    description: "Volume sampling of 51.2 Tb/s CPO-enabled switch ASICs at hyperscalers",
  },
  {
    date: "2025-Q3",
    event: "POET Optical Engine Volume",
    ticker: "POET",
    type: "milestone" as const,
    description: "POET Technologies first volume production shipment of optical engines",
  },
  {
    date: "2025-Q4",
    event: "LWLG Platform Partnership",
    ticker: "LWLG",
    type: "milestone" as const,
    description: "Expected strategic partnership announcement for EO polymer production",
  },
];
