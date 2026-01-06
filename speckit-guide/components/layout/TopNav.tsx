'use client';

import { useEffect, useState } from 'react';
import { ReadingModeToggle } from '@/components/ui/ReadingModeToggle';

const navItems = [
  { label: 'What is it?', href: '#what-is-it' },
  { label: 'Why it matters', href: '#why-it-matters' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Example', href: '#example' },
  { label: 'Who does what', href: '#who-does-what' },
  { label: 'Misconceptions', href: '#misconceptions' },
  { label: 'Prerequisites', href: '#prerequisites' },
  { label: 'Get started', href: '#get-started' },
  { label: 'FAQ', href: '#faq' },
];

export function TopNav() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 80;
      const targetPosition = (target as HTMLElement).offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-semibold text-text-primary">SpecKit</h1>
            <span className="text-xs text-text-tertiary">Beta</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm transition-colors ${
                  activeSection === item.href
                    ? 'text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                } focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded`}
              >
                {item.label}
              </a>
            ))}
            <ReadingModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ReadingModeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block py-2 text-sm transition-colors ${
                  activeSection === item.href
                    ? 'text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                } focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

