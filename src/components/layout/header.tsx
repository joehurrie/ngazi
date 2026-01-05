'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { useState }from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "/#services", label: "Services" },
    { href: "/#work", label: "Work" },
    { href: "/#process", label: "Process" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed z-50 top-0 left-0 w-full backdrop-blur-md bg-white/80 border-b border-neutral-200/60">
        <nav className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-5 h-5 bg-neutral-900 flex items-center justify-center rounded-sm">
              <div className="w-2 h-2 bg-white"></div>
            </div>
            <span className="text-xs font-semibold tracking-wide text-neutral-900 uppercase">
              Ngazi Digital Lab
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 bg-neutral-100/50 border border-neutral-200 rounded-full p-1 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-neutral-500 hover:text-neutral-900 text-[11px] font-medium transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Button asChild variant="ghost" size="sm" className="hidden md:flex gap-2 text-[10px] font-mono text-neutral-500 hover:text-black uppercase tracking-wider transition-colors">
            <Link href="/contact">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              Open for Projects
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
              <Menu size={20} />
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[100] bg-black/50 transition-opacity duration-300 ease-in-out md:hidden',
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={cn(
            'fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out',
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-neutral-200">
               <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                <div className="w-5 h-5 bg-neutral-900 flex items-center justify-center rounded-sm">
                  <div className="w-2 h-2 bg-white"></div>
                </div>
              </Link>
               <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X size={24} />
              </Button>
            </div>
            <nav className="flex flex-col gap-4 p-8 text-left">
               {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-medium text-neutral-800 hover:text-neutral-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
