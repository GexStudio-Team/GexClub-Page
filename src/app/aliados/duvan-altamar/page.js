import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight, Crown, Terminal, Camera, Mail } from 'lucide-react';
import { SiGithub, SiInstagram } from '@icons-pack/react-simple-icons';
import { DUVAN_ALTAMAR, DUVAN_ROLES } from '@/lib/content';

export default function DuvanAltamarPage() {
  return (
    <main className="px-6 py-20 lg:px-16">
      <Link href="/aliados" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary transition-transform hover:-translate-x-1">
        <ArrowLeft className="h-4 w-4" /> Volver a mentores y aliados
      </Link>

      <section className="mt-8 overflow-hidden border border-border bg-card">
        {/* ── Header ─────────────────────────────────────────────── */}
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

          <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div>
              <div className="flex items-center gap-3">
                <Crown className="h-8 w-8 text-primary drop-shadow-[0_0_12px_rgba(22,135,255,0.6)]" />
                <span className="font-mono text-[10px] uppercase tracking-widest border border-primary/50 bg-primary/10 px-2 py-0.5 text-primary">Fundador</span>
              </div>
              <h1 className="mt-6 font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">{DUVAN_ALTAMAR.name}</h1>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{DUVAN_ALTAMAR.role}. Creador del ecosistema Gex Club: comunidad, marca, web y eventos.</p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src="/brand/gex-club-logo-transparent.png"
                alt="Isotipo de Gex Club"
                width={1536}
                height={1024}
                className="w-64 h-auto object-contain transition-transform duration-500 hover:scale-[1.03] lg:w-80 drop-shadow-[0_0_35px_rgba(22,135,255,0.35)]"
                priority
              />
            </div>
          </div>
        </div>

        {/* ── Quien soy + Foto ───────────────────────────────────── */}
        <div className="grid gap-px bg-border lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="bg-background p-8 lg:p-12">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">&lt;quien_soy /&gt;</p>
            <p className="mt-3 text-2xl md:text-3xl font-bold uppercase tracking-tight">Cosas que soy</p>
            <ul className="mt-8 divide-y divide-border">
              {DUVAN_ROLES.map((item, i) => (
                <li key={item} className="group flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                  <span className="shrink-0 font-mono text-xs text-muted-foreground/70 pt-1.5">{String(i + 1).padStart(2, '0')}</span>
                  <Crown className="mt-1.5 h-4 w-4 shrink-0 text-primary/80 transition-colors group-hover:text-primary" />
                  <span className="text-base leading-relaxed lg:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-background p-8 lg:p-12">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">&lt;foto /&gt;</p>
            <div className="mt-6 flex aspect-[3/4] items-center justify-center border border-dashed border-border bg-card/40 text-center transition-colors hover:border-primary/40">
              <div>
                <Camera className="mx-auto h-8 w-8 text-muted-foreground/60" />
                <p className="mt-4 px-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Espacio reservado<br />para tu foto
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">El video de presentación se movió a tu perfil antiguo (carpeta de borradores). Aquí va tu foto oficial.</p>
          </div>
        </div>

        {/* ── Redes · Showcase · Acerca ──────────────────────────── */}
        <div className="grid gap-px bg-border lg:grid-cols-3">
          <div className="bg-background p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">&lt;redes /&gt;</p>
            <div className="mt-6 flex flex-col gap-3">
              <a href={DUVAN_ALTAMAR.instagram} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border border-border bg-card px-4 py-3.5 transition-all duration-300 hover:border-primary/60 hover:bg-primary/5">
                <span className="inline-flex items-center gap-3 text-lg">
                  <SiInstagram className="h-5 w-5 text-primary" /> @duvanltbaq
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
              <a href={DUVAN_ALTAMAR.github} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border border-border bg-card px-4 py-3.5 transition-all duration-300 hover:border-primary/60 hover:bg-primary/5">
                <span className="inline-flex items-center gap-3 text-lg">
                  <SiGithub className="h-5 w-5 text-primary" /> GexStudio-Team
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            </div>
          </div>

          <div className="bg-background p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">&lt;showcase /&gt;</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="border border-primary/50 bg-primary/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-primary">GEX_OS</span>
              <span className="border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Next.js 16</span>
              <span className="border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Tailwind 4</span>
              <span className="border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Español</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Autor de la terminal interactiva GEX_OS, desarrollada a mano y embebida en esta web.</p>
          </div>

          <div className="bg-background p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">&lt;acerca /&gt;</p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">Fundador y desarrollador de GexStudio Team. Combina arquitectura frontend, sistemas de contenido y visión de comunidad para construir el ecosistema tecnológico juvenil de Gex Club.</p>
          </div>
        </div>

        {/* ── Acciones ───────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-4 border-t border-border bg-background p-8 lg:p-12">
          <Link href="/gexos" className="group inline-flex items-center gap-2 border border-primary bg-primary/10 px-5 py-3 font-mono text-xs uppercase tracking-wider text-primary transition-colors hover:bg-primary/20">
            <Terminal className="h-4 w-4" /> Abrir GEX_OS <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <Link href="/projects" className="group inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-xs uppercase tracking-wider transition-colors hover:border-muted-foreground">
            Ver el vault de proyectos <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <a href={`mailto:${DUVAN_ALTAMAR.email}`} className="group inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-xs uppercase tracking-wider transition-colors hover:border-muted-foreground">
            <Mail className="h-4 w-4" /> Escríbeme
          </a>
        </div>
      </section>
    </main>
  );
}