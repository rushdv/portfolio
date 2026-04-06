import { motion } from "framer-motion";
import { Code2, Server, Shield, Wrench } from "lucide-react";

const skillCategories = [
  {
    name: "Frontend",
    icon: Code2,
    color: "from-cyan-500 to-blue-600",
    glow: "group-hover:shadow-cyan-500/10",
    border: "hover:border-cyan-500/30",
    skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5 / CSS3", "JavaScript ES6+"],
  },
  {
    name: "Backend",
    icon: Server,
    color: "from-emerald-500 to-teal-600",
    glow: "group-hover:shadow-emerald-500/10",
    border: "hover:border-emerald-500/30",
    skills: ["Node.js", "Python / FastAPI", "Express.js", "PostgreSQL", "Prisma ORM", "WebSockets"],
  },
  {
    name: "Security",
    icon: Shield,
    color: "from-rose-500 to-pink-600",
    glow: "group-hover:shadow-rose-500/10",
    border: "hover:border-rose-500/30",
    skills: ["Penetration Testing", "Network Security", "Metasploit", "Kali Linux", "Wireshark", "Burp Suite"],
  },
  {
    name: "Tools & DevOps",
    icon: Wrench,
    color: "from-violet-500 to-purple-600",
    glow: "group-hover:shadow-violet-500/10",
    border: "hover:border-violet-500/30",
    skills: ["Git / GitHub", "Docker", "AWS", "Vercel", "Figma", "VS Code"],
  },
];

export default function Skills({ theme }) {
  return (
    <section id="skills" className="py-28 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center text-center mb-20 space-y-4"
        >
          <h2 className="flex items-center text-4xl font-black text-[var(--text-primary)] uppercase tracking-[0.2em]">
            <span className="text-cyan-500 mr-4 font-mono text-2xl opacity-60">02.</span> Technical Stack
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
          />
          <p className="text-[var(--text-secondary)] max-w-xl font-light">
            Tools and technologies I use to build production-ready applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className={`group glass-card p-8 rounded-2xl border border-white/10 ${category.border} transition-colors duration-300 backdrop-blur-lg hover:shadow-2xl ${category.glow}`}
            >
              <div className="flex items-center gap-4 mb-7">
                <motion.div
                  whileHover={{ rotate: -12, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                >
                  <category.icon className="text-white" size={22} strokeWidth={2} />
                </motion.div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">{category.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 + j * 0.05, ease: "backOut" }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3.5 py-1.5 rounded-lg text-sm bg-white/5 border border-white/8 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/10 hover:border-white/15 transition-colors duration-200 font-light cursor-default"
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
