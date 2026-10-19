import { SITE } from "@/lib/site";
import { videos } from "@/lib/videos";

export default function VideoGrid() {
  if (videos.length === 0) {
    return (
      <div className="video-empty">
        Talks are being uploaded now. New videos will appear here as they are posted to the{" "}
        <a href={SITE.channelUrl} target="_blank" rel="noreferrer" style={{ color: "var(--gold)", textDecoration: "underline" }}>Bob Moses Legacy YouTube channel</a>.
      </div>
    );
  }
  return (
    <div className="video-grid">
      {videos.map((v) => (
        <div className="video-card" key={v.id}>
          <div className="video-frame">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${v.id}`}
              title={v.title}
              loading="lazy"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {v.conference && <div className="video-year">{v.conference}</div>}
          <h3>{v.title}</h3>
        </div>
      ))}
    </div>
  );
}
