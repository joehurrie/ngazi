import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200/60 py-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-4 h-4 bg-neutral-900 rounded-sm"></div>
              <span className="text-sm font-bold tracking-tight uppercase">Ngazi Digital Lab</span>
            </Link>
            <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
              Creating unique, custom, user-centered designs for digital products to help
              businesses scale online.
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <h4 className="text-[10px] font-mono uppercase text-neutral-400 mb-4 tracking-widest">
                Sitemap
              </h4>
              <ul className="space-y-2 text-xs font-medium text-neutral-600">
                <li>
                  <Link href="/#work" className="hover:text-neutral-900">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-neutral-900">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="hover:text-neutral-900">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-neutral-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-mono uppercase text-neutral-400 mb-4 tracking-widest">
                Socials
              </h4>
              <ul className="space-y-2 text-xs font-medium text-neutral-600">
                <li>
                  <a href="#" className="hover:text-neutral-900">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-neutral-900">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-neutral-900">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-400 uppercase tracking-wide">
          <p>© 2024 Ngazi Digital Lab. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-neutral-600">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-neutral-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
