import type { SectionId } from '../../domain/models/Section';
import type { SubNavItem } from '../../domain/models/SubNavItem';
import type { SubNavPort } from '../../domain/ports/SubNavPort';

const BY_SECTION: Record<SectionId, SubNavItem[]> = {
  curso: [
    { id: 'c1', label: 'Lenguaje de Definición y Control de Datos' },
    { id: 'c2', label: 'Lenguaje de Manipulación de Datos' },
    { id: 'c3', label: 'Lenguaje de Consulta de Datos – Nivel Básico' },
    { id: 'c4', label: 'Lenguaje de Consulta de Datos – Nivel Avanzado' },
    { id: 'c5', label: 'Lenguaje de Consulta de Datos – Uniones, Filtros y Vistas' },
  ],
  actividad: [
    { id: 'a1', label: 'Laboratorio: SELECT básico' },
    { id: 'a2', label: 'Ejercicios con WHERE y ORDER BY' },
    { id: 'a3', label: 'Práctica de INNER y LEFT JOIN' },
    { id: 'a4', label: 'Desafío: agregaciones con GROUP BY' },
    { id: 'a5', label: 'Mini-proyecto: consulta analítica' },
  ],
  evaluacion: [
    { id: 'e1', label: 'Quiz rápido: sintaxis SQL' },
    { id: 'e2', label: 'Parcial: modelado y DDL' },
    { id: 'e3', label: 'Examen práctico: consultas' },
    { id: 'e4', label: 'Evaluación integradora' },
    { id: 'e5', label: 'Retroalimentación y resultados' },
  ],
};

export class InMemorySubNavAdapter implements SubNavPort {
  getItemsBySection(sectionId: SectionId): SubNavItem[] {
    return BY_SECTION[sectionId] ?? [];
  }
}
