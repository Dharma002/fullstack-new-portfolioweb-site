import React from 'react';
import { Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialSidebar = () => {
  const socials = [
    { icon: <Github size={22} />, link: "https://github.com/Dharma002", color: "hover:text-white" },
    { icon: <Linkedin size={22} />, link: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile", color: "hover:text-[#0077b5]" },
    { icon: <Instagram size={22} />, link: "https://instagram.com/itz__patel_ji___", color: "hover:text-[#e1306c]" },
    { icon: <MessageCircle size={22} />, link: "https://wa.me/+919044893809", color: "hover:text-[#25d366]" }, // Apna number dalein
  ];

  return (
    <div className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center gap-6 z-50">
      <div className="flex flex-col gap-6 mb-4">
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`text-slate-400 transition-all duration-300 hover:-translate-y-1 ${social.color}`}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
      {/* Ye line ek professional vertical border look degi */}
      <div className="w-[1px] h-32 bg-slate-500"></div>
    </div>
  );
};

export default SocialSidebar;