"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

export default function ShareButton({ className, children }: { className?: string; children: React.ReactNode }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const msg = `Join us at the ${SITE.edition} — ${SITE.title}. ${SITE.dates.replace("–", "–")}. ${SITE.location}. Free to attend.`;
    if (navigator.share) {
      await navigator.share({ title: "Bob Moses Legacy Conference 2026", text: msg, url: SITE.shareUrl });
    } else {
      await navigator.clipboard.writeText(msg);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  }

  return (
    <>
      <button type="button" className={className} onClick={share}>
        {children}
      </button>
      {copied && <div className="share-toast" style={{ display: "block" }}>Link copied to clipboard!</div>}
    </>
  );
}
