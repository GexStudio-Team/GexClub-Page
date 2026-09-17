'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CtaBand() {
  return (
    <section className="px-6 lg:px-16 py-12 lg:py-24 border-b border-border bg-card">
      <div className="border border-border p-8 md:p-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-blueprint opacity-40 pointer-events-none" />
        <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-8">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">&lt;initialize /&gt;</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-balance">
              ¿Listo para construir el futuro?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl">
              Únete a una comunidad donde tu código importa desde el primer commit.
            </p>
          </div>
          <Link href="/community" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-mono text-sm uppercase tracking-wider font-bold hover:bg-primary/90 transition-colors justify-self-start">
            Únete ahora
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
