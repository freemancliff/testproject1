import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { archives } from "@/lib/archives";
import { mit2026 } from "@/lib/mit2026";
import VideoGrid from "@/components/VideoGrid";
import { homeVideos } from "@/lib/videos";
import MediaSlot from "@/components/MediaSlot";
import Quotes from "@/components/Quotes";
import BrandTitle from "@/components/BrandTitle";
import MitRegisterButton from "@/components/MitRegisterButton";
import SponsorGrid from "@/components/SponsorGrid";
import PhotoGallery from "@/components/PhotoGallery";
import CreditedPhoto from "@/components/CreditedPhoto";
import Photo from "@/components/Photo";
import { findMedia } from "@/lib/media";
import { CREDIT, ejiHero, ejiDay, homeGallery } from "@/lib/eji-photos";
import { mitGreatDome } from "@/lib/online-photos";

export const metadata = pageMeta({
  title: "Bob Moses Legacy Conference",
  absoluteTitle: true,
  path: "/",
  description:
    "The Bob Moses Legacy Conference: 2026 Part I in Montgomery, Part II at MIT on November 21, plus talks, photos and archives from every past conference.",
});

export default function HomePage() {
  const heroIsDropped = !!findMedia("home/hero", "any");
  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <MediaSlot
            base="home/hero"
            kind="any"
            mode="background"
            fill
            priority
            label="Hero background: video loop or wide photo"
            sizes="100vw"
            fallback={ejiHero}
            position="center 60%"
          />
        </div>
        <div className="hero-overlay" />
        <div className="container hero-inner hero-inner--home">
          <div>
            <div className="eyebrow">Since 2022</div>
            <h1 className="hero-h1--wide">
              The Bob Moses <em>Legacy Conference</em>
            </h1>
            <p className="lead">
              Grounded in the enduring legacy of Bob Moses, who recognized that
              literacy is a prerequisite for economic and political
              participation, the conference calls on each generation to confront
              the truth of history as a necessary step toward transformative
              change.
            </p>
            <div className="btn-row">
              <MitRegisterButton />
              <a
                className="btn btn--ghost"
                href={SITE.donateUrl}
                target="_blank"
                rel="noreferrer"
              >
                Support the Conference
              </a>
            </div>
          </div>
          <aside className="next-card" aria-label="Next conference">
            <span className="badge">Part II</span>
            <h2>
              <BrandTitle split />
            </h2>
            <p className="card-sub">
              Continuing at MIT, still in celebration of the 45th anniversary of
              the MacArthur Fellows Program.
            </p>
            <dl>
              <div>
                <dt>Date</dt>
                <dd>{mit2026.dateLine}</dd>
              </div>
              <div>
                <dt>Time</dt>
                <dd>{mit2026.hours}</dd>
              </div>
              <div>
                <dt>Place</dt>
                <dd>{mit2026.place}</dd>
              </div>
              <div>
                <dt>Admission</dt>
                <dd>
                  <strong>{mit2026.admission}</strong>
                </dd>
              </div>
            </dl>
            <div className="btn-row" style={{ flexDirection: "column" }}>
              <MitRegisterButton />
              <Link className="btn btn--ghost" href="/2026mit">
                View Details
              </Link>
            </div>
          </aside>
        </div>
        {!heroIsDropped && CREDIT && (
          <div className="hero-credit">{CREDIT}</div>
        )}
      </section>

      <section
        className="section section--black"
        id="parts"
        aria-labelledby="parts-title"
      >
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow">2026</div>
            <h2 id="parts-title">The Conference in Two Parts</h2>
            <p className="lead">
              The 2026 Bob Moses Legacy Conference unfolds in two parts: Part I
              in Montgomery, Alabama, and Part II at MIT in Cambridge.
            </p>
          </div>
          <div className="parts-grid">
            <article className="part-card">
              <CreditedPhoto
                photo={ejiDay.sunday}
                aspect="16/9"
                sizes="(max-width: 860px) 100vw, 560px"
              />
              <div className="part-body">
                <span
                  className="badge badge--past"
                  style={{ alignSelf: "flex-start" }}
                >
                  Part I · Complete
                </span>
                <h3>
                  <BrandTitle />
                </h3>
                <p className="part-meta">
                  <span className="part-line">October 2–4, 2026 · Montgomery, Alabama</span>
                  <span className="part-line">Equal Justice Initiative Legacy Sites</span>
                </p>
                <div className="btn-row">
                  <Link className="btn btn--primary" href="/2026eji#sessions">
                    Watch the Sessions
                  </Link>
                  <Link className="btn btn--ghost" href="/2026eji">
                    See Part I
                  </Link>
                </div>
              </div>
            </article>
            <article className="part-card part-card--next">
              <Photo
                photo={mitGreatDome}
                aspect="16/9"
                sizes="(max-width: 860px) 100vw, 560px"
                position="center 30%"
              />
              <div className="part-body">
                <span className="badge" style={{ alignSelf: "flex-start" }}>
                  Part II · Next
                </span>
                <h3>
                  <BrandTitle />
                </h3>
                <p className="part-meta">
                  <span className="part-line">Part II at MIT · {mit2026.dateLine} · {mit2026.hours}</span>
                  <span className="part-line">{mit2026.venue}, MIT · {mit2026.city}</span>
                  <span className="part-line">{mit2026.tagline}</span>
                  <span className="part-line"><strong>{mit2026.admission}</strong></span>
                </p>
                <div className="btn-row">
                  <MitRegisterButton />
                  <Link className="btn btn--ghost" href="/2026mit">
                    See the Program
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--dark" id="featured">
        <div className="container split">
          <MediaSlot
            base="home/mit-2026"
            label="Photo for the MIT 2026 conference (MIT, Wong Auditorium, or past attendees)"
            aspect="4/3"
            sizes="(max-width: 860px) 100vw, 560px"
            fallback={{
              src: "/media/archive/2023/01-preview.jpg",
              alt: "Young people standing on stage at the 2023 Bob Moses Conference at the MIT Media Lab as the audience looks on",
            }}
            position="center"
          />
          <div>
            <div className="eyebrow">Part II · November 21, 2026</div>
            <h2>Bob Moses Legacy Conference at MIT</h2>
            <p className="lead">
              Part II celebrates the 45th anniversary of the MacArthur Fellows
              Program, with a full day of conversation and strategy in
              Cambridge.
            </p>
            <ul className="check-list">
              <li>
                <strong>Keynote</strong> from Prof. Brandon Terry
              </li>
              <li>
                Screening of{" "}
                <strong>
                  <em>The Alabama Solution</em>
                </strong>
              </li>
              <li>
                <strong>Fireside chat</strong> with Clara Brooks and Julie
                Godwin, family members of the incarcerated documentarians
              </li>
              <li>
                <strong>MacArthur Conversation</strong> with Desmond Meade and
                Reuben Jonathan Miller, moderated by Rev. Rahsaan Hall
              </li>
              <li>
                <strong>Five breakout groups</strong> to learn, listen, and
                strategize
              </li>
              <li>Food, music, art, and camaraderie</li>
            </ul>
            <div className="btn-row">
              <MitRegisterButton />
              <Link className="btn btn--ghost" href="/2026mit">
                See the Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--black" id="watch">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Watch</div>
            <h2>Talks from the Conferences</h2>
            <p className="lead">
              Recordings from past conferences are being added to the Bob Moses
              Legacy YouTube channel. Subscribe to be notified as new talks are
              posted.
            </p>
            <div className="btn-row" style={{ marginTop: 24 }}>
              <a
                className="btn btn--primary"
                href={SITE.channelUrl}
                target="_blank"
                rel="noreferrer"
              >
                Subscribe on YouTube
              </a>
              <Link className="btn btn--ghost" href="/2026eji#sessions">
                All 2026 Montgomery Sessions
              </Link>
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
              <CreditedPhoto
                photo={ejiDay.sunday}
                className="year-thumb"
                sizes="(max-width: 600px) 100vw, 320px"
              />
              <div className="year">2026</div>
              <div className="meta">Part I · October 2–4 · Montgomery, AL</div>
              <h3>Remaking America: The Work Before Us</h3>
              <span className="go">View Conference →</span>
            </Link>
            {archives.map((a) => (
              <Link
                key={a.year}
                className="card card--link year-card"
                href={`/archive/${a.year}`}
              >
                {findMedia(`archive/${a.year}/hero`, "image") && (
                  <Photo
                    photo={{
                      src: `/media/archive/${a.year}/hero.jpg`,
                      alt: `${a.year} conference`,
                    }}
                    className="year-thumb"
                    sizes="(max-width: 600px) 100vw, 320px"
                  />
                )}
                <div className="year">{a.year}</div>
                <div className="meta">
                  {a.meta.split(" · ").slice(0, 2).join(" · ")}
                </div>
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
          <p>
            Your donation helps make these conferences possible, supporting
            programming and access for all participants.
          </p>
          <div className="btn-row">
            <a
              className="btn btn--primary"
              href={SITE.donateUrl}
              target="_blank"
              rel="noreferrer"
            >
              Count Me In — Donate
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
