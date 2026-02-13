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

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-12"
                >
                    <h2 className="flex items-center text-3xl font-bold text-slate-100">
                        <span className="text-cyan-500 mr-2">03.</span> Some Things I've Built
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="group relative bg-slate-800/40 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-cyan-500/50 transition-all duration-300 shadow-xl overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-3xl rounded-full -mr-12 -mt-12 group-hover:bg-cyan-500/10 transition-colors"></div>

                                <div className="flex justify-between items-start mb-6">
                                    <div className="text-cyan-500">
                                        <Folder size={40} strokeWidth={1.5} />
                                    </div>
                                    <div className="flex gap-4 text-slate-400">
                                        <a href={project.github} className="hover:text-cyan-500 transition-colors" title="GitHub"><Github size={20} /></a>
                                        <a href={project.live} className="hover:text-cyan-500 transition-colors" title="Live Demo"><ExternalLink size={20} /></a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-500 transition-colors">
                                    {project.title}
                                </h3>

                                <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500 mb-4 uppercase tracking-widest">
                                    <span>{project.duration}</span>
                                    <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                                    <span>{project.team}</span>
                                </div>

                                <p className="text-slate-400 mb-8 text-sm leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 text-[10px] font-mono text-slate-400">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="bg-slate-900/80 border border-white/5 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
