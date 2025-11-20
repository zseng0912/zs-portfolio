import { useEffect, useState } from 'react';
import { Project } from '../types/portfolio';
import ProjectCard from './ProjectCard';
import { fetchProjects } from '../lib/data';

const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration, inventory management, and real-time analytics.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, team collaboration features, and advanced filtering.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with location-based forecasts, interactive maps, and historical data visualization.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Vue.js', 'API Integration', 'Charts.js'],
    liveUrl: 'https://example.com',
  },
  {
    id: '4',
    title: 'Social Media Analytics',
    description: 'Comprehensive analytics platform for social media metrics with AI-powered insights and trend analysis.',
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'React', 'Machine Learning', 'MongoDB'],
    githubUrl: 'https://github.com',
  },
];

export default function ProjectsTab() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await fetchProjects();
        if (!mounted) return;
        setProjects(data.length ? data : sampleProjects);
      } catch (e: any) {
        if (!mounted) return;
        setError('Failed to load projects, showing sample content.');
        setProjects(sampleProjects);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Featured Projects</h2>
        {!projects && (
          <p className="text-slate-500">Loading projects...</p>
        )}
        {error && (
          <p className="text-amber-600 mb-4">{error}</p>
        )}
        {projects && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
