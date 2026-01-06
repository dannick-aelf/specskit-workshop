import { ReactNode } from 'react';

interface CalloutProps {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'accent';
}

export function Callout({ children, variant = 'default' }: CalloutProps) {
  const variantClasses = {
    default: 'bg-surface border-border',
    elevated: 'bg-surface-elevated border-border',
    accent: 'bg-surface border-primary/30',
  };

  return (
    <div className={`rounded-card border p-4 md:p-5 ${variantClasses[variant]}`}>
      {children}
    </div>
  );
}






