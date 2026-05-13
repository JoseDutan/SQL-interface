import type { Section, SectionId } from '../../domain/models/Section';
import { SectionNavIcon } from './NavOutlineIcons';

interface SectionCardProps {
  section: Section;
  onNavigate: (id: SectionId) => void;
}

export function SectionCard({ section, onNavigate }: SectionCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white/95 p-6 shadow-md shadow-slate-200/50 ring-1 ring-slate-100/80 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200/90 hover:shadow-xl hover:shadow-cyan-500/10 dark:border-slate-700/90 dark:bg-slate-900/90 dark:ring-slate-800/80 dark:hover:border-cyan-700/50 dark:hover:shadow-cyan-900/20 sm:p-7">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 shadow-inner ring-1 ring-blue-100/80 transition-transform duration-300 group-hover:scale-105 dark:bg-blue-950/40 dark:text-blue-300 dark:ring-blue-800/40 sm:h-14 sm:w-14">
        <SectionNavIcon sectionId={section.id} className="size-6 sm:size-7" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 sm:text-xl">{section.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{section.description}</p>
      <button
        type="button"
        onClick={() => onNavigate(section.id)}
        className="mt-6 w-full rounded-xl bg-cyan-600 py-3 text-sm font-semibold text-white shadow-sm shadow-cyan-600/20 transition hover:bg-cyan-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-px dark:focus-visible:ring-offset-slate-900 sm:py-3.5"
      >
        Explorar
      </button>
    </article>
  );
}
