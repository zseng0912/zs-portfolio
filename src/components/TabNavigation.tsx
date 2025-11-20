import { TabType } from '../types/portfolio';
import { Briefcase, Award, Code } from 'lucide-react';

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const tabs = [
    { id: 'projects' as TabType, label: 'Projects', icon: Briefcase },
    { id: 'skills' as TabType, label: 'Skills', icon: Code },
    { id: 'certifications' as TabType, label: 'Certifications', icon: Award },
  ];

  return (
    <div className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-10 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <nav className="flex justify-center sm:justify-center space-x-2 py-6 overflow-x-auto scrollbar-hide -mx-2 px-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-2 px-5 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-300 relative whitespace-nowrap ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg -z-10 shadow-lg" />
                )}
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
