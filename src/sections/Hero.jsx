import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-cyan-500 font-medium text-lg tracking-wide">
              Hi, my name is
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tight">
              Shihab.
            </h1>
            <h3 className="text-4xl md:text-6xl font-bold text-slate-400">
              Computer Science Student | Full-Stack Developer | Security Enthusiast
            </h3>
            <p className="text-slate-400 max-w-xl text-lg leading-relaxed">
              Building clean, scalable, and secure systems with modern technologies.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-8 py-4 bg-cyan-500 text-slate-900 font-bold rounded-lg hover:bg-cyan-400 transition-all duration-300"
            >
              Check out my work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-8 py-4 border border-cyan-500/30 text-cyan-500 font-bold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Resume
              <Download size={20} />
            </a>
          </div>

          <div className="flex gap-6 mt-12 text-slate-400">
            <a href="https://github.com/rushdv" className="hover:text-cyan-500 hover:-translate-y-1 transition-all"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/shihab-shahriar-rashu-431a3a217" className="hover:text-cyan-500 hover:-translate-y-1 transition-all"><Linkedin size={24} /></a>
            <a href="https://twitter.com/rushdv313" className="hover:text-cyan-500 hover:-translate-y-1 transition-all"><Twitter size={24} /></a>
          </div>
        </motion.div>

        {/* Right Content - Visual/Code Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block relative"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 blur-xl"></div>
          <div className="relative bg-slate-800 rounded-2xl border border-slate-700 p-6 overflow-hidden shadow-2xl">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div className="text-pink-400">class <span className="text-yellow-300">Developer</span> {"{"}</div>
              <div className="pl-4 text-slate-300">
                <span className="text-purple-400">constructor</span>() {"{"}
              </div>
              <div className="pl-8 text-slate-300">
                <span className="text-red-400">this</span>.name = <span className="text-green-400">"Shihab"</span>;
              </div>
              <div className="pl-8 text-slate-300">
                <span className="text-red-400">this</span>.skills = [
              </div>
              <div className="pl-12 text-slate-300">
                <span className="text-green-400">"Full-Stack"</span>, <span className="text-green-400">"Security"</span>, <span className="text-green-400">"Web"</span>
              </div>
              <div className="pl-8 text-slate-300">];</div>
              <div className="pl-8 text-slate-300">
                <span className="text-red-400">this</span>.coffee = <span className="text-orange-400">true</span>;
              </div>
              <div className="pl-4 text-slate-300">{"}"}</div>
              <div className="text-slate-300">{"}"}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
