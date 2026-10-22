// ─────────────────────────────────────────────────────────────────────────────
// Amazon affiliate links. Every Amazon product link on the site goes through
// shopUrl() / <ShopLink>, which rewrites it to a clean link that carries YOUR tag.
//
// Set your Amazon Associates "Store ID" (looks like  yourname-20)  one of two ways:
//   1) In Vercel: Project > Settings > Environment Variables > NEXT_PUBLIC_AMAZON_TAG
//   2) Or put it in AMAZON_TAG_FALLBACK below.
// Until a tag is set, links still work; they just don't earn commission.
//
// What it does to a link:
//   - amazon.com/.../dp/ASIN, /gp/product/ASIN, /offer-listing/ASIN  -> https://www.amazon.com/dp/ASIN?tag=YOURTAG
//   - removes any other tag already on a link (the old site's links carried someone else's "hyprod-20")
//   - drops tracking junk (ref=, gclid, hvadid ...)
//   - non-Amazon links (publishers, Barnes & Noble ...) are only cleaned of tracking, never tagged
// ─────────────────────────────────────────────────────────────────────────────
const AMAZON_TAG_FALLBACK = "cliffphd-20";

export const AMAZON_TAG = (process.env.NEXT_PUBLIC_AMAZON_TAG || AMAZON_TAG_FALLBACK).trim();

// Amazon requires this wording (or similar) wherever affiliate links appear.
export const AFFILIATE_DISCLOSURE = "As an Amazon Associate, we earn from qualifying purchases.";

const isAmazonHost = (h: string) => /(^|\.)amazon\.com$/i.test(h);
const TRACKING = /^(utm_.*|gclid|fbclid|msclkid|jsessionid|ref|ref_|tag|linkCode|hvadid|hvdev|hvlocphy|hvnetw|hvpone|hvptwo|hvqmt|hvrand|hvtargid|hydadcr|keywords|qid|sr|th|psc|crid|sprefix|ie|condition|field-author|text|sort)$/i;

export function amazonAsin(url: string): string | null {
  const m = url.match(/\/(?:dp|gp\/product|gp\/offer-listing|offer-listing|product)\/([A-Z0-9]{10})(?:[/?]|$)/i);
  return m ? m[1].toUpperCase() : null;
}

export function isAmazonLink(url: string): boolean {
  try { return isAmazonHost(new URL(url).hostname) || /^a\.co$|^amzn\.to$/i.test(new URL(url).hostname); } catch { return false; }
}

/** Amazon search link (used when we don't have a product id), tagged. */
export function amazonSearchUrl(query: string): string {
  const u = new URL("https://www.amazon.com/s");
  u.searchParams.set("k", query);
  u.searchParams.set("i", "stripbooks");
  if (AMAZON_TAG) u.searchParams.set("tag", AMAZON_TAG);
  return u.toString();
}

/** Returns the link to use on the site: tagged for Amazon products, cleaned for everything else. */
export function shopUrl(url: string): string {
  let u: URL;
  try { u = new URL(url); } catch { return url; }

  if (isAmazonHost(u.hostname)) {
    const asin = amazonAsin(u.pathname);
    if (asin) {
      const out = new URL(`https://www.amazon.com/dp/${asin}`);
      if (AMAZON_TAG) out.searchParams.set("tag", AMAZON_TAG);
      return out.toString();
    }
    // Amazon search / other pages: keep the page, replace the tag
    u.searchParams.forEach((_, k) => { if (/^tag$/i.test(k)) u.searchParams.delete(k); });
    if (AMAZON_TAG) u.searchParams.set("tag", AMAZON_TAG);
    return u.toString();
  }

  // Not Amazon: strip tracking only
  [...u.searchParams.keys()].forEach((k) => { if (/^(utm_.*|gclid|fbclid|msclkid)$/i.test(k)) u.searchParams.delete(k); });
  u.pathname = u.pathname.replace(/;jsessionid=[^/?]*/i, "");
  u.hash = u.hash.startsWith("#idiq") ? "" : u.hash;
  return u.toString();
}

/** "Amazon", "Barnes & Noble", etc. for the button label. */
export function storeName(url: string): string {
  let h = "";
  try { h = new URL(url).hostname.replace(/^www\./, ""); } catch { return "the publisher"; }
  if (isAmazonHost(h) || h === "a.co" || h === "amzn.to") return "Amazon";
  if (/barnesandnoble\.com$/.test(h)) return "Barnes & Noble";
  if (/thriftbooks\.com$/.test(h)) return "ThriftBooks";
  if (/target\.com$/.test(h)) return "Target";
  return "the publisher";
}
