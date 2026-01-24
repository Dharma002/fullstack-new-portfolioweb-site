import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Icons ko import karna zaroori hai
import { Github, Linkedin, Instagram } from 'lucide-react'; 

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import SocialSidebar from './components/SocialSidebar';
import Skills from './pages/Skills';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-[#0f172a] text-slate-200 min-h-screen selection:bg-cyan-500">
        <Navbar />
        <SocialSidebar /> {/* Sidebar ko yahan rakhein */}
        
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>

        <footer className="py-10 text-center border-t border-slate-900 text-slate-500 text-sm font-mono">
          <div className="flex justify-center gap-6 mb-6 lg:hidden">
              {/* Ab ye icons crash nahi karenge kyunki humne import kar liya hai */}
              <a href="https://github.com/Dharma002" target="_blank" className="hover:text-cyan-400"><Github size={20}/></a>
              <a href="https://www.linkedin.com/in/dharmraj-patel-32365034b/" target="_blank" className="hover:text-cyan-400"><Linkedin size={20}/></a>
              <a href="https://instagram.com/itz__patel_ji___" target="_blank" className="hover:text-cyan-400"><Instagram size={20}/></a>
          </div>
          <p>Designed & Built by Dharmraj Patel | 2026</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;