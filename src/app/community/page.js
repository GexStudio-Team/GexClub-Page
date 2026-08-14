'use client';
import { useEffect, useState } from 'react';
import SectionHeader from '@/components/layout/SectionHeader';
import MemberGrid from '@/components/community/MemberGrid';
import JoinFlow from '@/components/community/JoinFlow';

const TESTIMONIALS = [
  { quote: 'En un año pasé de no saber programar a ganar mi primer hackathon. Gex cambió mi forma de ver el futuro.', name: 'Valentina R.', role: 'Programadora' },
  { quote: 'Encontré un equipo que toma en serio a los jóvenes. Aquí mi arte vale tanto como mi edad.', name: 'Mateo G.', role: 'Diseñador de Videojuegos' },
  { quote: 'No es un club escolar. Es una comunidad que te empuja a sobresalir sin bajar la línea.', name: 'Camila P.', role: 'Artista' },
];

export default function Community() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/members')
      .then((res) => res.json())
      .then(setMembers)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="px-6 lg:px-16 py-20">
      <SectionHeader
        index="03"
        title="Comunidad"
        subtitle="Una red de nodos jóvenes conectados por el código. Aquí no eres un alumno: eres un miembro."
      />

      <section className="mb-16">
        <div className="grid md:grid-cols-4 gap-px bg-border border border-border">
          {[
            { n: '01', t: 'Mentores de la industria', d: 'Aprende de profesionales que trabajan en producto real.' },
            { n: '02', t: 'Proyectos reales', d: 'Construye software y juegos que se publican, no ejercicios.' },
            { n: '03', t: 'Hackathons y premios', d: 'Compite, gana y demuestra tu talento.' },
            { n: '04', t: 'Red de pares', d: 'Conoce a otros jóvenes con tu misma pasión.' },
          ].map((b) => (
            <div key={b.n} className="bg-background p-6">
              <span className="font-mono text-xs text-primary">{b.n}</span>
              <h3 className="mt-3 font-display font-bold uppercase tracking-tight text-sm">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
          <span>[ 03 ]</span>
          <span className="h-px w-12 bg-primary/40" />
          <span className="text-primary">Miembros activos</span>
        </div>
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-32 bg-background animate-pulse" />
            ))}
          </div>
        ) : (
          <MemberGrid members={members} />
        )}
      </section>

      <section className="mb-20">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
          <span>[ 04 ]</span>
          <span className="h-px w-12 bg-primary/40" />
          <span className="text-primary">Únete al ecosistema</span>
        </div>
        <JoinFlow />
      </section>

      <section>
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
          <span>[ 05 ]</span>
          <span className="h-px w-12 bg-primary/40" />
          <span className="text-primary">Testimonios</span>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-background p-6">
              <span className="text-primary text-2xl font-display">&ldquo;</span>
              <p className="text-sm leading-relaxed -mt-2">{t.quote}</p>
              <div className="mt-4 font-mono text-xs">
                <span className="text-foreground">— {t.name}</span>
                <div className="text-muted-foreground uppercase tracking-widest mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
