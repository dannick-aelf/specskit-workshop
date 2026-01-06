import { WorkflowContent } from '@/types/content';
import { SectionCard } from './SectionCard';
import { StepTimeline } from '@/components/ui/StepTimeline';

interface WorkflowSectionProps {
  content: WorkflowContent;
}

export function WorkflowSection({ content }: WorkflowSectionProps) {
  return (
    <section id="how-it-works" className="mb-12 md:mb-16">
      <SectionCard>
        <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4">
          {content.title}
        </h2>
        <p className="text-base text-text-secondary mb-8 leading-relaxed">
          {content.description}
        </p>
        <StepTimeline steps={content.steps} />
      </SectionCard>
    </section>
  );
}






