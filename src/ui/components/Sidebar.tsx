import type { Section, SectionId } from '../../domain/models/Section';

interface SidebarProps {
  sections: Section[];
  activeSection: SectionId | null;
  onNavigate: (id: SectionId) => void;
  onGoHome: () => void;
}

export function Sidebar({ sections, activeSection, onNavigate, onGoHome }: SidebarProps) {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">
      <button
        onClick={onGoHome}
        className="px-6 py-6 text-left hover:bg-slate-800 transition-colors cursor-pointer"
      >
        <h2 className="text-2xl font-bold tracking-wide text-cyan-400">SQL</h2>
        <p className="text-xs text-slate-400 mt-1">Aprendizaje Interactivo</p>
      </button>

      <div className="h-px bg-slate-700" />

      <nav className="flex-1 py-4">
        <p className="px-6 text-xs uppercase tracking-wider text-slate-500 mb-3">
          Secciones
        </p>
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-colors cursor-pointer ${
                isActive
                  ? 'bg-cyan-600/20 text-cyan-400 border-r-3 border-cyan-400'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span className="text-xl">{section.icon}</span>
              <span className="font-medium">{section.title}</span>
            </button>
          );
        })}
      </nav>

      <div className="px-6 py-4 border-t border-slate-700">
        <p className="text-xs text-slate-500">5to Semestre - UG</p>
      </div>
    </aside>
  );
}
