import { motion } from "framer-motion";
import { Code2, Server, Shield, Wrench } from "lucide-react";

const skillCategories = [
    {
        name: "Frontend",
        icon: Code2,
        color: "from-cyan-500 to-blue-600",
        skills: ["React/Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5/CSS3", "JavaScript ES6+"]
    },
    {
        name: "Backend",
        icon: Server,
        color: "from-emerald-500 to-teal-600",
        skills: ["Node.js", "Python/FastAPI", "Express.js", "PostgreSQL", "Prisma ORM", "WebSockets"]
    },
    {
        name: "Security",
        icon: Shield,
        color: "from-rose-500 to-pink-600",
        skills: ["Penetration Testing", "Network Security", "Metasploit", "Kali Linux", "Wireshark", "Burp Suite"]
    },
    {
        name: "Tools & DevOps",
        icon: Wrench,
        color: "from-violet-500 to-purple-600",
        skills: ["Git/GitHub", "Docker", "AWS", "Vercel", "Figma", "VS Code"]
    }
];

export default function Skills({ theme }) {
    return (
        <section id="skills" className="py-24 relative overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center text-center mb-20 space-y-4"
                >
                    <h2 className="flex items-center text-4xl font-black text-[var(--text-primary)] uppercase tracking-[0.2em]">
                        <span className="text-cyan-500 mr-4 font-mono text-2xl opacity-60">02.</span> Technical Stack
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                    <p className="text-[var(--text-secondary)] max-w-2xl font-light text-lg">
                        Key tools and technologies used in development projects.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.15, ease: "easeOut" }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group glass-card p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 backdrop-blur-lg hover:shadow-xl hover:shadow-cyan-500/10"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-8">
                                <motion.div
                                    whileHover={{ rotate: -10, scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                                >
                                    <category.icon className="text-white" size={28} strokeWidth={2} />
                                </motion.div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300">{category.name}</h3>
                            </div>

                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skillIndex}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.04 }}
                                        whileHover={{ scale: 1.08, y: -2 }}
                                        className="px-4 py-2 rounded-lg text-sm font-medium bg-white/5 border border-white/10 text-[var(--text-secondary)] hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:text-cyan-300 hover:border-white/30 transition-all duration-300"
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
