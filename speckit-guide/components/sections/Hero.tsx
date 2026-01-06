import { HeroContent } from '@/types/content';
import { SectionCard } from './SectionCard';

interface HeroProps {
  content: HeroContent;
}

export function Hero({ content }: HeroProps) {
  return (
    <section id="hero" className="mb-12 md:mb-16">
      <SectionCard className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary mb-4">
          {content.title}
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
          {content.definition}
        </p>
        {content.ctaText && content.ctaLink && (
          <a
            href={content.ctaLink}
            className="inline-block px-6 py-3 rounded-button bg-primary text-white font-medium text-sm hover:bg-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            {content.ctaText}
          </a>
        )}
      </SectionCard>
    </section>
  );
}






