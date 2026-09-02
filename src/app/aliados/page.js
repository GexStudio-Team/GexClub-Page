'use client';

import Link from 'next/link';
import { ArrowUpRight, Code2, Sparkles } from 'lucide-react';
import { BRANDON_CARRANZA } from '@/lib/content';

export default function AlliesPage() {
  return (
    <main className="px-6 py-20 lg:px-16">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">[ 06.1 ] GexStudio Team</p>
      <h1 className="mt-5 font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">Mentores y aliados</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Personas que diseñan, desarrollan y ayudan a hacer realidad el ecosistema de Gex Club.</p>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1.5fr_.85fr]">
        <Link href="/aliados/brandon-carranza" className="group relative overflow-hidden border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/70 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(22,135,255,.25),transparent_30%),radial-gradient(circle_at_75%_80%,rgba(119,71,255,.22),transparent_35%)] opacity-60" />
          <div className="relative flex h-full flex-col justify-between gap-12">
            <div>
              <Code2 className="h-8 w-8 text-primary" />
              <p className="mt-8 font-mono text-xs uppercase tracking-widest text-primary">Desarrollador</p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight">Brandon Carranza Rangel</h2>
              <p className="mt-3 max-w-xl text-muted-foreground">Desarrollador de GexStudio Team. Trabaja en experiencias con IA, plataformas de aprendizaje y videojuegos con identidad propia.</p>
            </div>
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">Ver perfil y proyectos <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
          </div>
        </Link>

        <div className="relative overflow-hidden border border-dashed border-border bg-background p-8 lg:p-10">
          <Sparkles className="h-7 w-7 text-accent" />
          <p className="mt-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">Próximamente</p>
          <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight">Más personas por venir</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Este espacio crecerá con nuevos desarrolladores, mentores y aliados de GexStudio Team.</p>
        </div>
      </section>
    </main>
  );
}
