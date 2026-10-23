import { SITE } from "@/lib/site";
import type { Video } from "@/lib/videos";
import MediaSlot from "./MediaSlot";
import YouTubeEmbed from "./YouTubeEmbed";
import BookLink from "./BookLink";

function Player({ v }: { v: Video }) {
  return (
    <div className="video-card" id={`video-${v.id}`}>
      <div className="media" style={{ aspectRatio: "16/9" }}>
        <YouTubeEmbed id={v.id} title={v.title} />
      </div>
      <div className="video-meta">
        {v.speaker && <div className="video-year">{v.speaker}{v.minutes ? ` · ${v.minutes} min` : ""}<BookLink name={v.speaker} variant="icon" /></div>}
        <h3>{v.title}</h3>
      </div>
    </div>
  );
}

/** A stream of videos, all the same size (no featured or larger video). */
export default function VideoGrid({ items }: { items: Video[] }) {
  if (items.length === 0) {
    return (
      <div className="video-grid">
        <MediaSlot base="home/featured-talk" kind="video" label="Talk 1 (or add YouTube ids in lib/videos.ts)" aspect="16/9" />
        <MediaSlot base="home/talk-2" kind="video" label="Talk 2" aspect="16/9" />
        <MediaSlot base="home/talk-3" kind="video" label="Talk 3" aspect="16/9" />
        <p className="muted" style={{ gridColumn: "1 / -1" }}>
          More recordings are being added to the{" "}
          <a href={SITE.channelUrl} target="_blank" rel="noreferrer">Bob Moses Legacy YouTube channel</a>.
        </p>
      </div>
    );
  }
  return (
    <div className="video-grid">
      {items.map((v) => <Player key={v.id} v={v} />)}
    </div>
  );
}
