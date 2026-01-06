import { MisconceptionsContent } from '@/types/content';
import { SectionCard } from './SectionCard';
import { MythReality } from '@/components/ui/MythReality';

interface MisconceptionsSectionProps {
  content: MisconceptionsContent;
}

export function MisconceptionsSection({ content }: MisconceptionsSectionProps) {
  return (
    <section id="misconceptions" className="mb-12 md:mb-16">
      <SectionCard>
        <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4">
          {content.title}
        </h2>
        <p className="text-base text-text-secondary mb-6 leading-relaxed">
          {content.description}
        </p>
        <div className="space-y-6">
          {content.items.map((item, index) => (
            <MythReality key={index} item={item} />
          ))}
        </div>
      </SectionCard>
    </section>
  );
}






