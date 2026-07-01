# Photonic Analytics — Feature Overview

Nền tảng theo dõi đầu tư Silicon Photonics & Photonic AI, xây dựng bằng Next.js 14 + Tailwind CSS, deploy trên Vercel.

---

## Trang Dashboard (`/`)

- **4 KPI Cards** cập nhật real-time từ Yahoo Finance:
  - Top Gainer 1M — ticker tăng mạnh nhất trong tháng
  - Top Loser 1M — ticker giảm mạnh nhất trong tháng
  - Market Sentiment — Bullish / Bearish / Neutral dựa trên tỉ lệ tăng/giảm
  - SEC Filings — số lượng báo cáo 8-K có đề cập "silicon photonics" kể từ Jan 2024

- **Sector Performance Table** — 6 nhóm ngành phân theo chuỗi cung ứng:
  - Chip Makers (AVGO, MRVL)
  - Foundries (TSEM, GFS)
  - Laser / Emitters (LITE, COHR)
  - Optical Mfg (FN, MTSI)
  - Materials (AXTI)
  - Small Cap / Platform (POET, LWLG, AAOI)
  - Mỗi nhóm hiển thị % trung bình: 1M / 3M / 1Y + mũi tên xu hướng
  - Tự động refresh mỗi 5 phút

- **Top Movers Panel** — liệt kê 4 ticker tăng mạnh nhất và 3 ticker giảm mạnh nhất trong tháng

- **Upcoming Catalysts** — lịch sự kiện quan trọng (earnings, conference, product milestone)

- **SEC 8-K Filings Table** (cuối trang) — liệt kê các báo cáo 8-K từ SEC EDGAR có chứa "silicon photonics", kèm công ty, ngày, form type, link EDGAR. Refresh 1 lần/ngày.

---

## Trang Stocks (`/stocks`)

- **Bảng theo dõi 12 cổ phiếu** trong không gian Silicon Photonics:
  AVGO, MRVL, COHR, LITE, FN, MTSI, AAOI, AXTI, POET, LWLG, TSEM, GFS
- Các cột: Symbol · Tên công ty · Sector · Giá · % thay đổi 1M · Volume · 52W High/Low
- **Price Chart** cho từng ticker — hỗ trợ các khung thời gian: 1W / 1M / 3M / 6M / 1Y
- Dữ liệu từ Yahoo Finance qua API proxy, refresh 5 phút/lần
- Fallback sang dữ liệu mock nếu Yahoo Finance không phản hồi

---

## Trang Materials (`/materials`)

- **Bảng 7 vật liệu quang tử trọng yếu**:
  - InP (Indium Phosphide) — Critical risk
  - Ge (Germanium) — High risk, mục tiêu 150 GHz bandwidth
  - LiNbO₃ (Lithium Niobate) — High risk, thin-film platform
  - GaAs (Gallium Arsenide) — Medium risk
  - SiO₂/SOI (Silicon-on-Insulator) — Low risk, 95%+ of commercial SiPh
  - Si₃N₄ (Silicon Nitride) — Low risk, CMOS-compatible passive waveguide
  - EOP (Electro-Optic Polymers) — Emerging, >1 THz potential
  - Mỗi vật liệu: mức độ rủi ro chuỗi cung ứng, nhà sản xuất chính, ứng dụng

- **Material News & Updates** — bài báo thực tế theo từng vật liệu:
  - Badge công thức (InP, Ge, LiNbO₃...) + tiêu đề + tóm tắt + nguồn + thời gian
  - Gắn tag tự động qua keyword matching (nếu có NewsAPI key)
  - Fallback: 8 bài viết được biên tập sẵn (1–2 bài/vật liệu)
  - Refresh 12 giờ/lần

- **Phân tích tại sao vật liệu quan trọng** với nhà đầu tư Photonic AI

---

## Trang Supply Chain (`/supply-chain`)

Sơ đồ chuỗi cung ứng 6 tầng với mũi tên kết nối:

| Tầng | Nội dung |
|------|----------|
| 1 — Raw Materials | InP, SiO₂/Si, LiNbO₃, Ge, GaAs, Si₃N₄ |
| 2 — Substrate & Wafer | AXT (AXTI), Sumitomo Electric, Soitec, Shin-Etsu |
| 3 — Photonic Foundry | Tower Semi (TSEM), GlobalFoundries (GFS), TSMC, Intel Foundry |
| 4a — Photonic Integration | Coherent (COHR), Lumentum (LITE), MACOM (MTSI), POET |
| 4b — CPO Packaging | Fabrinet (FN), TSMC COUPE, Ayar Labs |
| 5 — Systems & Hyperscalers | Broadcom (AVGO), Marvell (MRVL), Ciena/Infinera, Google/AWS/Azure |

---

## Trang Thesis (`/thesis`)

Luận điểm đầu tư có cấu trúc gồm 4 phần:

- **Macro Tailwinds** — AI traffic forecast 1,088 EB/tháng năm 2033 (24% CAGR), năng lượng data center 415 TWh (2024) → 700–1,720 TWh (2035); bandwidth wall thúc đẩy CPO
- **Co-Packaged Optics (CPO)** — cơ chế chuyển dịch từ pluggable sang CPO, AMD/ENOSEMI acquisition, lộ trình hyperscaler
- **Technology Roadmap** — 4 giai đoạn từ CPO (2024) → board-level → rack-scale → fully photonic processor (2030+)
- **Rủi ro đầu tư** — 6 rủi ro chính: manufacturing yield, supply chain, talent gap, standardization, capital intensity, regulatory

- **Upcoming Catalysts** — lịch sự kiện & milestone của các công ty trong sector

---

## Trang News (`/news`)

Ba mục nguồn tin được phân loại rõ ràng:

1. **Company IR Links** — link trực tiếp đến trang quan hệ nhà đầu tư của 10 công ty:
   AVGO, MRVL, COHR, LITE, FN, MTSI, AAOI, AXTI, POET, LWLG
   
2. **News Sources** — 7 trang thương mại theo dõi ngành:
   Reuters · Bloomberg · IEEE Spectrum · Light Reading · EE Times · Photonics.com · WSJ

3. **Sector News** — bài báo tổng hợp về ngành, có:
   - **Badge ticker** tự động (phát hiện AVGO, MRVL, COHR... trong nội dung bài)
   - Tóm tắt 2 dòng
   - Nguồn + thời gian đăng
   - Refresh 12 giờ/lần (server + client)

---

## Trang Experts (`/experts`)

**14 tài khoản X (Twitter)** được chọn lọc cho đầu tư Photonic AI:

| Handle | Chuyên môn |
|--------|-----------|
| @illyquid | AI semis & hardware Asia — real-time research |
| @damnang2 | Deep semiconductor research, high-technical |
| @aleabitoreddit | Thematic research, company & sector thesis |
| @PhotonCap | Photonics & semiconductor technical research |
| @pepemoonboy | Macro + company-specific analysis |
| @crux_capital_ | Deep photonics analysis & key company updates |
| @Frenchie_ | Broad macro commentary & analysis |
| @Blinklebloop | Data center / AI value chain analysis |
| @KawzInvests | AI / tech / space deep research |
| @degentradingLSD | Macro / AI broad commentary |
| @michaelsikand | Photonics / AI research & commentary |
| @Kaizen_Investor | AI supply chain & sector trade analysis |
| @Yeah_Dave | Broad macro & space / AI deep commentary |
| @TheValueist | AI-oriented research & company analysis |

**3 Substack newsletters**:
- @photoncap — Photon Capital
- @vikramskr — Vikram Skr
- @cruxcapitalgroup — Crux Capital Group

---

## Kiến trúc kỹ thuật

| Thành phần | Chi tiết |
|-----------|---------|
| Framework | Next.js 14 App Router |
| Styling | Tailwind CSS với custom dark color tokens |
| Charts | Recharts (AreaChart) với SSR-safe dynamic import |
| Data fetching | SWR client-side + Next.js ISR server-side |
| Stock data | Yahoo Finance v7 spark API + v8 chart API (qua Next.js proxy) |
| SEC data | EDGAR EFTS full-text search API |
| News data | NewsAPI (optional) + curated mock fallback |
| Deployment | Vercel (auto-deploy từ GitHub main branch) |

### Refresh intervals

| Dữ liệu | Server revalidate | Client SWR |
|---------|------------------|-----------|
| Stock quotes | 5 phút | 5 phút |
| Price charts | 5 phút | — |
| Sector table | 5 phút | 5 phút |
| News (sector) | 12 giờ | 12 giờ |
| Material news | 12 giờ | 12 giờ |
| SEC filings | 24 giờ | 24 giờ |
| Dashboard quotes | 5 phút | — |

### 12 cổ phiếu theo dõi

`AVGO` · `MRVL` · `COHR` · `LITE` · `FN` · `MTSI` · `AAOI` · `AXTI` · `POET` · `LWLG` · `TSEM` · `GFS`
