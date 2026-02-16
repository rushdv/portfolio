import { motion } from "framer-motion";
import { Award, Shield, Code, Cloud, GraduationCap, CheckCircle } from "lucide-react";
import TextDecrypt from "../components/TextDecrypt";

export default function Certifications({ theme }) {
    const certifications = [
        {
            title: "Certified Ethical Hacker (CEH)",
            issuer: "EC-Council",
            date: "2024",
            icon: Shield,
            status: "In Progress",
            color: "text-red-500",
            skills: ["Penetration Testing", "Network Security", "Vulnerability Assessment"]
        },
        {
            title: "AWS Certified Developer",
            issuer: "Amazon Web Services",
            date: "2024",
            icon: Cloud,
            status: "Planned",
            color: "text-orange-500",
            skills: ["Cloud Architecture", "Serverless", "DevOps"]
        },
        {
            title: "Full-Stack Web Development",
            issuer: "freeCodeCamp",
            date: "2023",
            icon: Code,
            status: "Completed",
            color: "text-green-500",
            skills: ["React", "Node.js", "MongoDB", "APIs"]
        },
        {
            title: "Computer Science Degree",
            issuer: "University",
            date: "2025 - Present",
            icon: GraduationCap,
            status: "In Progress",
            color: "text-blue-500",
            skills: ["Algorithms", "Data Structures", "System Design"]
        }
    ];

    const achievements = [
        { title: "20+ Projects Deployed", icon: CheckCircle },
        { title: "Open Source Contributor", icon: CheckCircle },
        { title: "Security Research", icon: CheckCircle },
        { title: "Technical Writing", icon: CheckCircle }
    ];

    return (
        <section id="certifications" className="py-24 relative overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-20 space-y-4"
                >
                    <h2 className="flex items-center text-4xl font-black text-[var(--text-primary)] uppercase tracking-[0.2em]">
                        <span className="text-cyan-500 mr-4 font-mono text-2xl opacity-60">07.</span>
                        <TextDecrypt text="Certifications" />
                        <span className="ml-3 text-gradient"><TextDecrypt text="& Achievements" delay={700} /></span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                </motion.div>

                {/* Certifications Timeline */}
                <div className="space-y-8 mb-16">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`glass-card p-8 rounded-3xl border-white/5 transition-all duration-500 ${theme === 'dark' ? 'hover:border-cyan-500/20' : 'hover:border-cyan-500/30 hover:shadow-xl'}`}
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                <div className="flex items-start gap-6">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${theme === 'dark' ? 'bg-white/5' : 'bg-cyan-500/10'}`}>
                                        <cert.icon className={cert.color} size={32} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{cert.title}</h3>
                                        <div className="flex flex-wrap items-center gap-4 text-[var(--text-secondary)] text-sm mb-4">
                                            <span className="font-mono">{cert.issuer}</span>
                                            <div className="w-1 h-1 bg-[var(--card-border)] rounded-full"></div>
                                            <span className="font-mono">{cert.date}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {cert.skills.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-white/5 border border-white/5 text-[var(--text-secondary)] rounded-lg text-xs font-mono"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className={`px-4 py-2 rounded-full border text-sm font-mono ${cert.status === 'Completed'
                                        ? 'bg-green-500/10 border-green-500/30 text-green-500'
                                        : cert.status === 'In Progress'
                                            ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-500'
                                            : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-500'
                                    }`}>
                                    {cert.status}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Achievements Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8 text-center">
                        Key Achievements
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`glass-card p-6 rounded-2xl border-white/5 text-center transition-all duration-500 ${theme === 'dark' ? 'hover:border-cyan-500/20' : 'hover:border-cyan-500/30'}`}
                            >
                                <achievement.icon className="text-cyan-500 mx-auto mb-3" size={28} />
                                <div className="text-sm text-[var(--text-primary)] font-medium">{achievement.title}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
