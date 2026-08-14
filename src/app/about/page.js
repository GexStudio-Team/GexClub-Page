import SectionHeader from '@/components/layout/SectionHeader';
import { Cpu, Users2, Rocket, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Sobre Nosotros',
  description:
    'Gex Club es un ecosistema tecnológico juvenil donde jóvenes de 14 a 18 años desarrollan software, crean videojuegos y compiten en hackathons.',
};

const VALUES = [
  { icon: Cpu, title: 'Excelencia técnica', desc: 'No basta con que funcione: tiene que ser excelente.' },
  { icon: Users2, title: 'Colaboración real', desc: 'El trabajo en equipo es el multiplicador de talento.' },
  { icon: Rocket, title: 'Construir, no consumir', desc: 'Pasamos de usuarios a creadores de tecnología.' },
  { icon: ShieldCheck, title: 'Entorno seguro', desc: 'Un espacio juvenil supervisado y profesional.' },
];

export default function About() {
  return (
    <div className="px-6 lg:px-16 py-20">
      <SectionHeader index="01" title="Sobre Nosotros" subtitle="Gex Club — Global Ecosystem for eXcellence. Más que un club: una fundición de talento." />

      <section className="grid lg:grid-cols-2 border border-border mb-24">
        <div
          className="relative border-b lg:border-b-0 lg:border-r border-border bg-card min-h-[40vh] overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(163, 230, 53, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(163, 230, 53, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/60 to-primary/10" />
          <div className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-widest text-primary">// since_2024</div>
        </div>
        <div className="p-8 lg:p-12 space-y-6">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">&lt;who_we_are&gt;</div>
          <p className="text-lg leading-relaxed">
            Somos un ecosistema tecnológico juvenil donde jóvenes de 14 a 18 años
            desarrollan software, crean videojuegos y compiten en hackathons. No somos
            un club escolar: somos una comunidad que trata el talento joven con el
            estándar de la industria.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            GEX nació de una convicción simple: el talento no tiene edad. Conectamos a
            adolescentes apasionados por la tecnología en un entorno donde pueden
            equivocarse, aprender rápido y construir cosas que importan.
          </p>
          <div className="grid grid-cols-3 gap-px bg-border border border-border mt-6">
            {[{ n: '128', l: 'Miembros' }, { n: '34', l: 'Proyectos' }, { n: '12', l: 'Hackathons' }].map((s) => (
              <div key={s.l} className="bg-background p-4 text-center">
                <div className="font-display text-2xl font-bold text-primary">{s.n}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-24">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary mb-8">
          <span>[ 02 ]</span>
          <span className="h-px w-12 bg-primary/40" />
          <span className="text-muted-foreground">Nuestra filosofía</span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {VALUES.map((v) => (
            <div key={v.title} className="bg-background p-8 group hover:bg-card transition-colors">
              <v.icon className="w-7 h-7 text-primary mb-6" />
              <h3 className="font-display text-base font-bold uppercase tracking-tight">{v.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border border-border bg-card p-8 lg:p-12">
        <div className="font-mono text-xs uppercase tracking-widest text-primary mb-6">&lt;manifesto&gt;</div>
        <blockquote className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight leading-tight text-balance">
          Building the future together. <span className="text-primary">Create.</span>{' '}
          <span className="text-primary">Learn.</span> <span className="text-primary">Collaborate.</span>{' '}
          <span className="text-primary">Excel.</span>
        </blockquote>
        <p className="mt-6 text-muted-foreground max-w-2xl">
          Estas no son palabras de marketing. Son el contrato que firmamos cada vez que
          abrimos un editor de código.
        </p>
      </section>
    </div>
  );
}
