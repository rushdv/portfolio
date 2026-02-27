import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowRight, Download } from "lucide-react";
import TextDecrypt from "../components/TextDecrypt";

export default function Hero({ theme }) {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden transition-colors duration-500">
      {/* Minimal Background - Only subtle glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <h2 className="text-cyan-400 font-medium text-lg tracking-[0.3em] uppercase font-mono">
              <TextDecrypt text="Hi, I'm" />
            </h2>

            {/* Full Name - Clean Design */}
            <div className="space-y-2">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  <TextDecrypt text="Shihab" delay={200} />
                </span>
              </h1>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  <TextDecrypt text="Shahriar" delay={400} />
                </span>
              </h1>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-none font-mono">
                <span className="text-cyan-400">
                  <TextDecrypt text="Rashu" delay={600} />
                </span>
              </h1>
            </div>

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-mono font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for hire
            </motion.div>
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold text-[var(--text-secondary)] max-w-2xl leading-tight">
            Crafting <span className="text-[var(--text-primary)]">secure digital experiences</span> through modern web development.
          </h3>
          
          <p className="text-[var(--text-secondary)] max-w-xl text-lg leading-relaxed font-light">
            Full-Stack Developer & Computer Science student specializing in web architecture and security-first engineering.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-8 py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
            >
              Recent Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-8 py-3 glass-card text-[var(--text-primary)] font-bold rounded-lg hover:bg-[var(--text-primary)]/5 transition-colors duration-300 active:scale-95"
            >
              Resume
              <Download size={18} />
            </a>
          </div>

          <div className="flex gap-6 mt-12 text-[var(--text-secondary)]">
            <a href="https://github.com/rushdv" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" title="GitHub"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/shihab-shahriar-rashu-431a3a217/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" title="LinkedIn"><Linkedin size={24} /></a>
            <a href="https://twitter.com/rushdv313/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" title="Twitter"><Twitter size={24} /></a>
          </div>
        </motion.div>

        {/* Right Content - Optimized Terminal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block relative group"
        >
          <div className="glass-card relative rounded-2xl p-8 overflow-hidden transition-all duration-500 border border-white/10 hover:border-cyan-500/20">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400/60"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400/60"></div>
              <div className="w-3 h-3 rounded-full bg-green-400/60"></div>
            </div>

            <div className="font-mono text-sm leading-relaxed space-y-3">
              <div className="flex items-center gap-2 text-slate-500 mb-4">
                <span className="w-8 h-px bg-slate-700"></span>
                # Full Stack Developer
              </div>

              <div className="bg-slate-950/50 rounded-lg p-4 border border-white/5">
                <p className="text-blue-400">class <span className="text-yellow-400 font-bold">ShihabShahriar</span>:</p>
                <div className="pl-4 space-y-1 text-sm">
                  <p className="text-emerald-400">role = <span className="text-emerald-300">"Full Stack Developer"</span></p>
                  <p className="text-emerald-400">specialization = <span className="text-emerald-300">"Web Security"</span></p>
                  <p className="text-emerald-400">status = <span className="text-emerald-300">"CS Student"</span></p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
