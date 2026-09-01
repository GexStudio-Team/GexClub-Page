import Link from 'next/link';
import { ArrowUpRight, Users } from 'lucide-react';

export default function CommunityCta() {
  return (
    <div className="border border-border bg-card p-8 lg:p-10">
      <Users className="w-7 h-7 text-primary" />
      <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-tight">Construyamos algo juntos</h3>
      <p className="mt-3 max-w-xl text-muted-foreground leading-relaxed">
        Gex Club reúne personas de todas las edades que quieren aprender, crear y colaborar.
        Conoce el reto activo y las próximas actividades de la comunidad.
      </p>
      <Link
        href="/hackathons"
        className="mt-6 inline-flex items-center gap-2 bg-primary px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-primary-foreground"
      >
        Ver actividades <ArrowUpRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
