'use client';

import { useEffect, useState } from 'react';
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
    <div className="grid md:grid-cols-3 gap-px bg-border border border-border" aria-live="polite">
      {visibleTestimonials.map((item) => (
        <article key={`${startIndex}-${item.title}`} className="bg-background p-6 transition-colors duration-500">
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary">// Gex Club</span>
          <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-tight">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
        </article>
      ))}
    </div>
  );
}
