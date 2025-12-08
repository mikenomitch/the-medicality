# The Medicality Homepage

This repository contains the Astro-powered marketing homepage for The Medicality. It is a single-page site focused on presenting the brand, not a blog or content hub.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the local development server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:4321`.
3. Make updates to components under `src/` and static assets in `public/`. Changes will hot-reload in the browser.

## Deployment

The site is deployed to Cloudflare Workers/Pages as a static build.

1. Build the production assets:
   ```bash
   npm run build
   ```
2. Preview the build locally if needed:
   ```bash
   npm run preview
   ```
3. Deploy using Wrangler:
   ```bash
   npm run deploy
   ```
   Ensure your Cloudflare credentials are configured and the `wrangler.json` file is set up for the correct account and project.

## Project Structure

- `src/pages/` contains the Astro pages exposed as routes.
- `src/components/` holds shared UI components.
- `public/` stores static assets like images and icons.
- `astro.config.mjs` and `tsconfig.json` define project configuration.

## Additional Resources

- [Astro documentation](https://docs.astro.build/)
- [Cloudflare Workers static assets](https://developers.cloudflare.com/workers/static-assets/)
