import type { Section, SectionId } from '../models/Section';

export interface SectionPort {
  getAllSections(): Section[];
  getSectionById(id: SectionId): Section | undefined;
}
