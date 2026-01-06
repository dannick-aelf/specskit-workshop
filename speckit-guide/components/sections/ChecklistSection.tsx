import { ChecklistContent } from '@/types/content';
import { SectionCard } from './SectionCard';
import { Checklist } from '@/components/ui/Checklist';

interface ChecklistSectionProps {
  content: ChecklistContent;
}

export function ChecklistSection({ content }: ChecklistSectionProps) {
  return (
    <section id="get-started" className="mb-12 md:mb-16">
      <SectionCard>
        <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4">
          {content.title}
        </h2>
        <p className="text-base text-text-secondary mb-6 leading-relaxed">
          {content.description}
        </p>
        <Checklist items={content.items} />
      </SectionCard>
    </section>
  );
}






