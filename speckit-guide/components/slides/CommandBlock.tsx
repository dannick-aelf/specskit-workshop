'use client';

import { useState } from 'react';
import { useTranslation } from '@/lib/useTranslation';

interface CommandBlockProps {
  command: string;
  description?: string;
  output?: string;
  copyable?: boolean;
}

export function CommandBlock({ command, description, output, copyable = true }: CommandBlockProps) {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-2">
      {description && (
        <p className="text-sm text-text-secondary mb-2">{description}</p>
      )}
      <div className="relative rounded-input bg-background border border-border overflow-hidden group">
        <pre className="p-4 font-mono text-sm text-text-primary overflow-x-auto whitespace-pre-wrap break-words">
          <code>{command}</code>
        </pre>
        {copyable && (
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 px-3 py-1.5 text-xs bg-surface border border-border rounded hover:bg-surface-elevated hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            aria-label={t('copyCommand')}
          >
            {copied ? t('copiedButton') : t('copyButton')}
          </button>
        )}
      </div>
      {output && (
        <div className="rounded-input bg-surface border border-border p-4">
          <p className="text-xs text-text-tertiary mb-2">{t('expectedOutput')}</p>
          <pre className="font-mono text-xs text-text-secondary whitespace-pre-wrap">{output}</pre>
        </div>
      )}
    </div>
  );
}

