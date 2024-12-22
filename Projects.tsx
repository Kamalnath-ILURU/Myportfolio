import React, { useState } from 'react';
import { ExternalLink, Plus } from 'lucide-react';
import EditableImage from './EditableImage';
import EditableText from './EditableText';
import { storage } from '../utils/storage';
import { Project } from '../data/types';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(storage.getProjects());

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: 'New Project',
      description: 'Project description',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=400',
      link: '#'
    };
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    storage.setProjects(updatedProjects);
  };

  const updateProject = (id: string, updates: Partial<Project>) => {
    const updatedProjects = projects.map(project =>
      project.id === id ? { ...project, ...updates } : project
    );
    setProjects(updatedProjects);
    storage.setProjects(updatedProjects);
  };

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          <button
            onClick={addProject}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Plus className="w-4 h-4" /> Add Project
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <EditableImage
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                onImageChange={(image) => updateProject(project.id, { image })}
              />
              <div className="p-6">
                <EditableText
                  value={project.title}
                  onChange={(title) => updateProject(project.id, { title })}
                  className="text-xl font-semibold mb-2"
                />
                <EditableText
                  value={project.description}
                  onChange={(description) => updateProject(project.id, { description })}
                  className="text-gray-600 mb-4"
                  multiline
                />
                <EditableText
                  value={project.link}
                  onChange={(link) => updateProject(project.id, { link })}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}