/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { SITE, REGISTRATION_OPEN } from "@/lib/site";
import { saturdayFellows, sundayFeatured, participants, type Speaker } from "@/lib/speakers";
import { sponsors, sponsorshipLevels } from "@/lib/sponsors";
import { archives } from "@/lib/archives";
import RegisterButton from "@/components/RegisterButton";
import StickyBar from "@/components/StickyBar";

const AgendaButton = () => (
  <div style={{ textAlign: "center", marginTop: 40 }}>
    <a className="btn-primary" href={SITE.agendaUrl} target="_blank" rel="noreferrer">View Conference Agenda</a>
  </div>
);

function SpeakerCard({ s }: { s: Speaker }) {
  return (
    <div className="speaker-card">
      <div
        className="speaker-img"
        style={s.photo ? { backgroundImage: `url(${s.photo})`, backgroundSize: "cover", backgroundPosition: "center", fontSize: 0, color: "transparent" } : undefined}
        role="img"
        aria-label={s.name}
      />
      <div className="speaker-name">{s.name}</div>
      <div className="speaker-title">
        {s.title.map((line, i) => (
          <span key={i}>{i > 0 && <br />}{line}</span>
        ))}
      </div>
    </div>
  );
}


export const metadata: Metadata = {
  title: "2026 Montgomery: Remaking America: The Work Before Us",
};

export default function ConferencePage() {
  return (
    <div id="page-conference">
      <div style={{ background: "var(--off-black)", padding: "14px 48px" }}>
        <Link href="/" style={{ fontSize: 13, color: "var(--gold)", textDecoration: "none" }}>← All Conferences</Link>
      </div>
      <div className="conf-hero">
        <div className="hero-yt-wrap">
          <iframe
            className="hero-yt"
            title="Conference background video"
            src={`https://www.youtube.com/embed/${SITE.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${SITE.youtubeId}&controls=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
        <div className="hero-overlay" />
        <div className="conf-hero-content">
          <div className="conf-hero-eyebrow">{SITE.edition}</div>
          <h1>Remaking America:<br /><em>The Work Before Us</em></h1>
          <div className="conf-hero-meta">
            <strong>{SITE.dates}</strong> &nbsp;·&nbsp; {SITE.location}<br />
            {SITE.venue}
          </div>
          <div style={{ color: "var(--gold)", fontWeight: 700, fontSize: 18, marginBottom: 16 }}>Conference Starts at 3pm on Oct. 2nd</div>
          {!REGISTRATION_OPEN && <div className="registration-closed-note">Registration Is Now Closed</div>}
          <div className="conf-hero-actions">
            <RegisterButton />
            <a className="btn-secondary" href={SITE.donateUrl} target="_blank" rel="noreferrer">Support the Conference</a>
          </div>
        </div>
      </div>

      <div className="conf-section">
        <div className="section-eyebrow">About the Conference</div>
        <h2>From Reflection to Strategy to Action</h2>
        <p>As the nation commemorates its 250th anniversary, the conference confronts a fundamental question: is a multiracial, caste-free America truly possible? Grounded in the enduring legacy of Bob Moses — who recognized that literacy is a prerequisite for economic and political participation — this gathering calls upon our generation to confront the truth of history as a necessary step toward transformative change.</p>
        <p style={{ marginTop: 16 }}>During the conference, we also celebrate the 45th anniversary of the <strong style={{ color: "var(--gold)" }}> John D. and Catherine T. MacArthur Foundation&apos;s Fellows Program </strong> (Moses was one of its first Fellows). MacArthur boldly invests in creative solutions to urgent challenges, sparking hope for our future. We, too, like the MacArthur Foundation, will be &quot;Defying Boundaries&quot; as we urgently step toward transformative change in our country&apos;s most urgent and neglected social issues.</p>
        <p style={{ marginTop: 16 }}>The conference in Montgomery, a three-day experience, moves participants through a deliberate arc of education, connection, and activation — from a documentary screening to museum immersion to workshops and organizing commitments. In-person only. No live streaming.</p>
        <AgendaButton />
      </div>

      <div className="macarthur-badge">
        <div style={{ display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap", marginBottom: 20 }}>
          <img src="/images/macarthur-supported-by.webp" alt="Supported by MacArthur Foundation" style={{ height: 70, filter: "invert(1)", mixBlendMode: "screen" }} />
          <img src="/images/macarthur-fellows-45.webp" alt="Defying Boundaries: MacArthur Fellows at 45" style={{ height: 70, filter: "invert(1)", mixBlendMode: "screen" }} />
        </div>
        <div className="mac-tagline">Defying Boundaries: MacArthur Fellows at 45</div>
        <div className="mac-text" style={{ marginTop: 8 }}>
          This moment calls for creative courage. For 45 years, MacArthur Fellows have expanded the boundaries of possibility by questioning conventions, crossing disciplines, and driving collective progress. Throughout 2026, the Foundation is celebrating the groundbreaking work of the Fellows and inspiring public dialogue through a series of nationwide events and conversations. Learn more at{" "}
          <a href="https://www.macfound.org/fellows-45" target="_blank" rel="noreferrer" style={{ color: "var(--black)", fontWeight: 700, textDecoration: "underline" }}>macfound.org/fellows-45</a>
        </div>
      </div>

      <div className="conf-section">
        <div className="section-eyebrow">Three Days</div>
        <h2>The Experience</h2>
        <div className="schedule-cards">
          <div className="schedule-card">
            <div className="schedule-day">Friday, October 2</div>
            <h3>Welcome &amp; Awakening</h3>
            <ul>
              <li>Welcome orientation and reception</li>
              <li style={{ color: "var(--gold)" }}>Screening: <em>The Alabama Solution</em><br /><em style={{ fontWeight: "normal", color: "var(--gold)" }}>2026 Oscar nominated documentary about Alabama prisons.</em></li>
              <li style={{ color: "var(--gold)" }}>Fireside chat and Q&amp;A<br /><em style={{ fontWeight: "normal", color: "var(--gold)" }}>With relatives of the formally incarcerated documentarians.</em></li>
            </ul>
          </div>
          <div className="schedule-card photo">
            <div className="schedule-day" style={{ color: "var(--gold)" }}>Saturday, October 3</div>
            <h3 style={{ color: "var(--white)", fontSize: 24 }}>Immersion &amp; Reflection</h3>
            <ul>
              {["Private group access: Equal Justice Initiative (EJI) Legacy Museum", "Freedom Monument Sculpture Park", "National Memorial for Peace and Justice", "Reflection and processing space"].map((t) => (
                <li key={t} style={{ color: "var(--warm-gray)", borderColor: "rgba(255,255,255,0.15)" }}>{t}</li>
              ))}
              <li style={{ color: "var(--gold)", borderColor: "rgba(255,255,255,0.15)", fontWeight: 700 }}>MacArthur Fellows Conversation &amp; Celebration</li>
            </ul>
            <div style={{ display: "flex", gap: 16, alignItems: "center", marginTop: 16, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
              <img src="/images/macarthur-supported-by.webp" alt="Supported by MacArthur Foundation" style={{ height: 48, width: "auto", filter: "invert(1)", mixBlendMode: "screen" }} />
              <div style={{ fontSize: 10, color: "var(--warm-gray)", letterSpacing: "0.04em" }}>EQUAL JUSTICE INITIATIVE</div>
            </div>
          </div>
          <div className="schedule-card">
            <div className="schedule-day">Sunday, October 4</div>
            <h3>Learning, Strategy &amp; Action</h3>
            <ul>
              <li><strong>Plenary:</strong> Darity, Mullen, McKay — Reparations, Juvenile Injustice &amp; American Massacres</li>
              <li><strong>Keynote:</strong> Dr. Terrence Johnson — &quot;Faith Communities Must Testify in the Age of Mass Incarceration&quot;</li>
              <li>Workshop: Strategizing Divestment from the Carceral Economy</li>
              <li>Workshop: Raising a Moral Voice Against Mass Incarceration</li>
              <li>Workshop: Salvaging the Black Vote</li>
              <li>Workshop: Building Networks to Tell Our Story</li>
            </ul>
          </div>
        </div>
        <AgendaButton />
      </div>

      <div className="conf-section alt">
        <div className="tier-label">Saturday Evening</div>
        <h2>MacArthur Fellows in Conversation</h2>
        <div className="tier-sublabel">Celebrating 45 Years of the MacArthur Fellows Program</div>
        <div className="speakers-grid-3">
          {saturdayFellows.map((s) => <SpeakerCard key={s.name} s={s} />)}
          <div className="speaker-card">
            <div className="speaker-img" style={{ background: "linear-gradient(135deg,#2C2C2C 0%,#4a3d5c 100%)" }}>TBA</div>
            <div className="speaker-name" style={{ color: "#999", fontStyle: "italic" }}>Speaker TBA</div>
            <div className="speaker-title">MacArthur Fellow<br />To be announced</div>
          </div>
        </div>

        <div className="tier-label">Sunday Program</div>
        <h2>Featured Speakers</h2>
        <div className="tier-sublabel">Plenary &amp; Keynote</div>
        <div className="speakers-grid-3">
          {sundayFeatured.map((s) => <SpeakerCard key={s.name} s={s} />)}
        </div>

        <div className="tier-label">Workshops &amp; Panels</div>
        <h2>Participants &amp; Workshop Leaders</h2>
        <div className="tier-sublabel">Conference contributors, session facilitators, and musical guests</div>
        <div className="tier3-list">
          {participants.map((p) => (
            <div className="tier3-chip" key={p.name}>
              <div
                role="img"
                aria-label={p.name}
                style={{
                  ...(p.photo
                    ? { backgroundImage: `url(${p.photo})`, backgroundSize: "cover", backgroundPosition: "center" }
                    : { background: p.gradient, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--warm-gray)", fontSize: 22, fontFamily: "'Formula Bold',sans-serif" }),
                  width: 100, height: 100, borderRadius: "50%", margin: "0 auto 8px",
                }}
              >
                {!p.photo && p.initials}
              </div>
              {p.name}
              <span className="chip-role">{p.role}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#999", marginTop: 16, fontStyle: "italic" }}>Additional speakers and workshop leaders to be announced.</p>
        <AgendaButton />
      </div>

      <div className="conf-section">
        <div className="section-eyebrow">Getting There</div>
        <h2>Travel &amp; Lodging</h2>
        <div className="travel-grid">
          <div className="travel-item">
            <h3>Elevation Hotel</h3>
            <p>The conference hotel in Montgomery. A room block is reserved for attendees — use this link{" "}
              <strong><a href={SITE.hotelUrl} target="_blank" rel="noreferrer" style={{ color: "var(--gold)", textDecoration: "underline" }}>261002BMLC</a></strong> when booking.</p>
          </div>
        </div>
        <AgendaButton />
      </div>

      <div className="register-section">
        <h2>Join Us in Montgomery</h2>
        <p>
          {!REGISTRATION_OPEN && <><strong style={{ color: "#d4544a" }}>Registration is now closed.</strong>{" "}</>}
          This conference is free to attend. <strong>Your donation helps make it possible</strong> — supporting travel, programming, and access for all participants.
        </p>
        <div className="register-actions">
          <RegisterButton />
          <a className="btn-secondary" href={SITE.donateUrl} target="_blank" rel="noreferrer">Count Me In — Donate</a>
        </div>
      </div>

      <div className="conf-section alt">
        <div className="section-eyebrow">Our Partners</div>
        <h2>Sponsors</h2>
        <p>The Bob Moses Legacy Conference is made possible by the generous support of our sponsors and the MacArthur Foundation.</p>
        <div className="sponsor-logos">
          {sponsors.map((sp, i) =>
            sp.kind === "logo" ? (
              <a
                key={sp.name}
                className="sponsor-logo-box"
                href={sp.href}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "inherit", ...(sp.plain ? { border: "none", background: "transparent", padding: 0 } : { border: "1px solid #ddd", padding: "12px 20px" }) }}
              >
                <img src={sp.src} alt={sp.name} style={sp.imgStyle} />
                <div className="sponsor-name">{sp.name}</div>
              </a>
            ) : (
              <div key={i} className="sponsor-logo-box" style={{ border: "1px solid #ddd", padding: "16px 20px" }}>
                {sp.serif ? (
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "Georgia,serif", fontSize: 15, fontWeight: "bold", color: "#333", letterSpacing: "0.02em" }}>{sp.lines[0]}</div>
                    <div style={{ fontSize: 9, color: "#888", marginTop: 2, letterSpacing: "0.04em" }}>{sp.sub}</div>
                  </div>
                ) : (
                  <div style={{ textAlign: "center", fontWeight: 700, color: "var(--black)", fontSize: 14, lineHeight: 1.5 }}>
                    {sp.lines.map((l, j) => <span key={j}>{j > 0 && <br />}{l}</span>)}
                  </div>
                )}
              </div>
            )
          )}
          <a className="become-sponsor" href={SITE.donateUrl} target="_blank" rel="noreferrer">+ Become a Sponsor</a>
        </div>
        <div style={{ marginTop: 40, paddingTop: 32, borderTop: "1px solid rgba(0,0,0,0.12)" }}>
          <h3 style={{ fontFamily: "'Formula Bold',sans-serif", fontSize: 18, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--black)", marginBottom: 20 }}>Sponsorship Levels</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
            {sponsorshipLevels.map((lv, i) => (
              <div key={lv.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 8, maxWidth: 480, ...(i < sponsorshipLevels.length - 1 && { borderBottom: "1px solid rgba(0,0,0,0.08)" }) }}>
                <span style={{ fontFamily: "'Formula Bold',sans-serif", fontSize: 15, fontWeight: 700, color: "var(--black)" }}>{lv.name}</span>
                <span style={{ fontSize: 15, color: "var(--black)" }}>{lv.amount}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, maxWidth: 560 }}>
            If you have any questions about sponsorship, please contact <strong style={{ color: "var(--black)" }}>Michal Rubin</strong>, Vice President of Philanthropic Partnerships — <a href="mailto:mrubin@cambridgecf.org" style={{ color: "var(--black)", textDecoration: "underline" }}>mrubin@cambridgecf.org</a> · <a href="tel:6178654862" style={{ color: "var(--black)", textDecoration: "underline" }}>617-865-4862</a>
          </p>
        </div>
        <AgendaButton />
      </div>

      <div className="conf-section">
        <div className="section-eyebrow">Archive</div>
        <h2>Past Conferences</h2>
        <div className="past-grid">
          {archives.map((a) => (
            <Link key={a.year} className="past-card" href={`/archive/${a.year}`} style={{ textDecoration: "none" }}>
              <h4>{a.year}</h4>
              <p>{a.title.replace("Education and Mass", "Education & Mass")}</p>
              <div style={{ fontSize: 11, color: "var(--gold)", marginTop: 8 }}>View Archive →</div>
            </Link>
          ))}
        </div>
        <AgendaButton />
      </div>

      <StickyBar />
    </div>
  );
}
