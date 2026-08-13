'use client';
import { useMemo, useState } from 'react';
import { SiGithub } from '@icons-pack/react-simple-icons';

const ROLE_LABELS = {
  programador: 'Programador',
  disenador: 'Diseñador',
  artista: 'Artista',
  creador_de_historias: 'Creador de Historias',
  disenador_de_sonido: 'Diseñador de Sonido',
};
const ROLE_COLORS = {
  programador: '#CCFF00',
  disenador: '#00E5FF',
  artista: '#FF6B6B',
  creador_de_historias: '#FFB800',
  disenador_de_sonido: '#B388FF',
};
const FILTERS = [{ key: 'todos', label: 'Todos' }, ...Object.entries(ROLE_LABELS).map(([key, label]) => ({ key, label }))];

export default function MemberGrid({ members }) {
  const [filter, setFilter] = useState('todos');
  const filtered = useMemo(() => (filter === 'todos' ? members : members.filter((m) => m.role === filter)), [members, filter]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
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
          // sin miembros en este rol
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border">
          {filtered.map((m) => {
            const color = ROLE_COLORS[m.role] || '#CCFF00';
            return (
              <div key={m.id} className="group bg-background p-6 hover:bg-card transition-colors" style={{ borderLeft: `2px solid ${color}` }}>
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg border" style={{ borderColor: color, color }}>
                    {m.name?.charAt(0)?.toUpperCase() || '?'}
                  </div>
                  {m.github && (
                    <a href={`https://github.com/${m.github}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <SiGithub className="w-4 h-4" color="currentColor" />
                    </a>
                  )}
                </div>
                <h3 className="mt-4 font-display font-bold uppercase tracking-tight text-sm">{m.name}</h3>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest" style={{ color }}>{ROLE_LABELS[m.role] || m.role}</div>
                {m.bio && <p className="mt-3 text-xs text-muted-foreground leading-relaxed line-clamp-2">{m.bio}</p>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}