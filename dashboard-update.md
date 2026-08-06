# Dashboard Update — Photonic AI Current Development Stages

Three edits below. Each shows what's currently on the site vs. the suggested replacement, with source and reasoning.

---

## 1. Layer 2 — Photonic Switch (ASIC + CPO switch, TRL 8)

**Current:**
> ASIC + CPO switches (Broadcom Tomahawk 5, Marvell Teralynx 10) in production deployments. 51.2 Tb/s ports with CPO now economically preferred over pluggables at hyperscale density. [AMD acquired Enosemi (May 2025)](https://www.amd.com/en/blogs/2025/amd-acquires-enosemi-to-accelerate-co-packaged-optics-innovation.html) to accelerate photonic interconnect manufacturing.

**Suggested replacement:**
> ASIC + CPO switches now at third-generation CPO: Broadcom shipped **Tomahawk 6 – Davisson (102.4 Tb/s CPO)** in October 2025, doubling the bandwidth of Tomahawk 5 (51.2 Tb/s). Marvell Teralynx 10 remains in production deployment. CPO is now economically preferred over pluggables at hyperscale density. [AMD acquired Enosemi (May 2025)](https://www.amd.com/en/blogs/2025/amd-acquires-enosemi-to-accelerate-co-packaged-optics-innovation.html) to accelerate photonic interconnect manufacturing.

**Why**: Tomahawk 5/51.2 Tb/s is now one generation behind. Tomahawk 6-Davisson has been shipping since Oct 2025 — it's the current state-of-the-art CPO switch, not TH5.

Sources: [Broadcom, Oct 8 2025](https://investors.broadcom.com/news-releases/news-release-details/broadcom-announces-tomahawkr-6-davisson-industrys-first-1024) · [StorageReview, Oct 2025](https://www.storagereview.com/news/broadcom-ships-tomahawk-6-davisson-cpo-ethernet-switch-doubling-bandwidth-to-102-4-tb-s-for-ai-fabrics)

---

## 2. Layer 1 — Interconnect (2026–2027 entry)

**Current:**
> Lightmatter Passage M1000 and Celestial AI photonic fabric entering customer evaluation. Photonic interposer connecting GPU clusters at rack scale — targeting 1 Pb/s aggregate bandwidth.

**Suggested replacement:**
> Lightmatter Passage L200/L200X entering customer chip integration in 2026 via GlobalFoundries, ASE, and Amkor; production systems targeted for 2027. Celestial AI photonic fabric in customer evaluation. Photonic interposer connecting GPU clusters at rack scale — targeting 1 Pb/s aggregate bandwidth.

**Why**: "Customer evaluation" undersells where Lightmatter actually is — Passage L200/L200X has moved into customer chip integration with named foundry/OSAT partners, not just evaluation.

Source: [Next Waves Insight, June 2026](https://nextwavesinsight.com/photonic-compute-production-lightmatter-ayar-labs/)

---

## 3. Layer 3 — Photonic Processor (2026 (Now) entry) — needs your call

**Current:**
> Lightmatter and Celestial AI in A/B customer tape-outs. No production silicon yet — still pre-revenue. EO polymer modulators (LWLG) and TFLN platforms at pilot-scale validation for 200Gbaud+ applications.

**Issue**: Lightmatter's core product (Passage, Guide) is optical **interconnect/interposer**, not a processor computing in the optical domain — it already appears correctly in Layer 1. Repeating it here, under "Photonic Processor," implies Lightmatter does optical compute, which isn't accurate based on current sourcing.

**Decision: Option A — remove the misplaced Lightmatter reference.**

**Suggested replacement:**
> Celestial AI in A/B customer tape-outs. No production silicon yet — still pre-revenue. EO polymer modulators (LWLG) and TFLN platforms at pilot-scale validation for 200Gbaud+ applications.

---

## 4. Related — Thesis page (same underlying issue as #1)

**Current** (in "Co-Packaged Optics: The Near-Term Catalyst" section):
> The ecosystem inflection point is the 51.2 Tb/s switch generation (2025–2026), where CPO becomes economically mandatory for hyperscalers.

**Suggested replacement:**
> The ecosystem inflection point has moved to the 102.4 Tb/s switch generation (Broadcom Tomahawk 6-Davisson, shipping since Oct 2025), succeeding the 51.2 Tb/s generation (Tomahawk 5) — CPO is now economically mandatory for hyperscalers at this density.

**Why**: Same generational gap as #1 — worth fixing on Thesis too since it cites the same 51.2 Tb/s figure as the "current" inflection point.
