import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  // Animation Variants for cleaner code
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-20 gap-12 bg-transparent overflow-hidden">
      
      {/* Left Content */}
      <motion.div 
        className="w-full md:w-3/5 order-2 md:order-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="text-cyan-500 dark:text-cyan-400 font-mono mb-3 text-lg tracking-widest font-medium uppercase">
          Hi, my name is
        </motion.p>
        
        <motion.h2 variants={itemVariants} className="text-6xl md:text-8xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
          Dharmraj<span className="text-cyan-500">.</span>
        </motion.h2>
        
        <motion.h3 variants={itemVariants} className="text-3xl md:text-6xl font-bold text-slate-500 dark:text-slate-400 mb-6 leading-tight">
          I build things for the web.
        </motion.h3>
        
        <motion.p variants={itemVariants} className="max-w-xl text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
          BCA Final Year Student & <span className="text-slate-900 dark:text-white font-semibold">Full-Stack Developer</span>. 
          Specializing in crafting exceptional digital experiences using <span className="text-cyan-600 font-bold">Django + React</span>.
        </motion.p>

        {/* Buttons Container */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
          <Link 
            to="/projects" 
            className="px-8 py-4 bg-cyan-600 text-white font-bold hover:bg-cyan-700 transition-all rounded-lg uppercase tracking-widest text-xs shadow-lg shadow-cyan-500/20 active:scale-95 text-center"
          >
            Check out my work!
          </Link>

          <a 
            href="/Dharmraj_resume.pdf" 
            target="_blank" 
            rel="noreferrer"
            className="px-8 py-4 border-2 border-cyan-600 text-cyan-600 dark:text-cyan-400 font-bold hover:bg-cyan-600/10 transition-all rounded-lg uppercase tracking-widest text-xs active:scale-95 text-center"
          >
            My Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Right Side: Advanced Profile Animation */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full md:w-2/5 flex justify-center items-center order-1 md:order-2"
      >
        <div className="relative group">
          
          {/* 1. Outer Rotating Dashed Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-6 border-2 border-dashed border-cyan-500/30 rounded-full"
          />

          {/* 2. Inner Rotating Ring (Opposite Direction) */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-10 border border-slate-500/10 rounded-full"
          />
          
          {/* 3. Pulsing Glow Background */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          {/* 4. Morphing Image Container */}
          <motion.div 
            animate={{ 
              borderRadius: [
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "30% 60% 70% 40% / 50% 60% 30% 60%",
                "60% 40% 30% 70% / 60% 30% 70% 40%"
              ],
              y: [0, -20, 0]
            }}
            transition={{ 
              borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden border-4 border-slate-100 dark:border-slate-800 bg-slate-200 dark:bg-slate-900 shadow-2xl z-10"
          >
            <img 
              src="/my-DP.jpg" 
              alt="Dharmraj Patel"
              className="w-full h-full object-cover  transition-all duration-700 scale-110 group-hover:scale-100"
            />
          </motion.div>

          {/* 5. Floating Experience Badge */}
          <motion.div 
            animate={{ x: [0, 5, 0], y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl z-20 border border-cyan-500/20"
          >
            <p className="text-cyan-600 font-bold text-sm leading-tight">BCA<br/><span className="text-slate-500 font-normal">Final Year</span></p>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
};

export default Home;