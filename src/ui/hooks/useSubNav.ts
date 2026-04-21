import { useMemo } from 'react';
import { GetSubNavUseCase } from '../../application/usecases/GetSubNavUseCase';
import { InMemorySubNavAdapter } from '../../infrastructure/adapters/InMemorySubNavAdapter';
import type { SectionId } from '../../domain/models/Section';

const adapter = new InMemorySubNavAdapter();
const getSubNavUseCase = new GetSubNavUseCase(adapter);

export function useSubNav(sectionId: SectionId | null) {
  return useMemo(
    () => (sectionId ? getSubNavUseCase.execute(sectionId) : []),
    [sectionId]
  );
}
