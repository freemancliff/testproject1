// Talks uploaded to https://www.youtube.com/@BobMosesLegacy.
// Add one entry per video (the id is the part after "v=" in the YouTube URL);
// the home page shows them in a grid, newest first, as soon as the list is non-empty.
export type Video = { id: string; title: string; conference?: string };

export const videos: Video[] = [
  // { id: "XXXXXXXXXXX", title: "Talk title, Speaker", conference: "2025" },
];
