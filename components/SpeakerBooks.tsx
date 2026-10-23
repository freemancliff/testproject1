import Image from "next/image";
import Link from "next/link";
import { catalog } from "@/lib/books";
import { booksForMany } from "@/lib/people";
import { findMedia } from "@/lib/media";

// A slim "Books from our speakers" strip for conference pages (after the schedule).
// Shows books by the people named on that page; the Moses family books fill in if there are few.
export default function SpeakerBooks({ names, max = 6 }: { names: string[]; max?: number }) {
  const picks = booksForMany(names);
  for (const b of catalog) if (b.featured && !picks.includes(b)) picks.push(b);
  const shown = picks.slice(0, max);
  if (shown.length === 0) return null;

  return (
    <section className="section section--dark section--tight speaker-books" aria-labelledby="speaker-books-title">
      <div className="container">
        <div className="sb-head">
          <div>
            <div className="eyebrow">Keep Reading</div>
            <h2 id="speaker-books-title">Books from Our Speakers</h2>
          </div>
          <Link className="text-link" href="/bookstore">Visit the Bookstore →</Link>
        </div>
        <ul className="sb-row">
          {shown.map((b) => {
            const cover = findMedia(`books/${b.slug}`, "image")?.url;
            return (
              <li key={b.slug}>
                <Link href={`/bookstore#book-${b.slug}`} aria-label={`${b.title}, ${b.author}`}>
                  <span className="sb-cover">
                    {cover ? <Image src={cover} alt="" fill sizes="(max-width: 560px) 30vw, 130px" style={{ objectFit: "contain" }} /> : <span className="sb-nocover">{b.title}</span>}
                  </span>
                  <span className="sb-title">{b.title}</span>
                  <span className="sb-author">{b.author.split(/,| and /)[0]}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
