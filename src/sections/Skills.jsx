import { motion } from "framer-motion";

const skills = {
    Frontend: ["HTML", "CSS", "Tailwind CSS", "React", "Framer Motion", "JavaScript (ES6+)"],
    Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "GraphQL"],
    Security: ["Burp Suite", "Wireshark", "Nmap", "Metasploit", "Kali Linux", "OWASP ZAP"],
    Tools: ["Git", "Docker", "AWS", "Figma", "VS Code", "Vercel"]
};

export default function Skills({ theme }) {
    return (
        <section id="skills" className="py-24 relative overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex flex-col items-center text-center mb-16 space-y-4">
                        <h2 className="flex items-center text-4xl font-black text-[var(--text-primary)] uppercase tracking-[0.2em]">
                            <span className="text-cyan-500 mr-4 font-mono text-2xl opacity-60">02.</span> Technical <span className="ml-3 text-gradient">Stack</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                        <p className="text-[var(--text-secondary)] max-w-2xl font-light text-lg">
                            An ever-evolving collection of tools and technologies I use to bring secure, high-performance ideas to life.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(skills).map(([category, items], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`glass-card p-8 rounded-[2rem] border-white/5 transition-all duration-500 group flex flex-col h-full ${theme === 'dark' ? 'hover:border-cyan-500/20' : 'hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]'}`}
                            >
                                <div className={`${theme === 'dark' ? 'mb-6' : 'mb-8'} flex items-center justify-between`}>
                                    <h3 className={`${theme === 'dark' ? 'text-lg' : 'text-xl'} font-bold text-[var(--text-primary)] tracking-wide uppercase font-mono`}>{category}</h3>
                                    <div className={`${theme === 'dark' ? 'w-8 h-8 rounded-full bg-cyan-500/10' : 'w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-md group-hover:rotate-6'} flex items-center justify-center transition-all duration-500`}>
                                        <div className={`${theme === 'dark' ? 'w-2 h-2 bg-cyan-500 group-hover:scale-150 rounded-full' : 'w-2.5 h-2.5 bg-slate-950 rounded-full'} transition-all`}></div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className={`px-3 py-1.5 transition-all cursor-default font-mono font-medium ${theme === 'dark'
                                                ? 'bg-white/5 text-[var(--text-secondary)] rounded-full text-[11px] border border-white/5 hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-500/30'
                                                : 'px-4 py-2 bg-[var(--text-primary)]/5 border border-[var(--card-border)] text-[var(--text-secondary)] rounded-xl text-xs hover:text-cyan-500 hover:border-cyan-500/50 hover:bg-cyan-500/5'}`}
                                        >
                                            {skill}
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
