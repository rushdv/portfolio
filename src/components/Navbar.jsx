import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="text-xl font-bold font-mono text-white hover:text-blue-500 transition-colors">
          &lt;Shihab /&gt;
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-gray-400 font-medium">
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-white transition-colors relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-blue-600 hover:border-transparent transition-all duration-300 backdrop-blur-sm"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
      >
        <ul className="flex flex-col items-center gap-8 text-2xl text-gray-400">
          {["Home", "About", "Projects", "Contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition-colors"
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
