# Photos and videos

Drop files here using the names below. Any extension works (photos: jpg, png, webp, avif; videos: mp4, webm).
Run `npm run dev`: empty spots show a dashed placeholder with the exact filename. On the live site, optional
gallery spots stay hidden until a file exists.

| File (without extension) | Where it appears |
| --- | --- |
| `home/hero` | Home hero background (a looping mp4 or a wide photo) |
| `home/mit-2026` | Home, "Bob Moses Legacy Conference at MIT" section |
| `home/featured-talk`, `home/talk-2`, `home/talk-3` | Home, Watch section (or add YouTube ids in `lib/videos.ts`) |
| `home/gallery-1` to `home/gallery-6` | Home, photo gallery (1 is the large tile) |
| `mit/hero`, `mit/venue`, `mit/promo-video`, `mit/gallery-1` to `mit/gallery-4` | /2026mit |
| `eji/about`, `eji/recap-video`, `eji/gallery-1` to `eji/gallery-4`, `eji/hotel` | /2026eji (Montgomery) |
| `archive/2025/hero`, `archive/2025/video`, `archive/2025/photo-1` to `photo-4` | Each archive year (2022 to 2025) |
| `people/<name-slug>` | Headshots on /2026mit, e.g. `people/rev-brandon-terry.jpg` |

Quotes go in `lib/quotes.ts`. The MIT registration link goes in `lib/mit2026.ts` (`MIT_REGISTER_URL`).

## Photos for past conferences (and keeping the repo small)

Phone and camera originals are huge. Never commit them. Instead:

1. Keep the originals anywhere locally (the `public/images/<year>...` folders are git-ignored).
2. Make web-sized copies (1800px, ~250 KB, location data stripped):
   `python3 scripts/optimize_photos.py path/IMG_1.JPG:01 path/IMG_2.JPG:02 --out public/media/archive/2024`
3. Name one `hero` for the year's header image, and list the rest in `lib/archive-photos.ts`.
