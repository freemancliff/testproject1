import Link from "next/link";
import { SITE } from "@/lib/site";
import { archives } from "@/lib/archives";
import { mit2026 } from "@/lib/mit2026";
import VideoGrid from "@/components/VideoGrid";

export default function HomePage() {
  return (
    <div>
      <div className="conf-hero plain">
        <div className="conf-hero-content">
          <div className="conf-hero-eyebrow">Since 2022</div>
          <h1>The Bob Moses<br /><em>Legacy Conference</em></h1>
          <div className="conf-hero-meta" style={{ maxWidth: 820 }}>
            Grounded in the enduring legacy of Bob Moses, who recognized that literacy is a prerequisite for economic and political participation, the conference calls on each generation to confront the truth of history as a necessary step toward transformative change.
          </div>
          <div className="conf-hero-actions">
            <Link className="btn-primary" href="/2026mit">Next: November 21 at MIT</Link>
            <a className="btn-secondary" href={SITE.channelUrl} target="_blank" rel="noreferrer">Watch the Talks</a>
          </div>
        </div>
      </div>

      <section className="featured-conf" id="featured">
        <span className="featured-badge">Coming Up</span>
        <h2>Bob Moses Legacy Conference at MIT</h2>
        <div className="featured-meta">
          <strong>{mit2026.dateLine}</strong> <span>·</span> {mit2026.hours}<br />
          <span>{mit2026.place}</span>
        </div>
        <p>
          A full day of conversation and strategy in Cambridge: an opening address by Rev. Brandon Terry, a screening of <em>The Alabama Solution</em>, a MacArthur conversation with Desmond Meade and Reuben Miller, five breakout groups, and an evening tribute honoring Omo and Maisha Moses.
        </p>
        <div className="featured-actions">
          <Link className="btn-primary" href="/2026mit">See the Program</Link>
          <a className="btn-secondary" href={SITE.donateUrl} target="_blank" rel="noreferrer">Support the Conference</a>
        </div>
      </section>

      <div className="conf-section">
        <div className="section-eyebrow">Watch</div>
        <h2>Talks from the Conferences</h2>
        <p>Recordings from past conferences are being added to the Bob Moses Legacy YouTube channel. Subscribe to be notified as new talks are posted.</p>
        <div style={{ marginTop: 24 }}>
          <a className="btn-primary" href={SITE.channelUrl} target="_blank" rel="noreferrer">Subscribe on YouTube</a>
        </div>
        <VideoGrid />
      </div>

      <div className="conf-section alt">
        <div className="section-eyebrow">Archive</div>
        <h2>Every Conference</h2>
        <div className="past-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
          <Link className="past-card past-card-link" href="/2026eji">
            <h4>2026</h4>
            <div className="past-meta">October 2–4 · Montgomery, AL</div>
            <p>Remaking America: The Work Before Us</p>
            <div style={{ fontSize: 11, color: "var(--gold)", marginTop: 8 }}>View Conference →</div>
          </Link>
          {archives.map((a) => (
            <Link key={a.year} className="past-card past-card-link" href={`/archive/${a.year}`}>
              <h4>{a.year}</h4>
              <div className="past-meta">{a.meta.split(" · ").slice(0, 2).join(" · ")}</div>
              <p>{a.title}</p>
              <div style={{ fontSize: 11, color: "var(--gold)", marginTop: 8 }}>View Archive →</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="register-section">
        <h2>Support the Work</h2>
        <p>Your donation helps make these conferences possible, supporting programming and access for all participants.</p>
        <div className="register-actions">
          <a className="btn-primary" href={SITE.donateUrl} target="_blank" rel="noreferrer">Count Me In — Donate</a>
        </div>
      </div>
    </div>
  );
}
