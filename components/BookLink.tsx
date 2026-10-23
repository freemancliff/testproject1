import Link from "next/link";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { booksFor } from "@/lib/people";

// A quiet "Book" link next to a person's name, shown only when they have a book in the bookstore.
export default function BookLink({ name, variant = "text" }: { name: string; variant?: "text" | "icon" }) {
  const hit = booksFor(name);
  if (!hit) return null;
  const many = hit.books.length > 1;
  const label = `${many ? "Books" : "Book"} by ${hit.name}`;
  return (
    <Link className={`book-link book-link--${variant}`} href={`/bookstore?by=${hit.key}#books`} aria-label={label} title={label}>
      <BookOpenIcon aria-hidden="true" />
      {variant === "text" && <span>{many ? "Books" : "Book"}</span>}
    </Link>
  );
}
