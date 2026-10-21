/* eslint-disable @next/next/no-img-element */
import { SITE } from "@/lib/site";
import { sponsors } from "@/lib/sponsors";

export default function SponsorGrid({ showBecome = true }: { showBecome?: boolean }) {
  return (
    <div className="logo-grid">
      {sponsors.map((sp, i) =>
        sp.kind === "logo" ? (
          <a key={sp.name} className="logo-tile" href={sp.href} target="_blank" rel="noreferrer">
            <img src={sp.src} alt={sp.name} style={sp.imgStyle} />
            <div className="logo-name">{sp.name}</div>
          </a>
        ) : (
          <div key={i} className="logo-tile">
            {sp.serif ? (
              <div>
                <div className="tile-serif">{sp.lines[0]}</div>
                <div className="tile-sub">{sp.sub}</div>
              </div>
            ) : (
              <div className="tile-text">
                {sp.lines.map((l, j) => <span key={j}>{j > 0 && <br />}{l}</span>)}
              </div>
            )}
          </div>
        )
      )}
      {showBecome && (
        <a className="become-sponsor" href={SITE.donateUrl} target="_blank" rel="noreferrer">+ Become a Sponsor</a>
      )}
    </div>
  );
}
