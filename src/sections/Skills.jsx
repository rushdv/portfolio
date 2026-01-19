import { motion } from "framer-motion";

const skills = {
    Frontend: ["HTML", "CSS", "Tailwind CSS", "React", "Framer Motion", "JavaScript (ES6+)"],
    Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "GraphQL"],
    Security: ["Burp Suite", "Wireshark", "Nmap", "Metasploit", "Kali Linux", "OWASP ZAP"],
    Tools: ["Git", "Docker", "AWS", "Figma", "VS Code", "Vercel"]
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="flex items-center text-3xl font-bold text-slate-100 mb-12">
                        <span className="text-cyan-500 mr-2">04.</span> Skills & Technologies
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {Object.entries(skills).map(([category, items], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-800 p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all border-l-4 border-l-cyan-500"
                            >
                                <h3 className="text-xl font-bold text-slate-100 mb-6">{category}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 bg-slate-900 text-slate-400 rounded-lg text-sm font-medium hover:text-cyan-500 hover:scale-105 transition-all cursor-default"
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
