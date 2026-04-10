import { Metadata } from "next";
import ExpertCard from "@/components/ExpertCard";
import { EXPERTS } from "@/data/experts";

export const metadata: Metadata = { title: "Expert Feed" };

export default function ExpertsPage() {
  const twitterExperts = EXPERTS.filter((e) => e.platform === "Twitter");
  const substackExperts = EXPERTS.filter((e) => e.platform === "Substack");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Expert Feed</h1>
        <p className="text-muted text-sm mt-1">
          Key researchers, founders, and analysts covering Silicon Photonics
          and Photonic AI. Follow these accounts for primary-source insights.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Twitter / X
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {twitterExperts.map((expert) => (
              <ExpertCard key={expert.handle} expert={expert} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            Substack Newsletters
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {substackExperts.map((expert) => (
              <ExpertCard key={expert.handle} expert={expert} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-surface border border-border rounded-lg p-4">
        <p className="text-muted text-xs">
          <strong className="text-white">Note:</strong> Expert accounts are
          curated for research quality. Not all accounts are active on all
          platforms. Follow at your own discretion.
        </p>
      </div>
    </div>
  );
}
