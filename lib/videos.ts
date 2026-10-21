// ─────────────────────────────────────────────────────────────────────────────
// YouTube video library for the whole site. Add new talks here and they appear
// automatically. The id is the part after "v=" in a YouTube link.
//
//   { id: "XXXXXXXXXXX", title: "Talk title", speaker: "Name", conference: "2025", minutes: 12 }
//
// conference: which conference the talk belongs to (see CONFERENCES below).
//   - Archive pages (/archive/2025 etc.) automatically show talks tagged with that year.
//   - /2026eji shows every "2026-montgomery" talk.
//   - home: true  puts a talk in the home page's "Watch" section (first one is the large feature).
// ─────────────────────────────────────────────────────────────────────────────

export type ConferenceKey = "2026-montgomery" | "2026-mit" | "2025" | "2024" | "2023" | "2022";

export type Video = {
  id: string;
  title: string;
  speaker?: string;
  conference: ConferenceKey;
  minutes?: number;
  home?: boolean;
};

// Where each conference's YouTube playlist lives (for your own reference and "see all" links).
export const PLAYLISTS: Record<ConferenceKey, string | undefined> = {
  "2026-montgomery": "https://www.youtube.com/playlist?list=PLK3wkexkL8D8",
  "2026-mit": undefined,
  "2025": undefined,
  "2024": undefined,
  "2023": undefined,
  "2022": undefined,
};

export const videos: Video[] = [
  // ── 2026 · Montgomery (5th Annual) ──
  { id: "MNkRbY5aqQA", title: "Welcome: 5th Annual Bob Moses Legacy Conference", speaker: "Benjamin Moynihan", conference: "2026-montgomery", minutes: 6, home: true },
  { id: "zQIlyK_7w0Y", title: "US Steel Pratt Convict Cemetery", speaker: "Dr. Janet Moses", conference: "2026-montgomery", minutes: 3 },
  { id: "12SawChyMw8", title: "American Massacres", speaker: "Dr. Kirsten Mullen", conference: "2026-montgomery", minutes: 24 },
  { id: "VsbhzIfg-aw", title: "Reparations: Redress for American Massacres", speaker: "Dr. William Darity Jr.", conference: "2026-montgomery", minutes: 17, home: true },
  { id: "LLZwwJTUpxk", title: "Juvenile Injustice and Reparations", speaker: "Dr. Tasseli McKay", conference: "2026-montgomery", minutes: 15 },
  { id: "TZ7c2EPL-sc", title: "We Know Their Names", speaker: "Dr. Joan Wynne", conference: "2026-montgomery", minutes: 3 },
  { id: "nAq_YLNRYP8", title: "Faith Communities Must Testify in the Age of Mass Incarceration", speaker: "Dr. Terrance L. \"Kojo\" Johnson", conference: "2026-montgomery", minutes: 24, home: true },
  { id: "Dzzggsx94bg", title: "Jim Crow: The Zipper That Kept the Country Together", speaker: "Dr. Janet Moses", conference: "2026-montgomery", minutes: 4 },
  { id: "63guucFLrd0", title: "Closing: 5th Annual Bob Moses Legacy Conference", speaker: "Dr. Brian William", conference: "2026-montgomery", minutes: 24 },

  // ── 2026 · MIT (November 21) ── add after the event
  // ── 2025 ──
  // ── 2024 ──
  // ── 2023 ──
  // ── 2022 ──
];

export const videosFor = (c: ConferenceKey) => videos.filter((v) => v.conference === c);
export const homeVideos = () => videos.filter((v) => v.home);
