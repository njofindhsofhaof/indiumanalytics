import { MATERIALS, type SupplyRisk } from "@/data/materials";
import clsx from "clsx";

const RISK_STYLES: Record<SupplyRisk, string> = {
  Critical: "bg-negative/15 text-negative border border-negative/30",
  High: "bg-orange-500/15 text-orange-400 border border-orange-500/30",
  Medium: "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",
  Low: "bg-positive/15 text-positive border border-positive/30",
};

const RISK_DOTS: Record<SupplyRisk, string> = {
  Critical: "bg-negative",
  High: "bg-orange-400",
  Medium: "bg-yellow-400",
  Low: "bg-positive",
};

export default function MaterialsTable() {
  return (
    <div className="space-y-3">
      {MATERIALS.map((mat) => (
        <div
          key={mat.name}
          className="bg-surface border border-border rounded-lg p-4"
        >
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-white font-semibold">{mat.name}</h3>
                <span className="font-mono text-accent text-sm bg-accent/10 px-2 py-0.5 rounded">
                  {mat.formula}
                </span>
                <span
                  className={clsx(
                    "text-xs px-2 py-0.5 rounded font-medium flex items-center gap-1.5",
                    RISK_STYLES[mat.supplyRisk]
                  )}
                >
                  <span
                    className={clsx(
                      "w-1.5 h-1.5 rounded-full flex-shrink-0",
                      RISK_DOTS[mat.supplyRisk]
                    )}
                  />
                  {mat.supplyRisk} Risk
                </span>
              </div>
              <p className="text-muted text-sm mt-1.5">{mat.role}</p>
              <p className="text-muted/70 text-xs mt-1.5 italic">{mat.riskReason}</p>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-muted uppercase tracking-wide mb-1 font-medium">
                Top Producers
              </p>
              <div className="flex flex-wrap gap-1.5">
                {mat.topProducers.map((p) => (
                  <span
                    key={p}
                    className="text-xs bg-border/60 text-white/70 px-2 py-0.5 rounded"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wide mb-1 font-medium">
                Used By
              </p>
              <div className="flex flex-wrap gap-1.5">
                {mat.usedIn.map((u) => (
                  <span
                    key={u}
                    className="text-xs bg-accent/10 text-accent/80 px-2 py-0.5 rounded"
                  >
                    {u}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
