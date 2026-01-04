import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 font-light">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-[10rem] font-bold leading-none tracking-tighter text-white">
              NGAZI
            </h2>
            <p className="font-mono text-sm uppercase tracking-widest text-neutral-400 mt-4">
              nairobi.remote
            </p>
            <p className="text-neutral-400 max-w-sm mt-8 leading-relaxed">
              We are a design and development partner for ambitious companies. We build digital
              products that are not only beautiful but also solve real problems and drive business
              growth.
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-medium text-white tracking-tight leading-tight">
                Have a project in mind? Let's build the future, together.
              </h3>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 text-2xl font-medium text-white mt-8 hover:text-neutral-300 transition-colors"
              >
                Get in touch
                <ArrowRight
                  size={28}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 text-sm">
              <div>
                <h4 className="text-[10px] font-mono uppercase text-neutral-500 mb-4 tracking-widest">
                  Studio
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/#work" className="hover:text-white">
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services" className="hover:text-white">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/#team" className="hover:text-white">
                      Team
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] font-mono uppercase text-neutral-500 mb-4 tracking-widest">
                  Connect
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="hover:text-white">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-500 uppercase tracking-wide">
          <p>© 2024 Ngazi Digital Lab. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-neutral-300">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-neutral-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
