import { RolesContent } from '@/types/content';
import { SectionCard } from './SectionCard';

interface RolesSectionProps {
  content: RolesContent;
}

export function RolesSection({ content }: RolesSectionProps) {
  return (
    <section id="who-does-what" className="mb-12 md:mb-16">
      <SectionCard>
        <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4">
          {content.title}
        </h2>
        <p className="text-base text-text-secondary mb-6 leading-relaxed">
          {content.description}
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {content.roles.map((role, index) => (
            <div
              key={index}
              className="rounded-card bg-surface-elevated border border-border p-4"
            >
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                {role.name}
              </h3>
              <ul className="space-y-2">
                {role.responsibilities.map((responsibility, rIndex) => (
                  <li
                    key={rIndex}
                    className="text-sm text-text-secondary flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionCard>
    </section>
  );
}






