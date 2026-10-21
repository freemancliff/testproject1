import Image from "next/image";
import type { Photo as PhotoData } from "@/lib/eji-photos";

// A plain responsive photo (no credit line).
export default function Photo({ photo, aspect, sizes = "(max-width: 900px) 100vw, 600px", className = "", position }: { photo: PhotoData; aspect?: string; sizes?: string; className?: string; position?: string }) {
  return (
    <div className={`media ${className}`.trim()} style={{ aspectRatio: aspect }}>
      <Image src={photo.src} alt={photo.alt} fill sizes={sizes} style={{ objectFit: "cover", objectPosition: position }} />
    </div>
  );
}
