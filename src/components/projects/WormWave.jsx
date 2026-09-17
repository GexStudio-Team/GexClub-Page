/**
 * WormWave — Aurora boreal tipo "gusano" que barre horizontalmente el banner
 * "Proyectos actuales" de la ventana de Proyectos.
 *
 * Banda segmentada (lombriz) en colores pastel de aurora boreal viva
 * (rosa → fucsia → violeta → azul → cian → esmeralda) que:
 *  - entra desde la IZQUIERDA, completamente fuera del recuadro;
 *  - avanza MUY LENTO y en HORIZONTAL hacia la derecha;
 *  - su cuerpo ondula como gusano mezclado con onda (protuberancias alternas
 *    grandes/pequeñas a lo largo de la banda);
 *  - su grosor vertical supera la altura del recuadro, así que mientras cruza
 *    TAPA TODO el banner;
 *  - al llegar al final hace un reset rápido y vuelve a empezar. Loop infinito.
 *
 * IMPORTANTE: el SVG se inyecta como HTML nativo (dangerouslySetInnerHTML)
 * porque React descarta los atributos SMIL (animateTransform, values, dur…)
 * cuando los renderiza como elementos JSX, y la animación nunca se ejecuta.
 * Con HTML string el navegador corre SMIL directamente (Chrome, Firefox, Safari).
 */
const X0 = -1500;
const X1 = 1500;
const Y0 = 650;
const SEG = 200;
const AMP1 = 240;
const AMP2 = 130;

/** Borde superior ondulado (segmentos de gusano) de x0 a x1. */
function buildTopEdge(x0 = X0, x1 = X1) {
  let d = `M ${x0} ${-Y0}`;
  let x = x0;
  let i = 0;
  while (x < x1) {
    const dx = Math.min(SEG, x1 - x);
    const a = i % 2 === 0 ? AMP1 : AMP2;
    d += ` q ${dx / 2} ${-a} ${dx} 0`;
    x += dx;
    i += 1;
  }
  return d;
}

/** Cuerpo completo: borde superior + costado + borde inferior (fase) + cierre. */
function buildBody() {
  let d = buildTopEdge();
  d += ` L ${X1} ${Y0}`;
  let x = X1;
  let i = 0;
  while (x > X0) {
    const dx = Math.max(-SEG, X0 - x);
    const a = i % 2 === 0 ? AMP1 : AMP2;
    d += ` q ${dx / 2} ${a} ${dx} 0`;
    x += dx;
    i += 1;
  }
  return `${d} Z`;
}

// Barrido horizontal en el sistema de coordenadas local (banda en x∈[X0,X1]):
//  - Inicio: la banda entera fuera por la IZQUIERDA (borde der. 1500 → ≤ 0).
//  - Fin:    la banda entera pasada por la DERECHA (borde izq. -1500 → ≥ 1000).
const T_START = -2300; // completamente fuera a la izquierda
const T_END = 2600; // completamente pasada a la derecha

function buildSvg() {
  const topD = buildTopEdge();
  const bodyD = buildBody();
  // Avance lento (92% de la duración) + reset rápido (8%) para el loop
  const values = `${T_START} 0; ${T_END} 0; ${T_START} 0`;

  return `
<svg class="h-full w-full" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
  <defs>
    <linearGradient id="wormBody" gradientUnits="userSpaceOnUse" x1="${X0}" y1="0" x2="${X1}" y2="0">
      <stop offset="0%" stop-color="#f9a8d4" stop-opacity="0" />
      <stop offset="22%" stop-color="#f9a8d4" stop-opacity="0.6" />
      <stop offset="36%" stop-color="#e879f9" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#c084fc" stop-opacity="0.95" />
      <stop offset="63%" stop-color="#60a5fa" stop-opacity="0.95" />
      <stop offset="78%" stop-color="#22d3ee" stop-opacity="0.9" />
      <stop offset="92%" stop-color="#34d399" stop-opacity="0.75" />
      <stop offset="100%" stop-color="#a78bfa" stop-opacity="0.6" />
    </linearGradient>
    <linearGradient id="wormEdge" gradientUnits="userSpaceOnUse" x1="${X0}" y1="0" x2="${X1}" y2="0">
      <stop offset="0%" stop-color="#f9a8d4" />
      <stop offset="45%" stop-color="#e879f9" />
      <stop offset="70%" stop-color="#22d3ee" />
      <stop offset="100%" stop-color="#34d399" />
    </linearGradient>
    <filter id="wormGlow" x="-60%" y="-260%" width="220%" height="620%">
      <feGaussianBlur stdDeviation="12" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <filter id="wormHalo" x="-60%" y="-260%" width="220%" height="620%">
      <feGaussianBlur stdDeviation="30" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <g>
    <g>
      <animateTransform
        attributeName="transform"
        type="translate"
        dur="16s"
        repeatCount="indefinite"
        calcMode="spline"
        keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        keyTimes="0; 0.92; 1"
        values="${values}"
      />
      <path d="${bodyD}" fill="url(#wormBody)" />
      <path d="${topD}" fill="none" stroke="url(#wormEdge)" stroke-width="34" stroke-linecap="round" filter="url(#wormHalo)" opacity="0.4" />
      <path d="${topD}" fill="none" stroke="url(#wormEdge)" stroke-width="9" stroke-linecap="round" filter="url(#wormGlow)" opacity="0.95" />
    </g>
  </g>
</svg>`;
}

export default function WormWave({ className = 'absolute inset-0 w-full h-full mix-blend-screen pointer-events-none' }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: buildSvg() }} />;
}