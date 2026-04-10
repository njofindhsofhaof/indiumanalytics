import { NextResponse } from "next/server";

const MOCK_ARTICLES = [
  {
    title: "Broadcom's CPO Technology Advances Silicon Photonics Adoption in AI Datacenters",
    description: "Broadcom's latest co-packaged optics implementation shows 40% power reduction in 51.2T switch deployments, accelerating the transition from pluggable modules.",
    url: "https://example.com/broadcom-cpo",
    source: { name: "EE Times" },
    publishedAt: new Date(Date.now() - 2 * 3600000).toISOString(),
    urlToImage: null,
  },
  {
    title: "InP Substrate Shortage Threatens 800G Optical Transceiver Ramp",
    description: "Industry analysts warn that indium phosphide supply constraints could limit 800G transceiver production by 30% through 2026, benefiting vertically integrated suppliers.",
    url: "https://example.com/inp-shortage",
    source: { name: "Lightwave Online" },
    publishedAt: new Date(Date.now() - 5 * 3600000).toISOString(),
    urlToImage: null,
  },
  {
    title: "Marvell Teralynx 10 CPO Switch Achieves First Silicon Milestone",
    description: "Marvell Technology confirms first silicon of its 51.2 Tb/s Teralynx 10 switching ASIC with integrated co-packaged optics support, targeting hyperscaler deployments in 2025.",
    url: "https://example.com/marvell-teralynx",
    source: { name: "The Register" },
    publishedAt: new Date(Date.now() - 8 * 3600000).toISOString(),
    urlToImage: null,
  },
  {
    title: "POET Technologies Announces Volume Sampling of Optical Engine Platform",
    description: "POET Technologies reports successful volume sampling of its DenseLight-manufactured optical engine modules to multiple Tier 1 datacenter component customers.",
    url: "https://example.com/poet-sampling",
    source: { name: "BusinessWire" },
    publishedAt: new Date(Date.now() - 12 * 3600000).toISOString(),
    urlToImage: null,
  },
  {
    title: "Silicon Photonics Market to Reach $8.4B by 2028 on AI Datacenter Demand",
    description: "New market research forecasts silicon photonics to grow at 28% CAGR through 2028, driven by co-packaged optics adoption and 1.6T transceiver deployment.",
    url: "https://example.com/siph-market",
    source: { name: "Global Market Insights" },
    publishedAt: new Date(Date.now() - 18 * 3600000).toISOString(),
    urlToImage: null,
  },
  {
    title: "Lightwave Logic Partners with Major Photonics Firm for EO Polymer Scale-Up",
    description: "Lightwave Logic announces a joint development agreement to scale up electro-optic polymer modulator production for next-generation 200Gbaud optical links.",
    url: "https://example.com/lwlg-partner",
    source: { name: "PR Newswire" },
    publishedAt: new Date(Date.now() - 24 * 3600000).toISOString(),
    urlToImage: null,
  },
  {
    title: "OFC 2025: Key Takeaways for Silicon Photonics Investors",
    description: "Optical Fiber Conference 2025 highlights: CPO adoption timelines, 1.6T module sampling, and thin-film lithium niobate modulator roadmaps from major vendors.",
    url: "https://example.com/ofc-2025",
    source: { name: "Photonics Media" },
    publishedAt: new Date(Date.now() - 36 * 3600000).toISOString(),
    urlToImage: null,
  },
  {
    title: "Coherent Corp Reports Strong Demand for 800G Transceivers in Q3",
    description: "Coherent Corp beats earnings estimates driven by 800G transceiver demand from hyperscalers and ongoing laser supply agreements for co-packaged optics programs.",
    url: "https://example.com/coherent-q3",
    source: { name: "Reuters" },
    publishedAt: new Date(Date.now() - 48 * 3600000).toISOString(),
    urlToImage: null,
  },
];

export async function GET() {
  const key = process.env.NEWSAPI_KEY;

  if (!key) {
    return NextResponse.json(MOCK_ARTICLES);
  }

  const query = encodeURIComponent(
    'photonics OR "silicon photonics" OR "co-packaged optics" OR CPO OR "optical interconnect"'
  );
  const url = `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${key}`;

  try {
    const res = await fetch(url, { next: { revalidate: 1800 } });
    const data = await res.json();

    if (data.status !== "ok") {
      throw new Error(data.message);
    }

    return NextResponse.json(data.articles);
  } catch {
    return NextResponse.json(MOCK_ARTICLES);
  }
}
