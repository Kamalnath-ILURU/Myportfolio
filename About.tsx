import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
        <div className="prose prose-lg max-w-none text-gray-600">
          <p>
            As a passionate Data Analyst, I specialize in transforming complex datasets into actionable insights. 
            With a strong foundation in statistical analysis and data visualization, I help organizations make 
            data-driven decisions that drive growth and efficiency.
          </p>
          <p>
            My approach combines technical expertise with clear communication, ensuring that insights are not 
            just discovered but also effectively shared with stakeholders at all levels.
          </p>
        </div>
      </div>
    </section>
  );
}