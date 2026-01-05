import Faq from '@/components/landing/faq';
import Hero from '@/components/landing/hero';
import Marquee from '@/components/landing/marquee';
import Process from '@/components/landing/process';
import Services from '@/components/landing/services';
import Testimonials from '@/components/landing/testimonials';
import Work from '@/components/landing/work';
import { AnimateOnScroll } from '@/components/client/animate-on-scroll';

export default function Home() {
  return (
    <>
      <Hero />
      <AnimateOnScroll>
        <Marquee />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Services />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Work />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Process />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Testimonials />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Faq />
      </AnimateOnScroll>
    </>
  );
}
