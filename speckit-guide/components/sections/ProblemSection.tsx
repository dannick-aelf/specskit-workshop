import { ProblemContent } from '@/types/content';
import { SectionCard } from './SectionCard';
import { Callout } from '@/components/ui/Callout';

interface ProblemSectionProps {
  content: ProblemContent;
}

export function ProblemSection({ content }: ProblemSectionProps) {
  return (
    <section id="what-is-it" className="mb-12 md:mb-16">
      <SectionCard>
        <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-6">
          {content.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Callout variant="default">
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              {content.before.title}
            </h3>
            <p className="text-sm text-text-secondary mb-4 leading-relaxed">
              {content.before.description}
            </p>
            <ul className="space-y-2">
              {content.before.points.map((point, index) => (
                <li key={index} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-text-tertiary">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Callout>
          <Callout variant="accent">
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              {content.after.title}
            </h3>
            <p className="text-sm text-text-secondary mb-4 leading-relaxed">
              {content.after.description}
            </p>
            <ul className="space-y-2">
              {content.after.points.map((point, index) => (
                <li key={index} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Callout>
        </div>
      </SectionCard>
    </section>
  );
}






