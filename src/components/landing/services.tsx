
import { Layers, MonitorSmartphone, PenTool, Smartphone, Globe, Palette, Zap, Layout, Code } from 'lucide-react';

const services = [
  {
    icon: MonitorSmartphone,
    title: 'Web & Mobile Development',
    description: 'Custom digital products built for scale using React, Flutter, and Next.js.',
  },
  {
    icon: PenTool,
    title: 'Branding & Identity',
    description: 'Forging unique visual systems that resonate with your core audience and retain users.',
  },
  {
    icon: Layers,
    title: 'User-Centered Design',
    description: 'UI/UX frameworks designed to convert visitors into loyal customers.',
  },
];

const wallCardsCol1 = [
  { icon: Smartphone, text: "Mobile Apps" },
  { icon: Globe, text: "Web Platforms" },
  { icon: Palette, text: "Design Systems" },
];

const wallCardsCol2 = [
  { icon: Zap, text: "Performance" },
  { icon: Layout, text: "Interfaces" },
  { icon: Code, text: "Development" },
];

const WallCard = ({ icon: Icon, text }: { icon: React.ElementType, text: string }) => (
  <div className="wall-card w-64 h-48 rounded-xl p-6 flex flex-col justify-between">
    <Icon size={32} className="text-neutral-800" strokeWidth={1.5} />
    <span className="text-xs font-mono text-neutral-500">{text}</span>
  </div>
);

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-neutral-200/60 bg-neutral-50/30"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:min-h-[800px]">
        <div className="w-full lg:w-1/2 px-6 py-20 lg:py-32 flex flex-col justify-center relative z-10 lg:bg-gradient-to-r from-white via-white to-transparent">
          <div className="text-[10px] font-mono uppercase text-neutral-400 mb-6 tracking-widest">
            01 — Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 mb-8 leading-tight">
            Modern Tech Stack
            <br />
            <span className="text-neutral-400">Custom Solutions</span>
          </h2>

          <div className="space-y-10 max-w-md">
            {services.map((service, index) => (
              <div key={index} className="flex gap-5 group">
                <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center shadow-sm group-hover:border-neutral-400 transition-colors">
                  <service.icon className="text-neutral-700" size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-900 mb-1">{service.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 lg:absolute lg:right-0 lg:top-0 lg:bottom-0">
          <div className="relative h-[600px] lg:h-full overflow-hidden pointer-events-none lg:pointer-events-auto mt-12 lg:mt-0">
            <div className="wall-container w-full h-full absolute top-[-10%] sm:right-[-40%] md:right-[-30%] lg:right-[-20%] scale-90 sm:scale-100">
              <div className="wall-grid flex gap-6">
                <div className="wall-column-up flex flex-col gap-6">
                  {[...wallCardsCol1, ...wallCardsCol1.slice(0, 2)].map((card, index) => (
                    <WallCard key={`col1-${index}`} icon={card.icon} text={card.text} />
                  ))}
                </div>
                <div className="wall-column-down flex flex-col gap-6 pt-20">
                  {[...wallCardsCol2, ...wallCardsCol2.slice(0, 2)].map((card, index) => (
                    <WallCard key={`col2-${index}`} icon={card.icon} text={card.text} />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
