import { useState } from 'react';
import { TabType } from './types/portfolio';
import Hero from './components/Hero';
import TabNavigation from './components/TabNavigation';
import ProjectsTab from './components/ProjectsTab';
import SkillsTab from './components/SkillsTab';
import CertificationsTab from './components/CertificationsTab';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('projects');

  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="pb-16">
        {activeTab === 'projects' && <ProjectsTab />}
        {activeTab === 'skills' && <SkillsTab />}
        {activeTab === 'certifications' && <CertificationsTab />}
      </main>
      <footer className="bg-slate-900 text-white py-8 text-center">
        <p className="text-slate-400">© 2025 Tan Zu Seng. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
