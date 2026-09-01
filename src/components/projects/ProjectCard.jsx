export default function ProjectCard({ project }) {
  return (
    <div className="border border-border bg-card overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
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
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/40 to-primary/10" />
        <img src="/brand/gex-mark-dark.png" alt="" className="absolute right-3 bottom-[-1.5rem] h-32 w-32 object-contain opacity-70 mix-blend-screen transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />
        <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest border border-border px-2 py-0.5 bg-background/70 backdrop-blur">
          {project.category}
        </span>
      </div>
      <div className="p-6">
        <h4 className="font-display font-bold text-lg uppercase tracking-tight">{project.name}</h4>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-[10px] uppercase tracking-wider border border-border px-2 py-0.5 text-muted-foreground">{t}</span>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-border font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {project.members} miembros
        </div>
      </div>
    </div>
  );
}
