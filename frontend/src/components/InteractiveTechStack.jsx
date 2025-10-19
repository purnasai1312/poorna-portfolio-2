import React, { useState } from 'react';
import { skills } from '../data/mockData';
import { Sparkles, Zap, ChevronRight } from 'lucide-react';

const InteractiveTechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = [
    { name: 'Cloud Platforms', color: '#00D9FF', bgColor: 'from-cyan-500 to-blue-500' },
    { name: 'Data Engineering', color: '#00FF94', bgColor: 'from-emerald-500 to-green-500' },
    { name: 'Programming & Scripting', color: '#B620E0', bgColor: 'from-purple-500 to-pink-500' },
    { name: 'Data Warehousing', color: '#FFD600', bgColor: 'from-amber-500 to-orange-500' },
    { name: 'DevOps & IaC', color: '#FF2E63', bgColor: 'from-red-500 to-pink-500' },
    { name: 'Data Visualization', color: '#06FFA5', bgColor: 'from-cyan-500 to-teal-500' },
    { name: 'Databases', color: '#FF6B35', bgColor: 'from-orange-500 to-red-500' }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Hexagonal grid background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='104' viewBox='0 0 60 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 17.3v34.6L30 69.2 0 51.9V17.3L30 0zm0 104l30-17.3V52.1L30 34.8 0 52.1v34.6L30 104z' fill='%2300D9FF' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 animate-pulse">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              <span className="text-sm font-mono text-cyan-400 tracking-widest uppercase">Hexagonal Tech Matrix</span>
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </div>

            <h2 className="text-6xl md:text-7xl font-black text-white mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Technology Ecosystem
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
              Click any category to explore my comprehensive skill set
            </p>
          </div>

          {/* Hexagonal Category Grid */}
          <div className="mb-16 flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
            {categories.map((category, idx) => {
              const categorySkills = skills[category.name] || [];
              const isSelected = selectedCategory === category.name;
              
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(isSelected ? null : category.name)}
                  className={`group relative transition-all duration-300 ${
                    isSelected ? 'scale-110' : 'hover:scale-105'
                  }`}
                >
                  <div className={`
                    hexagon w-40 h-44 bg-gradient-to-br ${category.bgColor} 
                    flex items-center justify-center text-center p-6 cursor-pointer
                    relative overflow-hidden
                    ${isSelected ? 'ring-4 ring-white ring-offset-4 ring-offset-slate-950' : ''}
                  `}>
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="text-white font-bold text-sm mb-2">{category.name.split(' ')[0]}</div>
                      {category.name.split(' ').length > 1 && (
                        <div className="text-white/90 font-semibold text-xs">{category.name.split(' ').slice(1).join(' ')}</div>
                      )}
                      <div className="mt-3 text-white/80 text-xs font-mono">{categorySkills.length} skills</div>
                    </div>

                    {/* Pulse indicator when selected */}
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full animate-ping"></div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Skills Display */}
          {selectedCategory && (
            <div className="animate-fade-in">
              <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl border-2 border-cyan-500/30 p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${categories.find(c => c.name === selectedCategory)?.bgColor} flex items-center justify-center shadow-lg`}>
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-white">{selectedCategory}</h3>
                      <p className="text-cyan-400 font-mono text-sm">{skills[selectedCategory]?.length} Technologies</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-mono text-sm transition-all"
                  >
                    Close
                  </button>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills[selectedCategory]?.map((skill, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 rounded-xl p-5 transition-all duration-300 cursor-pointer"
                    >
                      {/* Skill name */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white font-semibold text-base">{skill.name}</span>
                        <span className={`text-lg font-black ${
                          skill.proficiency >= 90 ? 'text-emerald-400' :
                          skill.proficiency >= 80 ? 'text-cyan-400' :
                          skill.proficiency >= 70 ? 'text-blue-400' :
                          'text-purple-400'
                        }`}>{skill.proficiency}%</span>
                      </div>

                      {/* Progress bar */}
                      <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${categories.find(c => c.name === selectedCategory)?.bgColor} rounded-full transition-all duration-1000 relative`}
                          style={{ width: hoveredSkill === skill.name ? `${skill.proficiency}%` : '0%' }}
                        >
                          <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                        </div>
                      </div>

                      {/* Proficiency label */}
                      <div className="mt-2 text-xs text-gray-400 font-mono">
                        {skill.proficiency >= 90 ? 'Expert' :
                         skill.proficiency >= 80 ? 'Advanced' :
                         skill.proficiency >= 70 ? 'Proficient' :
                         'Intermediate'}
                      </div>

                      {/* Hover arrow */}
                      <ChevronRight className="absolute top-1/2 right-4 -translate-y-1/2 w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Category legend at bottom */}
          {!selectedCategory && (
            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
              {categories.map((cat, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${cat.bgColor}`}></div>
                  <span className="text-gray-300 font-mono">{cat.name.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .hexagon {
          clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default InteractiveTechStack;