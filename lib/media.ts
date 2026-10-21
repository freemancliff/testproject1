import fs from "node:fs";
import path from "node:path";

// Server-only helpers for finding files dropped into public/media/.
export const IMAGE_EXT = ["jpg", "jpeg", "png", "webp", "avif"];
export const VIDEO_EXT = ["mp4", "webm", "mov"];

export type MediaKind = "image" | "video" | "any";

export function findMedia(base: string, kind: MediaKind): { url: string; type: "image" | "video" } | null {
  const tries: { ext: string; type: "image" | "video" }[] = [
    ...(kind !== "image" ? VIDEO_EXT.map((ext) => ({ ext, type: "video" as const })) : []),
    ...(kind !== "video" ? IMAGE_EXT.map((ext) => ({ ext, type: "image" as const })) : []),
  ];
  for (const { ext, type } of tries) {
    const rel = `${base}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", "media", rel))) return { url: `/media/${rel}`, type };
  }
  return null;
}

export const slugify = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

export const initialsOf = (name: string) =>
  name.replace(/^(Rev\.|Reverend|Dr\.|Dean)\s+/i, "").split(/\s+/).filter(Boolean).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
