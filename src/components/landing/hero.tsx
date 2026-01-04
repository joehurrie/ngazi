import { AnimateOnScroll } from '@/components/client/animate-on-scroll';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-24 md:py-32 border-b border-neutral-200/60">
      <div className="max-w-5xl">
        <AnimateOnScroll>
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-900"></span>
            </span>
            <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
              Ngazi Systems Online
            </span>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll style={{ animationDelay: '100ms' }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-neutral-900 leading-[0.95] mb-10">
            Designing the
            <br />
            <span className="text-neutral-400">digital future.</span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll
          style={{ animationDelay: '200ms' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-12"
        >
          <p className="text-lg md:text-xl text-neutral-500 font-light max-w-xl leading-relaxed mb-12 md:mb-0">
            We are a design agency utilizing modern technology to create unique, user-centered
            designs. From branding to mobile development, we help businesses scale online.
          </p>

          <div className="flex items-center gap-6">
            <Button
              asChild
              className="shiny-btn px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            >
              <Link href="/contact">Start Project</Link>
            </Button>
            <div className="h-px w-12 bg-neutral-200 hidden md:block"></div>
            <span className="text-[10px] font-mono text-neutral-400 uppercase hidden md:block">
              Scroll Down
            </span>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
