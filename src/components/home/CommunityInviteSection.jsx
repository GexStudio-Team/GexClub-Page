import Link from 'next/link';
import VideoLoop from '@/components/ui/VideoLoop';

const COMMUNITY_TEXT =
  'Somos una comunidad de jóvenes creadores, impulsada por y para adolescentes. No esperamos el futuro; lo programamos. Creamos un espacio libre y colaborativo donde experimentar no da miedo, el error es parte del proceso. Creemos que la tecnología se aprende construyendo cosas reales.';

export default function CommunityInviteSection() {
  return (
    <section className="grid lg:grid-cols-2 border-b border-border">
      <div className="px-6 lg:px-16 py-12 lg:py-20">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary mb-6">
          <span>[ 03.5 ]</span>
          <span className="h-px w-12 bg-primary/40" />
          <span className="text-muted-foreground">Una comunidad real</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-balance">Nuestra invitación</h2>
        <p className="mt-6 text-lg leading-relaxed">{COMMUNITY_TEXT}</p>
        <p className="mt-4 text-xl font-bold leading-relaxed text-primary">¡Súmate y construye el futuro con nosotros!</p>
        <Link
          href="/about"
          className="group mt-8 inline-flex items-center gap-3 border border-primary bg-primary/10 px-6 py-3.5 font-mono text-sm normal-case tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          Conoce más sobre nosotros
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
      <div
        className="relative border-t lg:border-t-0 lg:border-l border-border bg-card min-h-[30vh] lg:min-h-[38vh] overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(22, 135, 255, 0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(119, 71, 255, 0.14) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 via-background/20 to-accent/20" />
        <VideoLoop
          src="/brand/video-comunidad.mp4"
          className="absolute inset-0 h-full w-full object-cover"
          aria-label="Video corto de la comunidad Gex Club"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-card/40 via-transparent to-transparent" />
      </div>
    </section>
  );
}