import { AnimateOnScroll } from '../client/animate-on-scroll';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Alex Rivera',
    role: 'Founder & Lead Designer',
    avatar: '10',
    bio: 'With a decade of experience in user-centric design, Alex leads our creative vision, ensuring every project is both beautiful and functional.',
  },
  {
    name: 'Jordan Smith',
    role: 'Lead Developer',
    avatar: '20',
    bio: 'Jordan is the architect of our robust and scalable digital solutions, mastering everything from front-end frameworks to complex backend integrations.',
  },
  {
    name: 'Casey Morgan',
    role: 'Project Strategist',
    avatar: '30',
    bio: 'Casey bridges the gap between client goals and technical execution, ensuring projects are delivered on time, on budget, and beyond expectations.',
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="max-w-[1400px] mx-auto px-6 py-24 md:py-32 border-b border-neutral-200/60"
    >
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="text-[10px] font-mono uppercase text-neutral-400 mb-4 tracking-widest">
          04 — The Team
        </div>
        <h2 className="text-4xl font-medium tracking-tight text-neutral-900">
          Meet the Architects
        </h2>
        <p className="mt-4 text-lg text-neutral-500 font-light">
          A small, dedicated team of designers, developers, and strategists passionate about building great products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <AnimateOnScroll
            key={index}
            style={{ animationDelay: `${index * 100}ms` }}
            className="bg-white p-8 rounded-xl border border-neutral-200/80 hover:shadow-xl hover:shadow-neutral-100 transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative w-24 h-24 rounded-full mb-6">
                <Image
                  src={`https://picsum.photos/seed/${member.avatar}/200/200`}
                  alt={`Avatar of ${member.name}`}
                  width={96}
                  height={96}
                  className="rounded-full"
                  data-ai-hint="professional headshot"
                />
                 <div className="absolute inset-0 rounded-full border border-neutral-200/50"></div>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-1">{member.name}</h3>
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">{member.role}</p>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">{member.bio}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
