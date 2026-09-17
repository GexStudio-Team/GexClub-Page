/**
 * WormWave — Gusano de aurora boreal que barre el banner "Proyectos actuales"
 * de la ventana de Proyectos.
 *
 * Banda segmentada (tipo lombriz) en colores pastel de aurora boreal viva
 * (rosa → fucsia → violeta → azul → cian → esmeralda) que cruza el recuadro
 * en diagonal (esquina inferior izquierda → superior derecha), tapa el banner
 * al pasar y se destapa desde donde comenzó. Loop infinito.
 *
 * IMPORTANTE: el SVG se inyecta como HTML nativo (dangerouslySetInnerHTML)
 * porque React descarta los atributos SMIL (animateTransform, values, dur…)
 * cuando los renderiza como elementos JSX, y la animación nunca se ejecuta.
 * Con HTML string el navegador corre SMIL directamente (compatible con
 * Chrome, Firefox y Safari).
 */
const X0 = -1500;
const X1 = 1500;
const Y0 = 650;
const SEG = 200;
const AMP1 = 210;
const AMP2 = 110;

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

// Recorrido del frente sobre el viewBox 1000x1000 (diagonal ±~707)
const R = 1000 * Math.SQRT1_2;
const T_START = Math.round(-R - X1); // frente fuera por la izquierda
const T_END = Math.round(R - X1); // frente fuera por la derecha

function buildSvg() {
  const topD = buildTopEdge();
  const bodyD = buildBody();
  const values = `${T_START} 0; ${T_END} 0; ${T_START} 0`;

  return `
<svg class="h-full w-full" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
  <defs>
    <linearGradient id="wormBody" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-45 500 500)" x1="${X0}" y1="0" x2="${X1}" y2="0">
      <stop offset="0%" stop-color="#f9a8d4" stop-opacity="0" />
      <stop offset="22%" stop-color="#f9a8d4" stop-opacity="0.6" />
      <stop offset="36%" stop-color="#e879f9" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#c084fc" stop-opacity="0.95" />
      <stop offset="63%" stop-color="#60a5fa" stop-opacity="0.95" />
      <stop offset="78%" stop-color="#22d3ee" stop-opacity="0.9" />
      <stop offset="92%" stop-color="#34d399" stop-opacity="0.75" />
      <stop offset="100%" stop-color="#a78bfa" stop-opacity="0.6" />
    </linearGradient>
    <linearGradient id="wormEdge" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-45 500 500)" x1="${X0}" y1="0" x2="${X1}" y2="0">
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

  <g transform="rotate(-45 500 500)">
    <g>
      <animateTransform
        attributeName="transform"
        type="translate"
        dur="8s"
        repeatCount="indefinite"
        calcMode="spline"
        keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
        keyTimes="0; 0.5; 1"
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