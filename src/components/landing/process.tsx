import { CheckCircle } from 'lucide-react';

const principles = ['Agile Development', 'Component-Driven Design', 'Scalable Architecture'];
const steps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    description: 'Understanding business goals and user needs to architect a solid digital foundation.',
  },
  {
    num: '02',
    title: 'Design & Prototype',
    description: 'High-fidelity visuals and interactive prototypes to validate concepts before code.',
  },
  {
    num: '03',
    title: 'Development',
    description: 'Clean, semantic code using modern frameworks like React, Next.js, and Tailwind.',
  },
  {
    num: '04',
    title: 'Launch & Scale',
    description: 'Deployment to edge networks, performance monitoring, and continuous iteration.',
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="max-w-[1400px] mx-auto px-6 py-24 md:py-32 border-b border-neutral-200/60"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div>
          <div className="text-[10px] font-mono uppercase text-neutral-400 mb-4 tracking-widest">
            03 — Methodology
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 mb-6">
            Built to Scale
          </h2>
          <p className="text-sm text-neutral-500 leading-relaxed max-w-xs font-light">
            Our process is rooted in data-driven decision making and rapid iteration, ensuring
            your digital product evolves with your business.
          </p>

          <ul className="mt-8 space-y-4">
            {principles.map((principle, index) => (
              <li key={index} className="flex items-center gap-3 text-sm text-neutral-700">
                <CheckCircle className="text-neutral-400" size={16} /> {principle}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200/60 border border-neutral-200/60">
          {steps.map((step) => (
            <div key={step.num} className="bg-white p-8 hover:bg-neutral-50 transition-colors">
              <div className="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center mb-4 text-neutral-600 font-mono text-xs">
                {step.num}
              </div>
              <h3 className="text-base font-medium text-neutral-900 mb-2">{step.title}</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
