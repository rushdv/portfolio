import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
    {
        title: "Muhasabah",
        description: "A faith-centered self-reflection and habit tracking platform inspired by the concept of daily accountability in Islam.",
        tags: ["React", "FastAPI", "PostgreSQL", "Tailwind CSS"],
        duration: "4 Months",
        team: "Solo Project",
        github: "https://github.com/rushdv/muhasabah",
        live: "https://muhasabah.vercel.app"
    },
    {
        title: "NetScope-Live",
        description: "A real-time network traffic visualizer with a cyberpunk UI. Bridges the gap between low-level network operations and high-level visualization.",
        tags: ["Python", "Scapy", "React", "WebSockets"],
        duration: "2 Months",
        team: "Solo Project",
        github: "https://github.com/rushdv/NetScope-Live",
        live: "#"
    },
    {
        title: "Nexum",
        description: "A modern, secure, and scalable social media platform designed for high performance and minimal UI.",
        tags: ["React", "Vite", "Tailwind CSS", "DaisyUI"],
        duration: "3 Months",
        team: "Solo Project",
        github: "https://github.com/rushdv/nexum",
        live: "#"
    },
    {
        title: "DebugAI",
        description: "An AI-powered CLI that helps you debug errors directly from the terminal using Gemini 2.5 Flash.",
        tags: ["Python", "Gemini AI", "CLI", "Pip"],
        duration: "1 Month",
        team: "Solo Project",
        github: "https://github.com/rushdv/debug-ai",
        live: "#"
    },
    {
        title: "Brain Vault",
        description: "The core memory bank for all technical intelligence. Archiving algorithms, cybersecurity research, and architectural blueprints.",
        tags: ["React", "Vercel", "Vite", "Technical Writing"],
        duration: "Ongoing",
        team: "Solo Project",
        github: "https://github.com/rushdv/brain-vault",
        live: "https://brain-vault-iota.vercel.app/"
    },
    {
        title: "Encrypted Password Manager",
        description: "A security-focused password manager demonstrating encryption, hashing, and secure file handling in Python.",
        tags: ["Python", "Cryptography", "Security", "CLI"],
        duration: "2 Months",
        team: "Solo Project",
        github: "https://github.com/rushdv/encrypted-password-manager",
        live: "#"
    },
    {
        title: "SecurePass Manager",
        description: "A secure, encrypted password manager built with React and advanced cryptographic libraries. Features local storage encryption and a clean UI.",
        tags: ["React", "CryptoJS", "Tailwind CSS", "Framer Motion"],
        duration: "3 Months",
        team: "Solo Project",
        github: "https://github.com/rushdv/securepass",
        live: "#"
    },
    {
        title: "Portfolio v2",
        description: "A premium, dark-themed portfolio website with smooth animations, glassmorphism, and optimized performance.",
        tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
        duration: "1 Month",
        team: "Solo Project",
        github: "https://github.com/rushdv/portfolio",
        live: "https://portfolio-rush.vercel.app"
    },
    {
        title: "E-Commerce Security Dashboard",
        description: "A specialized dashboard for monitoring security metrics and potential threats on e-commerce platforms.",
        tags: ["Next.js", "TypeScript", "Node.js", "Prisma"],
        duration: "4 Months",
        team: "Team of 3",
        github: "#",
        live: "#"
    }
];

export default function Projects({ theme }) {
    return (
        <section id="projects" className="py-24 relative overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-20 space-y-4"
                >
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`group relative glass-card p-8 rounded-[2rem] border-white/5 transition-all duration-500 flex flex-col h-full ${theme === 'dark' ? 'hover:border-cyan-500/20' : 'hover:border-cyan-500/30 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]'}`}
                            >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-cyan-500/10 transition-colors duration-700"></div>

                    <div className="flex justify-between items-start mb-8 relative z-10">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${theme === 'dark' ? 'bg-white/5 text-cyan-400 group-hover:bg-white/10' : 'bg-cyan-500/10 text-cyan-500 group-hover:scale-110'}`}>
                            <Folder size={24} strokeWidth={theme === 'dark' ? 1.5 : 2} />
                        </div>
                        <div className="flex gap-4 text-[var(--text-secondary)]">
                            <a href={project.github} className="hover:text-cyan-500 transition-colors" title="GitHub"><Github size={20} /></a>
                            <a href={project.live} className="hover:text-cyan-500 transition-colors" title="Live Demo"><ExternalLink size={20} /></a>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-cyan-500 transition-colors duration-300 relative z-10">
                        {project.title}
                    </h3>

                    <div className="flex items-center gap-3 text-[10px] font-mono text-[var(--text-secondary)] mb-6 uppercase tracking-widest relative z-10">
                        <span>{project.duration}</span>
                        <div className="w-1 h-1 bg-[var(--card-border)] rounded-full"></div>
                        <span>{project.team}</span>
                    </div>

                    <p className="text-[var(--text-secondary)] mb-8 text-sm leading-relaxed font-light line-clamp-4 relative z-10">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                        {project.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1 bg-white/5 text-[var(--text-secondary)] text-[10px] font-mono rounded-lg border border-white/5 group-hover:text-[var(--text-primary)] group-hover:border-white/10 transition-all">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
                        ))}
            </div>
        </motion.div>
            </div >
        </section >

    );
}
