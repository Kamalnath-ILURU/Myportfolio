import React from 'react';
import EditableImage from './EditableImage';
import EditableText from './EditableText';
import { storage } from '../utils/storage';
import { Profile } from '../data/types';

export default function Hero() {
  const profile = storage.getProfile() || {
    name: 'Kamalnath Iluru',
    title: 'Data Analyst | Insights Explorer | Problem Solver',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=256&h=256'
  };

  const updateProfile = (updates: Partial<Profile>) => {
    const newProfile = { ...profile, ...updates };
    storage.setProfile(newProfile as Profile);
  };

  return (
    <section className="pt-32 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
            <EditableImage
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-cover"
              onImageChange={(image) => updateProfile({ image })}
            />
          </div>
          <div className="text-center">
            <EditableText
              value={profile.name}
              onChange={(name) => updateProfile({ name })}
              className="name-animation text-6xl font-bold text-gray-900 mb-4"
            />
            <EditableText
              value={profile.title}
              onChange={(title) => updateProfile({ title })}
              className="text-xl text-gray-600 mb-8"
            />
            <a 
              href="#contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}