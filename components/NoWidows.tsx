"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Keeps the last two words of every title, paragraph, list item and name together, so a single
// word never hangs alone on the last line. Works in every browser and for any text added later.
// If keeping the pair together would make a line overflow (very narrow screens), it backs off.
const SELECTOR = [
  "main h1", "main h2", "main h3", "main h4", "main p", "main li", "main blockquote", "main dd", "main figcaption",
  "main .person-name", "main .person-role", "main .eyebrow", "main .card-kicker", "main .logo-name",
  "main .infobar-item strong", "main .timeline .what strong", "footer p",
].join(",");

type Bound = { node: Text; original: string; el: HTMLElement };

function textNodes(el: HTMLElement): Text[] {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => (n.nodeValue ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT),
  });
  const nodes: Text[] = [];
  let n: Node | null;
  while ((n = walker.nextNode())) nodes.push(n as Text);
  return nodes;
}

// Joins the last two words with a no-break space. The last word may sit in its own link or
// bold tag, so the space can live at the end of the previous text node or the start of this one.
function joinLastWords(all: Text[]): Text | null {
  let i = all.length - 1;
  while (i >= 0 && !(all[i].nodeValue ?? "").trim()) i--;   // last node that has real text
  if (i < 0) return null;
  const last = all[i];
  const v = last.nodeValue ?? "";
  const inside = v.replace(/(\S)[ \t\n]+(\S+)([ \t\n]*)$/, "$1\u00A0$2$3");
  if (inside !== v) { last.nodeValue = inside; return last; }
  if (/^[ \t\n]+\S/.test(v)) { last.nodeValue = v.replace(/^[ \t\n]+/, "\u00A0"); return last; }
  const before = all[i - 1];
  if (before) {
    const bv = before.nodeValue ?? "";
    if (!bv.trim()) { before.nodeValue = "\u00A0"; return before; }              // a bare space node between word and link
    if (/\S[ \t\n]+$/.test(bv)) { before.nodeValue = bv.replace(/[ \t\n]+$/, "\u00A0"); return before; }
  }
  return null;
}

function bindAll(): Bound[] {
  const bound: Bound[] = [];
  document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
    if (!el.offsetParent) return;
    const nodes = textNodes(el);
    if (!nodes.length) return;
    const candidates = nodes.slice(-3);
    const originals = candidates.map((n) => n.nodeValue ?? "");
    const changed = joinLastWords(nodes);
    if (!changed) return;
    // Back off if the joined pair no longer fits the line
    if (el.scrollWidth > el.clientWidth + 1) {
      candidates.forEach((n, i) => { n.nodeValue = originals[i]; });
      return;
    }
    candidates.forEach((n, i) => bound.push({ node: n, original: originals[i], el }));
  });
  return bound;
}

export default function NoWidows() {
  const pathname = usePathname();

  useEffect(() => {
    let bound: Bound[] = [];
    let raf = 0;
    let timer: ReturnType<typeof setTimeout>;

    const run = () => {
      bound.forEach((b) => { if (b.node.isConnected) b.node.nodeValue = b.original; });
      bound = bindAll();
    };
    const schedule = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => requestAnimationFrame(run)); };

    schedule();
    document.fonts?.ready.then(schedule);
    const onResize = () => { clearTimeout(timer); timer = setTimeout(schedule, 150); };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); clearTimeout(timer); window.removeEventListener("resize", onResize); };
  }, [pathname]);

  return null;
}
