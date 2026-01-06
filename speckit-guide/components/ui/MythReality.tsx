import { MisconceptionItem } from '@/types/content';

interface MythRealityProps {
  item: MisconceptionItem;
}

export function MythReality({ item }: MythRealityProps) {
  return (
    <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
      {/* Myth */}
      <div className="rounded-card bg-surface border border-border/50 p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">❌</span>
          <h4 className="text-sm font-semibold text-text-secondary">Myth</h4>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">{item.myth}</p>
      </div>

      {/* Reality */}
      <div className="rounded-card bg-surface-elevated border border-primary/30 p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">✅</span>
          <h4 className="text-sm font-semibold text-primary">Reality</h4>
        </div>
        <p className="text-sm text-text-primary leading-relaxed">{item.reality}</p>
      </div>
    </div>
  );
}






