'use client';

import Link from 'next/link';
import { ArrowUpRight, Code2, Sparkles, Crown } from 'lucide-react';
import { BRANDON_CARRANZA, DUVAN_ALTAMAR } from '@/lib/content';

export default function AlliesPage() {
  return (
    <main className="px-6 py-20 lg:px-16">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">[ 06.1 ] GexStudio Team</p>
      <h1 className="mt-5 font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">Mentores y aliados</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Personas que diseñan, desarrollan y ayudan a hacer realidad el ecosistema de Gex Club.</p>

      <section className="mt-12 grid gap-6">
        <Link href="/aliados/duvan-altamar" className="group relative overflow-hidden border border-primary/40 bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary lg:p-10">
          <div
            className="absolute inset-0 opacity-70 transition-opacity duration-500 group-hover:opacity-90"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 15% 20%, rgba(0,139,254,0.5), transparent 42%),
                radial-gradient(ellipse at 85% 10%, rgba(139,92,246,0.45), transparent 45%),
                radial-gradient(ellipse at 75% 95%, rgba(168,85,247,0.4), transparent 48%),
                radial-gradient(ellipse at 30% 100%, rgba(0,180,255,0.35), transparent 42%),
                radial-gradient(ellipse at 55% 55%, rgba(56,189,248,0.12), transparent 35%)
              `,
            }}
          />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
          <div className="relative flex h-full flex-col justify-between gap-12">
            <div>
              <div className="flex items-center gap-3">
                <Crown className="h-8 w-8 text-primary" />
                <span className="font-mono text-[10px] uppercase tracking-widest border border-primary/50 bg-primary/10 px-2 py-0.5 text-primary">Fundador</span>
              </div>
              <p className="mt-8 font-mono text-xs uppercase tracking-widest text-primary">{DUVAN_ALTAMAR.role}</p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight">{DUVAN_ALTAMAR.name}</h2>
              <p className="mt-3 max-w-xl text-muted-foreground">Creador del ecosistema Gex Club y del equipo GexStudio Team. Diseñó y desarrolló la terminal GEX_OS, y lidera la visión técnica y de comunidad del club.</p>
            </div>
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">Ver perfil y proyectos <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
          </div>
        </Link>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_.85fr]">
          <Link href="/aliados/brandon-carranza" className="group relative overflow-hidden border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/70 lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(22,135,255,.25),transparent_30%),radial-gradient(circle_at_75%_80%,rgba(119,71,255,.22),transparent_35%)] opacity-60" />
            <div className="relative flex h-full flex-col justify-between gap-12">
              <div>
                <Code2 className="h-8 w-8 text-primary" />
                <p className="mt-8 font-mono text-xs uppercase tracking-widest text-primary">Desarrollador</p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight">{BRANDON_CARRANZA.name}</h2>
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
        </div>
      </section>
    </main>
  );
}