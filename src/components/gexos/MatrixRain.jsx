'use client';

import { useEffect, useRef } from 'react';

/**
 * MatrixRain — Lluvia digital clásica en canvas (cmd: matrix).
 * Respeta prefers-reduced-motion (renderiza una sola pasada estática).
 */

const GLYPHS = 'アイウエオカキクケコサシスセソ0123456789ABCDEF';

export default function MatrixRain({ onExit }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    let cols = 0;
    let drops = [];
    let fontSize = 16;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.ceil(canvas.width / fontSize);
      drops = Array.from({ length: cols }, () => Math.floor(Math.random() * -canvas.height / fontSize));
    };
    resize();
    window.addEventListener('resize', resize);

    const frame = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.075)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = i % 7 === 0 ? '#c8ff3d' : 'rgba(200, 255, 61, 0.85)';
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      }
      raf = requestAnimationFrame(frame);
    };

    if (reduced) {
      ctx.fillStyle = '#010409';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#c8ff3d';
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < cols; i++) {
        ctx.fillText('█', i * fontSize, (i * 37) % canvas.height);
      }
    } else {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.075)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      frame();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
      onClick={onExit}
    />
  );
}