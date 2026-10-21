import Link from "next/link";
import { MIT_REGISTRATION_OPEN } from "@/lib/mit2026";

export default function MitRegisterButton({ className = "" }: { className?: string }) {
  return MIT_REGISTRATION_OPEN ? (
    <Link className={`btn btn--primary ${className}`.trim()} href="/register">Register Now</Link>
  ) : (
    <span className={`btn btn--disabled ${className}`.trim()} aria-disabled="true">Registration Opening Soon</span>
  );
}
