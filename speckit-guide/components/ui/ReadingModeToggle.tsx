'use client';

import { useReadingMode } from '@/app/reading-mode-provider';

export function ReadingModeToggle() {
  const { isReadingMode, toggleReadingMode } = useReadingMode();

  return (
    <button
      onClick={toggleReadingMode}
      className="px-3 py-2 rounded-button text-sm text-text-secondary hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      aria-label={isReadingMode ? 'Disable reading mode' : 'Enable reading mode'}
    >
      {isReadingMode ? '📖' : '📄'} {isReadingMode ? 'Reading' : 'Normal'}
    </button>
  );
}






