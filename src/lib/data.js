// Backend simple en memoria. Los datos se reinician cada vez que el servidor
// se reinicia. Cuando conectes una base de datos real, reemplaza las funciones
// de este archivo (getEvents, registerEvent, getMembers, addMember, getProjects)
// por las llamadas reales — los componentes y las API routes no necesitan cambiar.

const SEED_EVENTS = [
  { id: 1, name: 'Game Jam: Pixel Revolution', description: 'Game jam de 72h con temática sorpresa. Arte, diseño, narrativa y programación unidos en un mismo juego.', date: '2026-09-19', status: 'proximamente', type: 'hackathon', registered: 12, capacity: 40 },
  { id: 2, name: 'Meetup #12 — Demos & Code Review', description: 'Evento mensual donde los miembros presentan avances de proyectos y reciben feedback de mentores.', date: '2026-08-29', status: 'proximamente', type: 'meetup', registered: 18, capacity: 50 },
  { id: 3, name: 'Workshop: Intro a la IA Generativa', description: 'Sesión hands-on sobre cómo integrar modelos de lenguaje en tus proyectos. De cero a primer prototipo.', date: '2026-08-23', status: 'activo', type: 'workshop', registered: 30, capacity: 30 },
  { id: 4, name: 'Gex Hackathon Vol.06 — Code the Future', description: '48 horas para construir un proyecto que resuelva un problema real de tu ciudad. Equipos de hasta 4 miembros.', date: '2026-08-15', status: 'activo', type: 'hackathon', registered: 41, capacity: 60 },
  { id: 5, name: 'Hackathon Nacional Juvenil 2025', description: 'Edición anterior. 80 jóvenes, 20 proyectos, 3 ganadores. El estándar que queremos superar.', date: '2025-11-09', status: 'finalizado', type: 'hackathon', registered: 80, capacity: 80 },
];

const SEED_MEMBERS = [
  { id: 1, name: 'Valentina Ríos', role: 'programador', bio: 'Full-stack y backend. Ganadora del Hackathon Vol.05.', github: 'valentinarios' },
  { id: 2, name: 'Mateo Gómez', role: 'disenador', bio: 'UX/UI y dirección de arte en videojuegos.', github: 'mateogomez' },
  { id: 3, name: 'Camila Pérez', role: 'artista', bio: 'Ilustración digital y concept art.', github: 'camilaperez' },
  { id: 4, name: 'Tomás Ledesma', role: 'creador_de_historias', bio: 'Narrativa, lore y diseño de mundo.', github: '' },
  { id: 5, name: 'Sofía Núñez', role: 'disenador_de_sonido', bio: 'Música original y diseño sonoro para juegos.', github: '' },
  { id: 6, name: 'Bruno Castro', role: 'programador', bio: 'Game dev con Unity y Godot.', github: 'brunocastro' },
  { id: 7, name: 'Lucía Méndez', role: 'disenador', bio: 'Motion graphics y branding.', github: '' },
  { id: 8, name: 'Joaquín Vera', role: 'programador', bio: 'IA y data science.', github: 'joaquinvera' },
];

const SEED_PROJECTS = [
  { id: 1, name: 'NeonRoute', description: 'Plataforma web para optimizar rutas de transporte escolar usando IA. Redujo tiempos un 23% en piloto.', category: 'software', tech: ['React', 'Node.js', 'Python', 'Mapbox'], members: 5 },
  { id: 2, name: 'Pixel Dungeon: Volt', description: 'Roguelike de acción con estética neón. Ganador del Game Jam 2025.', category: 'videojuego', tech: ['Godot', 'GDScript', 'Aseprite'], members: 4 },
  { id: 3, name: 'CodeMentor Bot', description: 'Asistente de Discord que resuelve dudas de código y sugiere mejoras en tiempo real.', category: 'software', tech: ['TypeScript', 'Discord.js', 'OpenAI'], members: 3 },
  { id: 4, name: 'Sonic Lab', description: 'Herramienta web para generar y mezclar SFX para videojuegos de forma colaborativa.', category: 'comunidad', tech: ['Web Audio API', 'Vue', 'Firebase'], members: 2 },
  { id: 5, name: 'Atlas Engine', description: 'Motor de videojuegos 2D educativo creado por miembros para enseñar programación a nuevos ingresos.', category: 'videojuego', tech: ['C++', 'OpenGL', 'Lua'], members: 6 },
  { id: 6, name: 'GexBoard', description: 'Dashboard comunitario con métricas de proyectos, eventos y leaderboard de hackathons.', category: 'comunidad', tech: ['React', 'Recharts', 'Supabase'], members: 4 },
];

// globalThis se usa para que los datos sobrevivan al hot-reload de Next.js en
// desarrollo (si no, cada recarga de módulo reiniciaría el "store").
function getStore() {
  if (!globalThis.__GEX_STORE__) {
    globalThis.__GEX_STORE__ = {
      events: SEED_EVENTS.map((e) => ({ ...e })),
      members: SEED_MEMBERS.map((m) => ({ ...m })),
      projects: SEED_PROJECTS.map((p) => ({ ...p })),
    };
  }
  return globalThis.__GEX_STORE__;
}

export function getEvents() {
  return getStore().events;
}

export function registerEvent(id) {
  const store = getStore();
  const event = store.events.find((e) => e.id === id);
  if (!event) return null;
  event.registered = Math.min(event.registered + 1, event.capacity);
  return event;
}

export function getMembers() {
  return getStore().members;
}

export function addMember({ name, role, github }) {
  const store = getStore();
  const member = {
    id: Date.now(),
    name,
    role,
    github: github || '',
    bio: '',
  };
  store.members.push(member);
  return member;
}

export function getProjects() {
  return getStore().projects;
}
