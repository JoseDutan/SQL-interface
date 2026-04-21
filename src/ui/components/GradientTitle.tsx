import type { ReactNode } from 'react';
import { FadeInUp } from './FadeInUp';

interface GradientTitleProps {
  children: ReactNode;
  delayMs?: number;
  className?: string;
  /** Clases del contenedor del título (tamaño, peso, etc.). */
  titleClassName?: string;
}

/**
 * Título con gradiente animado y entrada FadeInUp (sin conflicto de dos `animation` en un solo nodo).
 */
export function GradientTitle({
  children,
  delayMs = 0,
  className = '',
  titleClassName = 'text-7xl font-extrabold tracking-tight',
}: GradientTitleProps) {
  return (
    <FadeInUp delayMs={delayMs} className={className}>
      <h1 className={titleClassName}>
        <span className="anim-gradient-text block">{children}</span>
      </h1>
    </FadeInUp>
  );
}
