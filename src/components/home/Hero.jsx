'use client';

import Link from 'next/link';
import { ArrowRight, Terminal } from 'lucide-react';
import { HACKATHON_FORM_URL } from '@/lib/content';
import GexMark3D from '@/components/brand/GexMark3D';

export default function Hero() {
  return (
    <section className="relative grid lg:grid-cols-2 border-b border-border lg:min-h-[88vh]">
      <div className="flex flex-col justify-center px-6 lg:px-16 py-12 lg:py-20">
        <div className="font-mono text-xs uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse" />
          Global Ecosystem for eXcellence
        </div>
        <h1 className="font-display font-bold uppercase tracking-tighter text-4xl sm:text-7xl lg:text-8xl leading-[0.88]">
          Build the<br />
          <span className="text-primary">future</span><br />
          together.
        </h1>
        <p className="mt-8 max-w-md text-lg text-muted-foreground leading-relaxed">
          Comunidad de desarrollo de software, videojuegos y hackathons para personas
          de todas las edades. Create. Learn. Collaborate. Excel.
        </p>
        <div className="mt-8 lg:mt-10 flex flex-wrap gap-4">
          <a href={HACKATHON_FORM_URL} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 font-mono text-sm uppercase tracking-wider font-bold hover:bg-primary/90 transition-colors">
            Inscríbete al hackathon
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <Link href="/hackathons" className="inline-flex items-center gap-2 border border-border px-6 py-3.5 font-mono text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors">
            <Terminal className="w-4 h-4" /> Ver hackathons
          </Link>
        </div>
      </div>

      <div className="relative lg:border-l border-border bg-card overflow-hidden min-h-[32vh] sm:min-h-[42vh] lg:min-h-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(22, 135, 255, 0.14) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(119, 71, 255, 0.14) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/60 to-primary/10" />
        <div className="absolute inset-0">
          <GexMark3D className="w-full h-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-border px-2 py-1 bg-background/60 backdrop-blur">
          &lt;GEX_CORE /&gt;
        </div>
        <div className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-widest text-primary">
          // rendering future
        </div>
      </div>
    </section>
  );
}
