import Cta from '@/components/landing/cta';
import Faq from '@/components/landing/faq';
import Hero from '@/components/landing/hero';
import Marquee from '@/components/landing/marquee';
import Process from '@/components/landing/process';
import Services from '@/components/landing/services';
import Testimonials from '@/components/landing/testimonials';
import Work from '@/components/landing/work';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Process />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
