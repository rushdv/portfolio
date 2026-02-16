import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        title: "Systems Engineer",
        company: "DevEleven-io",
        location: "Infrastructure & Web",
        period: "2024 - Present",
        description: "Engineering scalable full-stack architectures with a core focus on security-first implementation and system resilience. Developing high-concurrency microservices and optimizing architectural integrity within organizational workflows.",
        skills: ["React", "Infrastructure", "API Design", "Security"]
    },
    {
        title: "Computer Science Researcher",
        company: "University of Science",
        location: "Bangladesh",
        period: "2025 - Present",
        description: "Mastering core theoretical foundations with focused research into Network Security frameworks and optimized Data Structures. Implementing low-level technical intelligence for offensive and defensive security modules.",
        skills: ["Algorithms", "Python", "Network Architecture", "Security Auditing"]
    },
    {
        title: "Technical Architect (Open Source)",
        company: "GitHub Community",
        location: "Global Distributed",
        period: "2022 - Present",
        description: "Contributing to low-level system utilities and security tools. Focused on hardening infrastructure and auditing core codebase integrity for high-impact open-source environments.",
        skills: ["System Design", "Audit", "CI/CD", "Secure Coding"]
    }
];

export default function Experience({ theme }) {
    return (
        <section id="experience" className="py-24 relative overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex flex-col items-center text-center mb-16 space-y-4">
                        <h2 className="flex items-center text-4xl font-black text-[var(--text-primary)] uppercase tracking-[0.2em]">
                            <span className="text-cyan-500 mr-4 font-mono text-2xl opacity-60">04.</span> Career <span className="ml-3 text-gradient">Path</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                    </div>

                    <div className={`space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px ${theme === 'dark' ? 'before:bg-gradient-to-b before:from-transparent before:via-[var(--card-border)] before:to-transparent' : 'before:bg-gradient-to-b before:from-transparent before:via-[var(--cyan-primary)] before:to-transparent before:opacity-30'}`}>
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                {/* Indicator */}
                                <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-[var(--bg-primary)] border text-cyan-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-500 ${theme === 'dark' ? 'border-[var(--card-border)] shadow-2xl group-hover:border-cyan-500/50' : 'border-[var(--cyan-primary)]/30 shadow-[0_0_20px_rgba(6,182,212,0.15)] group-hover:border-cyan-500 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]'}`}>
                                    <div className="w-2 h-2 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform"></div>
                                </div>

                                {/* Content Card */}
                                <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-8 rounded-[2rem] border-white/5 transition-all duration-500 ${theme === 'dark' ? 'hover:border-cyan-500/20 group-hover:-translate-y-1' : 'hover:border-cyan-500/30 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]'}`}>
                                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                        <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">{exp.title}</h3>
                                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 text-[var(--text-secondary)] text-[10px] font-mono uppercase tracking-widest rounded-full border border-white/5">
                                            <Calendar size={12} className="text-cyan-500" />
                                            {exp.period}
                                        </span>
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
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>

    );
}
