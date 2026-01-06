'use client';

import { usePresentation } from './PresentationProvider';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageToggle } from '@/components/ui/LanguageToggle';

export function NavigationControls() {
  const { nextSlide, prevSlide, canGoNext, canGoPrev, currentSlide, totalSlides, goToSlide } = usePresentation();

  return (
    <>
      {/* Theme and Language Toggles */}
      <div className="fixed top-6 right-6 z-50 flex gap-2">
        <ThemeToggle />
        <LanguageToggle />
      </div>

      {/* Slide Indicator with Navigation Arrows */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2">
          {/* Left Navigation Button */}
          <button
            onClick={prevSlide}
            disabled={!canGoPrev}
            className={`h-8 w-8 rounded-full bg-surface border border-border flex items-center justify-center transition-all duration-300 ${
              canGoPrev
                ? 'text-text-primary hover:bg-surface-elevated hover:border-primary hover:scale-110 active:scale-95 cursor-pointer opacity-100 shadow-lg hover:shadow-primary/20'
                : 'text-text-tertiary cursor-not-allowed opacity-40'
            } focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background`}
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slide Indicator */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface/90 backdrop-blur-sm border border-border shadow-lg h-8">
            <span className="text-xs text-text-secondary font-medium">
              {currentSlide + 1} / {totalSlides}
            </span>
            <div className="w-px h-4 bg-border" />
            <div className="flex gap-1.5">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary w-6 h-1.5'
                      : 'bg-text-tertiary hover:bg-text-secondary w-1.5 h-1.5'
                  } hover:scale-125 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={nextSlide}
            disabled={!canGoNext}
            className={`h-8 w-8 rounded-full bg-surface border border-border flex items-center justify-center transition-all duration-300 ${
              canGoNext
                ? 'text-text-primary hover:bg-surface-elevated hover:border-primary hover:scale-110 active:scale-95 cursor-pointer opacity-100 shadow-lg hover:shadow-primary/20'
                : 'text-text-tertiary cursor-not-allowed opacity-40'
            } focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background`}
            aria-label="Next slide"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

