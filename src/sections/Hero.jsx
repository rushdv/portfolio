import { Github, Linkedin, Twitter, ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full relative z-10">
        <div className="space-y-8">
        
          <h2 className="text-cyan-400 font-medium text-lg tracking-[0.3em] uppercase font-mono">
            Hello, I&apos;m
          </h2>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Shihab Shahriar Rashu
            </span>
          </h1>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-mono font-medium">
            Open to opportunities
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold text-[var(--text-secondary)] max-w-2xl leading-tight">
            Building secure, scalable web applications.
          </h3>

          <p className="text-[var(--text-secondary)] max-w-xl text-lg leading-relaxed font-light">
            Full-Stack Developer focusing on modern web architectures and security-first engineering.
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
              href="/resume.pdf"
              className="flex items-center gap-2 px-8 py-3 glass-card text-[var(--text-primary)] font-bold rounded-lg hover:bg-[var(--text-primary)]/5 transition-colors duration-300 active:scale-95"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>

          <div className="flex gap-6 mt-12 text-[var(--text-secondary)]">
            <a href="https://github.com/rushdv" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" title="GitHub"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/shihab-shahriar-rashu-431a3a217/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" title="LinkedIn"><Linkedin size={24} /></a>
            <a href="https://twitter.com/rushdv313/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" title="Twitter"><Twitter size={24} /></a>
          </div>
        </div>

        <div className="hidden md:flex flex-col justify-center items-start">
        
          <div className="p-8 bg-white/5 rounded-xl">
            <h4 className="text-xl font-bold text-[var(--text-primary)]">Full Stack Developer</h4>
            <p className="text-[var(--text-secondary)] mt-2">Focus on web security and performance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
