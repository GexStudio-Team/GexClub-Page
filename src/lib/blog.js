export const BLOG_POSTS = [
  {
    slug: 'por-que-gex-no-es-un-club-escolar',
    title: 'Por qué Gex no es un club escolar',
    excerpt: 'Las diferencias entre aprender programación y construir un ecosistema que trata tu talento con el estándar de la industria.',
    date: '2026-07-28',
    author: 'Equipo Gex',
    category: 'Comunidad',
    readTime: '4 min',
    content: [
      'Hay una diferencia enorme entre un club escolar de programación y un ecosistema tecnológico juvenil. En un club, te enseñan conceptos. En Gex, construyes productos reales que se publican y se usan.',
      'Desde el primer día trabajamos con los estándares de la industria: control de versiones, revisión de código, pipelines de trabajo y entregas con fechas. No porque queramos exigir de más, sino porque creemos que el talento joven merece ser tratado en serio.',
      'Eso significa que no hay ejercicios decorativos. Hay proyectos, hackathons, mentorías y una comunidad que te empuja a sobresalir. Aquí equivocarse es parte del proceso, pero el estándar nunca baja.',
    ],
  },
  {
    slug: 'como-ganar-tu-primer-hackathon',
    title: 'Cómo ganar tu primer hackathon',
    excerpt: 'Cuatro claves que nuestros ganadores repiten: entender el problema, definir el alcance, iterar y presentar bien.',
    date: '2026-06-12',
    author: 'Valentina R.',
    category: 'Hackathons',
    readTime: '6 min',
    content: [
      'Ganar un hackathon no es solo programar rápido. Es resolver el problema correcto con una demo que se entienda en dos minutos.',
      'Primero: leé el briefing y hablá con el jurado para entender qué consideran valioso. Segundo: definí un alcance realista. Un producto terminado y pulido vence siempre a una idea ambiciosa a medio hacer.',
      'Tercero: dejá las features nuevas para el final. Priorizá que lo que prometiste funcione. Cuarto: practicá la demo. El impacto final lo decide cómo presentás, no cuántas líneas de código escribiste.',
    ],
  },
  {
    slug: 'de-idea-a-playable-tu-primer-videojuego',
    title: 'De la idea al playable: tu primer videojuego',
    excerpt: 'Guía para pasar de un concepto en tu cabeza a una versión jugable, sin atascarte en el perfeccionismo.',
    date: '2026-05-03',
    author: 'Mateo G.',
    category: 'Videojuegos',
    readTime: '5 min',
    content: [
      'El error más común de un game dev novato es quedarse planificando. El mayor avance llega cuando tienes un playable feo pero jugable.',
      'Empezá por un prototipo mínimo: un solo nivel, una mecánica, controles simples. Publicá esa versión y pedí feedback. El playable imperfecto te enseña más que diez documentos de diseño.',
      'Después iterá: pulí una mecánica por vez, sumá arte en capas y no tengas miedo de romper cosas. La excelencia en un juego se construye en iteraciones, no en el primer intento.',
    ],
  },
];

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
