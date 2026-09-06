'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, Info, Trophy, Users, FolderGit2, LogIn, UserCheck, LogOut, UserRound, FileText } from 'lucide-react';
import Statusbar from '@/components/layout/Statusbar';
import Footer from '@/components/layout/Footer';
import ThemeToggle from '@/components/layout/ThemeToggle';
import { AuthProvider, useAuth } from '@/features/auth/AuthContext';
import { ThemeProvider } from '@/features/theme/ThemeProvider';

const NAV = [
  { href: '/', label: 'Inicio', code: '00', icon: Home },
  { href: '/about', label: 'Sobre Nosotros', code: '01', icon: Info },
  { href: '/hackathons', label: 'Hackathons', code: '02', icon: Trophy },
  { href: '/community', label: 'Comunidad', code: '03', icon: Users },
  { href: '/projects', label: 'Proyectos', code: '04', icon: FolderGit2 },
  { href: '/blog', label: 'Blog', code: '05', icon: FileText },
];

function NavigationContent({ children }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Statusbar />

      {/* Sidebar para desktop */}
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
                aria-current={isActive ? 'page' : undefined}
                className={`group relative flex w-10 h-10 items-center justify-center transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {isActive && <span className="absolute inset-0 border border-primary/40 bg-primary/5" />}
                <item.icon className="w-5 h-5 relative z-10" />
                <span className="pointer-events-none absolute left-12 whitespace-nowrap font-mono text-[11px] uppercase tracking-wider bg-background border border-border px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity z-50">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Acciones Auth y Tema en Sidebar Desktop */}
        <div className="mt-auto mb-6 flex flex-col items-center gap-2">
          {isAuthenticated && (
            <Link
              href="/profile"
              title="Mi perfil"
              className="group relative flex w-10 h-10 items-center justify-center text-foreground hover:bg-primary/10 hover:text-primary transition-colors rounded"
            >
              <UserRound className="w-5 h-5" />
              <span className="pointer-events-none absolute left-12 whitespace-nowrap font-mono text-[11px] uppercase tracking-wider bg-background border border-border px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity z-50">
                Mi perfil
              </span>
            </Link>
          )}
          {isAuthenticated ? (
            <button
              onClick={logout}
              title={`Cerrar Sesión (${user?.full_name})`}
              className="group relative flex w-10 h-10 items-center justify-center text-destructive hover:bg-destructive/10 transition-colors rounded"
            >
              <LogOut className="w-5 h-5" />
              <span className="pointer-events-none absolute left-12 whitespace-nowrap font-mono text-[11px] uppercase tracking-wider bg-background border border-border px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity z-50">
                Salir ({user?.full_name?.split(' ')[0]})
              </span>
            </button>
          ) : (
            <Link
              href="/login"
              title="Iniciar Sesión"
              className="group relative flex w-10 h-10 items-center justify-center text-primary hover:bg-primary/10 transition-colors rounded"
            >
              <LogIn className="w-5 h-5" />
              <span className="pointer-events-none absolute left-12 whitespace-nowrap font-mono text-[11px] uppercase tracking-wider bg-background border border-border px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity z-50">
                Acceso / Registro
              </span>
            </Link>
          )}

          <ThemeToggle />

          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-2" style={{ writingMode: 'vertical-rl' }}>
            EST. 2024
          </div>
        </div>
      </aside>

      {/* Header móvil */}
      <header className="lg:hidden fixed top-8 inset-x-0 z-40 flex items-center justify-between h-14 px-4 border-b border-border bg-background/90 backdrop-blur">
        <Link href="/" className="font-display font-bold tracking-tighter">
          GEX<span className="text-primary">_</span>CLUB
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono bg-destructive/10 text-destructive border border-destructive/20 rounded"
            >
              <LogOut className="w-3.5 h-3.5" /> Salir
            </button>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/20 rounded"
            >
              <LogIn className="w-3.5 h-3.5" /> Login
            </Link>
          )}
          <button onClick={() => setOpen(true)} aria-label="Abrir menú" className="flex w-10 h-10 items-center justify-center text-foreground hover:text-primary transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Modal menú móvil */}
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
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center gap-4 border-b border-border py-5 ${isActive ? 'text-primary' : 'text-foreground'}`}
                >
                  <span className="font-mono text-xs text-muted-foreground">{item.code}</span>
                  <span className="font-display text-2xl font-bold uppercase tracking-tight">{item.label}</span>
                </Link>
              );
            })}
            <div className="mt-6 pt-4 border-t border-border">
              {isAuthenticated ? (
                <div className="flex flex-col gap-3">
                  <div className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-primary" /> Logueado como <span className="text-foreground font-semibold">{user?.full_name}</span>
                  </div>
                  <Link
                    href="/profile"
                    onClick={() => setOpen(false)}
                    className="w-full py-2.5 border border-border font-mono text-xs uppercase tracking-wider rounded font-semibold text-center hover:bg-muted flex items-center justify-center gap-2"
                  >
                    <UserRound className="w-4 h-4" /> Mi Perfil
                  </Link>
                  <button
                    onClick={() => { logout(); setOpen(false); }}
                    className="w-full py-2.5 bg-destructive/10 text-destructive border border-destructive/20 font-mono text-xs uppercase tracking-wider rounded font-semibold flex items-center justify-center gap-2"
                  >
                    <LogOut className="w-4 h-4" /> Cerrar Sesión
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="py-2.5 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider rounded font-semibold text-center"
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setOpen(false)}
                    className="py-2.5 border border-border font-mono text-xs uppercase tracking-wider rounded font-semibold text-center hover:bg-muted"
                  >
                    Registro
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}

      <main className="pt-8 lg:pl-16 min-h-screen">
        {children}
        <Footer />
      </main>
    </div>
  );
}

export default function RootLayoutClient({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NavigationContent>{children}</NavigationContent>
      </AuthProvider>
    </ThemeProvider>
  );
}