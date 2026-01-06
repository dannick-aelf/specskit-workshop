'use client';

import { ReactNode } from 'react';

interface KeyPointProps {
  icon?: string;
  title: string;
  description?: string;
  delay?: number;
}

export function KeyPoint({ icon, title, description, delay = 0 }: KeyPointProps) {
  return (
    <div
      className="rounded-card bg-surface border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
      style={{ animationDelay: `${delay}ms` }}
    >
      {icon && (
        <div className="text-3xl mb-3 animate-bounce-in" style={{ animationDelay: `${delay}ms` }}>
          {icon}
        </div>
      )}
      <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-sm md:text-base text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

