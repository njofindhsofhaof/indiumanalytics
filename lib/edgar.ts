export type EdgarFiling = {
  id: string;
  company: string;
  date: string;
  form: string;
  adsh: string;
  url: string;
};

export async function fetchEdgarFilings(): Promise<EdgarFiling[]> {
  const res = await fetch("/api/edgar");
  if (!res.ok) return [];
  return res.json();
}
