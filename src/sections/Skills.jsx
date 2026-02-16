import { motion } from "framer-motion";
import { Code2, Server, Shield, Wrench } from "lucide-react";
import TextDecrypt from "../components/TextDecrypt";

const skillCategories = [
    {
        name: "Frontend",
        icon: Code2,
        color: "from-cyan-500 to-blue-500",
        skills: ["React/Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5/CSS3", "JavaScript ES6+"]
    },
    {
        name: "Backend",
        icon: Server,
        color: "from-green-500 to-emerald-500",
        skills: ["Node.js", "Python/FastAPI", "Express.js", "PostgreSQL", "Prisma ORM", "WebSockets"]
    },
    {
        name: "Security",
        icon: Shield,
        color: "from-red-500 to-orange-500",
        skills: ["Penetration Testing", "Network Security", "Metasploit", "Kali Linux", "Wireshark", "Burp Suite"]
    },
    {
        name: "Tools & DevOps",
        icon: Wrench,
        color: "from-purple-500 to-pink-500",
        skills: ["Git/GitHub", "Docker", "AWS", "Vercel", "Figma", "VS Code"]
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
                        <span className="ml-3 text-gradient"><TextDecrypt text="Stack" delay={500} /></span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                    <p className="text-[var(--text-secondary)] max-w-2xl font-light text-lg">
                        Tools and technologies I use to build secure, high-performance solutions
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
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                                    <category.icon className="text-white" size={24} strokeWidth={2.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-[var(--text-primary)]">{category.name}</h3>
                            </div>

                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skillIndex}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-default ${theme === 'dark'
                                                ? 'bg-white/5 border border-white/10 text-[var(--text-secondary)] hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-500/30'
                                                : 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-cyan-500/10 hover:text-cyan-600 hover:border-cyan-500/30'
                                            }`}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
