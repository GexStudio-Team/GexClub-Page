# Notas internas del entorno local (GexClub)

> Archivo informativo mantenido dentro del repo para llevar registro del entorno de trabajo.
> Última actualización: **2026-09-05**.

## Dónde vive el código

Todas las copias locales se concentraron en **`C:\Users\Duvan Altamar\Documents\GexClub\`**. Ver `LEEME-INDICE.md` (índice general) e `11-control-y-logs\` (inventario con commits).

## Cambios de la "G 3D" (sesión 2026-09-05)

| Archivo | Detalle |
|---|---|
| `package.json` / `package-lock.json` | Se añadió `three@^0.185.1`. |
| `src/components/brand/GexMark.jsx` | Variante 2D (SVG) — referencia. |
| `src/components/brand/GexMark3D.jsx` | G en 3D real (Three.js + WebGL) con bloom, transmisión, partículas y auto-fit de cámara. |
| `src/components/home/Hero.jsx` | Renderiza `<GexMark3D />` a todo el panel de la derecha (`absolute inset-0`, `w-full h-full`). |

El commit de estos cambios está en `main` (ver `git log`). El despliegue a Hostinger **no** se realizó desde esta sesión (la copia publicada pendiente es anterior).

## Flujo de publicación

```bash
npm run build   # regenera out/
# subir el contenido interno de out/ a public_html (Hostinger)
```

## Puntos abiertos

1. ¿Aplicar la misma "G" 3D en otras secciones (About, Proyectos) que usan `gex-mark-dark.png`?
2. Revisar si se desea regresar al SVG si el peso del 3D (aprox. +160 KB gz) importa en conexiones lentas.