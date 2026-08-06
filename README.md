# Photonic Analytics

Investment analytics dashboard for Silicon Photonics & Photonic AI — built with Next.js 14, Tailwind CSS, deployed on Vercel.

---

## Pages

**Dashboard** — Photonic AI development stages panel (3 layers: Interconnect TRL 8–9, Photonic Switch TRL 5–7, Photonic Processor TRL 3–5) with TRL progress bars, milestone timelines, and technical challenges. Top movers panel (1M leaders/laggards).

**Stocks** — Tracks 12 silicon photonics tickers with live price data, % change, volume, 52-week range, and interactive price charts across multiple timeframes.

**Materials** — Supply chain risk analysis for 7 critical photonic materials (InP, Ge, LiNbO₃, GaAs, Si₃N₄, SOI, EOP) with live news per material updated every 12 hours.

**Supply Chain** — 6-layer supply chain diagram from raw materials through wafer production, photonic foundry, integration, CPO packaging, to systems & hyperscalers.

**Thesis** — Structured investment thesis covering macro tailwinds, co-packaged optics adoption, technology roadmap (2024–2030+), and key risks.

**News** — Aggregated news in three sections: company IR links, commercial sources (Reuters, Bloomberg, IEEE Spectrum, etc.), and sector news with automatic stock ticker tagging.

**Experts** — Curated list of X/Twitter accounts and Substack newsletters covering photonics and AI semiconductor investing.

---

## Stack

Next.js 14 · Tailwind CSS · Recharts · SWR · Yahoo Finance API · SEC EDGAR API · Vercel

---

## Changelog

### 2026-08-06 — Upcoming Catalysts: verified real dates
- Replaced quarter-bucket placeholders with confirmed dates for COHR (Aug 12), MRVL (Aug 27), AVGO (Sep 2), ECOC 2026 (Sep 20–24, Málaga), OFC 2027 (Mar 7–11, LA) — verified via web search
- Reordered list chronologically; LITE Q1 FY2027 earnings marked as an estimate pending official announcement
- Set up a monthly scheduled review to keep this section current (see Automation section)

### 2026-08-06 — Vietnam page: policy source links
- Added source links to Resolution 57-NQ/TW, Decree 57/2021/NĐ-CP, and Circular 32/2025/TT-BKHCN in the Government Policy Framework table (previously text-only, no link)

### 2026-08-06 — Citation links, methodology transparency, last-reviewed dates, confirmed-vs-estimate labeling
- Added DOI/arXiv hyperlinks to the 4 Layer 3 (Photonic Processor) milestone citations on Dashboard (Nature Photonics, Science, arXiv, Nature), matching the existing `[[label|url]]` pattern used for the AMD/Enosemi link in Layer 2
- About page Methodology: expanded the TRL bullet with the NASA/DoD 9-level scale mapping, and added new "Source bias disclosure" and "Revision policy" bullets
- Added reusable `LastReviewed` component; shown at the bottom of Dashboard, Vietnam, Supply Chain, and Thesis pages
- Vietnam page: labeled VSAP Lab's Investment and Scale stat tiles as "reported, groundbreaking coverage" and "mgmt-stated target, unverified" respectively, piloting confirmed-vs-estimate data labeling

### 2026-07-10 — Merge News into Stocks page, remove standalone News nav item
- Removed `/news` page and nav link; News section (header, tag pills, NewsFeed) now renders below the map on the Stocks page
- Removed dead `revalidatePath("/news")` from the weekly revalidate cron

### 2026-07-10 — Credibility fixes: citations, disclaimer, About page
- About page translated to English; added Contact section with LinkedIn link
- Added inline citation links (Nokia Bell Labs traffic report, IEA Energy and AI 2025, IPSR-I Roadmap 2024, AMD/Enosemi acquisition announcement) to Thesis page and Dashboard's Photonic AI Stages panel via new `[[label|url]]` syntax (`lib/richText.ts`)
- Softened unverified figures instead of citing them: $3-5B TAM shift now flagged as an illustrative estimate; 70%+ InP shortage and 12-18mo Ge inventory reworded as industry-consensus estimates, not disclosed figures (also fixed in a mock news article that had attributed the InP shortage figure to a fake "Lightwave Online" headline)
- Added reusable `Disclaimer` component, now shown on Dashboard, Materials, Supply Chain, and Stocks (previously only on Thesis, and only on desktop)
- Added About page (`/about`) with real author bio/methodology content, linked in nav
- Added CIEN/ANET/GLW/SIVE to news ticker-keyword detection (previously only CRDO of the 5 new watchlist tickers)
- Confirmed via Vercel API + live API checks: Stocks page 12-ticker/stuck-loading report and missing 5-ticker watchlist were both already fixed on production (stale browser tab, not a code or deploy issue) — no code change needed there

### 2026-07-10 — News: fix stale/wrong company news links
- Broadcom, Marvell, Lumentum, Applied Optoelectronics, Credo, Celestica: switched from investor-relations pages to each company's general newsroom/press page
- Fabrinet, MACOM, AXT: fixed stale IR subdomain/path (each pointed at the wrong or dead URL)
- Fabrinet, AAOI, MACOM, Tower Semiconductor, Celestica: corrected to exact URLs supplied by user (fabrinet.com/markets, newsroom.ao-inc.com, macom.com/updates/news, towersemi.com press-release page, celestica.com blog)

### 2026-04-16 — Dashboard: remove Top Movers panel
- Removed Top Movers (1M) panel from dashboard

### 2026-04-16 — Dashboard: Photonic AI stages panel, remove Sector Performance table
- Added PhotonicStages component (3-layer development status: Interconnect TRL 8–9, Photonic Switch TRL 5–7, Photonic Processor TRL 3–5) with TRL progress bars, milestone timelines, and technical challenges (Layer 3)
- Removed Sector Performance table from dashboard
- Removed KPI cards row (Top Gainer, Top Loser, Market Sentiment, SEC Filings)
- Removed SEC 8-K filings table from dashboard
- Top Movers expanded to 2-column grid (Leaders + Laggards)

### 2026-04-12 — Supply chain deep content
- Added 6 expandable layer cards with detailed descriptions, key actor grids, and concentration bars
- Added 5 structural bottlenecks section (InP duopoly, Ge export controls, CoWoS capacity, SOI monoculture, PDK fragmentation)
- Richer page header with context on SiPh inheriting CMOS infrastructure

### 2026-04-12 — Expert page overhaul
- Replaced academic X accounts with 14 curated community analysts (illyquid, PhotonCap, crux_capital_, etc.)
- Replaced placeholder Substacks with 3 real newsletters: @photoncap, @vikramskr, @cruxcapitalgroup

### 2026-04-12 — Dashboard layout fixes
- SEC Filings KPI card link removed
- SEC 8-K filings table moved to bottom of dashboard (below Upcoming Catalysts)

### 2026-04-12 — Live material news, sector ticker tags, SEC filings table
- Material News: live article cards per material with formula badge + summary, 12h refresh
- Sector News: auto-detect related stock tickers (AVGO, COHR, etc.) in article content
- SEC filings table on dashboard showing company/form/date/link, daily refresh
- KPICard now supports optional clickable href

### 2026-04-12 — Content overhaul: sector table, Si₃N₄, news sources
- Dashboard: replaced AVGO price chart with Sector Performance Table (6 groups, 1M/3M/1Y)
- Stocks API: added ?range=1mo|3mo|1y param
- Supply chain: added Si₃N₄ to Layer 1; split Layer 4 into Photonic Integration + CPO Packaging; added Ciena/Infinera to Layer 5
- Materials: added Si₃N₄ as 7th material; updated Ge with 150 GHz spec; added Material News grid
- Thesis: added 1,088 EB/mo forecast, 415 TWh energy data, tech-roadmap section, yield risk
- News: added 7 commercial sources; 3-section NewsFeed layout
