import { useMemo } from 'react';
import type { SectionId } from '../../domain/models/Section';
import type { Topic } from '../../domain/models/Topic';
import { AnimatedBackdrop } from '../components/AnimatedBackdrop';
import { FadeInUp } from '../components/FadeInUp';
import { TopicCard } from '../components/TopicCard';

interface SectionPageProps {
  topics: Topic[];
  sectionId?: SectionId;
  activeSubNavId?: string | null;
}

export function SectionPage({ topics, sectionId, activeSubNavId }: SectionPageProps) {
  const visibleTopics = useMemo(() => {
    if (sectionId !== 'curso') return topics;
    const id = activeSubNavId ?? topics[0]?.id;
    const match = topics.find((t) => t.id === id);
    return match ? [match] : topics;
  }, [sectionId, activeSubNavId, topics]);

  return (
    <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden bg-slate-50">
      <AnimatedBackdrop />

      <div className="relative z-10 flex flex-1 flex-col px-8 py-8">
        <div className="mx-auto w-full max-w-3xl space-y-4">
          {visibleTopics.length > 0 ? (
            visibleTopics.map((topic, index) => (
              <FadeInUp key={topic.id} delayMs={120 + index * 110}>
                <TopicCard topic={topic} />
              </FadeInUp>
            ))
          ) : (
            <FadeInUp delayMs={120} className="py-16 text-center">
              <p className="text-lg text-slate-400">
                No hay contenido disponible aún para esta sección.
              </p>
            </FadeInUp>
          )}
        </div>
      </div>
    </div>
  );
}
