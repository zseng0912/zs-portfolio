import { Certification } from '../types/portfolio';
import { ExternalLink, Award } from 'lucide-react';

interface CertificationCardProps {
  certification: Certification;
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="h-40 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
      
        {certification.image && (
          <img
            src={certification.image}
            alt={certification.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>


      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {certification.title}
        </h3>
        <p className="text-slate-600 mb-1 font-semibold">{certification.issuer}</p>
        <p className="text-slate-500 text-sm mb-4">{certification.date}</p>

        {certification.credentialUrl && (
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg font-medium text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            View Credential
          </a>
        )}
      </div>
    </div>
  );
}

