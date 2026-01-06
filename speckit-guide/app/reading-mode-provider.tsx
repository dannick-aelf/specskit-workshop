'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ReadingModeContextType {
  isReadingMode: boolean;
  toggleReadingMode: () => void;
}

const ReadingModeContext = createContext<ReadingModeContextType | undefined>(undefined);

export function ReadingModeProvider({ children }: { children: React.ReactNode }) {
  const [isReadingMode, setIsReadingMode] = useState(false);

  useEffect(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem('reading-mode');
    if (saved === 'true') {
      setIsReadingMode(true);
      document.documentElement.classList.add('reading-mode');
    }
  }, []);

  const toggleReadingMode = () => {
    const newValue = !isReadingMode;
    setIsReadingMode(newValue);
    
    if (newValue) {
      document.documentElement.classList.add('reading-mode');
      localStorage.setItem('reading-mode', 'true');
    } else {
      document.documentElement.classList.remove('reading-mode');
      localStorage.setItem('reading-mode', 'false');
    }
  };

  return (
    <ReadingModeContext.Provider value={{ isReadingMode, toggleReadingMode }}>
      {children}
    </ReadingModeContext.Provider>
  );
}

export function useReadingMode() {
  const context = useContext(ReadingModeContext);
  if (context === undefined) {
    throw new Error('useReadingMode must be used within a ReadingModeProvider');
  }
  return context;
}






