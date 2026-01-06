'use client';

import { ReactNode } from 'react';

interface HookSlideProps {
  hook: string;
  content?: ReactNode;
  emphasis?: string;
}

export function HookSlide({ hook, content, emphasis }: HookSlideProps) {
  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <p className="text-2xl md:text-3xl text-text-secondary leading-relaxed animate-fade-in">
          {hook}
        </p>
        {emphasis && (
          <p className="text-4xl md:text-5xl font-semibold text-primary animate-scale-in">
            {emphasis}
          </p>
        )}
      </div>
      {content && (
        <div className="animate-fade-in-delay">
          {content}
        </div>
      )}
    </div>
  );
}

