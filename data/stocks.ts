export type MarketCapTier = "large" | "mid" | "small";

export type StockMeta = {
  symbol: string;
  name: string;
  sector: string;
  thesis: string;
  marketCapTier: MarketCapTier;
  hq: string;
  lat: number;
  lng: number;
};

export const STOCK_METADATA: StockMeta[] = [
  {
    symbol: "AVGO",
    name: "Broadcom",
    sector: "Semiconductors",
    thesis: "Dominant custom AI ASIC + co-packaged optics switch silicon",
    marketCapTier: "large",
    hq: "San Jose, CA, USA",
    lat: 37.3382,
    lng: -121.8863,
  },
  {
    symbol: "MRVL",
    name: "Marvell Technology",
    sector: "Semiconductors",
    thesis: "CPO and cloud custom silicon leader via Celestial AI partnership",
    marketCapTier: "large",
    hq: "Santa Clara, CA, USA",
    lat: 37.3541,
    lng: -121.9552,
  },
  {
    symbol: "COHR",
    name: "Coherent Corp",
    sector: "Photonics",
    thesis: "Vertical integration of laser + transceiver for AI datacenters",
    marketCapTier: "large",
    hq: "Saxonburg, PA, USA",
    lat: 40.7551,
    lng: -79.8231,
  },
  {
    symbol: "LITE",
    name: "Lumentum",
    sector: "Photonics",
    thesis: "Pump lasers and ROADMs for datacenter and telecom",
    marketCapTier: "mid",
    hq: "San Jose, CA, USA",
    lat: 37.3022,
    lng: -121.9785,
  },
  {
    symbol: "FN",
    name: "Fabrinet",
    sector: "Optical Manufacturing",
    thesis: "Contract manufacturing for photonics — picks and shovels play",
    marketCapTier: "mid",
    hq: "Bangkok, Thailand",
    lat: 13.7563,
    lng: 100.5018,
  },
  {
    symbol: "MTSI",
    name: "MACOM Technology",
    sector: "Semiconductors",
    thesis: "III-V compound semiconductors for optical networking",
    marketCapTier: "mid",
    hq: "Lowell, MA, USA",
    lat: 42.6334,
    lng: -71.3162,
  },
  {
    symbol: "AAOI",
    name: "Applied Optoelectronics",
    sector: "Photonics",
    thesis: "Datacenter transceiver leverage as AI bandwidth surges",
    marketCapTier: "small",
    hq: "Sugar Land, TX, USA",
    lat: 29.6197,
    lng: -95.6349,
  },
  {
    symbol: "AXTI",
    name: "AXT Inc",
    sector: "Materials",
    thesis: "Substrate supplier — InP and GaAs wafers for photonics",
    marketCapTier: "small",
    hq: "Fremont, CA, USA",
    lat: 37.5485,
    lng: -121.9886,
  },
  {
    symbol: "POET",
    name: "POET Technologies",
    sector: "Photonics",
    thesis: "Monolithic InP optical interposer platform",
    marketCapTier: "small",
    hq: "Toronto, Canada",
    lat: 43.6532,
    lng: -79.3832,
  },
  {
    symbol: "LWLG",
    name: "Lightwave Logic",
    sector: "Photonics",
    thesis: "Organic electro-optic polymers for ultra-high-speed modulators",
    marketCapTier: "small",
    hq: "Englewood, CO, USA",
    lat: 39.6483,
    lng: -104.9878,
  },
  {
    symbol: "TSEM",
    name: "Tower Semiconductor",
    sector: "Foundry",
    thesis: "Silicon photonics foundry services — pure foundry exposure",
    marketCapTier: "mid",
    hq: "Migdal HaEmek, Israel",
    lat: 32.6793,
    lng: 35.2407,
  },
  {
    symbol: "GFS",
    name: "GlobalFoundries",
    sector: "Foundry",
    thesis: "Leading SiPh production node in 45RFSOI/300mm",
    marketCapTier: "large",
    hq: "Malta, NY, USA",
    lat: 42.9884,
    lng: -73.7857,
  },
  // Networking
  {
    symbol: "CRDO",
    name: "Credo Technology",
    sector: "Semiconductors",
    thesis:
      "Active electrical cables and SerDes IP for AI scale-out — bandwidth bridge before CPO matures",
    marketCapTier: "small",
    hq: "San Jose, CA, USA",
    lat: 37.3229,
    lng: -121.9147,
  },
  {
    symbol: "CIEN",
    name: "Ciena",
    sector: "Networking",
    thesis:
      "Optical networking systems and WaveLogic coherent DSP — primary beneficiary of AI datacenter backbone buildout",
    marketCapTier: "mid",
    hq: "Hanover, MD, USA",
    lat: 39.1757,
    lng: -76.7249,
  },
  {
    symbol: "ANET",
    name: "Arista Networks",
    sector: "Networking",
    thesis:
      "AI datacenter switching fabric — demand proxy for optical transceiver volume as port speeds migrate to 800G/1.6T",
    marketCapTier: "large",
    hq: "Santa Clara, CA, USA",
    lat: 37.3861,
    lng: -122.0839,
  },
  {
    symbol: "GLW",
    name: "Corning",
    sector: "Materials",
    thesis:
      "Optical fiber and cable — structural beneficiary of AI datacenter and CPO rollout; validated by NVIDIA Spectrum-X CPO announcement (March 2025)",
    marketCapTier: "large",
    hq: "Corning, NY, USA",
    lat: 42.1429,
    lng: -77.0547,
  },
  {
    symbol: "SIVE",
    name: "Sivers Semiconductors",
    sector: "Photonics",
    thesis:
      "Early-stage SiPh IP play — speculative, low liquidity, monitor only",
    marketCapTier: "small",
    hq: "Kista, Stockholm, Sweden",
    lat: 59.4033,
    lng: 17.944,
  },
];

export const ALL_SYMBOLS = STOCK_METADATA.map((s) => s.symbol);
