import React from 'react';
import { experience, education, certifications } from '../data/mockData';
import { Briefcase, GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { Badge } from './ui/badge';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Professional Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Career progression, education, and certifications
            </p>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-900 mb-1">{exp.role}</h4>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                        {exp.client && <span className="text-slate-500">({exp.client})</span>}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-slate-600 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-blue-100 text-blue-700 border border-blue-300">
                      {exp.cloud}
                    </Badge>
                    <Badge variant="outline" className="border-slate-300 text-slate-700">
                      {exp.domain}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Education</h3>
              </div>

              <div className="space-y-4">
                {education.map((edu) => (
                  <div 
                    key={edu.id} 
                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{edu.degree}</h4>
                    <p className="text-emerald-600 font-semibold mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-slate-600 text-sm mb-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-600 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <Badge className={edu.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}>
                        {edu.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div 
                    key={cert.id} 
                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-amber-500"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center flex-shrink-0">
                        <Award className="w-8 h-8 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-slate-900 mb-2">{cert.name}</h4>
                        <p className="text-amber-600 font-semibold">{cert.issuer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl p-6 border border-blue-200">
                <h4 className="text-lg font-bold text-slate-900 mb-3">Continuous Learning</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Actively pursuing additional certifications in advanced data engineering, 
                  machine learning operations (MLOps), and cloud-native architectures to stay 
                  at the forefront of industry innovations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;