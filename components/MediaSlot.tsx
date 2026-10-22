import Image from "next/image";
import { PhotoIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
import { findMedia, type MediaKind } from "@/lib/media";
import { CREDIT, type Photo } from "@/lib/eji-photos";

// A spot on the page for a photo or video. Drop a file into public/media/ using
// the slot's `base` name (any common extension works) and it appears; until then
// a labeled placeholder holds the space. The filename hint only shows in dev.

type Props = {
  /** Path under public/media/ without extension, e.g. "home/hero" */
  base: string;
  /** What kind of file belongs here */
  kind?: MediaKind;
  /** Short description shown on the placeholder, e.g. "Crowd shot from 2025" */
  label: string;
  alt?: string;
  /** CSS aspect-ratio, e.g. "16/9". Omit when the parent sizes the slot (fill). */
  aspect?: string;
  /** Fill the parent (position:absolute; inset:0), for backgrounds */
  fill?: boolean;
  /** Videos: "player" shows controls, "background" autoplays muted on loop */
  mode?: "player" | "background";
  /** In production, render nothing when no file exists (instead of a blank tile) */
  optional?: boolean;
  /** next/image sizes hint */
  sizes?: string;
  priority?: boolean;
  /** A credited photo to show until a file is dropped in (dropped files replace it) */
  fallback?: Photo;
  /** Print the Dee Sanders credit on the fallback photo (only for photos from that set) */
  creditFallback?: boolean;
  position?: string;
  className?: string;
};

export default function MediaSlot({
  base, kind = "image", label, alt, aspect, fill, mode = "player", optional, sizes = "(max-width: 900px) 100vw, 600px", priority, fallback, creditFallback, position, className = "",
}: Props) {
  const found = findMedia(base, kind);
  const dev = process.env.NODE_ENV !== "production";
  const style = fill ? undefined : { aspectRatio: aspect };
  const cls = `media ${fill ? "media--fill" : ""} ${className}`.trim();

  if (found?.type === "image") {
    return (
      <div className={cls} style={style}>
        <Image src={found.url} alt={alt ?? label} fill sizes={sizes} priority={priority} style={{ objectFit: "cover" }} />
      </div>
    );
  }
  if (found?.type === "video") {
    return (
      <div className={cls} style={style}>
        {mode === "background" ? (
          <video src={found.url} autoPlay muted loop playsInline preload="auto" aria-hidden="true" />
        ) : (
          <video src={found.url} controls playsInline preload="metadata" aria-label={alt ?? label} />
        )}
      </div>
    );
  }

  if (fallback) {
    return (
      <div className={cls} style={style}>
        <Image src={fallback.src} alt={fallback.alt} fill sizes={sizes} priority={priority} style={{ objectFit: "cover", objectPosition: position }} />
        {!fill && (fallback.credit || (creditFallback && CREDIT)) && <span className="photo-credit">{fallback.credit || CREDIT}</span>}
      </div>
    );
  }

  if (!dev && optional) return null;
  const Icon = kind === "video" ? PlayCircleIcon : PhotoIcon;
  return (
    <div className={`${cls} media--empty`} style={style} role="img" aria-label={label}>
      <Icon aria-hidden="true" />
      {dev && (
        <div className="media-hint">
          <strong>{label}</strong>
          <code>public/media/{base}.{kind === "video" ? "mp4" : kind === "any" ? "mp4 / jpg" : "jpg"}</code>
        </div>
      )}
    </div>
  );
}
