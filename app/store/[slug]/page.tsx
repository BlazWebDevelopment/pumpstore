import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { DisabledButton, SecondaryLink } from "@/components/buttons";
import { ProductCard } from "@/components/product-card";
import { ProductImage } from "@/components/product-image";
import { getProduct, getRelated, products } from "@/lib/products";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return { title: "Item not found" };
  }

  return {
    title: `${product.name} — coming soon`,
    description: product.tagline,
    openGraph: {
      title: `${product.name} — coming soon | pump.store`,
      description: product.tagline,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const related = getRelated(product.slug);

  return (
    <>
      <div>
        <div className="mx-auto max-w-[1120px] px-5 pb-16 pt-32 sm:pt-40">
          <nav className="flex items-center gap-2 text-[13px] text-text-low">
            <Link href="/" className="transition-colors hover:text-text-primary">
              Store
            </Link>
            <span className="text-border-default">/</span>
            <span>{product.category}</span>
            <span className="text-border-default">/</span>
            <span className="pixel-type text-brand/90">{product.ticker}</span>
          </nav>

          <div className="mt-7 grid gap-8 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-14">
            <div className="mx-auto w-full max-w-[520px]">
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] shadow-token-xl">
                <ProductImage
                  product={product}
                  className="aspect-square w-full"
                  sizes="(min-width: 1024px) 520px, 100vw"
                  priority
                />
                <span className="absolute right-4 top-4 rounded-full bg-brand px-3 py-1.5 text-[12px] font-semibold text-brand-ink">
                  Coming soon
                </span>
              </div>
            </div>

            <div className="lg:pt-2">
              <h1 className="display text-[clamp(1.9rem,4.4vw,2.6rem)] text-white">
                {product.name}
              </h1>
              <p className="mt-3 text-[16px] leading-relaxed text-text-tertiary">
                {product.tagline}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="text-[26px] font-semibold text-white">${product.price}</span>
              </div>

              <div className="mt-7">
                <p className="text-[13px] font-medium text-text-low">
                  {product.sizes.length > 1 ? "Size" : "Availability"}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      aria-disabled="true"
                      className="cursor-not-allowed rounded-lg border border-border-secondary bg-bg-secondary px-3.5 py-2 text-[13.5px] text-text-disabled"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <DisabledButton size="lg" className="w-full">
                  Coming soon
                </DisabledButton>
              </div>

              <div className="mt-8 border-t border-border-secondary pt-7">
                <h2 className="text-[15px] font-semibold text-text-primary">The details</h2>
                <p className="mt-3 text-[14.5px] leading-relaxed text-text-tertiary">
                  {product.description}
                </p>
                <ul className="mt-4 flex flex-col gap-2">
                  {product.details.map((detail) => (
                    <li key={detail} className="flex gap-2.5 text-[14px] text-text-tertiary">
                      <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-brand" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <dl className="mt-8 overflow-hidden rounded-2xl border border-border-secondary bg-bg-secondary">
                {product.specs.map((spec, index) => (
                  <div
                    key={spec.label}
                    className={`flex items-baseline justify-between gap-6 px-4 py-3 ${
                      index > 0 ? "border-t border-border-secondary" : ""
                    }`}
                  >
                    <dt className="text-[13.5px] text-text-low">{spec.label}</dt>
                    <dd className="text-right text-[13.5px] text-text-secondary">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="mx-auto max-w-[1120px] px-5">
          <hr className="soft-rule" />
        </div>
        <div className="mx-auto max-w-[1120px] px-5 py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="pixel-type text-[13px] text-brand">also coming</span>
              <h2 className="display mt-3 text-[28px] text-white sm:text-[32px]">Pairs well with</h2>
            </div>
            <SecondaryLink href="/">Back to the store</SecondaryLink>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
