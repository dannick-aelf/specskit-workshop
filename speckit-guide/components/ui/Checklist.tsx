import { ChecklistItem } from '@/types/content';

interface ChecklistProps {
  items: ChecklistItem[];
}

export function Checklist({ items }: ChecklistProps) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-3 p-3 rounded-card bg-surface border border-border"
        >
          <div className="flex-shrink-0 mt-0.5">
            <div className="w-5 h-5 rounded border-2 border-border flex items-center justify-center">
              {item.optional && (
                <span className="text-xs text-text-tertiary">?</span>
              )}
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm text-text-primary leading-relaxed">
              {item.text}
            </p>
            {item.optional && (
              <span className="text-xs text-text-tertiary mt-1 block">(Optional)</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}






