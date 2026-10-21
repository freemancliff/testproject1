/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { SITE, REGISTRATION_OPEN } from "@/lib/site";
import { saturdayFellows, sundayFeatured, participants, type Speaker } from "@/lib/speakers";
import { sponsorshipLevels } from "@/lib/sponsors";
import { archives } from "@/lib/archives";
import RegisterButton from "@/components/RegisterButton";
import StickyBar from "@/components/StickyBar";
import MediaSlot from "@/components/MediaSlot";
import Image from "next/image";
import SponsorGrid from "@/components/SponsorGrid";
import CreditedPhoto from "@/components/CreditedPhoto";
import PhotoGallery from "@/components/PhotoGallery";
import VideoGrid from "@/components/VideoGrid";
import { videosFor, PLAYLISTS } from "@/lib/videos";
import { CREDIT, ejiAbout, ejiDay, ejiHero, friday, saturday, sunday } from "@/lib/eji-photos";

export const metadata: Metadata = {
  title: "2026 Montgomery: Remaking America: The Work Before Us",
};

const AgendaButton = () => (
  <div className="center-row">
    <a className="btn btn--primary" href={SITE.agendaUrl} target="_blank" rel="noreferrer">View Conference Agenda</a>
  </div>
);

function Person({ name, lines, photo, initials, gradient, role }: { name: string; lines?: string[]; photo?: string; initials?: string; gradient?: string; role?: string }) {
  return (
    <div className="person">
      <div
        className="avatar"
        role="img"
        aria-label={name}
        style={photo ? { backgroundImage: `url(${photo})`, fontSize: 0 } : gradient ? { background: gradient } : undefined}
      >
        {!photo && initials}
      </div>
      <div className="person-name">{name}</div>
      <div className="person-role">
        {role}
        {lines?.map((line, i) => <span key={i}>{i > 0 && <br />}{line}</span>)}
      </div>
    </div>
  );
}

const fromSpeaker = (s: Speaker) => <Person key={s.name} name={s.name} lines={s.title} photo={s.photo} />;

export default function ConferencePage() {
  return (
    <div id="page-conference">
      <section className="hero">
        <div className="hero-bg">
          <Image src={ejiHero.src} alt="" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center 60%" }} />
        </div>
        <div className="hero-overlay" />
        <div className="container hero-inner" style={{ gridTemplateColumns: "1fr" }}>
          <div>
            <Link className="back-link" href="/">← All Conferences</Link>
            <div className="eyebrow">{SITE.edition}</div>
            <h1>Remaking America: <em>The Work Before Us</em></h1>
            <div className="hero-meta">
              <strong>{SITE.dates}</strong> &nbsp;·&nbsp; {SITE.location}<br />
              {SITE.venue}
            </div>
            <div className="hero-note">Conference Starts at 3pm on Oct. 2nd</div>
            {!REGISTRATION_OPEN && <div className="closed-note">Registration Is Now Closed</div>}
            <div className="btn-row">
              <RegisterButton />
              <a className="btn btn--ghost" href={SITE.donateUrl} target="_blank" rel="noreferrer">Support the Conference</a>
            </div>
          </div>
        </div>
        {CREDIT && <div className="hero-credit">{CREDIT}</div>}
      </section>

      <section className="section section--black" id="about">
        <div className="container split split--wide-text">
          <div>
            <div className="eyebrow">About the Conference</div>
            <h2>From Reflection to Strategy to Action</h2>
            <div className="prose">
              <p>As the nation commemorates its 250th anniversary, the conference confronts a fundamental question: is a multiracial, caste-free America truly possible? Grounded in the enduring legacy of Bob Moses — who recognized that literacy is a prerequisite for economic and political participation — this gathering calls upon our generation to confront the truth of history as a necessary step toward transformative change.</p>
              <p>During the conference, we also celebrate the 45th anniversary of the <strong>John D. and Catherine T. MacArthur Foundation&apos;s Fellows Program</strong> (Moses was one of its first Fellows). MacArthur boldly invests in creative solutions to urgent challenges, sparking hope for our future. We, too, like the MacArthur Foundation, will be &quot;Defying Boundaries&quot; as we urgently step toward transformative change in our country&apos;s most urgent and neglected social issues.</p>
              <p>The conference in Montgomery, a three-day experience, moves participants through a deliberate arc of education, connection, and activation — from a documentary screening to museum immersion to workshops and organizing commitments. In-person only. No live streaming.</p>
            </div>
          </div>
          <CreditedPhoto photo={ejiAbout} aspect="4/3" sizes="(max-width: 860px) 100vw, 520px" position="center 40%" />
        </div>
      </section>

      <div className="mac-band">
        <div className="container">
          <div className="mac-logos">
            <img src="/images/macarthur-supported-by.webp" alt="Supported by MacArthur Foundation" />
            <img src="/images/macarthur-fellows-45.webp" alt="Defying Boundaries: MacArthur Fellows at 45" />
          </div>
          <div>
            <h2 className="mac-tagline">Defying Boundaries: MacArthur Fellows at 45</h2>
            <p>
              This moment calls for creative courage. For 45 years, MacArthur Fellows have expanded the boundaries of possibility by questioning conventions, crossing disciplines, and driving collective progress. Throughout 2026, the Foundation is celebrating the groundbreaking work of the Fellows and inspiring public dialogue through a series of nationwide events and conversations. Learn more at{" "}
              <a href="https://www.macfound.org/fellows-45" target="_blank" rel="noreferrer">macfound.org/fellows-45</a>
            </p>
          </div>
        </div>
      </div>

      <section className="section section--dark" id="experience">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow">Three Days</div>
            <h2>The Experience</h2>
          </div>
          <div className="card-grid">
            <article className="card">
              <CreditedPhoto photo={ejiDay.friday} className="card-media" sizes="(max-width: 700px) 100vw, 400px" />
              <div className="card-kicker">Friday, October 2</div>
              <h3>Welcome &amp; Awakening</h3>
              <ul>
                <li>Welcome orientation and reception</li>
                <li><strong>Screening: <em style={{ display: "inline", fontSize: "inherit", color: "inherit" }}>The Alabama Solution</em></strong><em>2026 Oscar nominated documentary about Alabama prisons.</em></li>
                <li><strong>Fireside chat and Q&amp;A</strong><em>With relatives of the formally incarcerated documentarians.</em></li>
              </ul>
            </article>
            <article className="card">
              <CreditedPhoto photo={ejiDay.saturday} className="card-media" sizes="(max-width: 700px) 100vw, 400px" position="center 30%" />
              <div className="card-kicker">Saturday, October 3</div>
              <h3>Immersion &amp; Reflection</h3>
              <ul>
                <li>Private group access: Equal Justice Initiative (EJI) Legacy Museum</li>
                <li>Freedom Monument Sculpture Park</li>
                <li>National Memorial for Peace and Justice</li>
                <li>Reflection and processing space</li>
                <li><strong style={{ color: "var(--gold)" }}>MacArthur Fellows Conversation &amp; Celebration</strong></li>
              </ul>
            </article>
            <article className="card">
              <CreditedPhoto photo={ejiDay.sunday} className="card-media" sizes="(max-width: 700px) 100vw, 400px" />
              <div className="card-kicker">Sunday, October 4</div>
              <h3>Learning, Strategy &amp; Action</h3>
              <ul>
                <li><strong>Plenary:</strong> Darity, Mullen, McKay — Reparations, Juvenile Injustice &amp; American Massacres</li>
                <li><strong>Keynote:</strong> Dr. Terrence Johnson — &quot;Faith Communities Must Testify in the Age of Mass Incarceration&quot;</li>
                <li>Workshop: Strategizing Divestment from the Carceral Economy</li>
                <li>Workshop: Raising a Moral Voice Against Mass Incarceration</li>
                <li>Workshop: Salvaging the Black Vote</li>
                <li>Workshop: Building Networks to Tell Our Story</li>
                <li><a className="text-link" href="#sessions">Watch the recordings →</a></li>
              </ul>
            </article>
          </div>
          <AgendaButton />
        </div>
      </section>

      {videosFor("2026-montgomery").length > 0 && (
        <section className="section section--dark" id="sessions" aria-labelledby="sessions-title">
          <div className="container">
            <div className="section-head section-head--center">
              <div className="eyebrow">Watch</div>
              <h2 id="sessions-title">Sessions from Montgomery</h2>
              <p className="lead">Recordings of the 5th Annual Bob Moses Legacy Conference: plenaries, the keynote, and reflections from the weekend.</p>
            </div>
            <VideoGrid items={videosFor("2026-montgomery")} layout="grid" />
            {PLAYLISTS["2026-montgomery"] && (
              <div className="center-row">
                <a className="btn btn--ghost" href={PLAYLISTS["2026-montgomery"]} target="_blank" rel="noreferrer">Open the Playlist on YouTube</a>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="section section--black" id="photos" aria-labelledby="photos-title">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="eyebrow">Montgomery 2026</div>
            <h2 id="photos-title">The Weekend in Photos</h2>
            <p className="lead">Three days of learning, reflection, and organizing. Click any photo to enlarge.</p>
          </div>
          <PhotoGallery
            sections={[
              { title: "Friday, October 2", photos: friday },
              { title: "Saturday, October 3", photos: saturday },
              { title: "Sunday, October 4", photos: sunday },
            ]}
          />
          <div className="recap-video">
            <MediaSlot base="eji/recap-video" kind="video" label="Montgomery 2026 recap or highlights video" aspect="16/9" optional />
          </div>
        </div>
      </section>

      <section className="section section--cream" id="speakers">
        <div className="container">
          <div className="sub-head">
            <div className="eyebrow">Saturday Evening</div>
            <h3>MacArthur Fellows in Conversation</h3>
            <p>Celebrating 45 Years of the MacArthur Fellows Program</p>
          </div>
          <div className="people-grid people-grid--lg">
            {saturdayFellows.map(fromSpeaker)}
            <div className="person">
              <div className="avatar avatar--tba" style={{ background: "linear-gradient(135deg,#2C2C2C 0%,#4a3d5c 100%)" }}>TBA</div>
              <div className="person-name" style={{ fontStyle: "italic", color: "#777" }}>Speaker TBA</div>
              <div className="person-role">MacArthur Fellow<br />To be announced</div>
            </div>
          </div>

          <div className="sub-head">
            <div className="eyebrow">Sunday Program</div>
            <h3>Featured Speakers</h3>
            <p>Plenary &amp; Keynote</p>
          </div>
          <div className="people-grid people-grid--lg">{sundayFeatured.map(fromSpeaker)}</div>

          <div className="sub-head">
            <div className="eyebrow">Workshops &amp; Panels</div>
            <h3>Participants &amp; Workshop Leaders</h3>
            <p>Conference contributors, session facilitators, and musical guests</p>
          </div>
          <div className="people-grid">
            {participants.map((p) => (
              <Person key={p.name} name={p.name} role={p.role} photo={p.photo} initials={p.initials} gradient={p.gradient} />
            ))}
          </div>
          <p className="muted" style={{ marginTop: 28, fontStyle: "italic" }}>Additional speakers and workshop leaders to be announced.</p>
          <AgendaButton />
        </div>
      </section>

      <section className="section section--black" id="travel">
        <div className="container split">
          <div>
            <div className="eyebrow">Getting There</div>
            <h2>Travel &amp; Lodging</h2>
            <h3 style={{ marginBottom: 10 }}>Elevation Hotel</h3>
            <div className="prose">
              <p>The conference hotel in Montgomery. A room block is reserved for attendees — use this link{" "}
                <strong><a href={SITE.hotelUrl} target="_blank" rel="noreferrer" style={{ color: "var(--gold)", textDecoration: "underline" }}>261002BMLC</a></strong> when booking.</p>
            </div>
          </div>
          <MediaSlot base="eji/hotel" label="Elevation Hotel or Montgomery skyline" aspect="3/2" />
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <h2>Join Us in Montgomery</h2>
          <p>
            {!REGISTRATION_OPEN && <><strong style={{ color: "#ff8f86" }}>Registration is now closed.</strong>{" "}</>}
            This conference is free to attend. <strong>Your donation helps make it possible</strong> — supporting travel, programming, and access for all participants.
          </p>
          <div className="btn-row">
            <RegisterButton />
            <a className="btn btn--ghost" href={SITE.donateUrl} target="_blank" rel="noreferrer">Count Me In — Donate</a>
          </div>
        </div>
      </section>

      <section className="section section--cream" id="sponsors">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Our Partners</div>
            <h2>Sponsors</h2>
            <p className="lead">The Bob Moses Legacy Conference is made possible by the generous support of our sponsors and the MacArthur Foundation.</p>
          </div>
          <SponsorGrid />
          <div className="sub-head">
            <h3>Sponsorship Levels</h3>
          </div>
          <div className="levels">
            {sponsorshipLevels.map((lv) => (
              <div key={lv.name}><span>{lv.name}</span><span>{lv.amount}</span></div>
            ))}
          </div>
          <p className="contact-line">
            If you have any questions about sponsorship, please contact <strong>Michal Rubin</strong>, Vice President of Philanthropic Partnerships — <a href="mailto:mrubin@cambridgecf.org">mrubin@cambridgecf.org</a> · <a href="tel:6178654862">617-865-4862</a>
          </p>
        </div>
      </section>

      <section className="section section--black">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Archive</div>
            <h2>Past Conferences</h2>
          </div>
          <div className="card-grid">
            {archives.map((a) => (
              <Link key={a.year} className="card card--link year-card" href={`/archive/${a.year}`}>
                <div className="year">{a.year}</div>
                <h3>{a.title.replace("Education and Mass", "Education & Mass")}</h3>
                <span className="go">View Archive →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StickyBar />
    </div>
  );
}
