import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-[#1e293b] rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all shadow-2xl group flex flex-col h-full"
    >
      {/* 1. Project Image Container */}
      <div className="h-52 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Hover karne par image ke upar ek halka cyan parda aayega */}
        <div className="absolute inset-0 bg-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* 2. Project Details */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <Code2 size={18} className="text-cyan-400" />
          <h4 className="text-xl font-bold text-white line-clamp-1">{project.title}</h4>
        </div>
        
        <p className="text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tech_stack.split(',').map((tech, i) => (
            <span key={i} className="text-[10px] font-mono bg-slate-900 text-cyan-400 px-2 py-1 rounded border border-cyan-500/20">
              #{tech.trim()}
            </span>
          ))}
        </div>

        {/* 3. Action Buttons (GitHub & Live Link) */}
        <div className="flex gap-4 pt-4 border-t border-slate-700/50">
          <a 
            href={project.github_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium"
          >
            <Github size={16} /> Code
          </a>
          
          {project.live_demo_url && (
            <a 
              href={project.live_demo_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 bg-cyan-600 text-[#0f172a] rounded-lg hover:bg-cyan-500 transition-colors text-sm font-bold"
            >
              <ExternalLink size={16} /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;