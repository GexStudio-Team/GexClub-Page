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
  { id: 1, name: 'Próximo proyecto', description: 'Aquí mostraremos los productos creados por la comunidad.', category: 'software', tech: ['En construcción'], members: '—' },
  { id: 2, name: 'Próximo videojuego', description: 'Espacio reservado para el próximo proyecto jugable de Gex Club.', category: 'videojuego', tech: ['En construcción'], members: '—' },
  { id: 3, name: 'Iniciativa de comunidad', description: 'Talleres, recursos y colaboraciones que nacerán dentro del club.', category: 'comunidad', tech: ['En construcción'], members: '—' },
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
