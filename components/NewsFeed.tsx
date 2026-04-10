"use client";

import useSWR from "swr";
import { formatDistanceToNow } from "date-fns";
import { ExternalLink, Building2 } from "lucide-react";

type Article = {
  title: string;
  description: string | null;
  url: string;
  source: { name: string };
  publishedAt: string;
  urlToImage?: string | null;
  tag?: string; // company ticker e.g. "AVGO"
};

async function fetchNews(): Promise<Article[]> {
  const res = await fetch("/api/news");
  if (!res.ok) return [];
  return res.json();
}

export default function NewsFeed() {
  const { data: articles, isLoading } = useSWR("news", fetchNews, {
    revalidateOnFocus: false,
    refreshInterval: 1800000,
  });

  if (isLoading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-surface border border-border rounded-lg p-4 animate-pulse">
            <div className="h-4 bg-border rounded w-3/4 mb-2" />
            <div className="h-3 bg-border rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (!articles?.length) {
    return <div className="text-center py-12 text-muted">No articles found.</div>;
  }

  const companyNews = articles.filter((a) => a.tag);
  const sectorNews = articles.filter((a) => !a.tag);

  return (
    <div className="space-y-6">
      {/* Company IR Links */}
      {companyNews.length > 0 && (
        <div>
          <h2 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
            <Building2 size={14} className="text-accent" />
            Company Investor Relations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {companyNews.map((article, i) => (
              <a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-surface border border-border rounded-lg px-3 py-2.5 hover:border-accent/40 transition-colors group"
              >
                <span className="font-mono text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded flex-shrink-0">
                  {article.tag}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xs font-medium truncate group-hover:text-accent transition-colors">
                    {article.source.name}
                  </p>
                  <p className="text-muted text-xs truncate">{article.description?.split(".")[0]}</p>
                </div>
                <ExternalLink size={12} className="text-muted flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Sector News */}
      {sectorNews.length > 0 && (
        <div>
          <h2 className="text-white font-semibold text-sm mb-3">
            Sector News
          </h2>
          <div className="space-y-2">
            {sectorNews.map((article, i) => (
              <a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-surface border border-border rounded-lg p-4 hover:border-accent/40 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium group-hover:text-accent transition-colors line-clamp-2">
                      {article.title}
                    </p>
                    {article.description && (
                      <p className="text-muted text-xs mt-1.5 line-clamp-2">
                        {article.description}
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted">
                      <span className="bg-border/60 px-1.5 py-0.5 rounded text-white/60">
                        {article.source.name}
                      </span>
                      <span>·</span>
                      <span>{formatDistanceToNow(new Date(article.publishedAt))} ago</span>
                      <ExternalLink size={10} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
