'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar, Users, ArrowUpRight, Clock } from 'lucide-react';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
}

export default function EventsPreview() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/events')
      .then((res) => res.json())
      .then((data) => {
        const sorted = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
        setEvents(sorted.slice(0, 3));
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="px-6 lg:px-16 py-24 border-b border-border">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary mb-5">
            <span>[ 04 ]</span>
            <span className="h-px w-12 bg-primary/40" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-balance">Próximos eventos</h2>
        </div>
        <Link href="/hackathons" className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-primary">
          Ver todos
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {loading ? (
        <div className="space-y-px">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-28 bg-card animate-pulse border border-border" />
          ))}
        </div>
      ) : (
        <div className="border border-border">
          {events.map((e) => (
            <div key={e.id} className="group grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-8 border-b border-border last:border-b-0 p-6 hover:bg-card transition-colors">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <div className="font-mono text-sm text-foreground">{formatDate(e.date)}</div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border ${e.status === 'activo' ? 'border-primary text-primary' : 'border-border text-muted-foreground'}`}>
                    {e.status}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{e.type}</span>
                </div>
                <h3 className="font-display text-lg font-bold uppercase tracking-tight">{e.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{e.description}</p>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <Users className="w-4 h-4" /> {e.registered}/{e.capacity}
                <Clock className="w-4 h-4 ml-3" />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
