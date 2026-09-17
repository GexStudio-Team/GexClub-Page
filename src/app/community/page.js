import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Rocket } from 'lucide-react';
import SectionHeader from '@/components/layout/SectionHeader';
import CommunityCta from '@/components/community/CommunityCta';
import Testimonials from '@/components/community/Testimonials';
import VideoLoop from '@/components/ui/VideoLoop';
import AuroraWave from '@/components/ui/AuroraWave';
import { COMMUNITY_STATUS } from '@/lib/content';

export default function Community() {
  return (
    <div className="px-6 lg:px-16 py-20">
      <SectionHeader
        index="03"
        title="Comunidad"
        subtitle="Un espacio abierto para crear, aprender y conectar. Aquí no eres un espectador: eres parte de la comunidad."
      />

      <section className="mb-16 border border-border bg-border grid gap-px lg:grid-cols-2">
        <div className="bg-background p-6 lg:p-8 relative overflow-hidden">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-primary">01</span>
              <h3 className="mt-3 font-display font-bold uppercase tracking-tight">Aprendizaje compartido</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Construyamos las primeras actividades con curiosidad y práctica.</p>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground shrink-0">+ video</span>
          </div>
        </div>
        <div className="relative min-h-[260px] overflow-hidden bg-card">
          <VideoLoop
            src="/brand/video-programador.mp4"
            speed={0.9}
            className="absolute inset-0 h-full w-full object-cover"
            aria-label="Joven programador en Gex Club"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-transparent to-transparent" />
        </div>

        <div className="bg-background p-6 lg:p-8 flex flex-col items-start justify-start">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Código</span>
          <Link href="/projects" className="aura-btn group mt-auto inline-flex items-center gap-3 border border-primary bg-background px-6 py-4 font-mono text-sm uppercase tracking-wider text-primary transition-colors hover:text-primary-foreground">
            <span className="relative z-10 inline-flex items-center gap-3">
              Ver proyectos <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>
        <div className="relative overflow-hidden p-6 lg:p-8 flex flex-col justify-center">
          <AuroraWave className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0 bg-background/55" />
          <div className="relative">
            <span className="font-mono text-xs text-primary">02</span>
            <h3 className="mt-3 font-display font-bold uppercase tracking-tight">{COMMUNITY_STATUS.projects}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Software, videojuegos e iniciativas de comunidad listos para tomar forma.</p>
          </div>
        </div>

        <div className="bg-background p-6 lg:p-8 flex flex-col justify-center">
          <span className="font-mono text-xs text-primary">03</span>
          <h3 className="mt-3 font-display font-bold uppercase tracking-tight">Primer hackathon</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Un reto para idear y crear soluciones con otros jóvenes creadores.</p>
        </div>
        <div className="bg-background p-6 lg:p-8 flex flex-col items-start justify-start">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Reto</span>
          <Link href="/hackathons" className="aura-btn aura-btn-red group mt-auto inline-flex items-center gap-3 border border-red-500/70 bg-background px-6 py-4 font-mono text-sm uppercase tracking-wider text-red-400 transition-colors hover:text-red-100">
            <span className="relative z-10 inline-flex items-center gap-3">
              <Rocket className="h-4 w-4" /> ¡Build the future! <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>

        <div className="relative min-h-[220px] overflow-hidden bg-card">
          <Image src="/brand/red-de-pares.jpg" alt="Red de pares de Gex Club" width={417} height={626} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-card/60 to-transparent" />
        </div>
        <div className="bg-background p-6 lg:p-8 flex flex-col justify-center">
          <span className="font-mono text-xs text-primary">04</span>
          <h3 className="mt-3 font-display font-bold uppercase tracking-tight">Red de pares</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Conoce personas con intereses parecidos y construye conexiones.</p>
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