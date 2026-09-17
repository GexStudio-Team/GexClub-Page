import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Parsea una fecha ISO `YYYY-MM-DD` como fecha LOCAL (evita el
 * desfase de zona horaria que ocurre con `new Date('YYYY-MM-DD')`,
 * que la interpreta como medianoche UTC y en America/Bogota muestra
 * el día anterior, p.ej. "2026-10-03" → "02 oct").
 */
export function parseLocalDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

/** Formatea una fecha ISO `YYYY-MM-DD` en español con la fecha local correcta. */
export function formatDateEs(iso) {
  return parseLocalDate(iso).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
}
