import React from 'react';
import { techStackTimeline } from '../data/mockData';
import { Cloud, Building2, Calendar } from 'lucide-react';

const TechStackTimeline = () => {
  const cloudColors = {
    AWS: 'from-orange-500 to-orange-600',
    GCP: 'from-blue-500 to-blue-600',
    Azure: 'from-cyan-500 to-cyan-600'
  };

  const cloudLogos = {
    AWS: '☁️ AWS',
    GCP: '☁️ GCP',
    Azure: '☁️ Azure'
  };

  return (
    <section id="tech-stack" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Professional Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              My progression through AWS and Azure platforms across different industries
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-emerald-500 to-purple-600 transform md:-translate-x-1/2"></div>

            {techStackTimeline.map((item, index) => (
              <div 
                key={index} 
                className={`relative mb-12 md:mb-16 flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} ml-12 md:ml-0`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${cloudColors[item.cloud]} text-white text-sm font-bold mb-4`}>
                      {cloudLogos[item.cloud]}
                    </div>
                    
                    <div className="flex items-center gap-2 text-slate-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.role}</h3>
                    
                    <div className="flex items-center gap-2 text-slate-600 mb-3">
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{item.company}</span>
                    </div>
                    
                    <p className="text-sm text-slate-500 mb-4">{item.domain}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.mainTech.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white border-4 border-blue-600 rounded-full transform md:-translate-x-1/2 flex items-center justify-center">
                  <Cloud className="w-4 h-4 text-blue-600" />
                </div>

                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackTimeline;