
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 font-light relative z-20">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Top section */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 items-end py-16 md:py-24 overflow-hidden gap-8 md:gap-0">
          <div>
            <h2 className="text-[8rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] font-bold tracking-tighter text-white/5 leading-none select-none">
              NGAZI
            </h2>
          </div>

          <div className="relative z-10 w-full flex flex-col items-start">
            <div className="text-left">
              <a
                href="mailto:hello@ngazi.lab"
                className="text-2xl md:text-3xl lg:text-4xl text-white hover:text-neutral-300 transition-colors"
              >
                hello@ngazi.lab
              </a>
              <p className="mt-2 text-sm text-neutral-500">Nairobi • Remote Worldwide</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800"></div>

        {/* Bottom section */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 py-16">
          <div className="col-span-12 md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[10px] font-mono uppercase text-neutral-500 mb-4 tracking-widest">
                Sitemap
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
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
                  <Link href="/pricing" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-mono uppercase text-neutral-500 mb-4 tracking-widest">
                Socials
              </h4>
              <ul className="space-y-3 text-sm">
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

            <div>
              <h4 className="text-[10px] font-mono uppercase text-neutral-500 mb-4 tracking-widest">
                Legal
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 flex md:justify-end items-end text-left md:text-right pt-8 md:pt-0">
            <p className="text-[10px] font-mono uppercase text-neutral-600 tracking-widest leading-relaxed">
              © {new Date().getFullYear()} Ngazi Digital Lab.
              <br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
