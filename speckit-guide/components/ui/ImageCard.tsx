import Image from 'next/image';

interface ImageCardProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export function ImageCard({ src, alt, caption, className = '' }: ImageCardProps) {
  return (
    <div className={`rounded-card bg-surface border border-border overflow-hidden ${className}`}>
      <div className="relative w-full bg-background inline-block">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          className="w-full h-auto object-contain block"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
      </div>
      {caption && (
        <div className="px-3 py-2 border-t border-border">
          <p className="text-xs text-text-secondary">{caption}</p>
        </div>
      )}
    </div>
  );
}

