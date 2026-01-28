import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  // 1. Initial State: LocalStorage se purani preference uthao
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
           (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  // 2. Main Logic: Jab bhi isDark badle, HTML tag par class add/remove karo
  useEffect(() => {
    const root = window.document.documentElement; // Yeh <html> tag hai
    
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="relative p-2 w-12 h-6 rounded-full bg-slate-200 dark:bg-slate-700 transition-all duration-300 flex items-center shadow-inner"
      aria-label="Toggle Dark Mode"
    >
      {/* Moving Circle */}
      <div className={`absolute w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center text-[10px]
        ${isDark ? 'translate-x-6 bg-cyan-500' : 'translate-x-0'}`}
      >
        {isDark ? '🌙' : '☀️'}
      </div>
    </button>
  );
};

export default DarkModeToggle;