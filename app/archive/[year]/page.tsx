import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { archives } from "@/lib/archives";
import RichText from "@/components/RichText";

type Params = { year: string };

export function generateStaticParams(): Params[] {
  return archives.map((a) => ({ year: a.year }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { year } = await params;
  return { title: `${year} Archive | Bob Moses Legacy Conference` };
}

export default async function ArchivePage({ params }: { params: Promise<Params> }) {
  const { year } = await params;
  const a = archives.find((x) => x.year === year);
  if (!a) notFound();

  return (
    <div className="archive-page">
      <div className="archive-hero">
        <Link className="back-link" href="/">← Back to Conference 2026</Link>
        <div className="year-big">{a.year}</div>
        <h2>{a.title}</h2>
        <div className="archive-meta">{a.meta}</div>
      </div>
      <div className="archive-section">
        <h3>Schedule</h3>
        {a.days.map((d) => (
          <div className="agenda-block" key={d.heading}>
            <h4>{d.heading}</h4>
            {d.items.map((it, i) => (
              <div className="agenda-item" key={i}>
                {it.time && <span className="time">{it.time}</span>}{" "}
                <RichText text={it.text} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="archive-section alt">
        <h3>Featured Speakers</h3>
        <div className="speakers-list">
          {a.speakers.map((s) => <div className="speaker-chip" key={s}>{s}</div>)}
        </div>
      </div>
    </div>
  );
}
