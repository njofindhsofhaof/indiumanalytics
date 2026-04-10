import { Metadata } from "next";
import NewsFeed from "@/components/NewsFeed";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold text-white">Photonics News</h1>
          <p className="text-muted text-sm mt-1">
            Latest news filtered for silicon photonics, CPO, and optical
            interconnect topics.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {["photonics", "silicon photonics", "CPO", "optical interconnect"].map(
            (tag) => (
              <span
                key={tag}
                className="text-xs bg-accent/10 text-accent border border-accent/20 px-2 py-1 rounded"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>

      <NewsFeed />
    </div>
  );
}
