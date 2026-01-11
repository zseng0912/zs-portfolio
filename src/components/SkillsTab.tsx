import { useEffect, useState } from 'react';
import { Skill } from '../types/portfolio';
import {
  CheckCircle2,
  Braces,
  Database,
  Feather,
  Terminal,
  Layers,
  Server,
} from 'lucide-react';
import { fetchSkills } from '../lib/data';

/* ------------------ Fallback data ------------------ */
const sampleSkills: Skill[] = [
  { id: '1', name: 'React', category: 'Frontend', level: 90 },
  { id: '2', name: 'TypeScript', category: 'Frontend', level: 85 },
  { id: '3', name: 'Tailwind CSS', category: 'Frontend', level: 95 },
  { id: '4', name: 'Vue.js', category: 'Frontend', level: 75 },
  { id: '5', name: 'Node.js', category: 'Backend', level: 85 },
  { id: '6', name: 'Python', category: 'Backend', level: 80 },
  { id: '7', name: 'PostgreSQL', category: 'Backend', level: 80 },
  { id: '8', name: 'MongoDB', category: 'Backend', level: 75 },
  { id: '9', name: 'LLM', category: 'AI', level: 70 },
  { id: '10', name: 'RAG', category: 'AI', level: 80 },
  { id: '11', name: 'LangChain', category: 'AI', level: 90 },
  { id: '12', name: 'OpenAI', category: 'AI', level: 75 },
];

const categoryItemIcons: Record<string, React.ReactNode> = {
  Frontend: <Layers className="w-5 h-5 text-blue-500" />,
  Backend: <Server className="w-5 h-5 text-green-600" />,
  AI: <Braces className="w-5 h-5 text-purple-500" />,
};

/* ------------------ Category Visuals ------------------ */
const categoryMeta: Record<string, { color: string; icon: React.ReactNode }> = {
  Frontend: {
    color: 'from-blue-500 to-cyan-400',
    icon: <Layers className="w-6 h-6 text-white" />,
  },
  Backend: {
    color: 'from-green-500 to-emerald-400',
    icon: <Server className="w-6 h-6 text-white" />,
  },
  AI: {
    color: 'from-purple-500 to-pink-400',
    icon: <Braces className="w-6 h-6 text-white" />,
  },
};

interface SkillItemProps {
  skill: Skill;
}

/* ------------------ Skill Card ------------------ */
function SkillItem({ skill }: SkillItemProps) {
  return (
    <div className="group bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-slate-200 transition">
          {categoryItemIcons[skill.category] || (
            <CheckCircle2 className="w-5 h-5 text-slate-600" />
          )}
        </div>

        <p className="font-semibold text-slate-800">{skill.name}</p>
      </div>
    </div>
  );
}

/* ------------------ Main Component ------------------ */
export default function SkillsTab() {
  const [skills, setSkills] = useState<Skill[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const categories = ['AI', 'Backend', 'Frontend'];

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await fetchSkills();
        if (!mounted) return;
        setSkills(data.length ? data : sampleSkills);
      } catch {
        if (!mounted) return;
        setError('Failed to load skills, showing sample content.');
        setSkills(sampleSkills);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const getCategoryAvg = (cat: string) => {
    const items = (skills ?? sampleSkills).filter(s => s.category === cat);
    if (!items.length) return 0;
    return Math.round(items.reduce((a, b) => a + b.level, 0) / items.length);
  };

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <div
              key={category}
              className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 hover:shadow-2xl transition"
              style={{ animation: `slideUp 0.6s ease-out ${index * 0.1}s both` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${categoryMeta[category].color}`}
                >
                  {categoryMeta[category].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {category}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(skills ?? sampleSkills)
                  .filter(skill => skill.category === category)
                  .map((skill, idx) => (
                    <div
                      key={skill.id}
                      style={{
                        animation: `slideUp 0.5s ease-out ${
                          index * 0.1 + idx * 0.05
                        }s both`,
                      }}
                    >
                      <SkillItem skill={skill} />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {error && (
          <p className="text-amber-600 mt-8 text-center">{error}</p>
        )}
      </div>
    </div>
  );
}
