/**
 * WormWave — Gusano diagonal que barre la ventana de Proyectos.
 *
 * Un cuerpo segmentado (tipo lombriz, protuberancias redondeadas alternadas,
 * NO una onda de radio fina) que avanza en diagonal desde la esquina
 * inferior izquierda hacia la superior derecha, tapando toda la pantalla,
 * y que al volver se destapa desde el lugar donde comenzó. Loop infinito.
 *
 * - La banda/cuerpo es más ancha que la diagonal del viewport: al pasar por
 *   el centro cubre la pantalla completa (fase "tapa todo").
 * - Gradiente de opacidad a lo largo del cuerpo: cola transparente
 *   (destape desde el inicio) → frente opaco (tapa).
 * - Borde delantero con glow (feGaussianBlur + feMerge) en colores Gex Club.
 * - Animación SMIL pura (sin JS): translate a lo largo de la diagonal con
 *   regreso suave = "vuelva y empiece".
 */
const X0 = -2600;
const X1 = 2600;
const Y0 = 1500;
const SEG = 240;
const AMP1 = 190;
const AMP2 = 100;

/** Borde superior ondulado (gusanos segmentados) de x0 a x1. */
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

/** Cuerpo completo: borde superior + costado derecho + borde inferior (fase) + cierre. */
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

// Recorrido del frente sobre la pantalla local (viewBox 1000x1000, diagonal ±~707)
const R = 1000 * Math.SQRT1_2; // ≈ 707
const T_START = Math.round(-R - X1); // frente fuera por la izquierda
const T_END = Math.round(R - X1); // frente fuera por la derecha

export default function WormWave({ className = 'fixed inset-0 z-[80] pointer-events-none' }) {
  const bodyD = buildBody();
  const topD = buildTopEdge();
  const translateValues = `${T_START} 0; ${T_END} 0; ${T_START} 0`;

  return (
    <svg className={className} viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="wormBody" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-45 500 500)" x1={X0} y1="0" x2={X1} y2="0">
          <stop offset="0%" stopColor="var(--background)" stopOpacity="0" />
          <stop offset="25%" stopColor="var(--background)" stopOpacity="0" />
          <stop offset="38%" stopColor="var(--background)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--background)" stopOpacity="0.97" />
        </linearGradient>
        <linearGradient id="wormEdge" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-45 500 500)" x1={X0} y1="0" x2={X1} y2="0">
          <stop offset="0%" stopColor="#008BFE" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <filter id="wormGlow" x="-60%" y="-260%" width="220%" height="620%">
          <feGaussianBlur stdDeviation="14" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="wormHalo" x="-60%" y="-260%" width="220%" height="620%">
          <feGaussianBlur stdDeviation="34" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Cuerpo (tapón) alineado con la diagonal, animado de izq-inf → der-sup */}
      <g transform="rotate(-45 500 500)">
        <path d={bodyD} fill="url(#wormBody)">
          <animateTransform
            attributeName="transform"
            type="translate"
            dur="11s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
            keyTimes="0; 0.5; 1"
            values={translateValues}
          />
        </path>

        {/* Halo difuso del borde delantero */}
        <path d={topD} fill="none" stroke="url(#wormEdge)" strokeWidth="34" strokeLinecap="round" filter="url(#wormHalo)" opacity="0.35">
          <animateTransform
            attributeName="transform"
            type="translate"
            dur="11s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
            keyTimes="0; 0.5; 1"
            values={translateValues}
          />
        </path>

        {/* Glow nítido del borde delantero (el perfil del gusano) */}
        <path d={topD} fill="none" stroke="url(#wormEdge)" strokeWidth="10" strokeLinecap="round" filter="url(#wormGlow)" opacity="0.85">
          <animateTransform
            attributeName="transform"
            type="translate"
            dur="11s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
            keyTimes="0; 0.5; 1"
            values={translateValues}
          />
        </path>
      </g>
    </svg>
  );
}