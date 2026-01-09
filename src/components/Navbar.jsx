import { useState } from "react";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <a href="#home" className="text-white font-bold text-xl">
          Shihab
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-gray-300">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
            <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
          </ul>

          <div className="flex gap-4 border-l border-white/10 pl-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
          </div>

          <a href="#contact" className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur absolute top-16 left-0 w-full border-b border-white/10">
          <ul className="flex flex-col p-6 gap-4 text-gray-300">
            <li><a href="#home" className="block hover:text-white" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" className="block hover:text-white" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#projects" className="block hover:text-white" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#experience" className="block hover:text-white" onClick={() => setIsOpen(false)}>Experience</a></li>
            <li><a href="#contact" className="block hover:text-white" onClick={() => setIsOpen(false)}>Contact</a></li>

            <li className="flex gap-6 mt-4 pt-4 border-t border-white/10">
              <a href="#" className="text-gray-300 hover:text-white">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
