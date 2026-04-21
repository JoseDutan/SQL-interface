import type { ReactNode } from 'react';

interface FadeInUpProps {
  children: ReactNode;
  /** Retraso antes de iniciar la animación (ms). */
  delayMs?: number;
  className?: string;
}

/**
 * Envuelve contenido con entrada fade + desplazamiento vertical.
 */
export function FadeInUp({ children, delayMs = 0, className = '' }: FadeInUpProps) {
  return (
    <div
      className={`anim-fade-in-up ${className}`.trim()}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
