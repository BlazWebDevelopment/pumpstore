import Link from "next/link";

import { Logo } from "@/components/logo";

const footerLinks = [
  { href: "https://x.com/pumpfun", label: "X" },
  { href: "https://www.tiktok.com/@pump.fun", label: "TikTok" },
  { href: "https://www.youtube.com/@pumpfunofficial", label: "YouTube" },
  { href: "https://pump.fun", label: "Go to pump.fun" },
];

export function SiteFooter() {
  return (
    <footer className="mt-8">
      <div className="mx-auto max-w-[1120px] px-5">
        <hr className="soft-rule" />
      </div>
      <div className="mx-auto flex max-w-[1120px] flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <Logo size={20} wordmarkClassName="text-[15px]" />

        <nav className="flex flex-wrap items-center gap-x-7 gap-y-3">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13.5px] text-[#bcbcbc]/90 transition-opacity hover:opacity-80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mx-auto max-w-[1120px] px-5 pb-10">
        <p className="text-[12.5px] leading-relaxed text-text-lowest">
          pump.store is the merch counter for pump.fun.
        </p>
      </div>
    </footer>
  );
}
