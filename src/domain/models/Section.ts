export type SectionId = 'curso' | 'actividad' | 'evaluacion';

export interface Section {
  id: SectionId;
  title: string;
  description: string;
  icon: string;
}
