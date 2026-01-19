import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        title: "Full-Stack Developer",
        company: "Tech Solutions Inc.",
        location: "Remote",
        period: "2023 - Present",
        description: "Leading the development of scalable web applications using React and Node.js. Implementing security best practices and mentoring junior developers.",
        skills: ["React", "Node.js", "PostgreSQL", "AWS"]
    },
    {
        title: "Junior Web Developer",
        company: "Creative Agency",
        location: "Dhaka, Bangladesh",
        period: "2021 - 2023",
        description: "Developed and maintained multiple client websites. Collaborated with designers to implement pixel-perfect user interfaces.",
        skills: ["JavaScript", "HTML/CSS", "PHP", "Tailwind CSS"]
    },
    {
        title: "Computer Science Student",
        company: "University",
        location: "Bangladesh",
        period: "2020 - Present",
        description: "Focusing on core CS principles, algorithms, and cybersecurity. Maintaining a 3.8+ GPA.",
        skills: ["Algorithms", "Data Structures", "Network Security", "Python"]
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
