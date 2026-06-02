interface BrandMarkProps {
  size?: 'sm' | 'md';
  onClick?: () => void;
  className?: string;
  /** Etiqueta accesible cuando actúa como botón */
  'aria-label'?: string;
}

/**
 * Marca SQL Interface con icono de base de datos (paleta cyan).
 */
export function BrandMark({
  size = 'md',
  onClick,
  className = '',
  'aria-label': ariaLabel = 'Aprendiendo SQL',
}: BrandMarkProps) {
  const iconPx = size === 'sm' ? 26 : 32;
  const textClass = size === 'sm' ? 'text-base' : 'text-lg sm:text-xl';

  const inner = (
    <>
      <svg
        width={iconPx}
        height={iconPx}
        viewBox="0 0 32 32"
        className="shrink-0 text-cyan-600 dark:text-cyan-400"
        aria-hidden
      >
        <ellipse cx="16" cy="7" rx="11" ry="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M5 7v5c0 2.5 4.9 4.5 11 4.5s11-2 11-4.5V7" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M5 16v5c0 2.5 4.9 4.5 11 4.5s11-2 11-4.5v-5" fill="none" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="16" cy="25" rx="11" ry="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M10 12h12M10 21h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
      <span className={`font-bold tracking-tight text-cyan-600 dark:text-cyan-400 ${textClass}`}>Aprendiendo SQL</span>
    </>
  );

  const base = `inline-flex items-center gap-2 rounded-xl ${className}`;

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${base} text-left transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900`}
        aria-label={ariaLabel}
      >
        {inner}
      </button>
    );
  }

  return <span className={base}>{inner}</span>;
}
