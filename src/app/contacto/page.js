'use client';

import { Handshake, Mail } from 'lucide-react';
import { SiInstagram } from '@icons-pack/react-simple-icons';
import Link from 'next/link';
import { CONTACT_EMAIL, SOCIALS } from '@/lib/content';

export default function ContactPage() {
  return (
    <main className="px-6 py-20 lg:px-16">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">[ 06 ] conexiones</p>
      <h1 className="mt-5 font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">Contacto y alianzas</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Estamos construyendo Gex Club junto a jóvenes, mentores, instituciones y aliados que creen en el talento tecnológico.</p>
      <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
        <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" className="bg-background p-8 transition-colors hover:bg-card">
          <SiInstagram className="w-6 h-6 text-primary" />
          <h2 className="mt-5 font-display text-xl font-bold uppercase tracking-tight">Comunidad</h2>
          <p className="mt-2 text-sm text-muted-foreground">Sigue las novedades y próximas actividades en Instagram.</p>
        </a>
        <Link href="/aliados" className="group relative overflow-hidden bg-background p-8 transition-colors hover:bg-card">
          <span className="absolute inset-0 translate-y-full bg-gradient-to-br from-primary/15 to-accent/15 transition-transform duration-500 group-hover:translate-y-0" />
          <Handshake className="w-6 h-6 text-primary" />
          <h2 className="relative mt-5 font-display text-xl font-bold uppercase tracking-tight">Mentores y aliados</h2>
          <p className="relative mt-2 text-sm text-muted-foreground">Conoce a las personas que están construyendo GexStudio Team.</p>
          <span className="relative mt-6 inline-flex font-mono text-xs uppercase tracking-wider text-primary">Abrir directorio →</span>
        </Link>
      </div>
      <a href={`mailto:${CONTACT_EMAIL}`} className="mt-8 inline-flex items-center gap-2 text-sm text-primary hover:underline"><Mail className="w-4 h-4" /> {CONTACT_EMAIL}</a>
    </main>
  );
}
