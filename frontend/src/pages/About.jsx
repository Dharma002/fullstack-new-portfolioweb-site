import { motion } from 'framer-motion';
import { Code2, GraduationCap, User, Cpu, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-6 md:px-24 max-w-6xl mx-auto min-h-screen">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-16"
      >
        {/* Fix: text-slate-900 for light mode */}
        <h2 className="text-5xl font-bold text-slate-900 dark:text-white italic uppercase tracking-tighter transition-colors">About Me</h2>
        <div className="h-[1px] bg-slate-200 dark:bg-slate-800 flex-grow"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Professional Photo Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group flex justify-center lg:justify-start"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-cyan-500 rounded-2xl z-0 group-hover:top-2 group-hover:left-2 transition-all duration-300"></div>
            
            {/* Fix: Light background for image container in light mode */}
            <div className="relative w-full h-full bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden z-10 border border-slate-200 dark:border-slate-700 shadow-2xl transition-colors">
              <img 
                src="/my-DP.jpg" 
                alt="Dharmraj Patel" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-105 hover:scale-100"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 bg-cyan-500 text-[#0f172a] p-4 rounded-xl shadow-xl z-20 font-bold flex items-center gap-2 transform group-hover:scale-110 transition-transform">
              <Sparkles size={18} />
              <span className="text-xs uppercase tracking-tighter font-mono">Full Stack Dev</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Identity & Bio */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed transition-colors">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              I am <span className="text-cyan-600 dark:text-cyan-400">Dharmraj Patel</span>
            </h3>
            <p>
              I am a highly motivated <span className="text-slate-900 dark:text-white font-semibold">BCA Final Year Student</span> with a deep passion for building scalable and efficient web applications. I thrive on turning complex logic into simple, intuitive user experiences.
            </p>
            <p>
              My core expertise lies in the <span className="text-slate-900 dark:text-white font-semibold">Django (Backend) and React (Frontend)</span> ecosystem. I have successfully developed real-world projects like the <span className="text-cyan-600 dark:text-cyan-400 font-medium italic underline decoration-slate-300 dark:decoration-slate-700">S P I C College Portal</span>, which showcases my ability to architect robust full-stack solutions.
            </p>
          </div>

          {/* Qualification Card Fix: Light background and dark border in light mode */}
          <div className="bg-white dark:bg-[#1e293b] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg space-y-4 transition-colors">
             <div className="flex items-center gap-4">
               <div className="bg-cyan-500/10 p-3 rounded-xl"><GraduationCap className="text-cyan-600 dark:text-cyan-400" /></div>
               <div>
                 <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Education</p>
                 <p className="text-slate-900 dark:text-white font-medium">Bachelor of Computer Applications [CGPA: 8.65]</p>
               </div>
             </div>
             
             <div className="flex items-center gap-4">
               <div className="bg-cyan-500/10 p-3 rounded-xl"><Code2 className="text-cyan-600 dark:text-cyan-400" /></div>
               <div>
                 <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Specialization</p>
                 <p className="text-slate-900 dark:text-white font-medium">Django-React Full Stack Development</p>
               </div>
             </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="pt-4 flex gap-4">
            <a href="https://wa.me/+919044893809?text=Hi Dharmraj, I saw your portfolio and want to hire you!" target="_blank" rel="noreferrer">
              <button className="px-8 py-3 bg-cyan-500 text-white dark:text-[#0f172a] font-bold rounded-lg hover:bg-cyan-600 dark:hover:bg-cyan-400 transition-all font-mono uppercase text-xs tracking-widest shadow-lg active:scale-95">
                Hire Me
              </button>
            </a>

            <a href="/Dharmraj_resume.pdf" target="_blank" rel="noreferrer">
              <button className="px-8 py-3 border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all font-mono uppercase text-xs tracking-widest active:scale-95">
                My Resume
              </button>
            </a>            
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;