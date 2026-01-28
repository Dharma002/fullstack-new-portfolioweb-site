import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  // --- Smart Greeting Logic ---
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-20 gap-10 bg-transparent overflow-hidden">
      {/* Left Content */}
      <div className="w-full md:w-3/5 order-2 md:order-1">
        <motion.p 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          className="text-cyan-600 dark:text-cyan-400 font-mono mb-4 text-lg font-semibold"
        >
          {getGreeting()}, my name is
        </motion.p>
        
        <motion.h2 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.1 }} 
          className="text-6xl md:text-8xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight"
        >
          Dharmraj<span className="text-cyan-500">.</span>
        </motion.h2>
        
        <motion.h3 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.2 }} 
          className="text-3xl md:text-6xl font-bold text-slate-600 dark:text-slate-400 mb-6"
        >
          Full-Stack Web Developer.
        </motion.h3>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.3 }} 
          className="max-w-xl text-slate-700 dark:text-slate-400 text-lg leading-relaxed mb-10"
        >
          BCA Final Year Student. I build scalable web applications using <span className="text-cyan-600 dark:text-white font-bold">Django + React</span>. Focusing on clean code and great user experiences.
        </motion.p>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
          <Link to="/projects" className="px-10 py-4 border-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 font-bold hover:bg-cyan-500 hover:text-white dark:hover:text-[#0f172a] transition-all rounded-lg uppercase tracking-widest text-sm shadow-sm active:scale-95 inline-block">
            See My Projects
          </Link>
        </motion.div>
      </div>

      {/* Right Side: Profile Photo */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="w-full md:w-2/5 flex justify-center items-center order-1 md:order-2"
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          
          <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-full border-4 border-white dark:border-slate-800 bg-slate-200 dark:bg-[#1e293b] shadow-2xl">
            <img 
              src="/my-DP.jpg" 
              alt="Dharmraj Patel"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;