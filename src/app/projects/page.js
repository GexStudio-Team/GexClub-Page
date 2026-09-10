'use client';
import { useState } from 'react';
import SectionHeader from '@/components/layout/SectionHeader';
import ProjectCard from '@/components/projects/ProjectCard';
import { COMMUNITY_STATUS, PROJECTS } from '@/lib/content';

const FILTERS = [
  { key: 'todos', label: 'Todos' },
  { key: 'software', label: 'Software' },
  { key: 'videojuego', label: 'Videojuegos' },
  { key: 'comunidad', label: 'Comunidad' },
];

export default function Projects() {
  const [filter, setFilter] = useState('todos');

  const filtered = filter === 'todos' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="px-6 lg:px-16 py-20">
      <SectionHeader index="04" title="Proyectos" subtitle="El vault. La prueba de que la excelencia no es una promesa: es un repositorio." />

      <div
        className="relative border border-border bg-card h-48 md:h-64 mb-16 overflow-hidden flex flex-col justify-center p-8 lg:p-12"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(22, 135, 255, 0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(119, 71, 255, 0.14) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      >
        <div className="gex-glow pointer-events-none absolute right-4 bottom-0 h-36 w-36 md:right-16 md:bottom-2 md:h-52 md:w-52">
          <img src="/brand/gex-mark-dark.png" alt="Isotipo de Gex Club" className="gex-float h-full w-full object-contain mix-blend-screen" />
        </div>
        <div className="font-mono text-xs uppercase tracking-widest text-primary mb-2">// the_vault</div>
        <div className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight text-balance max-w-lg">
          {COMMUNITY_STATUS.projects}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`font-mono text-[11px] uppercase tracking-wider px-3 py-2 border transition-colors ${
              filter === f.key ? 'border-primary text-primary bg-primary/5' : 'border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="border border-border bg-card p-12 text-center font-mono text-sm text-muted-foreground uppercase tracking-wider">
          // sin proyectos en esta categoría
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      )}
    </div>
  );
}
