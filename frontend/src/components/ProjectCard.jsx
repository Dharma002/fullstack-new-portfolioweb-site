import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      /* Fix: bg-white for Light Mode, bg-[#1e293b] for Dark Mode */
      className="bg-white dark:bg-[#1e293b] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all shadow-xl dark:shadow-2xl group flex flex-col h-full"
    >
      {/* 1. Project Image Container */}
      <div className="h-52 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/400x200?text=No+Image'; }}
        />
        <div className="absolute inset-0 bg-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* 2. Project Details */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <Code2 size={18} className="text-cyan-600 dark:text-cyan-400" />
          {/* Fix: text-slate-900 for Light Mode */}
          <h4 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-1 transition-colors">
            {project.title}
          </h4>
        </div>
        
        {/* Fix: text-slate-600 for Light Mode text */}
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed transition-colors">
          {project.description}
        </p>
        
        {/* Tech Stack Tags - DYNAMIC COLORS */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {(Array.isArray(project.tech_stack) ? project.tech_stack : project.tech_stack?.split(',') || []).map((tech, i) => (
            <span 
              key={i} 
              className="text-[10px] font-mono bg-slate-100 dark:bg-slate-900 text-cyan-700 dark:text-cyan-400 px-2 py-1 rounded border border-cyan-500/20 font-bold"
            >
              #{tech.trim()}
            </span>
          ))}
        </div>

        {/* 3. Action Buttons */}
        <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-700/50">
          <a 
            href={project.github_url} 
            target="_blank" 
            rel="noopener noreferrer"
            /* Fix: Code button light mode colors */
            className="flex-1 flex items-center justify-center gap-2 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium"
          >
            <Github size={16} /> Code
          </a>
          
          {project.live_demo_url && (
            <a 
              href={project.live_demo_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 bg-cyan-600 text-white dark:text-[#0f172a] rounded-lg hover:bg-cyan-500 transition-colors text-sm font-bold shadow-md shadow-cyan-500/20"
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