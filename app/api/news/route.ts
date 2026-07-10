import { NextResponse } from "next/server";

type Article = {
  title: string;
  description: string | null;
  url: string;
  source: { name: string };
  publishedAt: string;
  urlToImage: null;
  tag?: string;
  commercial?: boolean;
  tickers?: string[];
};

// Static IR links — always included
const COMPANY_NEWS: Article[] = [
  { title: "Broadcom (AVGO) — Newsroom", description: "Co-packaged optics, custom AI silicon, and photonic switch news from Broadcom's newsroom.", url: "https://www.broadcom.com/company/news", source: { name: "Broadcom Newsroom" }, publishedAt: new Date(Date.now() - 1 * 3600000).toISOString(), urlToImage: null, tag: "AVGO" },
  { title: "Marvell (MRVL) — Newsroom", description: "CPO, Teralynx switch ASIC, and custom cloud silicon announcements from Marvell Technology.", url: "https://www.marvell.com/company/newsroom.html", source: { name: "Marvell Newsroom" }, publishedAt: new Date(Date.now() - 2 * 3600000).toISOString(), urlToImage: null, tag: "MRVL" },
  { title: "Coherent Corp (COHR) — Press Releases", description: "InP laser, 800G/1.6T transceiver, silicon photonics (incl. Intel SiPh assets), and vertical integration news from Coherent Corp.", url: "https://www.coherent.com/news/press-releases", source: { name: "Coherent IR" }, publishedAt: new Date(Date.now() - 3 * 3600000).toISOString(), urlToImage: null, tag: "COHR" },
  { title: "Lumentum (LITE) — Newsroom", description: "EML pump lasers, ROADM, and photonic component news from Lumentum.", url: "https://www.lumentum.com/en/media-room/news-releases", source: { name: "Lumentum Newsroom" }, publishedAt: new Date(Date.now() - 4 * 3600000).toISOString(), urlToImage: null, tag: "LITE" },
  { title: "Fabrinet (FN) — Markets", description: "Optical manufacturing capacity, customer program updates, and earnings from Fabrinet.", url: "https://fabrinet.com/markets", source: { name: "Fabrinet" }, publishedAt: new Date(Date.now() - 5 * 3600000).toISOString(), urlToImage: null, tag: "FN" },
  { title: "MACOM Technology (MTSI) — Newsroom", description: "III-V compound semiconductor, analog photonics, and optical networking news from MACOM.", url: "https://www.macom.com/updates/news", source: { name: "MACOM Newsroom" }, publishedAt: new Date(Date.now() - 6 * 3600000).toISOString(), urlToImage: null, tag: "MTSI" },
  { title: "POET Technologies (POET) — News", description: "Optical interposer platform, DenseLight manufacturing, and customer sampling updates.", url: "https://www.poet-technologies.com/news.html", source: { name: "POET Technologies" }, publishedAt: new Date(Date.now() - 7 * 3600000).toISOString(), urlToImage: null, tag: "POET" },
  { title: "Lightwave Logic (LWLG) — Press Releases", description: "Electro-optic polymer modulator technology updates and partnership announcements.", url: "https://lightwavelogic.com/news/press-releases", source: { name: "Lightwave Logic IR" }, publishedAt: new Date(Date.now() - 8 * 3600000).toISOString(), urlToImage: null, tag: "LWLG" },
  { title: "AXT Inc (AXTI) — Investor News", description: "InP and GaAs substrate production updates and supply chain news from AXT Inc.", url: "https://investors.axt.com/Investors/news/default.aspx", source: { name: "AXT Inc IR" }, publishedAt: new Date(Date.now() - 9 * 3600000).toISOString(), urlToImage: null, tag: "AXTI" },
  { title: "Tower Semiconductor (TSEM) — News", description: "Silicon photonics foundry services, 300mm SiPh platform, and customer design wins.", url: "https://towersemi.com/news-events/press-release-page/", source: { name: "Tower Semiconductor" }, publishedAt: new Date(Date.now() - 10 * 3600000).toISOString(), urlToImage: null, tag: "TSEM" },
  { title: "Applied Optoelectronics (AAOI) — Newsroom", description: "400G/800G DWDM transceiver modules for hyperscaler datacenter deployments, revenue guidance, and manufacturing updates.", url: "https://newsroom.ao-inc.com/", source: { name: "AAOI Newsroom" }, publishedAt: new Date(Date.now() - 11 * 3600000).toISOString(), urlToImage: null, tag: "AAOI" },
  { title: "GlobalFoundries (GFS) — Newsroom", description: "Silicon photonics foundry platform, 300mm SiPh process technology, and photonic IC ecosystem partnerships.", url: "https://gf.com/newsroom/", source: { name: "GlobalFoundries" }, publishedAt: new Date(Date.now() - 12 * 3600000).toISOString(), urlToImage: null, tag: "GFS" },
  { title: "Credo Technology (CRDO) — Newsroom", description: "HiWire Active Electrical Cables, SerDes IP, and co-packaged optics connectivity for AI datacenter fabric.", url: "https://credosemi.com/newsroom/", source: { name: "Credo Newsroom" }, publishedAt: new Date(Date.now() - 13 * 3600000).toISOString(), urlToImage: null, tag: "CRDO" },
  { title: "Celestica (CLS) — Blog", description: "Optical module manufacturing at scale, 800G/1.6T transceiver capacity, and hyperscaler supply chain announcements.", url: "https://www.celestica.com/blog/main", source: { name: "Celestica Blog" }, publishedAt: new Date(Date.now() - 14 * 3600000).toISOString(), urlToImage: null, tag: "CLS" },
];

const COMMERCIAL_NEWS: Article[] = [
  { title: "Reuters — Silicon Photonics", description: "Reuters coverage of silicon photonics, AI optical infrastructure, and photonic semiconductor news.", url: "https://www.reuters.com/search/news?blob=silicon+photonics", source: { name: "Reuters" }, publishedAt: new Date(Date.now() - 11 * 3600000).toISOString(), urlToImage: null, commercial: true },
  { title: "Bloomberg — AI Optical Infrastructure", description: "Bloomberg Technology coverage of co-packaged optics, AI datacenter networking, and photonic stocks.", url: "https://www.bloomberg.com/search?query=silicon+photonics", source: { name: "Bloomberg" }, publishedAt: new Date(Date.now() - 13 * 3600000).toISOString(), urlToImage: null, commercial: true },
  { title: "IEEE Spectrum — Silicon Photonics", description: "IEEE Spectrum technical coverage of silicon photonics research, CPO advances, and photonic IC integration.", url: "https://spectrum.ieee.org/search?q=silicon+photonics", source: { name: "IEEE Spectrum" }, publishedAt: new Date(Date.now() - 15 * 3600000).toISOString(), urlToImage: null, commercial: true },
  { title: "Light Reading — Optical Networking", description: "Telecom and datacenter optical networking news — 400G/800G/1.6T deployments and CPO market coverage.", url: "https://www.lightreading.com/optical-networking", source: { name: "Light Reading" }, publishedAt: new Date(Date.now() - 17 * 3600000).toISOString(), urlToImage: null, commercial: true },
  { title: "EE Times — Photonic Integration", description: "Electronics Engineering Times coverage of silicon photonics IC design, packaging, and manufacturing.", url: "https://www.eetimes.com/category/photonics/", source: { name: "EE Times" }, publishedAt: new Date(Date.now() - 19 * 3600000).toISOString(), urlToImage: null, commercial: true },
  { title: "Photonics.com — Industry News", description: "Photonics industry news covering lasers, fiber optics, imaging, and silicon photonics components.", url: "https://www.photonics.com/Articles/Silicon_Photonics/a66966", source: { name: "Photonics.com" }, publishedAt: new Date(Date.now() - 21 * 3600000).toISOString(), urlToImage: null, commercial: true },
  { title: "WSJ — Optical Networking", description: "Wall Street Journal tech coverage of optical networking, hyperscaler capex, and photonic semiconductor stocks.", url: "https://www.wsj.com/search?query=co-packaged+optics", source: { name: "WSJ" }, publishedAt: new Date(Date.now() - 23 * 3600000).toISOString(), urlToImage: null, commercial: true },
  { title: "Semiconductor Engineering — Photonics", description: "Technical analysis of silicon photonics IC design, chiplet integration, CPO architectures, and photonic process nodes.", url: "https://semiengineering.com/?s=silicon+photonics", source: { name: "Semiconductor Engineering" }, publishedAt: new Date(Date.now() - 25 * 3600000).toISOString(), urlToImage: null, commercial: true },
  { title: "The Register — AI & Optical Interconnect", description: "News and analysis on AI datacenter infrastructure, optical networking buildout, and photonic chip investments.", url: "https://www.theregister.com/Tag/photonics/", source: { name: "The Register" }, publishedAt: new Date(Date.now() - 27 * 3600000).toISOString(), urlToImage: null, commercial: true },
];

const TICKER_KEYWORDS: Record<string, string[]> = {
  AVGO: ["Broadcom", "AVGO", "Tomahawk"],
  MRVL: ["Marvell", "MRVL", "Teralynx"],
  COHR: ["Coherent Corp", "COHR"],
  LITE: ["Lumentum", "LITE"],
  FN: ["Fabrinet"],
  MTSI: ["MACOM", "MTSI"],
  AAOI: ["Applied Optoelectronics", "AAOI"],
  AXTI: ["AXT Inc", "AXTI"],
  POET: ["POET Technologies", "POET"],
  LWLG: ["Lightwave Logic", "LWLG"],
  TSEM: ["Tower Semiconductor", "Tower Semi", "TSEM"],
  GFS: ["GlobalFoundries", "GFS"],
  CRDO: ["Credo Technology", "Credo", "CRDO", "HiWire"],
  CLS: ["Celestica", "CLS"],
  CIEN: ["Ciena", "CIEN"],
  ANET: ["Arista Networks", "Arista", "ANET"],
  GLW: ["Corning", "GLW"],
  SIVE: ["SiPhotonics", "SIVE"],
  NVDA: ["Nvidia", "NVDA", "NVLink"],
};

function detectTickers(text: string): string[] {
  return Object.entries(TICKER_KEYWORDS)
    .filter(([, kws]) => kws.some((kw) => text.toLowerCase().includes(kw.toLowerCase())))
    .map(([ticker]) => ticker);
}

function stripHtml(html: string): string {
  return html
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/<[^>]+>/g, "")
    .trim();
}

function parseRssBlock(block: string): { title: string; link: string; pubDate: string; sourceName: string; description: string } {
  const get = (tag: string) =>
    block.match(new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\\/${tag}>`))?.[1]?.trim() ?? "";

  return {
    title: get("title"),
    link: get("link"),
    pubDate: get("pubDate"),
    sourceName: get("source") || "Google News",
    description: stripHtml(get("description")).slice(0, 300),
  };
}

async function fetchGoogleNewsRSS(): Promise<Article[]> {
  const query = encodeURIComponent(
    '"silicon photonics" OR "co-packaged optics" OR "optical interconnect" OR "optical compute" OR Broadcom OR Marvell OR "Coherent Corp" OR Lumentum OR Fabrinet OR POET OR "Lightwave Logic" OR "Credo Technology" OR Celestica OR "800G" OR "1.6T"'
  );
  const rssUrl = `https://news.google.com/rss/search?q=${query}&hl=en-US&gl=US&ceid=US:en`;

  const res = await fetch(rssUrl, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; RSS reader)" },
    next: { revalidate: 604800 },
  });

  if (!res.ok) throw new Error(`RSS ${res.status}`);

  const xml = await res.text();
  const blocks = Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/g)).map((m) => m[1]);

  return blocks
    .slice(0, 25)
    .map((block) => {
      const { title, link, pubDate, sourceName, description } = parseRssBlock(block);
      if (!title || !link) return null;
      return {
        title,
        description: description || null,
        url: link,
        source: { name: sourceName },
        publishedAt: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
        urlToImage: null,
        tickers: detectTickers(title + " " + description),
      } as Article;
    })
    .filter((a): a is Article => a !== null);
}

export async function GET() {
  // NewsAPI if key is set
  const key = process.env.NEWSAPI_KEY;
  if (key) {
    const query = encodeURIComponent(
      'photonics OR "silicon photonics" OR "co-packaged optics" OR CPO OR "optical interconnect" OR AVGO OR MRVL OR COHR OR LITE OR AXTI OR POET OR LWLG OR CRDO OR CLS OR "800G" OR "1.6T"'
    );
    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&pageSize=30&apiKey=${key}`,
        { next: { revalidate: 604800 } }
      );
      const data = await res.json();
      if (data.status === "ok") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const tagged = (data.articles as any[]).map((a) => ({
          ...a,
          tickers: detectTickers((a.title ?? "") + " " + (a.description ?? "")),
        }));
        return NextResponse.json([...COMPANY_NEWS, ...COMMERCIAL_NEWS, ...tagged]);
      }
    } catch { /* fall through */ }
  }

  // Primary free source: Google News RSS
  try {
    const rssArticles = await fetchGoogleNewsRSS();
    return NextResponse.json([...COMPANY_NEWS, ...COMMERCIAL_NEWS, ...rssArticles]);
  } catch {
    // Last resort: static links only
    return NextResponse.json([...COMPANY_NEWS, ...COMMERCIAL_NEWS]);
  }
}
