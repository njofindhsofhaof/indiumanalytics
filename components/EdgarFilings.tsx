"use client";

import useSWR from "swr";
import { ExternalLink } from "lucide-react";

type Filing = {
  id: string;
  company: string;
  date: string;
  form: string;
  url: string;
  description: string;
};

async function fetchFilings(): Promise<Filing[]> {
  const res = await fetch("/api/edgar");
  if (!res.ok) return [];
  return res.json();
}

export default function EdgarFilings() {
  const { data: filings, isLoading } = useSWR("edgar-filings", fetchFilings, {
    revalidateOnFocus: false,
    refreshInterval: 86400000, // 1 day
  });

  if (isLoading) {
    return (
      <div className="space-y-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-4 border border-border rounded p-3 animate-pulse"
          >
            <div className="h-4 w-24 bg-border rounded flex-shrink-0" />
            <div className="h-4 w-10 bg-border rounded flex-shrink-0" />
            <div className="h-4 w-20 bg-border rounded flex-shrink-0" />
            <div className="h-4 bg-border rounded flex-1" />
          </div>
        ))}
      </div>
    );
  }

  if (!filings?.length) {
    return (
      <p className="text-muted text-sm text-center py-6">No filings found.</p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left text-muted text-xs font-medium pb-2 pr-4">
              Company
            </th>
            <th className="text-left text-muted text-xs font-medium pb-2 pr-4">
              Form
            </th>
            <th className="text-left text-muted text-xs font-medium pb-2 pr-6">
              Date
            </th>
            <th className="text-left text-muted text-xs font-medium pb-2">
              Description
            </th>
            <th className="text-right text-muted text-xs font-medium pb-2 pl-4">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {filings.map((filing) => (
            <tr
              key={filing.id}
              className="border-b border-border/40 last:border-0 hover:bg-border/10 transition-colors"
            >
              <td className="py-2.5 pr-4">
                <span className="text-white text-xs font-medium whitespace-nowrap">
                  {filing.company}
                </span>
              </td>
              <td className="py-2.5 pr-4">
                <span className="font-mono text-xs text-accent bg-accent/10 px-1.5 py-0.5 rounded">
                  {filing.form}
                </span>
              </td>
              <td className="py-2.5 pr-6">
                <span className="text-muted text-xs whitespace-nowrap">
                  {filing.date}
                </span>
              </td>
              <td className="py-2.5">
                <p className="text-muted text-xs line-clamp-1">
                  {filing.description}
                </p>
              </td>
              <td className="py-2.5 pl-4 text-right">
                <a
                  href={filing.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-muted hover:text-accent transition-colors"
                  title="View on SEC EDGAR"
                >
                  <ExternalLink size={13} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
