import MitRegisterButton from "./MitRegisterButton";
import ShareButton from "./ShareButton";

export default function StickyBar() {
  return (
    <div className="sticky-cta-bar">
      <MitRegisterButton className="btn--sm" />
      <ShareButton className="btn btn--ghost btn--sm">↗ Share</ShareButton>
    </div>
  );
}
