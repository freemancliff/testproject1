import type { Metadata } from "next";
import Link from "next/link";
import { catalog, categories, resources } from "@/lib/books";
import { AMAZON_TAG, shopUrl, storeName } from "@/lib/affiliate";
import { findMedia } from "@/lib/media";
import { pageMeta } from "@/lib/seo";
import BookGrid, { type ShelfBook } from "@/components/BookGrid";

export const metadata: Metadata = pageMeta({
  title: "Bookstore: Books from the Bob Moses Legacy Conference",
  path: "/bookstore",
  description: "Books by and recommended by our conference speakers on mass incarceration, reparations, history and education. Shop online.",
});

export default function BookstorePage() {
  const shelf: ShelfBook[] = catalog.map((b) => {
    const href = shopUrl(b.link);
    return {
      slug: b.slug, title: b.title, subtitle: b.subtitle, author: b.author, category: b.category, years: b.years, featured: !!b.featured, note: b.note,
      href, store: storeName(href), cover: findMedia(`books/${b.slug}`, "image")?.url,
    };
  });

  return (
    <>
      <section className="section section--dark section--tight">
        <div className="container">
          <Link className="back-link" href="/">← Home</Link>
          <div className="eyebrow">Bookstore</div>
          <h1 style={{ fontSize: "clamp(1.9rem,5.4vw,3.6rem)", marginBottom: 16 }}>Books from the Conference</h1>
          <p className="lead">The online home of our pop-up bookstore: books by and recommended by the speakers and scholars who join us each year. Every purchase helps you keep learning and this conference free.</p>
          {!AMAZON_TAG && process.env.NODE_ENV !== "production" && (
            <p className="muted" style={{ marginTop: 8, color: "var(--gold)" }}>Dev note: no Amazon tag set yet. Add NEXT_PUBLIC_AMAZON_TAG (see lib/affiliate.ts).</p>
          )}
        </div>
      </section>

      <section className="section section--black" id="books">
        <div className="container">
          <BookGrid books={shelf} categories={categories} />
        </div>
      </section>

      <section className="section section--cream" id="reading">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Free to Read</div>
            <h2>Articles &amp; Resources</h2>
            <p className="lead">Essays, reports and exhibits shared by our speakers.</p>
          </div>
          <ul className="resource-list">
            {resources.map((r) => (
              <li key={r.url}>
                <a href={shopUrl(r.url)} target="_blank" rel="noopener noreferrer">
                  <strong>{r.title}</strong>
                  <span>{r.by} · {r.source}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <h2>Join Us at the Conference</h2>
          <p>Hear many of these authors in person. Part II is free to attend.</p>
          <div className="btn-row">
            <Link className="btn btn--primary" href="/register">Register (Free)</Link>
            <Link className="btn btn--ghost" href="/2026mit">See Part II</Link>
          </div>
        </div>
      </section>
    </>
  );
}
