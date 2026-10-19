import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { mit2026, program, breakouts, evening, featuredPeople } from "@/lib/mit2026";

export const metadata: Metadata = {
  title: "2026 at MIT: November 21, Cambridge",
  description: "Bob Moses Legacy Conference at MIT, Saturday, November 21, 2026, MIT Tang Auditorium, Cambridge, Massachusetts.",
};

export default function Mit2026Page() {
  return (
    <div>
      <div style={{ background: "var(--off-black)", padding: "14px 48px" }}>
        <Link href="/" style={{ fontSize: 13, color: "var(--gold)", textDecoration: "none" }}>← All Conferences</Link>
      </div>

      <div className="conf-hero plain">
        <div className="conf-hero-content">
          <div className="conf-hero-eyebrow">Bob Moses Legacy Conference</div>
          <h1>At MIT<br /><em>November 21, 2026</em></h1>
          <div className="conf-hero-meta">
            <strong>{mit2026.dateLine}</strong> &nbsp;·&nbsp; {mit2026.hours}<br />
            {mit2026.place}
          </div>
          <div className="conf-hero-actions">
            <a className="btn-primary" href={SITE.donateUrl} target="_blank" rel="noreferrer">Support the Conference</a>
            <a className="btn-secondary" href={SITE.channelUrl} target="_blank" rel="noreferrer">Watch Past Talks</a>
          </div>
        </div>
      </div>

      <div className="archive-section">
        <h3>Program</h3>
        <div className="agenda-block">
          <h4>{mit2026.dateLine}</h4>
          {program.map((p, i) => (
            <div className="agenda-item" key={i}>
              {p.time ? <span className="time program-time">{p.time}</span> : <span className="time program-time" />}
              <strong>{p.title}</strong>
              {p.detail && <> · {p.detail}</>}
            </div>
          ))}
          <div className="agenda-item" style={{ marginTop: 12, borderTop: "1px solid #333", paddingTop: 16 }}>
            <span className="time program-time">{evening.time}</span>
            <strong>{evening.title}</strong> · {evening.detail}
          </div>
        </div>
      </div>

      <div className="conf-section">
        <div className="section-eyebrow">3:00 – 3:45 pm</div>
        <h2>Breakout Groups</h2>
        <div className="schedule-cards">
          {breakouts.map((b, i) => (
            <div className="schedule-card" key={b.title}>
              <div className="schedule-day">Session {i + 1}</div>
              <h3>{b.title}</h3>
              <ul>
                {b.leads.map((l) => <li key={l}>{l}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="archive-section alt">
        <h3>Featured Participants</h3>
        <div className="speakers-list">
          {featuredPeople.map((n) => <div className="speaker-chip" key={n}>{n}</div>)}
        </div>
        <p className="people-note">Additional speakers and details to be announced.</p>
      </div>

      <div className="register-section">
        <h2>Join the Work</h2>
        <p>Your donation helps make this conference possible, supporting programming and access for all participants.</p>
        <div className="register-actions">
          <a className="btn-primary" href={SITE.donateUrl} target="_blank" rel="noreferrer">Count Me In — Donate</a>
          <Link className="btn-secondary" href="/">All Conferences</Link>
        </div>
      </div>
    </div>
  );
}
