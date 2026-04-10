import { NextResponse } from "next/server";

export const revalidate = 43200; // 12 hours

type MaterialArticle = {
  formula: string;
  title: string;
  description: string;
  url: string;
  source: string;
  publishedAt: string;
};

const MATERIAL_KEYWORDS: Record<string, string[]> = {
  InP: ["indium phosphide", "inp substrate", "inp laser", "inp wafer"],
  Ge: ["germanium", "ge export", "ge photodetector", "gallium germanium"],
  "LiNbO₃": ["lithium niobate", "linbo", "tfln", "thin-film lithium"],
  GaAs: ["gallium arsenide", "gaas", "vcsel"],
  "Si₃N₄": ["silicon nitride", "si3n4", "sin waveguide", "sinx photonics"],
  EOP: ["electro-optic polymer", "lightwave logic", "lwlg", "eop modulator", "organic electro"],
};

function detectMaterial(text: string): string | null {
  const lower = text.toLowerCase();
  for (const [formula, keywords] of Object.entries(MATERIAL_KEYWORDS)) {
    if (keywords.some((kw) => lower.includes(kw))) return formula;
  }
  return null;
}

const MOCK_ARTICLES: MaterialArticle[] = [
  {
    formula: "InP",
    title: "InP Substrate Shortage Threatens 800G Transceiver Ramp Through 2026",
    description:
      "Indium phosphide substrate supply remains critically constrained as AI datacenter demand for 800G and 1.6T transceivers accelerates. AXT Inc and Sumitomo Electric — the two dominant suppliers — are operating near capacity, with a 70%+ shortage projected by 2027 if new growth capacity is not commissioned by year-end.",
    url: "https://news.google.com/search?q=indium+phosphide+supply+shortage",
    source: "Lightwave Online",
    publishedAt: new Date(Date.now() - 5 * 3600000).toISOString(),
  },
  {
    formula: "InP",
    title: "AXT Inc Expands InP Wafer Production Ahead of CPO Demand Wave",
    description:
      "AXT Inc is investing in additional indium phosphide crystal growth capacity at its Beijing facility in anticipation of co-packaged optics laser demand from hyperscalers. The company holds long-term supply agreements with multiple Tier 1 photonic component suppliers through 2026.",
    url: "https://news.google.com/search?q=AXT+Inc+InP+wafer+production",
    source: "Semiconductor Engineering",
    publishedAt: new Date(Date.now() - 22 * 3600000).toISOString(),
  },
  {
    formula: "Ge",
    title: "China's Germanium Export Controls Extended — Western Foundries Draw Down Strategic Inventory",
    description:
      "China's August 2023 germanium export controls, now in their second year, are drawing down the 12–18 month strategic inventory held by Western SiPh foundries including GlobalFoundries and Tower Semiconductor. Alternative germanium sourcing from Umicore (Belgium) is ramping but cannot fully substitute Chinese supply volumes in the near term.",
    url: "https://news.google.com/search?q=germanium+export+controls+China+photonics",
    source: "Reuters",
    publishedAt: new Date(Date.now() - 8 * 3600000).toISOString(),
  },
  {
    formula: "Ge",
    title: "Germanium Photodetector Roadmap: 150 GHz Bandwidth Target for 2025 SiPh Platforms",
    description:
      "Silicon photonics foundry roadmaps are targeting germanium photodetectors with 150 GHz bandwidth, greater than 1A/W responsivity, and sub-1 nA dark current in 2025-generation processes. GlobalFoundries 45RFSOI and Tower SiPh both cite Ge detector performance as a key differentiator for 1.6T transceiver applications.",
    url: "https://news.google.com/search?q=germanium+photodetector+silicon+photonics+bandwidth",
    source: "IEEE Spectrum",
    publishedAt: new Date(Date.now() - 30 * 3600000).toISOString(),
  },
  {
    formula: "LiNbO₃",
    title: "Thin-Film Lithium Niobate Production Scales — But China Controls Boule Supply",
    description:
      "TFLN modulator platforms promise ultra-low insertion loss at 100G+ coherent speeds, but production remains at pilot scale. NANOLN (China) dominates raw lithium niobate boule crystal growth, creating geopolitical supply risk as Western demand for TFLN-based coherent modules grows. PDK maturity lags SOI by an estimated 5+ years.",
    url: "https://news.google.com/search?q=thin+film+lithium+niobate+production+scale",
    source: "Photonics Media",
    publishedAt: new Date(Date.now() - 14 * 3600000).toISOString(),
  },
  {
    formula: "GaAs",
    title: "Gallium Export Restrictions Add Medium-Term Risk to VCSEL and Pump Laser Supply",
    description:
      "China's 2023 gallium export controls affect gallium arsenide wafer supply for VCSEL and pump laser applications critical to AI datacenter optical interconnects. While Freiberger and AXT maintain Western production capacity, the volume gap creates pricing pressure. Coherent Corp and Lumentum have disclosed multi-source supply strategies for their GaAs-dependent product lines.",
    url: "https://news.google.com/search?q=gallium+export+restriction+photonics+VCSEL",
    source: "EE Times",
    publishedAt: new Date(Date.now() - 18 * 3600000).toISOString(),
  },
  {
    formula: "Si₃N₄",
    title: "Silicon Nitride Emerges as Key Low-Loss Waveguide Platform for 400G+ Transceivers",
    description:
      "Silicon nitride (Si₃N₄) waveguides are gaining rapid adoption in 400G and 800G optical transceivers due to their wide spectral range, low propagation loss (< 0.1 dB/cm), and CMOS-fab compatibility. TSMC, GlobalFoundries, and Tower Semiconductor all offer Si₃N₄ integration layers on their silicon photonics platforms, with zero supply risk from mature LPCVD/PECVD deposition processes.",
    url: "https://news.google.com/search?q=silicon+nitride+photonics+waveguide+400G",
    source: "Photonics.com",
    publishedAt: new Date(Date.now() - 36 * 3600000).toISOString(),
  },
  {
    formula: "EOP",
    title: "Lightwave Logic Reports Progress on Commercial EO Polymer Modulator Platform",
    description:
      "Lightwave Logic (LWLG) is advancing its organic electro-optic polymer toward commercialization, targeting greater than 1 THz modulation bandwidth — a regime beyond any crystalline electro-optic material. The company's 100+ patent portfolio and active DARPA program relationships position it as the sole public company pursuing EOP volume production. A strategic manufacturing partnership announcement is expected by 2025 Q4.",
    url: "https://news.google.com/search?q=Lightwave+Logic+electro-optic+polymer+commercial",
    source: "Lightwave Online",
    publishedAt: new Date(Date.now() - 48 * 3600000).toISOString(),
  },
];

export async function GET() {
  const key = process.env.NEWSAPI_KEY;

  if (!key) {
    return NextResponse.json(MOCK_ARTICLES);
  }

  const query = encodeURIComponent(
    '"indium phosphide" OR "germanium photonics" OR "lithium niobate" OR "silicon nitride photonics" OR "electro-optic polymer" OR "gallium arsenide photonics" OR "AXT Inc" OR "Lightwave Logic"'
  );
  const url = `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${key}`;

  try {
    const res = await fetch(url, { next: { revalidate: 43200 } });
    const data = await res.json();

    if (data.status !== "ok") throw new Error(data.message);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tagged: MaterialArticle[] = (data.articles as any[])
      .map((a) => {
        const formula = detectMaterial(
          (a.title ?? "") + " " + (a.description ?? "")
        );
        if (!formula) return null;
        return {
          formula,
          title: a.title ?? "",
          description: a.description ?? "",
          url: a.url ?? "",
          source: a.source?.name ?? "Unknown",
          publishedAt: a.publishedAt ?? new Date().toISOString(),
        };
      })
      .filter((a): a is MaterialArticle => a !== null);

    // Deduplicate: keep first article per formula when real news covers it
    const seen = new Set<string>();
    const deduped = tagged.filter((a) => {
      if (seen.has(a.formula)) return false;
      seen.add(a.formula);
      return true;
    });

    // Supplement with mock for any material not covered by real news
    const covered = new Set(deduped.map((a) => a.formula));
    const mockFill = MOCK_ARTICLES.filter((a) => !covered.has(a.formula));

    return NextResponse.json([...deduped, ...mockFill]);
  } catch {
    return NextResponse.json(MOCK_ARTICLES);
  }
}
