import React from 'react';
import { motion } from 'framer-motion';
// Icons import kar rahe hain
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
        { name: "Django", icon: <SiDjango className="text-[#092e20]" /> },
        { name: "Python", icon: <SiPython className="text-[#3776ab]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
        { name: "SQLite", icon: <SiSqlite className="text-[#003b57]" /> },
      ]
    },
    {
      title: "Frontend & UI",
      skills: [
        { name: "React.js", icon: <SiReact className="text-[#61dafb]" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-[#06b6d4]" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-[#e34f26]" /> },
        { name: "CSS3", icon: <SiCss3 className="text-[#1572b6]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#f7df1e]" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952b3]" /> },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] pt-28 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-16">
          Technical <span className="text-cyan-400">Stack</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, index) => (
            <div key={index} className="bg-[#1e293b] p-8 rounded-3xl border border-slate-800 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-8 border-b border-slate-700 pb-2">
                {cat.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)' }}
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all group"
                  >
                    <div className="text-3xl mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-slate-300 text-xs font-medium uppercase tracking-wider">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;