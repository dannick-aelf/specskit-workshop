'use client';

import { useState } from 'react';
import { EngineersContent } from '@/types/content';
import { ImageCard } from '@/components/ui/ImageCard';

interface EngineersAccordionProps {
  content: EngineersContent;
}

export function EngineersAccordion({ content }: EngineersAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div className="rounded-card bg-surface border border-border overflow-hidden">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          // Remove focus after click to prevent focus ring
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
          }
        }}
        onKeyDown={handleKeyDown}
        className="w-full px-4 py-3 text-left flex items-center justify-between gap-4 hover:bg-surface-elevated transition-colors focus:outline-none focus-visible:ring-0"
        aria-expanded={isOpen}
        aria-controls="engineers-content"
      >
        <span className="text-sm font-medium text-text-primary">
          {content.title}
        </span>
        <svg
          className={`w-5 h-5 flex-shrink-0 text-text-secondary transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div id="engineers-content" className="px-4 pb-4 space-y-6 border-t-0">
          <p className="text-sm text-text-secondary leading-relaxed">
            {content.description}
          </p>
          {content.sections.map((section, index) => (
            <div key={index} className="space-y-3">
              <h4 className="text-sm font-semibold text-text-primary">
                {section.title}
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {section.content}
              </p>
              {section.commands && section.commands.length > 0 && (
                <div className="rounded-input bg-background border border-border p-3 font-mono text-xs">
                  {section.commands.map((command, cmdIndex) => (
                    <div key={cmdIndex} className="text-text-primary">
                      {command}
                    </div>
                  ))}
                </div>
              )}
              {section.images && section.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {section.images.map((image, imgIndex) => (
                    <ImageCard
                      key={imgIndex}
                      src={image.src}
                      alt={image.alt}
                      caption={image.caption}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

