import { NextResponse } from "next/server";

type Article = {
  title: string;
  description: string | null;
  url: string;
  source: { name: string };
  publishedAt: string;
  urlToImage: null;
  tag: string;
};

// Company newsroom / investor relations links
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
  { title: "Ciena (CIEN) — Newsroom", description: "WaveLogic coherent DSP, optical networking systems, and AI datacenter backbone news from Ciena.", url: "https://www.ciena.com/about/newsroom", source: { name: "Ciena Newsroom" }, publishedAt: new Date(Date.now() - 15 * 3600000).toISOString(), urlToImage: null, tag: "CIEN" },
  { title: "Arista Networks (ANET) — News", description: "AI datacenter switching fabric and 800G/1.6T networking announcements from Arista Networks.", url: "https://www.arista.com/en/company/news", source: { name: "Arista Networks" }, publishedAt: new Date(Date.now() - 16 * 3600000).toISOString(), urlToImage: null, tag: "ANET" },
  { title: "Corning (GLW) — News & Events", description: "Optical fiber, cable, and CPO-related manufacturing news from Corning.", url: "https://www.corning.com/worldwide/en/about-us/news-events.html", source: { name: "Corning" }, publishedAt: new Date(Date.now() - 17 * 3600000).toISOString(), urlToImage: null, tag: "GLW" },
  { title: "Sivers Semiconductors (SIVE) — Newsroom", description: "Silicon photonics IP and optical component updates from Sivers Semiconductors.", url: "https://www.sivers-semiconductors.com/sivers-newsroom/", source: { name: "Sivers Semiconductors" }, publishedAt: new Date(Date.now() - 18 * 3600000).toISOString(), urlToImage: null, tag: "SIVE" },
];

export async function GET() {
  return NextResponse.json(COMPANY_NEWS);
}
