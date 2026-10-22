"use client";

import { useState } from "react";
import Link from "next/link";
import { MAILCHIMP, SITE } from "@/lib/site";
import { MIT_EVENT_FIELD, MIT_MAILCHIMP_TAG_ID, MIT_REGISTRATION_OPEN, mit2026 } from "@/lib/mit2026";
import ShareButton from "./ShareButton";

const AREAS = ["Advocate", "Artist", "Civic Leader", "Communications Professional", "Community Member", "Counselor", "Direct Service Provider", "Educator", "Legal Professional/Scholar", "Organizer", "Policymaker", "Racial Justice Advocate", "Researcher", "Social Worker", "Student", "Writer", "Other"];
const SOURCES = ["Social Media", "Friend or Colleague", "Email or Newspaper", "Partner Organization", "Website", "Other"];

// Form field name -> Mailchimp merge tag (the audience's field tags)
const MERGE: Record<string, string> = {
  email: "EMAIL", fname: "FNAME", lname: "LNAME", org: "MMERGE8", title: "MMERGE9", city: "MMERGE10",
  state: "MMERGE11", diet: "MMERGE12", areaofwork: "MMERGE14", source: "MMERGE15",
};

function Select({ id, label, options }: { id: string; label: string; options: string[] }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={id} defaultValue="">
        <option value="">Select...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function Field({ id, label, placeholder, type = "text", required, autoComplete }: { id: string; label: string; placeholder: string; type?: string; required?: boolean; autoComplete?: string }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}{required && " *"}</label>
      <input id={id} name={id} type={type} placeholder={placeholder} required={required} autoComplete={autoComplete} />
    </div>
  );
}

export default function RegistrationForm() {
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  // Mailchimp's post-json endpoint only answers via JSONP, so the request is a <script> tag.
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const data = new FormData(e.currentTarget);
    if (!String(data.get("fname")).trim() || !String(data.get("email")).trim()) {
      setError("Please fill in your first name and email address.");
      return;
    }
    if (data.get(MIT_EVENT_FIELD.tag) !== MIT_EVENT_FIELD.value) {
      setError("Please select “I confirm” to confirm your information is correct before registering.");
      return;
    }
    let params = MIT_MAILCHIMP_TAG_ID ? `&tags=${encodeURIComponent(MIT_MAILCHIMP_TAG_ID)}` : "";
    const eventValue = encodeURIComponent(String(data.get(MIT_EVENT_FIELD.tag)));
    params += `&${MIT_EVENT_FIELD.tag}=${eventValue}`;
    // Mailchimp lists this field's tag as "MMERGE17 or MERGE17"; send both spellings (unknown ones are ignored).
    if (MIT_EVENT_FIELD.tag.startsWith("MMERGE")) params += `&${MIT_EVENT_FIELD.tag.slice(1)}=${eventValue}`;
    for (const [name, tag] of Object.entries(MERGE)) {
      const v = String(data.get(name) ?? "").trim();
      if (v) params += `&${tag}=${encodeURIComponent(v)}`;
    }
    setBusy(true);
    const w = window as unknown as Record<string, unknown>;
    const s = document.createElement("script");
    const fail = (msg: string) => { setBusy(false); s.remove(); setError(msg); };
    w._mcCb = (res: { result: string; msg?: string }) => {
      console.info("Mailchimp response:", res);
      setBusy(false);
      s.remove();
      if (res.result === "success") {
        setDone(true);
        window.scrollTo(0, 0);
      } else {
        let msg = (res.msg || "Something went wrong. Please try again.").replace(/<[^>]+>/g, "").replace(/^\d+ - /, "");
        if (msg.toLowerCase().includes("already subscribed")) msg = "You’re already registered! Check your inbox for confirmation details.";
        setError(msg);
      }
    };
    s.onerror = () => fail("We couldn’t reach the registration service. Please check your connection and try again.");
    s.src = `${MAILCHIMP.base}${params}&c=_mcCb`;
    document.body.appendChild(s);
  }

  const donate = (
    <a href={SITE.donateUrl} target="_blank" rel="noreferrer">Count Me In — Donate</a>
  );

  if (done) {
    return (
      <div className="reg-confirmation" role="status">
        <div className="check-circle">✓</div>
        <h2>You&apos;re Registered!</h2>
        <p>Thank you for registering for Part II of the 2026 Bob Moses Legacy Conference at MIT on {mit2026.dateLine}. We&apos;ll send a confirmation email with logistics details as the date approaches. If you don&apos;t see it, check your spam folder.</p>
        <div className="donate-nudge" style={{ maxWidth: 500, margin: "0 auto" }}>
          <p>Support the conference with a donation — every gift helps make this experience possible.</p>
          {donate}
        </div>
        <div style={{ marginTop: 32 }}>
          <ShareButton className="share-inline-btn">Share This Conference</ShareButton>
        </div>
        <div style={{ marginTop: 24 }}><Link href="/2026mit" style={{ color: "var(--gold-dim)", fontSize: 14, fontWeight: 700 }}>← Back to the MIT conference</Link></div>
      </div>
    );
  }

  return (
    <form className="reg-form-wrap" onSubmit={submit} noValidate>
      <h2>Your Information</h2>
      <div className="form-row">
        <Field id="fname" label="First Name" placeholder="First name" required autoComplete="given-name" />
        <Field id="lname" label="Last Name" placeholder="Last name" required autoComplete="family-name" />
      </div>
      <Field id="email" label="Email Address" type="email" placeholder="your@email.com" required autoComplete="email" />
      <div className="form-row">
        <Field id="org" label="Organization / Affiliation" placeholder="University, company, or organization" autoComplete="organization" />
        <Field id="title" label="Title / Role" placeholder="Your title or role" autoComplete="organization-title" />
      </div>
      <div className="form-row">
        <Field id="city" label="City" placeholder="City" autoComplete="address-level2" />
        <Field id="state" label="State" placeholder="State" autoComplete="address-level1" />
      </div>
      <Select id="areaofwork" label="Area of Work" options={AREAS} />
      <hr className="form-divider" />
      <h2>Logistics</h2>
      <Field id="diet" label="Dietary Restrictions" placeholder="Vegetarian, vegan, allergies, etc. (lunch is provided)" />
      <Select id="source" label="How did you hear about the conference?" options={SOURCES} />
      <fieldset className="form-confirm">
        <legend>Please confirm that all information is correct for my registration for <strong>Part II</strong> of the 2026 Bob Moses Legacy Conference at <strong>MIT</strong> on <strong>November 21, 2026</strong>. *</legend>
        <label className="form-radio">
          <input type="radio" name={MIT_EVENT_FIELD.tag} value={MIT_EVENT_FIELD.value} required />
          <span>{MIT_EVENT_FIELD.value}</span>
        </label>
      </fieldset>
      <div className="form-note">* Required fields. Your information will be used solely for conference planning and communication.</div>
      {error && <div className="form-error" role="alert">{error}</div>}
      <button className="form-submit" type="submit" disabled={!MIT_REGISTRATION_OPEN || busy} aria-disabled={!MIT_REGISTRATION_OPEN || busy}>
        {!MIT_REGISTRATION_OPEN ? "Registration Opening Soon" : busy ? "Registering…" : "Register"}
      </button>
      <div className="donate-nudge">
        <p>Your donation helps make this conference possible.</p>
        {donate}
      </div>
    </form>
  );
}
