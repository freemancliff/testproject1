import type { Metadata } from "next";
import Link from "next/link";
import { MIT_REGISTRATION_OPEN, mit2026 } from "@/lib/mit2026";
import RegistrationForm from "@/components/RegistrationForm";

export const metadata: Metadata = {
  title: "Register (2026 Part II at MIT)",
};

export default function RegisterPage() {
  return (
    <div id="page-register">
      <section className="section section--dark section--tight">
        <div className="container">
          <Link className="back-link" href="/2026mit">← Back to the MIT conference</Link>
          <h1 style={{ fontSize: "clamp(2rem,4.6vw,3.4rem)", marginBottom: 12 }}>Register for Part II of the 2026 Bob Moses Legacy Conference at MIT</h1>
          <p className="lead">{mit2026.dateLine} · {mit2026.hours} · {mit2026.venue}, {mit2026.institution}, {mit2026.city}</p>
          {!MIT_REGISTRATION_OPEN && <p className="closed-note" style={{ marginTop: 16 }}>Registration is not open yet.</p>}
        </div>
      </section>
      <section className="section section--cream">
        <div className="container">
          <RegistrationForm />
        </div>
      </section>
    </div>
  );
}
