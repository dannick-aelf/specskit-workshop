'use client';

import { ReactNode } from 'react';

interface SlideTitleProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
}

export function SlideTitle({ children, subtitle, className = '' }: SlideTitleProps) {
  return (
    <div className={`text-center mb-8 md:mb-12 ${className}`}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-text-primary mb-4 animate-fade-in">
        {children}
      </h1>
      {subtitle && (
        <p className="text-xl md:text-2xl text-text-secondary animate-fade-in-delay">
          {subtitle}
        </p>
      )}
    </div>
  );
}






