import React from 'react';

// Helper function to render translated text with markdown support
export function renderTranslatedText(text: string): React.ReactNode {
  // Replace **text** with <strong>text</strong>
  const parts = text.split(/(\*\*.*?\*\*)/g);
  
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const content = part.slice(2, -2);
      return <strong key={index} className="text-text-primary">{content}</strong>;
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

// Helper function to render translated HTML (for dangerouslySetInnerHTML)
export function renderTranslatedHTML(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-text-primary">$1</strong>')
    .replace(/<code>(.*?)<\/code>/g, '<code class="bg-background px-1.5 py-0.5 rounded font-mono text-xs">$1</code>');
}






