import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is the typical timeline for a project?',
    answer:
      "A typical project timeline varies based on complexity. A standard website might take 4-6 weeks, while a full-featured mobile app could be 3-6 months. We prioritize a discovery phase to give you a more precise estimate.",
  },
  {
    question: 'How do you handle project management and communication?',
    answer:
      "We believe in transparent and frequent communication. You'll have a dedicated project manager and access to a shared Slack channel. We hold weekly or bi-weekly syncs to review progress and gather feedback, ensuring the project stays on track.",
  },
  {
    question: 'What is your revision and feedback process like?',
    answer:
      'Our process is collaborative. During the design phase, we allow for unlimited revisions until you are satisfied. Once development begins, we work in sprints, with a review and feedback session at the end of each sprint to make sure we are aligned.',
  },
  {
    question: "Do you offer support and maintenance after the project is launched?",
    answer:
      "Yes, we offer ongoing support and maintenance packages to ensure your digital product remains secure, up-to-date, and performs optimally. We can tailor a package to your specific needs, whether it's for regular updates, bug fixes, or new feature development.",
  },
  {
    question: 'Can you work with my existing brand guidelines?',
    answer:
      'Absolutely. We can work with your existing brand guidelines to ensure consistency across all your digital platforms. If you don\'t have any, our branding and identity services can help you create a powerful and memorable brand from the ground up.',
  },
  {
    question: 'How do we get started?',
    answer:
      "The first step is to book a free consultation call with us. We'll discuss your project goals, challenges, and vision. From there, we'll draft a detailed proposal outlining the scope, timeline, and cost. Once you're happy with the proposal, we'll kick off the project.",
  },
];

export default function Faq() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[10px] font-mono uppercase text-neutral-400 mb-4 tracking-widest">
            06 — FAQs
          </div>
          <h2 className="text-4xl font-medium tracking-tight text-neutral-900">
            Common Questions
          </h2>
          <p className="mt-4 text-lg text-neutral-500 font-light">
            Here are some of the most common questions we get from clients.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left font-medium text-base hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-500 text-sm font-light leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
