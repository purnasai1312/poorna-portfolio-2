import React, { useState } from 'react';
import { projects } from '../data/mockData';
import { ExternalLink, Award, Cloud, Code, Layers } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Projects3D = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const cloudBadgeColors = {
    AWS: 'bg-orange-100 text-orange-700 border-orange-300',
    GCP: 'bg-blue-100 text-blue-700 border-blue-300',
    Azure: 'bg-cyan-100 text-cyan-700 border-cyan-300'
  };

  const toggleFlip = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              End-to-end data engineering solutions across multiple industries
            </p>
            <div className="mt-6 text-sm text-gray-400">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                <Layers className="w-4 h-4" />
                Click cards to flip and see architecture details
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="perspective-1000"
                style={{ perspective: '1000px' }}
              >
                <div 
                  className={`relative w-full h-[600px] transition-transform duration-700 transform-style-3d cursor-pointer ${
                    flippedCard === project.id ? 'rotate-y-180' : ''
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                  onClick={() => toggleFlip(project.id)}
                >
                  {/* FRONT SIDE */}
                  <div 
                    className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    {/* Project Image */}
                    <div 
                      className="h-64 bg-cover bg-center relative group"
                      style={{ backgroundImage: `url(${project.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80 group-hover:opacity-60 transition-opacity"></div>
                      <div className="absolute top-4 right-4">
                        <Badge className={`${cloudBadgeColors[project.cloud]} text-sm px-3 py-1 border font-bold`}>
                          <Cloud className="w-4 h-4 mr-1" />
                          {project.cloud}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                        <span className="font-semibold text-blue-400">{project.company}</span>
                        <span>•</span>
                        <span>{project.duration.split(' – ')[0]}</span>
                      </div>

                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="mb-4">
                        <h4 className="text-xs font-bold text-gray-400 mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4 text-emerald-400" />
                          KEY ACHIEVEMENTS
                        </h4>
                        <ul className="space-y-1">
                          {project.achievements.slice(0, 2).map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-emerald-300">
                              <span className="text-emerald-400 mt-1">✓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Preview */}
                      <div>
                        <h4 className="text-xs font-bold text-gray-400 mb-2">TECH STACK</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.slice(0, 6).map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="bg-white/5 text-gray-300 border-white/20 text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.techStack.length > 6 && (
                            <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30 text-xs">
                              +{project.techStack.length - 6}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <span className="text-xs text-gray-500">Click to see architecture →</span>
                        <Code className="w-5 h-5 text-gray-600" />
                      </div>
                    </div>
                  </div>

                  {/* BACK SIDE - Architecture Details */}
                  <div 
                    className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900 border border-blue-500/30 shadow-2xl rotate-y-180"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="p-6 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                          <Layers className="w-6 h-6 text-blue-400" />
                          Technical Architecture
                        </h3>
                        <Badge className={`${cloudBadgeColors[project.cloud]} border`}>
                          {project.cloud}
                        </Badge>
                      </div>

                      {/* Detailed Responsibilities */}
                      <div className="flex-1 overflow-y-auto space-y-4">
                        <div>
                          <h4 className="text-sm font-bold text-blue-400 mb-3">DETAILED RESPONSIBILITIES</h4>
                          <ul className="space-y-2">
                            {project.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                <span className="text-blue-400 font-bold mt-1">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Complete Tech Stack */}
                        <div>
                          <h4 className="text-sm font-bold text-purple-400 mb-3">COMPLETE TECH STACK</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, idx) => (
                              <Badge 
                                key={idx} 
                                variant="outline" 
                                className="bg-white/5 text-gray-300 border-white/20 text-xs hover:bg-white/10 transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Domain Info */}
                        <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                          <div className="text-xs text-gray-400 mb-1">DOMAIN</div>
                          <div className="text-white font-semibold">{project.domain}</div>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-white/10">
                        <span className="text-xs text-gray-500">← Click to flip back</span>
                      </div>
                    </div>
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

export default Projects3D;