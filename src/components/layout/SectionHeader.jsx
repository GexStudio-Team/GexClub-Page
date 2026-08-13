export default function SectionHeader({ index, title, subtitle, align = 'left' }) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
      <div className={`flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary ${align === 'center' ? 'justify-center' : ''}`}>
        <span>[{index}]</span>
        <span className="h-px w-12 bg-primary/40" />
      </div>
      <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-muted-foreground text-lg leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
