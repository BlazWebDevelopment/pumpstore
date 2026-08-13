import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const base =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full text-[15px] font-medium whitespace-nowrap transition-[transform,filter,background-color] duration-150 ease-out";

const sizes = {
  md: "h-11 px-5",
  lg: "h-13 px-7 text-base",
} as const;

type Size = keyof typeof sizes;

const primary =
  "bg-brand text-brand-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_6px_18px_-8px_rgba(134,239,172,0.6)] hover:scale-[1.03] hover:brightness-105 active:scale-[0.97] active:brightness-95";

const secondary =
  "border border-border-low bg-bg-tertiary/80 text-text-primary hover:scale-[1.03] hover:border-border-default hover:bg-bg-elevated active:scale-[0.97]";

export function PrimaryLink({
  href,
  children,
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  size?: Size;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${sizes[size]} ${primary} ${className}`}>
      {children}
    </Link>
  );
}

export function SecondaryLink({
  href,
  children,
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  size?: Size;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${sizes[size]} ${secondary} ${className}`}>
      {children}
    </Link>
  );
}

export function DisabledButton({
  children,
  size = "md",
  className = "",
  ...props
}: ComponentProps<"button"> & { size?: Size }) {
  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      className={`${base} ${sizes[size]} cursor-not-allowed border border-border-secondary bg-bg-tertiary text-text-disabled ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
