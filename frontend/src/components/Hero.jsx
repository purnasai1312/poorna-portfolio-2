import React, { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../data/mockData';
import { ArrowRight, Database, Cloud, LineChart, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const canvasRef = useRef(null);
  const [pipelineStep, setPipelineStep] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = 700;

    // Data particles flowing through pipeline
    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.radius = Math.random() * 3 + 1;
        this.opacity = Math.random();
        this.color = ['#00B4D8', '#10B981', '#F59E0B', '#8B5CF6'][Math.floor(Math.random() * 4)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Fade in and out
        this.opacity += (Math.random() - 0.5) * 0.02;
        this.opacity = Math.max(0.1, Math.min(1, this.opacity));
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Pipeline flow lines
    const flowLines = [];
    const createFlowLine = () => {
      return {
        x: 0,
        y: Math.random() * canvas.height,
        speed: Math.random() * 3 + 2,
        width: Math.random() * 100 + 50,
        color: ['#00B4D8', '#10B981', '#F59E0B'][Math.floor(Math.random() * 3)]
      };
    };

    for (let i = 0; i < 15; i++) {
      flowLines.push(createFlowLine());
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw flow lines (data streams)
      flowLines.forEach((line, index) => {
        line.x += line.speed;
        if (line.x > canvas.width) {
          flowLines[index] = createFlowLine();
        }

        const gradient = ctx.createLinearGradient(line.x, 0, line.x + line.width, 0);
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(0.5, line.color + '40');
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fillRect(line.x, line.y, line.width, 2);
      });

      // Draw and update particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 180, 216, ${(1 - distance / 120) * 0.3})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 700;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPipelineStep((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const pipelineSteps = [
    { name: 'EXTRACT', color: 'from-blue-500 to-cyan-500', icon: Database },
    { name: 'TRANSFORM', color: 'from-purple-500 to-pink-500', icon: Cloud },
    { name: 'LOAD', color: 'from-emerald-500 to-green-500', icon: LineChart }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pb-24">
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-purple-950/30 to-slate-950/50"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Pipeline Visualization */}
          <div className="mb-8 md:mb-12 flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {pipelineSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={step.name}>
                  <div 
                    className={`relative group transition-all duration-500 ${
                      pipelineStep === index ? 'scale-110' : 'scale-100 opacity-60'
                    }`}
                  >
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${
                      step.color
                    } flex items-center justify-center shadow-2xl ${
                      pipelineStep === index ? 'shadow-blue-500/50 ring-4 ring-blue-400/30' : ''
                    }`}>
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <div className="absolute -bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <span className={`text-xs font-bold ${
                        pipelineStep === index ? 'text-white' : 'text-gray-500'
                      }`}>
                        {step.name}
                      </span>
                    </div>
                    {pipelineStep === index && (
                      <div className="absolute inset-0 rounded-2xl animate-ping opacity-20 bg-gradient-to-br from-blue-400 to-purple-400"></div>
                    )}
                  </div>
                  {index < pipelineSteps.length - 1 && (
                    <div className="flex items-center gap-1">
                      {[...Array(2)].map((_, i) => (
                        <ChevronRight 
                          key={i}
                          className={`w-4 h-4 md:w-6 md:h-6 transition-all duration-300 ${
                            pipelineStep === index ? 'text-blue-400 animate-pulse' : 'text-gray-600'
                          }`}
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6 md:mb-8 backdrop-blur-sm animate-pulse">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span className="text-xs md:text-sm text-emerald-300 font-medium">Available for Opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mb-4 md:mb-6 leading-tight px-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                {personalInfo.name}
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8 px-4">
              <div className="h-1 w-12 md:w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-300 font-bold tracking-wide">
                {personalInfo.title}
              </h2>
              <div className="h-1 w-12 md:w-16 bg-gradient-to-l from-transparent via-blue-500 to-transparent rounded-full"></div>
            </div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4">
              {personalInfo.summary}
            </p>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12 max-w-4xl mx-auto px-4">
              {[
                { value: personalInfo.yearsOfExperience, label: 'Years Experience', color: 'from-blue-500 to-cyan-500', suffix: '+' },
                { value: personalInfo.projectsCompleted, label: 'Projects Completed', color: 'from-emerald-500 to-green-500', suffix: '+' },
                { value: personalInfo.cloudPlatforms, label: 'Cloud Platforms', color: 'from-amber-500 to-orange-500', suffix: '' },
                { value: personalInfo.domainsWorked, label: 'Industry Domains', color: 'from-purple-500 to-pink-500', suffix: '' }
              ].map((stat, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  <div className="relative">
                    <div className={`text-3xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br ${stat.color} mb-1 md:mb-2`}>
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
              <Button 
                onClick={() => scrollToSection('projects')} 
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 md:px-10 py-6 md:py-7 text-base md:text-lg rounded-xl transition-all shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 group"
              >
                View Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                variant="outline" 
                className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 md:px-10 py-6 md:py-7 text-base md:text-lg rounded-xl transition-all backdrop-blur-sm"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges at bottom - Good spacing from buttons */}
      <div className="hidden md:flex absolute bottom-12 left-1/2 transform -translate-x-1/2 items-center gap-6 text-gray-400">
        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 transition-all">
          <Database className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-medium">Big Data</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 transition-all">
          <Cloud className="w-5 h-5 text-purple-400" />
          <span className="text-sm font-medium">Cloud Native</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 transition-all">
          <LineChart className="w-5 h-5 text-emerald-400" />
          <span className="text-sm font-medium">Analytics</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;