# Instructions for AI coding assistants

You are working on the Rose Arc Brow & Lash Studio website. Any assistant (Claude, ChatGPT, Gemini, Copilot, etc.) should be able to continue from this repository alone.

## Read first
1. `MASTER-RULES.md` — the owner's Website Development Constitution. It overrides your defaults.
2. `ARCHITECTURE.md` — how the site is built and why.
3. `CHANGELOG.md` — what has changed recently.

## Rules for this project
- Keep it a **static site**: HTML, CSS, vanilla JS. Do not add a framework, bundler, CMS or npm dependencies without the owner's agreement and an entry in ARCHITECTURE.md.
- **No third-party scripts, trackers or embedded widgets** (Instagram embeds, Google Fonts, analytics) unless the owner asks. They slow the site down and affect POPIA. If added, update the privacy notice and `_headers` CSP.
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
- WhatsApp 076 797 2839 (wa.me/27767972839); email rosearc.studio@gmail.com; Instagram @rosearc.studio
- Bookings by WhatsApp for now; Fresha planned later
- Full price paid on the day of the appointment
- Cancellation & rescheduling policy (owner's wording, keep its meaning exactly): cancellations within 24 hours are strictly non-refundable, no exceptions; one complimentary reschedule may be allowed at the business's sole discretion in genuine, unforeseen circumstances (a courtesy, not an entitlement); no multiple reschedules, further changes need a new booking and new payment.

## Open items (confirm with the owner)
- Domain rosearc.co.za bought 2026-11-24; still to connect to Cloudflare
- Studio address (or whether to show only "Jeffreys Bay")
- Opening days and hours
- Booking moves to Fresha later: when Mia sends the Fresha link, point the main "Book" buttons and the floating button to it and keep WhatsApp as the second option
- Payment methods accepted on the day (cash, card, EFT, SnapScan?)
- (Training removed 2026-11-23: Mia does not offer training. Do not add it back.)
- Exact meaning of "Brow lamination maintenance" (description is currently general)
- Confirm every client shown in the Results photos/videos agreed to be on the website (POPIA)
- Google Business Profile
