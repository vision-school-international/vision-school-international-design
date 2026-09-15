import type { PageSectionEntry } from "./concepts/conceptRegistry";

export type RegisteredPage = {
  key: string;
  name: string;
  entries: readonly PageSectionEntry[];
};

const fetchPages = async (): Promise<readonly RegisteredPage[]> => {
  try {
    const response = await fetch("/api/pages");
    const data: unknown = await response.json();
    if (!Array.isArray(data)) return [];
    return data.filter((page): page is RegisteredPage => (
      Boolean(page)
      && typeof page === "object"
      && typeof page.key === "string"
      && typeof page.name === "string"
      && Array.isArray(page.entries)
    ));
  } catch {
    return [];
  }
};

export const getPages = async () => fetchPages();

export const getPage = async (key: string) => (await fetchPages()).find((page) => page.key === key);

export const savePage = async (page: RegisteredPage) => {
  const response = await fetch("/api/pages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(page),
  });
  return response.ok;
};

export const createPage = savePage;

export const removePage = async (pageKey: string) => {
  await fetch(`/api/pages/${pageKey}`, { method: "DELETE" });
};

export const addEntry = async (pageKey: string, entry: PageSectionEntry) => {
  const page = await getPage(pageKey);
  if (page) await savePage({ ...page, entries: [...page.entries, entry] });
};

export const removeEntry = async (pageKey: string, index: number) => {
  const page = await getPage(pageKey);
  if (page) await savePage({ ...page, entries: page.entries.filter((_, entryIndex) => entryIndex !== index) });
};

export const isEditablePage = async (pageKey: string) =>
  Boolean(await getPage(pageKey));