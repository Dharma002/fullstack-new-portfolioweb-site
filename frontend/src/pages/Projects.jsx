import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard'; // Ham iska use karenge

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Django API Call
    axios.get('http://127.0.0.1:8000/api/portfolio/')
      .then(res => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

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

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj) => (
            /* Yahan humne component call kiya hai jo aapne banaya tha */
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      )}

      {/* Agar koi project na mile to uska message */}
      {!loading && projects.length === 0 && (
        <p className="text-center text-slate-500 font-mono">No projects found. Check Django Admin!</p>
      )}
    </section>
  );
};

export default Projects;