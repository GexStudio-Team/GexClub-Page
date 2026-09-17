'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { COMMUNITY_PULSE } from '@/lib/content';

const VISIBLE_TESTIMONIALS = 3;
const ROTATION_MS = 8000;

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setStartIndex((current) => (current + VISIBLE_TESTIMONIALS) % COMMUNITY_PULSE.length);
    }, ROTATION_MS);

    return () => window.clearInterval(interval);
  }, []);

  const visibleTestimonials = Array.from(
    { length: VISIBLE_TESTIMONIALS },
    (_, index) => COMMUNITY_PULSE[(startIndex + index) % COMMUNITY_PULSE.length],
  );

  return (
    <div aria-live="polite">
      <div className="grid gap-6 md:grid-cols-3">
        {visibleTestimonials.map((item, index) => (
          <article
            key={`${startIndex}-${item.title}`}
            className="fade-up group relative flex flex-col overflow-hidden border border-border/70 bg-card/60 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_20px_50px_-24px_rgba(22,135,255,0.5)]"
            style={{ animationDelay: `${index * 140}ms` }}
          >
            <span className="absolute right-5 top-5 font-display text-4xl font-bold text-primary/10 transition-colors duration-500 group-hover:text-primary/30">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary">&lt;pulse /&gt;</span>
            <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-tight">{item.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-all duration-500 group-hover:gap-3 group-hover:text-primary">
              parte de la comunidad <ArrowUpRight className="h-3 w-3" />
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}