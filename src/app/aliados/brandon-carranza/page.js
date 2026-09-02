'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Link2, Mail, Terminal } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { BRANDON_CARRANZA, BRANDON_TIMELINE } from '@/lib/content';

export default function BrandonCarranzaPage() {
  return (
    <main className="px-6 py-20 lg:px-16">
      <Link href="/aliados" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary transition-transform hover:-translate-x-1"><ArrowLeft className="h-4 w-4" /> Volver a mentores y aliados</Link>

      <section className="mt-8 overflow-hidden border border-border bg-card">
        <div className="relative overflow-hidden p-8 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(22,135,255,.25),transparent_28%),radial-gradient(circle_at_72%_90%,rgba(119,71,255,.25),transparent_34%)]" />
          <div className="relative max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">// GexStudio Team · perfil</p>
            <h1 className="mt-5 font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">{BRANDON_CARRANZA.name}</h1>
            <p className="mt-5 text-lg text-muted-foreground">{BRANDON_CARRANZA.role}. Construye productos que cruzan inteligencia artificial, educación tecnológica y experiencias de videojuego.</p>
          </div>
        </div>

        <div className="grid gap-px bg-border lg:grid-cols-[1.2fr_.8fr]">
          <section className="bg-background p-8 lg:p-12">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary"><Terminal className="h-4 w-4" /> Actividad pública en GitHub</div>
            <ol className="mt-8 space-y-8 border-l border-primary/40 pl-6">
              {BRANDON_TIMELINE.map((item) => (
                <li key={item.url} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary">{item.date}</p>
                  <h2 className="mt-2 font-display text-xl font-bold uppercase tracking-tight">{item.title}</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                  <a href={item.url} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-primary hover:underline">Ver commit <ArrowUpRight className="h-3.5 w-3.5" /></a>
                </li>
              ))}
            </ol>
          </section>

          <aside className="bg-card p-8 lg:p-12">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Conectar</p>
            <div className="mt-6 space-y-4 font-mono text-xs uppercase tracking-wider">
              <a href={BRANDON_CARRANZA.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-primary"><SiGithub className="h-4 w-4" /> GitHub <ArrowUpRight className="ml-auto h-3.5 w-3.5" /></a>
              <a href={BRANDON_CARRANZA.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-primary"><Link2 className="h-4 w-4" /> LinkedIn <ArrowUpRight className="ml-auto h-3.5 w-3.5" /></a>
              <a href={`mailto:${BRANDON_CARRANZA.email}`} className="flex items-center gap-2 transition-colors hover:text-primary"><Mail className="h-4 w-4" /> Correo <ArrowUpRight className="ml-auto h-3.5 w-3.5" /></a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
