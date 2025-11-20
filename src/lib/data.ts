import { supabase, isSupabaseConfigured } from './supabase';
import type { Project, Skill, Certification } from '../types/portfolio';

function formatIssuedDate(d: string | null): string {
  if (!d) return '';
  try {
    const dt = new Date(d);
    return dt.toLocaleString('default', { month: 'long', year: 'numeric' });
  } catch {
    return d;
  }
}

export async function fetchProjects(): Promise<Project[]> {
  if (!isSupabaseConfigured || !supabase) return [];
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('title', { ascending: true });
  if (error || !data) return [];
  return data.map((row: any) => ({
    id: String(row.id),
    title: row.title,
    description: row.description,
    image: row.image,
    tags: Array.isArray(row.tags) ? row.tags : [],
    liveUrl: row.live_url ?? undefined,
    githubUrl: row.github_url ?? undefined,
  }));
}

export async function fetchSkills(): Promise<Skill[]> {
  if (!isSupabaseConfigured || !supabase) return [];
  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .order('category', { ascending: true })
    .order('level', { ascending: false });
  if (error || !data) return [];
  return data.map((row: any) => ({
    id: String(row.id),
    name: row.name,
    category: row.category,
    level: Number(row.level) || 0,
  }));
}

export async function fetchCertifications(): Promise<Certification[]> {
  if (!isSupabaseConfigured || !supabase) return [];
  const { data, error } = await supabase
    .from('certifications')
    .select('*')
    .order('date', { ascending: false });
  if (error || !data) return [];
  return data.map((row: any) => ({
    id: String(row.id),
    title: row.title,
    issuer: row.issuer,
    date: formatIssuedDate(row.date),
    credentialUrl: row.credential_url ?? undefined,
    image: row.image,
  }));
}