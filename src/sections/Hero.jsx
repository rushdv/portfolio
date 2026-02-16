import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowRight, Download } from "lucide-react";
import TextDecrypt from "../components/TextDecrypt";

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
            <h2 className="text-cyan-400 font-medium text-lg tracking-[0.2em] uppercase font-mono">
              <TextDecrypt text="Hi, I'm" />
            </h2>

            {/* Full Name - Clean & Aligned */}
            <div className="space-y-1">
              <h1 className="text-7xl md:text-9xl font-black text-[var(--text-primary)] tracking-tight leading-none">
                <TextDecrypt text="Shihab Shahriar" delay={300} />
              </h1>
              <h1 className="text-7xl md:text-9xl font-black text-gradient tracking-tight leading-none">
                <TextDecrypt text="Rashu" delay={800} />
              </h1>
            </div>

            {/* Available for hire badge - Better positioned */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for hire
            </motion.div>
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold text-[var(--text-secondary)] max-w-2xl leading-tight">
            Crafting <span className="text-[var(--text-primary)]">secure digital experiences</span> at the intersection of development and defense.
          </h3>
          <p className="text-[var(--text-secondary)] max-w-xl text-lg leading-relaxed font-light">
            Computer Science student and Full-Stack Developer specialized in modern web architectures and <span className="text-cyan-500/80 font-medium">security-first</span> engineering.
          </p>

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
          <div className={`absolute - inset - 2 rounded - [2rem] bg - gradient - to - br from - cyan - 500 / 20 to - blue - 600 / 20 blur - 2xl transition - opacity duration - 700 ${theme === 'dark' ? 'opacity-0 group-hover:opacity-100' : 'opacity-20 group-hover:opacity-40'} `}></div>

          <div className={`glass - card relative rounded - [2rem] p - 10 overflow - hidden transition - all duration - 500 ${theme === 'dark' ? 'border-white/5 shadow-2xl group-hover:border-cyan-500/20' : 'shadow-2xl group-hover:border-cyan-500/30 group-hover:-translate-y-2'} `}>
            <div className="flex gap-1.5 mb-8">
              <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/40"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400/20 border border-yellow-400/40"></div>
              <div className="w-3 h-3 rounded-full bg-green-400/20 border border-green-400/40"></div>
            </div>

            <div className="font-mono text-[13px] leading-relaxed space-y-4 relative z-10">
              <div className="flex items-center gap-2 text-slate-500 italic mb-4">
                <span className="w-8 h-px bg-slate-800"></span>
                # Technical Manifesto
              </div>

              <div className={`space - y - 1.5 rounded - xl p - 5 border backdrop - blur - sm shadow - 2xl transition - all duration - 500 ${theme === 'dark' ? 'bg-slate-950/20 border-white/5' : 'bg-slate-900 border-slate-800'} `}>
                <p className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-300'} `}>class <span className={`${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500'} font - bold`}>ShihabShahriar</span>:</p>
                <div className="pl-6 space-y-1">
                  <p className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-300'} `}>def <span className={`${theme === 'dark' ? 'text-yellow-200' : 'text-yellow-400'} `}>__init__</span>(<span className="text-orange-400">self</span>):</p>
                  <div className="pl-6 text-[12px] space-y-1">
                    <p className={`${theme === 'dark' ? 'text-[var(--text-primary)]' : 'text-slate-100'} `}><span className="text-orange-400">self</span>.<span className="text-cyan-400">role</span> = <span className="text-emerald-400">"Full Stack Developer"</span></p>
                    <p className={`${theme === 'dark' ? 'text-[var(--text-primary)]' : 'text-slate-100'} `}><span className="text-orange-400">self</span>.<span className="text-cyan-400">alias</span> = <span className="text-emerald-400">"Security Enthusiast"</span></p>
                    <p className={`${theme === 'dark' ? 'text-[var(--text-primary)]' : 'text-slate-100'} `}><span className="text-orange-400">self</span>.<span className="text-cyan-400">status</span> = <span className="text-emerald-400">"CS Student"</span></p>
                    <p className={`${theme === 'dark' ? 'text-[var(--text-primary)]' : 'text-slate-100'} `}><span className="text-orange-400">self</span>.<span className="text-cyan-400">mindset</span> = <span className="text-emerald-400">"Tech Enthusiast"</span></p>
                  </div>
                </div>

                <div className="pl-6 pt-3">
                  <p className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-300'} `}>def <span className={`${theme === 'dark' ? 'text-yellow-200' : 'text-yellow-400'} `}>get_expertise</span>(<span className="text-orange-400">self</span>):</p>
                  <div className="pl-6 text-[12px]">
                    <p className={`${theme === 'dark' ? 'text-purple-400' : 'text-purple-300'} `}>return <span className="text-cyan-400">[</span></p>
                    <div className="pl-6 flex flex-col text-emerald-400/90 italic">
                      <span>"Secure_Web_Architecture",</span>
                      <span>"Penetration_Testing",</span>
                      <span>"Modern_UI_Aesthetics"</span>
                    </div>
                    <p className="text-cyan-400">]</p>
                  </div>
                </div>
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
