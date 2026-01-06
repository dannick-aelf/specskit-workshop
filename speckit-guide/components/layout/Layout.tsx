import { ReactNode } from 'react';
import { TopNav } from './TopNav';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main className="container mx-auto px-4 md:px-6 py-8 md:py-12 max-w-4xl">
        {children}
      </main>
    </div>
  );
}






