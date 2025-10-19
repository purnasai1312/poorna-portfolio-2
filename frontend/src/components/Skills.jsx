import React, { useState, useEffect, useRef } from 'react';
import { skills } from '../data/mockData';
import { Code, Cloud, Database, Wrench, BarChart } from 'lucide-react';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const skillsRef = useRef(null);

  const categoryIcons = {
    'Programming & Scripting': Code,
    'Cloud Platforms': Cloud,
    'Data Engineering': Database,
    'Data Warehousing': Database,
    'Databases': Database,
    'DevOps & IaC': Wrench,
    'Data Visualization': BarChart
  };

  const categoryColors = {
    'Programming & Scripting': 'from-purple-500 to-pink-500',
    'Cloud Platforms': 'from-blue-500 to-cyan-500',
    'Data Engineering': 'from-emerald-500 to-teal-500',
    'Data Warehousing': 'from-indigo-500 to-blue-500',
    'Databases': 'from-orange-500 to-red-500',
    'DevOps & IaC': 'from-yellow-500 to-orange-500',
    'Data Visualization': 'from-green-500 to-emerald-500'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleSkills(Object.keys(skills));
            }, 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-white" ref={skillsRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Technical Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive skill set across modern data engineering technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, categorySkills], categoryIndex) => {
              const Icon = categoryIcons[category] || Code;
              const colorClass = categoryColors[category] || 'from-blue-500 to-purple-500';
              
              return (
                <div 
                  key={category} 
                  className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                  style={{ 
                    animationDelay: `${categoryIndex * 100}ms`,
                    opacity: visibleSkills.includes(category) ? 1 : 0,
                    transform: visibleSkills.includes(category) ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.6s ease-out'
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{category}</h3>
                  </div>

                  <div className="space-y-5">
                    {categorySkills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                          <span className="text-sm font-bold text-slate-900">{skill.proficiency}%</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${colorClass} rounded-full transition-all duration-1000 ease-out`}
                            style={{ 
                              width: visibleSkills.includes(category) ? `${skill.proficiency}%` : '0%',
                              transitionDelay: `${(categoryIndex * 100) + (skillIndex * 100)}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;