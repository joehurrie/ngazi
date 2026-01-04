import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200/60 py-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 items-start">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-5 h-5 bg-black flex items-center justify-center rounded-sm">
                  <div className="w-2 h-2 bg-white"></div>
              </div>
              <span className="text-xs font-semibold tracking-wide text-neutral-900 uppercase">Ngazi Digital Lab</span>
            </Link>
            <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
              Designing the digital future. We are a design agency creating unique, user-centered digital products.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-[10px] font-mono uppercase text-neutral-400 mb-4 tracking-widest">
                Studio
              </h4>
              <ul className="space-y-2 text-xs font-medium text-neutral-600">
                <li><Link href="/#work" className="hover:text-neutral-900">Work</Link></li>
                <li><Link href="/#services" className="hover:text-neutral-900">Services</Link></li>
                <li><Link href="/#process" className="hover:text-neutral-900">Process</Link></li>
                <li><Link href="/#team" className="hover:text-neutral-900">Team</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-mono uppercase text-neutral-400 mb-4 tracking-widest">
                Engage
              </h4>
              <ul className="space-y-2 text-xs font-medium text-neutral-600">
                <li><Link href="/#pricing" className="hover:text-neutral-900">Pricing</Link></li>
                <li><Link href="/contact" className="hover:text-neutral-900">Start a Project</Link></li>
                 <li><Link href="/contact" className="hover:text-neutral-900">Book a Call</Link></li>
              </ul>
            </div>
             <div>
              <h4 className="text-[10px] font-mono uppercase text-neutral-400 mb-4 tracking-widest">
                Connect
              </h4>
              <ul className="space-y-2 text-xs font-medium text-neutral-600">
                <li><a href="#" className="hover:text-neutral-900">Twitter</a></li>
                <li><a href="#" className="hover:text-neutral-900">LinkedIn</a></li>
                <li><a href="#" className="hover:text-neutral-900">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-400 uppercase tracking-wide">
          <p>© 2024 Ngazi Digital Lab. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-neutral-600">Privacy Policy</Link>
            <Link href="#" className="hover:text-neutral-600">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
