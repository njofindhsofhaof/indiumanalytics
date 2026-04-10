export type MarketCapTier = "large" | "mid" | "small";

export type StockMeta = {
  symbol: string;
  name: string;
  sector: string;
  thesis: string;
  marketCapTier: MarketCapTier;
};

export const STOCK_METADATA: StockMeta[] = [
  {
    symbol: "AVGO",
    name: "Broadcom",
    sector: "Semiconductors",
    thesis: "Dominant custom AI ASIC + co-packaged optics switch silicon",
    marketCapTier: "large",
  },
  {
    symbol: "MRVL",
    name: "Marvell Technology",
    sector: "Semiconductors",
    thesis: "CPO and cloud custom silicon leader via Celestial AI partnership",
    marketCapTier: "large",
  },
  {
    symbol: "COHR",
    name: "Coherent Corp",
    sector: "Photonics",
    thesis: "Vertical integration of laser + transceiver for AI datacenters",
    marketCapTier: "large",
  },
  {
    symbol: "LITE",
    name: "Lumentum",
    sector: "Photonics",
    thesis: "Pump lasers and ROADMs for datacenter and telecom",
    marketCapTier: "mid",
  },
  {
    symbol: "FN",
    name: "Fabrinet",
    sector: "Optical Manufacturing",
    thesis: "Contract manufacturing for photonics — picks and shovels play",
    marketCapTier: "mid",
  },
  {
    symbol: "MTSI",
    name: "MACOM Technology",
    sector: "Semiconductors",
    thesis: "III-V compound semiconductors for optical networking",
    marketCapTier: "mid",
  },
  {
    symbol: "AAOI",
    name: "Applied Optoelectronics",
    sector: "Photonics",
    thesis: "Datacenter transceiver leverage as AI bandwidth surges",
    marketCapTier: "small",
  },
  {
    symbol: "AXTI",
    name: "AXT Inc",
    sector: "Materials",
    thesis: "Substrate supplier — InP and GaAs wafers for photonics",
    marketCapTier: "small",
  },
  {
    symbol: "POET",
    name: "POET Technologies",
    sector: "Photonics",
    thesis: "Monolithic InP optical interposer platform",
    marketCapTier: "small",
  },
  {
    symbol: "LWLG",
    name: "Lightwave Logic",
    sector: "Photonics",
    thesis: "Organic electro-optic polymers for ultra-high-speed modulators",
    marketCapTier: "small",
  },
  {
    symbol: "TSEM",
    name: "Tower Semiconductor",
    sector: "Foundry",
    thesis: "Silicon photonics foundry services — pure foundry exposure",
    marketCapTier: "mid",
  },
  {
    symbol: "GFS",
    name: "GlobalFoundries",
    sector: "Foundry",
    thesis: "Leading SiPh production node in 45RFSOI/300mm",
    marketCapTier: "large",
  },
];

export const ALL_SYMBOLS = STOCK_METADATA.map((s) => s.symbol);
