import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Link2, Mail, UserRound } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { BRANDON_CARRANZA, PROJECTS } from '@/lib/content';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) return null;

  return (
    <main className="px-6 py-20 lg:px-16">
      <Link href="/projects" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary transition-transform hover:-translate-x-1">
        <ArrowLeft className="h-4 w-4" /> Volver a proyectos
      </Link>

      <section className="mt-8 overflow-hidden border border-border bg-card">
        <div className={`relative min-h-64 overflow-hidden bg-gradient-to-br ${project.accent} p-8 lg:min-h-80 lg:p-12`}>
          <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'linear-gradient(rgba(22,135,255,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(119,71,255,.16) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <img src="/brand/gex-mark-dark.png" alt="" className="gex-float absolute right-[-1rem] bottom-[-2.5rem] h-72 w-72 object-contain mix-blend-screen opacity-80" />
          <div className="relative max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">// proyecto · GexStudio Team</p>
            <h1 className="mt-5 font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">{project.name}</h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{project.description}</p>
          </div>
        </div>

        <div className="grid gap-px bg-border lg:grid-cols-[1.35fr_.65fr]">
          <div className="bg-background p-8 lg:p-12">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">&lt;sobre_el_proyecto /&gt;</p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed">{project.longDescription}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tech.map((technology) => <span key={technology} className="border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{technology}</span>)}
            </div>
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 bg-primary px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/85">
              Ver repositorio <SiGithub className="h-4 w-4" />
            </a>
          </div>

          <aside className="bg-card p-8 lg:p-10">
            <UserRound className="h-7 w-7 text-primary" />
            <p className="mt-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Desarrollador</p>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight">{BRANDON_CARRANZA.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{BRANDON_CARRANZA.role}</p>
            <div className="mt-7 space-y-3 font-mono text-xs uppercase tracking-wider">
              <a href={BRANDON_CARRANZA.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-primary"><SiGithub className="h-4 w-4" /> GitHub <ArrowUpRight className="ml-auto h-3.5 w-3.5" /></a>
              <a href={BRANDON_CARRANZA.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-primary"><Link2 className="h-4 w-4" /> LinkedIn <ArrowUpRight className="ml-auto h-3.5 w-3.5" /></a>
              <a href={`mailto:${BRANDON_CARRANZA.email}`} className="flex items-center gap-2 transition-colors hover:text-primary"><Mail className="h-4 w-4" /> Contactar <ArrowUpRight className="ml-auto h-3.5 w-3.5" /></a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
