'use client';

import { useState } from 'react';
import { FAQItem } from '@/types/content';

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(index);
    } else if (e.key === 'Escape' && openIndex === index) {
      setOpenIndex(null);
    }
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-card bg-surface border border-border overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-full px-4 py-3 text-left flex items-center justify-between gap-4 hover:bg-surface-elevated transition-colors focus:outline-none"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="text-sm font-medium text-text-primary pr-4 break-words">
              {item.question}
            </span>
            <svg
              className={`w-5 h-5 flex-shrink-0 text-text-secondary transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
                  {openIndex === index && (
                    <div
                      id={`faq-answer-${index}`}
                      className="px-4 pt-2 pb-3 text-sm text-text-secondary leading-relaxed break-words"
                    >
                      {item.answer}
                    </div>
                  )}
        </div>
      ))}
    </div>
  );
}

