import { useId } from 'react';

const BLOCKS = [
  { id: 'A', x: 90, y: 90, w: 130, h: 46 },
  { id: 'B1', x: 220, y: 90, w: 70, h: 46 },
  { id: 'B2', x: 290, y: 90, w: 70, h: 46 },
  { id: 'C', x: 360, y: 90, w: 60, h: 46 },
  { id: 'D', x: 90, y: 136, w: 46, h: 120, lift: 1 },
  { id: 'E', x: 90, y: 256, w: 46, h: 118, lift: 3 },
  { id: 'F', x: 90, y: 374, w: 46, h: 56 },
  { id: 'G', x: 136, y: 374, w: 118, h: 56 },
  { id: 'H', x: 254, y: 374, w: 106, h: 56, lift: 3, glass: true },
  { id: 'I', x: 360, y: 374, w: 60, h: 56 },
  { id: 'J', x: 360, y: 136, w: 60, h: 104 },
  { id: 'L', x: 210, y: 288, w: 210, h: 52, lift: 4, accent: true, spine: true },
  { id: 'M1', x: 170, y: 160, w: 34, h: 34, lift: 6, glass: true, iso: true },
  { id: 'M2', x: 305, y: 180, w: 30, h: 30, lift: 8, iso: true },
  { id: 'M3', x: 240, y: 238, w: 24, h: 24, lift: 5, iso: true },
  { id: 'O1', x: 424, y: 64, w: 22, h: 22, lift: 6, iso: true },
  { id: 'O2', x: 430, y: 196, w: 24, h: 24, lift: 4, iso: true },
  { id: 'O3', x: 430, y: 316, w: 20, h: 20, lift: 7, iso: true },
  { id: 'O4', x: 292, y: 436, w: 22, h: 22, lift: 5, iso: true },
  { id: 'O5', x: 62, y: 398, w: 18, h: 18, lift: 6, iso: true },
];

const EDGES = [
  ['A', 'B1'],
  ['B1', 'B2'],
  ['B2', 'C'],
  ['A', 'D'],
  ['D', 'E'],
  ['E', 'F'],
  ['F', 'G'],
  ['G', 'H'],
  ['H', 'I'],
  ['C', 'J'],
  ['J', 'L'],
  ['L', 'I'],
  ['B2', 'M2'],
  ['J', 'M2'],
  ['M2', 'M3'],
  ['M3', 'L'],
  ['E', 'M1'],
  ['D', 'M1'],
  ['M1', 'E'],
  ['C', 'O1'],
  ['J', 'O2'],
  ['L', 'O3'],
  ['H', 'O4'],
  ['F', 'O5'],
];

const PARTICLES = [
  [46, 76, 1.6, 0.7], [84, 44, 1.2, 0.5], [120, 66, 1.0, 0.4], [160, 42, 1.4, 0.6],
  [210, 58, 1.0, 0.45], [252, 40, 1.3, 0.55], [300, 62, 1.1, 0.5], [346, 34, 1.5, 0.6],
  [398, 56, 1.2, 0.5], [452, 48, 1.0, 0.4], [486, 90, 1.4, 0.55], [500, 150, 1.1, 0.5],
  [60, 150, 1.3, 0.6], [40, 240, 1.0, 0.45], [66, 320, 1.5, 0.6], [44, 420, 1.2, 0.5],
  [150, 470, 1.1, 0.45], [240, 488, 1.4, 0.55], [380, 480, 1.0, 0.4], [470, 440, 1.3, 0.5],
  [500, 330, 1.5, 0.6], [488, 250, 1.1, 0.45], [52, 500, 1.2, 0.5], [500, 40, 1.3, 0.5],
  [140, 220, 1.6, 0.7], [330, 260, 1.4, 0.55], [400, 160, 1.2, 0.5], [250, 130, 1.0, 0.4],
  [196, 340, 1.5, 0.6], [40, 60, 1.2, 0.5], [470, 200, 1.6, 0.7], [120, 410, 1.3, 0.5],
];

const STARS = [
  [70, 120, 1], [200, 150, 1], [310, 90, 1], [440, 120, 1], [120, 300, 1],
  [480, 300, 1], [60, 260, 1], [260, 480, 1], [470, 60, 1], [30, 460, 1],
];

const nodeCenters = ['A', 'B1', 'B2', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L'];

function IsoCube({ cx, cy, s, glass = false }) {
  const w = s;
  const h = s * 0.52;
  const depth = s * 0.95;
  const y0 = cy - h;
  const yc = cy;
  const yb = cy + depth;
  const top = `M${cx} ${y0} L${cx + w} ${yc} L${cx} ${yc + h} L${cx - w} ${yc} Z`;
  const left = `M${cx - w} ${yc} L${cx} ${yc + h} L${cx} ${yb} L${cx - w} ${yc + depth} Z`;
  const right = `M${cx + w} ${yc} L${cx} ${yc + h} L${cx} ${yb} L${cx + w} ${yc + depth} Z`;
  if (glass) {
    return (
      <g>
        <path d={top} fill="rgba(195,245,255,0.08)" stroke="rgba(180,250,255,0.45)" strokeWidth="1" />
        <path d={left} fill="rgba(195,245,255,0.05)" stroke="rgba(180,250,255,0.3)" strokeWidth="1" />
        <path d={right} fill="rgba(160,220,255,0.03)" stroke="rgba(180,250,255,0.22)" strokeWidth="1" />
      </g>
    );
  }
  return (
    <g>
      <path d={top} fill="#3a4250" />
      <path d={left} fill="#20262f" />
      <path d={right} fill="#0c0e13" />
      <path d={`M${cx} ${y0} L${cx + w} ${yc}`} stroke="rgba(200,255,61,0.16)" strokeWidth="1" />
    </g>
  );
}

function Slab({ b }) {
  const lift = b.lift || 0;
  const x = b.x;
  const y = b.y - lift;
  const w = b.w;
  const h = b.h;
  const glass = b.glass;

  return (
    <g>
      <rect x={x + 9} y={y + 11} width={w} height={h} rx={4} fill="#03040a" opacity="0.9" />
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={4}
        fill={glass ? 'rgba(190,235,255,0.07)' : '#1a1f27'}
        stroke={glass ? 'rgba(190,255,250,0.5)' : '#07080c'}
        strokeWidth="1.5"
      />
      {glass ? (
        <>
          <path d={`M${x + 4} ${y + 4} h${w - 8}`} stroke="rgba(255,255,255,0.35)" strokeWidth="1" fill="none" />
          <path d={`M${x + 4} ${y + 4} v${h - 8}`} stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />
          <path d={`M${x + w - 4} ${y + h - 4} v${8 - h}`} stroke="rgba(160,255,255,0.3)" strokeWidth="1" fill="none" />
        </>
      ) : (
        <>
          <rect x={x} y={y} width={w} height={5} rx={2.5} fill={b.accent ? '#c8ff3d' : '#3b4553'} opacity={b.accent ? 0.9 : 0.85} />
          <rect x={x + 3} y={y + 3} width={5} height={h - 6} rx={2.5} fill="#2b3340" opacity="0.7" />
          <rect x={x + w - 5} y={y + 3} width={5} height={h - 6} rx={2.5} fill="#0a0c11" opacity="0.85" />
          <rect x={x + 3} y={y + h - 5} width={w - 6} height={5} rx={2.5} fill="#04050a" opacity="0.95" />
          <line x1={x + 8} y1={y + 8} x2={x + w - 8} y2={y + 8} stroke="rgba(225,240,255,0.16)" strokeWidth="1" />
        </>
      )}
      {b.spine && <line x1={x + 10} y1={y + 26} x2={x + w - 10} y2={y + 26} stroke="#c8ff3d" strokeWidth="1.5" opacity="0.9" />}
    </g>
  );
}

export default function GexMark({ className = '' }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const bloomId = `gex-bloom-${uid}`;
  const atmosId = `gex-atmos-${uid}`;

  const byId = Object.fromEntries(BLOCKS.map((b) => [b.id, b]));
  const center = (id) => {
    const b = byId[id];
    return { x: b.x + b.w / 2, y: b.y - (b.lift || 0) + b.h / 2 };
  };

  return (
    <svg
      viewBox="0 0 520 520"
      className={className}
      role="img"
      aria-label="Isotipo de Gex Club"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id={bloomId} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id={atmosId} cx="50%" cy="46%" r="55%">
          <stop offset="0%" stopColor="rgba(200,255,61,0.05)" />
          <stop offset="55%" stopColor="rgba(24,30,46,0.28)" />
          <stop offset="100%" stopColor="rgba(4,6,10,0)" />
        </radialGradient>
      </defs>

      <circle cx="260" cy="250" r="268" fill={`url(#${atmosId})`} />

      <g fill="#d8ff57">
        {STARS.map(([x, y], i) => (
          <path key={i} d={`M${x - 2} ${y} h4 M${x} ${y - 2} v4`} stroke="#a8f0ff" strokeWidth="0.8" opacity="0.4" fill="none" />
        ))}
        {PARTICLES.map(([x, y, r, o], i) => (
          <circle key={i} cx={x} cy={y} r={r} opacity={o * 0.8} fill={i % 3 === 0 ? '#d8ff57' : i % 3 === 1 ? '#ffffff' : '#8ff2ff'} />
        ))}
      </g>

      <g filter={`url(#${bloomId})`}>
        {EDGES.map(([a, b], i) => {
          const p1 = center(a);
          const p2 = center(b);
          return <path key={i} d={`M${p1.x} ${p1.y} L${p2.x} ${p2.y}`} stroke="#c8ff3d" strokeWidth="4" opacity="0.16" />;
        })}
      </g>

      {EDGES.map(([a, b], i) => {
        const p1 = center(a);
        const p2 = center(b);
        return <path key={i} d={`M${p1.x} ${p1.y} L${p2.x} ${p2.y}`} stroke="#c8ff3d" strokeWidth="1.3" opacity="0.95" />;
      })}

      {nodeCenters.map((id) => {
        const p = center(id);
        return (
          <g key={id}>
            <circle cx={p.x} cy={p.y} r="3.6" fill="#c8ff3d" opacity="0.22" />
            <circle cx={p.x} cy={p.y} r="1.8" fill="#e2ff6e" />
          </g>
        );
      })}

      {BLOCKS.map((b) => {
        const lift = b.lift || 0;
        if (b.iso) {
          return <IsoCube key={b.id} cx={b.x + b.w / 2} cy={b.y - lift + b.h / 2} s={Math.min(b.w, b.h) * 0.62} glass={b.glass} />;
        }
        return <Slab key={b.id} b={b} />;
      })}
    </svg>
  );
}