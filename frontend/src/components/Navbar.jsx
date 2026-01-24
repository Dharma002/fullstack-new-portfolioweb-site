import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full p-6 md:px-12 flex justify-between items-center bg-[#0f172a]/90 backdrop-blur-md z-[100] border-b border-slate-800/50">
      <Link to="/" className="flex items-center gap-2 group">
         <div className="bg-cyan-500 text-[#0f172a] w-10 h-10 flex items-center justify-center rounded-lg font-black text-xl shadow-[0_0_15px_rgba(34,211,238,0.4)] group-hover:rotate-[360deg] transition-all duration-500">
           D
         </div>
         <div className="flex flex-col leading-none">
           <span className="text-white font-bold text-xl tracking-tighter">Dharma</span>
           <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-[3px]">Portfolio</span>
         </div>
       </Link>
             
      <div className="flex gap-8 text-xs font-medium uppercase tracking-[0.2em]">
        {navLinks.map((link) => (
          <NavLink 
            key={link.name}
            to={link.path}
            className={({ isActive }) => 
              isActive ? "text-cyan-400 border-b border-cyan-400" : "hover:text-cyan-400 transition"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;