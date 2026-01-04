import { AnimateOnScroll } from '@/components/client/animate-on-scroll';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-24 md:py-32 border-b border-neutral-200/60">
      <div className="max-w-4xl">
        <AnimateOnScroll>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-medium text-neutral-600 uppercase tracking-wide">
              Accepting New Ventures
            </span>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll style={{ animationDelay: '100ms' }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-neutral-900 leading-[0.95] mb-10">
            Scaling Business
            <br />
            <span className="text-neutral-400">Through Design.</span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll style={{ animationDelay: '200ms' }}>
          <p className="text-lg md:text-xl text-neutral-500 font-light max-w-2xl leading-relaxed mb-12">
            Ngazi Digital Lab utilizes modern technology to create unique, custom, user-centered
            designs for digital products. We offer branding, design, and web & mobile development
            services to help businesses scale online.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll style={{ animationDelay: '300ms' }} className="flex items-center gap-6">
          <Button
            asChild
            className="shiny-btn px-8 py-3.5 rounded-lg text-xs font-semibold tracking-widest uppercase"
          >
            <Link href="/#services">
              View Capabilities
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </Button>
          <Link
            href="/#work"
            className="text-xs font-medium text-neutral-500 hover:text-neutral-900 underline underline-offset-4"
          >
            Read Case Studies
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
