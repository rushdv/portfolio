import { motion } from "framer-motion";

export default function About({ theme }) {
    return (
        <section id="about" className="py-24 relative overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid md:grid-cols-2 gap-16 items-center"
                >
                    {/* Text Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="flex items-center text-3xl font-black text-[var(--text-primary)] uppercase tracking-wider">
                                <span className="text-cyan-500 mr-3 font-mono text-xl opacity-60">01.</span> About <span className="ml-2 text-gradient">Me</span>
                            </h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                        </div>

                        <div className="space-y-6 text-[var(--text-secondary)] text-lg leading-relaxed font-light">
                            <p>
                                I am a passionate <span className="text-[var(--text-primary)] font-medium">Full-Stack Developer</span> and Security Enthusiast focused on building robust, scalable, and secure digital ecosystems. Currently at <span className="text-cyan-500 hover:underline cursor-pointer font-medium">DevEleven-io</span>, I specialize in modern web architectures and defensive computing.
                            </p>
                            <p>
                                My methodology revolves around the synergy of <span className="text-[var(--text-primary)] font-medium">performance</span> and <span className="text-[var(--text-primary)] font-medium">security</span>. I don't just write code; I architect resilient systems that can withstand the complexities of the modern web landscape.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-y-4 pt-6">
                            {[
                                "React / Next.js",
                                "FastAPI / Python",
                                "PostgreSQL / Prisma",
                                "Penetration Testing"
                            ].map((skill) => (
                                <div key={skill} className="flex items-center gap-3 text-sm font-mono text-[var(--text-secondary)] group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform"></div>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Interactive Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: "Experience", value: "5+", sub: "Years" },
                            { label: "Completed", value: "20+", sub: "Projects" },
                            { label: "Security", value: "100%", sub: "Resilience" },
                            { label: "Uptime", value: "99.9%", sub: "Reliability" }
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`glass-card p-6 rounded-2xl border-white/5 transition-all duration-300 text-center group ${theme === 'dark' ? 'hover:border-cyan-500/20' : 'hover:border-cyan-500/30 hover:-translate-y-1'}`}
                            >
                                <div className={`text-3xl font-black mb-1 group-hover:text-cyan-500 transition-colors ${theme === 'dark' ? 'text-white' : 'text-[var(--text-primary)]'}`}>
                                    {stat.value}
                                </div>
                                <div className={`text-[10px] uppercase tracking-widest font-bold ${theme === 'dark' ? 'text-slate-500' : 'text-[var(--text-secondary)]'}`}>
                                    {stat.label}
                                </div>
                                <div className={`text-xs font-mono mt-1 ${theme === 'dark' ? 'text-slate-400 opacity-60' : 'text-[var(--cyan-secondary)] opacity-80'}`}>
                                    {stat.sub}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>


    );
}
