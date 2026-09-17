/**
 * WormWave — Gusano de aurora boreal que barre el recuadro "Proyectos actuales"
 * de la ventana de Proyectos (banner del vault).
 *
 * Una banda segmentada (tipo lombriz, protuberancias redondeadas alternadas,
 * NO una onda de radio fina) que cruza el recuadro en diagonal, de la esquina
 * inferior izquierda a la superior derecha, con colores de aurora boreal viva
 * en tonos pastel llamativos (rosa, fucsia, violeta, azul, cian esmeralda).
 * La cola es transparente: al volver, el rastro se destapa desde el lugar
 * donde comenzó. Loop infinito con regreso suave.
 *
 * Uso dentro de un contenedor con `relative overflow-hidden`:
 *   <WormWave className="absolute inset-0 w-full h-full mix-blend-screen" />
 */
const X0 = -1500;
const X1 = 1500;
const Y0 = 420;
const SEG = 220;
const AMP1 = 170;
const AMP2 = 95;

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

// Recorrido del frente sobre el viewBox 1000x1000 (diagonal ±~707)
const R = 1000 * Math.SQRT1_2; // ≈ 707
const T_START = Math.round(-R - X1); // frente fuera por la izquierda
const T_END = Math.round(R - X1); // frente fuera por la derecha

export default function WormWave({ className = 'absolute inset-0 w-full h-full mix-blend-screen' }) {
  const bodyD = buildBody();
  const topD = buildTopEdge();
  const translateValues = `${T_START} 0; ${T_END} 0; ${T_START} 0`;

  return (
    <svg className={className} viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        {/* Cuerpo: aurora boreal pastel viva (rosa → fucsia → violeta → azul → cian → esmeralda) */}
        <linearGradient id="wormBody" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-45 500 500)" x1={X0} y1="0" x2={X1} y2="0">
          <stop offset="0%" stopColor="#f9a8d4" stopOpacity="0" />
          <stop offset="22%" stopColor="#f9a8d4" stopOpacity="0.45" />
          <stop offset="36%" stopColor="#e879f9" stopOpacity="0.65" />
          <stop offset="50%" stopColor="#c084fc" stopOpacity="0.8" />
          <stop offset="63%" stopColor="#60a5fa" stopOpacity="0.85" />
          <stop offset="78%" stopColor="#22d3ee" stopOpacity="0.8" />
          <stop offset="92%" stopColor="#34d399" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.5" />
        </linearGradient>

        {/* Borde delantero: pastel brillante */}
        <linearGradient id="wormEdge" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-45 500 500)" x1={X0} y1="0" x2={X1} y2="0">
          <stop offset="0%" stopColor="#f9a8d4" />
          <stop offset="45%" stopColor="#e879f9" />
          <stop offset="70%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>

        {/* Glow Path Effect — brillo vivo alrededor del perfil del gusano */}
        <filter id="wormGlow" x="-60%" y="-260%" width="220%" height="620%">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Halo difuso — luz de aurora que envuelve al gusano */}
        <filter id="wormHalo" x="-60%" y="-260%" width="220%" height="620%">
          <feGaussianBlur stdDeviation="30" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Cuerpo alineado con la diagonal, animado de izq-inf → der-sup */}
      <g transform="rotate(-45 500 500)">
        <path d={bodyD} fill="url(#wormBody)" />
        {/* Halo difuso del borde delantero */}
        <path d={topD} fill="none" stroke="url(#wormEdge)" strokeWidth="34" strokeLinecap="round" filter="url(#wormHalo)" opacity="0.4">
          <animateTransform
            attributeName="transform"
            type="translate"
            dur="10s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
            keyTimes="0; 0.5; 1"
            values={translateValues}
          />
        </path>
        {/* Glow nítido del borde delantero (el perfil del gusano) */}
        <path d={topD} fill="none" stroke="url(#wormEdge)" strokeWidth="9" strokeLinecap="round" filter="url(#wormGlow)" opacity="0.95">
          <animateTransform
            attributeName="transform"
            type="translate"
            dur="10s"
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