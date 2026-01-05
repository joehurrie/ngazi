import Link from 'next/link';
import { Button } from '../ui/button';
import { GlowingBorderCard } from '../ui/glowing-border-card';
import { AnimateOnScroll } from '../client/animate-on-scroll';

export default function Cta() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-32">
      <div className="rounded-2xl p-12 md:p-24 text-center relative overflow-hidden isolate">
        <div className="relative z-10 max-w-2xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-neutral-900 mb-8">
              Ready to scale?
            </h2>
            <p className="text-neutral-500 font-light text-lg mb-10">
              Join forward-thinking companies transforming their digital presence with Ngazi Digital
              Lab.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll style={{ animationDelay: '100ms' }}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <GlowingBorderCard animationDirection="clockwise" className="rounded-lg">
                <Button asChild size="lg" className="w-full shiny-btn">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </GlowingBorderCard>
              <Button
                asChild
                size="lg"
                className="px-8 py-4 text-xs font-semibold rounded-lg tracking-widest uppercase"
                variant="outline"
              >
                <Link href="/contact">Book a Call</Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
