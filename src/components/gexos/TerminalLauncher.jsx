'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SquareTerminal } from 'lucide-react';

/**
 * TerminalLauncher — Acceso global a GEX_OS desde cualquier página.
 * Botón flotante + atajo de teclado (`Tilde` o `ñ`/acento según layout).
 */

export default function TerminalLauncher() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      // Atajo: Ctrl+K o la tecla Tilde visual simple
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (pathname !== '/gexos') {
          window.location.href = '/gexos';
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [pathname]);

  if (pathname === '/gexos') return null;

  return (
    <Link
      href="/gexos"
      aria-label="Abrir GEX_OS Terminal (Ctrl+K)"
      title="Abrir GEX_OS Terminal (Ctrl+K)"
      className={`group fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 border border-primary/50 bg-card/90 backdrop-blur px-4 py-3 font-mono text-xs uppercase tracking-widest text-primary hover:bg-primary/10 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <SquareTerminal className="w-4 h-4 transition-transform group-hover:scale-110" />
      <span className="hidden sm:inline">GEX_OS</span>
      <kbd className="hidden md:inline-flex items-center border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground">
        Ctrl+K
      </kbd>
    </Link>
  );
}