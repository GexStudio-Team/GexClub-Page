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
