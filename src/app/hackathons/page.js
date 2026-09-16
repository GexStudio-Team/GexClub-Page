'use client';

import SectionHeader from '@/components/layout/SectionHeader';
import CountdownTimer from '@/components/hackathons/CountdownTimer';
import EventList from '@/components/hackathons/EventList';
import LumaCheckoutButton from '@/components/events/LumaCheckoutButton';
import { Rocket, CalendarDays } from 'lucide-react';
import { EVENTS, LUMA_EVENT_ID, LUMA_EMBED_URL } from '@/lib/content';

export default function Hackathons() {
  const flagship = EVENTS[0];

  return (
    <div className="px-6 lg:px-16 py-20 relative">
      <SectionHeader index="02" title="Hackathons & Eventos" subtitle="El talento se prueba bajo presión. Aquí es donde el código se convierte en gloria." />

      <>
          {flagship && (
            <section className="border border-border bg-card p-8 lg:p-12 mb-16 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(22, 135, 255, 0.2) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(119, 71, 255, 0.2) 1px, transparent 1px)
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
                <p className="mb-6 font-mono text-xs uppercase tracking-widest text-primary">Sábado 3 de octubre · {flagship.time}</p>
                <CountdownTimer targetDate={flagship.startAt} />
                <div className="mt-10">
                  <LumaCheckoutButton className="bg-primary text-primary-foreground border-primary font-bold hover:bg-primary/90 px-6 py-3.5" />
                </div>
              </div>
            </section>
          )}

          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            <span>&gt; git log --oneline</span>
            <span className="h-px flex-1 bg-border" />
            <span className="text-primary">{EVENTS.length} eventos</span>
          </div>

          <EventList events={EVENTS} />

          <div className="mt-16 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-8 items-start">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary mb-4">
                <CalendarDays className="w-4 h-4" /> Detalle del evento
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">Todo lo que necesitas saber</h3>
              <p className="text-muted-foreground max-w-xl mb-6">
                Agenda, requisitos, código de conducta y confirmación de asistencia, todo
                desde la página oficial del evento en Luma. Puedes inscribirte directamente
                con el botón o explorar el detalle completo aquí mismo.
              </p>
              <LumaCheckoutButton />
            </div>
            <div className="relative w-full overflow-hidden rounded-sm border border-border">
              <iframe
                src={LUMA_EMBED_URL}
                title={`Detalle del evento ${flagship?.name || 'Gex Club'} en Luma`}
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allow="fullscreen; payment"
                aria-hidden="false"
                tabIndex="0"
                className="w-full min-h-[420px] bg-card"
              />
            </div>
          </div>
      </>
    </div>
  );
}
