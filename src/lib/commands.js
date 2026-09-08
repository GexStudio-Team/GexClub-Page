import { PROJECTS, EVENTS, SOCIALS, CONTACT_EMAIL, HACKATHON_FORM_URL } from '@/lib/content';
import { GEX_ASCII_LOGO } from '@/components/gexos/GexAscii';

/**
 * GEX_OS — Lógica de comandos de la terminal.
 * Funciones puras: reciben args y devuelven líneas de output tipadas.
 * Los datos provienen de src/lib/content.js (fuente única de contenido).
 */

export const PROMPT = 'guest@gexclub:~$';

const LINE = {
  content: ({ text, tone = 'default' }) => ({ text, tone }),
  div: () => ({ text: '', tone: 'div' }),
  hl: (text) => ({ text, tone: 'primary' }),
  ok: (text) => ({ text, tone: 'success' }),
  err: (text) => ({ text, tone: 'error' }),
  dim: (text) => ({ text, tone: 'dim' }),
  lime: (text) => ({ text, tone: 'lime' }),
};

function padRight(s, n) {
  return s.length >= n ? s : s + ' '.repeat(n - s.length);
}

function formatEvent(ev) {
  const date = new Date(ev.startAt);
  const diff = Math.max(0, date.getTime() - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const countdown = days > 0 ? `in ${days}d ${hours}h` : diff > 0 ? 'hoy' : 'finalizado';
  return [
    LINE.hl('// ' + ev.name),
    LINE.content({ text: ev.description }),
    LINE.content({ text: '' }),
    LINE.content({ text: `  Fecha  : ${ev.date}` }),
    LINE.content({ text: `  Hora   : ${ev.time}` }),
    LINE.content({ text: `  Lugar  : ${ev.location}` }),
    LINE.content({ text: `  Cupos  : ${ev.capacity}` }),
    LINE.content({ text: `  Estado : ${ev.status} (${countdown})` }),
    LINE.content({ text: '' }),
    LINE.content({ text: '  Inscripción: ' + HACKATHON_FORM_URL, tone: 'primary' }),
  ];
}

const HELP_ENTRIES = [
  ['help', 'Muestra todos los comandos'],
  ['ls', 'Lista los proyectos del vault'],
  ['cat <slug>', 'Detalle de un proyecto'],
  ['hackathon', 'Próximo evento y enlace de inscripción'],
  ['social', 'Redes de Gex Club'],
  ['contacto', 'Correo de contacto'],
  ['whoami', 'Identidad del visitante'],
  ['neofetch', 'Identidad del sistema (con logo ASCII)'],
  ['matrix', 'Activa la lluvia digital (ESC para salir)'],
  ['sudo', 'Elevar privilegios… o no'],
  ['clear', 'Limpiar la terminal'],
  ['exit / cerrar', 'Volver a la web'],
];

const RUNNERS = {
  help: () => {
    const w = 20;
    return [
      LINE.lime('GEX_OS v1.0 — comando disponible'),
      LINE.content({ text: '' }),
      ...HELP_ENTRIES.map(([cmd, desc]) => LINE.content({ text: `  ${padRight(cmd, w)}${desc}` })),
      LINE.content({ text: '' }),
      LINE.dim('Sugerencia: usa TAB para autocompletar y ↑/↓ para el historial.'),
    ];
  },

  ls: () => {
    if (!PROJECTS.length) return [LINE.err('// el vault está vacío… por ahora.')];
    return [
      LINE.lime('// the_vault — proyectos activos'),
      LINE.content({ text: '' }),
      ...PROJECTS.map((p) => LINE.content({ text: `  ${padRight(p.slug, 26)}${p.category}  ·  ${p.name}` })),
      LINE.content({ text: '' }),
      LINE.dim(`  ${PROJECTS.length} proyecto(s) · usa "cat <slug>" para ver detalles.`),
    ];
  },

  cat: (args) => {
    const slug = (args[0] || '').toLowerCase();
    const p = PROJECTS.find((x) => x.slug.toLowerCase() === slug);
    if (!slug) return [LINE.err('Uso: cat <slug>. Prueba "ls" para ver los slugs.')];
    if (!p) return [LINE.err(`// "${slug}" no existe en el vault.`), LINE.dim('Usa "ls" para listar los proyectos.')];
    return [
      LINE.hl('// ' + p.name),
      LINE.content({ text: p.longDescription || p.description }),
      LINE.content({ text: '' }),
      LINE.content({ text: `  Categoría : ${p.category}` }),
      LINE.content({ text: `  Miembros  : ${p.members}` }),
      LINE.content({ text: `  Tecnología: ${p.tech.join(', ')}` }),
      LINE.content({ text: '' }),
      LINE.content({ text: '  Repo: ' + p.repoUrl, tone: 'primary' }),
    ];
  },

  hackathon: () => {
    if (!EVENTS.length) return [LINE.err('// sin eventos programados.')];
    return EVENTS.flatMap(formatEvent);
  },

  social: () => [
    LINE.lime('// redes'),
    LINE.content({ text: '' }),
    LINE.content({ text: `  Instagram : ${SOCIALS.instagram}` }),
    LINE.content({ text: `  GitHub    : ${SOCIALS.github}` }),
  ],

  contacto: () => [
    LINE.lime('// contacto y alianzas'),
    LINE.content({ text: '' }),
    LINE.content({ text: `  Correo: ${CONTACT_EMAIL}` }),
    LINE.dim('  Respuesta en máximo 48 h — forjando el futuro juntos.'),
  ],

  whoami: () => [
    LINE.hl('guest'),
    LINE.content({ text: '  Miembro de Gex Club · EST. 2024' }),
    LINE.content({ text: '  Filosofía: Create. Learn. Collaborate. Excel.' }),
    LINE.content({ text: '  Status  : apto para construir' }),
  ],

  neofetch: () => [
    LINE.content({ text: GEX_ASCII_LOGO, tone: 'lime' }),
    LINE.content({ text: '' }),
    LINE.content({ text: `  ${padRight('Usuario', 14)}guest@gex-club` }),
    LINE.content({ text: `  ${padRight('Sistema', 14)}GEX_OS v1.0 [WEB]` }),
    LINE.content({ text: `  ${padRight('Shell', 14)}gex-sh (react 19)` }),
    LINE.content({ text: `  ${padRight('Ecosistema', 14)}Global Ecosystem for eXcellence` }),
    LINE.content({ text: `  ${padRight('Fundado', 14)}EST. 2024` }),
    LINE.content({ text: `  ${padRight('Proyectos', 14)}${PROJECTS.length}` }),
    LINE.content({ text: `  ${padRight('Hackathons', 14)}${EVENTS.length} activo` }),
    LINE.content({ text: `  ${padRight('Uptime', 14)} 2 años de comunidad` }),
  ],

  matrix: () => [{ text: '', tone: 'matrix' }],

  sudo: () => [
    LINE.err('Permission denied...'),
    LINE.content({ text: '' }),
    LINE.lime('  Buen intento, pero en Gex Club todos los privilegios'),
    LINE.lime('  se ganan con código: escrita > sudo. 🤝'),
    LINE.content({ text: '' }),
    LINE.dim('  (PD: prueba "nosotros" o revisa /about)'),
  ],

  clear: () => [{ text: '', tone: 'clear' }],

  exit: () => [{ text: '', tone: 'exit' }],
  cerrar: () => [{ text: '', tone: 'exit' }],

  pwd: () => [LINE.content({ text: '/home/guest/gex-club' })],
  date: () => [LINE.content({ text: new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' }) })],
};

const ALIASES = {
  '?': 'help',
  lista: 'ls',
  proyectos: 'ls',
  evento: 'hackathon',
  eventos: 'hackathon',
  redes: 'social',
  correo: 'contacto',
  salir: 'exit',
};

export function runCommand(raw) {
  const [cmd, ...args] = raw.trim().split(/\s+/);
  const key = ALIASES[cmd?.toLowerCase()] || cmd?.toLowerCase();
  const runner = RUNNERS[key];

  if (!key) return [LINE.content({ text: '' })];
  if (!runner) {
    return [
      LINE.err(`bash: ${cmd}: comando no encontrado`),
      LINE.dim('Escribe "help" para ver los comandos disponibles.'),
    ];
  }
  return runner(args);
}

export function suggestCommand(raw) {
  const [cmd] = raw.trim().split(/\s+/);
  if (!cmd) return null;
  const partial = cmd.toLowerCase();
  const all = [...Object.keys(RUNNERS), ...Object.keys(ALIASES), ...HELP_ENTRIES.map(([c]) => c)];
  const match = all.find((c) => c.startsWith(partial) && c !== partial);
  return match || null;
}