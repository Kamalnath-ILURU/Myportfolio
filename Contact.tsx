import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-8">
            <a 
              href="mailto:your.email@example.com"
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <Mail className="w-6 h-6 mr-2" />
              Email
            </a>
            <a 
              href="https://github.com/yourusername"
              className="flex items-center text-gray-600 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 mr-2" />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yourusername"
              className="flex items-center text-gray-600 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 mr-2" />
              LinkedIn
            </a>
          </div>
          <p className="text-gray-600 text-center max-w-2xl">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss potential projects 
            or just want to connect!
          </p>
        </div>
      </div>
    </section>
  );
}