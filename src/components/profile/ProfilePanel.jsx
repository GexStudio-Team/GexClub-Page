'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { UserRound, Mail, ShieldCheck, CalendarDays, Trophy, FolderGit2, LogOut, Calendar } from 'lucide-react';
import { useAuth } from '@/features/auth/AuthContext';
import { meService } from '@/services/api';

function formatMemberSince(createdAt) {
  if (!createdAt) return '—';
  try {
    return new Date(createdAt).toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' });
  } catch {
    return '—';
  }
}

function formatDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
}

export default function ProfilePanel({ user }) {
  const { logout } = useAuth();
  const [myEvents, setMyEvents] = useState([]);
  const [eventsLoading, setEventsLoading] = useState(true);

  useEffect(() => {
    meService
      .getEvents()
      .then(setMyEvents)
      .catch(() => setMyEvents([]))
      .finally(() => setEventsLoading(false));
  }, []);

  const roleLabel = user?.role === 'admin' ? 'Administrador' : user?.role === 'mentor' ? 'Mentor' : 'Miembro';

  return (
    <div className="max-w-3xl">
      <div className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-widest text-primary mb-8">
        <span>[ 06 ]</span>
        <span className="h-px w-12 bg-primary/40" />
        <span className="text-muted-foreground">Mi perfil</span>
      </div>

      <div className="border border-border bg-card">
        <div className="relative border-b border-border p-8 lg:p-10 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(163, 230, 53, 0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(163, 230, 53, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '32px 32px',
            }}
          />
          <div className="relative flex items-center gap-6">
            <div className="flex w-20 h-20 items-center justify-center bg-primary/10 border border-primary/30 text-primary">
              <UserRound className="w-10 h-10" />
            </div>
            <div>
              <h1 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight">
                {user?.full_name}
              </h1>
              <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 px-2.5 py-1">
                <ShieldCheck className="w-3.5 h-3.5" /> {roleLabel}
              </span>
            </div>
          </div>
        </div>

        <dl className="divide-y divide-border">
          <div className="flex items-center gap-4 p-6 lg:px-10">
            <Mail className="w-5 h-5 text-muted-foreground" />
            <dt className="w-32 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Email</dt>
            <dd className="text-sm font-medium break-all">{user?.email}</dd>
          </div>
          <div className="flex items-center gap-4 p-6 lg:px-10">
            <CalendarDays className="w-5 h-5 text-muted-foreground" />
            <dt className="w-32 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Miembro desde</dt>
            <dd className="text-sm font-medium">{formatMemberSince(user?.created_at)}</dd>
          </div>
        </dl>
      </div>

      <div className="mt-8 border border-border bg-card">
        <div className="flex items-center justify-between px-6 lg:px-10 py-4 border-b border-border">
          <div className="flex items-center gap-3">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="font-display font-bold uppercase tracking-tight text-sm">Mis eventos</span>
          </div>
          <Link href="/hackathons" className="font-mono text-[11px] uppercase tracking-wider text-primary hover:underline">
            Ver todos
          </Link>
        </div>
        <div className="divide-y divide-border">
          {eventsLoading ? (
            <div className="p-6 space-y-px">
              {[0, 1].map((i) => (
                <div key={i} className="h-14 bg-border animate-pulse" />
              ))}
            </div>
          ) : myEvents.length === 0 ? (
            <div className="p-6 font-mono text-sm text-muted-foreground uppercase tracking-wider">
              // todavía no te inscribiste a ningún evento
            </div>
          ) : (
            myEvents.map((ev) => (
              <div key={ev.id} className="flex items-center gap-4 px-6 lg:px-10 py-4">
                <Calendar className="w-4 h-4 text-muted-foreground shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-display font-bold uppercase tracking-tight text-sm truncate">{ev.name}</div>
                  <div className="font-mono text-[11px] text-muted-foreground">{formatDate(ev.date)} · {ev.status}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 gap-px bg-border border border-border">
        <Link
          href="/projects"
          className="group flex items-center justify-between gap-4 bg-background p-6 hover:bg-card transition-colors"
        >
          <div className="flex items-center gap-3">
            <FolderGit2 className="w-6 h-6 text-primary" />
            <span className="font-display font-bold uppercase tracking-tight text-sm">Mis proyectos</span>
          </div>
          <span className="font-mono text-[11px] text-muted-foreground group-hover:text-primary transition-colors">// próximo</span>
        </Link>
      </div>

      <button
        onClick={logout}
        className="mt-8 inline-flex items-center gap-2 bg-destructive/10 text-destructive border border-destructive/20 px-6 py-3 font-mono text-xs uppercase tracking-wider font-semibold rounded hover:bg-destructive/20 transition-colors"
      >
        <LogOut className="w-4 h-4" /> Cerrar sesión
      </button>
    </div>
  );
}
