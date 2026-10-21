# Bob Moses Legacy Conference website

Next.js (App Router) rebuild of the conference site that was previously a single HTML embed on Wix.

## Routes

| Path | What it is |
| --- | --- |
| `/` | Conference page (hero, schedule, speakers, travel, sponsors, past conferences) |
| `/register` | Registration form (posts to Mailchimp; currently shows "Registration Closed") |
| `/archive/[year]` | Past conference agendas for 2022 to 2025 |

## Where to edit things

- `lib/site.ts`: dates, links, and the `REGISTRATION_OPEN` switch
- `lib/speakers.ts`, `lib/sponsors.ts`, `lib/archives.ts`: content lists
- `public/media/README.md`: filenames for dropping in photos and videos
- `lib/quotes.ts`, `lib/videos.ts`: quotes and YouTube talks
- `lib/mit2026.ts`: MIT program and the `MIT_REGISTER_URL` switch
- `app/page.tsx`: the main page layout and copy
- `app/globals.css`: colors (`:root` variables), fonts, and all styling
- `public/images`, `public/fonts`: photos, logos, and the Formula Bold and Aktiv Grotesk fonts

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

Deploys on Vercel with no extra configuration.
