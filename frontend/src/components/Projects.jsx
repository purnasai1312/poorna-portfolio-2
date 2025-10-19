import React, { useState } from 'react';
import { projects } from '../data/mockData';
import { ExternalLink, ChevronDown, ChevronUp, Cloud, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const cloudBadgeColors = {
    AWS: 'bg-orange-100 text-orange-700 border-orange-300',
    GCP: 'bg-blue-100 text-blue-700 border-blue-300',
    Azure: 'bg-cyan-100 text-cyan-700 border-cyan-300'
  };

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              End-to-end data engineering solutions across multiple industries
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <div 
                      className="h-64 md:h-full bg-cover bg-center relative group overflow-hidden"
                      style={{ backgroundImage: `url(${project.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80 opacity-80 group-hover:opacity-70 transition-opacity"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Badge className={`${cloudBadgeColors[project.cloud]} text-lg px-4 py-2 border`}>
                          <Cloud className="w-5 h-5 mr-2" />
                          {project.cloud}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-3/5 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-3">
                          <span className="font-medium text-blue-400">{project.company}</span>
                          <span>•</span>
                          <span>{project.duration}</span>
                          <span>•</span>
                          <span>{project.domain}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        KEY ACHIEVEMENTS
                      </h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-emerald-300 text-sm">
                            <span className="text-emerald-400 mt-1">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">TECH STACK</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 8).map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="bg-white/5 text-gray-300 border-white/20">
                            {tech}
                          </Badge>
                        ))}
                        {project.techStack.length > 8 && (
                          <Badge variant="outline" className="bg-white/5 text-gray-400 border-white/20">
                            +{project.techStack.length - 8} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Button 
                      onClick={() => toggleProject(project.id)}
                      variant="ghost"
                      className="text-blue-400 hover:text-blue-300 hover:bg-white/5 w-full justify-between"
                    >
                      {expandedProject === project.id ? 'Hide Details' : 'View Detailed Responsibilities'}
                      {expandedProject === project.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </Button>

                    {expandedProject === project.id && (
                      <div className="mt-6 pt-6 border-t border-white/10 animate-in slide-in-from-top">
                        <h4 className="text-sm font-semibold text-gray-400 mb-4">DETAILED RESPONSIBILITIES</h4>
                        <ul className="space-y-3">
                          {project.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                              <span className="text-blue-400 font-bold mt-1">•</span>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>

                        {project.techStack.length > 8 && (
                          <div className="mt-6">
                            <h4 className="text-sm font-semibold text-gray-400 mb-3">COMPLETE TECH STACK</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((tech, idx) => (
                                <Badge key={idx} variant="outline" className="bg-white/5 text-gray-300 border-white/20">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;