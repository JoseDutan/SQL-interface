import {
  cloneElement,
  isValidElement,
  useEffect,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react';
import type { Section, SectionId } from '../../domain/models/Section';
import { Header } from '../components/Header';
import { HoverSidebar } from '../components/HoverSidebar';
import { useSubNav } from '../hooks/useSubNav';

interface MainLayoutProps {
  children: ReactNode;
  sections: Section[];
  activeSection: SectionId | null;
  onNavigate: (id: SectionId) => void;
  onNavigateToDashboard: () => void;
}

export function MainLayout({
  children,
  sections,
  activeSection,
  onNavigate,
  onNavigateToDashboard,
}: MainLayoutProps) {
  const subNavItems = useSubNav(activeSection);
  const [activeSubNavId, setActiveSubNavId] = useState<string | null>(null);

  useEffect(() => {
    setActiveSubNavId(subNavItems[0]?.id ?? null);
  }, [activeSection, subNavItems]);

  const sectionPageProps =
    activeSection != null && isValidElement(children)
      ? { sectionId: activeSection, activeSubNavId }
      : {};

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        sections={sections}
        activeSection={activeSection}
        onNavigate={onNavigate}
        onNavigateToDashboard={onNavigateToDashboard}
      />
      {activeSection && (
        <HoverSidebar
          key={activeSection}
          items={subNavItems}
          activeId={activeSubNavId}
          onActiveIdChange={setActiveSubNavId}
        />
      )}
      <main className="flex flex-1 flex-col">
        {isValidElement(children)
          ? cloneElement(children as ReactElement<Record<string, unknown>>, sectionPageProps)
          : children}
      </main>
    </div>
  );
}
