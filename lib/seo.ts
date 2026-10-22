import type { Metadata } from "next";
import { mit2026 } from "./mit2026";

// The public web address (the primary domain in Vercel; the non-www address redirects here).
// Change here (or set NEXT_PUBLIC_SITE_URL in Vercel) if the primary domain changes.
// It is used for the canonical links, sitemap and share previews.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bobmosesconference.com";
export const SITE_NAME = "Bob Moses Legacy Conference";

// Picture shown when a link is shared (texts, Facebook, LinkedIn, Slack, etc.). 1200x630.
export const SHARE_IMAGE = {
  url: "/share/part-ii-mit.jpg",
  width: 1200,
  height: 630,
  alt: "Remaking America: The Work Before Us. Part II at MIT, November 21, 2026",
};

type PageMeta = { title: string; description: string; path: string; absoluteTitle?: boolean };

// One place that builds the title, description, canonical link and share-preview tags for a page.
export function pageMeta({ title, description, path, absoluteTitle }: PageMeta): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [SHARE_IMAGE.url],
    },
  };
}

// Lets Google show Part II as an event in search results.
export function partTwoEventJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Remaking America: The Work Before Us, Part II at MIT",
    description: `Part II of the 2026 Bob Moses Legacy Conference. ${mit2026.tagline}.`,
    startDate: "2026-11-21T09:00:00-05:00",
    endDate: "2026-11-21T16:30:00-05:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    image: [`${SITE_URL}${SHARE_IMAGE.url}`],
    url: `${SITE_URL}/2026mit`,
    location: {
      "@type": "Place",
      name: `${mit2026.venue}, ${mit2026.building}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "2 Amherst Street",
        addressLocality: "Cambridge",
        addressRegion: "MA",
        postalCode: "02139",
        addressCountry: "US",
      },
    },
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/register`,
    },
    organizer: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
}
