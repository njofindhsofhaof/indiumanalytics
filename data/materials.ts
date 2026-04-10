export type SupplyRisk = "Critical" | "High" | "Medium" | "Low";

export type MaterialData = {
  name: string;
  formula: string;
  role: string;
  topProducers: string[];
  supplyRisk: SupplyRisk;
  riskReason: string;
  usedIn: string[];
};

export const MATERIALS: MaterialData[] = [
  {
    name: "Indium Phosphide",
    formula: "InP",
    role: "Substrate for III-V photonic ICs; enables fastest electro-optic performance; critical for high-speed lasers and modulators",
    topProducers: [
      "AXT Inc (USA)",
      "Sumitomo Electric (JPN)",
      "Wafer Technology (UK)",
    ],
    supplyRisk: "Critical",
    riskReason:
      "Indium is a byproduct of zinc smelting — supply cannot be ramped independently. Top 3 producers are geographically concentrated; 70%+ shortage projected by 2027 as AI datacenter laser demand scales",
    usedIn: ["POET Technologies", "Coherent Corp", "Lumentum"],
  },
  {
    name: "Silicon-on-Insulator",
    formula: "SiO₂/Si",
    role: "Primary platform for 95%+ of commercial silicon photonics; CMOS-compatible waveguide and modulator integration",
    topProducers: [
      "Soitec (FRA)",
      "Shin-Etsu Chemical (JPN)",
      "GlobalWafers (TWN)",
    ],
    supplyRisk: "Low",
    riskReason:
      "Mature global supply chain; produced by multiple large-scale foundries. Platform used in 95%+ of deployed commercial SiPh transceivers (IEEE/IPSR-I 2024)",
    usedIn: ["GlobalFoundries", "Tower Semiconductor", "Intel Foundry"],
  },
  {
    name: "Lithium Niobate",
    formula: "LiNbO₃",
    role: "Thin-film electro-optic modulator platform for 100G+ coherent; ultra-low insertion loss at high bandwidth",
    topProducers: [
      "Sumitomo Osaka Cement (JPN)",
      "NANOLN (CHN)",
      "Stanford Advanced Materials (USA)",
    ],
    supplyRisk: "High",
    riskReason:
      "Thin-film process (TFLN) still at pilot scale as of 2024; China dominates raw boule crystal growth; geopolitical risk elevated. PDK maturity for TFLN lags SOI by 5+ years",
    usedIn: ["Lumentum", "HyperLight (private)", "EPFL spinoffs"],
  },
  {
    name: "Germanium",
    formula: "Ge",
    role: "Photodetector material integrated in SiPh platforms; targets 150 GHz bandwidth, >1A/W responsivity, <1 nA dark current (2025+ roadmap)",
    topProducers: [
      "Umicore (BEL)",
      "Yunnan Germanium (CHN)",
      "Chihong Zinc & Germanium (CHN)",
    ],
    supplyRisk: "High",
    riskReason:
      "China produces ~80% of primary Ge globally. August 2023 export controls introduced immediate supply risk for Western foundries; strategic inventory estimated at 12–18 months",
    usedIn: ["GlobalFoundries 45RFSOI", "Tower SiPh", "Intel SiPh"],
  },
  {
    name: "Gallium Arsenide",
    formula: "GaAs",
    role: "High-efficiency VCSEL and pump laser substrate; critical for datacom laser sources in AI datacenter interconnects",
    topProducers: [
      "AXT Inc (USA)",
      "Freiberger Compound Materials (DEU)",
      "Sumitomo Electric (JPN)",
    ],
    supplyRisk: "Medium",
    riskReason:
      "Multiple suppliers exist; gallium is a byproduct of aluminum smelting. China export restrictions on gallium (2023) add medium-term risk but Western producers provide partial buffer",
    usedIn: ["Coherent Corp", "Lumentum", "MACOM Technology"],
  },
  {
    name: "Silicon Nitride",
    formula: "Si₃N₄",
    role: "Low-loss passive waveguide platform; wide spectral range (visible to mid-IR); increasingly integrated on SOI for hybrid SiPh platforms",
    topProducers: [
      "TSMC (TWN)",
      "GlobalFoundries (USA)",
      "Tower Semiconductor (ISR)",
    ],
    supplyRisk: "Low",
    riskReason:
      "Produced in standard CMOS fabs using mature deposition processes (LPCVD/PECVD). No exotic precursors; supply risk is negligible. Adoption growing rapidly in 400G+ transceivers and LiDAR",
    usedIn: ["400G+ transceivers", "LiDAR sensors", "Optical gyroscopes"],
  },
  {
    name: "Electro-Optic Polymers",
    formula: "EOP",
    role: "Ultra-low-power, ultra-high-bandwidth modulators; target >1 THz modulation — beyond any crystalline material; next-gen CPO applications",
    topProducers: [
      "Lightwave Logic (USA)",
      "GigOptix (acquired)",
      "Research stage only",
    ],
    supplyRisk: "Critical",
    riskReason:
      "Only one public company (LWLG) producing commercial EOP; technology not yet in volume production; single-point-of-failure for 200Gbaud+ modulation roadmap",
    usedIn: ["LWLG internal R&D", "DARPA programs"],
  },
];
