import { FAQContent } from '@/types/content';
import { SectionCard } from './SectionCard';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

interface FAQSectionProps {
  content: FAQContent;
}

export function FAQSection({ content }: FAQSectionProps) {
  return (
    <section id="faq" className="mb-12 md:mb-16">
      <SectionCard>
        <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4">
          {content.title}
        </h2>
        {content.description && (
          <p className="text-base text-text-secondary mb-6 leading-relaxed">
            {content.description}
          </p>
        )}
        <FAQAccordion items={content.items} />
      </SectionCard>
    </section>
  );
}






