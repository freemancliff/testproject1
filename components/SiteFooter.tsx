import Link from "next/link";
import { SITE } from "@/lib/site";
import { archives } from "@/lib/archives";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="brand-bar" aria-hidden="true" />
      <div className="container footer-grid">
        <div className="footer-about">
          <div className="brand-text">
            <strong>Bob Moses</strong>
            <span>Legacy Conference</span>
          </div>
          <p>Grounded in the legacy of Bob Moses, the conference calls on each generation to confront the truth of history as a step toward transformative change.</p>
        </div>
        <div>
          <h4>Conferences</h4>
          <ul>
            <li><Link href="/2026mit">2026 Part II · MIT, Cambridge</Link></li>
            <li><Link href="/2026eji">2026 Part I · Montgomery</Link></li>
            {archives.map((a) => <li key={a.year}><Link href={`/archive/${a.year}`}>{a.year}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4>Connect</h4>
          <ul>
            <li><a href={SITE.channelUrl} target="_blank" rel="noreferrer">YouTube channel</a></li>
            <li><a href={SITE.donateUrl} target="_blank" rel="noreferrer">Donate</a></li>
            <li><Link href="/#watch">Watch the talks</Link></li>
            <li><Link href="/bookstore">Bookstore</Link></li>
          </ul>
        </div>
      </div>
      <div className="container footer-base">© {new Date().getFullYear()} Bob Moses Legacy Conference</div>
    </footer>
  );
}
