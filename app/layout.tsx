import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import NoWidows from "@/components/NoWidows";
import { Analytics } from "@vercel/analytics/next";
import { SITE_NAME, SITE_URL, SHARE_IMAGE } from "@/lib/seo";

const isPreview = !!process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bob Moses Legacy Conference",
    template: "%s | Bob Moses Legacy Conference",
  },
  description:
    "The Bob Moses Legacy Conference: past conferences, talks, 2026 Part I in Montgomery, and Part II on November 21, 2026 at MIT.",
  openGraph: { siteName: SITE_NAME, type: "website", locale: "en_US", images: [SHARE_IMAGE] },
  twitter: { card: "summary_large_image", images: [SHARE_IMAGE.url] },
  ...(isPreview ? { robots: { index: false, follow: false } } : {}),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <NoWidows />
        <Analytics />
      </body>
    </html>
  );
}
