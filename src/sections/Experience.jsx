import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        title: "Web Developer",
        company: "DevEleven-io",
        location: "Remote / GitHub Organization",
        period: "2024 - Present",
        description: "Specialized in full-stack implementation and security-centric architectures. Collaboratively delivering high-performance web applications and participating in open-source development within the organization.",
        skills: ["React", "Vite", "Tailwind CSS", "API Development"]
    },
    {
        title: "Computer Science Student",
        company: "University",
        location: "Bangladesh",
        period: "2025 - Present",
        description: "Mastering core principles of Computer Science, with a heavy focus on Algorithms, Data Structures, and Network Security. Actively building a diverse portfolio of security tools and web platforms.",
        skills: ["Algorithms", "Python", "Network Security", "Databases"]
    },
    {
        title: "Open Source Contributor",
        company: "Various Projects",
        location: "GitHub",
        period: "2022 - Present",
        description: "Actively contributing to various open-source projects, improving code quality, and implementing new features. Focused on building tools that simplify debugging and enhance security.",
        skills: ["Git", "System Design", "JavaScript", "Security Auditing"]
    }
];

export default function Experience({ theme }) {
    return (
        <section id="experience" className="py-24 relative overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center text-center mb-20 space-y-4"
                >
                    <h2 className="flex items-center text-4xl font-black text-[var(--text-primary)] uppercase tracking-[0.2em]">
                        <span className="text-cyan-500 mr-4 font-mono text-2xl opacity-60">04.</span> Career Log
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                </motion.div>

                <div className={`space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px ${theme === 'dark' ? 'before:bg-gradient-to-b before:from-transparent before:via-[var(--card-border)] before:to-transparent' : 'before:bg-gradient-to-b before:from-transparent before:via-[var(--cyan-primary)] before:to-transparent before:opacity-30'}`}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            {/* Indicator */}
                            <motion.div
                                whileHover={{ scale: 1.3 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-cyan-500/30 text-cyan-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-500 group-hover:border-cyan-500/70 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/50"
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-2 h-2 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500"
                                />
                            </motion.div>

                            {/* Content Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-8 rounded-[2rem] border border-white/10 hover:border-white/30 transition-all duration-500 backdrop-blur-lg group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-cyan-500/5">
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                    <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">{exp.title}</h3>
                                    <motion.span
                                        whileHover={{ scale: 1.05 }}
                                        className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-white/10 text-[var(--text-secondary)] text-[10px] font-mono uppercase tracking-widest rounded-full hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-white/30 transition-all duration-300"
                                    >
                                        <Calendar size={12} className="text-cyan-400" />
                                        {exp.period}
                                    </motion.span>
                                </div>

                                <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--text-secondary)] mb-6 font-mono">
                                    <div className="flex items-center gap-2">
                                        <Briefcase size={14} className="text-cyan-500 opacity-60" />
                                        {exp.company}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={14} className="text-cyan-500 opacity-60" />
                                        {exp.location}
                                    </div>
                                </div>

                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8 font-light italic">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-white/5 border border-white/5 text-[var(--text-secondary)] rounded-lg text-[10px] font-mono group-hover:text-[var(--text-primary)] transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
