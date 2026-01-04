import Link from 'next/link';
import { Button } from '../ui/button';

export default function Cta() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-32">
      <div className="bg-neutral-900 rounded-2xl p-12 md:p-24 text-center relative overflow-hidden isolate">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-neutral-500 to-neutral-700 rounded-full blur-[100px]"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-8">
            Ready to scale?
          </h2>
          <p className="text-neutral-400 font-light text-lg mb-10">
            Join forward-thinking companies transforming their digital presence with Ngazi Digital
            Lab.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="px-8 py-4 text-xs font-semibold rounded-lg tracking-widest uppercase"
              variant="secondary"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="px-8 py-4 border-neutral-700 text-white text-xs font-semibold rounded-lg hover:bg-neutral-800 transition-colors tracking-widest uppercase"
              variant="outline"
            >
              <Link href="/contact">Book a Call</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
