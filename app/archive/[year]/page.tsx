import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { archives } from "@/lib/archives";
import RichText from "@/components/RichText";
import MediaSlot from "@/components/MediaSlot";
import VideoGrid from "@/components/VideoGrid";
import PhotoGallery from "@/components/PhotoGallery";
import { archivePhotos } from "@/lib/archive-photos";
import { videosFor, type ConferenceKey } from "@/lib/videos";

type Params = { year: string };

export function generateStaticParams(): Params[] {
  return archives.map((a) => ({ year: a.year }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { year } = await params;
  return { title: `${year} Archive` };
}

export default async function ArchivePage({ params }: { params: Promise<Params> }) {
  const { year } = await params;
  const idx = archives.findIndex((x) => x.year === year);
  if (idx < 0) notFound();
  const a = archives[idx];
  const talks = videosFor(a.year as ConferenceKey);
  const photos = archivePhotos[a.year] ?? [];
  const newer = archives[idx - 1];
  const older = archives[idx + 1];

  return (
    <>
      <section className="hero hero--sub">
        <div className="hero-bg">
          <MediaSlot base={`archive/${a.year}/hero`} kind="any" mode="background" fill label={`${a.year} hero: a wide photo from the conference`} sizes="100vw" />
        </div>
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <div>
            <Link className="back-link" href="/#archive">← All Conferences</Link>
            <div className="year-big">{a.year}</div>
            <h1 style={{ fontSize: "clamp(1.6rem,3.6vw,2.8rem)", marginBottom: 16, maxWidth: "26ch" }}>{a.title}</h1>
            <div className="archive-meta">{a.meta}</div>
          </div>
        </div>
      </section>

      <section className="section section--black">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow">Agenda</div>
            <h2>Schedule</h2>
          </div>
          <div className="archive-agenda">
            {a.days.map((d) => (
              <div className="timeline-group" key={d.heading}>
                <h3>{d.heading}</h3>
                <ol className="timeline">
                  {d.items.map((it, i) => (
                    <li key={i}>
                      <div className="time">{it.time || "·"}</div>
                      <div className="what"><RichText text={it.text} /></div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {talks.length > 0 && (
        <section className="section section--dark" id="talks">
          <div className="container">
            <div className="section-head section-head--center">
              <div className="eyebrow">Watch</div>
              <h2>Talks from {a.year}</h2>
            </div>
            <VideoGrid items={talks} layout="grid" />
          </div>
        </section>
      )}

      {photos.length > 0 ? (
        <section className="section section--dark" id="photos">
          <div className="container">
            <div className="section-head section-head--center">
              <div className="eyebrow">{a.year}</div>
              <h2>Photos</h2>
              <p className="lead">Click any photo to enlarge.</p>
            </div>
            <PhotoGallery sections={[{ photos }]} />
            <div className="recap-video">
              <MediaSlot base={`archive/${a.year}/video`} kind="video" label={`${a.year} recap video`} aspect="16/9" optional />
            </div>
          </div>
        </section>
      ) : (
        <section className="section section--dark">
          <div className="container split">
            <MediaSlot base={`archive/${a.year}/video`} kind="video" label={`${a.year} recap video`} aspect="16/9" />
            <div className="gallery" style={{ gridTemplateColumns: "1fr 1fr", gridAutoRows: "clamp(110px,14vw,170px)" }}>
              <MediaSlot base={`archive/${a.year}/photo-1`} label={`${a.year} photo 1`} optional />
              <MediaSlot base={`archive/${a.year}/photo-2`} label={`${a.year} photo 2`} optional />
              <MediaSlot base={`archive/${a.year}/photo-3`} label={`${a.year} photo 3`} optional />
              <MediaSlot base={`archive/${a.year}/photo-4`} label={`${a.year} photo 4`} optional />
            </div>
          </div>
        </section>
      )}

      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Featured</div>
            <h2>Speakers</h2>
          </div>
          <div className="chips">
            {a.speakers.map((s) => <div className="chip" key={s} style={{ background: "var(--black)", color: "var(--white)" }}>{s}</div>)}
          </div>
        </div>
      </section>

      <section className="section section--black section--tight">
        <div className="container pager">
          {older ? <Link href={`/archive/${older.year}`}><small>← Previous</small><strong>{older.year}</strong></Link> : <span />}
          {newer ? <Link href={`/archive/${newer.year}`}><small>Next →</small><strong>{newer.year}</strong></Link> : <Link href="/2026eji"><small>Next →</small><strong>2026</strong></Link>}
        </div>
      </section>
    </>
  );
}
