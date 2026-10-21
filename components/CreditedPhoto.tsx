import Image from "next/image";
import { CREDIT, type Photo } from "@/lib/eji-photos";

// A single photo from the Dee Sanders set, with the required credit line.
export default function CreditedPhoto({
  photo, aspect, sizes = "(max-width: 900px) 100vw, 600px", className = "", position, priority,
}: { photo: Photo; aspect?: string; sizes?: string; className?: string; position?: string; priority?: boolean }) {
  return (
    <div className={`media ${className}`.trim()} style={{ aspectRatio: aspect }}>
      <Image src={photo.src} alt={photo.alt} fill sizes={sizes} priority={priority} style={{ objectFit: "cover", objectPosition: position }} />
      {CREDIT && <span className="photo-credit">{CREDIT}</span>}
    </div>
  );
}
