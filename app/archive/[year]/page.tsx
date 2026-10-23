import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { archives } from "@/lib/archives";
import RichText from "@/components/RichText";
import MediaSlot from "@/components/MediaSlot";
import VideoGrid from "@/components/VideoGrid";
import PhotoGallery from "@/components/PhotoGallery";
import ComingSoon from "@/components/ComingSoon";
import BookLink from "@/components/BookLink";
import SpeakerBooks from "@/components/SpeakerBooks";
import { personKey } from "@/lib/people";
import { archivePhotos } from "@/lib/archive-photos";
import { PLAYLISTS, videosFor, type ConferenceKey } from "@/lib/videos";
import { pageMeta } from "@/lib/seo";

type Params = { year: string };

const clip = (s: string, n: number) => (s.length <= n ? s : `${s.slice(0, n - 1).trimEnd()}…`);

export function generateStaticParams(): Params[] {
  return archives.map((a) => ({ year: a.year }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { year } = await params;
  const a = archives.find((x) => x.year === year);
  return pageMeta({
    title: `${year} Conference Archive`,
    path: `/archive/${year}`,
    description: a
      ? clip(`${year} Bob Moses Legacy Conference: ${a.title}. ${a.meta.split(" · ").slice(0, 2).join(", ")}.`, 158)
      : `Agenda, speakers, photos and talks from the ${year} Bob Moses Legacy Conference.`,
  });
}

export default async function ArchivePage({ params }: { params: Promise<Params> }) {
  const { year } = await params;
  const idx = archives.findIndex((x) => x.year === year);
  if (idx < 0) notFound();
  const a = archives[idx];
  const talks = videosFor(a.year as ConferenceKey);
  const seen = new Set<string>(); // people who already got a Book icon in the schedule
  // everyone named in the schedule: they get their icon there, so the speaker list below skips them
  const inSchedule = new Set(
    a.days.flatMap((d) => d.items.flatMap((it) => [...it.text.matchAll(/\*\*([^*]+)\*\*/g)].map((x) => personKey(x[1]) ?? ""))),
  );
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
                      <div className="what"><RichText text={it.text} books seen={seen} /></div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SpeakerBooks
        names={[
          ...a.days.flatMap((d) => d.items.flatMap((it) => [...it.text.matchAll(/\*\*([^*]+)\*\*/g)].map((x) => x[1]))),
          ...a.speakers,
        ]}
        max={6}
      />

      {talks.length > 0 ? (
        <section className="section section--dark" id="talks">
          <div className="container">
            <div className="section-head section-head--center">
              <div className="eyebrow">Watch</div>
              <h2>Talks from {a.year}</h2>
            </div>
            <VideoGrid items={talks} />
            {PLAYLISTS[a.year as ConferenceKey] && (
              <div className="center-row">
                <a className="btn btn--ghost" href={PLAYLISTS[a.year as ConferenceKey]} target="_blank" rel="noreferrer">Open the Playlist on YouTube</a>
              </div>
            )}
          </div>
        </section>
      ) : (
        <section className="section section--dark" id="talks">
          <div className="container">
            <div className="section-head section-head--center">
              <div className="eyebrow">Watch</div>
              <h2>Talks from {a.year}</h2>
            </div>
            <ComingSoon subject="Videos" icon="video" aspect="16/5" />
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
        <section className="section section--dark" id="photos">
          <div className="container">
            <div className="section-head section-head--center">
              <div className="eyebrow">{a.year}</div>
              <h2>Photos</h2>
            </div>
            <ComingSoon subject="Photos" aspect="16/5" />
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
            {a.speakers.map((s) => <div className="chip" key={s} style={{ background: "var(--black)", color: "var(--white)" }}>{s}{!inSchedule.has(personKey(s) ?? "") && <BookLink name={s} variant="icon" />}</div>)}
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
