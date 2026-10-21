"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { CREDIT, type Photo } from "@/lib/eji-photos";

type Section = { title?: string; photos: Photo[] };

// Click-to-enlarge gallery. Every tile and the enlarged view show the photo credit.
export default function PhotoGallery({ sections, variant = "grid" }: { sections: Section[]; variant?: "grid" | "mosaic" }) {
  const flat = sections.flatMap((s) => s.photos);
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const show = useCallback((i: number) => setOpen((i + flat.length) % flat.length), [flat.length]);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open !== null && !d.open) d.showModal();
    if (open === null && d.open) d.close();
  }, [open]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") show(open + 1);
      if (e.key === "ArrowLeft") show(open - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, show]);

  let offset = 0;
  return (
    <>
      {sections.map((s, si) => {
        const start = offset;
        offset += s.photos.length;
        return (
          <div className="photo-section" key={si}>
            {s.title && <h3 className="photo-section-title">{s.title}</h3>}
            <div className={variant === "mosaic" ? "gallery" : "photo-grid"}>
              {s.photos.map((ph, i) => (
                <button type="button" className="media gallery-tile" key={ph.src} onClick={() => setOpen(start + i)} aria-label={`Enlarge photo: ${ph.alt}`}>
                  <Image src={ph.src} alt={ph.alt} fill sizes={variant === "mosaic" ? "(max-width: 860px) 50vw, 25vw" : "(max-width: 600px) 100vw, 360px"} style={{ objectFit: "cover" }} />
                  {CREDIT && <span className="photo-credit">{CREDIT}</span>}
                </button>
              ))}
            </div>
          </div>
        );
      })}

      <dialog ref={dialog} className="lightbox" onClose={() => setOpen(null)} onClick={(e) => { if (e.target === dialog.current) setOpen(null); }}>
        {open !== null && (
          <div className="lightbox-inner">
            <div className="lightbox-stage">
              <Image src={flat[open].src} alt={flat[open].alt} fill sizes="100vw" style={{ objectFit: "contain" }} priority />
            </div>
            <div className="lightbox-bar">
              <div>
                <div className="lightbox-alt">{flat[open].alt}</div>
                {CREDIT && <div className="lightbox-credit">{CREDIT}</div>}
              </div>
              <div className="lightbox-count">{open + 1} / {flat.length}</div>
            </div>
            <button type="button" className="lightbox-btn lightbox-close" onClick={() => setOpen(null)} aria-label="Close"><XMarkIcon /></button>
            <button type="button" className="lightbox-btn lightbox-prev" onClick={() => show(open - 1)} aria-label="Previous photo"><ChevronLeftIcon /></button>
            <button type="button" className="lightbox-btn lightbox-next" onClick={() => show(open + 1)} aria-label="Next photo"><ChevronRightIcon /></button>
          </div>
        )}
      </dialog>
    </>
  );
}
