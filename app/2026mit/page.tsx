import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { mit2026, program, breakouts, highlights, featuredPeople } from "@/lib/mit2026";
import { ejiDay } from "@/lib/eji-photos";
import MediaSlot from "@/components/MediaSlot";
import Avatar from "@/components/Avatar";
import MitRegisterButton from "@/components/MitRegisterButton";
import SponsorGrid from "@/components/SponsorGrid";
import MacArthurBand from "@/components/MacArthurBand";
import CreditedPhoto from "@/components/CreditedPhoto";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { videos } from "@/lib/videos";
import PhotoGallery from "@/components/PhotoGallery";
import { findMedia } from "@/lib/media";
import { archivePhotos } from "@/lib/archive-photos";
import { mitAerial, mitKillianCourt, mitGreatDome } from "@/lib/online-photos";

export const metadata: Metadata = {
  title: "Remaking America: The Work Before Us, Part II at MIT (Nov 21, 2026)",
  description:
    "Part II of the 2026 Bob Moses Legacy Conference, Remaking America: The Work Before Us, celebrates the 45th anniversary of the MacArthur Fellows Program. Saturday, November 21, 2026, Wong Auditorium, Jack C. Tang Center, MIT, Cambridge, Massachusetts.",
};

export default function Mit2026Page() {
  const heroIsDropped = !!findMedia("mit/hero", "any");
  const promoDropped = !!findMedia("mit/promo-video", "video");
  // Promo video: "Jim Crow: The Zipper That Kept the Country Together" (Part I). A file at public/media/mit/promo-video.* replaces it.
  const promo = videos.find((v) => v.id === "Dzzggsx94bg")!;
  const gallery2023 = ["03", "08", "04", "05"].map(
    (n) => archivePhotos["2023"].find((p) => p.src.endsWith(`/${n}.jpg`))!,
  );
  return (
    <>
      <section className="hero hero--sub">
        <div className="hero-bg">
          <MediaSlot
            base="mit/hero"
            kind="any"
            mode="background"
            fill
            priority
            label="MIT hero: Wong Auditorium, campus, or a video loop"
            sizes="100vw"
            fallback={mitKillianCourt}
            position="center 62%"
          />
        </div>
        <div className="hero-overlay" />
        {!heroIsDropped && (
          <div className="hero-credit">{mitKillianCourt.credit}</div>
        )}
        <div className="container hero-inner">
          <div>
            <Link className="back-link" href="/">
              ← All Conferences
            </Link>
            <div className="eyebrow">
              Bob Moses Legacy Conference 2026 · {mit2026.partLabel}
            </div>
            <h1>
              Remaking America: <em>The Work Before Us</em>
            </h1>
            <p className="lead" style={{ marginBottom: 12 }}>
              <strong>Part II at MIT · November 21, 2026</strong>
            </p>
            <p className="lead" style={{ marginBottom: 28 }}>
              {mit2026.tagline}
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
        </div>
      </section>

      <div className="infobar">
        <div className="container">
          <div className="infobar-grid">
            <div className="infobar-item">
              <span>Date</span>
              <strong>{mit2026.dateLine}</strong>
            </div>
            <div className="infobar-item">
              <span>Time</span>
              <strong>{mit2026.hours}</strong>
            </div>
            <div className="infobar-item">
              <span>Place</span>
              <strong>
                {mit2026.venue}, {mit2026.building}
                <br />
                {mit2026.address}
              </strong>
            </div>
          </div>
        </div>
      </div>

      <section
        className="section section--black"
        id="about"
        style={{ paddingBottom: "clamp(40px, 6vw, 72px)" }}
      >
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow">About {mit2026.partLabel}</div>
            <h2>A Day to Learn, Listen, and Strategize</h2>
            <p className="lead">
              {mit2026.partLabel} of the 2026 Bob Moses Legacy Conference
              celebrates the 45th anniversary of the MacArthur Fellows Program.
              One day at MIT brings together a keynote, a documentary screening,
              a fireside chat, a conversation between two MacArthur Fellows, and
              working sessions on the carceral state, with food, music, art, and
              camaraderie.
            </p>
          </div>
          <ul className="vibe">
            <li>Food</li>
            <li>Music</li>
            <li>Art</li>
            <li>Camaraderie</li>
          </ul>
        </div>
      </section>

      <MacArthurBand />

      <section className="section section--black" id="day">
        <div className="container">
          <div className="card-grid card-grid--four">
            {highlights.map((h) => (
              <article
                className={`card ${"accent" in h ? "card--macarthur" : ""}`.trim()}
                key={h.title}
              >
                <div className="card-kicker">{h.kicker}</div>
                <h3>{h.title}</h3>
                <p className="card-text">{h.text}</p>
              </article>
            ))}
          </div>

          <div className="breakout-block" id="breakouts">
            <div className="breakout-head">
              <div className="eyebrow">Then · 3:00 – 4:00 pm</div>
              <h3>Breakout Groups</h3>
              <p className="lead">
                After the MacArthur Conversation, break out to learn, listen, and
                strategize in five working sessions.
              </p>
            </div>
            <div className="card-grid card-grid--five">
              {breakouts.map((title, i) => (
                <article className="card" key={title}>
                  <div className="card-kicker">Session {i + 1}</div>
                  <h3>{title}</h3>
                </article>
              ))}
            </div>
          </div>
          <div className="center-row">
            <MitRegisterButton />
          </div>
        </div>
      </section>

      <section className="section section--black" id="program">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow">{mit2026.dateLine}</div>
            <h2>The Program</h2>
          </div>
          <ol className="timeline">
            {program.map((p, i) => (
              <li
                key={i}
                className={
                  p.kind === "break"
                    ? "is-break"
                    : p.kind === "macarthur"
                      ? "is-macarthur"
                      : p.kind === "feature"
                        ? "is-feature"
                        : undefined
                }
              >
                <div className="time">{p.time || "·"}</div>
                <div className="what">
                  <strong>{p.title}</strong>
                  {p.detail}
                  {p.note && <span className="what-note">{p.note}</span>}
                </div>
              </li>
            ))}
          </ol>
          <div className="center-row">
            <MitRegisterButton />
          </div>
        </div>
      </section>

      <section
        className="section section--dark"
        aria-label="Conference video and venue"
      >
        <div className="container">
          <div className="split">
            {promoDropped ? (
              <MediaSlot
                base="mit/promo-video"
                kind="video"
                label="Promo or invitation video for Part II"
                aspect="16/9"
              />
            ) : (
              <div className="video-card video-card--big">
                <div className="media" style={{ aspectRatio: "16/9" }}>
                  <YouTubeEmbed id={promo.id} title={promo.title} />
                </div>
                <div className="video-meta">
                  <div className="video-year">From Part I · Montgomery</div>
                  <h3>{promo.title}</h3>
                </div>
              </div>
            )}
            <MediaSlot
              base="mit/venue"
              label="Venue photo: Wong Auditorium, Tang Center"
              aspect="16/9"
              fallback={mitAerial}
              position="center 40%"
            />
          </div>
          <div className="center-row">
            <MitRegisterButton />
          </div>
        </div>
      </section>

      <section className="section section--cream" id="people">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow">Who You&apos;ll Hear From</div>
            <h2>Speakers and Facilitators</h2>
          </div>
          <div className="people-grid people-grid--lg">
            {featuredPeople.map((p) => (
              <div className="person" key={p.slug}>
                <Avatar name={p.name} slug={p.slug} photo={p.photo} />
                <div className="person-name">{p.name}</div>
                {p.title && <div className="person-role">{p.title}</div>}
              </div>
            ))}
          </div>
          <p
            className="muted"
            style={{ textAlign: "center", marginTop: 32, fontStyle: "italic" }}
          >
            Additional speakers and details to be announced.
          </p>
          <div className="center-row">
            <MitRegisterButton />
          </div>
        </div>
      </section>

      <section
        className="section section--dark"
        aria-label="Past conference at MIT"
      >
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow">Back at MIT</div>
            <h2>From Our 2023 Conference at the MIT Media Lab</h2>
          </div>
          <PhotoGallery variant="mosaic" sections={[{ photos: gallery2023 }]} />
          <div className="center-row">
            <MitRegisterButton />
          </div>
        </div>
      </section>

      <section className="section cta-band" id="register">
        <div className="container">
          <h2>Register for Part II</h2>
          <p>
            Join us Saturday, November 21 at MIT. Your donation helps make this
            conference possible, supporting programming and access for all
            participants.
          </p>
          <div className="btn-row">
            <MitRegisterButton />
            <a
              className="btn btn--ghost"
              href={SITE.donateUrl}
              target="_blank"
              rel="noreferrer"
            >
              Count Me In — Donate
            </a>
          </div>
        </div>
      </section>

      <section className="section section--cream" id="sponsors">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Our Partners</div>
            <h2>Sponsors</h2>
            <p className="lead">
              The Bob Moses Legacy Conference is made possible by the generous
              support of our sponsors and the MacArthur Foundation.
            </p>
          </div>
          <SponsorGrid />
          <div className="center-row">
          </div>
          <p className="muted" style={{ marginTop: 32, fontSize: ".8rem" }}>
            Campus photos via Wikimedia Commons:{" "}
            {[mitKillianCourt, mitAerial, mitGreatDome].map((p, i) => (
              <span key={p.src}>
                {i > 0 && " · "}
                <a href={p.sourceUrl} target="_blank" rel="noreferrer">
                  {p.author}
                </a>{" "}
                (
                <a href={p.licenseUrl} target="_blank" rel="noreferrer">
                  {p.license}
                </a>
                )
              </span>
            ))}
          </p>
        </div>
      </section>

      <section
        className="section section--dark"
        id="part-one"
        aria-labelledby="part-one-title"
      >
        <div className="container">
          <div className="split">
            <div>
              <div className="eyebrow">Missed Part I?</div>
              <h2 id="part-one-title">Catch Up on Montgomery</h2>
              <p className="lead">
                Part I of the 2026 conference took place October 2–4 in
                Montgomery, Alabama. Relive it through photos and recordings of
                the sessions before we gather at MIT.
              </p>
              <div className="btn-row" style={{ marginTop: 24 }}>
                <Link className="btn btn--primary" href="/2026eji#sessions">
                  Watch the Sessions
                </Link>
                <Link className="btn btn--ghost" href="/2026eji#photos">
                  See the Photos
                </Link>
              </div>
            </div>
            <div className="trio">
              <CreditedPhoto
                photo={ejiDay.friday}
                aspect="1/1"
                sizes="(max-width: 860px) 33vw, 180px"
              />
              <CreditedPhoto
                photo={ejiDay.saturday}
                aspect="1/1"
                sizes="(max-width: 860px) 33vw, 180px"
                position="center 30%"
              />
              <CreditedPhoto
                photo={ejiDay.sunday}
                aspect="1/1"
                sizes="(max-width: 860px) 33vw, 180px"
              />
            </div>
          </div>
          <div className="center-row">
          </div>
        </div>
      </section>
    </>
  );
}
