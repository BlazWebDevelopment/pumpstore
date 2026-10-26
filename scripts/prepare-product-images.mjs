import { mkdir } from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

/**
 * Source shots live in app/images/<type>/, at mixed sizes and aspect ratios.
 * Each one is padded out to a square using its own background colour, so the
 * store grid stays even and no pad seam shows against the mockup backdrop.
 * Output names match the product slug in lib/products.ts.
 */
const mapping = [
  { src: "app/images/shirt/8AlaSNewFe.png", out: "pill-logo-tee.webp" },
  { src: "app/images/shirt/8j57tXKprt.png", out: "circle-stamp-tee.webp" },
  { src: "app/images/shirt/IKwYM7l3Cc.png", out: "wordmark-tee.webp" },
  { src: "app/images/shirt/J2ZnR6ipQq.png", out: "launch-trade-earn-tee.webp" },
  { src: "app/images/shirt/j4XKoDlkDf.png", out: "forest-logo-tee.webp" },
  { src: "app/images/shirt/PZxgnYauA7.png", out: "halftone-pill-tee.webp" },
  { src: "app/images/mug/VPL0mffvYf.png", out: "black-pill-mug.webp" },
  { src: "app/images/mug/OsCKgvzS42.png", out: "forest-mug.webp" },
  { src: "app/images/mug/7RTdeRJgab.png", out: "stamp-mug.webp" },
  { src: "app/images/plushie/YFe9nrdHi5.png", out: "pill-plushie.webp" },
  { src: "app/images/costume/0nd87WDo8o.png", out: "scary-pill.webp" },
];

const size = 1200;
const outDir = path.join(process.cwd(), "public", "items");
await mkdir(outDir, { recursive: true });

async function backgroundColour(file) {
  const [r, g, b] = await sharp(file)
    .ensureAlpha()
    .extract({ left: 0, top: 0, width: 1, height: 1 })
    .raw()
    .toBuffer();

  return { r, g, b };
}

for (const { src, out } of mapping) {
  const background = await backgroundColour(src);

  await sharp(src)
    .flatten({ background })
    .resize(size, size, { fit: "contain", background })
    .webp({ quality: 88 })
    .toFile(path.join(outDir, out));

  console.log(`${src} -> items/${out} (pad rgb(${background.r},${background.g},${background.b}))`);
}
