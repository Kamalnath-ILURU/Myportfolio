import React from 'react';
import { LineChart, Database, BarChart4, Brain } from 'lucide-react';

const skills = [
  {
    category: "Data Analysis",
    items: ["SQL", "Python", "R", "Statistical Analysis", "Data Cleaning"],
    icon: LineChart
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Data Warehousing"],
    icon: Database
  },
  {
    category: "Visualization",
    items: ["Tableau", "Power BI", "Matplotlib", "Seaborn"],
    icon: BarChart4
  },
  {
    category: "Machine Learning",
    items: ["Predictive Modeling", "Classification", "Regression", "Clustering"],
    icon: Brain
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills & Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="bg-white p-6 rounded-lg shadow-md">
              <skill.icon className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}