import Link from "next/link";
import { REGISTRATION_OPEN } from "@/lib/site";
import ShareButton from "./ShareButton";

export default function StickyBar() {
  return (
    <div className="sticky-cta-bar" style={{ display: "flex" }}>
      {REGISTRATION_OPEN ? (
        <Link className="sticky-register" href="/register">Register Now</Link>
      ) : (
        <a className="sticky-register is-disabled" aria-disabled="true">Registration Closed</a>
      )}
      <ShareButton className="sticky-share">↗ Share This Conference</ShareButton>
    </div>
  );
}
