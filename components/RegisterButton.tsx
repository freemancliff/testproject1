import Link from "next/link";
import { REGISTRATION_OPEN } from "@/lib/site";

export default function RegisterButton() {
  return REGISTRATION_OPEN ? (
    <Link className="btn-primary" href="/register">Register Now</Link>
  ) : (
    <a className="btn-primary is-disabled" aria-disabled="true">Registration Closed</a>
  );
}
