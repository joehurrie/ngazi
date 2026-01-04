import { Check, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Design Sprint',
    description: 'Quick turnaround for specific tasks.',
    price: '$3,500',
    period: '/project',
    features: ['Branding Refresh', 'Landing Page Design', '1 Week Delivery'],
    featured: false,
    cta: 'Inquire',
  },
  {
    name: 'Growth Partner',
    description: 'Dedicated team for scaling businesses.',
    price: '$6,500',
    period: '/month',
    features: [
      'Unlimited Design Requests',
      'Web & Mobile Development',
      'Priority Support',
      'Monthly Strategy Call',
    ],
    featured: true,
    cta: 'Start Subscription',
  },
  {
    name: 'Custom Product',
    description: 'Full-cycle product development.',
    price: 'Custom',
    period: '/quote',
    features: ['End-to-End Development', 'Complex Integrations', 'QA & Testing'],
    featured: false,
    cta: 'Contact Sales',
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-neutral-50/50 py-24 md:py-32 border-b border-neutral-200/60"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <div className="text-[10px] font-mono uppercase text-neutral-400 mb-4 tracking-widest">
              04 — Engagement
            </div>
            <h2 className="text-4xl font-medium tracking-tight text-neutral-900">
              Partnership Models
            </h2>
          </div>

          <div className="flex items-center gap-1 mt-6 md:mt-0 bg-white p-1 rounded-full border border-neutral-200">
            <Button size="sm" className="px-4 py-1.5 rounded-full text-[10px] font-medium tracking-wide shadow-sm h-auto">
              Monthly
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="px-4 py-1.5 rounded-full text-neutral-500 text-[10px] font-medium tracking-wide hover:text-neutral-900 h-auto"
            >
              Quarterly
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                'p-8 rounded-xl border flex flex-col justify-between relative overflow-hidden transition-all duration-300',
                plan.featured
                  ? 'bg-neutral-900 border-neutral-900 text-white transform md:-translate-y-4 shadow-xl'
                  : 'bg-white border-neutral-200 hover:shadow-lg hover:shadow-neutral-200/50'
              )}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Zap size={64} />
                </div>
              )}
              <div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p
                    className={cn(
                      'text-xs mt-1',
                      plan.featured ? 'text-neutral-400' : 'text-neutral-500'
                    )}
                  >
                    {plan.description}
                  </p>
                </div>
                <div className="my-8">
                  <span className="text-3xl font-semibold tracking-tight">{plan.price}</span>
                  <span
                    className={cn(
                      'text-xs font-medium',
                      plan.featured ? 'text-neutral-400' : 'text-neutral-400'
                    )}
                  >
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-xs">
                      <Check
                        className={cn(plan.featured ? 'text-white' : 'text-neutral-900', 'mt-0.5')}
                        size={12}
                      />
                      <span className={plan.featured ? 'text-neutral-300' : 'text-neutral-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                asChild
                variant={plan.featured ? 'secondary' : 'outline'}
                className={cn('w-full text-xs font-medium', !plan.featured && "text-neutral-600 hover:text-neutral-900 hover:border-neutral-900")}
              >
                <Link href="/contact">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
