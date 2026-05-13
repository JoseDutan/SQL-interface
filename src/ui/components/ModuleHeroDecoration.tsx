/**
 * Ilustración decorativa ligera (BD + ventana) para cabeceras de tema, estilo curso en línea.
 */
export function ModuleHeroDecoration({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none select-none text-cyan-500/90 ${className}`}
      aria-hidden
    >
      <svg width="160" height="120" viewBox="0 0 160 120" className="drop-shadow-sm">
        <defs>
          <linearGradient id="mh-cyl" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="mh-win" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
        </defs>
        <rect x="52" y="12" width="96" height="72" rx="8" fill="url(#mh-win)" stroke="#cbd5e1" strokeWidth="1.5" />
        <rect x="58" y="20" width="84" height="8" rx="2" fill="#f1f5f9" />
        <circle cx="64" cy="24" r="2" fill="#f87171" />
        <circle cx="72" cy="24" r="2" fill="#fbbf24" />
        <circle cx="80" cy="24" r="2" fill="#4ade80" />
        <rect x="60" y="36" width="36" height="4" rx="1" fill="#cbd5e1" />
        <rect x="60" y="44" width="80" height="3" rx="1" fill="#e2e8f0" />
        <rect x="60" y="52" width="64" height="3" rx="1" fill="#e2e8f0" />
        <rect x="60" y="64" width="48" height="12" rx="2" fill="#ecfeff" stroke="#67e8f9" strokeWidth="1" />
        <ellipse cx="38" cy="78" rx="22" ry="10" fill="url(#mh-cyl)" opacity="0.9" />
        <path
          d="M16 78v8c0 5.5 9.9 10 22 10s22-4.5 22-10v-8"
          fill="none"
          stroke="#0e7490"
          strokeWidth="2"
          opacity="0.35"
        />
        <ellipse cx="38" cy="58" rx="22" ry="10" fill="url(#mh-cyl)" />
        <path d="M16 58v10c0 5.5 9.9 10 22 10s22-4.5 22-10V58" fill="none" stroke="#0e7490" strokeWidth="1.5" opacity="0.4" />
        <ellipse cx="38" cy="38" rx="22" ry="10" fill="url(#mh-cyl)" opacity="0.95" />
      </svg>
    </div>
  );
}
