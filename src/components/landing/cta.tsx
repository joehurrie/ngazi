import Link from 'next/link';
import { GlowingBorderCard } from '../ui/glowing-border-card';
import { AnimateOnScroll } from '../client/animate-on-scroll';

export default function Cta() {
  return (
    <section className="py-24 md:py-32 bg-neutral-50/50">
      <AnimateOnScroll>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-2xl mx-auto flex flex-col items-center md:items-end md:text-right">
            <div className="text-[10px] font-mono uppercase text-neutral-400 mb-4 tracking-widest">
              06 — Let's Connect
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-neutral-500 font-light">
              Let&apos;s create something your users will love.
            </p>
            <div className="mt-10">
              <GlowingBorderCard animationDirection="clockwise" className="p-0">
                <Link
                  href="/contact"
                  className="block px-8 py-3.5 bg-transparent rounded-xl text-xs font-semibold tracking-widest uppercase text-neutral-900 hover:bg-neutral-100 transition-colors"
                >
                  Start a Project
                </Link>
              </GlowingBorderCard>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
