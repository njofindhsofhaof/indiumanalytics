import { Metadata } from "next";
import PhotonicStages from "@/components/PhotonicStages";
import { AlertTriangle } from "lucide-react";
import { UPCOMING_CATALYSTS } from "@/data/thesis";
import clsx from "clsx";

export const metadata: Metadata = { title: "Dashboard" };
export const revalidate = 300;

export default async function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-muted text-sm mt-1">
          Silicon Photonics &amp; Photonic AI investment tracker
        </p>
      </div>

      {/* Photonic AI Development Stages */}
      <PhotonicStages />

      {/* Upcoming Catalysts */}
      <div className="bg-surface border border-border rounded-lg p-4">
        <h2 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
          <AlertTriangle size={14} className="text-yellow-400" />
          Upcoming Catalysts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {UPCOMING_CATALYSTS.map((c, i) => (
            <div
              key={i}
              className="border border-border/60 rounded p-3 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={clsx("text-xs px-1.5 py-0.5 rounded font-medium", {
                    "bg-accent/10 text-accent": c.type === "milestone",
                    "bg-yellow-500/10 text-yellow-400": c.type === "earnings",
                    "bg-purple-500/10 text-purple-400": c.type === "conference",
                  })}
                >
                  {c.type}
                </span>
                <span className="text-muted text-xs">{c.date}</span>
              </div>
              <p className="text-white text-sm font-medium">{c.event}</p>
              <p className="text-muted text-xs mt-1">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
