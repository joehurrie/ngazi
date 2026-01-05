import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GlowingBorderCard } from '../ui/glowing-border-card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Work() {
  const fintechProjectImage = PlaceHolderImages.find(p => p.id === 'fintech-dashboard');
  const eCommerceProjectImage = PlaceHolderImages.find(p => p.id === 'ecommerce-mobile-app');
  
  const projects = [
    {
      title: 'Fintech Dashboard',
      category: 'Web App',
      description: 'A comprehensive data visualization platform for high-frequency trading analytics.',
      glowing: true,
      animationDirection: 'clockwise',
      imageUrl: fintechProjectImage?.imageUrl,
      imageHint: fintechProjectImage?.imageHint,
    },
    {
      title: 'E-Commerce Mobile App',
      category: 'Mobile Dev',
      description: 'Custom Flutter application increasing user retention by 40% through intuitive UX.',
      glowing: true,
      animationDirection: 'counter-clockwise',
      imageUrl: eCommerceProjectImage?.imageUrl,
      imageHint: eCommerceProjectImage?.imageHint,
    },
  ];

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
        {projects.map((project, index) => (
          <div key={index}>
            <GlowingBorderCard
              animationDirection={project.animationDirection as 'clockwise' | 'counter-clockwise'}
              className="p-8 flex flex-col justify-between shadow-lg shadow-neutral-100/50"
            >
              <div className="mb-8 relative h-[350px] rounded-lg overflow-hidden group bg-neutral-100 flex items-center justify-center">
                {project.imageUrl && (
                   <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      data-ai-hint={project.imageHint}
                   />
                )}
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium text-neutral-900 tracking-tight">
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 bg-neutral-100 text-[10px] font-medium text-neutral-500 rounded uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-neutral-500 font-light max-w-sm">
                  {project.description}
                </p>
              </div>
            </GlowingBorderCard>
          </div>
        ))}
      </div>
    </section>
  );
}
