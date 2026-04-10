export type NewsArticle = {
  title: string;
  description: string | null;
  url: string;
  source: { name: string };
  publishedAt: string;
  urlToImage: string | null;
};

export async function fetchNews(): Promise<NewsArticle[]> {
  const res = await fetch("/api/news");
  if (!res.ok) return [];
  return res.json();
}
