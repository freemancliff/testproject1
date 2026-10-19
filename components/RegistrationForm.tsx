"use client";

import { useState } from "react";
import Link from "next/link";
import { MAILCHIMP, REGISTRATION_OPEN, SITE } from "@/lib/site";
import ShareButton from "./ShareButton";

const AREAS = ["Advocate", "Artist", "Civic Leader", "Communications Professional", "Community Member", "Counselor", "Direct Service Provider", "Educator", "Legal Professional/Scholar", "Organizer", "Policymaker", "Racial Justice Advocate", "Researcher", "Social Worker", "Student", "Writer", "Other"];
const HOTEL = ["Yes, I will book a room at the Elevation Hotel.", "No, I will make other accommodations."];
const SOURCES = ["Social Media", "Friend or Colleague", "Email or Newspaper", "Partner Organization", "Website", "Other"];

// Form field name -> Mailchimp merge tag
const MERGE: Record<string, string> = {
  email: "EMAIL", fname: "FNAME", lname: "LNAME", org: "MMERGE8", title: "MMERGE9", city: "MMERGE10",
  state: "MMERGE11", diet: "MMERGE12", hotel: "MMERGE13", areaofwork: "MMERGE14", source: "MMERGE15",
};

function Select({ id, label, options, note }: { id: string; label: string; options: string[]; note?: string }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={id} defaultValue="">
        <option value="">Select...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      {note && <small style={{ display: "block", marginTop: 6, opacity: 0.7 }}>{note}</small>}
    </div>
  );
}

function Field({ id, label, placeholder, type = "text", required }: { id: string; label: string; placeholder: string; type?: string; required?: boolean }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}{required && " *"}</label>
      <input id={id} name={id} type={type} placeholder={placeholder} required={required} />
    </div>
  );
}

export default function RegistrationForm() {
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  // Mailchimp's post-json endpoint only answers via JSONP.
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!String(data.get("fname")).trim() || !String(data.get("email")).trim()) {
      alert("Please fill in your first name and email address.");
      return;
    }
    let params = "";
    for (const [name, tag] of Object.entries(MERGE)) {
      const v = String(data.get(name) ?? "").trim();
      if (v) params += `&${tag}=${encodeURIComponent(v)}`;
    }
    setBusy(true);
    const w = window as unknown as Record<string, unknown>;
    const s = document.createElement("script");
    w._mcCb = (res: { result: string; msg?: string }) => {
      setBusy(false);
      s.remove();
      if (res.result === "success") {
        setDone(true);
        window.scrollTo(0, 0);
      } else {
        let msg = (res.msg || "Something went wrong. Please try again.").replace(/^\d+ - /, "");
        if (msg.toLowerCase().includes("already subscribed")) msg = "You’re already registered! Check your inbox for confirmation details.";
        alert(msg);
      }
    };
    s.src = `${MAILCHIMP.base}${params}&c=_mcCb`;
    document.body.appendChild(s);
  }

  const donate = (
    <a href={SITE.donateUrl} target="_blank" rel="noreferrer">Count Me In — Donate</a>
  );

  if (done) {
    return (
      <div className="reg-confirmation" style={{ display: "block" }}>
        <div className="check-circle">✓</div>
        <h2>You&apos;re Registered!</h2>
        <p>Thank you for registering for the {SITE.edition.replace("The ", "")}. We&apos;ll send a confirmation email with logistics details as October approaches.</p>
        <div className="donate-nudge" style={{ maxWidth: 500, margin: "0 auto" }}>
          <p>Support the conference with a donation — every gift helps make this experience possible.</p>
          {donate}
        </div>
        <div style={{ marginTop: 32 }}>
          <ShareButton className="share-inline-btn">Share This Conference</ShareButton>
        </div>
        <div style={{ marginTop: 24 }}><Link href="/" style={{ color: "var(--gold-dim)", fontSize: 14 }}>← Back to Conference</Link></div>
      </div>
    );
  }

  return (
    <form className="reg-form-wrap" onSubmit={submit}>
      <h2>Your Information</h2>
      <div className="form-row">
        <Field id="fname" label="First Name" placeholder="First name" required />
        <Field id="lname" label="Last Name" placeholder="Last name" required />
      </div>
      <Field id="email" label="Email Address" type="email" placeholder="your@email.com" required />
      <div className="form-row">
        <Field id="org" label="Organization / Affiliation" placeholder="University, company, or organization" />
        <Field id="title" label="Title / Role" placeholder="Your title or role" />
      </div>
      <div className="form-row">
        <Field id="city" label="City" placeholder="City" />
        <Field id="state" label="State" placeholder="State" />
      </div>
      <Select id="areaofwork" label="Area of Work" options={AREAS} />
      <hr className="form-divider" />
      <h2>Logistics</h2>
      <Field id="diet" label="Dietary Restrictions" placeholder="Vegetarian, vegan, allergies, etc." />
      <Select id="hotel" label="Hotel Accommodations" options={HOTEL} note="Conference room rate is $199 per night." />
      <Select id="source" label="How did you hear about the conference?" options={SOURCES} />
      <div className="form-note">* Required fields. Your information will be used solely for conference planning and communication.</div>
      <div className="form-note" style={{ marginTop: 16, borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 16 }}>
        <strong>Out-of-State Registrants</strong><br />
        For all out-of-state conference participants, your registration will be confirmed once your hotel accommodations have been confirmed.
      </div>
      <button className="form-submit" type="submit" disabled={!REGISTRATION_OPEN || busy} aria-disabled={!REGISTRATION_OPEN || busy}>
        {!REGISTRATION_OPEN ? "Registration Closed" : busy ? "Registering…" : "Register"}
      </button>
      <div className="donate-nudge">
        <p>This conference is free to attend. <strong>Your donation helps make it possible.</strong></p>
        {donate}
      </div>
    </form>
  );
}
