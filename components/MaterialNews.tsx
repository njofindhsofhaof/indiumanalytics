"use client";

import useSWR from "swr";
import { formatDistanceToNow } from "date-fns";
import { ExternalLink } from "lucide-react";

type MaterialArticle = {
  formula: string;
  title: string;
  description: string;
  url: string;
  source: string;
  publishedAt: string;
};

async function fetchMaterialNews(): Promise<MaterialArticle[]> {
  const res = await fetch("/api/materials/news");
  if (!res.ok) return [];
  return res.json();
}

export default function MaterialNews() {
  const { data: articles, isLoading } = useSWR(
    "material-news",
    fetchMaterialNews,
    { revalidateOnFocus: false, refreshInterval: 43200000 }
  );

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-surface border border-border rounded-lg p-4 animate-pulse"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="h-5 w-12 bg-border rounded" />
              <div className="h-3 w-24 bg-border rounded" />
            </div>
            <div className="h-4 bg-border rounded w-full mb-2" />
            <div className="h-3 bg-border rounded w-5/6" />
          </div>
        ))}
      </div>
    );
  }

  if (!articles?.length) {
    return (
      <p className="text-muted text-sm text-center py-8">
        No material news available.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {articles.map((article, i) => (
        <a
          key={i}
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-surface border border-border rounded-lg p-4 hover:border-accent/40 transition-colors group"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded flex-shrink-0">
              {article.formula}
            </span>
            <span className="text-muted text-xs truncate">{article.source}</span>
            <ExternalLink
              size={11}
              className="text-muted flex-shrink-0 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </div>
          <p className="text-white text-sm font-medium line-clamp-2 group-hover:text-accent transition-colors mb-1.5">
            {article.title}
          </p>
          <p className="text-muted text-xs line-clamp-2 leading-relaxed">
            {article.description}
          </p>
          <p className="text-muted text-xs mt-2 opacity-70">
            {formatDistanceToNow(new Date(article.publishedAt))} ago
          </p>
        </a>
      ))}
    </div>
  );
}
