import { Certification } from '../types/portfolio';
import { ExternalLink, Award } from 'lucide-react';

interface CertificationCardProps {
  certification: Certification;
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="h-40 overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {certification.image && (
          <img
            src={certification.image}
            alt={certification.title}
            className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300 relative"
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

