import { findMedia, initialsOf, slugify } from "@/lib/media";

// Round headshot. Uses public/media/people/<name-slug>.(jpg|png|webp) if present,
// otherwise `photo` (a path in /public), otherwise the person's initials.
export default function Avatar({ name, photo, slug }: { name: string; photo?: string; slug?: string }) {
  const dropped = findMedia(`people/${slug ?? slugify(name)}`, "image");
  const src = dropped?.url ?? photo;
  return (
    <div
      className="avatar"
      role="img"
      aria-label={name}
      style={src ? { backgroundImage: `url(${src})`, fontSize: 0 } : undefined}
    >
      {!src && initialsOf(name)}
    </div>
  );
}
