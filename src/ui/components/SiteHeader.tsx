import type { Section, SectionId } from '../../domain/models/Section';
import { BrandMark } from './BrandMark';
import { NavIconHome, SectionNavIcon } from './NavOutlineIcons';
import { ThemeToggle } from './ThemeToggle';

type SiteHeaderVariant = 'landing' | 'dashboard';

interface SiteHeaderProps {
  variant: SiteHeaderVariant;
  /** En landing puede omitirse (marca no clic); en dashboard vuelve al inicio. */
  onBrandClick?: () => void;
  sections?: Section[];
  onNavigate?: (id: SectionId) => void;
}

const navLink =
  'rounded-lg px-2 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-800 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white sm:px-3 sm:text-sm';

export function SiteHeader({ variant, onBrandClick, sections = [], onNavigate }: SiteHeaderProps) {
  const showNav = variant === 'dashboard' && onNavigate;

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/90 bg-white/90 shadow-sm shadow-slate-200/35 backdrop-blur-md dark:border-slate-700/90 dark:bg-slate-900/90 dark:shadow-black/25">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
        {onBrandClick ? (
          <BrandMark onClick={onBrandClick} aria-label="Ir al inicio" />
        ) : (
          <BrandMark />
        )}

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3">
          {showNav ? (
            <nav className="flex min-w-0 flex-wrap items-center justify-end gap-1 sm:gap-1.5" aria-label="Navegación principal">
              <span className="hidden items-center gap-1.5 rounded-lg bg-blue-50 px-2.5 py-1.5 text-sm font-semibold text-blue-700 ring-1 ring-blue-100/90 dark:bg-blue-950/45 dark:text-blue-300 dark:ring-blue-800/50 sm:inline-flex">
                <NavIconHome className="size-4 shrink-0" />
                Inicio
              </span>
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => onNavigate(section.id)}
                  className={`inline-flex items-center gap-1.5 ${navLink}`}
                >
                  <SectionNavIcon sectionId={section.id} className="size-4 shrink-0" />
                  {section.title}
                </button>
              ))}
            </nav>
          ) : (
            <p className="truncate text-xs font-medium text-slate-500 dark:text-slate-400 sm:text-sm">
              Aprende SQL paso a paso
            </p>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
