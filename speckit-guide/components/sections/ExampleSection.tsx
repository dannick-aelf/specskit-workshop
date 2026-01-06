import { ExampleContent } from '@/types/content';
import { SectionCard } from './SectionCard';

interface ExampleSectionProps {
  content: ExampleContent;
}

export function ExampleSection({ content }: ExampleSectionProps) {
  return (
    <section id="example" className="mb-12 md:mb-16">
      <SectionCard>
        <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4">
          {content.title}
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            {content.featureName}
          </h3>
          <p className="text-base text-text-secondary leading-relaxed">
            {content.description}
          </p>
        </div>
        <div className="space-y-6">
          {content.steps.map((step, index) => (
            <div
              key={index}
              className="border-l-2 border-primary pl-6 py-2"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-primary">
                  Step {step.stepNumber}: {step.stepName}
                </span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.content}
              </p>
            </div>
          ))}
        </div>
      </SectionCard>
    </section>
  );
}






