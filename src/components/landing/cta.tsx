import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Cta() {
  return (
    <section className="py-24 md:py-32 bg-neutral-50/50">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
           <div className="text-[10px] font-mono uppercase text-neutral-400 mb-4 tracking-widest">
            06 — Let's Connect
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-neutral-500 font-light">
            Have a project in mind? We&apos;d love to hear about it.
            <br />
            Let&apos;s team up to create something incredible.
          </p>
          <Button asChild className="mt-10 shiny-btn px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase">
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
