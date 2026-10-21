import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { mit2026, program, breakouts, featuredPeople } from "@/lib/mit2026";
import MediaSlot from "@/components/MediaSlot";
import Avatar from "@/components/Avatar";
import MitRegisterButton from "@/components/MitRegisterButton";

export const metadata: Metadata = {
  title: "2026 at MIT: November 21, Cambridge",
  description: "Bob Moses Legacy Conference at MIT, Saturday, November 21, 2026, Wong Auditorium, Jack C. Tang Center for Management Education (E51), MIT, Cambridge, Massachusetts.",
};

const isBreak = (t: string) => /^(break|transition)/i.test(t);
const isFeature = (t: string) => /^(screening|macarthur)/i.test(t);

export default function Mit2026Page() {
  return (
    <>
      <section className="hero hero--sub">
        <div className="hero-bg">
          <MediaSlot base="mit/hero" kind="any" mode="background" fill priority label="MIT hero: Wong Auditorium, campus, or a video loop" sizes="100vw" />
        </div>
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <div>
            <Link className="back-link" href="/">← All Conferences</Link>
            <div className="eyebrow">Bob Moses Legacy Conference</div>
            <h1>At MIT <em>November 21, 2026</em></h1>
            <div className="btn-row">
              <MitRegisterButton />
              <a className="btn btn--ghost" href={SITE.donateUrl} target="_blank" rel="noreferrer">Support the Conference</a>
            </div>
          </div>
        </div>
      </section>

      <div className="infobar">
        <div className="container">
          <div className="infobar-grid">
            <div className="infobar-item"><span>Date</span><strong>{mit2026.dateLine}</strong></div>
            <div className="infobar-item"><span>Time</span><strong>{mit2026.hours}</strong></div>
            <div className="infobar-item"><span>Place</span><strong>{mit2026.venue}, {mit2026.building}<br />{mit2026.institution} · {mit2026.city}</strong></div>
          </div>
        </div>
      </div>

      <section className="section section--black" id="program">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow">{mit2026.dateLine}</div>
            <h2>The Program</h2>
          </div>
          <ol className="timeline">
            {program.map((p, i) => (
              <li key={i} className={isBreak(p.title) ? "is-break" : isFeature(p.title) ? "is-feature" : undefined}>
                <div className="time">{p.time || "·"}</div>
                <div className="what">
                  <strong>{p.title}</strong>
                  {p.detail}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--dark" aria-label="Conference video and venue">
        <div className="container split">
          <MediaSlot base="mit/promo-video" kind="video" label="Promo or invitation video for MIT 2026" aspect="16/9" />
          <MediaSlot base="mit/venue" label="Venue photo: Wong Auditorium, Tang Center" aspect="16/9" />
        </div>
      </section>

      <section className="section section--black" id="breakouts">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">3:00 – 3:45 pm</div>
            <h2>Breakout Groups</h2>
            <p className="lead">Five working sessions, each led by organizers and practitioners.</p>
          </div>
          <div className="card-grid">
            {breakouts.map((b, i) => (
              <article className="card" key={b.title}>
                <div className="card-kicker">Session {i + 1}</div>
                <h3>{b.title}</h3>
                <ul>{b.leads.map((l) => <li key={l}>{l}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream" id="people">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow">Featured Participants</div>
            <h2>Who You&apos;ll Hear From</h2>
          </div>
          <div className="people-grid people-grid--lg">
            {featuredPeople.map((n) => (
              <div className="person" key={n}>
                <Avatar name={n} />
                <div className="person-name">{n}</div>
              </div>
            ))}
          </div>
          <p className="muted" style={{ textAlign: "center", marginTop: 32, fontStyle: "italic" }}>Additional speakers and details to be announced.</p>
        </div>
      </section>

      <section className="section section--dark" aria-label="Gallery">
        <div className="container">
          <div className="gallery">
            <MediaSlot base="mit/gallery-1" label="MIT gallery 1 (large)" optional />
            <MediaSlot base="mit/gallery-2" label="MIT gallery 2" optional />
            <MediaSlot base="mit/gallery-3" label="MIT gallery 3" optional />
            <MediaSlot base="mit/gallery-4" label="MIT gallery 4 (wide)" optional />
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <h2>Join the Work</h2>
          <p>Your donation helps make this conference possible, supporting programming and access for all participants.</p>
          <div className="btn-row">
            <MitRegisterButton />
            <a className="btn btn--ghost" href={SITE.donateUrl} target="_blank" rel="noreferrer">Count Me In — Donate</a>
          </div>
        </div>
      </section>
    </>
  );
}
