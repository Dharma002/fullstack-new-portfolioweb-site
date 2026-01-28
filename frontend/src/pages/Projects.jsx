import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard'; 
import { projects } from '../components/projectsData'; 

const Projects = () => {
  return (
    <section className="py-20 px-6 md:px-24 max-w-7xl mx-auto min-h-screen bg-transparent">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        {/* Fix: text-slate-900 for Light Mode */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tighter">
          My <span className="text-cyan-600 dark:text-cyan-400">Works</span>
        </h2>
        
        <div className="flex items-center gap-4">
          <p className="text-cyan-600 dark:text-cyan-400 font-mono uppercase tracking-widest text-xs font-bold italic">
            // Projects I've built from scratch
          </p>
          <div className="h-[1px] bg-slate-200 dark:bg-slate-800 flex-grow"></div>
        </div>
      </motion.div>

      {/* Grid: Staggered animation ke liye container */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        {projects.map((proj) => (
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} key={proj.id}>
            <ProjectCard project={proj} />
          </motion.div>
        ))}
      </motion.div>

      {projects.length === 0 && (
        <p className="text-center text-slate-500 font-mono mt-20">No projects found. Add them in projectsData.js!</p>
      )}
    </section>
  );
};

export default Projects;