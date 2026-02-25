import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 
      ${scrolled 
        ? 'bg-white/90 dark:bg-[#0f172a]/90 backdrop-blur-md shadow-lg py-2' 
        : 'bg-transparent py-5'
      } border-b border-slate-200 dark:border-slate-800/50`}>
      
      {/* Yahaan humne 'px-4 md:px-8' rakha hai aur 'max-w-full' kar diya hai 
          taaki logo ekdum side ke corner pe rahe.
      */}
      <div className="w-full px-6 md:px-10 flex justify-between items-center">
        
        {/* --- Logo (Fixed at Side Corner with Premium Animation) --- */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "circOut" }}
  className="z-[110]"
>
  <Link to="/" className="flex items-center gap-3 group relative">
    
    {/* Animated Box for 'D' */}
    <div className="relative">
      {/* Dynamic Glow Ring */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-50 group-hover:animate-pulse transition duration-500"></div>
      
      <motion.div 
        whileHover={{ 
          rotateY: 180,
          scale: 1.1,
        }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        className="relative bg-cyan-600 dark:bg-cyan-500 text-white w-11 h-11 flex items-center justify-center rounded-lg font-black text-2xl shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:shadow-cyan-500/50"
      >
        {/* Flip animation handles the 'D' visibility */}
        <motion.span
          animate={{ rotateY: 0 }}
          whileHover={{ rotateY: 180 }}
        >
          D
        </motion.span>
      </motion.div>
    </div>

    {/* Text Animation: Dharmraj Patel */}
    <div className="flex flex-col overflow-hidden">
      <motion.span 
        className="text-slate-900 dark:text-white font-black text-xl tracking-tighter uppercase leading-none"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Dharmraj
      </motion.span>
      
      <div className="flex items-center gap-1">
        <motion.span 
          className="text-cyan-600 dark:text-cyan-400 font-mono text-[10px] font-bold uppercase tracking-[4px]"
        >
          Patel
        </motion.span>
        {/* Animated underline that expands on hover */}
        <div className="h-[1px] w-0 group-hover:w-full bg-cyan-500 transition-all duration-500"></div>
      </div>
    </div>

    {/* Subtle Particle effect on hover (Optional CSS-only) */}
    <div className="absolute -top-2 -left-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping duration-1000"></div>
  </Link>
</motion.div>

        {/* --- Desktop Links & Controls --- */}
        <div className="flex items-center gap-8">
          {/* Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <NavLink 
                  to={link.path}
                  className={({ isActive }) => `
                    relative text-[13px] font-bold uppercase tracking-widest transition-all duration-300
                    hover:text-cyan-500 dark:hover:text-cyan-400
                    ${isActive ? 'text-cyan-500 dark:text-cyan-400' : 'text-slate-600 dark:text-slate-300'}
                    after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] 
                    after:bg-cyan-500 after:transition-all hover:after:w-full
                    ${isActive ? 'after:w-full' : ''}
                  `}
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <div className="md:pl-6 md:border-l border-slate-200 dark:border-slate-800 transition-colors">
              <DarkModeToggle />
            </div>
            
            {/* Mobile Burger Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 md:hidden text-slate-800 dark:text-white focus:outline-none"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* --- Mobile Menu Overlay --- */}
        <div className={`
          fixed inset-0 top-0 left-0 h-screen w-full bg-white dark:bg-[#0f172a]
          flex flex-col items-center justify-center gap-8 
          transition-all duration-500 ease-in-out md:hidden
          ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}
        `}>
          {navLinks.map((link) => (
            <NavLink 
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-widest hover:text-cyan-500"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;