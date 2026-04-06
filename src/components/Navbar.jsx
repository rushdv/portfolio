import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-[var(--nav-bg)] backdrop-blur-xl border-b border-white/5 py-4 shadow-xl" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 group-hover:border-cyan-500/30 transition-all">
            <img src="/shihab.jpg" alt="Shihab" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
          </div>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--text-primary)] group-hover:text-cyan-400 transition-colors font-mono">
            Shihab
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 text-[11px] uppercase tracking-[0.2em] font-mono text-[var(--text-secondary)]">
            {navLinks.map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-cyan-400 transition-colors relative group py-1">
                  {link}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
              title="Toggle theme"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a href="#contact" className="px-5 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold text-[11px] uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20">
              Hire Me
            </a>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggleTheme} className="p-2 rounded-lg bg-white/5 border border-white/10 text-[var(--text-secondary)] hover:text-cyan-400 transition-all">
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 bg-[var(--bg-primary)]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        <ul className="flex flex-col items-center gap-8">
          {["Home", ...navLinks].map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-[var(--text-primary)] hover:text-cyan-400 transition-colors uppercase tracking-widest"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
