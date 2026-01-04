import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GlowingBorderCard } from '../ui/glowing-border-card';

export default function Work() {
  return (
    <section id="work" className="max-w-[1400px] mx-auto px-6 py-24 md:py-32 border-b border-neutral-200/60">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <div className="text-[10px] font-mono uppercase text-neutral-400 mb-4 tracking-widest">
            02 — Selected Works
          </div>
          <h2 className="text-4xl font-medium tracking-tight text-neutral-900">
            Featured Projects
          </h2>
        </div>
        <Link
          href="/contact"
          className="hidden md:flex text-xs font-medium text-neutral-500 items-center gap-2 hover:text-neutral-900 transition-colors"
        >
          View Archive <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GlowingBorderCard className="p-8 flex flex-col justify-between h-[500px]">
          <div className="mb-8 relative rounded-lg overflow-hidden h-full bg-neutral-100 group">
            <div className="absolute inset-0 bg-neutral-200"></div>
            <div className="absolute top-10 left-10 right-10 bottom-0 bg-white rounded-t-xl shadow-lg transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500 p-6">
              <div className="flex gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-neutral-200"></div>
                <div className="w-2 h-2 rounded-full bg-neutral-200"></div>
              </div>
              <div className="h-2 w-1/3 bg-neutral-100 rounded mb-4"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-20 bg-neutral-50 rounded"></div>
                <div className="h-20 bg-neutral-50 rounded"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-medium text-neutral-900 tracking-tight">
                Fintech Dashboard
              </h3>
              <span className="px-2 py-1 bg-neutral-100 text-[10px] font-medium text-neutral-500 rounded uppercase tracking-wider">
                Web App
              </span>
            </div>
            <p className="text-sm text-neutral-500 font-light max-w-sm">
              A comprehensive data visualization platform for high-frequency trading analytics.
            </p>
          </div>
        </GlowingBorderCard>

        <div className="border border-neutral-200 rounded-xl p-8 flex flex-col justify-between h-[500px] hover:border-neutral-300 transition-colors">
          <div className="mb-8 relative rounded-lg overflow-hidden h-full bg-neutral-100 group">
            <div className="absolute inset-0 bg-neutral-200"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-80 bg-neutral-900 rounded-[2rem] shadow-2xl p-2 group-hover:scale-105 transition-transform duration-500">
              <div className="bg-neutral-800 w-full h-full rounded-[1.5rem] overflow-hidden relative">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-neutral-900 rounded-b-lg"></div>
                <div className="p-6 mt-8 space-y-3">
                  <div className="w-8 h-8 rounded-full bg-white/10"></div>
                  <div className="w-20 h-2 rounded bg-white/10"></div>
                  <div className="w-full h-32 rounded bg-white/5 mt-4"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-medium text-neutral-900 tracking-tight">
                E-Commerce Mobile App
              </h3>
              <span className="px-2 py-1 bg-neutral-100 text-[10px] font-medium text-neutral-500 rounded uppercase tracking-wider">
                Mobile Dev
              </span>
            </div>
            <p className="text-sm text-neutral-500 font-light max-w-sm">
              Custom Flutter application increasing user retention by 40% through intuitive UX.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
