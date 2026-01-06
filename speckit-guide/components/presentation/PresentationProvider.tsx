'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface PresentationContextType {
  currentSlide: number;
  totalSlides: number;
  goToSlide: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
}

const PresentationContext = createContext<PresentationContextType | undefined>(undefined);

export function PresentationProvider({ 
  children, 
  totalSlides 
}: { 
  children: React.ReactNode;
  totalSlides: number;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
      window.history.replaceState(null, '', `#slide-${index}`);
    }
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(totalSlides - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, totalSlides]);

  // Handle hash navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const slideIndex = parseInt(hash.replace('#slide-', ''), 10);
      if (!isNaN(slideIndex) && slideIndex >= 0 && slideIndex < totalSlides) {
        setCurrentSlide(slideIndex);
      }
    }
  }, [totalSlides]);

  return (
    <PresentationContext.Provider
      value={{
        currentSlide,
        totalSlides,
        goToSlide,
        nextSlide,
        prevSlide,
        canGoNext: currentSlide < totalSlides - 1,
        canGoPrev: currentSlide > 0,
      }}
    >
      {children}
    </PresentationContext.Provider>
  );
}

export function usePresentation() {
  const context = useContext(PresentationContext);
  if (context === undefined) {
    throw new Error('usePresentation must be used within a PresentationProvider');
  }
  return context;
}






