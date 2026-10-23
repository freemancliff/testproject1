"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

type Entry = { type: "person" | "talk" | "book" | "page" | "article"; title: string; sub?: string; url: string; kw?: string; ext?: boolean };

const GROUPS: { type: Entry["type"]; label: string }[] = [
  { type: "person", label: "People" },
  { type: "talk", label: "Talks" },
  { type: "book", label: "Books" },
  { type: "page", label: "Pages" },
  { type: "article", label: "Articles" },
];
const QUICK = ["Register (Free) for Part II", "Part II at MIT · November 21, 2026", "Bookstore", "Part I · Montgomery, October 2–4, 2026"];

const norm = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

function score(e: Entry, tokens: string[]): number {
  const title = norm(e.title), sub = norm(e.sub ?? ""), kw = norm(e.kw ?? "");
  let total = 0;
  for (const t of tokens) {
    if (title.startsWith(t)) total += 6;
    else if (title.split(/[\s\-:·,]+/).some((w) => w.startsWith(t))) total += 4;
    else if (title.includes(t)) total += 2;
    else if (sub.split(/[\s\-:·,]+/).some((w) => w.startsWith(t))) total += 2;
    else if (sub.includes(t) || kw.includes(t)) total += 1;
    else return 0; // every word typed has to match something
  }
  return total;
}

export default function SiteSearch({ menuRow = false, onOpen }: { menuRow?: boolean; onOpen?: () => void }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [index, setIndex] = useState<Entry[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [active, setActive] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const opener = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => { setOpen(false); setQ(""); setActive(0); opener.current?.focus(); }, []);

  // load the index the first time the box opens
  useEffect(() => {
    if (!open || index || failed) return;
    fetch("/search-index.json").then((r) => r.json()).then(setIndex).catch(() => setFailed(true));
  }, [open, index, failed]);

  useEffect(() => {
    if (open) { input.current?.focus(); document.body.style.overflow = "hidden"; }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Ctrl/Cmd+K or "/" opens search; Esc closes it (only the header copy listens, so it never opens twice)
  useEffect(() => {
    if (menuRow) return;
    const onKey = (e: KeyboardEvent) => {
      const typing = /^(input|textarea|select)$/i.test((e.target as HTMLElement)?.tagName ?? "") || (e.target as HTMLElement)?.isContentEditable;
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) { e.preventDefault(); setOpen(true); }
      else if (e.key === "Escape" && open) close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, menuRow]);

  const results = useMemo(() => {
    if (!index) return [];
    const tokens = norm(q).split(/\s+/).filter(Boolean);
    if (!tokens.length) return index.filter((e) => QUICK.includes(e.title));
    const scored = index.map((e) => ({ e, s: score(e, tokens) })).filter((x) => x.s > 0);
    const out: Entry[] = [];
    for (const g of GROUPS) out.push(...scored.filter((x) => x.e.type === g.type).sort((a, b) => b.s - a.s).slice(0, g.type === "talk" || g.type === "person" ? 6 : 4).map((x) => x.e));
    return out;
  }, [index, q]);

  useEffect(() => setActive(0), [q]);

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === "Enter") { e.preventDefault(); document.getElementById(`sr-${active}`)?.click(); }
  };
  useEffect(() => { document.getElementById(`sr-${active}`)?.scrollIntoView({ block: "nearest" }); }, [active]);

  let n = -1;
  const trimmed = q.trim();
  return (
    <>
      <button
        ref={opener} type="button" className={menuRow ? "search-row" : "search-btn"}
        onClick={() => { onOpen?.(); setOpen(true); }}
        aria-label={menuRow ? undefined : "Search the site"} aria-haspopup="dialog" aria-keyshortcuts={menuRow ? undefined : "Control+K Meta+K /"}
      >
        <MagnifyingGlassIcon aria-hidden="true" />
        {menuRow && <span>Search</span>}
      </button>

      {open && createPortal(
        <div className="search-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}>
          <div className="search-panel" role="dialog" aria-modal="true" aria-label="Search the site">
            <div className="search-bar">
              <MagnifyingGlassIcon aria-hidden="true" />
              <input
                ref={input} type="search" value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={onInputKey}
                placeholder="Search talks, people, books, pages…" autoComplete="off" spellCheck={false}
                role="combobox" aria-expanded="true" aria-controls="search-results" aria-activedescendant={results.length ? `sr-${active}` : undefined} aria-label="Search"
              />
              <button type="button" className="search-close" onClick={close} aria-label="Close search"><XMarkIcon aria-hidden="true" /></button>
            </div>

            <div className="search-body" id="search-results" role="listbox" aria-label="Search results">
              {failed && <p className="search-empty">Search isn’t available right now. Please try again.</p>}
              {!index && !failed && <p className="search-empty">Loading…</p>}
              {index && !trimmed && <p className="search-hint">Quick links</p>}
              {index && trimmed && results.length === 0 && <p className="search-empty">No matches for “{trimmed}”. Try a speaker’s name, a topic like “reparations,” or a book title.</p>}
              {index && GROUPS.map((g) => {
                const items = results.filter((r) => r.type === g.type);
                if (!items.length) return null;
                return (
                  <div key={g.type} role="group" aria-label={g.label}>
                    {trimmed && <p className="search-hint">{g.label}</p>}
                    {items.map((r) => {
                      n += 1; const i = n;
                      const cls = `search-item ${i === active ? "is-active" : ""}`;
                      const body = <><span className="search-title">{r.title}</span>{r.sub && <span className="search-sub">{r.sub}</span>}</>;
                      return r.ext
                        ? <a key={r.url} id={`sr-${i}`} role="option" aria-selected={i === active} className={cls} href={r.url} target="_blank" rel="noopener noreferrer" onClick={close} onMouseMove={() => setActive(i)}>{body}<span className="search-ext">↗</span></a>
                        : <Link key={r.url + r.title} id={`sr-${i}`} role="option" aria-selected={i === active} className={cls} href={r.url} onClick={close} onMouseMove={() => setActive(i)}>{body}</Link>;
                    })}
                  </div>
                );
              })}
            </div>
            <p className="search-foot"><kbd>↑</kbd> <kbd>↓</kbd> to move · <kbd>Enter</kbd> to open · <kbd>Esc</kbd> to close</p>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
