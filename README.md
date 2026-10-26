# pump.store

The merch store for the pump.fun app, styled to match [pump.fun](https://pump.fun) and its
[landing page](https://pump.fun/landing). The store itself is the landing page — there is no separate
marketing site. Eleven items are listed (six shirts, three cups, two plushies), each with its own slug
page, and every buy button is intentionally disabled because nothing is purchasable yet.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Routes

| Route           | What it is                                                        |
| --------------- | ----------------------------------------------------------------- |
| `/`             | The store — hero strip, category counts, full product grid         |
| `/store/[slug]` | Item page: photo, spec sheet, sizes, disabled buy button           |
| `/store`        | Redirects to `/`                                                   |
| `404`           | On-brand not-found page                                            |

All eleven item pages are statically generated from `generateStaticParams`.

## Design

Colours, radii, shadows and type come from pump.fun's own published design tokens, mirrored into the
Tailwind theme in `app/globals.css`:

- Surfaces `#14151c` / `#111113` / `#18191b` / `#212225`, deep background `#0a0a10`
- Brand green `#86efac`, soft tint `#86efac24`, ink on green `#052e16`
- Text `#fafafa` / `#e4e4e7` / `#a1a1aa` / `#8a8a8f` / `#74757a`
- Borders `#212225` / `#272a2d` / `#38383f` / `#4b4c52`
- Inter throughout, plus a pixel face for the small green labels

The night sky, starfield and green glow from pump.fun's landing page are recreated in CSS as a single
document-wide backdrop (`.page-backdrop`, `.page-glow`, `.starfield`, rendered once in
`app/layout.tsx`) that fades out gradually down the page. Sections deliberately have no background of
their own, so there are no hard colour edges; breaks use the fading `.soft-rule` hairline instead. The
pill logomark and favicon are pump.fun's own icon assets in `public/`, and the header carries a green
**Go to pump.fun** button.

## Product images

Original shots live in `app/images/{shirt,mug,plushie}/`. The store serves square WebP tiles built
from them in `public/items/<slug>.webp`. To rebuild after adding or replacing a shot, update the
mapping at the top of the script and run:

```bash
node scripts/prepare-product-images.mjs
```

Each source is padded out to a 1200 × 1200 square using its own top-left background colour, so every
tile in the grid is the same shape and the padding is invisible against the mockup backdrop.

## Coming soon behaviour

This is deliberate and applies everywhere:

- Item pages render a disabled `Coming soon` button instead of add-to-cart
- Sizes are shown but not selectable
- Cards and item pages carry a `Coming soon` badge

To turn a product into a real purchase later, add stock handling in `lib/products.ts` and swap
`DisabledButton` in `app/store/[slug]/page.tsx` for a real cart action.

## Content

Products live in `lib/products.ts` as a typed array: slug, ticker, category, price, image, copy, spec
rows and sizes. Six shirts (`Shirts`), three cups (`Cups`) and two plushies (`Plush`), each
using the real product photography.
