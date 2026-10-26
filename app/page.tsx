import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/lib/products";

export default function StorePage() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-[1120px] px-5 pb-12 pt-32 sm:pt-40">
          <h1 className="display text-[clamp(2.5rem,7vw,4.25rem)] text-white">pump.store</h1>

          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-text-tertiary sm:text-[17px]">
            Merch for the people who trade viral moments. Six shirts, three cups, a plushie and a
            costume — open an item for the full spec sheet.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-brand-soft px-3 py-1.5 text-[13px] font-medium text-brand">
              All {products.length}
            </span>
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-border-secondary bg-bg-secondary px-3 py-1.5 text-[13px] text-text-tertiary"
              >
                {category}
                <span className="ml-1.5 text-text-lowest">
                  {products.filter((product) => product.category === category).length}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-12 sm:py-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={product.slug} product={product} priority={index < 4} />
          ))}
        </div>
      </section>
    </>
  );
}
