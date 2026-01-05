import Link from 'next/link';
import { Button } from '../ui/button';
import { AnimateOnScroll } from '../client/animate-on-scroll';
import { GlowingBorderCard } from '../ui/glowing-border-card';
import { ArrowRight, Twitter, Instagram, Dribbble, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
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
        <div className="max-w-[1400px] mx-auto px-6 py-20">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Left Column: Brand & Subscribe */}
            <div className="md:col-span-5 lg:col-span-4">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-5 h-5 bg-white flex items-center justify-center rounded-sm">
                  <div className="w-2 h-2 bg-neutral-900"></div>
                </div>
                <span className="text-xs font-semibold tracking-wide text-white uppercase">
                  Ngazi Digital Lab
                </span>
              </Link>
              <p className="text-sm text-neutral-500 max-w-xs mb-6">
                A design and development studio building for the next generation of the internet.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-neutral-800 border border-neutral-700 text-white placeholder:text-neutral-500 text-sm rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-neutral-600"
                />
                <Button variant="ghost" size="icon" className="bg-neutral-800 border border-neutral-700 hover:bg-neutral-700">
                  <ArrowRight size={16} />
                </Button>
              </form>
            </div>

            {/* Right Column: Links */}
            <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-[10px] font-mono uppercase text-neutral-500 mb-4 tracking-widest">
                  Sitemap
                </h4>
                <ul className="space-y-3">
                  <li><Link href="/#work" className="hover:text-white transition-colors">Work</Link></li>
                  <li><Link href="/#services" className="hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="/#process" className="hover:text-white transition-colors">Process</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Agency</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] font-mono uppercase text-neutral-500 mb-4 tracking-widest">
                  Socials
                </h4>
                <ul className="space-y-3">
                  <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Dribbble</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] font-mono uppercase text-neutral-500 mb-4 tracking-widest">
                  Connect
                </h4>
                <ul className="space-y-3">
                  <li><a href="mailto:hello@ngazi.lab" className="hover:text-white transition-colors">hello@ngazi.lab</a></li>
                  <li className="text-neutral-500">Nairobi • Remote</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs">
            <p className="text-neutral-500 order-2 sm:order-1 mt-4 sm:mt-0">
              © 2024 Ngazi Digital Lab. All rights reserved.
            </p>
            <div className="flex gap-4 order-1 sm:order-2">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
