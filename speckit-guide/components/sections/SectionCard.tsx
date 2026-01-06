import { ReactNode } from 'react';

interface SectionCardProps {
  children: ReactNode;
  className?: string;
}

export function SectionCard({ children, className = '' }: SectionCardProps) {
  return (
    <div className={`rounded-card bg-surface border border-border p-4 md:p-6 ${className}`}>
      {children}
    </div>
  );
}






