import { PrimaryLink } from "@/components/buttons";

export default function NotFound() {
  return (
    <section>
      <div className="mx-auto flex min-h-[70dvh] max-w-[1120px] flex-col items-center justify-center px-5 py-32 text-center">
        <span className="pixel-type text-[15px] text-brand">404</span>
        <h1 className="display mt-4 text-[clamp(2rem,6vw,3.2rem)] text-white">
          Nothing to see here yet
        </h1>
        <p className="mt-5 max-w-md text-[16px] leading-relaxed text-text-tertiary">
          That item does not exist. Head back to the store for the full line-up.
        </p>
        <div className="mt-8">
          <PrimaryLink href="/" size="lg">
            Browse the store
          </PrimaryLink>
        </div>
      </div>
    </section>
  );
}
