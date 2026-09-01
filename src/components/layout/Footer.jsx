import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SiInstagram, SiGithub } from '@icons-pack/react-simple-icons';
import { SOCIALS as SOCIAL_LINKS } from '@/lib/content';

const SOCIALS = [
  { label: 'Instagram', href: SOCIAL_LINKS.instagram, icon: SiInstagram },
  { label: 'GitHub', href: SOCIAL_LINKS.github, icon: SiGithub },
];

const LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre Nosotros', href: '/about' },
  { label: 'Hackathons', href: '/hackathons' },
  { label: 'Comunidad', href: '/community' },
  { label: 'Proyectos', href: '/projects' },
  { label: 'Preguntas frecuentes', href: '/faq' },
  { label: 'Contacto y alianzas', href: '/contacto' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="px-6 lg:px-16 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="font-display text-2xl font-bold tracking-tighter">
              GEX<span className="text-primary">_CLUB</span>
            </div>
            <p className="mt-4 max-w-sm text-muted-foreground text-sm leading-relaxed">
              Global Ecosystem for eXcellence. Forjamos el futuro construyendo software,
              videojuegos y comunidad, juntos.
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-primary">
              Create. Learn. Collaborate. Excel.
            </p>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              [ Navegación ]
            </div>
            <ul className="space-y-2">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex items-center gap-1 text-sm hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              [ Redes ]
            </div>
            <div className="flex flex-col gap-3">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm hover:text-primary transition-colors">
                  <s.icon className="w-4 h-4" color="currentColor" />
                  {s.label}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          <span>© 2026 GEX_CLUB — ALL RIGHTS RESERVED</span>
          <span>BUILDING THE FUTURE TOGETHER &lt;/&gt;</span>
        </div>
      </div>
    </footer>
  );
}
