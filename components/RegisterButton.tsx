import Link from "next/link";
import { REGISTRATION_OPEN } from "@/lib/site";

export default function RegisterButton() {
  return REGISTRATION_OPEN ? (
    <Link className="btn btn--primary" href="/register">Register Now</Link>
  ) : (
    <span className="btn btn--disabled" aria-disabled="true">Registration Closed</span>
  );
}
