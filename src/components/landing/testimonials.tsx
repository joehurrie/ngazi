import { Star } from 'lucide-react';
import Image from 'next/image';
import { AnimateOnScroll } from '../client/animate-on-scroll';

const testimonials = [
  {
    name: 'Sarah L.',
    company: 'Startup Founder',
    avatar: '45',
    text: 'Ngazi Digital Lab transformed our vision into a stunning, functional app that our users love. Their attention to detail and commitment to our goals were unparalleled. We couldn\'t have asked for a better partner.',
    rating: 5,
  },
  {
    name: 'Michael B.',
    company: 'Marketing Director, Acme Corp',
    avatar: '55',
    text: 'The team\'s design sense is incredible. They revitalized our brand and delivered a website that not only looks amazing but also performs flawlessly. Our conversion rates have seen a significant boost since the launch.',
    rating: 5,
  },
  {
    name: 'Emily C.',
    company: 'E-commerce Manager',
    avatar: '65',
    text: "Working with them was a seamless experience. They are true professionals—responsive, insightful, and incredibly talented. They delivered a product that exceeded all our expectations on a tight deadline.",
    rating: 5,
  },
];

const Rating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5 text-yellow-500">
    {Array.from({ length: rating }).map((_, i) => (
      <Star key={i} size={14} fill="currentColor" />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-neutral-50/50 py-24 md:py-32 border-b border-neutral-200/60">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
           <div className="text-[10px] font-mono uppercase text-neutral-400 mb-4 tracking-widest">
            05 — Testimonials
          </div>
          <h2 className="text-4xl font-medium tracking-tight text-neutral-900">
            Trusted by Innovators
          </h2>
          <p className="mt-4 text-lg text-neutral-500 font-light">
            Hear what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll
              key={index}
              style={{ animationDelay: `${index * 100}ms` }}
              className="bg-white p-8 rounded-xl border border-neutral-200/80 flex flex-col justify-between"
            >
              <div>
                <Rating rating={testimonial.rating} />
                <p className="text-neutral-600 my-6 font-light leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={`https://picsum.photos/seed/${testimonial.avatar}/100/100`}
                  alt={`Avatar of ${testimonial.name}`}
                  width={40}
                  height={40}
                  className="rounded-full"
                  data-ai-hint="person face"
                />
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">{testimonial.name}</h4>
                  <p className="text-xs text-neutral-500">{testimonial.company}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
