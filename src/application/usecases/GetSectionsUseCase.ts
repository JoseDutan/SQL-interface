import type { Section, SectionId } from '../../domain/models/Section';
import type { SectionPort } from '../../domain/ports/SectionPort';

export class GetSectionsUseCase {
  private sectionRepository: SectionPort;

  constructor(sectionRepository: SectionPort) {
    this.sectionRepository = sectionRepository;
  }

  getAll(): Section[] {
    return this.sectionRepository.getAllSections();
  }

  getById(id: SectionId): Section | undefined {
    return this.sectionRepository.getSectionById(id);
  }
}
