import { PhotoIcon, PlayCircleIcon } from "@heroicons/react/24/outline";

// A friendly "[Subject] coming soon" panel for places we don't have content yet.
export default function ComingSoon({ subject, icon = "photo", aspect }: { subject: string; icon?: "photo" | "video"; aspect?: string }) {
  const Icon = icon === "video" ? PlayCircleIcon : PhotoIcon;
  return (
    <div className="coming-soon" style={aspect ? { aspectRatio: aspect } : undefined} role="status">
      <Icon aria-hidden="true" />
      <span>{subject} coming soon</span>
    </div>
  );
}
