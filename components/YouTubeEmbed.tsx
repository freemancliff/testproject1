"use client";

import { useState } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

// Shows a thumbnail first and only loads the YouTube player when clicked,
// so pages with many videos stay fast.
export default function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }
  return (
    <button type="button" className="yt-facade" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={thumb} alt="" loading="lazy" onError={() => setThumb(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`)} />
      <span className="yt-play"><PlayIcon aria-hidden="true" /></span>
    </button>
  );
}
