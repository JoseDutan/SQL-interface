import type { Topic } from '../../domain/models/Topic';
import { AnimatedBackdrop } from '../components/AnimatedBackdrop';
import { FadeInUp } from '../components/FadeInUp';
import { TopicCard } from '../components/TopicCard';

interface SectionPageProps {
  topics: Topic[];
}

export function SectionPage({ topics }: SectionPageProps) {
  return (
    <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden bg-slate-50">
      <AnimatedBackdrop />

      <div className="relative z-10 flex flex-1 flex-col px-8 py-8">
        <div className="mx-auto w-full max-w-3xl space-y-4">
          {topics.length > 0 ? (
            topics.map((topic, index) => (
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
