import { useMemo } from 'react';
import { GetTopicsUseCase } from '../../application/usecases/GetTopicsUseCase';
import { InMemoryTopicAdapter } from '../../infrastructure/adapters/InMemoryTopicAdapter';

const topicAdapter = new InMemoryTopicAdapter();
const getTopicsUseCase = new GetTopicsUseCase(topicAdapter);

export function useTopics(sectionId: string | null) {
  const topics = useMemo(
    () => (sectionId ? getTopicsUseCase.getBySectionId(sectionId) : []),
    [sectionId]
  );

  return { topics };
}
