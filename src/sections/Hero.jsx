import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowRight, Download } from "lucide-react";

export default function Hero({ theme }) {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden transition-colors duration-500">
      {/* Background Glows */}
      <div className={`absolute top-1/4 -left-20 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full ${theme === 'light' ? 'mix-blend-multiply opacity-50' : ''}`}></div>
      <div className={`absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full ${theme === 'light' ? 'mix-blend-multiply opacity-50' : ''}`}></div>
      {theme === 'light' && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 blur-[140px] rounded-full"></div>}

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full relative z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for new projects
            </motion.div>

            <div className="space-y-3">
              <h2 className="text-cyan-400 font-medium text-lg tracking-[0.2em] uppercase font-mono">
                Hi, I'm
              </h2>
              <h1 className="text-6xl md:text-8xl font-black text-[var(--text-primary)] tracking-tight leading-[0.9]">
                Shihab <br />
                <span className="text-gradient">Shahriar</span>
              </h1>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-[var(--text-secondary)] max-w-2xl leading-tight">
              Crafting <span className="text-[var(--text-primary)]">secure digital experiences</span> at the intersection of development and defense.
            </h3>
            <p className="text-[var(--text-secondary)] max-w-xl text-lg leading-relaxed font-light">
              Computer Science student and Full-Stack Developer specialized in modern web architectures and <span className="text-cyan-500/80 font-medium">security-first</span> engineering.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] active:scale-95"
            >
              Recent Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-8 py-4 glass-card text-[var(--text-primary)] font-bold rounded-xl hover:bg-[var(--text-primary)]/5 transition-all duration-300 active:scale-95"
            >
              Resume
              <Download size={20} />
            </a>
          </div>

          <div className="flex gap-6 mt-12 text-[var(--text-secondary)]">
            <a href="https://github.com/rushdv/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" title="GitHub"><Github size={22} /></a>
            <a href="https://www.linkedin.com/in/shihab-shahriar-rashu-431a3a217/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" title="LinkedIn"><Linkedin size={22} /></a>
            <a href="https://twitter.com/rushdv313/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" title="Twitter"><Twitter size={22} /></a>
          </div>
        </motion.div>

        {/* Right Content - Modern Tech Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block relative group"
        >
          {/* Card Glow */}
          <div className={`absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-2xl transition-opacity duration-700 ${theme === 'dark' ? 'opacity-0 group-hover:opacity-100' : 'opacity-20 group-hover:opacity-40'}`}></div>

          <div className={`glass-card relative rounded-[2rem] p-10 overflow-hidden transition-all duration-500 ${theme === 'dark' ? 'border-white/5 shadow-2xl group-hover:border-cyan-500/20' : 'shadow-2xl group-hover:border-cyan-500/30 group-hover:-translate-y-2'}`}>
            <div className="flex gap-1.5 mb-8">
              <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/40"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400/20 border border-yellow-400/40"></div>
              <div className="w-3 h-3 rounded-full bg-green-400/20 border border-green-400/40"></div>
            </div>

            <div className="font-mono text-[13px] leading-relaxed space-y-4">
              <div className="text-[var(--text-secondary)] italic mb-4">// Technical Manifesto</div>

              <div className="space-y-1">
                <p className="text-blue-500">class <span className="text-cyan-500 font-bold">Developer</span> {"{"}</p>
                <div className="pl-6 space-y-1">
                  <p className="text-[var(--text-secondary)] font-light">constructor() {"{"}</p>
                  <div className="pl-6">
                    <p className="text-[var(--text-primary)]">this.<span className="text-pink-500">name</span> = <span className="text-emerald-500">'Shihab'</span>;</p>
                    <p className="text-[var(--text-primary)]">this.<span className="text-pink-500">role</span> = <span className="text-emerald-400">'Full Stack'</span>;</p>
                    <p className="text-[var(--text-primary)]">this.<span className="text-pink-500">focus</span> = <span className="text-emerald-400">'Modern UI'</span>;</p>
                  </div>
                  <p className="text-[var(--text-secondary)] font-light">{"}"}</p>
                </div>

                <div className="pl-6 pt-2">
                  <p className="text-slate-400 font-light">get skills() {"{"}</p>
                  <div className="pl-6 flex flex-wrap gap-x-3 text-emerald-400/90">
                    <span>['React',</span>
                    <span>'FastAPI',</span>
                    <span>'Python',</span>
                    <span>'Next.js']</span>
                  </div>
                  <p className="text-slate-400 font-light">{"}"}</p>
                </div>
                <p className="text-blue-400">{"}"}</p>
              </div>
            </div>

            {/* Visual accent */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/10 blur-[60px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-700"></div>
          </div>

          {/* Floating tags or secondary cards could go here */}
        </motion.div>
      </div>
    </section>
  );
}
