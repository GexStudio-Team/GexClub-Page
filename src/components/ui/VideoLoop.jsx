'use client';

import { useCallback, useRef } from 'react';

/**
 * VideoLoop
 * Reproduce un video en bucle infinito con una pausa opcional (gapMs)
 * entre cada ciclo y velocidad de reproducción ajustable (speed),
 * exactamente como pide la identidad de Gex Club.
 */
export default function VideoLoop({ src, gapMs = 2000, speed = 1, className, ...props }) {
  const videoRef = useRef(null);

  const handleEnded = useCallback(() => {
    window.setTimeout(() => {
      const video = videoRef.current;
      if (video) {
        video.play();
      }
    }, gapMs);
  }, [gapMs]);

  return (
    <video
      ref={(node) => {
        videoRef.current = node;
        if (node) node.playbackRate = speed;
      }}
      src={src}
      onEnded={handleEnded}
      autoPlay
      muted
      loop={false}
      playsInline
      className={className}
      {...props}
    />
  );
}