export type Product = {
  slug: string;
  name: string;
  ticker: string;
  category: "Shirts" | "Cups" | "Plush" | "Costumes";
  price: number;
  image: string;
  tagline: string;
  description: string;
  details: string[];
  specs: { label: string; value: string }[];
  sizes: string[];
};

export const products: Product[] = [
  {
    slug: "pill-logo-tee",
    name: "Pill Logo Tee",
    ticker: "PILLTEE",
    category: "Shirts",
    price: 34,
    image: "/items/pill-logo-tee.webp",
    tagline: "The stacked logo, big, on black.",
    description:
      "The full lock-up — pill above the wordmark — printed large and centred on a heavyweight black body. The one to get if you only get one.",
    details: [
      "240 gsm combed cotton",
      "Stacked pill and wordmark chest print",
      "Ribbed collar with woven neck label",
      "Pre-shrunk, unisex sizing",
    ],
    specs: [
      { label: "Colour", value: "Black" },
      { label: "Material", value: "100% combed cotton, 240 gsm" },
      { label: "Fit", value: "Regular, unisex" },
      { label: "Print", value: "Four-colour screen print" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    slug: "circle-stamp-tee",
    name: "Circle Stamp Tee",
    ticker: "STAMP",
    category: "Shirts",
    price: 32,
    image: "/items/circle-stamp-tee.webp",
    tagline: "A bottle green stamp on a white body.",
    description:
      "The pill set inside a circular PUMP.FUN stamp, printed in a single bottle green on soft white cotton. Reads like a team badge rather than a logo tee.",
    details: [
      "240 gsm combed cotton",
      "Single-colour circular stamp print",
      "Soft-hand water-based ink",
      "Taped shoulder seams",
    ],
    specs: [
      { label: "Colour", value: "White" },
      { label: "Material", value: "100% combed cotton, 240 gsm" },
      { label: "Fit", value: "Regular, unisex" },
      { label: "Print", value: "One-colour water-based print" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    slug: "wordmark-tee",
    name: "Wordmark Tee",
    ticker: "WORDMARK",
    category: "Shirts",
    price: 34,
    image: "/items/wordmark-tee.webp",
    tagline: "Pill and wordmark in a line, on natural cotton.",
    description:
      "The horizontal lock-up across the chest on an undyed natural body. The colour is the cotton itself, so there is no finish to fade out over time.",
    details: [
      "240 gsm undyed cotton",
      "Horizontal pill and wordmark print",
      "Natural cream, no dye",
      "Ribbed collar with woven neck label",
    ],
    specs: [
      { label: "Colour", value: "Natural cream" },
      { label: "Material", value: "100% undyed cotton, 240 gsm" },
      { label: "Fit", value: "Regular, unisex" },
      { label: "Print", value: "Three-colour screen print" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    slug: "launch-trade-earn-tee",
    name: "Launch Trade Earn Tee",
    ticker: "LAUNCH",
    category: "Shirts",
    price: 36,
    image: "/items/launch-trade-earn-tee.webp",
    tagline: "The whole pitch in three words.",
    description:
      "Oversized tilted pill, wordmark underneath, and the line — launch, trade, earn — set small beneath it. Printed on heavyweight black cotton with a soft hand feel.",
    details: [
      "240 gsm combed cotton",
      "Tilted pill with strapline print",
      "Soft-hand ink, no plastic feel",
      "Pre-shrunk, unisex sizing",
    ],
    specs: [
      { label: "Colour", value: "Black" },
      { label: "Material", value: "100% combed cotton, 240 gsm" },
      { label: "Fit", value: "Regular, unisex" },
      { label: "Print", value: "Four-colour screen print" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    slug: "forest-logo-tee",
    name: "Forest Logo Tee",
    ticker: "FOREST",
    category: "Shirts",
    price: 34,
    image: "/items/forest-logo-tee.webp",
    tagline: "Deep forest green, white wordmark.",
    description:
      "Garment-dyed deep forest green with the pill and wordmark printed centre chest in white and mint. The quietest colourway in the drop and the one that goes with everything.",
    details: [
      "240 gsm garment-dyed cotton",
      "White and mint chest print",
      "Deep forest green body",
      "Ribbed collar with woven neck label",
    ],
    specs: [
      { label: "Colour", value: "Forest green" },
      { label: "Material", value: "100% cotton, garment dyed" },
      { label: "Fit", value: "Regular, unisex" },
      { label: "Print", value: "Three-colour screen print" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    slug: "halftone-pill-tee",
    name: "Halftone Pill Tee",
    ticker: "HALFTONE",
    category: "Shirts",
    price: 36,
    image: "/items/halftone-pill-tee.webp",
    tagline: "Print-shop halftone burst behind the pill.",
    description:
      "The pill sitting on a green halftone dot burst, printed on a heather charcoal body. Six colours, and the dots are printed rather than faked, so the edges stay crisp.",
    details: [
      "240 gsm heather charcoal cotton blend",
      "Halftone burst behind the pill",
      "Six-colour screen print",
      "Regular fit with a softer drape",
    ],
    specs: [
      { label: "Colour", value: "Heather charcoal" },
      { label: "Material", value: "Cotton / poly blend, 240 gsm" },
      { label: "Fit", value: "Regular, unisex" },
      { label: "Print", value: "Six-colour screen print" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    slug: "black-pill-mug",
    name: "Black Pill Mug",
    ticker: "PILLMUG",
    category: "Cups",
    price: 24,
    image: "/items/black-pill-mug.webp",
    tagline: "Glossy black, 330 ml, pill on the side.",
    description:
      "Glossy black ceramic with the pill and wordmark printed large on both sides, so it reads the same whichever hand you pick it up with. Thick walls, comfortable handle.",
    details: [
      "330 ml glossy ceramic",
      "Printed on both sides",
      "Comfort handle, weighted base",
      "Dishwasher and microwave safe",
    ],
    specs: [
      { label: "Colour", value: "Gloss black" },
      { label: "Volume", value: "330 ml" },
      { label: "Material", value: "Glazed ceramic" },
      { label: "Care", value: "Dishwasher safe" },
    ],
    sizes: ["One size"],
  },
  {
    slug: "forest-mug",
    name: "Forest Green Mug",
    ticker: "FORESTMUG",
    category: "Cups",
    price: 24,
    image: "/items/forest-mug.webp",
    tagline: "Deep green glaze, white wordmark.",
    description:
      "The same 330 ml body in a deep forest glaze with the pill and wordmark in white and mint. Holds heat well and looks less industrial than the black one on a desk.",
    details: [
      "330 ml glossy ceramic",
      "Deep forest green glaze",
      "Printed on both sides",
      "Dishwasher and microwave safe",
    ],
    specs: [
      { label: "Colour", value: "Forest green" },
      { label: "Volume", value: "330 ml" },
      { label: "Material", value: "Glazed ceramic" },
      { label: "Care", value: "Dishwasher safe" },
    ],
    sizes: ["One size"],
  },
  {
    slug: "stamp-mug",
    name: "Circle Stamp Mug",
    ticker: "STAMPMUG",
    category: "Cups",
    price: 22,
    image: "/items/stamp-mug.webp",
    tagline: "White ceramic with the bottle green stamp.",
    description:
      "Plain white ceramic with the circular PUMP.FUN stamp printed in bottle green. The cheapest way into the drop and the easiest one to give away.",
    details: [
      "330 ml glossy white ceramic",
      "Single-colour circular stamp",
      "Printed on both sides",
      "Dishwasher and microwave safe",
    ],
    specs: [
      { label: "Colour", value: "White" },
      { label: "Volume", value: "330 ml" },
      { label: "Material", value: "Glazed ceramic" },
      { label: "Care", value: "Dishwasher safe" },
    ],
    sizes: ["One size"],
  },
  {
    slug: "pill-plushie",
    name: "Cupsey Happy Pill for Anxiety Relief",
    ticker: "PLUSH",
    category: "Plush",
    price: 29,
    image: "/items/pill-plushie.webp",
    tagline: "Something soft to hold during the dip.",
    description:
      "A chunky plush pill with stubby arms, little feet and an embroidered face, in short-pile minky. Sits upright on a desk, squeezes quietly, does not give financial advice.",
    details: [
      "28 cm tall, short-pile minky",
      "Embroidered face, blushed cheeks",
      "Stubby arms and feet, sits upright",
      "Surface washable",
    ],
    specs: [
      { label: "Colour", value: "Green / white" },
      { label: "Size", value: "28 cm tall" },
      { label: "Material", value: "Minky plush, PP fill" },
      { label: "Care", value: "Surface wash only" },
    ],
    sizes: ["One size"],
  },
  {
    slug: "scary-pill",
    name: "Scary Pill",
    ticker: "SCARY",
    category: "Costumes",
    price: 49,
    image: "/items/scary-pill.webp",
    tagline: "Become the pill. Terrify the bears.",
    description:
      "A full-body pill costume, white cap up top and orange capsule below, with a face opening so everyone knows exactly who aped in. Slips on over your own clothes and is ready for any party, stream or chart-watching session.",
    details: [
      "Padded white and orange capsule body",
      "Face opening in the cap",
      "Arm openings, slips on over clothes",
      "Black outline trim with highlight detail",
    ],
    specs: [
      { label: "Colour", value: "White / orange" },
      { label: "Fit", value: "Adult, one size" },
      { label: "Material", value: "Polyester, foam padding" },
      { label: "Care", value: "Spot clean only" },
    ],
    sizes: ["One size"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getRelated(slug: string, count = 3): Product[] {
  const current = getProduct(slug);
  const sameCategory = products.filter(
    (product) => product.slug !== slug && product.category === current?.category,
  );
  const others = products.filter(
    (product) => product.slug !== slug && product.category !== current?.category,
  );
  return [...sameCategory, ...others].slice(0, count);
}

export const categories = [...new Set(products.map((product) => product.category))];
