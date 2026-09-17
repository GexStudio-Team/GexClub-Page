import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function CommunityCta() {
  return (
    <div className="relative px-2 py-10 lg:px-6">
      {/* Glow ambiental detrás del bloque, sin encasillar */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-64 w-[36rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[110px]" />
      </div>

      <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">[ 06 ] / ecosistema</span>
          <h3 className="mt-4 font-display text-3xl md:text-5xl font-bold uppercase tracking-tight">Construyamos algo juntos</h3>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Gex Club reúne personas de todas las edades que quieren aprender, crear y colaborar.
            Conoce el reto activo y las próximas actividades de la comunidad.
          </p>
        </div>
        <Link href="/hackathons" className="btn-live group inline-flex items-center gap-3 px-7 py-4 font-mono text-xs uppercase tracking-widest shrink-0">
          <Sparkles className="h-4 w-4" /> Ver actividades <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}