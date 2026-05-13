import type { SectionId } from '../../domain/models/Section';

const stroke = 1.75;

function iconProps(className?: string) {
  return {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    'aria-hidden': true as const,
  };
}

/** Casa — Inicio */
export function NavIconHome({ className }: { className?: string }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
    </svg>
  );
}

/** Libro abierto — Curso */
export function NavIconBookOpen({ className }: { className?: string }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

/** Lápiz — Actividad */
export function NavIconPencil({ className }: { className?: string }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

/** Documento / evaluación */
export function NavIconClipboard({ className }: { className?: string }) {
  return (
    <svg {...iconProps(className)}>
      <path d="M9 2h6a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V3a1 1 0 0 1 1-1z" />
      <path d="M8 10h8M8 14h6" />
    </svg>
  );
}

export function SectionNavIcon({ sectionId, className }: { sectionId: SectionId; className?: string }) {
  switch (sectionId) {
    case 'curso':
      return <NavIconBookOpen className={className} />;
    case 'actividad':
      return <NavIconPencil className={className} />;
    case 'evaluacion':
      return <NavIconClipboard className={className} />;
    default:
      return null;
  }
}
