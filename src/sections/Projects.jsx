import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Muhasabah",
    description: "Self-reflection and habit tracking platform. Built with React and FastAPI, featuring a PostgreSQL backend and a clean, minimal UI focused on daily journaling and progress tracking.",
    tags: ["React", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    duration: "4 Months",
    github: "https://github.com/rushdv/muhasabah",
    live: "https://muhasabah.vercel.app",
    featured: true,
  },
  {
    title: "NetScope-Live",
    description: "Real-time network traffic visualizer with an interactive dashboard. Uses Scapy for packet capture and WebSockets to stream live data to the React frontend.",
    tags: ["Python", "Scapy", "React", "WebSockets"],
    duration: "2 Months",
    github: "https://github.com/rushdv/NetScope-Live",
    live: null,
  },
  {
    title: "Nexum",
    description: "Scalable social media application with a focus on performance and clean component architecture. Supports real-time interactions and a responsive feed.",
    tags: ["React", "Vite", "Tailwind CSS", "DaisyUI"],
    duration: "3 Months",
    github: "https://github.com/rushdv/nexum",
    live: null,
  },
  {
    title: "DebugAI",
    description: "Command-line tool that leverages the Gemini AI API to analyze error messages and suggest fixes. Installable via pip and works across any Python project.",
    tags: ["Python", "Gemini AI", "CLI", "Pip"],
    duration: "1 Month",
    github: "https://github.com/rushdv/debug-ai",
    live: null,
  },
  {
    title: "Brain Vault",
    description: "Personal knowledge base for technical documentation and research notes. Structured for fast lookup and built to grow alongside ongoing learning.",
    tags: ["React", "Vite", "Vercel", "Technical Writing"],
    duration: "Ongoing",
    github: "https://github.com/rushdv/brain-vault",
    live: "https://brain-vault-iota.vercel.app/",
  },
  {
    title: "Encrypted Password Manager",
    description: "CLI password manager demonstrating encryption best practices using Python's cryptography library. Stores credentials securely with AES encryption.",
    tags: ["Python", "Cryptography", "Security", "CLI"],
    duration: "2 Months",
    github: "https://github.com/rushdv/encrypted-password-manager",
    live: null,
  },
  {
    title: "SecurePass Manager",
    description: "React-based password manager with client-side encryption, a clean UI, and smooth animations. No data leaves the browser.",
    tags: ["React", "CryptoJS", "Tailwind CSS", "Framer Motion"],
    duration: "3 Months",
    github: "https://github.com/rushdv/securepass",
    live: null,
  },
  {
    title: "E-Commerce Security Dashboard",
    description: "Dashboard for monitoring security metrics across e-commerce platforms. Built with a team of three, featuring real-time alerts and audit logs.",
    tags: ["Next.js", "TypeScript", "Node.js", "Prisma"],
    duration: "4 Months",
    github: null,
    live: null,
  },
];

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const gridCard = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Projects({ theme }) {
  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-28 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center text-center mb-20 space-y-4"
        >
          <h2 className="flex items-center text-4xl font-black text-[var(--text-primary)] uppercase tracking-[0.2em]">
            <span className="text-cyan-500 mr-4 font-mono text-2xl opacity-60">03.</span> Selected Work
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
          />
          <p className="text-[var(--text-secondary)] max-w-xl font-light">
            A selection of projects I&apos;ve built — from full-stack platforms to security tools.
          </p>
        </motion.div>

        {/* Featured */}
        {featured.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group glass-card p-8 md:p-10 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 mb-8 relative overflow-hidden"
          >
            {/* animated glow blob */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.12, 0.05] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-72 h-72 bg-cyan-500 rounded-full blur-3xl -mr-36 -mt-36 pointer-events-none"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-mono uppercase tracking-widest rounded-full">Featured</span>
                <span className="text-[var(--text-secondary)] text-xs font-mono">{project.duration}</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-6 max-w-2xl">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/8 text-[var(--text-secondary)] text-xs font-mono rounded-lg">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 shrink-0">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500/30 transition-colors text-sm font-medium"
                    >
                      <Github size={16} /> Code
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-slate-950 rounded-lg hover:bg-cyan-400 transition-colors text-sm font-bold"
                    >
                      <ExternalLink size={16} /> Live
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Grid */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {rest.map((project, i) => (
            <motion.div
              key={i}
              variants={gridCard}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 350, damping: 20 },
              }}
              className="group glass-card p-7 rounded-2xl border border-white/10 hover:border-white/25 hover:shadow-xl hover:shadow-black/20 transition-colors duration-300 flex flex-col h-full relative overflow-hidden"
            >
              {/* subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500 rounded-2xl pointer-events-none" />

              <div className="flex justify-between items-start mb-6 relative z-10">
                <span className="text-[var(--text-secondary)] text-[10px] font-mono uppercase tracking-widest">{project.duration}</span>
                <div className="flex gap-3 text-[var(--text-secondary)]">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -2 }}
                      transition={{ type: "spring", stiffness: 500, damping: 20 }}
                      className="hover:text-cyan-400 transition-colors"
                      title="GitHub"
                    >
                      <Github size={17} />
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -2 }}
                      transition={{ type: "spring", stiffness: 500, damping: 20 }}
                      className="hover:text-cyan-400 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={17} />
                    </motion.a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 group-hover:text-cyan-400 transition-colors duration-300 relative z-10">
                {project.title}
              </h3>

              <p className="text-[var(--text-secondary)] text-sm leading-relaxed font-light flex-1 mb-6 relative z-10">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-white/5 text-[var(--text-secondary)] text-[10px] font-mono rounded-md border border-white/5 group-hover:border-white/10 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
