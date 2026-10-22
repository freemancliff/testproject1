"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AFFILIATE_DISCLOSURE } from "@/lib/affiliate";

export type ShelfBook = {
  slug: string; title: string; subtitle?: string; author: string; category: string;
  years: number[]; href: string; store: string; cover?: string; featured?: boolean; note?: string;
};

// The book shelf: filter by topic, search by title or author. Links open the store in a new tab.
export default function BookGrid({ books, categories }: { books: ShelfBook[]; categories: string[] }) {
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");

  const shown = useMemo(() => {
    const n = q.trim().toLowerCase();
    return books.filter((b) => (cat === "All" || b.category === cat) &&
      (!n || `${b.title} ${b.subtitle ?? ""} ${b.author}`.toLowerCase().includes(n)));
  }, [books, cat, q]);

  return (
    <>
      <div className="shelf-controls">
        <div className="chips" role="group" aria-label="Filter by topic">
          {["All", ...categories].map((c) => (
            <button key={c} type="button" className={`chip chip--btn ${cat === c ? "is-on" : ""}`} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <label className="shelf-search">
          <span className="sr-only">Search books</span>
          <input type="search" placeholder="Search by title or author" value={q} onChange={(e) => setQ(e.target.value)} />
        </label>
      </div>

      {shown.length === 0 ? (
        <p className="muted" style={{ textAlign: "center", padding: "40px 0" }}>No books match your search.</p>
      ) : (
        <ul className="book-grid">
          {shown.map((b) => (
            <li className={`book ${b.featured ? "book--featured" : ""}`.trim()} key={b.slug}>
              <div className="book-info">
                {b.featured && <div className="book-flag">By the Moses family</div>}
                <div className="book-cat">{b.category}</div>
                <h3>{b.title}</h3>
                {b.subtitle && <p className="book-sub">{b.subtitle}</p>}
                <p className="book-author">{b.author}</p>
                {b.note && <p className="book-note">{b.note}</p>}
              </div>
              <div className={`book-cover ${b.cover ? "" : "book-cover--none"}`.trim()}>
                {b.cover ? (
                  <Image src={b.cover} alt={`Cover of ${b.title}`} fill sizes="(max-width: 560px) 45vw, 240px" style={{ objectFit: "contain" }} />
                ) : (
                  <div className="book-cover--text" aria-hidden="true">
                    <span>{b.title}</span>
                    <small>{b.author.split(" and ")[0].split(",")[0]}</small>
                  </div>
                )}
              </div>
              <div className="book-action">
                <a className="btn btn--primary btn--sm" href={b.href} target="_blank" rel="sponsored noopener noreferrer" aria-label={`Read here: ${b.title}`}>Read Here</a>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p className="muted" style={{ textAlign: "center", marginTop: 20 }}>{shown.length} of {books.length} books</p>
      <p className="muted shelf-disclosure">{AFFILIATE_DISCLOSURE}</p>
    </>
  );
}
