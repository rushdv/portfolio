import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
    {
        title: "Muhasabah",
        description: "Self-reflection and habit tracking platform built with React and FastAPI.",
        tags: ["React", "FastAPI", "PostgreSQL", "Tailwind CSS"],
        duration: "4 Months",
        team: "Solo Project",
        github: "https://github.com/rushdv/muhasabah",
        live: "https://muhasabah.vercel.app"
    },
    {
        title: "NetScope-Live",
        description: "Real-time network traffic visualizer with an interactive dashboard.",
        tags: ["Python", "Scapy", "React", "WebSockets"],
        duration: "2 Months",
        team: "Solo Project",
        github: "https://github.com/rushdv/NetScope-Live",
        live: "#"
    },
    {
        title: "Nexum",
        description: "Scalable social media application with focus on performance.",
        tags: ["React", "Vite", "Tailwind CSS", "DaisyUI"],
        duration: "3 Months",
        team: "Solo Project",
        github: "https://github.com/rushdv/nexum",
        live: "#"
    },
    {
        title: "DebugAI",
        description: "Command-line tool leveraging AI to assist with error debugging.",
        tags: ["Python", "Gemini AI", "CLI", "Pip"],
        duration: "1 Month",
        team: "Solo Project",
        github: "https://github.com/rushdv/debug-ai",
        live: "#"
    },
    {
        title: "Brain Vault",
        description: "Knowledge base for technical documentation and research.",
        tags: ["React", "Vercel", "Vite", "Technical Writing"],
        duration: "Ongoing",
        team: "Solo Project",
        github: "https://github.com/rushdv/brain-vault",
        live: "https://brain-vault-iota.vercel.app/"
    },
    {
        title: "Encrypted Password Manager",
        description: "CLI password manager demonstrating encryption best practices.",
        tags: ["Python", "Cryptography", "Security", "CLI"],
        duration: "2 Months",
        team: "Solo Project",
        github: "https://github.com/rushdv/encrypted-password-manager",
        live: "#"
    },
    {
        title: "SecurePass Manager",
        description: "React-based password manager with encryption and clean UI.",
        tags: ["React", "CryptoJS", "Tailwind CSS", "Framer Motion"],
        duration: "3 Months",
        team: "Solo Project",
        github: "https://github.com/rushdv/securepass",
        live: "#"
    },
    {
        title: "Portfolio v2",
        description: "Dark‑themed portfolio site built with React and Tailwind.",
        tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
        duration: "1 Month",
        team: "Solo Project",
        github: "https://github.com/rushdv/portfolio",
        live: "https://portfolio-rush.vercel.app"
    },
    {
        title: "E-Commerce Security Dashboard",
        description: "Dashboard monitoring security metrics for e-commerce platforms.",
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center text-center mb-20 space-y-4"
                >
                    <h2 className="flex items-center text-4xl font-black text-[var(--text-primary)] uppercase tracking-[0.2em]">
                        <span className="text-cyan-500 mr-4 font-mono text-2xl opacity-60">03.</span> Selected Works
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
                            whileHover={{ y: -12, scale: 1.02 }}
                            className="group relative glass-card p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 flex flex-col h-full backdrop-blur-lg hover:shadow-2xl hover:shadow-cyan-500/10"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-3xl rounded-full -mr-20 -mt-20 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>

                            <div className="flex justify-between items-start mb-8 relative z-10">
                                <motion.div
                                    whileHover={{ rotate: 10, scale: 1.15 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 text-cyan-400 group-hover:from-cyan-500/40 group-hover:to-blue-500/40 group-hover:border-white/30 transition-all duration-500"
                                >
                                    <Folder size={24} />
                                </motion.div>
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
            </div>
        </section>
    );
}
