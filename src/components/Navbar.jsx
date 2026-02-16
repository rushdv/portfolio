import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
        ? "bg-[var(--nav-bg)] backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl"
        : "bg-transparent py-8"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-black tracking-tighter text-[var(--text-primary)] hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group"
        >
          <div className={`overflow-hidden rounded-xl flex items-center justify-center transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)] ${theme === 'dark' ? 'w-9 h-9 border border-white/10 group-hover:rotate-6' : 'w-10 h-10 border border-black/5 group-hover:rotate-6 shadow-[0_0_20px_rgba(6,182,212,0.3)]'}`}>
            <img src="/shihab.jpg" alt="Shihab" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
          </div>
          <span className={`font-outfit uppercase transition-all ${theme === 'dark' ? 'tracking-widest text-sm opacity-80' : 'tracking-[0.2em] text-sm opacity-90 font-bold'}`}>Shihab</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex gap-10 text-[11px] uppercase tracking-[0.2em] font-mono text-[var(--text-secondary)]">
            {["About", "Projects", "Skills", "Experience", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-cyan-400 transition-all relative group py-2"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 transition-all duration-500 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-[var(--text-primary)] hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300"
              title="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-widest hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Connect
            </a>
          </div>
        </div>

        {/* Mobile Menu Button - Visible only on mobile */}
        <div className="flex md:hidden items-center gap-4 z-50">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-[var(--text-primary)]/5 border border-[var(--card-border)] text-[var(--text-secondary)] hover:text-cyan-500 transition-all duration-300"
            title="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus:outline-none transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[var(--bg-primary)]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
      >
        <ul className="flex flex-col items-center gap-8 text-2xl text-[var(--text-primary)]">
          {["Home", "About", "Projects", "Skills", "Contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-500 transition-colors"
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
