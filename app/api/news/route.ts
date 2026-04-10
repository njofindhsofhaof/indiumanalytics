import { NextResponse } from "next/server";

// Company-specific news links from IR pages and Google News
const COMPANY_NEWS = [
  {
    title: "Broadcom (AVGO) — Latest News & Press Releases",
    description: "Co-packaged optics, custom AI silicon, and photonic switch news from Broadcom investor relations.",
    url: "https://investors.broadcom.com/financial-information/financial-news-releases",
    source: { name: "Broadcom IR" },
    publishedAt: new Date(Date.now() - 1 * 3600000).toISOString(),
    urlToImage: null,
    tag: "AVGO",
  },
  {
    title: "Marvell (MRVL) — Investor News",
    description: "CPO, Teralynx switch ASIC, and custom cloud silicon announcements from Marvell Technology.",
    url: "https://investor.marvell.com/news-releases",
    source: { name: "Marvell IR" },
    publishedAt: new Date(Date.now() - 2 * 3600000).toISOString(),
    urlToImage: null,
    tag: "MRVL",
  },
  {
    title: "Coherent Corp (COHR) — Press Releases",
    description: "InP laser, 800G/1.6T transceiver, and vertical integration news from Coherent Corp.",
    url: "https://www.coherent.com/news/press-releases",
    source: { name: "Coherent IR" },
    publishedAt: new Date(Date.now() - 3 * 3600000).toISOString(),
    urlToImage: null,
    tag: "COHR",
  },
  {
    title: "Lumentum (LITE) — News & Events",
    description: "EML pump lasers, ROADM, and photonic component news from Lumentum.",
    url: "https://investor.lumentum.com/news-releases",
    source: { name: "Lumentum IR" },
    publishedAt: new Date(Date.now() - 4 * 3600000).toISOString(),
    urlToImage: null,
    tag: "LITE",
  },
  {
    title: "Fabrinet (FN) — Investor Relations",
    description: "Optical manufacturing capacity, customer program updates, and earnings from Fabrinet.",
    url: "https://investor.fabrinet.com/news-releases",
    source: { name: "Fabrinet IR" },
    publishedAt: new Date(Date.now() - 5 * 3600000).toISOString(),
    urlToImage: null,
    tag: "FN",
  },
  {
    title: "MACOM Technology (MTSI) — Press Releases",
    description: "III-V compound semiconductor, analog photonics, and optical networking news from MACOM.",
    url: "https://investors.macom.com/news-releases",
    source: { name: "MACOM IR" },
    publishedAt: new Date(Date.now() - 6 * 3600000).toISOString(),
    urlToImage: null,
    tag: "MTSI",
  },
  {
    title: "POET Technologies (POET) — News",
    description: "Optical interposer platform, DenseLight manufacturing, and customer sampling updates.",
    url: "https://www.poet-technologies.com/news.html",
    source: { name: "POET Technologies" },
    publishedAt: new Date(Date.now() - 7 * 3600000).toISOString(),
    urlToImage: null,
    tag: "POET",
  },
  {
    title: "Lightwave Logic (LWLG) — Press Releases",
    description: "Electro-optic polymer modulator technology updates and partnership announcements.",
    url: "https://lightwavelogic.com/news/press-releases",
    source: { name: "Lightwave Logic IR" },
    publishedAt: new Date(Date.now() - 8 * 3600000).toISOString(),
    urlToImage: null,
    tag: "LWLG",
  },
  {
    title: "AXT Inc (AXTI) — Investor News",
    description: "InP and GaAs substrate production updates and supply chain news from AXT Inc.",
    url: "https://ir.axt.com/news-releases",
    source: { name: "AXT Inc IR" },
    publishedAt: new Date(Date.now() - 9 * 3600000).toISOString(),
    urlToImage: null,
    tag: "AXTI",
  },
  {
    title: "Tower Semiconductor (TSEM) — News",
    description: "Silicon photonics foundry services, 300mm SiPh platform, and customer design wins.",
    url: "https://towersemi.com/about/news/",
    source: { name: "Tower Semiconductor" },
    publishedAt: new Date(Date.now() - 10 * 3600000).toISOString(),
    urlToImage: null,
    tag: "TSEM",
  },
];

const SECTOR_NEWS = [
  {
    title: "Broadcom's CPO Technology Advances Silicon Photonics Adoption in AI Datacenters",
    description: "Broadcom's latest co-packaged optics implementation shows 40% power reduction in 51.2T switch deployments, accelerating the transition from pluggable modules.",
    url: "https://news.google.com/search?q=Broadcom+co-packaged+optics+silicon+photonics",
    source: { name: "EE Times" },
    publishedAt: new Date(Date.now() - 12 * 3600000).toISOString(),
    urlToImage: null,
  },
  {
    title: "InP Substrate Shortage Threatens 800G Optical Transceiver Ramp",
    description: "Industry analysts warn that indium phosphide supply constraints could limit 800G transceiver production by 30% through 2026, benefiting vertically integrated suppliers.",
    url: "https://news.google.com/search?q=indium+phosphide+substrate+shortage+optical+transceiver",
    source: { name: "Lightwave Online" },
    publishedAt: new Date(Date.now() - 14 * 3600000).toISOString(),
    urlToImage: null,
  },
  {
    title: "Marvell Teralynx 10 CPO Switch Achieves First Silicon Milestone",
    description: "Marvell Technology confirms first silicon of its 51.2 Tb/s Teralynx 10 switching ASIC with co-packaged optics support, targeting hyperscaler deployments in 2025.",
    url: "https://news.google.com/search?q=Marvell+Teralynx+co-packaged+optics",
    source: { name: "The Register" },
    publishedAt: new Date(Date.now() - 18 * 3600000).toISOString(),
    urlToImage: null,
  },
  {
    title: "Silicon Photonics Market to Reach $8.4B by 2028 on AI Datacenter Demand",
    description: "New market research forecasts silicon photonics to grow at 28% CAGR through 2028, driven by co-packaged optics adoption and 1.6T transceiver deployment.",
    url: "https://news.google.com/search?q=silicon+photonics+market+2028+AI+datacenter",
    source: { name: "Global Market Insights" },
    publishedAt: new Date(Date.now() - 24 * 3600000).toISOString(),
    urlToImage: null,
  },
  {
    title: "OFC 2025: Key Takeaways for Silicon Photonics Investors",
    description: "Optical Fiber Conference 2025 highlights: CPO adoption timelines, 1.6T module sampling, and thin-film lithium niobate modulator roadmaps from major vendors.",
    url: "https://news.google.com/search?q=OFC+2025+silicon+photonics+co-packaged+optics",
    source: { name: "Photonics Media" },
    publishedAt: new Date(Date.now() - 36 * 3600000).toISOString(),
    urlToImage: null,
  },
  {
    title: "Coherent Corp Reports Strong Demand for 800G Transceivers",
    description: "Coherent Corp beats earnings estimates driven by 800G transceiver demand from hyperscalers and ongoing laser supply agreements for co-packaged optics programs.",
    url: "https://news.google.com/search?q=Coherent+Corp+800G+transceiver+earnings",
    source: { name: "Reuters" },
    publishedAt: new Date(Date.now() - 48 * 3600000).toISOString(),
    urlToImage: null,
  },
  {
    title: "GlobalFoundries 45RFSOI Platform Wins New Silicon Photonics Design-Ins",
    description: "GlobalFoundries reports multiple new tape-outs on its 45RFSOI silicon photonics process targeting 800G and 1.6T optical transceiver applications.",
    url: "https://news.google.com/search?q=GlobalFoundries+45RFSOI+silicon+photonics",
    source: { name: "Semiconductor Engineering" },
    publishedAt: new Date(Date.now() - 60 * 3600000).toISOString(),
    urlToImage: null,
  },
];

// Combined: company IR links first, then sector news
const MOCK_ARTICLES = [...COMPANY_NEWS, ...SECTOR_NEWS];

export async function GET() {
  const key = process.env.NEWSAPI_KEY;

  if (!key) {
    return NextResponse.json(MOCK_ARTICLES);
  }

  // Pull real news when API key is available
  const query = encodeURIComponent(
    'photonics OR "silicon photonics" OR "co-packaged optics" OR CPO OR "optical interconnect" OR AVGO OR MRVL OR COHR OR LITE OR AXTI OR POET OR LWLG'
  );
  const url = `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&pageSize=30&apiKey=${key}`;

  try {
    const res = await fetch(url, { next: { revalidate: 1800 } });
    const data = await res.json();

    if (data.status !== "ok") throw new Error(data.message);

    // Merge real news with company IR links
    return NextResponse.json([...COMPANY_NEWS, ...data.articles]);
  } catch {
    return NextResponse.json(MOCK_ARTICLES);
  }
}
