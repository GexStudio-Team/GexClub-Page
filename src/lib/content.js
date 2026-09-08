export const HACKATHON_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf-oD62OK8vyiD1NCyAAsXEmdALE19RfgJ6PLlOHD0jriXcVQ/viewform?usp=publish-editor';

export const EVENTS = [
  {
    id: 1,
    name: 'Gex Club Hackathon 2026 — Crea el Futuro',
    description: 'Un día para idear y crear soluciones tecnológicas junto a otros jóvenes creadores.',
    date: '2026-10-03',
    startAt: '2026-10-03T08:30:00-05:00',
    time: '8:30 a. m. – 3:00 p. m.',
    status: 'próximamente',
    type: 'hackathon',
    location: 'Lugar por confirmar',
    capacity: 'Cupos limitados',
  },
];

export const PROJECTS = [
  {
    id: 0,
    slug: 'gex-os',
    name: 'GEX_OS — Terminal Interactiva',
    description: 'Terminal navegable dentro de la web: el core de Gex Club con comandos reales, neofetch y lluvia digital.',
    longDescription: 'Una terminal interactiva embebida en el sitio que convierte la visita en una experiencia de sistema operativo. Escribe help, explora el vault con ls/cat, consulta el hackathon activo y activa el modo matrix. Todo alimentado desde el contenido central del sitio.',
    category: 'software',
    tech: ['React 19', 'Next.js 16', 'Tailwind CSS 4', 'Canvas'],
    members: 'GexStudio Team',
    repoUrl: 'https://github.com/GexStudio-Team/GexClub-Page',
    accent: 'from-lime-500/30 via-green-600/10 to-cyan-600/30',
  },
  {
    id: 1,
    slug: 'novavice-os97',
    name: 'NovaVice OS97',
    description: 'Asistente de admisiones con IA, inspirado en Vice City y Macintosh OS, construido con RAG híbrido.',
    longDescription: 'Un asistente conversacional de admisiones que combina recuperación de información (RAG) con una interfaz de estética retro. El proyecto integra backend en FastAPI y frontend en Next.js 15.',
    category: 'software',
    tech: ['FastAPI', 'Next.js 15', 'RAG híbrido', 'IA'],
    members: 'GexStudio Team',
    repoUrl: 'https://github.com/nastex123/NovaVice_os97',
    accent: 'from-sky-500/30 via-blue-600/10 to-violet-600/30',
  },
  {
    id: 2,
    slug: 'codequest',
    name: 'CodeQuest',
    description: 'Plataforma educativa gamificada para aprender programación desde cero mediante micro-lecciones.',
    longDescription: 'Un proyecto de diseño curricular y prototipado que plantea lecciones cortas, práctica inmediata, repaso de errores y gamificación no punitiva. Su primer currículo se enfoca en fundamentos de Lua.',
    category: 'software',
    tech: ['HTML', 'Lua 5.4', 'Diseño instruccional', 'Gamificación'],
    members: 'GexStudio Team',
    repoUrl: 'https://github.com/nastex123/DuolingoProgramacion',
    accent: 'from-violet-500/30 via-fuchsia-600/10 to-blue-600/30',
  },
  {
    id: 3,
    slug: 'snake-love2d',
    name: 'Snake Love2D — Dungeon Crawler',
    description: 'Juego táctico de acción y sigilo que reinventa Snake en mazmorras de estética arcade cyberpunk.',
    longDescription: 'Un dungeon crawler hecho con Love2D que combina combate, IA táctica, biomas procedurales, jefes, tienda de objetos, perfiles locales y shaders CRT/Bloom.',
    category: 'videojuego',
    tech: ['Lua', 'Love2D', 'GLSL', 'Pixel art'],
    members: 'GexStudio Team',
    repoUrl: 'https://github.com/nastex123/Snake-with-Love2D',
    accent: 'from-cyan-500/30 via-blue-600/10 to-purple-600/30',
  },
];

export const BRANDON_CARRANZA = {
  name: 'Brandon Carranza Rangel',
  role: 'Desarrollador · GexStudio Team',
  email: 'brandonr.nas@gmail.com',
  github: 'https://github.com/nastex123',
  linkedin: 'https://www.linkedin.com/in/brandon-carranza-rangel-0816a3379',
};

export const BRANDON_TIMELINE = [
  {
    date: '31 ago 2026',
    title: 'NovaVice OS97',
    detail: 'Evolucionó la interfaz retro del asistente de admisiones con IA, ajustando animaciones ambientales y configuración del frontend.',
    url: 'https://github.com/nastex123/NovaVice_os97/commit/a7c5a52f3237d20c38b2483966cbb395e4d3c9d8',
  },
  {
    date: '30 ago 2026',
    title: 'CodeQuest',
    detail: 'Incorporó el módulo de variables y tipos de datos, un sistema formativo de errores y prototipos interactivos para el aprendizaje de Lua.',
    url: 'https://github.com/nastex123/DuolingoProgramacion/commit/c55d77e92392cf6d09a0b0d8e93490f3cd1a6fa2',
  },
  {
    date: '30 ago 2026',
    title: 'Snake Love2D',
    detail: 'Integró una nueva entrega del dungeon crawler de acción táctica construido con Lua y Love2D.',
    url: 'https://github.com/nastex123/Snake-with-Love2D/commit/87d5ac436e37890a128363183fda307b12374142',
  },
];

export const COMMUNITY_STATUS = {
  members: 'Comunidad en crecimiento',
  projects: 'Proyectos actuales',
  events: `${EVENTS.length} hackathon activo`,
};

export const COMMUNITY_PULSE = [
  { title: 'El primer reto está por comenzar', text: 'El Hackathon 2026 será el primer encuentro de Gex Club. Queremos que las primeras ideas salgan de aquí.' },
  { title: 'Un espacio para comenzar', text: 'No tienes que llegar con un proyecto terminado: la curiosidad y las ganas de crear también cuentan.' },
  { title: 'Código, diseño e ideas', text: 'En Gex Club hay lugar para quienes programan, diseñan, imaginan experiencias o quieren aprender.' },
  { title: 'La comunidad la construimos juntos', text: 'Cada persona que se suma ayuda a definir los próximos retos, proyectos y actividades.' },
  { title: 'Tu primera colaboración puede empezar aquí', text: 'Conocer gente con intereses parecidos es parte del reto: aprender, compartir y crear en equipo.' },
  { title: 'Próximamente, historias reales', text: 'Después del hackathon compartiremos experiencias verificadas de quienes hagan parte de esta primera edición.' },
];

export const SOCIALS = {
  instagram: 'https://www.instagram.com/joingexclub/',
  github: 'https://github.com/GexStudio-Team',
};

export const CONTACT_EMAIL = 'gexstudioteam@gmail.com';
