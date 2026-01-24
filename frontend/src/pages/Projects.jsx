import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard'; 
// API ki jagah apni local file import karein
import { projects } from '../components/projectsData'; 

const Projects = () => {
  // Ab loading state aur axios ki zaroorat nahi hai
  return (
    <section className="py-20 px-6 md:px-24 max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-white mb-2">My Works</h2>
        <p className="text-cyan-400 font-mono mb-12 uppercase tracking-widest text-sm italic">
          // Projects I've built from scratch
        </p>
      </motion.div>

      {/* Direct mapping from local data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>

      {projects.length === 0 && (
        <p className="text-center text-slate-500 font-mono">No projects found. Add them in projectsData.js!</p>
      )}
    </section>
  );
};

export default Projects;