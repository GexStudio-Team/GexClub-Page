import Image from 'next/image';
import { Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '@/lib/gallery';

export default function GallerySection() {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
        <span>[ 06 ]</span>
        <span className="h-px w-12 bg-primary/40" />
        <span className="text-primary">Galería</span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-[4/3] bg-card overflow-hidden"
          >
            {/* Placeholder de marca: se reemplaza cuando exista item.image */}
            {item.image ? (
              <Image
                src={item.image}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            ) : (
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(163, 230, 53, 0.12) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(163, 230, 53, 0.12) 1px, transparent 1px)
                  `,
                  backgroundSize: '28px 28px',
                }}
              />
            )}

            {/* Overlay siempre visible como referencia; foto real la reemplaza */}
            {!item.image && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                <Camera className="w-6 h-6 text-primary/70" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{item.label}</span>
              </div>
            )}

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="font-mono text-[11px] uppercase tracking-widest text-white/90">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}