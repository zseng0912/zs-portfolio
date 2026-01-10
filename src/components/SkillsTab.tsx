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
  { id: '10', name: 'RAG', category: 'DevOps', level: 80 },
  { id: '11', name: 'LangChain', category: 'DevOps', level: 90 },
  { id: '12', name: 'OpenAI', category: 'DevOps', level: 75 },
];

const skillIcons: Record<string, React.ReactNode> = {
  'React': <Feather className="w-5 h-5 text-sky-500" />,
  'TypeScript': <Braces className="w-5 h-5 text-blue-600" />,
  'Tailwind CSS': <Layers className="w-5 h-5 text-cyan-400" />,
  'Vue.js': <Feather className="w-5 h-5 text-green-500" />,
  'Node.js': <Server className="w-5 h-5 text-green-700" />,
  'Python': <Terminal className="w-5 h-5 text-yellow-500" />,
  'PostgreSQL': <Database className="w-5 h-5 text-blue-800" />,
  'MongoDB': <Database className="w-5 h-5 text-green-700" />,
};

interface SkillItemProps {
  skill: Skill;
}

function SkillItem({ skill }: SkillItemProps) {
  return (
    <div className="flex items-center gap-3 group p-3 rounded-lg hover:bg-slate-100 transition">
      {skillIcons[skill.name] || <CheckCircle2 className="w-5 h-5 text-slate-800" />}
      <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
        {skill.name}
      </span>
    </div>
  );
}

export default function SkillsTab() {
  const [skills, setSkills] = useState<Skill[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const categories = [ 'AI', 'Backend', 'Frontend'];

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await fetchSkills();
        if (!mounted) return;
        setSkills(data.length ? data : sampleSkills);
      } catch (e: any) {
        if (!mounted) return;
        setError('Failed to load skills, showing sample content.');
        setSkills(sampleSkills);
      }
    })();
    return () => { mounted = false; };
  }, []);

  return (
    <div className="py-16 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((category, index) => (
            <div
              key={category}
              className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 border border-slate-100"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 pb-4 border-b-2 border-gradient-to-r from-blue-500 to-cyan-500 group-hover:border-blue-400">
                {category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(skills ?? sampleSkills)
                  .filter((skill) => skill.category === category)
                  .map((skill, idx) => (
                    <div
                      key={skill.id}
                      style={{
                        animation: `slideUp 0.5s ease-out ${index * 0.1 + idx * 0.05}s both`
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
          <p className="text-amber-600 mt-6">{error}</p>
        )}
      </div>
    </div>
  );
}
