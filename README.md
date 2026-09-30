# The Medicality

Static site for https://medicalityconsultants.com.

The site lives in `public/` as plain HTML with inline CSS and JS; there is no build step.
Cloudflare Workers serves that folder as static assets (see `wrangler.json`) and deploys on every push to `main`.

- `npm run dev` previews locally with Wrangler
- `npm run deploy` deploys manually

The founder video is hosted on Cloudflare R2 and the contact form is a JotForm embed; neither is in this repo.
