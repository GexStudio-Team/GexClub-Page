# Contributing — Gex Club

¡Gracias por tu interés en construir el ecosistema Gex Club con nosotros!
Cualquier persona que quiera aprender, colaborar o mejorar esta página es bienvenida.

Este documento define las reglas de colaboración del repositorio
[`GexStudio-Team/GexClub-Page`](https://github.com/GexStudio-Team/GexClub-Page).

---

## 1. Código de conducta

- Trato respetuoso y constructivo en issues, PRs y comentarios.
- Sin spam, publicidad externa ni contenido ajeno al proyecto.
- Gex Club es un espacio seguro para personas de **todas las edades**: cuida el lenguaje.

## 2. Cómo reportar un problema (Bug)

Antes de abrir un issue:

1. Busca si ya existe un issue abierto similar.
2. Usa la plantilla de bug report (si está disponible).
3. Incluye siempre:
   - Paso a paso para reproducir el error.
   - Comportamiento esperado vs. real.
   - Captura de pantalla (si aplica).
   - Navegador y sistema operativo.

## 3. Cómo proponer una mejora

1. Abre un issue con la etiqueta `enhancement`.
2. Explica **qué** quieres mejorar y **por qué** vale la pena.
3. Si es un cambio visual, adjunta referencia o descripción clara de la intención.

## 4. Flujo de trabajo con git

- Cada tarea se desarrolla en una **rama propia**:
  `feature/<nombre>` · `fix/<nombre>` · `docs/<nombre>`
- Nunca hagas push directo a `main`. Los cambios entran por **Pull Request**.
- Mantén tu rama sincronizada con `main` antes de abrir el PR.
- El historial de commits debe ser limpio y descriptivo:

```
feat: agregar sección de eventos a la home
fix: corregir superposición del menú móvil
docs: actualizar guía de despliegue
```

## 5. Estándares de código

- **Stack**: Next.js (App Router) · React · Tailwind CSS · Three.js.
- Archivos en `src/` mantienen la estructura de carpetas existente.
- Contenido editable en `src/lib/content.js` (no duplicar datos en componentes).
- Respeta `prefers-reduced-motion` en animaciones nuevas.
- Ejecuta `npm run lint` antes de abrir el PR.
- Verifica que `npm run build` termine sin errores (genera `out/`).

## 6. Definición de "Listo" (Definition of Done)

Una contribución se considera terminada cuando:

- [ ] Código implementado y verificado en local (`npm run dev`).
- [ ] `npm run lint` sin errores.
- [ ] `npm run build` exitoso.
- [ ] README / CHANGELOG actualizados si el cambio afecta documentación.
- [ ] Sin secretos ni rutas locales del equipo en los archivos versionados.

## 7. Contacto

- Correo: `gexstudioteam@gmail.com`
- GitHub: [`GexStudio-Team`](https://github.com/GexStudio-Team)
- Instagram: [`@joingexclub`](https://www.instagram.com/joingexclub/)