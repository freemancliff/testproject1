// Matches people across the site (speakers, talks, books) so a speaker can link to their book.
// "Dr. Kirsten Mullen", "A. Kirsten Mullen" and "Kirsten Mullen" all become the same person key.
import { catalog, type Book } from "./books";

const TITLES = /^(dr|prof|professor|rev|reverend|dean|mr|mrs|ms|sen|senator|judge|hon)$/i;
const SUFFIX = /^(jr|sr|ii|iii|iv|phd|md|esq)$/i;
const ROLE_WORDS = /^(keynote|moderator|speaker|panelist|host|emcee|mc)$/i; // a role tacked onto a name in some lists
const NICKNAMES: Record<string, string> = { ben: "benjamin", greg: "gregory", bob: "robert" };

const strip = (raw: string) =>
  raw.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/["“”'’]/g, " ").replace(/[^A-Za-z\- ]/g, " ");

/** The words of a name without titles (Dr., Rev.), suffixes (Jr.) or single-letter initials. */
function words(raw: string): string[] {
  return strip(raw).split(/\s+/).filter((t) => t.length > 1 && !TITLES.test(t) && !SUFFIX.test(t) && !ROLE_WORDS.test(t));
}

/** "Dr. Tasseli McKay" -> "Tasseli McKay" (keeps the original capital letters). */
export function cleanName(raw: string): string {
  return words(raw).join(" ");
}

/** first-last key used to recognise the same person in different lists; null if not a full name. */
export function personKey(raw: string): string | null {
  const w = words(raw).map((t) => t.toLowerCase());
  if (w.length < 2) return null;
  const first = NICKNAMES[w[0]] ?? w[0];
  return `${first}-${w[w.length - 1]}`;
}

/** "Greg Budzban & Cliff Freeman" -> two names. */
export function splitNames(raw: string): string[] {
  return raw.split(/\s*(?:,\s*and\s+|,\s*|\s+and\s+|\s*&\s*|;|\/)\s*/i).map((s) => s.trim()).filter(Boolean);
}

const peopleOfBook = (b: Book) => (b.people ?? splitNames(b.author));

const byKey = new Map<string, { name: string; books: Book[] }>();
for (const b of catalog) {
  for (const n of peopleOfBook(b)) {
    const k = personKey(n);
    if (!k) continue;
    const e = byKey.get(k) ?? { name: cleanName(n), books: [] };
    if (!e.books.includes(b)) e.books.push(b);
    byKey.set(k, e);
  }
}

export type PersonBooks = { key: string; name: string; books: Book[] };

/** The books by this person (or by any person in "A & B"), or null if they have none. */
export function booksFor(raw: string): PersonBooks | null {
  for (const n of splitNames(raw)) {
    const k = personKey(n);
    const e = k ? byKey.get(k) : undefined;
    if (k && e) return { key: k, name: e.name, books: e.books };
  }
  return null;
}

export function bookAuthorName(key: string): string | undefined {
  return byKey.get(key)?.name;
}

/** Books by these people, one per person first (in the order the names are given), then their other books. */
export function booksForMany(names: string[]): Book[] {
  const perPerson: Book[][] = [];
  const seenPeople = new Set<string>();
  for (const n of names) {
    const hit = booksFor(n);
    if (hit && !seenPeople.has(hit.key)) { seenPeople.add(hit.key); perPerson.push(hit.books); }
  }
  const out: Book[] = [];
  for (let round = 0; perPerson.some((l) => l.length > round); round++)
    for (const l of perPerson) if (l[round] && !out.includes(l[round])) out.push(l[round]);
  return out;
}

export const personKeys = (b: Book) => peopleOfBook(b).map(personKey).filter((k): k is string => !!k);
