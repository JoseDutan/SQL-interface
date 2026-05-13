import type { Section, SectionId } from '../../domain/models/Section';
import { BrandMark } from './BrandMark';
import { NavIconHome, SectionNavIcon } from './NavOutlineIcons';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  sections: Section[];
  activeSection: SectionId | null;
  onNavigate: (id: SectionId) => void;
  onNavigateToDashboard: () => void;
  /** Solo móvil: mostrar botón para abrir el submenú del módulo */
  showModuleSubNavTrigger?: boolean;
  moduleSubNavOpen?: boolean;
  onModuleSubNavTriggerClick?: () => void;
}

const navInactive =
  'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white';
const navActive =
  'bg-blue-50 font-semibold text-blue-700 shadow-sm ring-1 ring-blue-100/90 dark:bg-blue-950/45 dark:text-blue-300 dark:ring-blue-800/60';

export function Header({
  sections,
  activeSection,
  onNavigate,
  onNavigateToDashboard,
  showModuleSubNavTrigger = false,
  moduleSubNavOpen = false,
  onModuleSubNavTriggerClick,
}: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-[50] flex h-16 min-w-0 shrink-0 items-center gap-2 border-b border-slate-200/90 bg-white/95 px-3 text-slate-800 shadow-sm shadow-slate-200/30 backdrop-blur-md dark:border-slate-700/90 dark:bg-slate-900/95 dark:text-slate-100 dark:shadow-black/30 sm:px-5 md:gap-3 md:px-8">
      <div className="relative z-20 flex shrink-0 items-center gap-1.5">
        {showModuleSubNavTrigger ? (
          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white md:hidden"
            onClick={onModuleSubNavTriggerClick}
            aria-expanded={moduleSubNavOpen}
            aria-controls="module-subnav"
            aria-label={moduleSubNavOpen ? 'Cerrar menú de contenido' : 'Abrir menú de contenido'}
          >
            {moduleSubNavOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        ) : null}
        <BrandMark
          size="sm"
          onClick={onNavigateToDashboard}
          className="hidden md:inline-flex"
          aria-label="Ir al inicio"
        />
      </div>

      <nav
        className="flex min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto px-1 md:gap-1.5 md:px-2"
        aria-label="Secciones del curso"
      >
        <button
          type="button"
          onClick={onNavigateToDashboard}
          className={`flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-2 text-[11px] font-medium transition-colors sm:px-2.5 sm:text-xs md:px-3 md:text-sm ${navInactive}`}
        >
          <NavIconHome className="size-[18px] shrink-0 sm:size-5" />
          <span className="hidden sm:inline">Inicio</span>
        </button>
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              type="button"
              onClick={() => onNavigate(section.id)}
              className={`flex min-h-0 min-w-0 shrink-0 items-center gap-1.5 rounded-lg px-2 py-2 text-[11px] font-medium leading-tight transition-colors sm:px-2.5 sm:text-xs md:px-3 md:text-sm ${
                isActive ? navActive : navInactive
              }`}
            >
              <SectionNavIcon sectionId={section.id} className="size-[18px] shrink-0 sm:size-5" />
              <span className="max-w-[5.5rem] truncate sm:max-w-none md:whitespace-nowrap">{section.title}</span>
            </button>
          );
        })}
      </nav>

      <div className="relative z-20 flex shrink-0 items-center gap-0.5">
        <ThemeToggle />
        <button
          type="button"
          onClick={onNavigateToDashboard}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-cyan-600 transition-colors hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:text-cyan-400 dark:hover:bg-slate-800 md:hidden"
          aria-label="Ir al panel principal"
        >
          <NavIconHome className="size-[22px]" />
        </button>
      </div>
    </header>
  );
}
