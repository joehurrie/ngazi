import Link from 'next/link';
import { Button } from '../ui/button';

export default function Header() {
  return (
    <div className="fixed z-40 top-0 left-0 w-full backdrop-blur-md bg-white/80 border-b border-neutral-200/60">
      <nav className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-5 h-5 bg-neutral-900 flex items-center justify-center rounded-sm">
            <span className="text-white font-bold text-[10px]">N</span>
          </div>
          <span className="text-xs font-semibold tracking-tight uppercase text-neutral-900">
            Ngazi Digital Lab
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#services"
            className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/#work"
            className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            Work
          </Link>
          <Link
            href="/#process"
            className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            Process
          </Link>
        </div>

        <Button asChild className="px-5 py-2 text-[11px] font-medium rounded-full tracking-wide" size="sm">
          <Link href="/contact">Start Project</Link>
        </Button>
      </nav>
    </div>
  );
}
