import type { SectionId } from '../../domain/models/Section';
import type { SubNavItem } from '../../domain/models/SubNavItem';
import type { SubNavPort } from '../../domain/ports/SubNavPort';

export class GetSubNavUseCase {
  private subNavRepository: SubNavPort;

  constructor(subNavRepository: SubNavPort) {
    this.subNavRepository = subNavRepository;
  }

  execute(sectionId: SectionId): SubNavItem[] {
    return this.subNavRepository.getItemsBySection(sectionId);
  }
}
