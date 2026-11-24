# Architecture

## Decision: plain static site
**Why:** A one-artist studio needs a fast, cheap, low-maintenance brochure site with a price list and booking links. There is no shop, login or database. A static site loads quickly on mobile data, has almost nothing to hack or update, and can move to any host. (MASTER-RULES §5 "Do not overengineer simple websites", §7, §14.)

**Rejected:** WordPress (plugin upkeep, slower, more attack surface); React/Next.js (no need for an app framework here).

**Revisit if:** the owner needs to edit content often without help (consider a git-based CMS such as Decap CMS or a simple headless CMS), or wants online booking/payments (link to a booking provider rather than building one).

## Structure
- `public/` is the deployable site. Nothing outside it is served.
- One stylesheet, organised by section, with design tokens in `:root`.
- `js/main.js` is progressive enhancement only; the site works with JavaScript off.
- Shared header/footer are repeated in each HTML file (only 3 pages). If pages grow beyond ~5, introduce a tiny static-site generator (e.g. Eleventy) to share partials — log that decision here.

## Hosting
- Cloudflare Workers with static assets (`wrangler.jsonc`), deployed from GitHub via Workers Builds. Same pattern as the owner's other sites.
- `_headers` sets security headers (CSP, HSTS, etc.) and long cache times for fingerprint-free assets in `/assets/`. If you replace an asset, give it a new file name so caches refresh.
- `not_found_handling: 404-page` serves `404.html`.

## SEO
- Per-page `<title>`, meta description, canonical, Open Graph.
- `BeautySalon` JSON-LD on the home page with location (Jeffreys Bay, Eastern Cape) and price catalogue.
- `robots.txt` and `sitemap.xml` (update the domain and `lastmod` dates).

## Assets
- Logo PNGs were extracted from the owner's logo artwork (white letters on stone) and recoloured; the horizontal wordmark is rebuilt from the same letters. Ask the owner for vector (SVG/PDF) logo files and swap them in when available.
- `mia-rose-at-work.*` and `results/*` are the owner's photos, cropped to 4:5 and saved as 640×800 WebP + JPEG.
- `assets/video/*.mp4`: owner's phone videos re-encoded to 432px wide H.264, no audio, CRF 30 (~170 KB and ~525 KB), with JPEG posters. `preload="none"`; `js/main.js` plays them only while on screen.
- Fonts: Montserrat (variable) and Lora Italic (variable), subset to Latin, WOFF. Licence: SIL OFL 1.1.

## Privacy / POPIA
No cookies, no forms. Cookieless Cloudflare Web Analytics (beacon injected by Cloudflare) is allowed in the CSP (`static.cloudflareinsights.com`, `cloudflareinsights.com`) and disclosed in the privacy notice. Contact happens through Instagram/WhatsApp. Privacy notice at `/privacy.html`.
