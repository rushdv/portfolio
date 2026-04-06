import { motion } from "framer-motion";
import { Code2, Shield, Zap, Users } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Full-Stack", desc: "React, Node.js, Python, PostgreSQL" },
  { icon: Shield, label: "Security-First", desc: "Penetration testing & secure architecture" },
  { icon: Zap, label: "Performance", desc: "Optimized, scalable web applications" },
  { icon: Users, label: "Collaborative", desc: "Open-source contributor & team player" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function About({ theme }) {
  return (
    <section id="about" className="py-28 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center text-center mb-20 space-y-4"
        >
          <h2 className="flex items-center text-4xl font-black text-[var(--text-primary)] uppercase tracking-[0.2em]">
            <span className="text-cyan-500 mr-4 font-mono text-2xl opacity-60">01.</span> About
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6"
          >
            {[
              "I'm a Full-Stack Developer and Computer Science student based in Bangladesh, focused on building web applications that are fast, secure, and maintainable. I care deeply about clean architecture and writing code that scales.",
              "My work spans the full stack — from crafting responsive UIs with React to designing RESTful APIs with Node.js and FastAPI, backed by PostgreSQL. I also bring a security mindset to everything I build, with hands-on experience in penetration testing and network security.",
              "Outside of work, I contribute to open-source projects, write technical documentation, and continuously explore new tools and patterns that push the boundaries of what's possible on the web.",
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                className="text-[var(--text-secondary)] text-lg leading-relaxed font-light"
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 flex flex-wrap gap-3"
            >
              {["React", "Node.js", "Python", "FastAPI", "PostgreSQL", "TypeScript", "Docker", "Security"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-3 py-1.5 glass-card text-[var(--text-secondary)] text-xs font-mono rounded-lg border border-white/5 hover:text-cyan-400 hover:border-cyan-500/20 transition-colors duration-200 cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 400, damping: 18 },
                }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/25 transition-colors duration-300 group cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300"
                >
                  <Icon size={20} className="text-cyan-400" />
                </motion.div>
                <h4 className="text-[var(--text-primary)] font-bold text-sm mb-1">{label}</h4>
                <p className="text-[var(--text-secondary)] text-xs font-light leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
