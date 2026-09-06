import type { PageSectionEntry } from "./concepts/conceptRegistry";

export type RegisteredPage = {
  key: string;
  name: string;
  entries: readonly PageSectionEntry[];
};

const storageKey = "vision-school-pages";

const savedPages = (): readonly RegisteredPage[] => {
  try {
    const saved: unknown = JSON.parse(window.localStorage.getItem(storageKey) ?? "[]");
    return Array.isArray(saved) ? saved.filter((page): page is RegisteredPage => (
      Boolean(page)
      && typeof page === "object"
      && typeof page.key === "string"
      && typeof page.name === "string"
      && Array.isArray(page.entries)
    )) : [];
  } catch {
    return [];
  }
};

export const getPages = () => savedPages();

export const getPage = (key: string) => getPages().find((page) => page.key === key);

export const createPage = (page: RegisteredPage) => {
  const existing = savedPages();
  window.localStorage.setItem(storageKey, JSON.stringify([...existing, page]));
};

const persistPage = (updated: RegisteredPage) => {
  const existing = savedPages().filter((page) => page.key !== updated.key);
  window.localStorage.setItem(storageKey, JSON.stringify([...existing, updated]));
};

export const addEntry = (pageKey: string, entry: PageSectionEntry) => {
  const page = getPage(pageKey);
  if (page) persistPage({ ...page, entries: [...page.entries, entry] });
};

export const removeEntry = (pageKey: string, index: number) => {
  const page = getPage(pageKey);
  if (page) persistPage({ ...page, entries: page.entries.filter((_, entryIndex) => entryIndex !== index) });
};

export const removePage = (pageKey: string) => {
  const existing = savedPages().filter((page) => page.key !== pageKey);
  window.localStorage.setItem(storageKey, JSON.stringify(existing));
};

export const isEditablePage = (pageKey: string) => savedPages().some((page) => page.key === pageKey);
