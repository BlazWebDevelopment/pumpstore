import Link from "next/link";

import { Logo } from "@/components/logo";

export function SiteHeader() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="pointer-events-auto mx-auto flex h-14 max-w-[1120px] items-center justify-between gap-4 rounded-[18px] border border-white/[0.08] bg-bg-tertiary/70 pl-4 pr-2 shadow-token-xl backdrop-blur-xl sm:pl-5">
        <Logo size={22} wordmarkClassName="text-[17px]" />

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden items-center gap-2 rounded-full bg-brand-soft px-3 py-1.5 text-[13px] font-medium text-brand md:inline-flex">
            <span className="size-1.5 rounded-full bg-brand" />
            Store opening soon
          </span>

          <Link
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-brand px-4 text-[14px] font-medium text-brand-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] transition-[transform,filter] duration-150 ease-out hover:scale-[1.04] hover:brightness-105 active:scale-[0.97]"
          >
            Go to pump.fun
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
              className="size-3.5"
            >
              <path d="M5 11 11 5M6 4.5h5V10" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
