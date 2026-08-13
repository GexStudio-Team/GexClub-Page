'use client';
import { useState } from 'react';
import { Code2, Gamepad2, Network, Trophy, ArrowUpRight } from 'lucide-react';

const PILLARS = [
  { code: 'P.01', title: 'Desarrollo Tecnológico', desc: 'Construimos software real: web, móvil, IA y herramientas que resuelven problemas del mundo.', icon: Code2, accent: '#CCFF00' },
  { code: 'P.02', title: 'Desarrollo de Videojuegos', desc: 'Diseño, arte y programación de juegos. Del concepto al playable, con motor propio y pipelines profesionales.', icon: Gamepad2, accent: '#00E5FF' },
  { code: 'P.03', title: 'Comunidad Tecnológica', desc: 'Una red de jóvenes talentos que aprenden, colaboran y crecen en un entorno seguro y exigente.', icon: Network, accent: '#FF6B6B' },
  { code: 'P.04', title: 'Hackathons', desc: 'Competiciones de alto impacto donde el talento se transforma en soluciones bajo presión de tiempo.', icon: Trophy, accent: '#FFB800' },
];

export default function PillarsGrid() {
  const [active, setActive] = useState(null);
  return (
    <section className="px-6 lg:px-16 py-24 border-b border-border">
      <div className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-widest text-primary mb-10">
        <span>[ 02 ]</span>
        <span className="h-px w-12 bg-primary/40" />
        <span className="text-muted-foreground">Los 4 pilares del ecosistema</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
        {PILLARS.map((p) => {
          const isActive = active === p.code;
          return (
            <div
              key={p.code}
              onMouseEnter={() => setActive(p.code)}
              onMouseLeave={() => setActive(null)}
              className="group relative bg-background p-8 min-h-[320px] flex flex-col transition-colors duration-300 hover:bg-card cursor-default overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] transition-all duration-300" style={{ backgroundColor: isActive ? p.accent : 'transparent' }} />
              <div className="flex items-center justify-between">
                <p.icon className="w-7 h-7 transition-colors duration-300" style={{ color: isActive ? p.accent : 'currentColor' }} />
                <span className="font-mono text-[11px] tracking-widest text-muted-foreground">{p.code}</span>
              </div>
              <h3 className="mt-8 font-display text-xl font-bold uppercase tracking-tight leading-tight">{p.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
              <div className="mt-6 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider transition-all duration-300" style={{ color: isActive ? p.accent : 'var(--muted-foreground)' }}>
                Explorar <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
