import { MainLayout } from './ui/layouts/MainLayout';
import { HomePage } from './ui/pages/HomePage';
import { SectionPage } from './ui/pages/SectionPage';
import { useNavigation } from './ui/hooks/useNavigation';
import { useSections } from './ui/hooks/useSections';
import { useTopics } from './ui/hooks/useTopics';

function App() {
  const { activeSection, navigateTo } = useNavigation();
  const { sections } = useSections();
  const { topics } = useTopics(activeSection);

  if (!activeSection) {
    return <HomePage sections={sections} onNavigate={navigateTo} />;
  }

  return (
    <MainLayout
      sections={sections}
      activeSection={activeSection}
      onNavigate={navigateTo}
    >
      <SectionPage topics={topics} />
    </MainLayout>
  );
}

export default App;
