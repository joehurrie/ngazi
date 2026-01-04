import Cta from '@/components/landing/cta';
import Hero from '@/components/landing/hero';
import Marquee from '@/components/landing/marquee';
import Pricing from '@/components/landing/pricing';
import Process from '@/components/landing/process';
import Services from '@/components/landing/services';
import Work from '@/components/landing/work';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Process />
      <Pricing />
      <Cta />
    </>
  );
}
