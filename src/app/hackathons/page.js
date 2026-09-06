'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SectionHeader from '@/components/layout/SectionHeader';
import CountdownTimer from '@/components/hackathons/CountdownTimer';
import EventList from '@/components/hackathons/EventList';
import PastEditions from '@/components/hackathons/PastEditions';
import { eventsService } from '@/services/api';
import { useAuth } from '@/features/auth/AuthContext';
import { Rocket } from 'lucide-react';

export default function Hackathons() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState(null);
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  const loadEvents = () => {
    setLoading(true);
    eventsService
      .getAll()
      .then(setEvents)
      .catch(() => setNotification({ title: 'Error', description: 'No se pudieron cargar los eventos.' }))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const flagship = events.find((e) => e.status !== 'finalizado');

  const handleRegister = async (ev) => {
    if (!isAuthenticated) {
      setNotification({ title: 'Inicia sesión', description: 'Necesitas una cuenta para inscribirte.' });
      router.push('/login');
      return;
    }
    try {
      const updated = await eventsService.register(ev.id);
      setEvents((prev) => prev.map((e) => (e.id === updated.id ? updated : e)));
      setNotification({ title: 'Registro confirmado', description: `Te inscribiste en "${ev.name}". Nos vemos ahí.` });
    } catch (err) {
      const msg = err?.data?.detail || 'No se pudo completar el registro.';
      setNotification({ title: 'Error', description: msg });
    } finally {
      setTimeout(() => setNotification(null), 4000);
    }
  };

  return (
    <div className="px-6 lg:px-16 py-20 relative">
      <SectionHeader index="02" title="Hackathons & Eventos" subtitle="El talento se prueba bajo presión. Aquí es donde el código se convierte en gloria." />

      {loading ? (
        <div className="space-y-px mb-16">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-24 bg-card animate-pulse border border-border" />
          ))}
        </div>
      ) : (
        <>
          {flagship && (
            <section className="border border-border bg-card p-8 lg:p-12 mb-16 relative overflow-hidden">
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
              <div className="relative">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary mb-4">
                  <Rocket className="w-4 h-4" /> Flagship event
                </div>
                <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight mb-2">{flagship.name}</h3>
                <p className="text-muted-foreground max-w-2xl mb-10">{flagship.description}</p>
                <CountdownTimer targetDate={flagship.date} />
              </div>
            </section>
          )}

          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            <span>&gt; git log --oneline</span>
            <span className="h-px flex-1 bg-border" />
            <span className="text-primary">{events.length} commits</span>
          </div>

          <EventList events={events} onRegister={handleRegister} />

          <PastEditions />
        </>
      )}

      {notification && (
        <div className="fixed bottom-6 right-6 bg-card border border-border p-4 max-w-xs shadow-lg z-50">
          <p className="font-bold text-sm">{notification.title}</p>
          <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>
        </div>
      )}
    </div>
  );
}
