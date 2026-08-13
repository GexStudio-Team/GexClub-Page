'use client';
import { useEffect, useState } from 'react';

function getTimeLeft(targetDate) {
  const diff = new Date(targetDate).getTime() - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  return {
    d: Math.floor(diff / (1000 * 60 * 60 * 24)),
    h: Math.floor((diff / (1000 * 60 * 60)) % 24),
    m: Math.floor((diff / (1000 * 60)) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer({ targetDate }) {
  const [time, setTime] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units = [
    { v: time.d, l: 'Días' },
    { v: time.h, l: 'Horas' },
    { v: time.m, l: 'Min' },
    { v: time.s, l: 'Seg' },
  ];

  return (
    <div className="grid grid-cols-4 gap-px bg-border border border-border">
      {units.map((u) => (
        <div key={u.l} className="bg-background p-4 lg:p-6 text-center">
          <div className="font-display text-3xl lg:text-5xl font-bold text-primary">{String(u.v).padStart(2, '0')}</div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{u.l}</div>
        </div>
      ))}
    </div>
  );
}
