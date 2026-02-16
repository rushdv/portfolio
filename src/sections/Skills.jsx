import { motion } from "framer-motion";
import { Code2, Server, Shield, Wrench, Zap } from "lucide-react";
import TextDecrypt from "../components/TextDecrypt";

const skillCategories = [
    {
        name: "Frontend",
        icon: Code2,
        color: "from-cyan-500 to-blue-500",
        skills: [
            { name: "React/Next.js", level: 90 },
            { name: "TypeScript", level: 85 },
            { name: "Tailwind CSS", level: 95 },
            { name: "Framer Motion", level: 80 },
            { name: "HTML5/CSS3", level: 95 },
            { name: "JavaScript ES6+", level: 90 }
        ]
    },
    {
        name: "Backend",
        icon: Server,
        color: "from-green-500 to-emerald-500",
        skills: [
            { name: "Node.js", level: 85 },
            { name: "Python/FastAPI", level: 80 },
            { name: "Express.js", level: 85 },
            { name: "PostgreSQL", level: 75 },
            { name: "Prisma ORM", level: 80 },
            { name: "WebSockets", level: 70 }
        ]
    },
    {
        name: "Security",
        icon: Shield,
        color: "from-red-500 to-orange-500",
        skills: [
            { name: "Penetration Testing", level: 75 },
            { name: "Network Security", level: 80 },
            { name: "Metasploit", level: 70 },
            { name: "Kali Linux", level: 85 },
            { name: "Wireshark", level: 75 },
            { name: "Burp Suite", level: 70 }
        ]
    },
    {
        name: "Tools & DevOps",
        icon: Wrench,
        color: "from-purple-500 to-pink-500",
        skills: [
            { name: "Git/GitHub", level: 95 },
            { name: "Docker", level: 75 },
            { name: "AWS", level: 70 },
            { name: "Vercel", level: 90 },
            { name: "Figma", level: 85 },
            { name: "VS Code", level: 95 }
        ]
    }
];

export default function Skills({ theme }) {
    return (
        <section id="skills" className="py-24 relative overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-20 space-y-4"
                >
                    <h2 className="flex items-center text-4xl font-black text-[var(--text-primary)] uppercase tracking-[0.2em]">
                        <span className="text-cyan-500 mr-4 font-mono text-2xl opacity-60">02.</span>
                        <TextDecrypt text="Technical" />
                        <span className="ml-3 text-gradient"><TextDecrypt text="Arsenal" delay={500} /></span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                    <p className="text-[var(--text-secondary)] max-w-2xl font-light text-lg">
                        An ever-evolving collection of tools and technologies powering secure, high-performance solutions
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                            className={`glass-card p-8 rounded-3xl border-white/5 transition-all duration-500 ${theme === 'dark' ? 'hover:border-cyan-500/20' : 'hover:border-cyan-500/30 hover:shadow-xl'}`}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} p-0.5`}>
                                    <div className={`w-full h-full rounded-2xl flex items-center justify-center ${theme === 'dark' ? 'bg-[var(--bg-primary)]' : 'bg-white'}`}>
                                        <category.icon className={`bg-gradient-to-br ${category.color} bg-clip-text text-transparent`} size={28} strokeWidth={2.5} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[var(--text-primary)]">{category.name}</h3>
                                    <p className="text-sm text-[var(--text-secondary)] font-mono">{category.skills.length} Technologies</p>
                                </div>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-5">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="group">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-[var(--text-primary)] font-medium text-sm group-hover:text-cyan-500 transition-colors">
                                                {skill.name}
                                            </span>
                                            <span className="text-[var(--text-secondary)] font-mono text-xs">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                                className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                                            >
                                                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Overall Proficiency Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-cyan-500/5 border-cyan-500/20'}`}>
                        <Zap className="text-cyan-500" size={20} />
                        <span className="text-[var(--text-primary)] font-mono text-sm">
                            <span className="font-bold text-cyan-500">24+</span> Technologies Mastered
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
