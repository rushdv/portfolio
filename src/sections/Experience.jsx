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

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="flex items-center text-3xl font-bold text-slate-100 mb-12">
                        <span className="text-cyan-500 mr-2">02.</span> Professional Experience
                    </h2>

                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                {/* Icon/Dot */}
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-cyan-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <Briefcase size={20} />
                                </div>

                                {/* Content Card */}
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all shadow-xl">
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                                        <h3 className="text-xl font-bold text-slate-100">{exp.title}</h3>
                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-500/10 text-cyan-500 text-xs font-mono rounded-full">
                                            <Calendar size={12} />
                                            {exp.period}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-4 font-medium">
                                        <div className="flex items-center gap-1">
                                            <Briefcase size={14} className="text-cyan-500" />
                                            {exp.company}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin size={14} className="text-cyan-500" />
                                            {exp.location}
                                        </div>
                                    </div>

                                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill) => (
                                            <span key={skill} className="px-3 py-1 bg-slate-900 border border-white/5 text-slate-400 rounded text-[10px] font-mono uppercase tracking-wider">
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
