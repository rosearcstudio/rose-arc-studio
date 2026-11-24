# Rose Arc Brow & Lash Studio — website

Website for **Rose Arc Brow & Lash Studio**, a brow and lash studio in Jeffreys Bay, South Africa, run by Mia Rose (InLei® Certified Brow & Lash Artist).

- Instagram: [@rosearc.studio](https://www.instagram.com/rosearc.studio/)
- Domain: **rosearc.co.za**

This project follows the rules in [MASTER-RULES.md](MASTER-RULES.md). Read that, then [AI-INSTRUCTIONS.md](AI-INSTRUCTIONS.md) and [ARCHITECTURE.md](ARCHITECTURE.md) before changing anything.

## What it is

A fast, static website: plain HTML, CSS and a few lines of JavaScript. No framework, no build step, no database, no tracking cookies. Fonts and images are self-hosted.

```
public/            ← everything that gets deployed
  index.html       ← home page (price list, results, about, FAQ, booking)
  privacy.html     ← POPIA privacy notice
  404.html         ← not-found page
  css/styles.css   ← all styles; brand colours and fonts are tokens at the top
  js/main.js       ← mobile menu, header shadow, footer year
  assets/img/      ← logo, wordmark, favicon, share image, photos
  assets/fonts/    ← Montserrat + Lora Italic (SIL Open Font License)
  robots.txt, sitemap.xml, _headers (security + cache headers)
wrangler.jsonc     ← Cloudflare Workers static-assets config
docs/              ← extra notes (brand, content sources)
```

## Run it locally

No install needed. Any static file server works, for example:

```bash
cd public
python3 -m http.server 8080
# open http://localhost:8080
```

Or with Cloudflare's tooling (Node 18+):

```bash
npx wrangler dev
```

## Edit content

- **Prices and services:** `public/index.html`, section `id="services"`. Also update the `hasOfferCatalog` prices in the JSON-LD block in the `<head>` so Google sees the same prices.
- **Contact details:** search for `TBC` in `public/index.html` and `public/privacy.html`.
- **WhatsApp button:** the element with `data-placeholder="whatsapp"`. Replace its `href` with `https://wa.me/27XXXXXXXXX` (number in international format, no leading 0, no spaces) and its label with `WhatsApp`.
- **Colours / fonts:** the `:root` tokens at the top of `public/css/styles.css`.

Run through the checklist in MASTER-RULES.md §13 after any change.

## Deploy

Designed for **Cloudflare Workers (static assets)**, deployed from GitHub with Workers Builds. It also works unchanged on any static host (Netlify, GitHub Pages, cPanel hosting, etc.) — upload the contents of `public/`.

1. Push this repo to GitHub.
2. Cloudflare dashboard → Workers & Pages → Create → Import a repository → pick this repo.
3. Build command: *(none)*. Deploy command: `npx wrangler deploy`.
4. Once the domain is on Cloudflare, add it under the Worker's **Domains & Routes**.
5. Submit `https://rosearc.co.za/sitemap.xml` in Google Search Console.

No secrets are needed. See `.env.example`.

## Ownership

The business owner should hold the logins for the domain registrar, Cloudflare, GitHub and Google Business Profile / Search Console. Store them in a password manager, never in this repo.
