"use client";

import useSWR from "swr";
import { fetchNews, type NewsArticle } from "@/lib/news";
import { formatDistanceToNow } from "date-fns";
import { ExternalLink } from "lucide-react";

export default function NewsFeed() {
  const { data: articles, isLoading } = useSWR("news", fetchNews, {
    revalidateOnFocus: false,
    refreshInterval: 1800000,
  });

  if (isLoading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="bg-surface border border-border rounded-lg p-4 animate-pulse"
          >
            <div className="h-4 bg-border rounded w-3/4 mb-2" />
            <div className="h-3 bg-border rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (!articles?.length) {
    return (
      <div className="text-center py-12 text-muted">No articles found.</div>
    );
  }

  return (
    <div className="space-y-3">
      {articles.map((article: NewsArticle, i: number) => (
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
                <span>
                  {formatDistanceToNow(new Date(article.publishedAt))} ago
                </span>
                <ExternalLink size={10} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
