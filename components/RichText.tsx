import { Fragment } from "react";

// Renders **bold** and _italic_ markers used in lib/archives.ts.
export default function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|_[^_]+_)/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith("**")) return <strong key={i}>{p.slice(2, -2)}</strong>;
        if (p.startsWith("_") && p.endsWith("_") && p.length > 2) return <em key={i}>{p.slice(1, -1)}</em>;
        return <Fragment key={i}>{p}</Fragment>;
      })}
    </>
  );
}
