# Vietnam — Advanced Packaging & "Make in Vietnam"

Vietnam's role in the semiconductor supply chain is often described in a single sentence — "assembly, test, and packaging (ATP) hub." That framing is accurate but incomplete. It conflates two structurally different investment layers that deserve separate tracking.

## Two Layers, Not One

**Foreign OSAT FDI** — global packaging/test giants building capacity in Vietnam to diversify away from China, chasing labor cost and tariff arbitrage. Anchored by Samsung (FCBGA, ~$850M, Bắc Ninh) and Amkor (~$1.6B, Bắc Ninh).

**The domestic "Make in Vietnam" layer** — Vietnamese entities investing in their own semiconductor value chain, aiming to move beyond "cheap land and labor for rent" toward owning IP, process know-how, and eventually design/manufacturing capability. This is the layer this page tracks: **VSAP Lab, Viettel, and FPT.**

**A caveat on durability.** The "10–20 year lock-in" thesis often applied to semiconductor anchor investments (TSMC in Arizona, Samsung in Texas) holds cleanly for **front-end fabrication** — capex is enormous and switching costs are near-absolute. It applies much more loosely to **back-end ATP**, where switching costs are lower and capital has already shown it can move quickly between countries in response to relative cost and tariff changes (China → Vietnam/Malaysia in recent years is itself evidence of this mobility). Vietnam's ATP cluster advantage is not automatically durable just because a large player has entered — it remains sensitive to ongoing cost and incentive competition against Malaysia and India.

---

## The Three Domestic Cases

### VSAP Lab (Đà Nẵng)

- **Investment**: ~$69–72M, approximately **80% debt-financed**
- **Groundbreaking**: July 2025
- **Technology**: FOWLP, 2.5D/3D packaging
- **Target operational date**: Q4 2026
- **Function**: R&D / training / pilot line — scale (~10M units/year target) is far below the threshold needed to independently pull a materials/equipment supply chain into the region
- **Leadership**: Dr. Nguyễn Bích Yên

**Financial risk note**: an ~80% debt-to-equity structure on a pre-revenue R&D-fab project is a relatively risky capital structure, particularly if commercialization of FOWLP/2.5D-3D technology takes longer than planned.

### Viettel (Hòa Lạc)

- **Groundbreaking**: January 16, 2026, Hòa Lạc Hi-Tech Park, Hanoi — 27 hectares
- **Owner**: Ministry of National Defense (state-directed, not a purely private venture)
- **Significance**: Vietnam's **first front-end wafer fabrication plant** — distinct from ATP
- **Target**: 32nm pilot production by end of 2027; full capacity 3,000–4,000 wafers/month (~100M chips/year)
- **2028–2030**: process optimization, exploration of more advanced nodes
- **Critical caveat**: the official announcement itself acknowledges chip fabrication is "the most complex and critical step — not yet achievable domestically." The plant's target applications are defense/aerospace/telecom-specific chips, **not commercial advanced-node logic**. Even once operational, it does **not** solve the wafer/die sourcing problem for a commercial ATP player like VSAP Lab — that supply still has to be imported.

Sources: [TechNode Global, Jan 2026](https://technode.global/2026/01/19/viettel-breaks-ground-on-vietnams-first-semiconductor-chip-fabrication-plant/) · [US-ASEAN, Mar 2026](https://www.usasean.org/article/vietnams-semiconductor-industry-enters-new-strategic-phase)

### FPT (Bắc Ninh)

- **Announced**: January 28, 2026, Yên Phong II-C Industrial Park, Bắc Ninh (northern cluster, not the Đà Nẵng corridor)
- **Significance**: Vietnam's first Vietnamese-owned ATP plant
- **Phase 1 (2026–2027)**: 1,600 m², 6 functional test lines + reliability test area
- **Phase 2 (2028–2030)**: expansion to 6,000 m², adds QFN/QFP/DFN packaging lines, advanced CSP, WLP
- **Partnerships**: with **VSAP Lab** (joint R&D-to-mass-production development for advanced packaging), and with **Viettel** (joint development of AI-on-edge SoC, 28–32nm node, for camera/drone/UAV applications)

Sources: [FPT Software, Jan 2026](https://fptsoftware.com/newsroom/news-and-press-releases/news/fpt-established-advanced-semiconductor-testing-and-packaging-plant) · [VietnamPlus, Jan 2026](https://en.vietnamplus.vn/fpt-announces-semiconductor-testing-packaging-plant-post336885.vnp)

---

## Why This Trio Matters More Than It First Appears

VSAP, Viettel, and FPT are not foreign FDI chasing labor arbitrage — they are Vietnamese entities investing in Vietnam's own semiconductor value chain, which is precisely the "Make in Vietnam" narrative that national policy targets. This is arguably the most concrete evidence available today for the thesis that Vietnam is trying to move beyond a pure ATP-for-rent role — three specific, named, dated cases rather than a general policy aspiration.

**The balancing caveat**: all three are still at the groundbreaking/announcement stage, with **no commercial output yet**. Operational timelines are late 2026 or 2027 at the earliest. Describing Vietnam as having "achieved front-end capability" today would be premature — this is committed capital and infrastructure under construction, not demonstrated capability.

---

## Government Policy Framework

| Policy | Content | Source |
|---|---|---|
| **Decision 1018/QĐ-TTg** (Sept 21, 2024) | National semiconductor industry strategy to 2030, vision to 2050. "C = SET + 1" formula (Chip, Specialized, Electronics, Talent, +1 = safe destination). Three phases (below). | [English translation, LuatVietnam](https://english.luatvietnam.vn/cong-nghiep/decision-1018-qd-ttg-2024-strategy-for-development-of-vietnams-semiconductor-industry-through-2030-366694-d1.html) |
| **Resolution 29-NQ/TW** (Nov 17, 2022) | Political foundation directing industrialization/modernization through 2030; underpins Decision 1018 | Referenced in Decision 1018 |
| **Program 1017** | Semiconductor workforce development — target of 50,000 engineers by 2030 | [VietnamPlus, Jan 2026](https://en.vietnamplus.vn/vietnams-semiconductor-surge-underscores-mounting-demand-for-skilled-engineers-post333947.vnp) |
| **Resolution 57-NQ/TW** (late 2024, Politburo) | Sets science/tech, innovation, and digital transformation as strategic pillars | [VietnamPlus, Jan 2026](https://en.vietnamplus.vn/icos-2026-highlights-pathways-for-vietnams-semiconductor-development-post335583.vnp) |
| **Decree 57/2021/NĐ-CP** | Up to 15-year corporate income tax incentives for high-tech projects | [JTM Asia, Oct 2025](https://jtmasia.com/en/news/vietnam-manufacturing-landscape.html) |
| **2027 self-sufficiency target** | PM Phạm Minh Chính (Aug 4, 2025): domestic design–manufacturing–test self-sufficiency target by 2027 | [SEMI, Aug 2025](https://www.semi.org/sea/blogs/Vietnams-Semiconductor-Pivot) |
| **Circular 32/2025/TT-BKHCN** (effective Jan 1, 2026) | Lists packaging materials — sputtering targets, leadframes, substrates, bonding wire, die-attach materials — as "investment-encouraged" categories | Referenced in policy research |

**Three-phase roadmap (Decision 1018):**
- **Phase 1 (2024–2030)**: ≥100 design companies, 1 small-scale fab, 10 ATP facilities
- **Phase 2 (2030–2040)**: 200 design companies, 2 fabs, 15 ATP facilities
- **Phase 3 (2040–2050)**: 300 design companies, 3 fabs, 20 OSAT facilities

Source: [Vietnam Briefing, Mar 2025](https://www.vietnam-briefing.com/news/vietnam-semiconductor-industry.html/)

---

## Upstream Supply Chain Reality Check

An ATP cluster's durability depends on whether it can pull materials and equipment suppliers into the region. Assessed against three upstream dependencies:

1. **Wafer/die supply** — Not domestically feasible. Even with Viettel's fab, the plant targets defense-specific chips at 32nm, not commercial-node wafer supply. VSAP Lab and FPT will continue importing wafers/die.
2. **Packaging materials** (substrate, leadframe, bonding wire) — Not yet, but the policy groundwork (Circular 32/2025) just landed. Partial feasibility exists at the low end, blocked by a scale/chicken-and-egg problem: material suppliers only site satellite plants near an ATP cluster once that cluster is large enough to guarantee continuous demand, and Vietnam's current cluster scale hasn't crossed that threshold.
3. **Equipment** — Not domestically feasible; no realistic near-term path to local production.

**The core structural gap**: VSAP Lab, at lab-fab scale (~10M units/year, mostly debt-financed), functions as an R&D/training/pilot line rather than an anchor large enough to pull a materials supply chain into Vietnam. This differs in kind from the "10–20 year lock-in" thesis applied to front-end fabs — ATP's lower switching costs mean that even if VSAP Lab succeeds technologically, it won't automatically create gravitational pull for materials and equipment investment without an additional billion-dollar-scale anchor investor.

---

## Open Question: Which Corridor Wins?

Bắc Ninh (Samsung, Amkor) has a head start driven by policy + established anchor investors. The Đà Nẵng–Quảng Nam corridor (VSAP Lab) is still building its ecosystem from the ground up — whether it becomes a winning corridor depends heavily on whether it can attract a comparable anchor investor, not on land cost or infrastructure advantages alone. Anchor investor commitment — not natural geographic advantage — is the determining variable in which corridor pulls ahead.

---

**Editorial standard applied to this page**: every figure is sourced and dated; policy signals (groundbreakings, announcements) are explicitly distinguished from deployed capital and commercial output. As of this writing, none of the three domestic entities profiled here has shipped a commercial product.
