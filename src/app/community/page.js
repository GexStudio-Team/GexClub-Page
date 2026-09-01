import SectionHeader from '@/components/layout/SectionHeader';
import CommunityCta from '@/components/community/CommunityCta';
import Testimonials from '@/components/community/Testimonials';
import { COMMUNITY_STATUS } from '@/lib/content';

export default function Community() {
  return (
    <div className="px-6 lg:px-16 py-20">
      <SectionHeader
        index="03"
        title="Comunidad"
        subtitle="Un espacio abierto para crear, aprender y conectar. Aquí no eres un espectador: eres parte de la comunidad."
      />

      <section className="mb-16">
        <div className="grid md:grid-cols-4 gap-px bg-border border border-border">
          {[
            { n: '01', t: 'Aprendizaje compartido', d: 'Construyamos las primeras actividades con curiosidad y práctica.' },
            { n: '02', t: COMMUNITY_STATUS.projects, d: 'Software, videojuegos e iniciativas de comunidad listos para tomar forma.' },
            { n: '03', t: 'Primer hackathon', d: 'Un reto para idear y crear soluciones con otros jóvenes creadores.' },
            { n: '04', t: 'Red de pares', d: 'Conoce personas con intereses parecidos y construye conexiones.' },
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
          <span className="text-primary">Una comunidad para crear</span>
        </div>
        <div className="grid sm:grid-cols-3 gap-px border border-border bg-border">
          {[
            ['Aprende', 'Talleres, mentorías y práctica con proyectos reales.'],
            ['Colabora', 'Conoce personas con intereses distintos y arma equipo.'],
            ['Comparte', 'Presenta tus ideas, recibe feedback y mejora creando.'],
          ].map(([title, description]) => (
            <div key={title} className="bg-background p-6">
              <h3 className="font-display text-lg font-bold uppercase tracking-tight">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
          <span>[ 04 ]</span>
          <span className="h-px w-12 bg-primary/40" />
          <span className="text-primary">Únete al ecosistema</span>
        </div>
        <CommunityCta />
      </section>

      <section>
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
          <span>[ 05 ]</span>
          <span className="h-px w-12 bg-primary/40" />
          <span className="text-primary">Lo que queremos construir</span>
        </div>
        <Testimonials />
      </section>
    </div>
  );
}
