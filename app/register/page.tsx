import type { Metadata } from "next";
import Link from "next/link";
import { REGISTRATION_OPEN, SITE } from "@/lib/site";
import RegistrationForm from "@/components/RegistrationForm";

export const metadata: Metadata = {
  title: "Register | Bob Moses Legacy Conference 2026",
};

export default function RegisterPage() {
  return (
    <div id="page-register">
      <div className="reg-hero">
        <Link href="/" style={{ fontSize: 13, color: "var(--gold)", display: "inline-block", marginBottom: 16, textDecoration: "none" }}>← Back to Conference</Link>
        <h1>Register for the {SITE.edition.replace("The ", "")}</h1>
        <p>{SITE.dates} · {SITE.location} · {SITE.venue} · Free to attend</p>
        {!REGISTRATION_OPEN && (
          <p style={{ color: "#d4544a", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".04em", fontSize: 14, marginTop: 16 }}>Registration is now closed.</p>
        )}
      </div>
      <RegistrationForm />
    </div>
  );
}
