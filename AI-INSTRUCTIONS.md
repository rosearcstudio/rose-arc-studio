# Instructions for AI coding assistants

You are working on the Rose Arc Brow & Lash Studio website. Any assistant (Claude, ChatGPT, Gemini, Copilot, etc.) should be able to continue from this repository alone.

## Read first
1. `MASTER-RULES.md` — the owner's Website Development Constitution. It overrides your defaults.
2. `ARCHITECTURE.md` — how the site is built and why.
3. `CHANGELOG.md` — what has changed recently.

## Local SEO focus
Primary: Jeffreys Bay. Also target St Francis Bay, Cape St Francis, Humansdorp and the Kouga area (owner request 2026-11-24): mention them naturally (hero lead, studio box, FAQ, schema areaServed). Do not create thin doorway pages per town.

## Rules for this project
- Keep it a **static site**: HTML, CSS, vanilla JS. Do not add a framework, bundler, CMS or npm dependencies without the owner's agreement and an entry in ARCHITECTURE.md.
- **No third-party scripts, trackers or embedded widgets** (Instagram embeds, Google Fonts, other analytics) unless the owner asks. Only exception: Cloudflare Web Analytics (owner approved 2026-11-24). They slow the site down and affect POPIA. If added, update the privacy notice and `_headers` CSP.
- Never invent business facts (prices, hours, address, phone numbers, qualifications, reviews). If something is unknown, leave a visible `TBC` and list it in the "Open items" section below.
- Prices are in **ZAR** and written `R550` (no space, no decimals).
- Prices appear twice: the visible price list and the JSON-LD `hasOfferCatalog` in `index.html`. Keep them in sync.
- Write in plain South African English. The brand voice is warm, calm and confident; short sentences; no hype.
- Mobile first. Check every change at 375px wide.
- Keep colour contrast at WCAG AA. `--oak` is decorative only; use `--oak-deep` for small text.
- Use semantic HTML: one `<h1>` per page, headings in order, alt text on meaningful images, `alt=""` on decorative ones.
- Record every meaningful change in `CHANGELOG.md`.

## Brand quick reference
- Name: **Rose Arc Brow & Lash Studio** (short: Rose Arc)
- Artist: Mia Rose, InLei® Certified Brow & Lash Artist, Jeffreys Bay (always say "certified")
- Tagline used on Instagram: "A thing for good brows."
- Menus: "The Brow Edit" and "The Lash Edit"
- Look: very clean and cool-toned neutral. Black `#141414`, white `#ffffff`, light greys `#e9e9e7` / `#f4f4f3`, mid grey `#5a5a5a`, brown accent `#5f4a3c` (taupe `#8a7465` for lines). No warm cream or beige.
- Fonts: Montserrat (all text), Lora Italic (accents only)

## Confirmed business details
- WhatsApp 076 797 2839 (wa.me/27767972839) — owner does NOT want the number shown as text on the site (2026-11-24): use "Book on WhatsApp" / "WhatsApp us" buttons and links only; email rosearc.studio@gmail.com; Instagram @rosearc.studio
- Bookings by WhatsApp for now; Fresha planned later
- Full price paid on the day of the appointment
- Cancellations (owner, 2026-11-24): for now only a polite request to cancel or reschedule at least 24 hours in advance so the slot can go to another client. A formal cancellation policy (owner has a draft) will be added later; do not add fees or "non-refundable" wording until the owner says so.

- Address: 22 Schelde Street, Jeffreys Bay. Hours: Mon–Fri 07:30–17:00, Sat 08:00–12:00, Sun closed; by appointment only.
- Payment on the day: card or cash, card preferred.
- Brow lamination maintenance (R220): done 2–3 weeks after the initial lamination; maintenance only, for clients between laminations; hydration, nourishment, reshaping; dye optional.
- Client permission confirmed (2026-11-24) for all before/after photos and videos on the site.

## Open items (confirm with the owner)
- Domain rosearc.co.za live on Cloudflare (2026-11-24); www redirects to it via a Cloudflare redirect rule
- Google Search Console set up and sitemap submitted (2026-11-24). Google Business Profile verified (category Beauty salon). Cloudflare Web Analytics is ON by choice (cookieless; allowed in the CSP; mentioned in the privacy notice).
- Fresha: on hold (2026-11-24). WhatsApp stays the booking method. If Fresha is added later, point the main "Book" buttons and the floating button to it and keep WhatsApp as the second option.
- Payments: owner is setting up a Yoco card machine; site already says card or cash, card preferred.
- (Training removed 2026-11-23: Mia does not offer training. Do not add it back.)
- Lash tint description: current wording approved by owner (2026-11-24).
- Formal cancellation policy: deferred until the studio is established and has enough bookings (owner, 2026-11-24). Keep the friendly 24-hour request until then.
- Vector logo (SVG/PDF from the designer) if available
- Owner is collecting Google reviews.
