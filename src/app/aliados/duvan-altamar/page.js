import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight, Crown, GraduationCap, MapPin, Sparkles, Terminal } from 'lucide-react';
import { SiGithub, SiInstagram } from '@icons-pack/react-simple-icons';
import { DUVAN_ALTAMAR, DUVAN_ROLES } from '@/lib/content';

const CONTEXT_ITEMS = [
  { icon: MapPin, label: 'Barranquilla', sub: 'Colombia' },
  { icon: GraduationCap, label: 'Técnico en Sistemas', sub: 'IUB — 2026' },
  { icon: Sparkles, label: 'Joven Creativo', sub: '2025 · CLJ' },
  { icon: Terminal, label: 'Creador de GEX_OS', sub: 'Next.js 16 · Tailwind 4' },
];

export default function DuvanAltamarPage() {
  return (
    <main className="px-6 py-20 lg:px-16">
      <Link href="/aliados" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary transition-transform hover:-translate-x-1">
        <ArrowLeft className="h-4 w-4" /> Volver a mentores y aliados
      </Link>

      <section className="mt-8 overflow-hidden border border-border bg-card">
        {/* ===== Hero ===== */}
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

          <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
            <div>
              <div className="inline-flex items-center gap-2 border border-primary/50 bg-primary/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-primary">
                <Crown className="h-3.5 w-3.5" /> {DUVAN_ALTAMAR.role}
              </div>
              <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl">{DUVAN_ALTAMAR.name}</h1>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">Creador del ecosistema Gex Club: comunidad, marca, web y eventos. Arquitecto del frontend y los sistemas de contenido que sostienen esta web.</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/gexos" className="inline-flex items-center gap-2 border border-primary bg-primary/10 px-5 py-3 font-mono text-xs uppercase tracking-wider text-primary transition-colors hover:bg-primary/20">
                  <Terminal className="h-4 w-4" /> Abrir GEX_OS <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/projects" className="inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-xs uppercase tracking-wider transition-colors hover:border-muted-foreground">
                  Ver el vault <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-56 sm:w-64 lg:w-72">
                <div className="relative p-1.5 border border-primary/40 bg-card/40">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image src="/brand/foto-duvan-altamar.jpeg" alt={`Foto de ${DUVAN_ALTAMAR.name}`} fill sizes="(max-width: 640px) 224px, 288px" className="object-cover object-center" />
                  </div>
                  <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                </div>
                <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{DUVAN_ALTAMAR.name} — {DUVAN_ALTAMAR.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Contexto ===== */}
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {CONTEXT_ITEMS.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3 bg-background px-6 py-5">
              <Icon className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium">{label}</p>
                <p className="text-xs text-muted-foreground">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Cosas que soy ===== */}
        <div className="bg-background p-8 lg:p-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">&lt;quien_soy /&gt;</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold uppercase tracking-tight">Cosas que soy</h2>
            </div>
            <span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:block">/{DUVAN_ROLES.length} assets</span>
          </div>

          <ul className="mt-7 flex flex-col gap-3">
            {DUVAN_ROLES.map((item, i) => (
              <li key={item} className="group flex items-center gap-4 border border-border bg-card/40 px-5 py-4 transition-colors hover:border-primary/50 hover:bg-card/70">
                <span className="font-mono text-sm text-primary/70">{String(i + 1).padStart(2, '0')}</span>
                <Crown className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm leading-snug lg:text-[15px]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Conectar ===== */}
        <div className="grid gap-px bg-border lg:grid-cols-3">
          <div className="bg-background p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">&lt;redes /&gt;</p>
            <div className="mt-6 flex flex-col gap-4">
              <a href={DUVAN_ALTAMAR.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-lg transition-colors hover:text-primary">
                <SiInstagram className="h-5 w-5 text-primary" /> @duvanltbaq
              </a>
              <a href={DUVAN_ALTAMAR.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-lg transition-colors hover:text-primary">
                <SiGithub className="h-5 w-5 text-primary" /> GexStudio-Team
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

        {/* ===== Acciones finales ===== */}
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