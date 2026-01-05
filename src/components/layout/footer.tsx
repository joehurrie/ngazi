import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 font-light">
      <div className="max-w-[1400px] mx-auto px-6 pt-24 pb-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <h2 className="text-[10rem] font-bold leading-none tracking-tighter text-neutral-800/50 select-none -ml-4">
            NGAZI
          </h2>
          <div className="text-left md:text-right">
            <p className="text-sm text-neutral-500 mb-2">Have a project in mind?</p>
            <a
              href="mailto:hello@ngazi.lab"
              className="text-3xl font-medium text-white hover:text-neutral-300 transition-colors"
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
              <li><Link href="/#work" className="hover:text-white transition-colors">Work</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/#process" className="hover:text-white transition-colors">Process</Link></li>
               <li><Link href="/contact" className="hover:text-white transition-colors">Agency</Link></li>
            </ul>
          </div>

          {/* Socials */}
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

          {/* Legal */}
          <div>
            <h4 className="text-[10px] font-mono uppercase text-neutral-500 mb-4 tracking-widest">
              Legal
            </h4>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          {/* Copyright */}
          <div className="col-span-2 md:col-span-1 md:text-right self-end">
             <p className="text-[10px] text-neutral-600 uppercase tracking-wide">
              © 2024 Ngazi Digital Lab.
              <br/>
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
