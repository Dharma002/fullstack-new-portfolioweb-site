import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiDjango, SiPython, SiReact, SiTailwindcss, 
  SiHtml5, SiCss3, SiJavascript, SiSqlite, 
  SiPostgresql, SiGithub, SiVite, SiBootstrap 
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & Core",
      skills: [
        /* Django icon color for better visibility in both modes */
        { name: "Django", icon: <SiDjango className="text-emerald-700 dark:text-emerald-400" /> },
        { name: "Python", icon: <SiPython className="text-[#3776ab]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
        { name: "SQLite", icon: <SiSqlite className="text-[#003b57] dark:text-sky-300" /> },
      ]
    },
    {
      title: "Frontend & UI",
      skills: [
        { name: "React.js", icon: <SiReact className="text-[#61dafb]" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-[#06b6d4]" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-[#e34f26]" /> },
        { name: "CSS3", icon: <SiCss3 className="text-[#1572b6]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#f7df1e] bg-black/10 dark:bg-transparent rounded" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952b3]" /> },
      ]
    }
  ];

  return (
    /* Fix: Background transparent rakha hai kyunki App.js main background handle kar raha hai */
    <div className="min-h-screen pt-28 pb-12 px-6 bg-transparent transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          /* Fix: text-slate-900 for light mode */
          className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white text-center mb-16 tracking-tight"
        >
          Technical <span className="text-cyan-600 dark:text-cyan-400">Stack</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, index) => (
            /* Fix: Card background light mode mein white aur dark mein slate-800 */
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-[#1e293b] p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl transition-all"
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-8 border-b border-slate-200 dark:border-slate-700 pb-2 flex items-center gap-2">
                {cat.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.05 }}
                    /* Fix: Individual skill box dynamic colors */
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-cyan-500/50 transition-all group shadow-sm hover:shadow-md"
                  >
                    <div className="text-4xl mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase tracking-widest text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;