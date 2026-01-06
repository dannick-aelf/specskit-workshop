'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load from localStorage if available
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved && (saved === 'light' || saved === 'dark')) {
      setTheme(saved);
      document.documentElement.classList.toggle('light', saved === 'light');
      document.documentElement.classList.toggle('dark', saved === 'dark');
    } else {
      // Default to dark mode
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    document.documentElement.classList.toggle('light', newTheme === 'light');
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  // Prevent hydration mismatch - render with default theme during SSR
  if (!mounted) {
    return (
      <div className="dark">
        {children}
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return default values during SSR or if not within provider
    return { theme: 'dark' as Theme, toggleTheme: () => {} };
  }
  return context;
}

