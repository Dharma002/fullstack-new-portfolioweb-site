import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Animation ke liye import
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
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 py-4 md:px-12 
      ${scrolled 
        ? 'bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-lg shadow-lg py-3' 
        : 'bg-transparent py-5'
      } border-b border-slate-200 dark:border-slate-800/50`}>
      
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* --- Logo with Entrance Animation --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-cyan-500 text-white w-10 h-10 flex items-center justify-center rounded-lg font-black text-xl shadow-xl transition-transform group-hover:rotate-[360deg] duration-700">
                D
              </div>
            </div>
            <motion.div 
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex flex-col leading-none"
            >
              <span className="text-slate-900 dark:text-white font-bold text-xl tracking-tight transition-colors">Dharmraj</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-mono text-[10px] uppercase tracking-[3px]">Patel</span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <DarkModeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-slate-800 dark:text-white"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`
          absolute md:static top-full left-0 w-full md:w-auto 
          bg-white dark:bg-[#0f172a] md:bg-transparent
          flex flex-col md:flex-row items-center gap-8 p-8 md:p-0
          transition-all duration-500 ease-in-out
          ${isOpen ? 'translate-y-0 opacity-100 shadow-2xl' : '-translate-y-10 opacity-0 pointer-events-none md:pointer-events-auto md:opacity-100 md:translate-y-0 md:flex'}
        `}>
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.5 }}
            >
              <NavLink 
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `
                  relative text-sm font-semibold uppercase tracking-wider transition-all duration-300
                  hover:text-cyan-600 dark:hover:text-cyan-400
                  ${isActive ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-700 dark:text-slate-300'}
                  after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] 
                  after:bg-cyan-600 dark:after:bg-cyan-400 after:transition-all hover:after:w-full
                  ${isActive ? 'after:w-full' : ''}
                `}
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* Desktop Theme Toggle */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="hidden md:block pl-6 border-l border-slate-200 dark:border-slate-800 transition-colors"
        >
          <DarkModeToggle />
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;