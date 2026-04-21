import { useMemo } from 'react';
import { GetSectionsUseCase } from '../../application/usecases/GetSectionsUseCase';
import { InMemorySectionAdapter } from '../../infrastructure/adapters/InMemorySectionAdapter';
import type { SectionId } from '../../domain/models/Section';

const sectionAdapter = new InMemorySectionAdapter();
const getSectionsUseCase = new GetSectionsUseCase(sectionAdapter);

export function useSections() {
  const sections = useMemo(() => getSectionsUseCase.getAll(), []);

  const getById = (id: SectionId) => getSectionsUseCase.getById(id);

  return { sections, getById };
}
