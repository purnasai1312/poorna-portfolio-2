import React from 'react';
import { personalInfo } from '../data/mockData';
import { Terminal, Linkedin, Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: `https://${personalInfo.linkedin}`, label: 'LinkedIn' },
    { icon: Github, href: `https://${personalInfo.github}`, label: 'GitHub' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">{personalInfo.name}</div>
                <div className="text-sm text-gray-400">{personalInfo.title}</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all group"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span>© {currentYear} {personalInfo.name}.</span>
                <span className="hidden md:inline">•</span>
                <span>All rights reserved.</span>
              </div>
              <div className="flex items-center gap-1">
                <span>Built with</span>
                <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                <span>using React, FastAPI & MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;