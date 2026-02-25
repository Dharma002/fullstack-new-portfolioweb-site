import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Cursor = () => {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        id: Math.random(), // Unique ID har point ke liye
      };

      // Trail mein naya point add karo aur purane points limit karo (saap ki lambai)
      setTrail((prev) => [...prev.slice(-15), newPoint]); 
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block">
      <AnimatePresence>
        {trail.map((point, index) => (
          <motion.div
            key={point.id}
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ opacity: 0, scale: 0.2 }} // Jaise peeche jayega, chota aur gayab hoga
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }} // Trail kitni der dikhegi
            style={{
              position: 'fixed',
              left: point.x,
              top: point.y,
              translateX: "-50%",
              translateY: "-50%",
            }}
            // Trail ka color aur glow (Bhagwa)
            className="w-2.5 h-2.5 bg-[#FF9933] rounded-full shadow-[0_0_10px_#FF9933]"
          />
        ))}
      </AnimatePresence>

      {/* Main Cursor Head (Sabse aage wala dot) */}
      {trail.length > 0 && (
        <div
          style={{
            position: 'fixed',
            left: trail[trail.length - 1].x,
            top: trail[trail.length - 1].y,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="w-3 h-3 bg-[#FF9933] rounded-full shadow-[0_0_15px_#FF9933] z-10"
        />
      )}
    </div>
  );
};

export default Cursor;