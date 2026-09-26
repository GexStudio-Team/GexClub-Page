import { ArrowRight } from 'lucide-react';
import { LUMA_EVENT_URL } from '@/lib/content';

/**
 * LumaCheckoutButton — Botón de inscripción Luma con estética Gex Club.
 * Envía directamente a la página oficial del evento en Luma en una nueva pestaña.
 */
export default function LumaCheckoutButton({ label = 'Inscribirse al evento', className = '' }) {
  return (
    <a
      href={LUMA_EVENT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider border border-border px-4 py-2 hover:border-primary hover:text-primary transition-colors ${className}`}
    >
      {label}
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}