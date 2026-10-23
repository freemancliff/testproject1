import { Fragment } from "react";
import BookLink from "./BookLink";
import { personKey } from "@/lib/people";

// Renders **bold** and _italic_ markers used in lib/archives.ts.
// With `books`, a quiet book icon follows any bold name that has a book in the bookstore.
export default function RichText({ text, books, seen }: { text: string; books?: boolean; seen?: Set<string> }) {
  const parts = text.split(/(\*\*[^*]+\*\*|_[^_]+_)/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith("**")) {
          const name = p.slice(2, -2);
          // one icon per person per page, so a moderator named in many sessions doesn't repeat it
          const key = personKey(name);
          const first = !!books && !(key && seen?.has(key));
          if (first && key) seen?.add(key);
          return <strong key={i}>{name}{first && <BookLink name={name} variant="icon" />}</strong>;
        }
        if (p.startsWith("_") && p.endsWith("_") && p.length > 2) return <em key={i}>{p.slice(1, -1)}</em>;
        return <Fragment key={i}>{p}</Fragment>;
      })}
    </>
  );
}
