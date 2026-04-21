import type { Section, SectionId } from '../../domain/models/Section';
import type { SectionPort } from '../../domain/ports/SectionPort';

const SECTIONS: Section[] = [
  {
    id: 'curso',
    title: 'Curso',
    description: 'Aprende los fundamentos de SQL con lecciones interactivas y ejemplos prácticos.',
    icon: '📚',
  },
  {
    id: 'actividad',
    title: 'Actividad',
    description: 'Practica escribiendo sentencias SQL con ejercicios guiados paso a paso.',
    icon: '✏️',
  },
  {
    id: 'evaluacion',
    title: 'Evaluación',
    description: 'Pon a prueba tus conocimientos con evaluaciones y obtén retroalimentación.',
    icon: '📝',
  },
];

export class InMemorySectionAdapter implements SectionPort {
  getAllSections(): Section[] {
    return SECTIONS;
  }

  getSectionById(id: SectionId): Section | undefined {
    return SECTIONS.find((s) => s.id === id);
  }
}
