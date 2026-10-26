import Link from "next/link";

import { ProductImage } from "@/components/product-image";
import type { Product } from "@/lib/products";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/store/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border-secondary bg-bg-secondary transition-[transform,border-color,background-color] duration-150 ease-out hover:-translate-y-0.5 hover:border-border-low hover:bg-bg-tertiary/60"
    >
      <div className="relative">
        <ProductImage
          product={product}
          className="aspect-square w-full"
          priority={priority}
        />
        <span className="absolute right-3 top-3 rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold text-brand-ink">
          Coming soon
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="min-w-0">
            <h3 className="line-clamp-2 text-[15px] font-semibold leading-snug text-text-primary">
              {product.name}
            </h3>
          <p className="mt-0.5 flex items-center gap-2 text-[13px] text-text-low">
            <span className="pixel-type text-brand/90">{product.ticker}</span>
            <span className="text-border-default">·</span>
            <span className="truncate">{product.category}</span>
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-[15px] font-semibold text-text-primary">${product.price}</span>
        </div>
      </div>
    </Link>
  );
}
