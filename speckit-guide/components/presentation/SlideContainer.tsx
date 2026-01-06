'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { usePresentation } from './PresentationProvider';

interface SlideContainerProps {
  slideIndex: number;
  children: ReactNode;
  className?: string;
}

export function SlideContainer({ slideIndex, children, className = '' }: SlideContainerProps) {
  const { currentSlide } = usePresentation();
  const slideRef = useRef<HTMLDivElement>(null);
  const isActive = currentSlide === slideIndex;

  useEffect(() => {
    if (isActive && slideRef.current) {
      slideRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [isActive]);

  return (
    <div
      ref={slideRef}
      id={`slide-${slideIndex}`}
      className={`min-h-screen flex items-start justify-center px-4 md:px-8 py-12 md:py-16 transition-all duration-500 ${
        isActive 
          ? 'opacity-100 translate-y-0 pointer-events-auto relative' 
          : 'opacity-0 translate-y-10 pointer-events-none absolute inset-0'
      } ${className}`}
      style={{ display: isActive ? 'flex' : 'none' }}
    >
      <div className="w-full max-w-5xl animate-fade-in">
        {children}
      </div>
    </div>
  );
}

