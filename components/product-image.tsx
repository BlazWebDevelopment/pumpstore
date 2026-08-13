import Image from "next/image";

import type { Product } from "@/lib/products";

export function ProductImage({
  product,
  className = "",
  sizes = "(min-width: 1024px) 260px, (min-width: 640px) 33vw, 50vw",
  priority = false,
}: {
  product: Product;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative isolate overflow-hidden bg-[#eeeeee] ${className}`}>
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
