"use client";

import { useState } from "react";
import useSWR from "swr";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { fetchChartData, type RangeKey } from "@/lib/stocks";
import clsx from "clsx";

const RANGES: RangeKey[] = ["1W", "1M", "3M", "6M", "1Y"];

type Props = {
  symbol: string;
  defaultRange?: RangeKey;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-surface border border-border rounded px-3 py-2 text-sm shadow-lg">
      <p className="text-muted text-xs">{label}</p>
      <p className="text-white font-semibold">
        ${payload[0]?.value?.toFixed(2)}
      </p>
    </div>
  );
}

export default function PriceChart({ symbol, defaultRange = "1M" }: Props) {
  const [range, setRange] = useState<RangeKey>(defaultRange);

  const { data, isLoading, error } = useSWR(
    `chart-${symbol}-${range}`,
    () => fetchChartData(symbol, range),
    { revalidateOnFocus: false }
  );

  const validData = data?.filter((d) => d.close > 0) ?? [];
  const minVal = validData.length
    ? Math.min(...validData.map((d) => d.close)) * 0.98
    : 0;
  const maxVal = validData.length
    ? Math.max(...validData.map((d) => d.close)) * 1.02
    : undefined;

  return (
    <div className="bg-surface border border-border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <span className="text-white font-semibold">{symbol} Price History</span>
        <div className="flex gap-1">
          {RANGES.map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={clsx(
                "px-2.5 py-1 text-xs rounded transition-colors",
                range === r
                  ? "bg-accent text-bg font-semibold"
                  : "text-muted hover:text-white"
              )}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {isLoading && (
        <div className="h-52 flex items-center justify-center text-muted text-sm">
          Loading chart…
        </div>
      )}
      {error && (
        <div className="h-52 flex items-center justify-center text-negative text-sm">
          Failed to load chart data
        </div>
      )}
      {!isLoading && !error && validData.length > 0 && (
        <ResponsiveContainer width="100%" height={210}>
          <AreaChart data={validData} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id={`grad-${symbol}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00d4ff" stopOpacity={0.18} />
                <stop offset="95%" stopColor="#00d4ff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#21262d" />
            <XAxis
              dataKey="date"
              tick={{ fill: "#8b949e", fontSize: 10 }}
              tickLine={false}
              axisLine={false}
              interval="preserveStartEnd"
            />
            <YAxis
              tick={{ fill: "#8b949e", fontSize: 10 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `$${v.toFixed(0)}`}
              domain={[minVal, maxVal ?? "auto"]}
              width={52}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="close"
              stroke="#00d4ff"
              strokeWidth={2}
              fill={`url(#grad-${symbol})`}
              dot={false}
              activeDot={{ r: 4, fill: "#00d4ff", strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
      {!isLoading && !error && validData.length === 0 && (
        <div className="h-52 flex items-center justify-center text-muted text-sm">
          No data available
        </div>
      )}
    </div>
  );
}
