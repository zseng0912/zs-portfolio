import { useEffect, useState } from 'react';
import { Certification } from '../types/portfolio';
import CertificationCard from './CertificationCard';
import { fetchCertifications } from '../lib/data';

const sampleCertifications: Certification[] = [
  {
    id: '1',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'January 2024',
    image: '',
    credentialUrl: 'https://aws.amazon.com',
  },
  {
    id: '2',
    title: 'Professional Scrum Master I',
    issuer: 'Scrum.org',
    date: 'March 2023',
    image: '',
    credentialUrl: 'https://scrum.org',
  },
  {
    id: '3',
    title: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: 'June 2023',
    image: '',
    credentialUrl: 'https://cloud.google.com',
  },
  {
    id: '4',
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: 'September 2023',
    image: '',
  },
  {
    id: '5',
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    date: 'November 2023',
    image: '',
    credentialUrl: 'https://coursera.org',
  },
  {
    id: '6',
    title: 'Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: 'February 2024',
    image: '',
    credentialUrl: 'https://cncf.io',
  },
];

export default function CertificationsTab() {
  const [certifications, setCertifications] = useState<Certification[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await fetchCertifications();
        if (!mounted) return;
        setCertifications(data.length ? data : sampleCertifications);
      } catch (e: any) {
        if (!mounted) return;
        setError('Failed to load certifications, showing sample content.');
        setCertifications(sampleCertifications);
      }
    })();
    return () => { mounted = false; };
  }, []);
  return (
    <div className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Certifications & Achievements</h2>
        {!certifications && (
          <p className="text-slate-500">Loading certifications...</p>
        )}
        {error && (
          <p className="text-amber-600 mb-4">{error}</p>
        )}
        {certifications && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((certification) => (
              <CertificationCard key={certification.id} certification={certification} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
