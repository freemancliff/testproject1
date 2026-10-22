// Openly licensed photos from Wikimedia Commons, used until we have our own.
// Licenses require visible credit, so every use shows `credit`. Web-sized copies live in public/media/online/.
// To swap one out, just drop your own file at the matching slot in public/media (see public/media/README.md).
import type { Photo } from "./eji-photos";

type Online = Photo & { author: string; license: string; licenseUrl: string; sourceUrl: string };

const mk = (o: Omit<Online, "credit"> & { short: string }): Online => ({
  src: o.src, alt: o.alt, author: o.author, license: o.license, licenseUrl: o.licenseUrl, sourceUrl: o.sourceUrl,
  credit: `Photo: ${o.short}, ${o.license}, via Wikimedia Commons`,
});

export const mitKillianCourt = mk({
  src: "/media/online/mit-killian-court.jpg",
  alt: "The MIT Great Dome and Killian Court under a wide sky",
  author: "Madcoverboy", short: "Madcoverboy", license: "CC BY-SA 3.0",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
  sourceUrl: "https://commons.wikimedia.org/wiki/File:MIT_Killian_Court.jpg",
});

export const mitAerial = mk({
  src: "/media/online/mit-aerial.jpg",
  alt: "Aerial view of the MIT campus along the Charles River",
  author: "DrKenneth", short: "DrKenneth", license: "CC BY 3.0",
  licenseUrl: "https://creativecommons.org/licenses/by/3.0",
  sourceUrl: "https://commons.wikimedia.org/wiki/File:MIT_Main_Campus_Aerial.jpg",
});

export const mitGreatDome = mk({
  src: "/media/online/mit-great-dome.jpg",
  alt: "Visitors on the lawn in front of the MIT Great Dome",
  author: "Beyond My Ken", short: "Beyond My Ken", license: "CC BY-SA 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
  sourceUrl: "https://commons.wikimedia.org/wiki/File:2017_Maclaurin_Buildings_(MIT_Building_10)_and_Great_Dome.jpg",
});

export const onlinePhotos = [mitKillianCourt, mitAerial, mitGreatDome];
