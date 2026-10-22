"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";
import { mit2026 } from "@/lib/mit2026";

export default function ShareButton({ className, children }: { className?: string; children: React.ReactNode }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const msg = `Join us for Part II of Remaking America: The Work Before Us, the 2026 Bob Moses Legacy Conference at MIT, ${mit2026.dateLine}. ${mit2026.city}.`;
    if (navigator.share) {
      await navigator.share({ title: "Bob Moses Legacy Conference 2026 Part II at MIT", text: msg, url: SITE.shareUrl });
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
      {copied && <div className="share-toast" role="status">Link copied to clipboard!</div>}
    </>
  );
}
