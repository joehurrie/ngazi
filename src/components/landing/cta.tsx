import Link from 'next/link';
import { Button } from '../ui/button';
import { AnimateOnScroll } from '../client/animate-on-scroll';
import { GlowingBorderCard } from '../ui/glowing-border-card';

export default function Cta() {
  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-neutral-900 leading-[0.95] mb-10">
              Ready to scale?
            </h2>
            <p className="text-neutral-500 font-light text-lg mb-12 max-w-2xl mx-auto">
              Join forward-thinking companies transforming their digital presence with Ngazi Digital
              Lab.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll style={{ animationDelay: '100ms' }}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <GlowingBorderCard animationDirection="clockwise">
                <Button asChild size="lg" className="shiny-btn">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </GlowingBorderCard>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-neutral-300 hover:border-neutral-900 hover:text-neutral-900 text-neutral-600"
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
