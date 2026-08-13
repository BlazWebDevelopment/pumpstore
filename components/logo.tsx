import Image from "next/image";
import Link from "next/link";

export function Logo({
  size = 22,
  className = "",
  wordmarkClassName = "",
}: {
  size?: number;
  className?: string;
  wordmarkClassName?: string;
}) {
  return (
    <Link
      href="/"
      className={`group flex shrink-0 items-center gap-2 transition-opacity hover:opacity-80 ${className}`}
    >
      <Image
        src="/icon.png"
        alt=""
        width={size}
        height={size}
        priority
        className="shrink-0"
        style={{ width: size, height: size }}
      />
      <span className={`font-semibold tracking-[-0.01em] text-text-primary ${wordmarkClassName}`}>
        pump.store
      </span>
    </Link>
  );
}
