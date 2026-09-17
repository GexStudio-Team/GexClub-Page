import Link from 'next/link';
import SectionHeader from '@/components/layout/SectionHeader';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Preguntas Frecuentes',
  description:
    'Respuestas a las dudas más comunes sobre GexClub: cómo unirse, la edad requerida, requisitos, costos y hackathons.',
};

const FAQS = [
  {
    q: '¿Qué es Gex Club?',
    a: 'Es un ecosistema tecnológico juvenil donde jóvenes de 14 a 18 años desarrollan software, crean videojuegos, participan en hackathons y construyen una comunidad real de creadores de tecnología.',
  },
  {
    q: '¿Para qué edades está dirigido?',
    a: 'Está pensado para jóvenes de 14 a 18 años. Es un espacio seguro y supervisado, donde el talento se trata con el estándar de la industria.',
  },
  {
    q: '¿Necesito experiencia previa en programación?',
    a: 'No. No importa tu nivel de experiencia. Valoramos la curiosidad y las ganas de construir. Muchos miembros empezaron sin saber programar.',
  },
  {
    q: '¿Cuánto cuesta unirse?',
    a: 'La participación en la comunidad es gratuita. Algunos eventos o hackathons pueden tener condiciones específicas, que se publican en la página de cada evento.',
  },
  {
    q: '¿Cómo me uno?',
    a: 'Crea una cuenta con tu email desde el formulario de registro y luego completa el formulario de la comunidad. También puedes seguirnos en Instagram y Discord para enterarte de todo.',
  },
  {
    q: '¿Qué son los hackathons de Gex?',
    a: 'Son competiciones de alto impacto donde trabajás en equipos para construir un proyecto en un tiempo limitado. Incluyen mentores, formación previa y premios.',
  },
  {
    q: '¿Puedo participar como mentor o sponsor?',
    a: 'Sí. Instituciones, empresas y profesionales pueden apoyar el desarrollo de talento tecnológico joven. Contactanos a través de nuestros canales oficiales.',
  },
];

export default function Faq() {
  return (
    <div className="px-6 lg:px-16 py-20">
      <SectionHeader
        index="07"
        title="Preguntas Frecuentes"
        subtitle="Todo lo que necesitas saber antes de unirte al ecosistema."
      />

      <div className="max-w-3xl border border-border">
        {FAQS.map((item, i) => (
          <details
            key={item.q}
            className={`group ${i !== 0 ? 'border-t border-border' : ''}`}
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 list-none hover:bg-card transition-colors">
              <span className="font-display font-bold uppercase tracking-tight text-sm md:text-base">
                {item.q}
              </span>
              <span className="font-mono text-primary text-lg transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <span>¿Tienes otra duda?</span>
        <Link href="/community" className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-primary hover:underline">
          Únete a la comunidad <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const FAQS = [
  ['¿Para quién es Gex Club?', 'Para personas de todas las edades con curiosidad por el software, los videojuegos, el diseño y la creación digital.'],
  ['¿Necesito experiencia previa?', 'No. Puedes llegar desde cero; lo importante es tener ganas de aprender, crear y colaborar.'],
  ['¿Cómo me inscribo a un hackathon?', 'Completa el formulario de cada evento. Para el Hackathon 2026, la inscripción está dirigida a jóvenes de 14 a 18 años. El equipo organizador comunicará los siguientes pasos.'],
  ['¿Por qué solicitan datos de un acudiente?', 'Solo se solicitan en actividades para menores de edad, como el Hackathon 2026. Pedimos un contacto responsable y un número de emergencia para organizar el evento con mayor cuidado.'],
  ['¿Cuánto cuesta participar?', 'Las condiciones de cada actividad se anunciarán antes de abrir sus inscripciones.'],
];

export default function FaqPage() {
  return (
    <main className="px-6 py-20 lg:px-16">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">[ 05 ] información</p>
      <h1 className="mt-5 font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">Preguntas frecuentes</h1>
      <div className="mt-12 max-w-3xl divide-y divide-border border border-border">
        {FAQS.map(([question, answer]) => (
          <details key={question} className="group p-6">
            <summary className="cursor-pointer list-none font-display text-lg font-bold uppercase tracking-tight">{question}</summary>
            <p className="mt-4 text-muted-foreground">{answer}</p>
          </details>
        ))}
      </div>
      <Link href="/contacto" className="mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
        ¿Tienes otra pregunta? Contáctanos <ArrowUpRight className="w-4 h-4" />
      </Link>
    </main>
  );
}
