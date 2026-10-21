import { SITE } from "@/lib/site";
import type { Video } from "@/lib/videos";
import MediaSlot from "./MediaSlot";
import YouTubeEmbed from "./YouTubeEmbed";

function Player({ v, big }: { v: Video; big?: boolean }) {
  return (
    <div className={`video-card ${big ? "video-card--big" : ""}`} id={`video-${v.id}`}>
      <div className="media" style={{ aspectRatio: "16/9" }}>
        <YouTubeEmbed id={v.id} title={v.title} />
      </div>
      <div className="video-meta">
        {v.speaker && <div className="video-year">{v.speaker}{v.minutes ? ` · ${v.minutes} min` : ""}</div>}
        <h3>{v.title}</h3>
      </div>
    </div>
  );
}

/**
 * layout "side": first video large, the rest stacked beside it (best for 2-3 more).
 * layout "grid": first video large, the rest in a grid below it.
 */
export default function VideoGrid({ items, layout = "side" }: { items: Video[]; layout?: "side" | "grid" }) {
  if (items.length === 0) {
    return (
      <div className="watch-layout">
        <MediaSlot base="home/featured-talk" kind="video" label="Featured talk (or add YouTube ids in lib/videos.ts)" aspect="16/9" className="watch-feature" />
        <div className="watch-side">
          <MediaSlot base="home/talk-2" kind="video" label="Talk 2" aspect="16/9" />
          <MediaSlot base="home/talk-3" kind="video" label="Talk 3" aspect="16/9" />
        </div>
      </div>
    );
  }
  const [first, ...rest] = items;
  if (layout === "grid") {
    return (
      <div className="watch-stack">
        <div className="watch-feature watch-feature--solo"><Player v={first} big /></div>
        {rest.length > 0 && <div className="video-grid">{rest.map((v) => <Player key={v.id} v={v} />)}</div>}
      </div>
    );
  }
  return (
    <div className="watch-layout">
      <div className="watch-feature"><Player v={first} big /></div>
      {rest.length > 0 && <div className="watch-side">{rest.map((v) => <Player key={v.id} v={v} />)}</div>}
    </div>
  );
}
