import SectionHeader from '@/components/layout/SectionHeader';

export default function MissionSection() {
  return (
    <section className="grid lg:grid-cols-2 border-b border-border">
      <div
        className="relative border-b lg:border-b-0 lg:border-r border-border bg-card min-h-[40vh] overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(22, 135, 255, 0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(119, 71, 255, 0.14) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/20 to-accent/20" />
        <img src="/brand/gex-mark-dark.png" alt="" className="gex-float absolute inset-0 m-auto h-56 w-56 object-contain mix-blend-screen opacity-90" />
        <div className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-widest text-primary">// the_foundry</div>
      </div>
      <div className="px-6 lg:px-16 py-12 lg:py-24">
        <SectionHeader index="03" title="Misión y Visión" subtitle="El código es el lenguaje con el que construimos el futuro." />
        <div className="space-y-10">
          <div className="border-l-2 border-primary pl-6">
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-2">&lt;mission&gt;</div>
            <p className="text-lg leading-relaxed">
              Abrir espacios para que personas de todas las edades desarrollen habilidades
              reales en software, videojuegos y solución de problemas, formando una comunidad
              de creadores tecnológicos.
            </p>
          </div>
          <div className="border-l-2 border-muted-foreground/40 pl-6">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">&lt;vision&gt;</div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Ser el ecosistema juvenil de referencia en Latinoamérica para el talento
              tecnológico, donde la excelencia no es un destino, sino el estándar.
            </p>
          </div>
          <div className="border-l-2 border-muted-foreground/40 pl-6">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">&lt;philosophy&gt;</div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Create. Learn. Collaborate. Excel. — Cuatro verbos que ordenan todo lo que
              hacemos: crear sin pedir permiso, aprender sin techo, colaborar sin ego,
              y sobresalir sin excusas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
