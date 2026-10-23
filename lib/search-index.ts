// Everything the site search can find, built from the same data files that build the pages,
// so a new talk, book or conference shows up in search automatically.
import { archives } from "./archives";
import { videos, type ConferenceKey } from "./videos";
import { catalog, resources } from "./books";
import { featuredPeople, mit2026 } from "./mit2026";
import { saturdayFellows, sundayFeatured, participants } from "./speakers";
import { cleanName, personKey, splitNames, booksFor } from "./people";

export type SearchEntry = {
  type: "person" | "talk" | "book" | "page" | "article";
  title: string;
  sub?: string;
  url: string;
  kw?: string;       // extra words that should match but aren't shown
  ext?: boolean;     // opens another website
};

const CONF: Record<ConferenceKey, { label: string; url: string }> = {
  "2026-montgomery": { label: "2026 Part I · Montgomery", url: "/2026eji" },
  "2026-mit": { label: "2026 Part II · MIT", url: "/2026mit" },
  "2025": { label: "2025", url: "/archive/2025" },
  "2024": { label: "2024", url: "/archive/2024" },
  "2023": { label: "2023", url: "/archive/2023" },
  "2022": { label: "2022", url: "/archive/2022" },
};

export function buildSearchIndex(): SearchEntry[] {
  const out: SearchEntry[] = [];

  // ── Pages ──
  out.push(
    { type: "page", title: "Home", sub: "The Bob Moses Legacy Conference", url: "/", kw: "bob moses legacy conference since 2022 about" },
    { type: "page", title: "Part II at MIT · November 21, 2026", sub: "Remaking America: The Work Before Us", url: "/2026mit", kw: `part 2 two program agenda schedule keynote alabama solution macarthur fellows breakout groups speakers facilitators wong auditorium tang center cambridge ${mit2026.tagline} free` },
    { type: "page", title: "Register (Free) for Part II", sub: "Saturday, November 21, 2026 at MIT", url: "/register", kw: "register registration sign up attend free rsvp" },
    { type: "page", title: "Part I · Montgomery, October 2–4, 2026", sub: "Remaking America: The Work Before Us", url: "/2026eji", kw: "part 1 one montgomery alabama equal justice initiative legacy museum sessions photos recap" },
    { type: "page", title: "Bookstore", sub: "Books by and recommended by our speakers", url: "/bookstore", kw: "books shop read amazon reading list" },
  );
  for (const a of archives) {
    out.push({ type: "page", title: `${a.year} Conference Archive`, sub: a.title, url: `/archive/${a.year}`, kw: `${a.meta} past conference agenda schedule speakers ${a.speakers.join(" ")}` });
  }

  // ── Talks ──
  for (const v of videos) {
    const c = CONF[v.conference];
    out.push({ type: "talk", title: v.title, sub: `${v.speaker ? v.speaker + " · " : ""}${c.label}${v.minutes ? " · " + v.minutes + " min" : ""}`, url: `${c.url}#video-${v.id}`, kw: "video watch talk recording" });
  }

  // ── Books and articles ──
  for (const b of catalog) {
    out.push({ type: "book", title: b.title, sub: b.author, url: `/bookstore#book-${b.slug}`, kw: `${b.subtitle ?? ""} ${b.category} book read` });
  }
  for (const r of resources) {
    out.push({ type: "article", title: r.title, sub: `${r.by} · ${r.source}`, url: r.url, ext: true, kw: "article essay report read" });
  }

  // ── People: one entry per person, pointing at the most useful place ──
  type P = { name: string; talks: SearchEntry[]; pages: Map<string, string> };
  const people = new Map<string, P>();
  const add = (raw: string, where?: { url: string; label: string }) => {
    for (const n of splitNames(raw)) {
      const k = personKey(n);
      if (!k) continue;
      const p = people.get(k) ?? { name: cleanName(n), talks: [], pages: new Map() };
      if (cleanName(n).length > p.name.length) p.name = cleanName(n);
      if (where) p.pages.set(where.url, where.label);
      people.set(k, p);
    }
  };
  for (const v of videos) if (v.speaker) { add(v.speaker, { url: CONF[v.conference].url, label: CONF[v.conference].label }); }
  for (const p of featuredPeople) add(p.name, { url: "/2026mit", label: "2026 Part II · MIT" });
  for (const p of [...saturdayFellows, ...sundayFeatured]) add(p.name, { url: "/2026eji", label: "2026 Part I · Montgomery" });
  for (const p of participants) add(p.name, { url: "/2026eji", label: "2026 Part I · Montgomery" });
  for (const a of archives) for (const s of a.speakers) add(s, { url: `/archive/${a.year}`, label: a.year });
  for (const b of catalog) add((b.people ?? [b.author]).join(" & "));

  for (const [k, p] of people) {
    const talks = videos.filter((v) => v.speaker && splitNames(v.speaker).some((n) => personKey(n) === k));
    const books = booksFor(p.name)?.books ?? [];
    const where = [...p.pages.values()].filter((v, i, a) => a.indexOf(v) === i);
    const bits = [
      talks.length ? `${talks.length} talk${talks.length > 1 ? "s" : ""}` : "",
      books.length ? `${books.length} book${books.length > 1 ? "s" : ""}` : "",
      where.slice(0, 3).join(", "),
    ].filter(Boolean);
    const first = talks[0];
    const url = first ? `${CONF[first.conference].url}#video-${first.id}` : books.length ? `/bookstore?by=${k}#books` : [...p.pages.keys()][0] ?? "/";
    out.push({ type: "person", title: p.name, sub: bits.join(" · "), url, kw: "speaker facilitator" });
  }
  return out;
}
