import type { SectionId } from '../models/Section';
import type { SubNavItem } from '../models/SubNavItem';

export interface SubNavPort {
  getItemsBySection(sectionId: SectionId): SubNavItem[];
}
