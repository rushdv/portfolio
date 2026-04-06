import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowRight, Download, MapPin } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.05 },
  },
};

// No blur — clean fade+slide only
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero({ theme }) {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden transition-colors duration-500">
      {/* Ambient glows — start visible, no initial flash */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.09, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[120px] opacity-[0.05]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[120px] opacity-[0.04]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">

          <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="h-px bg-cyan-500"
            />
            <span className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase">Full-Stack Developer</span>
          </motion.div>

          <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6">
            <span className="text-[var(--text-primary)]">Shihab</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Shahriar
            </span>
          </motion.h1>

          <motion.p variants={item} className="text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-light">
            Building secure, scalable web applications with a focus on clean architecture and performance-first engineering.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-cyan-500 text-slate-950 font-bold rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:bg-cyan-400 transition-shadow duration-300 text-sm"
            >
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 glass-card text-[var(--text-primary)] font-bold rounded-lg hover:border-white/20 transition-colors duration-300 text-sm"
            >
              <Download size={16} />
              Resume
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
              <MapPin size={14} className="text-cyan-500" />
              <span className="font-mono">Bangladesh</span>
            </div>
            <div className="w-px h-4 bg-[var(--card-border)]" />
            <div className="flex items-center gap-2">
              <motion.span
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-emerald-400 block"
              />
              <span className="text-emerald-400 text-sm font-mono">Open to opportunities</span>
            </div>
          </motion.div>

          <motion.div variants={item} className="flex gap-3 mt-10">
            {[
              { href: "https://github.com/rushdv", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/shihab-shahriar-rashu-431a3a217/", icon: Linkedin, label: "LinkedIn" },
              { href: "https://twitter.com/rushdv313/", icon: Twitter, label: "Twitter" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500/30 transition-colors duration-200"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
