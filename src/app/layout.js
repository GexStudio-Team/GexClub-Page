'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, Info, Trophy, Users, FolderGit2 } from 'lucide-react';
import Statusbar from '@/components/layout/Statusbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const NAV = [
  { href: '/', label: 'Inicio', code: '00', icon: Home },
  { href: '/about', label: 'Sobre Nosotros', code: '01', icon: Info },
  { href: '/hackathons', label: 'Hackathons', code: '02', icon: Trophy },
  { href: '/community', label: 'Comunidad', code: '03', icon: Users },
  { href: '/projects', label: 'Proyectos', code: '04', icon: FolderGit2 },
];

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <html lang="es">
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Statusbar />

        <aside className="hidden lg:flex fixed top-8 bottom-0 left-0 w-16 flex-col items-center border-r border-border bg-card z-40">
          <Link href="/" className="mt-6 font-display font-bold text-sm tracking-tighter" style={{ writingMode: 'vertical-rl' }}>
            GEX<span className="text-primary">_</span>CLUB
          </Link>
          <nav className="mt-12 flex flex-col items-center gap-1">
            {NAV.map((item) => {
              const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex w-10 h-10 items-center justify-center transition-colors ${
                    isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {isActive && <span className="absolute inset-0 border border-primary/40 bg-primary/5" />}
                  <item.icon className="w-5 h-5 relative z-10" />
                  <span className="pointer-events-none absolute left-12 whitespace-nowrap font-mono text-[11px] uppercase tracking-wider bg-background border border-border px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto mb-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground" style={{ writingMode: 'vertical-rl' }}>
            EST. 2024
          </div>
        </aside>

        <header className="lg:hidden fixed top-8 inset-x-0 z-40 flex items-center justify-between h-14 px-4 border-b border-border bg-background/90 backdrop-blur">
          <Link href="/" className="font-display font-bold tracking-tighter">
            GEX<span className="text-primary">_</span>CLUB
          </Link>
          <button onClick={() => setOpen(true)} aria-label="Abrir menú" className="flex w-10 h-10 items-center justify-center text-foreground hover:text-primary transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </header>

        {open && (
          <div className="lg:hidden fixed inset-0 z-[60] bg-background/95 backdrop-blur">
            <div className="flex items-center justify-between h-14 px-4 border-b border-border">
              <span className="font-display font-bold tracking-tighter">
                GEX<span className="text-primary">_</span>CLUB
              </span>
              <button onClick={() => setOpen(false)} aria-label="Cerrar menú" className="flex w-10 h-10 items-center justify-center text-primary">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col p-6">
              {NAV.map((item) => {
                const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-4 border-b border-border py-5 ${isActive ? 'text-primary' : 'text-foreground'}`}
                  >
                    <span className="font-mono text-xs text-muted-foreground">{item.code}</span>
                    <span className="font-display text-2xl font-bold uppercase tracking-tight">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}

        <main className="pt-8 lg:pl-16 min-h-screen">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
