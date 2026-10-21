import Link from "next/link";
import { SITE } from "@/lib/site";
import { archives } from "@/lib/archives";
import { mit2026 } from "@/lib/mit2026";
import VideoGrid from "@/components/VideoGrid";
import { homeVideos } from "@/lib/videos";
import MediaSlot from "@/components/MediaSlot";
import Quotes from "@/components/Quotes";
import MitRegisterButton from "@/components/MitRegisterButton";
import SponsorGrid from "@/components/SponsorGrid";
import PhotoGallery from "@/components/PhotoGallery";
import CreditedPhoto from "@/components/CreditedPhoto";
import Photo from "@/components/Photo";
import { findMedia } from "@/lib/media";
import { CREDIT, ejiHero, ejiDay, homeGallery } from "@/lib/eji-photos";

export default function HomePage() {
  const heroIsDropped = !!findMedia("home/hero", "any");
  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <MediaSlot base="home/hero" kind="any" mode="background" fill priority label="Hero background: video loop or wide photo" sizes="100vw" fallback={ejiHero} position="center 60%" />
        </div>
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <div>
            <div className="eyebrow">Since 2022</div>
            <h1>The Bob Moses <em>Legacy Conference</em></h1>
            <p className="lead">
              Grounded in the enduring legacy of Bob Moses, who recognized that literacy is a prerequisite for economic and political participation, the conference calls on each generation to confront the truth of history as a necessary step toward transformative change.
            </p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/2026mit">See the 2026 Program</Link>
              <a className="btn btn--ghost" href={SITE.channelUrl} target="_blank" rel="noreferrer">Watch the Talks</a>
            </div>
          </div>
          <aside className="next-card" aria-label="Next conference">
            <span className="badge">Coming Up</span>
            <h2>At MIT</h2>
            <dl>
              <div><dt>Date</dt><dd>{mit2026.dateLine}</dd></div>
              <div><dt>Time</dt><dd>{mit2026.hours}</dd></div>
              <div><dt>Place</dt><dd>{mit2026.place}</dd></div>
            </dl>
            <div className="btn-row" style={{ flexDirection: "column" }}>
              <MitRegisterButton />
              <Link className="btn btn--ghost" href="/2026mit">View Details</Link>
            </div>
          </aside>
        </div>
        {!heroIsDropped && CREDIT && <div className="hero-credit">{CREDIT}</div>}
      </section>

      <section className="section section--dark" id="featured">
        <div className="container split">
          <MediaSlot base="home/mit-2026" label="Photo for the MIT 2026 conference (MIT, Wong Auditorium, or past attendees)" aspect="4/3" sizes="(max-width: 860px) 100vw, 560px" fallback={{ src: "/media/archive/2023/01-preview.jpg", alt: "Young people standing on stage at the 2023 Bob Moses Conference at the MIT Media Lab as the audience looks on" }} position="center" />
          <div>
            <div className="eyebrow">November 21, 2026</div>
            <h2>Bob Moses Legacy Conference at MIT</h2>
            <p className="lead">A full day of conversation and strategy in Cambridge.</p>
            <ul className="check-list">
              <li><strong>Welcome</strong> from Rev. Rahsaan Hall and a session with <strong>Rev. Brandon Terry</strong></li>
              <li>Screening of <strong><em>The Alabama Solution</em></strong></li>
              <li><strong>MacArthur conversation</strong> with Desmond Meade, Reuben Miller, and Andrea Armstrong</li>
              <li><strong>Five breakout groups</strong> on organizing and strategy</li>
              <li><strong>Closing</strong> with Dr. Janet Moses</li>
            </ul>
            <div className="btn-row">
              <MitRegisterButton />
              <Link className="btn btn--ghost" href="/2026mit">See the Program</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--black" id="watch">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Watch</div>
            <h2>Talks from the Conferences</h2>
            <p className="lead">Recordings from past conferences are being added to the Bob Moses Legacy YouTube channel. Subscribe to be notified as new talks are posted.</p>
            <div className="btn-row" style={{ marginTop: 24 }}>
              <a className="btn btn--primary" href={SITE.channelUrl} target="_blank" rel="noreferrer">Subscribe on YouTube</a>
              <Link className="btn btn--ghost" href="/2026eji#sessions">All 2026 Montgomery Sessions</Link>
            </div>
          </div>
          <VideoGrid items={homeVideos()} />
        </div>
      </section>

      <Quotes />

      <section className="section section--dark" aria-labelledby="moments">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow">Moments</div>
            <h2 id="moments">Gathered in Community</h2>
          </div>
          <PhotoGallery variant="mosaic" sections={[{ photos: homeGallery }]} />
        </div>
      </section>

      <section className="section section--black" id="archive">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Past Conferences</div>
            <h2>Every Conference</h2>
          </div>
          <div className="card-grid">
            <Link className="card card--link year-card is-new" href="/2026eji">
              <CreditedPhoto photo={ejiDay.sunday} className="year-thumb" sizes="(max-width: 600px) 100vw, 320px" />
              <div className="year">2026</div>
              <div className="meta">October 2–4 · Montgomery, AL</div>
              <h3>Remaking America: The Work Before Us</h3>
              <span className="go">View Conference →</span>
            </Link>
            {archives.map((a) => (
              <Link key={a.year} className="card card--link year-card" href={`/archive/${a.year}`}>
                {findMedia(`archive/${a.year}/hero`, "image") && (
                  <Photo photo={{ src: `/media/archive/${a.year}/hero.jpg`, alt: `${a.year} conference` }} className="year-thumb" sizes="(max-width: 600px) 100vw, 320px" />
                )}
                <div className="year">{a.year}</div>
                <div className="meta">{a.meta.split(" · ").slice(0, 2).join(" · ")}</div>
                <h3>{a.title}</h3>
                <span className="go">View Archive →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream" id="partners">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow">Our Partners</div>
            <h2>Made Possible By</h2>
          </div>
          <SponsorGrid />
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <h2>Support the Work</h2>
          <p>Your donation helps make these conferences possible, supporting programming and access for all participants.</p>
          <div className="btn-row">
            <a className="btn btn--primary" href={SITE.donateUrl} target="_blank" rel="noreferrer">Count Me In — Donate</a>
          </div>
        </div>
      </section>
    </>
  );
}
