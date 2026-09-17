import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight, Crown, Terminal } from 'lucide-react';
import { SiGithub, SiInstagram } from '@icons-pack/react-simple-icons';
import { DUVAN_ALTAMAR, DUVAN_ROLES, DUVAN_LEADERSHIP } from '@/lib/content';

export default function DuvanAltamarPage() {
  return (
    <main className="px-6 py-20 lg:px-16">
      <Link href="/aliados" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary transition-transform hover:-translate-x-1">
        <ArrowLeft className="h-4 w-4" /> Volver a mentores y aliados
      </Link>

      <section className="mt-8 overflow-hidden border border-border bg-card">
        <div className="relative overflow-hidden p-8 lg:p-12">
          <div
            className="absolute inset-0 opacity-80"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 12% 15%, rgba(0,139,254,0.55), transparent 42%),
                radial-gradient(ellipse at 88% 10%, rgba(139,92,246,0.5), transparent 45%),
                radial-gradient(ellipse at 70% 95%, rgba(168,85,247,0.4), transparent 48%),
                radial-gradient(ellipse at 30% 100%, rgba(0,180,255,0.4), transparent 42%)
              `,
            }}
          />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <Crown className="h-8 w-8 text-primary" />
                <span className="font-mono text-[10px] uppercase tracking-widest border border-primary/50 bg-primary/10 px-2 py-0.5 text-primary">Fundador</span>
              </div>
              <h1 className="mt-6 font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">{DUVAN_ALTAMAR.name}</h1>
              <p className="mt-5 text-lg text-muted-foreground">{DUVAN_ALTAMAR.role}. Creador del ecosistema Gex Club: comunidad, marca, web y eventos. Diseñó y desarrolló la terminal GEX_OS dentro de GexStudio Team.</p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image src="/brand/gex-club-logo-transparent.png" alt="Gex Club" width={1536} height={1024} className="w-64 lg:w-80 h-auto object-contain drop-shadow-[0_0_35px_rgba(22,135,255,0.35)]" />
            </div>
          </div>
        </div>

        <div className="grid gap-px bg-border lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="grid gap-px bg-border sm:grid-cols-2">
            <div className="bg-background p-8 lg:p-10">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">&lt;QUIEN_ES /&gt;</p>
              <ul className="mt-6 space-y-4">
                {DUVAN_ROLES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base leading-relaxed lg:text-lg">
                    <span className="select-none font-mono text-primary">&gt;_</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background p-8 lg:p-10">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">&lt;liderazgo /&gt;</p>
              <ul className="mt-6 space-y-4">
                {DUVAN_LEADERSHIP.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base leading-relaxed lg:text-lg">
                    <Crown className="mt-1.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background p-8 lg:p-10">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">&lt;redes /&gt;</p>
              <div className="mt-6 flex flex-col gap-4">
                <a href={DUVAN_ALTAMAR.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-lg hover:text-primary">
                  <SiInstagram className="h-5 w-5 text-primary" /> @duvanltbaq
                </a>
                <a href={DUVAN_ALTAMAR.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-lg hover:text-primary">
                  <SiGithub className="h-5 w-5 text-primary" /> GexStudio-Team
                </a>
              </div>
            </div>

            <div className="bg-background p-8 lg:p-10">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">&lt;showcase /&gt;</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="border border-primary/50 bg-primary/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-primary">GEX_OS</span>
                <span className="border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Next.js 16</span>
                <span className="border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Tailwind 4</span>
                <span className="border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Español</span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Autor de la terminal interactiva GEX_OS, desarrollada a mano y embebida en esta web.</p>
            </div>

            <div className="bg-background p-8 lg:p-10 sm:col-span-2">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">&lt;acerca /&gt;</p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">Fundador y desarrollador de GexStudio Team. Combina arquitectura frontend, sistemas de contenido y visión de comunidad para construir el ecosistema tecnológico juvenil de Gex Club.</p>
            </div>
          </div>

          <div className="relative flex bg-background">
            <div className="m-4 flex-1 self-stretch overflow-hidden rounded-2xl border border-primary/40 shadow-[0_0_45px_rgba(22,135,255,0.25)] lg:m-6">
              <video
                src="/brand/video-fundador.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="block h-full w-full object-cover"
                aria-label="Video de presentación del fundador de Gex Club"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 border-t border-border bg-background p-8 lg:p-12">
          <Link href="/gexos" className="inline-flex items-center gap-2 border border-primary bg-primary/10 px-5 py-3 font-mono text-xs uppercase tracking-wider text-primary transition-colors hover:bg-primary/20">
            <Terminal className="h-4 w-4" /> Abrir GEX_OS <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link href="/projects" className="inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-xs uppercase tracking-wider transition-colors hover:border-muted-foreground">
            Ver el vault de proyectos <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}