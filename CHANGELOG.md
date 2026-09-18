# Changelog — Gex Club · Sitio Oficial

Todos los cambios notables de este repositorio se documentan en este archivo.
Formato basado en [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Las marcas de tiempo corresponden a la zona horaria `America/Bogota` (UTC−05:00).

---

## [Unreleased]

### Changed

- **Sobre Nosotros — imagen proporcionada al texto** (`src/app/about/page.js`): se **elimina el `min-h-[40vh]`** de la columna izquierda (era lo que estiraba el recuadro y dejaba espacio vacío debajo del texto) y la imagen `frame2.jpg` pasa de `h-auto`/`h-full` a **anclada con `absolute inset-0 h-full w-full object-cover`**. La columna conserva su ubicación, `border-r`, fondo `bg-card` y la cuadrícula blueprint; ahora la imagen **llena exactamente la altura de la fila definida por el texto** de la derecha, quedando proporcional y sin huecos. El bloque móvil de la imagen (miniatura flotante) no se modifica.
- **Perfil de Duvan — `<QUIEN_ES />` reemplaza a `<tech_en_la_terminal />`** (`src/app/aliados/duvan-altamar/page.js`): **la UI y los cuadros se mantienen exactamente igual** (misma grilla `sm:grid-cols-2` + columna de video; sin romper el layout). Únicamente la **primera celda** cambia: el título pasa a **`<QUIEN_ES />`** y su contenido son los **roles reales de Duvan** (`DUVAN_ROLES`) — Joven Creativo 2025, Técnico en Sistemas IUB 2026, Candidato a CLJ 2025, Líder de transformación 2026, Fundador de GEX Studio y Gex Club, Programador Joven con iniciativa — escritos **libres uno por línea con el prompt de terminal `>_`** (sin cuadros por separado item a item). El resto de celdas (`<liderazgo />`, `<redes />`, `<showcase />`, `<acerca />`) y el video quedan intactos.

### Added

- **UI de la sección Comunidad renovada** (`/community`, `src/app/community/page.js`): se elimina la grilla tipo tabla (`grid gap-px bg-border` con celdas `bg-background`) y los **bloques quedan al aire libre**, separados con mucho aire (`mt-28`), líneas divisorias degradadas y **textos sin encasillar** (etiqueta mono `[ 0X ] / slug` + título display grande + párrafo `text-lg`). Los **elementos visuales** (video del programador y foto *Red de pares*) van en **card flotante** (`.float-wrap` + `.float-card`) con marco degradado animado, glow azul/violeta, levitación suave y **hover con inclinación**. Nuevo orden: 01 Aprendizaje compartido + video · 02 Proyectos actuales + botón · 03 Primer hackathon + botón reto · 04 Red de pares + imagen · 05 Una comunidad para crear (pilares al aire con borde izquierdo activo) · 06 Únete al ecosistema · 07 Lo que queremos construir.
- **Botones premium** (`globals.css`, `.btn-live` / `.btn-live-red`): reemplazan a los antiguos `aura-btn` (conic-gradient giratorio) en Comunidad. Combinan **borde degradado en movimiento** (keyframes `border-flow`, colores del logo), **barrido de luz diagonal** al hover (`::before` con `skewX`), **glow multicapa** azul/violeta, **levantamiento elástico** (`cubic-bezier(0.34,1.56,0.64,1)`), **tracking que se expande** y **rebote del icono** (`translate(5px,-5px) scale(1.15)` con drop-shadow). Variante roja para el reto del hackathon.
- **Entradas escalonadas y testimonios premium** (`Testimonials.jsx`, `.fade-up`): tarjetas aireadas (`border-border/70 bg-card/60 backdrop-blur-sm`, `gap-6`) con **numeración fantasma** `01`–`03`, **entrada `fade-up` escalonada** (delays `0/140/280 ms`) que se re-dispara en cada rotación gracias al `key={startIndex}`, hover con levitación y sombra azul, y pie con flecha que se desplaza. Sin el grid tipo tabla anterior.
- **CTA de comunidad al aire libre** (`CommunityCta.jsx`): se elimina la card encasillada; el bloque ahora es **layout abierto** (texto a la izquierda y botón `btn-live` a la derecha) con **glow ambiental** `bg-primary/15 blur-[110px]` detrás y etiqueta `[ 06 ] / ecosistema`.
- **Componente `VideoLoop`** (`src/components/ui/VideoLoop.jsx`): reproductor de video *client* con **reproducción infinita** (usa `onEnded` + `setTimeout` + `play`), **pausa configurable al final** (`gapMs`, default 2000 ms) y **velocidad configurable** (`speed` vía `playbackRate`); soporta `autoPlay`, `muted`, `playsInline` y `object-cover`.
- **Video en Misión y Visión** (`/home`, `MissionSection.jsx`): la foto flotante fue reemplazada por el **corto institucional** (`public/brand/corto-home.mp4`) en su misma posición, **sin animación**, con `object-cover` hasta los bordes y gradiente de legibilidad; reproducción infinita con pausa de 2 s al final (estética en desktop y móvil, sin extender la card).
- **Sección "Nuestra invitación"** (`CommunityInviteSection.jsx`, insertada en `/home` entre Misión y Eventos): versión invertida de la sección grande de misiones — texto a la izquierda, **video de comunidad** (`public/brand/video-comunidad.mp4`, `min-h-[30vh] lg:min-h-[38vh]`) a la derecha — con botón **"Conoce más sobre nosotros"** → `/about` y el texto oficial: *"Somos una comunidad de jóvenes creadores, impulsada por y para adolescentes. No esperamos el futuro; lo programamos. […] ¡Súmate y construye el futuro con nosotros!"* (mensaje final separado y en negrita).
- **Comunidad rediseñada** (`/community`, primera sección): grilla `lg:grid-cols-2` en **zigzag** con 4 bloques — 01 Aprendizaje compartido | **video del programador** (`public/brand/video-programador.mp4`, `speed 0.9`); botón con **aura** "Ver proyectos" → `/projects` | 02 Proyectos actuales; 03 Primer hackathon | botón con **aurora roja viva** "¡Build the future!" → `/hackathons`; imagen **Red de pares** (`public/brand/red-de-pares.jpg`, 417×626) | 04 Red de pares — manteniendo la sobriedad de colores oscuros.
- **Animaciones CSS** (`globals.css`): `.aurora-boreal` (aurora horizontal animada de **izquierda a derecha** con los colores del logo Gex Club — azul `#008BFE`, violeta `#8b5cf6`/`#a855f7`, cian — keyframes `aurora-drift` 16 s) y `.aura-btn` / `.aura-btn-red` (conic-gradient giratorio con keyframes `aura-spin` 5 s; el rojo usa `--aura-color: rgba(255,59,48,0.85)`).
- **Aurora boreal en portadas del vault** (`ProjectCard.jsx`): todas las cards de proyectos llevan `aurora-boreal` animada de fondo; **GEX_OS conserva la temática de terminal** con un diseño creativo propio (ventana tipo *boot* con puntos de tráfico y líneas `> init gex_core …`).
- **Perfil del fundador — "Cosas que soy"** (`/aliados/duvan-altamar`): se reemplazó la división tech/liderazgo por la lista de **roles reales de Duvan**, cada uno con **coronita**: Joven Creativo 2025; Técnico en Sistemas Informáticos (IUB Universidad de Barranquilla, 2026); Candidato a CLJ (Consejos Locales de Juventud) 2025; Líder de transformación · Activo 2026; Fundador de Gex Studio y Gex Club; Programador Joven con iniciativa. El **nombre central** encabeza el recuadro grande y el **video de presentación se retiró** dejando un **espacio reservado para la foto oficial** (marco punteado).
- **Brandon como co-fundador**: el rol de Brandon pasó de *Desarrollador* a **Co-fundador · GexStudio Team** (constante `BRANDON_CARRANZA.role` en `content.js`, card de `/aliados` y descripción), coherente con el perfil del fundador.
- **Inscripción a hackatones simplificada** (`/hackathons`): los botones Luma redundantes de cada evento de la lista (`EventList.jsx`) se reemplazaron por el aviso **"Inscripción arriba ↑"**; solo el CTA del hero/flagship y el del bloque "Detalle del evento" mantienen el checkout (el iframe embebido ya cubre la inscripción directa). Se redujo el estrés visual y los embebidos duplicados.
- **Aurora boreal en "Proyectos actuales"** (`/community`): la celda 02 del estado de la comunidad recibe `aurora-boreal` de fondo (animada de izquierda a derecha, colores del logo) **sin quitar los cuadros existentes**, con overlay oscuro para mantener la legibilidad y la sobriedad de la paleta.
- **Perfil del fundador — header corregido** (`/aliados/duvan-altamar`): se revierte el rediseño visual amplio y se conserva el estilo previo; únicamente se corrige la composición del header — **logo de Gex e isotipo** pasan a un grid de 2 columnas (texto a la izquierda, isotipo centrado a la derecha en desktop y centrado en móvil, sin hover) y los **títulos del nombre** ajustan su interlineado (`leading-[0.95]`) para una jerarquía más limpia.
- **Perfil de Duvan restaurado desde borradores** (`src/app/aliados/duvan-altamar/page.js`, `/aliados/duvan-altamar`): el usuario descartó el rediseño desde cero; se **elimina todo el apartado actual** (hero con foto enmarcada, tira de contexto, roles numerados, redes/showcase/acerca en 3 columnas) y se **restaura el perfil guardado en `GexClub Documentos\borradores\Perfil_Antiguo_Duvan_GexClubPage`**: hero con corona + badge Fundador + logo de Gex Club con glow, columnas Tech en la terminal / Liderazgo / Redes / Showcase / Acerca, **video de presentación** (`/brand/video-fundador.mp4`) enmarcado con borde `primary/40` y glow azul, y CTAs GEX_OS + vault.
- **Perfil de Duvan rediseñado desde cero** (`src/app/aliados/duvan-altamar/page.js`, `/aliados/duvan-altamar`): reorganización completa y profesional del apartado personal, con una estructura limpia en 5 bloques:
  1. **Hero**: badge de rol con corona, nombre en tipografía display grande, resumen, CTAs ("Abrir GEX_OS" + "Ver el vault") y la foto enmarcada con borde `primary/40` (tamaño contenido `w-56` → `sm:w-64` → `lg:w-72`) con pie de foto discreto.
  2. **Contexto**: tira de 4 tarjetas con iconos (Ubicación Barranquilla, Técnico en Sistemas IUB, Joven Creativo 2025 · CLJ, Creador de GEX_OS).
  3. **Cosas que soy**: lista vertical apilada uno encima del otro (sin grid ni frases extra), con **numeración mono `01`…`06`** y hover `border-primary/50`, más contador `/{6} assets` a la derecha.
  4. **Conectar**: redes (Instagram/GitHub), showcase (chips de stack) y bloque acerca en 3 columnas.
  5. **Acciones finales**: CTAs de GEX_OS y vault.
- **Perfil de Duvan: roles apilados y sin frase extra** (`src/app/aliados/duvan-altamar/page.js`, `/aliados/duvan-altamar`): la lista "Cosas que soy" vuelve a un **layout vertical apilado** (`flex flex-col gap-3`, uno encima del otro, sin las 2 columnas del grid anterior) y se **elimina el blockquote** de declaración que quedaba debajo, dejando solo los cuadros con el rol y la corona.
- **Banner de Proyectos con colores del logo** (`src/app/globals.css`, `/projects`): las auroras neón del banner "PROYECTOS ACTUALES" ahora usan **exclusivamente la paleta del logo de Gex Club**: azul eléctrico `#1687FF`, violeta `#7747FF` y celeste `#00B4FF` (más el `#008BFE` del degradado original), eliminados el cian `#00E5FF` y el magenta `#FF00D4` de la versión anterior. Se mantienen la cuadrícula blueprint (ya en azul/violeta del logo), el núcleo pulsante, la línea superior de luz y la tipografía `neon-title` iluminada (ahora `#008BFE`/`#7747FF`/`#00B4FF`), todo sobre fondo negro profundo.
- **Banner de Proyectos: cuadrícula + ola líquida neón** (`src/app/projects/page.js`, `src/app/globals.css`, `/projects`): se **reincorpora la cuadrícula blueprint** (`aurora-neon-grid`: líneas azul `rgba(22,135,255,.22)` y violeta `rgba(119,71,255,.22)` de 32 px) **encima** de las auroras neón y bajo el contenido, manteniendo el estilo original de "cuadrados". Las ondas fluyen debajo como ola líquida en **cian / azul eléctrico / violeta** (`aurora-neon-wave-1/2/3`, `blur(30px)` + `saturate(1.35)` + `mix-blend-screen`, oscilación 12/16/20 s con rotación y translación suaves), con núcleo pulsante (`aurora-neon-core`, 7 s), línea superior de luz y tipografía `neon-title` iluminada sobre fondo negro profundo.
- **Perfil de Duvan: columnas balanceadas** (`src/app/aliados/duvan-altamar/page.js`, `/aliados/duvan-altamar`): con la foto ahora más grande (`w-52` → `sm:w-50` → `lg:w-150`), la columna izquierda se rediseña para aprovechar el espacio: los roles "Cosas que soy" pasan a **tarjetas en grid de 2 columnas** (`grid gap-3 sm:grid-cols-2`, con el rol "Técnico…" en `col-span-2`), y se añade un **blockquote** final con `mt-auto` (margen automático) que empuja la declaración al fondo de la celda, equilibrando la altura con la foto; además la columna de la foto se **centra verticalmente** con `items-center justify-center`.
- **Foto de Duvan simplificada (sin marco premium)** (`src/app/aliados/duvan-altamar/page.js`, `/aliados/duvan-altamar`): tras revisión, se retiran el resplandor degradado exterior, el badge "Fundador" y el marco interior — la foto vuelve al estilo limpio de siempre (marco `border-primary/30` + sombra azul sutil `35px`), en la misma ubicación (columna derecha, centrada en móvil y alineada a la izquierda en escritorio), con un tamaño intermedio: `w-52` → `sm:w-64` → `lg:w-72` (208/256/288 px) — más grande que la versión compacta anterior pero un poco menor que la "premium".
- **Auroras neón en el banner de Proyectos** (`src/app/projects/page.js`, `src/app/globals.css`, `/projects`): el banner horizontal "PROYECTOS ACTUALES" ahora luce un **fondo negro profundo** (`#05040e → #000`) sobre el que fluyen **3 capas de ondas etéreas neón** en **cian / magenta / violeta** (`aurora-neon-wave-1/2/3`, gradientes lineales `115°/200°/70°` con `blur(30px)` + `saturate(1.35)` + `mix-blend-screen`) que **oscilan suavemente** con `neon-drift-1/2/3` (12 s / 16 s / 20 s, `ease-in-out infinite alternate`, con rotación y translación sutiles). Debajo, un **núcleo luminoso pulsante** (`aurora-neon-core`, tres radiales cian/fucsia/violeta con `blur(46px)`, `neon-pulse` 7 s) imita el movimiento de energía interna; una **línea superior de luz neón** (`aurora-neon-line`, cian→fucsia→violeta) remata el borde. El texto "PROYECTOS ACTUALES" gana **tipografía iluminada** (`neon-title`: `text-shadow` de 14 px cian, 34 px violeta, 70 px fucsia). Se retira la cuadrícula anterior y el borde pasa a `border-primary/25`.
- **UI de la foto de Duvan mejorada** (`src/app/aliados/duvan-altamar/page.js`, `/aliados/duvan-altamar`): la foto oficial ahora es **bastante más grande** (`w-56` → `sm:w-72` → `lg:w-80`, `aspect-[3/4]` con `width/height` explícitos 640×853) y se presenta como **marco premium**: resplandor degradado cian→violeta→fucsia con `blur-2xl` alrededor, borde `primary/40`, `p-1.5` interior y sombra azul (`shadow-[0_0_45px_rgba(22,135,255,0.2)]`), más un **badge "Fundador"** flotante en la esquina superior derecha con `backdrop-blur`.
- **Foto oficial de Duvan en su perfil** (`src/app/aliados/duvan-altamar/page.js`, `/aliados/duvan-altamar`): se incorpora `public/brand/foto-duvan-altamar.jpeg` (copiada desde `GexClub Documentos\marketing\imagenes-gexclub-page\Foto_DuvanAltamar.jpeg`) reemplazando el placeholder "Espacio reservado para tu foto". Además la **sección `<foto />` se reduce de tamaño** para eliminar el vacío tras la lista "Cosas que soy": la imagen ahora es compacta (`aspect-[3/4]`, `w-44` → `sm:w-52` → `lg:w-56`, con `fill` + `object-cover`), la lista de roles acorta su espaciado (`mt-6 space-y-3.5`) y el pie de foto describe la imagen oficial. Se conserva el marco con borde `primary/30` y brillo azul sutil.
- **Fondos animados en las cards de Proyectos** (`src/components/projects/ProjectCard.jsx`, `src/app/globals.css`, `/projects`): los recuadros superiores de las tarjetas (excepto **GEX OS**, que conserva su pantalla de boot) ahora llevan **dos capas animadas llamativas** con `mix-blend-screen`:
  - **`aurora-card`**: aurora boreal viva de colores pastel Gex (azul `rgba(0,139,254)`, violeta `rgba(168,85,247)`, celeste `rgba(0,180,255)`, fucsia `rgba(232,121,249)`) que se desplaza lentamente con `aurora-card-drift` (7 s, `alternate`, fondos `340%`/`300%`).
  - **`aurora-beam`**: barrido diagonal de luz que **atraviesa la card cada 4.5 s** (`aurora-beam-sweep`, gradiente `115deg` con opacidad pulsante), efecto brillante tipo láser.
  - Se **elimina el componente `WormWave`** (la ola-gusano del banner "Proyectos actuales" no convenció al usuario): fuera el import, el overlay y el archivo `src/components/projects/WormWave.jsx`; el banner vuelve a su estado limpio (cuadrícula + isotipo `gex-glow`/`gex-float`). La animación ahora vive **en los fondos de las cards**, no en el banner.
- **Inscripción vía Luma** (reemplaza el formulario de Google Forms):
  - Nuevo componente `LumaCheckoutButton` (`src/components/events/LumaCheckoutButton.jsx`): botón de checkout de Luma estilizado con la identidad Gex Club, que carga el script `embed.lu.ma/checkout-button.js` vía `next/script` con `strategy="afterInteractive"` (no bloquea el LCP). Si el script no carga, el enlace navega a la página oficial del evento (fallback natural).
  - CTA del **hero** (`Inscríbete al hackathon`), **flagship** de `/hackathons` y botón de cada **evento** en `EventList.jsx` ahora usan el botón Luma.
  - **Página del evento embebida** en `/hackathons`: iframe responsive (`luma.com/embed/.../simple`) en una grilla junto a la descripción "Detalle del evento" (mobile-first, `min-h-[420px]`, borde `border-border`).
  - Constantes centralizadas en `src/lib/content.js`: `LUMA_EVENT_ID`, `LUMA_EVENT_URL`, `LUMA_EMBED_URL`, `LUMA_CHECKOUT_SCRIPT`. El comando `hackathon` de GEX_OS muestra la URL oficial de Luma.
- **Imagen de Misión y Visión** (`/home`): la imagen flotante de la sección 03 ya no es el isotipo con blend, sino la fotografía oficial de comunidad (`public/brand/imagen-mision-vision.jpeg`, 960×1280) con marco sutil (`border-primary/20`), sombra `primary` y dimensiones adaptativas (`max-h-[72%] max-w-[88%]`, `object-contain`) que respetan el layout desktop y el móvil.
- **Imagen "Who We Are"** (`/about`): la sección `&lt;who_we_are&gt;` de la página Sobre Nosotros muestra la fotografía **`Frame2` del video institucional** (`public/brand/frame2.jpg`, 736×981). **Sin animación**: se eliminaron los efectos `gex-float`/`gex-glow`; en desktop ocupa todo el panel izquierdo (`object-cover`) y en móvil aparece como foto flotante a la derecha del texto (`float-right`, `w-40 sm:w-48`) para no robar espacio vertical.
- **Mentores y aliados**: nuevo apartado de **Duvan Altamar** fijado **arriba** del listado (`/aliados`), diferenciado de Brandon:
  - Perfil integral (`/aliados/duvan-altamar`) con tarjeta del **video corto de presentación del fundador** como card flotante de bordes redondeados (`rounded-2xl`) con `poster` del isotipo y `preload="metadata"` (el vídeo de 18 MB no bloquea la carga inicial).
  - Rol **`Fundador · GexStudio Team`** (corona + badge), fondo tipo **auroras** con los colores del logo (`#008BFE` azul + violeta `#a855f7`) tanto en la card resumida como en el perfil.
  - Información dividida en **tech** (diseñó y desarrolló GEX_OS, arquitectura frontend del ecosistema) y **liderazgo** (creación de Gex Club, dirección de GexStudio Team, estándar de calidad).
  - Redes: Instagram `@duvanltbaq` y GitHub `GexStudio-Team`; botones de acción a GEX_OS y al vault de proyectos.
  - Datos centralizados en `src/lib/content.js` (`DUVAN_ALTAMAR`, `DUVAN_TECH`, `DUVAN_LEADERSHIP`).
- **Logo con fondo oscuro en navbar y footer**: el texto `GEX_CLUB` fue reemplazado por el **isotipo con fondo oscuro** en el sidebar de escritorio (`gex-mark-dark-square.png`), el header y menú móvil (`gex-club-logo-dark.png`) y el footer (`gex-club-logo-dark.png`); el isotipo horizontal con letras (`public/brand/gex-club-logo-dark.png`, 1774×887) ya no es exclusivo de la sección de marcas.
- **Año de fundación corregido**: todas las referencias `EST. 2024` pasaron a **`EST. 2025`** (sidebar, banner de GEX_OS, `whoami` y `neofetch` de la terminal).
- **Perfil del fundador — rediseño** (`/aliados/duvan-altamar`):
  - **Card única**: el header con nombres y presentación ya no comparte espacio con el video; el **isotipo sin fondo** (`gex-club-logo-transparent.png`, 1536×1024) acompaña el nombre en grande en el espacio que antes ocupaba el video.
  - **Video por fuera**: la tarjeta del video de presentación quedó como **card independiente** a la derecha del contenido, ocupando **todo el alto de su columna** (`flex-1 self-stretch`), con bordes redondeados (`rounded-2xl`) y `object-cover`.
  - **Reproducción infinita**: el video ahora corre con `autoPlay` + `loop` + `muted` + `playsInline` (arranca solo, sin clic) y se **eliminó el poster** con el isotipo oscuro (y el `preload="metadata"`) para que no se vea un logo estático antes de cargar.
  - **Secciones equilibradas**: contenido interior reorganizado en grilla de 2 columnas uniformes (`sm:grid-cols-2`): tech | liderazgo / redes | showcase / acerca (a lo ancho). **Redes apiladas una sobre otra** (`flex-col gap-4`) en su propia celda.
- **Proyectos — desarrollador visible**: cada card del vault ahora muestra `GexStudio Team · <desarrollador>` (campo `developer` en `content.js`) en la franja inferior antes de entrar a la ficha; GEX_OS lista a **Duvan Altamar** y los demás proyectos a **Brandon Carranza**.
- **Ficha de proyecto dinámica** (`/projects/[slug]`): el panel lateral "Desarrollador" dejó de estar fijo a Brandon; ahora resuelve los datos según `developer` del proyecto (GEX_OS → Duvan Altamar con GitHub e Instagram; los demás → Brandon Carranza con GitHub, LinkedIn y contacto). La card de GEX_OS además acredita explícitamente en su descripción que fue diseñada y desarrollada por Duvan Altamar.
- **Limpieza de tags decorativos** `{'// …'}`: se eliminaron los rótulos redundantes que flotaban en las secciones (`// since_2024`, `// rendering future`, `// the_foundry`, `// the_vault`, `// Gex Club`, `// proyecto · GexStudio Team`, `// GexStudio Team · perfil`) para reducir ruido visual; los rótulos `&lt;mission&gt;`, `&lt;who_we_are&gt;`, etc. se conservan como lenguaje visual del sitio, y los mensajes `// …` de la terminal GEX_OS se mantienen porque son salida funcional de comandos.

### Changed

- **Deuda técnica eliminada (ESLint)**: se reescribió `eslint.config.mjs` reemplazando el patrón `FlatCompat` (incompatible con ESLint 9.39, causaba `TypeError: Converting circular structure to JSON` y rompía `npm run lint`) por la configuración **flat nativa** (`defineConfig`/`globalIgnores` de `eslint/config` + `eslint-config-next/core-web-vitals`, que en v16 exporta flat directamente). `npm run lint` vuelve a funcionar.
- **Experiencia móvil (Fase 2)**: los **4 pilares** ahora son un carrusel horizontal deslizable (`snap-x`, scrollbar oculta, hint "swipe →") en móvil/tablet y conservan la grilla en desktop (`lg`); las tarjetas de **eventos** se compactaron en móvil (fecha y estado en la misma fila, paddings reducidos, metadatos inline) manteniendo el layout de escritorio.
- **Footer móvil**: la columna de **Redes** ahora queda a la **derecha** de **Navegación** en pantallas pequeñas (grilla de 2 columnas); en desktop se conserva el orden original (1.5fr / 1fr / 1fr).
- **Espaciado superior del layout móvil**: el `main` ahora reserva `pt-[88px]` en móvil (statusbar 32px + header 56px) para que la frase "Global Ecosystem for eXcellence" del hero no quede oculta bajo el nav fijo; desktop mantiene `pt-8`.
- **Imagen del vault** (`/projects`): reducida en móvil (`h-36 w-36` vs `h-64 w-64`) y pegada más a la derecha para que no sobresalga de la franja de título; en desktop conserva proporciones grandes (`h-52 w-52 md`).
- **Experiencia móvil de la home (Fase 1)**: espaciados adaptativos (`py-12 lg:py-24` en Pillars, Misión, Eventos y CTA; padding interior del CTA compacto), hero con **texto primero** en móvil (se invirtió el orden de la visual 3D), **hero compacto** (`lg:min-h-[88vh]`, título `text-4xl` en móvil, visual 3D `min-h` reducida) y **TerminalLauncher oculto cerca del final de página** (260px del bottom) para no tapar CTA ni footer. Sin cambios en desktop (`lg:` preserva el layout original).
- **`next.config.mjs`**: se añadió `allowedDevOrigins: ['192.168.1.23']` para permitir ver el sitio en desarrollo desde la red local (advertencias de cross-origin de Next.js al acceder por IP de red). Sin efecto en producción (solo aplica al modo dev).

### Fixed

- **Hydration mismatch en el countdown de `/hackathons`** (`CountdownTimer.jsx`): el contador renderizaba valores distintos entre el server (SSG) y el cliente porque `Date.now()` se evaluaba en entornos diferentes (p. ej. `17` vs `16` segundos), lo que regeneraba el árbol en el cliente. Se aplicó el patrón canónico para relojes: estado inicial perezoso + `suppressHydrationWarning` en los dígitos (escape hatch oficial de React para contenido basado en tiempo) y actualizaciones **solo** dentro del callback del intervalo (se eliminó el `setState` síncrono del `useEffect` que además incumplía `react-hooks/set-state-in-effect`).
- **Bug de fecha en eventos**: `2026-10-03` se mostraba como "02 oct" (o "2") porque `new Date('YYYY-MM-DD')` interpreta la fecha como medianoche UTC y en `America/Bogota` (UTC−5) caía en el día anterior. Se añadió `parseLocalDate`/`formatDateEs` en `src/lib/utils.js` (parsing local) y se aplicó en `EventsPreview.jsx` y `EventList.jsx`. El countdown se alimenta de `startAt` con offset `-05:00`, por lo que ya era correcto.
- **Warnings y errores de lint residuales**: se corrigieron los 8 casos de `react/jsx-no-comment-textnodes` (textos `// …` en JSX ahora van entre llaves `{'// …'}`), el `react-hooks/set-state-in-effect` en `Terminal.jsx` (la bienvenida de GEX_OS se inicializa vía lazy `useState` en lugar de `boot()` dentro de `useEffect`), los 5 avisos `@next/next/no-img-element` (migración a `next/image` con `width`/`height` reales, aprovechando `images.unoptimized`) y el `@next/next/no-location-assign-relative-destination` en `TerminalLauncher.jsx` (ahora usa `useRouter().push('/gexos')`).

### Docs

- **Documentación técnica actualizada** a la realidad del proyecto v0.3.0 (`public/Docs/DOCUMENTACION_TECNICA.md`): se reemplazó la versión obsoleta (backend en memoria, API Routes) por la arquitectura actual (export estático, `content.js`, GEX_OS, "G" 3D, estrategia de contenido, versionado y backlog).
- `README.md`: la tabla de ramas refleja `main` como única rama activa (post-merge de GEX_OS) y enlaza a la documentación técnica y a Releases.
- `CONTRIBUTING.md`: el Definition of Done usa `npm run build` como verificación principal (el `lint` arrastra un fallo de configuración pre-existente) y documenta el flujo de squash merge.
- **Perfil de la organización `GexStudio-Team/.github`** (`8710048`): se corrigió la codificación UTF-8 de `profile/README.md` y `CONTRIBUTING.md`, que mostraba texto ilegible en la portada de la org. El README del perfil ahora incluye GEX_OS como proyecto activo.

### Planeado

- Auditoría SEO: imagen OG, Twitter Cards, JSON-LD y metadatos canónicos.
- Formulario de inscripción a hackathons con identidad de marca (embebido, sin salir del sitio).
- Pipeline CI/CD con GitHub Actions y artefacto de publicación.

---

## [0.3.0] — 2026-09-08

### Added

- **GEX_OS v1.0** — Terminal interactiva en `/gexos` (PR #2):
  - Librería de comandos (`src/lib/commands.js`) alimentada por `src/lib/content.js`.
  - Componentes: `Terminal.jsx` (shell con historial y autocompletado), `MatrixRain.jsx` (lluvia digital en Canvas), `GexAscii.jsx` (logo ASCII), `TerminalLauncher.jsx` (acceso global).
  - Comandos: `help`, `ls`, `cat <slug>`, `hackathon`, `social`, `contacto`, `whoami`, `neofetch`, `matrix`, `sudo`, `clear`, `exit`, `pwd`, `date` (con alias en español).
  - Acceso global: botón flotante tras scroll + atajo `Ctrl+K` desde cualquier página.
  - Ruta `/gexos` integrada a la navegación (sidebar y menú móvil) y al `sitemap.xml`.
  - Registro de GEX_OS como proyecto en el vault (`PROJECTS` en `content.js`) con ficha dinámica (`/projects/gex-os`).

### Fixed

- **`clear`/`matrix`/`exit` en GEX_OS**: los comandos especiales fallaban porque el objeto `LINE` no exponía los tones reservados y el filtro `OUTPUT_TYPES` los descartaba antes de procesarlos. Se reordenó la evaluación en `Terminal.jsx` (tones especiales primero) y los runners de `commands.js` ahora devuelven el tone correcto directamente.

> Nota: `npm run lint` presentaba un error de configuración **pre-existente** (FlatCompat + ESLint 9, `next/core-web-vitals`) no relacionado con GEX_OS; el build estático se generaba correctamente. **Resuelto en `Unreleased`** (configuración flat nativa).

### Planeado

- Auditoría SEO: imagen OG, Twitter Cards, JSON-LD y metadatos canónicos.
- Formulario de inscripción a hackathons con identidad de marca (embebido, sin salir del sitio).
- Pipeline CI/CD con GitHub Actions y artefacto de publicación.
- Documentación técnica profesional: `docs/`, arquitectura y guía de despliegue.
- Resolver error de configuración de ESLint (FlatCompat).

---

## [0.2.0] — 2026-09-08

### Added

- `LICENSE` (MIT) con titularidad de GexStudio Team.
- `CONTRIBUTING.md` con estándares de colaboración para la comunidad.
- `CHANGELOG.md` con política de documentación continua.

### Changed

- `README.md`: incorpora badge de licencia y sección de contribución.
- `.gitignore`: se ignoran notas locales del entorno (`EXPLICACION_LOCAL.md`).

### Removed

- `EXPLICACION_LOCAL.md` del control de versiones (se conserva como nota local del equipo; contenía rutas del entorno de desarrollo).

---

## [0.1.0] — 2026-09-05

Versión base publicada del sitio oficial.

### Added

- Hero con marca "G" 3D a pantalla completa (`Three.js`): geometría de bloques metálicos/translúcidos, conexiones neón lima, `UnrealBloomPass` y partículas de polvo digital.
- Auto-fit de cámara sobre el tamaño real de la pieza para adaptarse a toda resolución.
- Respeto de `prefers-reduced-motion`.

### Fixed (relevantes de fases previas)

- Estructura interna de carpetas del repositorio reorganizada.
- Contenido centralizado en `src/lib/content.js` (eventos, proyectos, aliados, contacto).

---

## [0.0.1] — Inicios (historia temprana)

Construcción inicial del sitio: rutas institucionales, estructura Next.js App Router,
paleta oscura con acentos azul/violeta, tipografía JetBrains Mono, y memoria del proyecto
conservada en ramas de respaldo (`edition`, `main-anterior`, `legacy-*`).

---

<!-- Enlaces de comparación entre versiones (se activan al crearse tags):
[Unreleased]: https://github.com/GexStudio-Team/GexClub-Page/compare/v0.2.0...HEAD
[0.2.0]:      https://github.com/GexStudio-Team/GexClub-Page/releases/tag/v0.2.0
[0.1.0]:      https://github.com/GexStudio-Team/GexClub-Page/releases/tag/v0.1.0
-->