import type { Section, SectionId } from '../../domain/models/Section';

interface SectionCardProps {
  section: Section;
  onNavigate: (id: SectionId) => void;
}

export function SectionCard({ section, onNavigate }: SectionCardProps) {
  return (
    <button
      onClick={() => onNavigate(section.id)}
      className="group w-full bg-white rounded-2xl border border-slate-200 p-8 text-left
                 hover:shadow-lg hover:border-cyan-300 hover:-translate-y-1
                 transition-all duration-300 cursor-pointer"
    >
      <span className="text-5xl block mb-4 group-hover:scale-110 transition-transform duration-300">
        {section.icon}
      </span>
      <h3 className="text-xl font-bold text-slate-800 mb-2">{section.title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{section.description}</p>
      <div className="mt-4 flex items-center gap-1 text-cyan-600 text-sm font-medium">
        <span>Explorar</span>
        <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
      </div>
    </button>
  );
}
