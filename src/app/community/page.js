import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Rocket, Share2, Users } from 'lucide-react';
import SectionHeader from '@/components/layout/SectionHeader';
import CommunityCta from '@/components/community/CommunityCta';
import Testimonials from '@/components/community/Testimonials';
import VideoLoop from '@/components/ui/VideoLoop';
import { COMMUNITY_STATUS } from '@/lib/content';

const PILLARS = [
  {
    k: '01',
    icon: BookOpen,
    title: 'Aprende',
    text: 'Talleres, mentorías y práctica con proyectos reales.',
  },
  {
    k: '02',
    icon: Share2,
    title: 'Colabora',
    text: 'Conoce personas con intereses distintos y arma equipo.',
  },
  {
    k: '03',
    icon: Users,
    title: 'Comparte',
    text: 'Presenta tus ideas, recibe feedback y mejora creando.',
  },
];

export default function Community() {
  return (
    <div className="px-6 lg:px-16 py-20">
      <SectionHeader
        index="03"
        title="Comunidad"
        subtitle="Un espacio abierto para crear, aprender y conectar. Aquí no eres un espectador: eres parte de la comunidad."
      />

      {/* ===== 01 · Aprendizaje compartido ===== */}
      <section className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">[ 01 ] / aprendizaje</span>
          <h3 className="mt-4 font-display text-3xl md:text-5xl font-bold uppercase tracking-tight">Aprendizaje compartido</h3>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Construyamos las primeras actividades con curiosidad y práctica. Aquí la idea no es consumir
            contenido: es crearlo junto a otras personas que también están empezando.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {['Talleres', 'Mentorías', 'Proyectos reales'].map((tag) => (
              <span key={tag} className="border border-border/70 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Video en card flotante */}
        <div className="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
          <div className="float-wrap">
            <div className="float-card overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <VideoLoop
                  src="/brand/video-programador.mp4"
                  speed={0.9}
                  className="absolute inset-0 h-full w-full object-cover"
                  aria-label="Joven programador en Gex Club"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white backdrop-blur-md">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-foreground" />
                  en acción
                </span>
              </div>
              <div className="flex items-center justify-between bg-[#0d1020] px-4 py-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Gex Club · comunidad</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">video 01</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 02 · Proyectos actuales ===== */}
      <section className="mt-28">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">[ 02 ] / proyectos</span>
        <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight">{COMMUNITY_STATUS.projects}</h3>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Software, videojuegos e iniciativas de comunidad listos para tomar forma. Elige un proyecto,
              aporta tu grano de arena y haz que tu nombre aparezca en el mapa del ecosistema.
            </p>
          </div>
          <Link href="/projects" className="btn-live group mt-2 inline-flex items-center gap-3 px-7 py-4 font-mono text-xs uppercase tracking-widest shrink-0">
            Ver proyectos <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 h-px w-full bg-gradient-to-r from-primary/40 via-border to-transparent" />
      </section>

      {/* ===== 03 · Primer hackathon ===== */}
      <section className="mt-28">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">[ 03 ] / reto</span>
        <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight">Primer hackathon</h3>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Un reto para idear y crear soluciones con otros jóvenes creadores. El punto de partida
              oficial de la comunidad: lo que se construye aquí define el futuro del ecosistema.
            </p>
          </div>
          <Link href="/hackathons" className="btn-live btn-live-red group mt-2 inline-flex items-center gap-3 px-7 py-4 font-mono text-xs uppercase tracking-widest shrink-0">
            <Rocket className="h-4 w-4" /> Build the future <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 h-px w-full bg-gradient-to-r from-primary/40 via-border to-transparent" />
      </section>

      {/* ===== 04 · Red de pares ===== */}
      <section className="mt-28 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1 mx-auto w-full max-w-md lg:mx-0">
          <div className="float-wrap">
            <div className="float-card overflow-hidden">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/brand/red-de-pares.jpg" alt="Red de pares de Gex Club" width={417} height={626} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white backdrop-blur-md">
                  pares · comunidad
                </span>
              </div>
              <div className="flex items-center justify-between bg-[#0d1020] px-4 py-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Gex Club · encuentros</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">foto 01</span>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">[ 04 ] / personas</span>
          <h3 className="mt-4 font-display text-3xl md:text-5xl font-bold uppercase tracking-tight">Red de pares</h3>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Conoce personas con intereses parecidos y construye conexiones reales. En Gex Club el valor
            no está solo en lo que se aprende, sino en con quién se aprende.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {['Código', 'Diseño', 'Videojuegos', 'Ideas'].map((tag) => (
              <span key={tag} className="border border-border/70 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 05 · Una comunidad para crear ===== */}
      <section className="mt-28">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span>[ 05 ]</span>
          <span className="h-px w-12 bg-primary/40" />
          <span className="text-primary">Una comunidad para crear</span>
        </div>
        <div className="mt-12 grid gap-14 md:grid-cols-3 md:gap-10">
          {PILLARS.map(({ k, icon: Icon, title, text }) => (
            <div key={k} className="group border-l border-border pl-6 transition-colors duration-300 hover:border-primary">
              <div className="flex items-center justify-between">
                <Icon className="h-7 w-7 text-primary" />
                <span className="font-display text-4xl font-bold text-primary/15 transition-colors duration-300 group-hover:text-primary/40">{k}</span>
              </div>
              <h4 className="mt-4 font-display text-xl font-bold uppercase tracking-tight">{title}</h4>
              <p className="mt-3 text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 06 · Únete al ecosistema ===== */}
      <section className="mt-28">
        <CommunityCta />
      </section>

      {/* ===== 07 · Lo que queremos construir ===== */}
      <section className="mt-28">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span>[ 07 ]</span>
          <span className="h-px w-12 bg-primary/40" />
          <span className="text-primary">Lo que queremos construir</span>
        </div>
        <div className="mt-12">
          <Testimonials />
        </div>
      </section>
    </div>
  );
}