import { useState } from 'react';
import type { SubNavItem } from '../../domain/models/SubNavItem';
import { FadeInUp } from './FadeInUp';

interface HoverSidebarProps {
  items: SubNavItem[];
  activeId: string | null;
  onActiveIdChange: (id: string) => void;
}

export function HoverSidebar({ items, activeId, onActiveIdChange }: HoverSidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`fixed left-0 top-1/2 z-50 -translate-y-1/2 overflow-hidden rounded-r-lg transition-[width] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        open
          ? 'w-72 max-h-[min(90vh,calc(100vh-3.5rem))] overflow-y-auto shadow-2xl'
          : 'h-52 w-2 overflow-hidden'
      }`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {!open && (
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-cyan-400/80 via-cyan-500/50 to-cyan-400/80 shadow-[2px_0_8px_rgba(34,211,238,0.35)]"
          aria-hidden
        />
      )}

      <aside
        className={`w-72 border-slate-700/90 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 shadow-[8px_0_24px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? 'translate-x-0 border-r' : '-translate-x-full border-r-0'
        }`}
      >
        <div className="px-4 py-5">
          <FadeInUp delayMs={40}>
            <div className="mb-4 border-b border-slate-700/80 pb-4 text-center">
              <p className="text-xs font-medium text-slate-500">Contenido</p>
            </div>
          </FadeInUp>
          <nav className="flex flex-col gap-1" aria-label="Contenido del módulo">
            {items.map((item, index) => {
              const isActive = activeId === item.id;
              return (
                <FadeInUp key={item.id} delayMs={90 + index * 55}>
                  <button
                    type="button"
                    onClick={() => onActiveIdChange(item.id)}
                    className={`group flex w-full items-start gap-3 rounded-xl border px-3 py-2.5 text-left text-sm transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg ${
                      isActive
                        ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-100 shadow-[0_0_0_1px_rgba(34,211,238,0.12)] hover:border-cyan-400/70 hover:shadow-cyan-500/15'
                        : 'border-transparent text-slate-400 hover:border-cyan-400/45 hover:bg-slate-800/70 hover:text-slate-100 hover:shadow-slate-900/40'
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[11px] font-bold tabular-nums transition-transform duration-300 group-hover:scale-110 ${
                        isActive
                          ? 'bg-cyan-500/25 text-cyan-300'
                          : 'bg-slate-800 text-slate-500 group-hover:text-cyan-300/90'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="leading-snug">{item.label}</span>
                  </button>
                </FadeInUp>
              );
            })}
          </nav>
        </div>
      </aside>
    </div>
  );
}
