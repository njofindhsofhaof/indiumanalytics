import clsx from "clsx";
import { type LucideIcon } from "lucide-react";

type Props = {
  title: string;
  value: string;
  subtext?: string;
  trend?: "up" | "down" | "neutral";
  icon?: LucideIcon;
};

export default function KPICard({ title, value, subtext, trend, icon: Icon }: Props) {
  return (
    <div className="bg-surface border border-border rounded-lg p-4 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-muted text-xs uppercase tracking-wide font-medium">
          {title}
        </span>
        {Icon && <Icon size={15} className="text-muted" />}
      </div>
      <span className="text-2xl font-bold text-white">{value}</span>
      {subtext && (
        <span
          className={clsx("text-sm", {
            "text-positive": trend === "up",
            "text-negative": trend === "down",
            "text-muted": trend === "neutral" || !trend,
          })}
        >
          {subtext}
        </span>
      )}
    </div>
  );
}
