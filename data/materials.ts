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
    role: "Substrate for III-V photonic ICs; fastest electro-optic performance",
    topProducers: [
      "AXT Inc (USA)",
      "Sumitomo Electric (JPN)",
      "Wafer Technology (UK)",
    ],
    supplyRisk: "Critical",
    riskReason:
      "Indium is a byproduct of zinc smelting; top 3 producers are single-country concentrated; 70%+ shortage projected by 2027",
    usedIn: ["POET Technologies", "Coherent Corp", "Lumentum"],
  },
  {
    name: "Silicon-on-Insulator",
    formula: "SiO₂/Si",
    role: "Standard platform for CMOS-compatible silicon photonics",
    topProducers: [
      "Soitec (FRA)",
      "Shin-Etsu Chemical (JPN)",
      "GlobalWafers (TWN)",
    ],
    supplyRisk: "Low",
    riskReason:
      "Mature supply chain; produced by multiple large-scale foundries globally",
    usedIn: ["GlobalFoundries", "Tower Semiconductor", "Intel Foundry"],
  },
  {
    name: "Lithium Niobate",
    formula: "LiNbO₃",
    role: "Thin-film electro-optic modulator platform for 100G+ coherent",
    topProducers: [
      "Sumitomo Osaka Cement (JPN)",
      "NANOLN (CHN)",
      "Stanford Advanced Materials (USA)",
    ],
    supplyRisk: "High",
    riskReason:
      "Thin-film process still scaling; China dominates raw crystal growth; geopolitical risk elevated",
    usedIn: ["Lumentum", "HyperLight (private)", "EPFL spinoffs"],
  },
  {
    name: "Germanium",
    formula: "Ge",
    role: "Photodetector material integrated in SiPh platforms for O/C-band",
    topProducers: [
      "Umicore (BEL)",
      "Yunnan Germanium (CHN)",
      "Chihong Zinc & Germanium (CHN)",
    ],
    supplyRisk: "High",
    riskReason:
      "China produces ~80% of primary Ge; 2023 export controls raise supply risk; critical for photodetectors",
    usedIn: ["GlobalFoundries 45RFSOI", "Tower SiPh", "Intel SiPh"],
  },
  {
    name: "Gallium Arsenide",
    formula: "GaAs",
    role: "High-efficiency VCSEL and pump laser substrate",
    topProducers: [
      "AXT Inc (USA)",
      "Freiberger Compound Materials (DEU)",
      "Sumitomo Electric (JPN)",
    ],
    supplyRisk: "Medium",
    riskReason:
      "Multiple suppliers exist; gallium supply is a byproduct of aluminum smelting",
    usedIn: ["Coherent Corp", "Lumentum", "MACOM Technology"],
  },
  {
    name: "Electro-Optic Polymers",
    formula: "EOP",
    role: "Ultra-low-power, ultra-high-bandwidth modulators for next-gen CPO",
    topProducers: [
      "Lightwave Logic (USA)",
      "GigOptix (acquired)",
      "Research stage",
    ],
    supplyRisk: "Critical",
    riskReason:
      "Only one public company producing commercial EOP; technology not yet in volume production; single-point-of-failure risk",
    usedIn: ["LWLG internal R&D", "DARPA programs"],
  },
];
