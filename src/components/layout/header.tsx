import Link from 'next/link';
import { Button } from '../ui/button';

export default function Header() {
  return (
    <div className="fixed z-40 top-0 left-0 w-full backdrop-blur-md bg-white/80 border-b border-neutral-200/60">
      <nav className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-5 h-5 bg-neutral-900 flex items-center justify-center rounded-sm">
            <div className="w-2 h-2 bg-white"></div>
          </div>
          <span className="text-xs font-semibold tracking-wide text-neutral-900 uppercase">
            Ngazi Digital Lab
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1 bg-neutral-100/50 border border-neutral-200 rounded-full p-1 shadow-sm">
          <Link
            href="/#services"
            className="px-4 py-1.5 rounded-full text-neutral-500 hover:text-neutral-900 text-[11px] font-medium transition-colors tracking-wide"
          >
            Services
          </Link>
          <Link
            href="/#work"
            className="px-4 py-1.5 rounded-full text-neutral-500 hover:text-neutral-900 text-[11px] font-medium transition-colors tracking-wide"
          >
            Work
          </Link>
           <Link
            href="/#process"
            className="px-4 py-1.5 rounded-full text-neutral-500 hover:text-neutral-900 text-[11px] font-medium transition-colors tracking-wide"
          >
            Process
          </Link>
          <Link
            href="/contact"
            className="px-4 py-1.5 rounded-full text-neutral-500 hover:text-neutral-900 text-[11px] font-medium transition-colors tracking-wide"
          >
            Contact
          </Link>
        </div>

        <Button asChild variant="ghost" size="sm" className="gap-2 text-[10px] font-mono text-neutral-500 hover:text-black uppercase tracking-wider transition-colors">
          <Link href="/contact">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            Open for Projects
          </Link>
        </Button>
      </nav>
    </div>
  );
}
