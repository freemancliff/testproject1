import { quotes } from "@/lib/quotes";

const SAMPLE = [
  { text: "Your quote goes here. Add them in lib/quotes.ts.", author: "Name", role: "Title, Organization" },
  { text: "Short, striking lines work best in these cards.", author: "Name", role: "Title, Organization" },
  { text: "Each quote can be attributed to a speaker or attendee.", author: "Name", role: "Title, Organization" },
];

export default function Quotes() {
  const dev = process.env.NODE_ENV !== "production";
  const list = quotes.length ? quotes.slice(0, 6) : dev ? SAMPLE : [];
  if (!list.length) return null;
  const sample = quotes.length === 0;

  return (
    <section className="section section--black" aria-labelledby="voices">
      <div className="container">
        <div className="section-head section-head--center">
          <div className="eyebrow">Voices</div>
          <h2 id="voices">Quotes from attendees</h2>
        </div>
        <div className={`quote-grid ${sample ? "is-sample" : ""}`}>
          {list.map((q, i) => (
            <figure className="quote-card" key={i}>
              <blockquote>{q.text}</blockquote>
              <figcaption>
                <strong>{q.author}</strong>
                {q.role && <span>{q.role}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
