import Link from 'next/link';
import { Button } from '../ui/button';
import { AnimateOnScroll } from '../client/animate-on-scroll';
import { GlowingBorderCard } from '../ui/glowing-border-card';

export default function Footer() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <AnimateOnScroll>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-neutral-900 leading-[0.95] mb-10">
                Ready to scale?
              </h2>
              <p className="text-neutral-500 font-light text-lg mb-12 max-w-2xl mx-auto">
                Join forward-thinking companies transforming their digital presence with Ngazi
                Digital Lab.
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
      <footer className="bg-neutral-900 text-neutral-400 font-light relative z-20">
        <div className="max-w-[1400px] mx-auto px-6 pt-24 pb-12">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-bold leading-none tracking-tighter text-neutral-800/50 select-none -ml-1 md:-ml-4">
              NGAZI
            </h2>
            <div className="text-left md:text-right">
              <p className="text-sm text-neutral-500 mb-2">Have a project in mind?</p>
              <a
                href="mailto:hello@ngazi.lab"
                className="text-2xl md:text-3xl font-medium text-white hover:text-neutral-300 transition-colors"
              >
                hello@ngazi.lab
              </a>
              <p className="text-sm text-neutral-500 mt-2">Nairobi • Remote Worldwide</p>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-neutral-800"></div>

          {/* Bottom Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 text-sm">
            {/* Sitemap */}
            <div>
              <h4 className="text-[10px] font-mono uppercase text-neutral-500 mb-4 tracking-widest">
                Sitemap
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/#work" className="hover:text-white transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#process" className="hover:text-white transition-colors">
                    Process
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Agency
                  </Link>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-[10px] font-mono uppercase text-neutral-500 mb-4 tracking-widest">
                Socials
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Dribbble
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-[10px] font-mono uppercase text-neutral-500 mb-4 tracking-widest">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Copyright */}
            <div className="col-span-2 md:col-span-1 md:text-right self-end">
              <p className="text-[10px] text-neutral-600 uppercase tracking-wide">
                © 2024 Ngazi Digital Lab.
                <br />
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
