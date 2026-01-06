'use client';

interface StatCardProps {
  number: string;
  label: string;
  description?: string;
  delay?: number;
}

export function StatCard({ number, label, description, delay = 0 }: StatCardProps) {
  return (
    <div
      className="text-center rounded-card bg-surface-elevated border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-count-up">
        {number}
      </div>
      <div className="text-base md:text-lg font-semibold text-text-primary mb-1">
        {label}
      </div>
      {description && (
        <div className="text-sm text-text-secondary mt-2">
          {description}
        </div>
      )}
    </div>
  );
}






