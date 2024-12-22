import React, { useState } from 'react';
import { Award, Plus } from 'lucide-react';
import EditableText from './EditableText';
import { storage } from '../utils/storage';
import { Certificate } from '../data/types';

export default function Certifications() {
  const [certificates, setCertificates] = useState<Certificate[]>(storage.getCertificates());

  const addCertificate = () => {
    const newCertificate: Certificate = {
      id: Date.now().toString(),
      title: 'New Certificate',
      issuer: 'Certificate Issuer',
      date: new Date().getFullYear().toString(),
      link: '#'
    };
    const updatedCertificates = [...certificates, newCertificate];
    setCertificates(updatedCertificates);
    storage.setCertificates(updatedCertificates);
  };

  const updateCertificate = (id: string, updates: Partial<Certificate>) => {
    const updatedCertificates = certificates.map(cert =>
      cert.id === id ? { ...cert, ...updates } : cert
    );
    setCertificates(updatedCertificates);
    storage.setCertificates(updatedCertificates);
  };

  return (
    <section id="certifications" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Certifications</h2>
          <button
            onClick={addCertificate}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Plus className="w-4 h-4" /> Add Certificate
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-white p-6 rounded-lg shadow-md">
              <Award className="w-8 h-8 text-blue-600 mb-4" />
              <EditableText
                value={cert.title}
                onChange={(title) => updateCertificate(cert.id, { title })}
                className="text-xl font-semibold mb-2"
              />
              <EditableText
                value={cert.issuer}
                onChange={(issuer) => updateCertificate(cert.id, { issuer })}
                className="text-gray-600 mb-1"
              />
              <EditableText
                value={cert.date}
                onChange={(date) => updateCertificate(cert.id, { date })}
                className="text-gray-500 text-sm mb-4"
              />
              <EditableText
                value={cert.link}
                onChange={(link) => updateCertificate(cert.id, { link })}
                className="text-blue-600 hover:text-blue-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}