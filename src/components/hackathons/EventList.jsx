import { Users, Calendar } from 'lucide-react';

export default function EventList({ events, onRegister }) {
  return (
    <div className="border border-border divide-y divide-border">
      {events.map((ev) => {
        const full = ev.registered >= ev.capacity;
        const finished = ev.status === 'finalizado';
        return (
          <div key={ev.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-[10px] uppercase tracking-widest border border-border px-2 py-0.5 text-muted-foreground">{ev.status}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">{ev.type}</span>
              </div>
              <h4 className="font-display font-bold text-lg uppercase tracking-tight">{ev.name}</h4>
              <p className="text-sm text-muted-foreground mt-1 max-w-xl">{ev.description}</p>
              <div className="flex items-center gap-4 mt-3 font-mono text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {ev.registered}/{ev.capacity}</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(ev.date).toLocaleDateString('es', { day: '2-digit', month: 'short', year: 'numeric' })}
                </span>
              </div>
            </div>
            <button
              onClick={() => onRegister(ev)}
              disabled={full || finished}
              className="shrink-0 font-mono text-xs uppercase tracking-wider border border-border px-4 py-2 hover:border-primary hover:text-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {finished ? 'Cerrado' : full ? 'Sin cupos' : 'Register >'}
            </button>
          </div>
        );
      })}
    </div>
  );
}
