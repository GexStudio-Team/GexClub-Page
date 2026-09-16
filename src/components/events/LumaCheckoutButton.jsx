import Script from 'next/script';
import { ArrowRight } from 'lucide-react';
import { LUMA_EVENT_URL, LUMA_CHECKOUT_SCRIPT } from '@/lib/content';

/**
 * LumaCheckoutButton — Botón de inscripción Luma con estética Gex Club.
 * Carga el script de checkout de Luma via `next/script` (afterInteractive,
 * no bloquea el LCP) y estiliza el <a> que Luma detecta por sus
 * data-atributos. Si el script no carga, el enlace navega a la página
 * oficial del evento (fallback natural).
 */
export default function LumaCheckoutButton({ label = 'Inscribirse al evento', className = '' }) {
  return (
    <>
      <Script
        id="luma-checkout"
        src={LUMA_CHECKOUT_SCRIPT}
        strategy="afterInteractive"
      />
      <a
        href={LUMA_EVENT_URL}
        className={`luma-checkout--button group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider border border-border px-4 py-2 hover:border-primary hover:text-primary transition-colors ${className}`}
        data-luma-action="checkout"
        data-luma-event-id="evt-Su6uoR5ZQOKufG4"
      >
        {label}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    </>
  );
}