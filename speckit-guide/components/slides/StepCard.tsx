'use client';

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  delay?: number;
}

export function StepCard({ stepNumber, title, description, delay = 0 }: StepCardProps) {
  return (
    <div
      className="rounded-card bg-surface border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center">
          {stepNumber}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
          <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}






