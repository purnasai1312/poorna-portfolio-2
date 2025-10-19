import React from 'react';
import { achievements } from '../data/mockData';
import { Trophy, Target, Shield, Cloud, Award, Zap } from 'lucide-react';

const Achievements = () => {
  const iconMap = {
    trophy: Trophy,
    target: Target,
    shield: Shield,
    cloud: Cloud,
    award: Award,
    zap: Zap
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-sm text-amber-300 font-medium">Key Achievements</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              Proven <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Delivering measurable results across enterprise data engineering projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement) => {
              const Icon = iconMap[achievement.icon] || Trophy;
              return (
                <div
                  key={achievement.id}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Decorative corner */}
                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Stats Bar */}
          <div className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-emerald-400 mb-2">50%</div>
                <div className="text-sm text-gray-400">Effort Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-black text-blue-400 mb-2">35%</div>
                <div className="text-sm text-gray-400">Performance Boost</div>
              </div>
              <div>
                <div className="text-4xl font-black text-purple-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-400">Pipeline Reliability</div>
              </div>
              <div>
                <div className="text-4xl font-black text-amber-400 mb-2">25%</div>
                <div className="text-sm text-gray-400">Efficiency Gain</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
