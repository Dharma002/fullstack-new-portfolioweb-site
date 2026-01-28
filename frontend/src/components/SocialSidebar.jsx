import React from 'react';
import { Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialSidebar = () => {
  const socials = [
    { icon: <Github size={20} />, link: "https://github.com/Dharma002", hover: "hover:text-white dark:hover:text-cyan-400", bg: "hover:bg-slate-900 dark:hover:bg-slate-800" },
    { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/dharmraj-patel-32365034b/", hover: "hover:text-white", bg: "hover:bg-[#0077b5]" },
    { icon: <Instagram size={20} />, link: "https://instagram.com/itz__patel_ji___", hover: "hover:text-white", bg: "hover:bg-[#e1306c]" },
    { icon: <MessageCircle size={20} />, link: "https://wa.me/+919044893809", hover: "hover:text-white", bg: "hover:bg-[#25d366]" },
  ];

  return (
    <div className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center gap-4 z-50">
      <div className="flex flex-col gap-4 mb-2">
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 + (index * 0.1) }} // Navbar ke baad load ho
            /* Yahan humne Contact page wala box style add kiya hai */
            className={`
              w-10 h-10 flex items-center justify-center rounded-xl
              bg-white dark:bg-[#1e293b] 
              border border-slate-200 dark:border-slate-800 
              text-slate-600 dark:text-slate-400 
              transition-all duration-300 shadow-sm
              hover:-translate-y-2 hover:shadow-xl
              ${social.hover} ${social.bg}
            `}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
      
      {/* Vertical Line - Mode according color change */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: "128px" }}
        transition={{ delay: 2, duration: 0.8 }}
        className="w-[2px] bg-gradient-to-b from-cyan-500 to-transparent dark:from-cyan-400 dark:to-transparent opacity-50"
      ></motion.div>
    </div>
  );
};

export default SocialSidebar;