import Link from 'next/link';
import { ArrowUpRight, FolderOpen } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block border border-border bg-card overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 focus-visible:-translate-y-1">
      <div
        className="h-40 relative overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(22, 135, 255, 0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(119, 71, 255, 0.14) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
        <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/15 to-transparent" />
        <img src="/brand/gex-mark-dark.png" alt="" className="absolute right-3 bottom-[-1.5rem] h-32 w-32 object-contain opacity-70 mix-blend-screen transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />
        <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest border border-border px-2 py-0.5 bg-background/70 backdrop-blur">
          {project.category}
        </span>
        <div className="absolute inset-0 flex items-center justify-center bg-background/90 opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <span className="inline-flex items-center gap-2 border border-primary/60 bg-primary/10 px-4 py-2 font-mono text-xs uppercase tracking-wider text-primary transition-transform duration-300 translate-y-3 group-hover:translate-y-0 group-focus-visible:translate-y-0">
            <FolderOpen className="h-4 w-4" /> Abrir ficha
          </span>
        </div>
      </div>
      <div className="p-6">
        <h4 className="font-display font-bold text-lg uppercase tracking-tight">{project.name}</h4>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-[10px] uppercase tracking-wider border border-border px-2 py-0.5 text-muted-foreground">{t}</span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>{project.members}</span>
          <span className="inline-flex items-center gap-1 text-primary">Ver ficha <ArrowUpRight className="h-3.5 w-3.5" /></span>
        </div>
      </div>
    </Link>
  );
}
