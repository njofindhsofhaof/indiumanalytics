# Photonic Analytics

Investment analytics dashboard for Silicon Photonics & Photonic AI — built with Next.js 14, Tailwind CSS, deployed on Vercel.

---

## Pages

**Dashboard** — Real-time KPI cards (top gainer/loser, market sentiment, SEC filing count), sector performance table grouped by supply chain role with 1M/3M/1Y returns, top movers panel, and a SEC 8-K filings table updated daily.

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

### 2026-04-16 — Dashboard: Photonic AI development stages panel
- Added 3-layer development status section to dashboard (Interconnect TRL 8–9, Photonic Switch TRL 5–7, Photonic Processor TRL 3–5)
- Each layer shows TRL progress bars by sub-segment, timeline milestones with dates, and technical challenges (Layer 3)
- Removed KPI cards row (Top Gainer, Top Loser, Market Sentiment, SEC Filings)
- Removed SEC 8-K filings table from dashboard

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
