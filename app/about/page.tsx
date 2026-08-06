import { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">About</h1>
      </div>

      <div className="bg-surface border border-border rounded-lg p-6 space-y-6">
        <section>
          <h2 className="text-white font-bold text-lg mb-3">
            What Photonic Analytics is
          </h2>
          <div className="space-y-3 text-white/75 text-sm leading-relaxed">
            <p>
              Photonic Analytics is an independent research platform tracking
              the Silicon Photonics and Photonic AI industry. This covers
              optical interconnects (CPO, transceivers), photonic switches,
              and next-generation photonic processors. The site includes a
              TRL tracker across technology layers, supply chain analysis
              (materials, wafer, packaging), coverage of related stocks, and
              upcoming catalysts like earnings, industry conferences, and
              production milestones.
            </p>
            <p>
              This is not a news aggregator. Every thesis and every figure is
              traced back to its source. I clearly separate &quot;published
              data&quot; from &quot;estimate/forecast&quot; so readers can
              judge reliability for themselves instead of accepting
              ready-made conclusions.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">
            Why I built this
          </h2>
          <div className="space-y-3 text-white/75 text-sm leading-relaxed">
            <p>
              I come to the semiconductor industry from a non-technical
              background. My long-term goal is to move into Advanced
              Packaging within the semiconductor value chain. Instead of
              studying theory in the abstract, I chose to force myself to
              understand the industry deeply enough to write about it. That
              means tracking which technologies are moving from the lab into
              real production, who is winning in the supply chain, and why.
            </p>
            <p>
              Photonic Analytics is a byproduct of that process. It&apos;s a
              personal research tool made public, updated continuously as I
              read industry reports, earnings calls, and technical news.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Methodology</h2>
          <ul className="space-y-2 text-white/75 text-sm leading-relaxed list-disc list-inside">
            <li>
              <strong className="text-white">
                TRL (Technology Readiness Level) tiering
              </strong>
              : every technology is placed somewhere from research (TRL 1 to
              3) to volume production (TRL 8 to 9). This avoids mixing up
              &quot;coming soon&quot; with &quot;already here&quot;. TRL
              assignments follow the standard NASA/DoD 9-level scale, adapted
              to a hardware-commercialization context — TRL 1-3
              (lab/research demonstration), TRL 4-5 (prototype/pilot
              validation), TRL 6-7 (early production, limited customer
              deployment), TRL 8-9 (qualified, at-scale volume production).
              Where a technology straddles two tiers, the range reflects
              genuine ambiguity in public disclosure, not imprecision.
            </li>
            <li>
              <strong className="text-white">Source tracing</strong>: market
              size, market share, and capacity figures are all sourced. I
              prioritize company reports, earnings transcripts, and industry
              analyst firms (TrendForce, IFP, Epoch AI) over speculation.
            </li>
            <li>
              <strong className="text-white">Event-driven updates</strong>:
              a catalyst calendar tracks real milestones such as earnings,
              conferences (OFC, ECOC), and volume ramps, instead of
              subjective commentary on trends.
            </li>
            <li>
              <strong className="text-white">Source bias disclosure</strong>:
              some cited commentary originates from paid/subscription
              analyst platforms whose authors may hold positions in the
              securities discussed. Where an author&apos;s position is
              disclosed in the source, it is noted here; where undisclosed,
              figures from that source are treated as directional rather
              than verified, and cross-checked against primary filings or
              company disclosures where possible.
            </li>
            <li>
              <strong className="text-white">Revision policy</strong>: this
              platform is corrected openly when errors are found — for
              example, acquisition dates or TRL placements have been
              revised after further verification. Material corrections are
              noted on the relevant page; this is a living document, not a
              static report.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">About me</h2>
          <div className="space-y-3 text-white/75 text-sm leading-relaxed">
            <p>
              I&apos;m Hiếu, based in Vietnam. I currently work as a Business
              Analyst for SMEs and individuals.
            </p>
            <p>
              I believe Vietnam has a real shot at becoming a meaningful
              player in Advanced Packaging and Co-Packaged Optics (CPO).
              This site is how I research and invest in that belief.
            </p>
          </div>
        </section>

        <section className="border-t border-border pt-4">
          <p className="text-sm text-white/75">
            <strong className="text-white">Contact me:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/hirohnguyen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline decoration-dotted"
            >
              linkedin.com/in/hirohnguyen
            </a>
          </p>
        </section>

        <section className="border-t border-border pt-4">
          <p className="text-xs text-muted">
            <strong className="text-white">Note:</strong> Content on this
            site is for personal research and educational purposes only, not
            investment advice. All financial decisions are the reader&apos;s
            own responsibility.
          </p>
        </section>
      </div>
    </div>
  );
}
