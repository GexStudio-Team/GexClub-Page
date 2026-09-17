/**
 * AuroraWave — Aurora boreal SVG (Wave Animation + Glow Path Effect).
 *
 * Capas de ondas onduladas (paths SVG) que se desplazan horizontalmente a
 * través del contenedor de forma discontinua (avanzan por tramos con pausas),
 * con efecto de brillo (feGaussianBlur + feMerge) y palpitación de opacidad.
 *
 * - viewBox 1200x320 con preserveAspectRatio="none": se estira al contenedor
 *   conservando la forma física del cuadro que lo envuelve.
 * - Los paths se dibujan más anchos que el viewBox para que, al trasladarse,
 *   las ondas entren y salgan por los bordes sin dejar huecos.
 * - Animaciones SMIL autocontenidas (sin JS ni CSS externo).
 */
export default function AuroraWave({ className = '' }) {
  const waveA =
    'M -700 190 q 100 -150 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0';
  const waveB =
    'M -700 150 q 100 120 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0';

  return (
    <svg className={className} viewBox="0 0 1200 320" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="auroraWaveA" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#008BFE" />
          <stop offset="45%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="auroraWaveB" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>

        {/* Glow Path Effect — brillo intenso alrededor del trazo */}
        <filter id="auroraGlow" x="-30%" y="-160%" width="160%" height="420%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Halo difuso — luz de fondo suave tipo aurora */}
        <filter id="auroraSoft" x="-30%" y="-200%" width="160%" height="500%">
          <feGaussianBlur stdDeviation="26" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Capa difusa (fondo luminoso) */}
      <g filter="url(#auroraSoft)">
        <path d={waveA} fill="none" stroke="url(#auroraWaveA)" strokeWidth="30" strokeLinecap="round" opacity="0.35">
          <animateTransform
            attributeName="transform"
            type="translate"
            dur="14s"
            repeatCount="indefinite"
            values="-700 0; 500 0; 500 0; -700 0"
            keyTimes="0; 0.45; 0.8; 1"
          />
          <animate
            attributeName="opacity"
            dur="14s"
            repeatCount="indefinite"
            values="0.35; 0.5; 0.3; 0.45; 0.35"
            keyTimes="0; 0.25; 0.5; 0.75; 1"
          />
        </path>
      </g>

      {/* Onda principal — azul/violeta con glow */}
      <g filter="url(#auroraGlow)">
        <path d={waveA} fill="none" stroke="url(#auroraWaveA)" strokeWidth="12" strokeLinecap="round" opacity="0.55">
          <animateTransform
            attributeName="transform"
            type="translate"
            dur="11s"
            begin="-3s"
            repeatCount="indefinite"
            values="-700 0; 500 0; 500 0; -700 0"
            keyTimes="0; 0.45; 0.8; 1"
          />
          <animate
            attributeName="opacity"
            dur="11s"
            begin="-3s"
            repeatCount="indefinite"
            values="0.55; 0.75; 0.45; 0.65; 0.55"
            keyTimes="0; 0.25; 0.5; 0.75; 1"
          />
        </path>
      </g>

      {/* Onda secundaria — cian/violeta en contrafase, más fina */}
      <g filter="url(#auroraGlow)">
        <path d={waveB} fill="none" stroke="url(#auroraWaveB)" strokeWidth="7" strokeLinecap="round" opacity="0.5">
          <animateTransform
            attributeName="transform"
            type="translate"
            dur="9s"
            begin="-5s"
            repeatCount="indefinite"
            values="500 0; -700 0; -700 0; 500 0"
            keyTimes="0; 0.5; 0.85; 1"
          />
          <animate
            attributeName="opacity"
            dur="9s"
            begin="-5s"
            repeatCount="indefinite"
            values="0.5; 0.7; 0.4; 0.6; 0.5"
            keyTimes="0; 0.25; 0.5; 0.75; 1"
          />
        </path>
      </g>
    </svg>
  );
}